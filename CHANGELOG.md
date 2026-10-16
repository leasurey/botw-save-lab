# 更新日志

本文件记录 **BOTW 存档实验室** 每个版本的变更。版本唯一权威值见 `core/main.py` 的 `APP_VERSION`。

> 历史版本的发布说明见发布仓库：[leasurey/botw-save-lab-release](https://github.com/leasurey/botw-save-lab-release)

---

## V13.8 — 2026-10-17

本次更新解决「网页按钮点不动」的问题，并把「一键导出」从「下载四个文件再手工搬运」改成「直接写回 `backups/<日期>/`」。

### 🐛 修复

**网页编辑器所有按钮点击无反应**

根因是作用域缺陷，不是 CSS 或遮罩层问题。`savLoaded` / `invLoaded` / `horseLoaded` / `posLoaded` 这四个「已载入」标志被 `const` 声明在 `refreshStatus()` 函数体内部，但有三处 IIFE 顶层代码要读它们（`undoMultiTab()`、`beforeunload`、`#export-all` onclick），执行到时抛 `Uncaught ReferenceError: savLoaded is not defined`。

修法：把四个标志提升到 IIFE 顶层声明，`refreshStatus()` 内改为纯赋值。

### ✨ 新增

「🎯 一键导出」在本地服务模式下把四份内容直接覆盖回 `backups/<日期>/`：`game_data.sav.json`、`inventory.json`、`horses.json`、`position.json`。新增 `POST /__botw_write` 端点与 `_safe_write_target()` 白名单校验（目录必须落在 `backups/` 之下，纯文件名，请求体上限 64 MB，仅监听 `127.0.0.1`）。

### ⚠️ 兼容性

双击 `file://` 打开网页时没有本地服务端点，`#export-all` 自动退回原来的浏览器下载流程，行为同 V13.7。

---

## V13.7

详见发布仓库说明：[leasurey/botw-save-lab-release](https://github.com/leasurey/botw-save-lab-release)

主要内容：`APP_VERSION` 收敛为唯一权威值，ps1 启动器改为运行时从 `core/main.py` 正则读取版本号拼横幅。
