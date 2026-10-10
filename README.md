> 🚧 **本仓库已停止更新，仅作历史存档查看。**
>
> 最新的**免安装 Windows EXE 发行版**请前往新仓库：
> **👉 [leasurey/botw-save-lab-release](https://github.com/leasurey/botw-save-lab-release)**
>
> 新仓库提供打包好的 EXE（无需安装 Python）、使用说明与发布下载。本源码仓库不再接受新的 Issue / PR。

---

# BOTW 存档实验室（Wii U 1.5.0 存档编辑器）

《塞尔达传说：旷野之息》Wii U 版离线存档编辑工具。

本项目采用“终端程序 + 网页编辑器”的方式工作：终端程序负责读取、转换和写回 game_data.sav，网页编辑器负责可视化修改存档内容。

目前支持：
- savdata 旗标编辑
- 背包与物品编辑
- 马匹数据编辑
- 玩家位置编辑
- 挑战 / 任务数据编辑
- 存档完整性检查
- 写回前自动备份
- 写回后自动回读校验
- .bak 备份还原

当前版本：V13.7

目标平台：Wii U 版 1.5.0（日版 game_data.sav，signature 18203 / 0x471B）

界面语言：中文

## 快速开始

### 一、下载项目

在 GitHub 页面点击 Code → Download ZIP，或：

```
git clone https://github.com/leasurey/botw-save-lab.git
```

> ⚠️ 本项目不会在 GitHub 中提供你的个人存档，也不会重新分发部分第三方文件。

### 二、准备第三方文件

本项目需要 Mystixor/BotW-Save-Editor 提供的文件：

- BotW-Save-Editor.exe
- savdata_list471B.json
- savdata_list471A.json
- savdata_list24EE.json

放入 `core\BotW-Save-Editor\`。来源：https://github.com/Mystixor/BotW-Save-Editor

> ⚠️ 这些文件未随本仓库分发，使用前请查看上游许可。

### 三、准备自己的存档

从 Cemu 或其他 Wii U 环境取得 `game_data.sav`，复制到项目根目录（与 core、editor、启动器同级）。

### 四、启动

双击 `启动器\启动存档实验室.vbs`。进入菜单后第一次推荐直接选 `[5] 完整流程`：

```
game_data.sav → 生成 JSON → 打开网页编辑器 → 修改 → 导出 JSON → 返回终端 → 写回 → 回读校验
```

### 命令行

```
python core\main.py            # 交互菜单
python core\main.py --selftest # 回归测试
python core\main.py --version # 查看版本
pytest                        # Python 测试
```

## 写回与安全机制

- 每次写回前自动在 `backups\` 生成 `.bak`。
- 覆盖前做 SHA-256 校验，需用户明确确认。
- 恢复：关闭 Cemu，把对应 `.bak` 重命名为 `game_data.sav`。
- 彻底禁止覆盖：设置环境变量 `BOTW_NO_OVERWRITE_ORIG=1`。

## 目录结构

```
├─ 启动器\   (vbs / ps1)
├─ core\
│  ├─ main.py
│  ├─ tests\
│  └─ BotW-Save-Editor\
├─ editor\
│  ├─ 塞尔达存档修改器.html
│  ├─ challenges.json / challenges_data.js
│  └─ assets\
├─ backups\  (运行时生成)
├─ game_data.sav
├─ pytest.ini / LICENSE / README.md
```

## 第三方致谢

- **Mystixor/BotW-Save-Editor**：SAV 格式研究、字段表、上游 C++ 转换器；SAV⇄JSON 的 Python 实现为本项目独立完成。
- **uking_saves**：gamedata.json 布局参考。
- **MrCheeze/botw-waypoint-map**：部分传送点坐标。
- **Marc Robledo/savegame-editors**：护甲染色解析、装备映射、editor/assets 图标。
- **kailous/Botw-Savediter**：部分中文物品名称与分类。

## 版权与许可

部分游戏数据版权归 Nintendo 及相应权利人。本项目为社区非官方工具，与 Nintendo 无官方隶属关系。开发使用了 AI 辅助。原创代码采用 MIT License；第三方内容遵循各自原始许可，详见 NOTICES。

## 注意事项

- 主要针对 Wii U 1.5.0 日版存档，其他版本/地区可能不兼容。
- 修改前备份原始存档；不要在 Cemu 占用时覆盖。
- 不上传用户个人存档，使用后果自负。
