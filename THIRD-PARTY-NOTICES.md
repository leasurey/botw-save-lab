# 第三方许可声明 THIRD-PARTY-NOTICES.md

**本文件记录随本项目分发的所有第三方组件的授权信息。**

---

## 1. BotW-Save-Editor.exe 与 savdata_list*.json

**来源:** https://github.com/Mystixor/BotW-Save-Editor
**组件:** core\BotW-Save-Editor\BotW-Save-Editor.exe、core\BotW-Save-Editor\savdata_list*.json
**许可证:** [MIT License](https://opensource.org/licenses/MIT)（来自上游仓库，请查阅其 LICENSE 文件）。
**版权声明:** Copyright (c) 2023 Mystixor。

> **注意:** 本仓库**不包含**原始的二进制文件与字段表；它们是启动时自动自 Disk 加载的。如果您没有这些文件，程序将无法正常启动，请从上游仓库获取。

---

## 2. 编辑器界面 HTML 与 JavaScript

**来源:** 本文件直接生成（由 make_notices.ps1 / make_notices.py 脚本产生）。
**许可证:** Apache-2.0（本仓库适用许可，见本项目根目录的 LICENSE 文件）。

---

## 3. 图标资源

**来源:** editor\assets\*.png
**许可证:** **不明**。建议重新审视图标来源或申请明确授权；当前仅供内部开发使用，**不随最终发行包分发**（请保留这些文件以供项目持续开发）。

---

## 4. Python 标准库与 pip 包

**来源:** Python 编程语言标准库 + 通过 .venv 安装的 pip 包（例如 json、struct、hashlib 等）。
**许可证:** Python 软件许可协议 (PSF) + 各个第三方包各自许可（如 requests、pillow 等）。所有这些包均为 Python 默认分发的一部分，遵循各自项目许可，符合 OSI 标准。

---

## 声明

- 本项目的分发包**不包含**上述第三方二进制文件（BotW-Save-Editor.exe）与图标资源——它们不在 .gitignore 中 tracked，您需要自行补充。
- 对于所有第三方组件，请核实其原始仓库的完整 LICENSE 文件，确保您符合其条款后再用于商业或 redistribute 用途。
- 如果您希望移除或替换某些组件（如图标），请联系项目维护者。

---

*生成时间:* 2026-10-16T21:26:51.545Z
*生成脚本:* 请运行根目录下的 make_notices.ps1（PowerShell）或 make_notices.py（Python）来更新此文件。