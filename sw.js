// Hip-Hop 训练营 Service Worker — 首次联网打开时缓存全部页面+视频，之后离线可用
// v2 修复：浏览器 <video> 播视频时会发 Range（分段）请求，必须回 206 分段响应，
// 直接回缓存的完整 200 响应会让播放器一直缓冲在 0:00。
const CACHE = 'hiphop-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './videos/bounce.mp4',
  './videos/two-step.mp4',
  './videos/top-rock.mp4',
  './videos/body-roll.mp4',
  './videos/arm-wave.mp4',
  './videos/chest-pop.mp4'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const range = e.request.headers.get('range');
  if (range) {
    // 分段请求：从缓存里切出对应字节，回 206；缓存里没有就直接走网络（不缓存分段响应）
    e.respondWith((async () => {
      const hit = await caches.match(e.request, { ignoreSearch: true });
      if (hit) {
        const buf = await hit.arrayBuffer();
        const m = /bytes=(\d*)-(\d*)/.exec(range);
        const start = m && m[1] ? parseInt(m[1], 10) : 0;
        const end = m && m[2] ? parseInt(m[2], 10) : buf.byteLength - 1;
        const sliced = buf.slice(start, Math.min(end, buf.byteLength - 1) + 1);
        return new Response(sliced, {
          status: 206,
          headers: {
            'Content-Type': hit.headers.get('Content-Type') || 'video/mp4',
            'Content-Range': 'bytes ' + start + '-' + (start + sliced.byteLength - 1) + '/' + buf.byteLength,
            'Content-Length': String(sliced.byteLength),
            'Accept-Ranges': 'bytes'
          }
        });
      }
      return fetch(e.request);
    })());
    return;
  }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
