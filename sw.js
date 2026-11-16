// Hip-Hop 训练营 Service Worker v3
// 修复：v1/v2 在 install 时要等 21MB 视频全部预缓存完才激活，旧版迟迟换不掉，
// 且 v1 对视频 Range 请求回完整 200 导致播放器卡 0:00。
// v3：install 只缓存页面外壳，立刻激活接管；视频在后台慢慢缓存，
// 视频 Range 请求：缓存里有就切 206 回去，没有就直接走网络（不缓存分段响应）。
const CACHE = 'hiphop-v3';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg'
];
const VIDEOS = [
  './videos/bounce.mp4',
  './videos/two-step.mp4',
  './videos/top-rock.mp4',
  './videos/body-roll.mp4',
  './videos/arm-wave.mp4',
  './videos/chest-pop.mp4'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
  // 后台缓存视频，不阻塞激活；离线前打开过一次页面，视频就会慢慢存好
  caches.open(CACHE).then(c => c.addAll(VIDEOS)).catch(() => {});
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const range = e.request.headers.get('range');
  if (range) {
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
