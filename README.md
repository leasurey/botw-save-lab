BOTW 存档实验室（Wii U 1.5.0 存档编辑器）

《塞尔达传说：旷野之息》Wii U 版离线存档编辑工具。

本项目采用“终端程序 + 网页编辑器”的方式工作：终端程序负责读取、转换和写回 game_data.sav，网页编辑器负责可视化修改存档内容。

目前支持：
	•	savdata 旗标编辑
	•	背包与物品编辑
	•	马匹数据编辑
	•	玩家位置编辑
	•	挑战 / 任务数据编辑
	•	存档完整性检查
	•	写回前自动备份
	•	写回后自动回读校验
	•	.bak 备份还原

当前版本：V13.7

目标平台：Wii U 版 1.5.0（日版 game_data.sav，signature 18203 / 0x471B）

界面语言：中文

快速开始

一、下载项目

在 GitHub 页面点击：

Code → Download ZIP

下载后解压到一个你方便找到的位置。

也可以使用 Git：

git clone https://github.com/leasurey/botw-save-lab.git

	⚠️ 本项目不会在 GitHub 中提供你的个人存档，也不会重新分发部分第三方文件。首次运行前需要按照下面的说明自行准备。

二、准备第三方文件

本项目目前需要 Mystixor/BotW-Save-Editor 提供的以下文件：

BotW-Save-Editor.exe
savdata_list471B.json
savdata_list471A.json
savdata_list24EE.json

请将它们放入：

core\BotW-Save-Editor\

这些文件来自上游项目：

https://github.com/Mystixor/BotW-Save-Editor

其中 savdata_list471B.json 是 Wii U 1.5.0 存档解析常用的字段表。

	⚠️ 这些文件没有随本仓库分发。使用前请自行查看上游项目的许可说明，并确认符合你的使用场景。

准备完成后，目录大致应该是：

BOTW-Save-Lab\
├─ core\
│  ├─ main.py
│  └─ BotW-Save-Editor\
│     ├─ BotW-Save-Editor.exe
│     ├─ savdata_list471B.json
│     ├─ savdata_list471A.json
│     └─ savdata_list24EE.json
├─ editor\
├─ 启动器\
└─ ...

三、准备自己的存档

从 Cemu 或其他 Wii U 环境中取得你的：

game_data.sav

将它复制到项目根目录。

也就是和 core、editor、启动器 文件夹放在同一级：

BOTW-Save-Lab\
├─ game_data.sav    ← 你的存档
├─ core\
├─ editor\
├─ 启动器\
└─ ...

不要把自己的 game_data.sav 上传到 GitHub。

项目已经通过 .gitignore 忽略存档和 backups 目录。

四、启动存档实验室

双击：

启动器\启动存档实验室.vbs

启动器会进行环境检查，然后运行主程序。

如果 Windows 弹出管理员权限确认，请允许。

进入菜单后，推荐第一次使用直接选择：

[5] 完整流程 ⭐

完整流程会依次完成：

game_data.sav
      ↓
生成 JSON 数据
      ↓
打开网页编辑器
      ↓
修改存档
      ↓
导出修改后的 JSON
      ↓
返回终端
      ↓
写回 game_data.sav
      ↓
回读校验

五、如何修改存档

启动后选择：

[5] 完整流程 ⭐

程序会自动读取存档并生成编辑器需要的数据。

随后会打开：

editor\塞尔达存档修改器.html

网页编辑器可以直接使用，无需联网，也不需要安装 Node.js。

在网页中选择需要修改的项目，例如：
	•	背包
	•	装备
	•	马匹
	•	玩家位置
	•	savdata 旗标
	•	挑战 / 任务

修改完成后，按照编辑器页面提供的导出按钮导出修改后的 JSON 文件。

然后返回终端，按照程序提示继续执行写回。

六、写回存档与安全机制

程序不会直接无条件覆盖存档。

每次写回前都会自动创建 .bak 备份，例如：

backups\
└─ game_data.sav.xxx.bak

同时会进行 SHA-256 校验，并要求用户明确确认后才会覆盖原始存档。

如果写回后发现问题，可以使用对应的 .bak 文件恢复。

恢复方法：
	1.	关闭 Cemu 或其他正在使用存档的程序。
	2.	找到对应的 .bak 文件。
	3.	将原来的 game_data.sav 备份到其他位置。
	4.	将 .bak 重命名为 game_data.sav。
	5.	再启动游戏。

