# Hip-Hop 训练营 · 动作指导

零基础 4 周 Hip-Hop 训练网页：每周计划、每天训练内容、带视频的动作教学、打卡。支持离线使用。

## 里面有什么

- `index.html` / `styles.css` / `app.js` — 网页本体
- `videos/` — 6 个核心动作示范视频（Bounce、Two-Step、Top Rock、Body Roll、Arm Wave、Chest Pop），共约 21MB
- `manifest.webmanifest` + `sw.js` — PWA：添加到主屏幕、离线缓存
- `icon.svg` — 应用图标

## 训练计划（默认零基础）

- 每周 5 练 2 休，每天 30–40 分钟
- 第 1 周：找到律动（Bounce + Two-Step）
- 第 2 周：身体控制（Body Roll + Chest Pop）
- 第 3 周：脚下功夫（Top Rock）
- 第 4 周：6 个动作串成 32 拍组合

每天在「今日」页看当天内容，点动作看视频+要点+分步跟练，练完点「今日打卡」。

打卡数据只存在手机浏览器里（localStorage），不上传、不需要账号。

## 部署到 GitHub Pages（5 分钟）

1. 在 GitHub 新建一个仓库，例如 `hiphop-training`，选 Public
2. 把这个文件夹里的**全部文件**上传到仓库根目录（不要多套一层文件夹，`index.html` 必须在根目录）
   - 网页上传：仓库页 → Add file → Upload files，拖入全部文件
   - 或用 Git：`git init` / `git add .` / `git commit -m "hiphop training"` / `git push`
3. 仓库 → Settings → Pages → Build and deployment → Source 选 `Deploy from a branch`，Branch 选 `main` / `/ (root)` → Save
4. 等 1–2 分钟，打开 `https://你的用户名.github.io/hiphop-training/` 就能看到

## 装到手机上，离线也能用

1. 手机联网，用浏览器（Chrome / Safari）打开上面那个网址
2. 等视频都加载过一次（首次打开要联网，Service Worker 会把页面+视频缓存到手机）
3. 浏览器菜单 →「添加到主屏幕」/「安装应用」
4. 以后点主屏幕图标打开，不联网也能看视频、看计划、打卡

注意：
- 必须是 HTTPS 网址，GitHub Pages 自带 HTTPS，没问题
- 首次打开请在 Wi-Fi 下等 1 分钟，让 6 个视频缓存完；之后离线打开，视频直接从缓存播
- 换手机 / 清浏览器数据，打卡记录会丢（存在本机），建议每周截图备份一次日历

## 想改计划？

改 `app.js` 里的 `WEEKS`（周计划）和 `MOVES`（动作库）就行，改完重新上传到 GitHub，手机刷新一次就更新。
动作视频想换成自己的：把新视频放进 `videos/`，在 `app.js` 里把对应动作的 `video` 路径改成新文件名，同时在 `sw.js` 的 `ASSETS` 里加上它。
