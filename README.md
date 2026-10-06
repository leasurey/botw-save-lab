# BOTW 存档实验室（Wii U 1.5.0 存档编辑器）

《塞尔达传说：旷野之息》Wii U 版存档编辑工具：终端负责 SAV ⇄ JSON 转换与写回，网页编辑器负责可视化修改。支持 **savdata 旗标 / 背包 / 马匹 / 位置 / 挑战任务 / 存档体检** 全流程，写回前自动备份、写后回读校验，误操作可还原。

- 版本：**V13.7**（版本唯一权威值见 `core/main.py` 的 `APP_VERSION`）
- 目标平台：Wii U 1.5.0（日版 `game_data.sav`，signature 18203 / 0x471B）
- 界面语言：中文

---

## 快速开始

1. 把 Cemu 等模拟器的 `game_data.sav` 放到**项目根目录**。
2. 双击 `启动器\启动存档实验室.vbs`（会请求管理员权限）。
3. 菜单选 **[5] 完整流程 ⭐**：自动生成 savdata / inventory / horses / position 四个 JSON 并打开网页编辑器。
4. 网页改完导出覆盖 → 回终端按提示写回。每一步写回前都会自动 `.bak`。

命令行（可选）：

```text
python core\main.py             交互菜单
python core\main.py --selftest  跑全部回归测试（Python + Node）
python core\main.py --version   打印版本
pytest                          收集并运行 core\tests 下的 Python 回归
```

## 目录结构

```text
├─ 启动器\            vbs 提权 + ps1 自检并运行 core\main.py
├─ core\
│   ├─ main.py        主程序（SAV⇄JSON 转换、背包/马匹/位置读写、备份、校验）
│   ├─ tests\         回归测试（pytest 可收集）
│   └─ BotW-Save-Editor\   上游转换器与字段表（见下方「第三方组件」，不随仓库分发）
├─ editor\
│   ├─ 塞尔达存档修改器.html   网页编辑器（单文件，file:// 双击可用）
│   ├─ challenges.json         挑战 / 任务数据库（原始数据）
│   ├─ challenges_data.js      同上，离线加载形态（由刷新脚本生成）
│   └─ assets\                 物品图标（23 张）
├─ backups\           运行时生成的日期文件夹与 .bak（已忽略，不上传）
├─ game_data.sav      你的存档（已忽略，不上传）
├─ pre_release_check.ps1 / .bat   发布前自检（只读扫描；加 -InitGit 才动 git）
├─ set-git-identity.bat / init-git.bat / first-commit.bat   维护者一键：设身份 / 建库 / 首提
├─ pytest.ini
├─ LICENSE
└─ README.md
```

## 不随仓库分发的文件

以下文件被 `.gitignore` 排除，克隆后需要自行准备：

| 文件 | 说明 |
|---|---|
| `game_data.sav` / `backups/` | 个人存档与备份，绝不上传 |
| `.venv/` | 本机 Python 虚拟环境（含本机路径）。自行 `python -m venv .venv` 创建 |
| `core\BotW-Save-Editor\BotW-Save-Editor.exe` | 上游 C++ 转换器。**程序启动自检要求它存在**（缺失时 `main.py` 直接退出）；运行时作为 Python 转换器失败时的兜底 |
| `core\BotW-Save-Editor\savdata_list*.json` | 字段表（SAV 解析**必需**，否则转换时取不到字段名） |

> ⚠️ **exe 与字段表都必须自行补齐**：从上游项目 [Mystixor/BotW-Save-Editor](https://github.com/Mystixor/BotW-Save-Editor) 获取 `BotW-Save-Editor.exe` 与 `savdata_list471B.json`（常用）、`savdata_list471A.json`、`savdata_list24EE.json`，放到 `core\BotW-Save-Editor\` 下，程序才能正常启动并解析存档字段名。使用前请自行确认该上游项目的 LICENSE 是否满足你的使用场景。

---

## 第三方致谢与来源声明

本项目的代码实现为原创（SAV 转换按公开格式描述独立实现），但建立在以下社区成果之上：

| 来源 | 使用内容 | 使用方式 |
|---|---|---|
| [Mystixor/BotW-Save-Editor](https://github.com/Mystixor/BotW-Save-Editor) | SAV 文件格式定义、`savdata_list*.json` 字段表、备用转换器 exe | 格式为**按上游源码等价重写**（`core/main.py` 注释有溯源）；exe 与数据表为原样复制，**不随本仓库分发** |
| uking_saves 权威布局表（gamedata.json） | 背包 / 马匹 / 位置等存档字段哈希（如 `PorchItem 0x5F283289`） | 使用第三方数据；代码注释逐处标注出处 |
| [MrCheeze/botw-waypoint-map](https://github.com/MrCheeze/botw-waypoint-map) | `LOCATION_DB` 传送点 X/Z 坐标（游戏 LocationMarker 转储） | 使用第三方数据（`editor` 内 HTML 注释有署名） |
| [Marc Robledo / savegame-editors](https://github.com/MarcRobledo/savegame-editors) | ① 护甲染色字段解析方法 ② `REPEAT_ARMOR_ICONS` 相似护甲映射表 ③ **`editor/assets/` 全部 23 张物品图标 PNG** | ① 仅参考方法 ② 使用第三方数据 ③ 图标取自其 BOTW Savegame Editor，致谢 Marc Robledo |
| kailous / Botw-Savediter | `ITEM_NAMES` 中文物品译名、精选分组设计 | 使用第三方数据 / 参考设计（HTML 注释有署名） |

**游戏数据声明**：物品译名、任务日志中文文本、旗标名等提取自《塞尔达传说：旷野之息》Wii U 1.5.0 游戏文件，相关版权归 **Nintendo** 所有。本仓库仅供社区研究、学习使用，不用于商业用途。

**AI 辅助声明**：本项目开发过程中使用了 AI 编程助手辅助（AI-assisted development）。

## 许可证

见 [LICENSE](LICENSE)（MIT）。注意 LICENSE 正文的「附加声明」：MIT 仅覆盖本项目原创代码；第三方文件按上游原始许可；游戏数据版权归 Nintendo。

## 备份与还原

- 每次写回前自动生成 `backups\<存档名>.<标记>.bak`（同名自动加时分秒）。
- 还原：把对应 `.bak` 改名覆盖回 `game_data.sav` 即可。
- 覆盖任何"活档"前，程序会要求显式输入 `y` 并打印双方 SHA-256；设 `BOTW_NO_OVERWRITE_ORIG=1` 可全局禁止覆盖。
