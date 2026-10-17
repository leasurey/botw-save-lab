# BOTW 存档实验室 · 潜在缺陷全面审查报告

- **审查对象**：`core/main.py`（3251 行）、`editor/塞尔达存档修改器.html`（20401 行）、`启动器/*`、`core/tests/*`、`pre_release_check.ps1`
- **版本**：`APP_VERSION = V13.8`
- **审查日期**：2026-10-17
- **审查方式**：
  1. 全量静态通读（主程序 6 条流程 + 网页 10 个标签页的全部写回/导出/撤销逻辑）
  2. 定向探针（真实存档只读往返、`/__botw_write` 端点实测、`BOTW_AUTO_DETECT` 行为复现）
  3. 网页脚本行为仿真（jsdom 加载真实 HTML + 真实 JSON 夹具，模拟点击/改值/导出/撤销）
  4. 现有回归：`pytest` 3/3 通过，`node core/tests/*.js` 2/2 通过

> 结论先行：**没有发现会直接写坏存档的 P0（写回链本身是可靠的）**；但发现 **2 处会让用户修改“静默不写回”的高风险缺陷**、**4 处撤销/显示不一致缺陷**，以及若干加固项。全部条目均给出根因行号与可复现路径。

---

## 一、结论一览

| # | 严重度 | 位置 | 一句话问题 | 是否实测复现 |
|---|---|---|---|---|
| 1 | 🔴 高 | `html:3633 / 3702-3708 / 4809 / 5014 / 4518` | 「导出/保存」在**下载回退**路径下仍标记“已导出”，导致「一键导出」跳过该文件；终端只在“两个都没变”时才去 Downloads 找回 → **修改静默不写回**（Firefox/Safari 必现） | ✅ 仿真 |
| 2 | 🔴 高 | `html:3757-3767` + `main.py:767-772` | 写端点返回 `HTTP 200 + errors` 时，前端**忽略 errors 并把失败文件标记为已导出** → 既没写回也没下载，静默丢失 | ✅ 实测端点 + 仿真 |
| 3 | 🟠 中高 | `html:2194-2203 / 3291-3306` | 顶部「撤销」按钮的可用状态只跟 **savdata** 改动走；纯背包/马匹/位置会话里按钮一直 `disabled` → **V14 独立撤销栈点不动** | ✅ 仿真 |
| 4 | 🟠 中高 | `html:3298-3299 / 1862` | 马匹页/位置页的撤销分支写成 `"horse"` / `"position"`（实际视图名是 `"horses"` / `"pos"`）→ 分支永不命中，撤销打到 savdata/背包头上；`undoPosition()` 调用的 `renderPosition()` 根本不存在（潜在 ReferenceError） | ✅ 仿真 |
| 5 | 🟠 中高 | `html:1860 / 4062 / 4243` | 撤销是“快照整体替换”：**新增 / 删除 / 批量改 / 快速添加**都不入栈，撤销时被一并吞掉；「修饰强度(ValueSp)」也不回滚 | ✅ 仿真 |
| 6 | 🟠 中 | `html:4092-4094 / 4351-4368` | 护甲**染色**改完卡片不刷新（显示回到旧值），界面与实际写回内容不一致 | ✅ 仿真 |
| 7 | 🟡 中低 | `main.py:155` | `BOTW_AUTO_DETECT=1` 的自动检测**永远不触发**（函数内 `dir()` 看不到全局 `json_path`，targets 恒为空）→ 卡死在 sleep 循环，只能 Ctrl+C | ✅ 复现 |
| 8 | 🟡 中低 | `html:3382` | 只要载入过 position.json（即使一个字没改），关闭/刷新页面就弹“你有未导出的修改” | ✅ 仿真 |
| 9 | 🟡 中低 | `html:4699-4701` | 马匹亲密度非 10 的倍数（夹具里真有 15%）在下拉里显示为 **0%** | ✅ 仿真 |
| 10 | 🟡 中低 | `main.py:670-689 / 631` | 写端点目录校验放行 `dir="backups"`（可写 backups 根，非仅日期目录）；文件名白名单对**非标准存档名**（`xxx.sav.json`）一律拒绝 → 一键导出静默降级为下载 | ✅ 探针 |
| 11 | 🟢 低 | `html:3760` | 状态栏文案 `backups/backups/<日期>`（`res.dir` 已含 `backups/` 又拼了一次） | ✅ 仿真 |
| 12 | 🟢 低 | `main.py:1065-1070` | savdata 条数下限按**文件名**判断：只有叫 `game_data.sav` 才要求 ≥10 万条，改名存档的保护退化成 ≥10 条 | 代码级 |
| 13 | 🟢 低 | `main.py:2263-2266` | `PlayerSavePos` 条目数被硬编码为“必须恰好 3 条”，否则整条位置功能拒绝写入 | 代码级 |
| 14 | 🟢 低 | `main.py:324-334`、`html:5499`、`README.md:5` | 死代码 `find_backup()`；`__BOTW_CHAL__.version` 仍写 `V12.3.1`；README 版本号还停在 V13.7 | 代码级 |
| 15 | 🟢 低 | `html:4243 / 4466-4485 / 4404-4424` | 无实质修改的“提交”也压撤销快照；导入后立即显示“✓ 已保存”（其实只是内存态） | 代码级 |
| 16 | 🟢 低 | `html:4549-4583` | 「添加物品」手输名字无 IsGet 校验，打错即幽灵物品；体检也不会报“旗标不存在” | 代码级 |
| 17 | 🟢 低 | `html:3710-3722` | 一键导出的下载回退用三层 `setTimeout(600ms)` 连点 4 个按钮，装有 FSApi 时会弹多个保存框/时序错乱 | 代码级 |

