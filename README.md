# ticker-reports

KID 标的调查报告归档（加密 / 美股）。

- 本地目录：`~/projects/ticker-reports`
- 规范文件名：`TICKER-YYYYMMDD.html`
- 同日（UTC+8）同一标的不重复生成
- 索引：`index.html` + `manifest.json`
- 公开访问：https://kiddd.top/reports/（Cloudflare Worker `ticker-reports`，路由 `kiddd.top/reports*`，静态文件在 `cf-publish/reports/`）
