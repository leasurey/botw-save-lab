# 更新日志

本文件记录 **BOTW 存档实验室** 每个版本的变更。版本唯一权威值见 `core/main.py` 的 `APP_VERSION`。

> 历史版本的发布说明见发布仓库：[leasurey/botw-save-lab-release](https://github.com/leasurey/botw-save-lab-release)

---

## V13.9 — 2026-10-17

本次更新来自一次**全量缺陷审查**（报告：`BUG_REVIEW_REPORT.md`，17 条），修复了「修改静默不写回」「撤销不可用」两类硬伤，并把导出拆成**两条互不干扰的通道**。同时包含此前已在代码中完成、但未随版本发布的 P0/P1 安全加固（备份失败即中止、原子替换写档、写回令牌）。

### ✨ 导出拆成两条通道（核心改动）

| 通道 | 入口 | 行为 |
|---|---|---|
| **① 自动写回**（推荐） | 顶栏 `🎯 一键导出（自动写回）` | 本地服务模式下 POST `/__botw_write`，直接覆盖 `backups/<日期>/` 四个 JSON —— 终端立刻能看到改动 |
| **② 手动导出** | 各 `💾 导出 XXX / 保存修改` 按钮 | 浏览器下载/另存为，文件落在 Downloads；页面明确提示「终端看不到，请自行覆盖或用①」 |

顶栏新增**导出模式徽章**（自动写回 `backups/…` / 手动下载），文件级状态标签区分 **✓已写回** 与 **↓已下载(未写回)**。
两条通道各自记账：**手动下载不再压制自动写回**。

### 🐛 修复（按严重度）

**P0 —— 修改静默不写回**

1. **导出状态被下载路径污染**：旧版无论「写回工作目录」还是「下载到 Downloads」都标记为“已导出”，
   「一键导出」因此跳过这些文件；而终端只在“savdata 和 inventory 都没变”时才去 Downloads 找回，
   horses/position 更是没有找回入口。→ 现在 `written` / `manual` 分开记账，一键导出只跳过真正写回的。
2. **写端点 `200 + errors` 被当成成功**：文件名不在白名单时服务端记 errors 却回 200，前端忽略 errors
   并把失败文件也标记为已导出（既不写回也不下载）。→ 服务端逐文件交代结果、`ok` 只在全成功时为 true；
   前端对失败项**自动转下载**并如实提示。

**P1 —— 撤销 / 一致性**

3. **撤销按钮只跟 savdata 走**：`updateToolbar` 旧版只看 `editHistory`，纯背包会话里按钮永远灰着 →
   V14 的独立撤销栈点不动。现在按「四个栈任一非空」判定，背包/马匹/位置的改动都会刷新按钮。
4. **马匹页/位置页撤销打错目标**：`undoMultiTab` 里写的是 `"horse"` / `"position"`，实际视图名是
   `"horses"` / `"pos"` → 分支永不命中。另外 `undoPosition()` 调用的 `renderPosition()` 根本不存在
   （函数名是 `renderPos`），一旦走到就是 ReferenceError。→ 全部改正。
5. **撤销会吞掉未入栈的操作**：新增 / 删除 / 批量 / 快速添加 / 图鉴添加 / 修饰符 / 强度 / 染色 / 升星
   全部改为**先拍快照再改**；`undoInventory` 补上漏掉的 `invModValueChanges`（撤销现在也会回滚修饰强度）。
6. **护甲染色改完不刷新**：`invSlotHTML` 旧版优先读导入时的 `item.dye`，改完染色卡片又显示回旧值
   （界面与写回内容不一致）。→ 改为优先看 `invChanges`。
7. **关闭页面误报未保存**：只要载入过 position.json 就弹确认框。→ 改为按“真实未写回改动数”判定。
8. **马匹亲密度非 10 倍数显示为 0%**：下拉列表只有 0/10/…/100，真实值 15% 时无选项命中。→ 缺项时动态插入当前值。

**P2/P3 —— 加固与清理**

9. `BOTW_AUTO_DETECT=1` 自动检测**死循环**：`wait_for_user_done` 里 `"json_path" in dir()` 取不到流程里的
   变量，targets 恒为空。→ 改为参数化 `wait_for_user_done(paths=[...])`，[5] 流程传入四个 JSON。
10. 写端点目录校验放行 `dir="backups"`（可写 backups 根）→ 现在明确要求“日期子目录”。
11. 文件名白名单对**非标准存档名**（`my save.sav.json` 之类）一律拒绝 → 一键导出静默降级为下载。
    → 改为规则判定：`<任意存档名>.sav.json` 或 `inventory/horses/position.json`。
12. savdata 条数保护只看文件名（改名存档退化成 ≥10 条）→ 新增“**条数必须与目标 SAV 原档一致**”校验
    （非常规注入需显式设 `BOTW_ALLOW_ENTRY_MISMATCH=1`）。
13. `PlayerSavePos` 硬编码“必须恰好 3 条”→ 改为“至少 3 条，只写前 3 条”。
14. 终端找回逻辑统一为 `offer_recover_missing()`：一次询问覆盖四个文件，[3]/[4]/[5] 全部接入。
15. 状态栏文案 `backups/backups/<日期>` → 修正；`[5]` 只改马匹/位置时补上写前备份 `before_horses_pos.bak`。
16. 删掉死代码 `find_backup()`；`__BOTW_CHAL__.version`、README/使用说明/pytest.ini/ps1 兜底值版本号同步。
17. 新增物品时若名字在字段表里没有 `IsGet_` 旗标，终端会明确警告（幽灵物品）；网页手输名字不在译名表时先确认；
    「🩺 体检」新增「背包里有幽灵物品」检查项。

### ✅ 验证

```text
pytest                                3/3 通过
node core/tests/test_chal_writeback.js / test_full_user_flow.js   通过
SAV ⇄ JSON 往返                        SHA-256 完全一致
条数校验                               截断 JSON 被拒；改名存档同样被拒；BOTW_ALLOW_ENTRY_MISMATCH=1 可放行
BOTW_AUTO_DETECT=1                     改动 JSON 后 2.0 秒自动继续（旧版死循环）
写端点                                 无令牌 403 / 跨站 Origin 403 / dir=backups 拒绝 / 自定义存档名放行
网页端到端（jsdom + 真实夹具）          21/21：双通道记账、部分失败转下载、撤销目标、染色刷新、横幅基线、状态文案
真实 [5] 完整流程（菜单入口，两轮）        ✅ SAV→JSON→HTTP 写回→自动检测→三方写回→原档保护，全链路通过
```

### 其它

- 终端 `[3]/[4]/[5]/[6]` 的步骤提示改为推荐「🎯 一键导出（自动写回）」（旧文案还在教用户点「💾 导出 JSON」覆盖）；
- 「✓ 读到 N 个物品」不再把 `_capacity` 容量标记算进物品数（244 → 243）；
- 「第一步：应用 savdata 修改（C++ Import）」→「第一步：savdata 写回（JSON → SAV）」（实际走的是 Python 转换器）。

### 🧹 收尾：清理分发物 + 备用转换器实测

**工作目录清理**（释放 31.95 MB，全部进回收站，可恢复）

- 删除 `core/backups/`（10-16 的两次旧流程产物，含个人存档副本）；
- 删除根目录 `BotW-Save-Editor/`（与 `core/BotW-Save-Editor/` **4 个文件 SHA 完全一致**的重复副本，运行时只用 core/ 那份）；
- 删除 `core/__pycache__/`、`debug.log`。

> 项目目录自本版起**不再包含任何 `.sav` / 备份**；原档请放在项目根（运行时按需重建 `backups/`）。

**备用转换器（C++ exe）实测结论**

| 方向 | 结果 |
|---|---|
| JSON → SAV（导入） | ✅ 可用。改卢比 7777→8888 后走 C++ 回退，SAV 里确实读到 8888，写前备份正常 |
| SAV → JSON（导出） | ❌ **必崩** `0xC0000409`（`STATUS_STACK_BUFFER_OVERRUN`）。短路径 `C:\bs` 同样复现，与存档内容、路径长度无关 |

→ 因此导出方向**实际只有 Python 转换器一条路**。据此补了两道保险：

1. **字段表缺失/损坏不再中断导出**：`_savdata_names()` 失败时退化为 `Unknown_<哈希>` 命名并打印警告。
   实测：删掉全部字段表后仍导出 128,399 条，再写回 SAV 与原档**逐字节一致**（SHA-256 相同）。
2. **失败诊断可执行**：C++ 回退崩溃时不再只说“未成功”，而是明确指出 `0xC0000409`、说明与存档无关、
   提示以 Python 为准并保留报错反馈；同时清理 C++ 可能留下的空 JSON，避免被后续流程误用。

**回归入口调整**：三个 Python 测试新增 `BOTW_TEST_SAV=<路径>`，Node 测试沿用 `BOTW_TEST_JSON`。
清理个人存档后，`pytest` 无需把任何 `.sav` 放进项目目录即可运行（测试只在临时目录写副本）。

### 📦 打包（免安装文件夹，与发行仓库同构）

新增对 PyInstaller 冻结运行的支持。发行形态与 V13.8 的 zip 完全一致（顶层 `BOTW存档实验室V13.9/`，
共 46 个条目）：

```text
BOTW存档实验室V13.9\
├─ botw_lab.exe          ← 双击启动
├─ _internal\            ← Python 运行时
├─ editor\               ← 编辑器 + 图标 + 挑战数据
├─ BotW-Save-Editor\     ← C++ 兜底转换器 + 字段表
└─ 使用说明.txt
```

- **路径分流**：冻结后 `__file__` 在运行时目录里，不能再靠它推项目根。现在按 `sys.frozen` 分开：
  资源从 `sys._MEIPASS`（onedir 即 `_internal/`）读，找不到时回落到 exe 同级；
  用户数据（`game_data.sav`、`backups/`）固定在 **exe 同目录**。
- **新增 `--selfcheck`**：打印模式、程序目录、资源目录、编辑器、转换器、字段表、备份目录，
  并检查资源完整性；返回码 0/1，可直接用于发布前验收。
- **打包版禁用 `--selftest`**：它依赖源码、pytest 与 Node，冻结后没有意义，改为提示回源码目录运行。
- `.gitignore` 增加 `dist/`、`build/`、`*.spec`（可复现，不入库）。

实测（Windows 10 / PyInstaller 6.22.3 / Python 3.13.14）：

```text
文件夹大小                    28 MB（zip 10.79 MB）
--version                    BOTW Save Lab V13.9 · Main: …\_internal\main.py
--selfcheck                  frozen ✓ 资源完整（编辑器/转换器/三张字段表）
[1] 真实转档                  1,027,208 字节 → game_data.sav.json
                             signature=18203 · savdata=128,399 条 · 与源码版一致
结构对比（对 v13.8 zip）       46 项对 46 项；差异仅 OpenSSL DLL 命名
                             （libcrypto-3-x64.dll → libcrypto-3.dll）
```

---

## V13.8 — 2026-10-17

本次更新解决「网页按钮点不动」的问题，并把「一键导出」从「下载四个文件再手工搬运」改成「直接写回 `backups/<日期>/`」。

### 🐛 修复

**网页编辑器所有按钮点击无反应**

根因是作用域缺陷，不是 CSS 或遮罩层问题。

`savLoaded` / `invLoaded` / `horseLoaded` / `posLoaded` 这四个「已载入」标志被 `const` 声明在 `refreshStatus()` 函数体**内部**，但有三处 IIFE **顶层**代码要读它们：

| 位置 | 代码 |
|---|---|
| `undoMultiTab()` | `if(editHistory.length && activeView === "home" && savLoaded)` |
| `beforeunload` | `const anyLoaded = savLoaded || invLoaded || horseLoaded || posLoaded` |
| `#export-all` onclick | `if(savLoaded && textCache && !exportedState.sav)…` |

这四个名字在那些位置根本不在作用域内，一旦执行到就抛：

```text
Uncaught ReferenceError: savLoaded is not defined
```

**修法**：把四个标志提升到 IIFE 顶层声明，`refreshStatus()` 内改为纯赋值。加载时已有 `refreshStatus()` 首次调用，标志会被正常初始化。

| 文件 | 改动 |
|---|---|
| `editor/塞尔达存档修改器.html` | 顶层新增 `let savLoaded=false, invLoaded=false, horseLoaded=false, posLoaded=false;` |
| `editor/塞尔达存档修改器.html` | `refreshStatus()` 内四行 `const x = …` 改为 `x = …` |

### ✨ 新增

**「🎯 一键导出」直接写回 `backups/<日期>/`**

原先该按钮只是依次点四个导出按钮，触发浏览器下载，用户还得自己把文件搬回 `backups/`。现在在**本地服务模式**下会把四份内容直接覆盖回去，省掉这一步。

| 文件 | 改动 |
|---|---|
| `core/main.py` | 新增 `POST /__botw_write` 端点（`_SilentHTTPHandler.do_POST`） |
| `core/main.py` | 新增 `_safe_write_target()` 路径白名单校验 |
| `editor/塞尔达存档修改器.html` | 自动导入桥暴露 `__BOTW_EXPORT_DIR__` / `__BOTW_EXPORT_FILES__` |
| `editor/塞尔达存档修改器.html` | 重写 `#export-all`：新增 `exportAllTargets()` 等函数，内存组装后 POST |

目标文件（与终端读回的完全一致）：

```text
backups/<日期>/game_data.sav.json
backups/<日期>/inventory.json
backups/<日期>/horses.json
backups/<日期>/position.json
```

> savdata 的文件名不是写死的：`exportAllSavName()` 优先用导入时的原文件名，其次从自动导入清单里挑出非 `inventory`/`horses`/`position` 的那个。

### 🔒 安全

写回端点会接受网页传来的路径，因此做了白名单约束：

- **目录**必须落在 `backups/` 之下（`realpath` + `commonpath` 判定，防 `..` 穿越）
- **文件名**必须是纯文件名，拒绝 `/`、`\`、`..`、空值
- 单次请求体上限 **64 MB**；服务仅监听 `127.0.0.1`

### ⚠️ 兼容性

双击 `file://` 打开网页时没有本地服务端点，`#export-all` **自动退回**原来的浏览器下载流程，行为与 V13.7 完全一致。

### ✅ 验证

服务端端点 9 项测试全部通过：

```text
PASS  正常写回 4 个文件 -> HTTP200 + 落盘
PASS  重复写回覆盖旧内容
PASS  文件名 ../ 被拒
PASS  文件名 ..\ 被拒
PASS  dir 越出 backups 被拒
PASS  dir=. 被拒
PASS  dir 为空被拒
PASS  content 非字符串被拒
PASS  错误路径 -> 404
```

浏览器端到端（headless Edge + 本地服务 + `?auto=1`，使用 `core/backups/2026-10-16` 真实夹具）：

```text
POST /__botw_write -> 200
  WRITTEN  inventory.json / horses.json / position.json / game_data.sav.json
共 4/4 个文件被一键写回

写回后内容校验：
  inventory.json  仍是数组，物品数 244 -> 244，首项一致
  horses.json     6 匹
  position.json   x/y/z 不变
```

---

## V13.7

详见发布仓库的对应说明：[leasurey/botw-save-lab-release](https://github.com/leasurey/botw-save-lab-release)

本版本的主要内容（摘自代码内注释）：`APP_VERSION` 收敛为唯一权威值，ps1 启动器改为运行时从 `core/main.py` 正则读取版本号拼横幅。