---

## 二、详细分析

### 🔴 1. 「已导出」状态被下载路径污染 → 修改静默不写回

**现象**：在 Firefox / Safari（无 File System Access API）里，用户按提示点了「💾 导出 JSON」「💾 保存修改」「💾 导出 horses.json」「💾 导出 position.json」，文件进了 `Downloads/`；随后点「🎯 一键导出」——该文件**不会被写回 `backups/<日期>/`**，终端检测不到变化，收尾却打印“🎉 全部完成”。

**根因**（三处叠加）：

1. 导出按钮在**下载回退**分支里照样把状态标记为“已导出”：

   | 行 | 代码 | 说明 |
   |---|---|---|
   | `3631-3638` | `else { fallbackDownload(blob, name); exportedState.sav = true; … }` | 无 FSApi 时，savdata 只下载到 Downloads，却标记已写回 |
   | `4514-4519` | `catch(err){ … downloadInvText(text); markInvSaved(text); }` | inventory 的「保存修改」同样 |
   | `4809` / `5014` | `exportedState.horse = true;` / `exportedState.pos = true;` | 这两个按钮**只走下载**，必标记 |
   | `4529` | `markInvSaved(text)` | 「导出 inventory.json」同样 |

2. 「一键导出」据此跳过这些文件：`exportAllTargets()` 里 `!exportedState.sav` / `!exportedState.inv` …（`3689-3700`）。

3. 终端只在这两种情形去 Downloads 找回：`main.py:2429`（[3]，仅 savdata）、`2561`（[4]，仅 inventory）、`2790-2791`（[5]，**仅当 savdata 与 inventory 两个都没变**）。→ 只要用户还改了背包，「[5] 完整流程」就不会去 Downloads 找 savdata；而 **horses.json / position.json 完全没有找回入口**。

**实测**（jsdom 仿真，真实夹具）：点「导出 JSON」后首页标签变成 `savdata ✓已导出`；再点「一键导出」，POST 内容 = `inventory.json, horses.json, position.json`，**savdata 缺席**。

**建议**：
- 下载回退分支不要置 `exportedState.* = true`（或改为 `exportedToDownloads` 独立状态，并让「一键导出」在“已下载但未写回”时仍包含该文件）；
- `offer_recover_from_downloads` 增加 horses/position 两个调用点，或在 [5] 里对四个文件统一做一次“文件未变但浏览器说改过”的提示。

---

### 🔴 2. 写端点「200 + errors」被前端当成功

**现象**：文件名不在白名单（例如存档改名成 `my_save.sav` → `my_save.sav.json`）时，服务端把该文件记进 `errors`，同时因为另外 3 个写成功而返回 **HTTP 200**。

**根因**：
- `main.py:767-772`：`if errors and not written → 400`，否则一律 `200`（`ok:true` + `errors:[…]`）。
- `html:3757-3761`：前端只在 `!res.ok` 时抛错；成功分支**直接忽略 `res.errors`**，并 `exportAllMarkExported(all)` 把**全部**目标标记为已导出；状态栏也只显示 `res.written`。