如果希望彻底禁止程序覆盖原始存档，可以设置：

BOTW_NO_OVERWRITE_ORIG=1

命令行用法

如果不想使用启动器，也可以直接运行：

python core\main.py

进入交互式菜单。

运行完整回归测试：

python core\main.py --selftest

查看当前版本：

python core\main.py --version

运行 Python 回归测试：

pytest

目录结构

├─ 启动器\
│   └─ vbs / ps1 启动脚本
│
├─ core\
│   ├─ main.py
│   ├─ tests\
│   └─ BotW-Save-Editor\
│       └─ 上游转换器与字段表
│
├─ editor\
│   ├─ 塞尔达存档修改器.html
│   ├─ challenges.json
│   ├─ challenges_data.js
│   └─ assets\
│
├─ backups\
│   └─ 运行时生成的备份文件
│
├─ game_data.sav
├─ pytest.ini
├─ LICENSE
└─ README.md

其中 game_data.sav、backups、.venv、缓存文件以及 Windows 快捷方式均不会进入 GitHub 仓库。

第三方致谢与来源

本项目的核心代码为独立实现，同时参考和使用了多个 BOTW 社区研究项目的数据、格式研究和公开资料。

Mystixor / BotW-Save-Editor

项目：

https://github.com/Mystixor/BotW-Save-Editor

使用内容：
	•	BOTW SAV 文件格式研究
	•	savdata_list*.json 字段表
	•	上游 C++ 转换器

其中 SAV ⇄ JSON 的 Python 实现是本项目根据公开格式研究进行的独立实现，并非直接复制上游 C++ 源代码。

BotW-Save-Editor.exe 和字段表不随本仓库分发。

uking_saves

使用其公开的 gamedata.json 布局数据作为部分背包、马匹、位置等字段哈希的参考来源。

MrCheeze / botw-waypoint-map

项目：

https://github.com/MrCheeze/botw-waypoint-map

使用其 BOTW LocationMarker / LocationPointer 数据中的部分传送点坐标。

Marc Robledo / savegame-editors

项目：

https://github.com/MarcRobledo/savegame-editors

使用内容包括：
	•	护甲染色字段解析方法参考
	•	部分装备映射数据
	•	editor/assets/ 中的 BOTW 物品图标资源

上述内容并非本项目原创素材。

kailous / Botw-Savediter

使用其公开数据中的部分中文物品名称及相关分类设计。

游戏数据与版权声明

本项目中的部分物品名称、任务文本、旗标名称以及其他游戏相关数据来源于《塞尔达传说：旷野之息》Wii U 版游戏数据。

相关游戏内容的版权归 Nintendo 及其他相应权利人所有。

本项目是社区制作的非官方研究与编辑工具，与 Nintendo、任天堂或上述第三方项目作者不存在官方合作或隶属关系。

AI 辅助开发声明

本项目开发过程中使用了 AI 编程助手进行代码生成、调试、逆向分析、测试和文档辅助。

AI 辅助开发不改变本项目对第三方代码、数据和资源的来源声明。

许可证

本项目原创代码采用 MIT License。

完整许可内容请参阅：

LICENSE

需要注意：

MIT License 仅适用于本项目可以授权的原创代码及相关原创内容。

第三方代码、数据、图片以及游戏相关内容不因本项目采用 MIT License 而自动获得 MIT 授权，其使用应遵循各自原始来源的许可和版权要求。

注意事项
	•	本项目目前主要针对 Wii U 1.5.0 日版 game_data.sav。
	•	不同游戏版本、地区或存档格式可能存在兼容性差异。
	•	修改存档前建议保留原始存档副本。
	•	不要在 Cemu 正在运行并使用存档时直接覆盖存档文件。
	•	本项目不会上传或提供用户个人存档。
	•	使用本工具修改存档产生的后果由使用者自行承担。

如果发现问题，欢迎提交 Issue，并尽可能提供错误信息和复现步骤。

请勿上传包含个人信息或真实存档内容的文件。

你现在直接把这版贴进去，然后自己真的从 GitHub 页面点一次 Code → Download ZIP，照 README 从头跑到 [5] 完整流程。这一次如果你自己都能无障碍跑通，那 README 基本就算过关了。