**实测**：
- 端点实发（探针）：`{"ok":true,"written":["inventory.json"],"errors":["my_save.sav.json：文件名不在白名单"]}`，HTTP 200。
- 仿真：状态栏只报 `inventory.json, horses.json, position.json`；首页标签随后变成“所有改动均已导出或尚无改动”——**失败的 savdata 被静默标记成成功**，且没有任何下载兜底。

**建议**：`errors` 非空即视为部分失败并触发下载回退（或至少把 errors 拼进状态栏 + 不标记失败文件）；服务端可改为 207 语义或让 `ok` 跟随 `errors`。

---

### 🟠 3. 撤销按钮只跟 savdata 改动走（背包/马匹/位置撤销不可达）

**根因**：`updateToolbar()`（`2194-2203`）只依据 `editHistory.length`（= savdata 修改记录数）设置 `undo/undo2/revert/clearHist` 的 `disabled`；而 `undoMultiTab()`（`3291-3306`）明明支持多栈。背包/马匹/位置的改动不会调用 `updateToolbar()`，按钮保持初始的 `disabled`。

**实测**：导入四个 JSON → 改背包数量 1 处 → 状态栏显示“已修改槽位 #0（大师之剑）：500 → 507”，但 `#undo.disabled` 仍为 `true`，点击无任何反应；做一次 savdata 编辑后按钮才变可用。

**影响**：V14 新增的“独立撤销栈”在**只改背包/马匹/位置**的常见会话里完全不可用（这也是下文第 5 条难以触发的另一半原因）。

**建议**：`updateToolbar` 的判据改成“四个栈任一非空”，或把 `updateToolbar()` 挂到 `updateInvMeta/updatePosMeta/renderHorses` 里。

---

### 🟠 4. 马匹/位置页撤销“打错目标” + `renderPosition` 未定义

**根因**：
- 标签页视图名是 `horses` / `pos`（HTML `1045-1046`，`ensureRendered` 也用 `case "horses"/"pos"`）；
- 但 `undoMultiTab()` 写的是 `activeView === "horse"`（`3298`）与 `activeView === "position"`（`3299`）→ **两个分支永不命中**，落到后面的兜底链：先撤 savdata、再撤背包……
- `undoPosition()`（`1862`）调用的 `renderPosition()` **在整个文件里不存在**（唯一的渲染函数叫 `renderPos()`，`4862`）→ 一旦真的被调用就是 `ReferenceError`（与 V13.8 修的 `savLoaded` 属同一类作用域/命名事故）。

**实测**：改马匹亲密度 → 改背包 → 改卢比（让按钮可用）→ 回到马匹页点「撤销」：状态栏变成 `已撤销：CurrentRupee`，**马匹的修改原封不动**（徽标仍是“1 匹修改”）。
位置页同理：按钮此时又是 `disabled`（无 savdata 改动），因此 `renderPosition` 崩溃路径目前“不可达”，属潜伏缺陷。

**建议**：`"horse"→"horses"`、`"position"→"pos"`；`renderPosition()→renderPos()`。修好后务必再验一次位置撤销。

---

### 🟠 5. 撤销会吞掉未入栈的操作（新增/删除/批量/快速添加）

**根因**：`undoInventory()`（`1860`）用快照**整体替换** `invData / invChanges / invModChanges / invNameChanges`；而快照只在 `startEditInv()` 的 `commit()` 里压入（`4243`）。以下路径**从不压栈**：`inv-del` 删除/移除、`batchApply` 批量、`quickAddItem` 快速添加、`codexAddToBackpack` 图鉴添加、`inv-add-confirm` 添加。另外 `undoInventory()` **没有恢复 `invModValueChanges`**（快照里也没有这个字段）→ 修饰强度改动不会被撤销。

**实测**：243 件 → 新增 1 件（244）→ 点撤销 → 回到 243，状态栏“↩️ 已撤销背包修改。”，**新增物品被静默丢弃**（用户会以为只撤销了数量那条）。

**建议**：所有会改 `invData` 的动作统一走“先压栈再改”；`undoInventory` 补上 `invModValueChanges`。

---

### 🟠 6. 护甲染色改完不刷新（显示 ≠ 写回）

**根因**：`invSlotHTML()`（`4092-4094`）计算 `dyeVal` 时**优先取导入时的 `item.dye`**，只有 `item.dye === undefined` 才回退到 `curVal`（含 `invChanges`）；而染色下拉的 change 处理器（`4351-4368`）对老物品只写 `invChanges[slot]`，既没更新 `item.value` 也没更新 `item.dye`。（同一个函数里，修饰符用 `invModChanges`、升星用 `invNameChanges`，唯独染色漏了。）

**实测**（真实夹具槽位 31）：卡片显示 `0·未染色` → 下拉选 `5` → 卡片仍显示 `0·未染色`，下拉回弹到 `0`；但导出内容里 `value` 已被改成 5 → **界面看起来“没生效”，实际已生效**，用户极易重复改或改错。

**建议**：`const dyeVal = isArmor ? ((slot in invChanges) ? invChanges[slot] : (item.dye !== undefined ? item.dye : -1)) : -1;`（或染色时同步写 `item.value/item.dye`）。

---

### 🟡 7. `BOTW_AUTO_DETECT=1` 的自动检测是死循环

**根因**：`main.py:155`

```python
targets = [json_path] if "json_path" in dir() else []
```

函数内 `dir()` 返回的是**本函数局部命名空间**，而 `json_path` 从来不是 `wait_for_user_done()` 的局部变量（它是各流程函数的局部变量），所以 `targets` 恒为空 → `while True: sleep(1); for t in []` **永不退出**（只有 Ctrl+C 能跳出，跳出后进入手动等待）。

**实测**：把 `json_path` 直接塞成模块全局后调用，2 秒后改动 JSON mtime，8 秒内没有“自动继续”，进程卡在循环里。

**建议**：把目标路径作为参数传入（`wait_for_user_done(paths)`），或在流程里显式赋值。

---

### 🟡 8. 关闭页面时的“未保存”提示误报

**根因**：`html:3379-3387`。`hasUnsaved` 在“刚导入、什么都没改”时也为真（`exportedState.* === false`），第三个条件里又用 `Object.keys(pData||{}).length > 0` 判断“位置有改动”→ 只要载入过 position.json 就触发。

**实测**：四个文件导入后**零修改**，直接派发 `beforeunload` → `defaultPrevented = true`（会弹确认框）。

**建议**：条件改为真正的“有未导出改动”（`invPendingCount() + editHistory.length + Object.keys(hChanges).length + posChangedCount() > 0`）。

---

### 🟡 9. 马匹亲密度非 10 倍数 → 下拉显示 0%

**根因**：`renderHorses()`（`4699-4701`）只提供 `[0,10,…,100]` 选项，且仅在 `v === h.bonding` 时标 `selected`。夹具里 `slot 2` 的真实值是 **15%**，没有任何选项命中 → 浏览器显示第一项 `0%`。

**实测**：下拉当前值依次为 `100,100,0,100,100`（真实 `100,100,15,100,100`）。

**影响**：纯显示错误（不改数据时必须用户手动动过这个下拉才会写入），但会误导用户以为亲密度被清零。

**建议**：值不在列表时插入一项 `15%` 并选中（或把列表换成步进 1 的数字输入）。

---

### 🟡 10. 写端点白名单的两处边界

1. **目录越界**：`_safe_write_target()`（`main.py:670-689`）用 `commonpath` 判定，`dir="backups"`（以及 `backups/../backups`）与 `backups_root` 相等 → **放行**，可写 `backups/inventory.json`；CHANGELOG 声称的约束是“必须落在 backups/ 之下（日期目录）”。
2. **文件名**：`_SAFE_WRITE_NAME`（`main.py:631`）只放行 `game_data|caption|option.sav.json` 与 `[A-Za-z0-9][\w-]{0,64}.json`。实测 `my_backup.sav.json`、`game_data - 副本.sav.json` 之类**一律拒绝**；而 `main.py` 生成的 JSON 名 = 存档名 + `.json`（用户把存档改名就会踩中），此时一键导出会“降级成浏览器下载”，与第 1 条叠加就是静默丢失。
   另注：该正则的注释（“只允许存档名.json 和三个固定工作文件”）与实现（允许任意简单名 `.json`）不符。

**建议**：目录判定改为“realpath 必须以 `backups/` + 分隔符开头且不等于 backups 根”；文件名白名单放宽为“`*.sav.json` + 三个工作文件 + 不允许路径分隔符”，或让服务端直接复用 `main.py` 里已知的四类文件名做集合校验。

---

### 🟢 11-17. 低风险与加固项

11. **状态栏文案**：`html:3760` `"✅ 已直接写回 backups/" + (res.dir || dir)`，而服务端返回的 `dir` 本身就是 `backups/2026-10-17` → 显示成 `backups/backups/2026-10-17`。
12. **savdata 条数下限按文件名判定**（`main.py:1065-1070`）：`min_entries = 100000 if sav_name == "game_data.sav" else 10`。改名存档（或 caption/option 误判）时，“≥10 万条”这道防呆网退化成 ≥10 条，坏 JSON 更容易被放过。
13. **位置字段条目数硬编码**（`main.py:2263-2266`）：`slots[HASH_PLAYER_SAVE_POS] != 3` 直接拒绝。多版本/异常存档会出现“明明能读不能写”，建议改成 `>= 3` 并只写前 3 条。
14. **陈旧信息**：`find_backup()`（`main.py:324-334`）全项目 0 处调用（死代码）；`window.__BOTW_CHAL__.version = "V12.3.1"`（`html:5499`）；`README.md:5` 仍写 `V13.7`，而 `APP_VERSION`/使用说明/HTML 标题都是 `V13.8`。
15. **撤销/保存状态的小瑕疵**：`commit()` 在“值没变”的路径上也会先压快照（`4243`），空点一次就多一条撤销记录；`importInventory()` 里 `invSavedSnapshot = currentInvText()`（`4414`）导致刚导入就显示“✓ 已保存”，实际只在内存里；`updateInvSaveChip()` 同理对比的是内存文本，不校验磁盘。
16. **幽灵物品风险**：「添加物品」允许手输名字（`html:4549-4583`），只要不是 `[A-Za-z0-9_]` 就拦，但拼错的合法名（如 `Item_Fruit_Z`）会被加进背包且不会点亮任何旗标；`main.py` 的 `add_item_to_sav` 在表里找不到 `IsGet_<name>` 时静默跳过点灯；体检的“背包所有权”一项只在**旗标存在且 ≠1** 时报警，旗标不存在不报。建议：加名字时对 `savdata_list471B` 做一次存在性校验，体检增加“旗标不存在”档。
17. **一键导出的下载回退**（`html:3710-3722`）：三层 `setTimeout(…, 600)` 连点 4 个导出按钮；在**有** FSApi 但目录不可写（例如 `[4]/[6]` 流程里 `dir="."`）时，第一个 `saveFilePicker` 对话框与后续下载并发，容易出现“框还没关，文件已经下完了”的混乱。建议改为串行 `await`。

---

## 三、已验证健壮 / 不用动的地方

| 项目 | 结论 |
|---|---|
| SAV ⇄ JSON 往返 | 项目根真实存档 1,027,208 字节往返 **SHA-256 完全一致** |
| Python 转换器写档 | 先写 `.writetmp` → 校验字节数 → `os.replace` 原子替换；备份失败即中止（`BackupError`） |
| 背包写回顺序（V11.8） | 「改名/改值 → 修饰符 → 倒序删除 → 新增」顺序正确，`pytest` + `node` 回归全绿 |
| 位置写回 | 只改目标哈希的 4 字节、写后回读校验、失败自动恢复原字节 |
| `/__botw_write` 鉴权 | 实测：无令牌 → 403；跨站 Origin → 403；带令牌同源 → 200；`dir=..`、`dir=.`、带路径分隔符的文件名全部拒绝 |
| HTML 引用完整性 | 脚本引用的 102 个元素 id 全部存在，无 null 崩溃点 |
| 备份策略 | 每次写回前 `.bak` + SHA-256 校验；覆盖活档需显式 `y`；`BOTW_NO_OVERWRITE_ORIG=1` 全局熔断 |
| 测试 | `pytest` 3/3、`node core/tests/*.js` 2/2 通过（本次审查未发现回归失败） |

---

## 四、建议的修复批次

1. **第一批（数据不丢）**：#1、#2 —— 导出状态语义 + errors 处理。这两条决定“用户改了但没写回”会不会发生。
2. **第二批（撤销可用）**：#3、#4、#5 —— 按钮启用条件、视图名/函数名、入栈策略。
3. **第三批（显示一致）**：#6、#8、#9、#11。
4. **第四批（加固）**：#7、#10、#12~#17。

> 备注：本报告只做审查，未改动任何项目代码。所有探针均在临时目录/内存中进行，`game_data.sav` 与 `backups/` 未被修改。

---

# 附：修复记录（V13.9，2026-10-17）

本报告 17 条**已全部修复**，详见 `CHANGELOG.md` 的 V13.9 条目。

| # | 状态 | 修复方式（摘要） |
|---|---|---|
| 1 | ✅ 已修 | 导出状态拆 `written` / `manual` 双通道；手动下载不再压制自动写回；终端统一 `offer_recover_missing()` 覆盖四个文件；[5] 变更检测覆盖四个 JSON；只改马匹/位置也补写前备份 |
| 2 | ✅ 已修 | 服务端逐文件交代 written/errors、`ok` 仅全成功为 true；前端只标记服务端确认写成功的文件，失败项自动转下载并提示 |
| 3 | ✅ 已修 | `updateToolbar` 按“四个撤销栈任一非空”判定；背包/马匹/位置改动都会刷新按钮 |
| 4 | ✅ 已修 | `"horse"→"horses"`、`"position"→"pos"`；`renderPosition()→renderPos()` |
| 5 | ✅ 已修 | 新增/删除/批量/快速添加/图鉴添加/修饰符/强度/染色/升星全部先拍快照；`undoInventory` 补 `invModValueChanges` |
| 6 | ✅ 已修 | `dyeVal` 优先取 `invChanges`（并对 >15 的值回落为“不可染”） |
| 7 | ✅ 已修 | `wait_for_user_done(paths=...)` 参数化，[5] 传入四个 JSON；无目标时立即返回而不是死循环 |
| 8 | ✅ 已修 | `beforeunload` 改为统计真实未写回改动数 |
| 9 | ✅ 已修 | 亲密度下拉在值不在列表时动态插入当前值 |
| 10 | ✅ 已修 | `_safe_write_target` 拒绝 backups 根；文件名白名单改为规则判定（`*.sav.json` + 三个工作文件） |
| 11 | ✅ 已修 | 状态栏改为 `✅ 自动写回完成：<res.dir>`（不再重复拼 `backups/`） |
| 12 | ✅ 已修 | 新增“条数必须与目标 SAV 原档一致”校验（`BOTW_ALLOW_ENTRY_MISMATCH=1` 可显式放行） |
| 13 | ✅ 已修 | `PlayerSavePos` 改为“至少 3 条”，只写前 3 条 |
| 14 | ✅ 已修 | 删除 `find_backup()`；版本号全线同步 V13.9（APP_VERSION / README / 使用说明 / HTML 标题徽章 / pytest.ini / ps1 兜底 / `__BOTW_CHAL__.version` 语义） |
| 15 | ✅ 已修 | 无变化提交不再压快照；导入后背包状态显示“— 未修改”；`updateInvSaveChip` 三态 |
| 16 | ✅ 已修 | 网页手输未知物品名先确认；终端 `add_item_to_sav` 对缺失 IsGet 旗标告警；体检新增“幽灵物品”检查项 |
| 17 | ✅ 已修 | 一键导出的下载回退改为一次性串行下载，不再连点保存对话框 |

## 回归验证（V13.9）

```text
pytest                                              3/3 通过
node core/tests/test_chal_writeback.js              通过
node core/tests/test_full_user_flow.js              通过
SAV ⇄ JSON 往返（真实 1,027,208 字节存档）            SHA-256 完全一致
网页端到端（jsdom + 真实夹具）                        21/21 通过
```

---

# 附二：真实完整流程实测（2026-10-17）

在真实项目目录跑了**两轮** `[5] 完整流程`（第二轮走真实菜单入口 `main()` → 选 `[5]`）。
只把“人的操作”脚本化（选菜单、在网页里编辑、最后一步回答 `n`），
**业务代码 / 本地 HTTP 服务 / 磁盘写入全部是真的**；浏览器由真实 HTTP 客户端代替
（GET 页面、GET 四个 JSON、POST `/__botw_write`，带真令牌与同源 Origin）。

| 环节 | 实测结果 |
|---|---|
| SAV → JSON（Python 转换器） | 1,027,208 字节 → `game_data.sav.json`，无告警 |
| 读背包 / 马匹 / 位置 | **243 件**物品 / 5 匹马 / MainField X=428.0 Y=400.0 Z=-2137.5 |
| 打开编辑器 | 本地服务 `:53335`，URL 携带 `token` + `dir=backups/2026-10-17_01` + 四个文件名 |
| GET 编辑器页面 | HTTP 200（1.2 MB+，标题含 V13.9） |
| GET 四个 JSON（模拟 `?auto=1`） | 4/4 HTTP 200 |
| POST `/__botw_write`（模拟「🎯 一键导出」） | **HTTP 200，written=4，errors=[]** |
| `BOTW_AUTO_DETECT=1` 自动继续 | **1 秒内**检测到 JSON 变化并自动继续（修复前此处死循环） |
| 变更检测 | 四个文件全部「✓ 有修改」（旧版只看 savdata+inventory） |
| savdata 写回 | 条数校验通过 → JSON → SAV 成功 |
| 背包 / 马匹 / 位置写回 | 数量 243 槽位 / 亲密度 1 匹 / 位置 1 字节 |
| 原档保护 | 打印双方 SHA-256 → 询问覆盖 → 回答 `n` → 原档未被修改 |

写回结果逐项核对（在 `backups/<日期>_NN/` 的工作副本上）：

```text
背包槽位 0 数量        501      （原 500 + 1）
马匹 #3 亲密度          35%      （原 15% → 35%）
位置 X                 432.990  （原 427.990 + 5）
savdata CurrentRupee   8888     （原 7777）
原档 SHA-256           1947675093e9…（与测试前完全一致）
```

测试产物（两个日期目录 + 4 个 `.bak`）已在测试后清理，`backups/2026-10-17/` 与
`game_data.sav` 保持测试前原样。

> 实测还顺手修掉两处“文档与实现不一致”：终端 [`3`]/[`4`]/[`5`]/[`6`] 的步骤提示
> 仍教用户点「💾 导出 JSON」覆盖（旧逻辑），已改为推荐「🎯 一键导出（自动写回）」；
> 「✓ 读到 244 个物品」把容量标记也算进去了，已改为 243。


---

## 收尾复核（清理工作目录后）：备用转换器到底能不能用

删除 `core/backups/`（旧流程产物）与根目录重复的 `BotW-Save-Editor/` 之后，用真实存档（外部只读副本）复验「Python 转换器故障 → 回退 C++ exe」这条链路：

| 方向 | 触发方式 | 结果 |
|---|---|---|
| **JSON → SAV** | 把 `python_json_to_sav` 强制抛异常 → `run_import` 回退 | ✅ **可用**：卢比 7777 → 8888 确实写入 SAV；写前 `.bak` 正常；返回 `True` |
| **SAV → JSON** | 把 `python_sav_to_json` 强制抛异常 → `run_export` 回退 | ❌ **不可用**：exe 返回 `0xC0000409`（STATUS_STACK_BUFFER_OVERRUN），不产出 JSON；换 `C:/bs` 短路径同样复现，与存档内容/路径长度无关 |

**结论：导出方向实际只有 Python 内置转换器一条路。** 据此补了两道保险（已实测）：

1. **字段表缺失不再中断导出** —— `_savdata_names()` 读取失败时退化为 `Unknown_<哈希>` 命名并告警。
   模拟删除全部字段表：仍导出 128,399 条，写回 SAV 与原档 **SHA-256 完全一致**。
2. **失败诊断** —— exe 崩溃时明确打印 `0xC0000409`、说明与存档无关、提示以 Python 为准；
   同时清理 C++ 可能留下的空 JSON，避免污染后续流程。

**回归入口**：三个 Python 测试新增 `BOTW_TEST_SAV=<路径>`，项目目录无需再存放任何 `.sav`。
本次复核结果：`pytest 3/3`、Node 2/2 均通过（Node 用 `BOTW_TEST_JSON` 指向临时夹具）。

> 说明：上文「真实完整流程」一节引用的 `backups/2026-10-17_01` 等工作副本，已随本次清理删除；
> 删除项全部进入回收站，如需回滚可从回收站还原。
