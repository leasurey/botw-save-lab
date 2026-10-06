"""
============================================================
 BOTW 塞尔达存档实验室 · core/main.py（版本唯一权威定义见「0.-1 APP_VERSION」）
============================================================

【V11.1 相比 V11 的修复】（全部经过真实存档探测验证）

1. 装备标记哈希修正：
   旧版用 0xD095066A → 实际是 AlbumPictureSize（相册数组），所以"已装备"全是乱的。
   正确哈希是 0x824892BE（PorchItem_EquipFlag，bool_array × 420），已实测：
   读出的已装备物品与游戏内完全一致。

2. 修饰符三线分离：
   旧版只用 PorchSword_FlagSp(0x57EE221D) 一个数组。
   实际有三套（来自 uking_saves 权威布局表）：
       PorchSword_FlagSp 0x57EE221D / PorchSword_ValueSp 0xA6D926BC  （剑类 × 20）
       PorchBow_FlagSp   0x0CBF052A / PorchBow_ValueSp   0x1E3FD294  （弓 × 14）
       PorchShield_FlagSp 0xC5238D2B / PorchShield_ValueSp 0x69F17E8A（盾 × 20）
   每套数组的下标 = 该类别物品在背包里的相对序号（不是背包槽位号）。

3. 护甲染色：
   染色颜色就存在 PorchItem_Value1 里（0~15 = 染色编号，-1 = 不可染色）。
   这是 Marc Robledo 官方编辑器的做法。inventory.json 的护甲条目
   现在会带一个 dye 字段（0~15），改 value 就等于改染色。

4. 写回前 JSON 校验：
   inventory.json 和 savdata JSON 在动存档之前先做结构校验，
   坏 JSON 直接拒绝，避免写崩存档。

【V11.4 修复】

1. HTML：新增物品改用唯一临时槽位（-1001 起递减）。旧版全部用
   slot=-1 做变更键，多个新增物品改数量/升星会互相覆盖，
   导出后串值写进存档（配套改动在 HTML 编辑器里）。
2. savdata 条数校验按存档类型区分：caption/option 不再被
   "≥10 万条"一刀切拒绝，菜单 [2] 现在可以正常导回它们。
3. inventory.json 校验补充：物品名必须 ASCII、slot 必须是整数
   （负数 = 新增占位），手改 JSON 出错在零写入阶段就被拦截。
4. 背包写回中途失败时自动从 .bak 恢复，不再留下"改一半"的存档。
5. HTML 编辑器定位优先匹配「修改器/botw」命名，目录里出现
   第二个 .html 也不会开错。

【V11.6 新增】背包容量显示 + 快速添加

1. 真实容量字段（哈诺特扩容后的当前袋容量，三重实测验证）：
       WeaponPorchStockNum 0x8C270C56 / BowPorchStockNum 0xE7CE4453 / ShieldPorchStockNum 0x2FC0D2AB
   基准档验证：哈诺特旗标 Weapon×5 / Bow×5 / Shield×2 → 8+5=14 ✓ 5+5=10 ✓ 4+2=6 ✓
   素材/料理/防具存档无容量字段，只显示已用数量，不伪造上限。
2. [4]/[5] 生成的 inventory.json 末尾附带 {"_capacity":{...}} 标记元素，
   HTML 据此显示「武器 14/14」并检测超容量；写回前剥掉，不影响 SAV 写入逻辑。
3. HTML 背包页新增快速添加栏（11 类大按钮），物品列表复用图鉴的
   ITEM_NAMES + 图标资产，添加走 V11.4 唯一负 slot 机制。

【V11.5 新增】Link 位置读写（HTML 新增「📍 位置」Tab）

1. 真实字段已实测确认（savdata 普通哈希条目，不是特殊结构）：
       PlayerSavePos             0xA40BA103  f32 ×3       X/Y/Z 世界坐标
       PlayerSavePosAngleYDegree 0x6293B955  f32 ×1       朝向角（度）
       PlayerSavePosMapName      0x0BEE9E46  string32 ×8  存档所在地图区块名（实测 "D-6"）
       PlayerSavePosMapType      0xD913B769  string32 ×8  存档所在地图类型
   实测（2026-09-30 基准档）：三条 PlayerSavePos 连续排列，解码
   (-1125.588, 237.270, 1903.928)，与游戏地点数据交叉验证
   （初始台地标点 -930.5,+1909.5 同区域），证实 X+ 朝东 / Z+ 朝南 / Y 为海拔。

2. 流程 [4] [5] [6] 自动生成 position.json → HTML「📍 位置」Tab
   显示坐标 / 最近地点 / 传送填值 → 导出 → 终端写回。
   写回只动 PlayerSavePos（±朝向）三/四个 u32，其余字节一律不碰；
   沿用既有安全机制：.bak 备份、范围校验、写后回读校验。

【菜单】

    [1] SAV → JSON          （只转 savdata，不开浏览器）
    [2] JSON → SAV          （只导回 savdata，不开浏览器）
    [3] 一键流程（savdata）  （改 IsGet / 任务 / 心心 / 卢比…）
    [4] 背包编辑            （数量 / 修饰符 / 增删物品）
    [5] 完整流程 ⭐         （savdata + 背包 一起改，推荐）
    [6] 位置编辑            （读坐标 / 最近地点 / 传送）
============================================================
"""

import os
import subprocess
import glob
import shutil
import hashlib
import json
import math
import struct
import sys
import time
from datetime import datetime


# ------------------------------------------------------------
# 0.0 输出编码兜底（★ V11.8）
# ------------------------------------------------------------
# 控制台直接跑没问题（Python 走 Windows 控制台 API，能显示任意字符），
# 但只要 stdout 被重定向/管道接走（> 日志.txt、被别的程序拉起、某些终端），
# Python 就用系统 locale 编码（简中 Windows = cp936/GBK）去编码，
# 而界面里的 ⇄ ✓ ⚠️ 🎉 这些符号 GBK 编不出来 —— 程序会在第一行横幅就
# UnicodeEncodeError 崩掉。这里只把错误处理改成 replace（编码不动），
# 编不出的字符变成 ? ，绝不因为一句日志要了整条流程的命。
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(errors="replace")
    except Exception:
        pass


# ------------------------------------------------------------
# 0.-1 应用版本（★ V13.7 版本号统一 —— 全项目唯一权威值）
# ------------------------------------------------------------
# 以前四处打架：文件头 V11.6 / VERSION="V13.0" / ps1 横幅 V13.4 /
# HTML title "v12" + 徽章 V13.1 / pytest.ini 注释 V12.3。
# 现在以这里的 APP_VERSION 为准：
#   · main.py：VERSION = APP_VERSION（--version / --help / --selftest 全用它）
#   · ps1 启动器：运行时正则从本文件读 APP_VERSION 拼横幅（读不到才退回字面量）
#   · HTML <title> / 品牌徽章、pytest.ini 注释、刷新挑战数据.js：静态文本，改版本时同步
# 注：代码里的「★ V11.x / V12.x / V13.0~V13.6」是**历史改动溯源标记**
#    （表示该行改动是哪个版本引入的），按原样保留，不属于"当前版本号"。
APP_VERSION = "V13.7"


# ------------------------------------------------------------
# 0. 通用工具
# ------------------------------------------------------------

def pause(msg="按回车继续..."):
    try:
        input(f"\n{msg}")
    except EOFError:
        pass


def _flush_stdin():
    """丢弃 stdin 里残留的回车，防止上一个 prompt 的多余按键串到下一个等待。"""
    try:
        import msvcrt
        while msvcrt.kbhit():
            msvcrt.getch()
    except Exception:
        pass


def wait_for_user_done():
    """★ V13.5：编辑阶段的关键等待——必须真的等到用户回来按回车。
    先清空键盘缓冲区，再用 input() 阻塞。"""
    _flush_stdin()
    print()
    print("╔══════════════════════════════════════════════╗")
    print("║  现在去浏览器里编辑 JSON，改完再回来！       ║")
    print("║  编辑完成后，回到本窗口按任意键继续          ║")
    print("╚══════════════════════════════════════════════╝")
    try:
        import msvcrt
        msvcrt.getch()   # 等一个按键，比 input() 更可靠，不会被残留回车跳过
    except Exception:
        input("\n按回车继续...")


def find_exe(base_dirs, exe_name="BotW-Save-Editor.exe"):
    """★ V12.3：重组后 exe 在 core/BotW-Save-Editor/ 里。
    base_dirs 可以是单个目录，也可以是「按优先级排列的目录列表」。"""
    if isinstance(base_dirs, (str, bytes)):
        base_dirs = [base_dirs]
    for base_dir in base_dirs:
        direct = os.path.join(base_dir, exe_name)
        if os.path.isfile(direct):
            return direct
    candidates = []
    for base_dir in base_dirs:
        if not os.path.isdir(base_dir):
            continue
        for root, dirs, files in os.walk(base_dir):
            dirs[:] = [d for d in dirs if d not in (".venv", "site-packages", "__pycache__")]
            if exe_name in files:
                candidates.append(os.path.join(root, exe_name))
    if not candidates:
        return None
    candidates.sort(key=lambda p: p.count(os.sep))
    return candidates[0]


def find_html_file(base_dir):
    """★ V11.4：优先匹配「修改器 / botw」命名的 html，
    避免目录里出现第二个 .html（如导出的报告）时开错编辑器"""
    if not os.path.isdir(base_dir):
        return None
    cands = [f for f in sorted(os.listdir(base_dir))
             if os.path.isfile(os.path.join(base_dir, f)) and f.lower().endswith(".html")]
    if not cands:
        return None
    for kw in ("修改器", "botw"):
        for f in cands:
            if kw in f.lower():
                return os.path.join(base_dir, f)
    if len(cands) > 1:
        print(f"⚠️ 目录里有 {len(cands)} 个 .html，默认使用：{cands[0]}")
    return os.path.join(base_dir, cands[0])


def file_sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def run_cpp(exe, arg_name, cwd):
    try:
        return subprocess.run(
            [exe, arg_name], cwd=cwd,
            capture_output=True, text=True,
            encoding="utf-8", errors="replace",
        )
    except Exception as e:
        print("❌ 调用 C++ 转换器失败：")
        print(e)
        return None


def print_cpp_output(result):
    if result.stdout:
        print("--- C++ stdout ---")
        print(result.stdout.rstrip())
        print("------------------")
    if result.stderr:
        print("--- C++ stderr ---")
        print(result.stderr.rstrip())
        print("------------------")
    print("返回代码：", result.returncode)
    print()


# ------------------------------------------------------------
# 0.1 备份工具（★ V12.3）
# ------------------------------------------------------------
# 重组后所有备份集中到 backups/，日期文件夹旁边不再堆一串 .bak。
# 为了兼容旧版已经散落在日期文件夹里的 .bak，*查找* 时新旧两处都会看。

def unique_path(path):
    """路径已存在时，自动退让成 名字.<时分秒>.后缀（数字后缀最后兜底）"""
    if not os.path.exists(path):
        return path
    root, ext = os.path.splitext(path)
    ts = datetime.now().strftime("%H%M%S")
    cand = f"{root}.{ts}{ext}"
    n = 1
    while os.path.exists(cand):
        cand = f"{root}.{ts}_{n}{ext}"
        n += 1
    return cand


def make_backup(src_path, tag="bak"):
    """把 src_path 备份到 backups/，返回备份文件的绝对路径（失败抛异常）。
    tag 例：bak / before_inventory.bak / before_position.bak"""
    os.makedirs(BACKUP_DIR, exist_ok=True)
    dst = unique_path(os.path.join(BACKUP_DIR, os.path.basename(src_path) + "." + tag))
    shutil.copy2(src_path, dst)
    return dst


def find_backup(sav_path, tag):
    """找 sav_path 对应的备份：先看 backups/，再看存档旁边（旧版位置）。
    返回第一个存在的路径；都没有则返回 backups/ 里的规范路径（供提示用）。"""
    name = os.path.basename(sav_path)
    new_dir = os.path.join(BACKUP_DIR, name + "." + tag)
    if os.path.exists(new_dir):
        return new_dir
    legacy = sav_path + "." + tag
    if os.path.exists(legacy):
        return legacy
    return new_dir


# ------------------------------------------------------------
# 3.1 纯 Python 转换器（★ V12.2）
# ------------------------------------------------------------
# 本机 BotW-Save-Editor.exe 导出时必崩（0xC0000409，与存档数据无关）。
# 按上游源码（Mystixor/BotW-Save-Editor）的格式用 Python 等价实现：
#   SAV = 12 字节头 + N 条 (哈希 u32 BE + 值 u32 BE) + 4 字节 0xFFFFFFFF 尾占位
#   JSON = {"signature": 头部魔数字节序反转后的有符号数, "savdata": [...]}
# JSON → SAV 也按上游 Import 的字节布局逐字节还原。

SAV_MAGIC_TO_LIST = {18203: "471B", 18202: "471A", 9454: "24EE"}

_SAVDATA_NAME_CACHE = {}


def _savdata_names(list_id):
    if list_id not in _SAVDATA_NAME_CACHE:
        fname = f"savdata_list{list_id}.json"
        # ★ V12.3：优先用 exe 旁边的表，找不到就按 SEARCH_DIRS 顺序找（容错）
        path = os.path.join(EXE_DIR, fname)
        if not os.path.isfile(path):
            for d in SEARCH_DIRS:
                cand = os.path.join(d, fname)
                if os.path.isfile(cand):
                    path = cand
                    break
        with open(path, "r", encoding="utf-8") as f:
            table = json.load(f)
        # 每张表按存档文件名分组，合并成 哈希→名称 总表（键冲突极少，直接覆盖）
        merged = {}
        for group in table.values():
            if isinstance(group, dict):
                merged.update(group)
        _SAVDATA_NAME_CACHE[list_id] = merged
    return _SAVDATA_NAME_CACHE[list_id]


def _byteswap_u32(v):
    return ((v & 0xFF) << 24) | ((v & 0xFF00) << 8) | ((v >> 8) & 0xFF00) | (v >> 24)


def python_sav_to_json(sav_path, json_path):
    """SAV → JSON。返回字节数；失败抛异常。"""
    with open(sav_path, "rb") as f:
        data = f.read()
    if len(data) < 20:
        raise ValueError(f"文件太小（{len(data)} 字节），不像 BotW 存档")

    magic_le = struct.unpack("<I", data[:4])[0]
    magic_be = _byteswap_u32(magic_le)
    list_id = SAV_MAGIC_TO_LIST.get(magic_be)
    if list_id is None:
        raise ValueError(f"不认识的存档版本：魔数 {magic_be}")
    names = _savdata_names(list_id)

    n = (len(data) - 16) // 8
    entries = []
    pos = 12
    for _ in range(n):
        h, v = struct.unpack(">II", data[pos:pos + 8])
        pos += 8
        h_signed = struct.unpack(">i", struct.pack(">I", h))[0]
        entries.append({
            "DataName": names.get(str(h_signed), f"Unknown_{h_signed}"),
            "HashValue": h_signed,
            "DataValue": v,
        })

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump({"signature": struct.unpack(">i", struct.pack(">I", magic_be))[0],
                   "savdata": entries}, f, ensure_ascii=False)
    return len(data)


def python_json_to_sav(json_path, sav_path):
    """JSON → SAV，按上游 Import 的字节布局写出。"""
    with open(json_path, "r", encoding="utf-8") as f:
        doc = json.load(f)

    sig = int(doc["signature"]) & 0xFFFFFFFF
    magic_le = _byteswap_u32(sig)
    out = bytearray()
    out += struct.pack("<III", magic_le, 0xFFFFFFFF, _byteswap_u32(1))
    for item in doc["savdata"]:
        h = int(item["HashValue"]) & 0xFFFFFFFF
        v = int(item["DataValue"]) & 0xFFFFFFFF
        out += struct.pack(">II", h, v)
    out += b"\xff\xff\xff\xff"

    with open(sav_path, "wb") as f:
        f.write(out)
    return len(out)


def offer_copy_back(sav_path):
    """★ V11.3：流程结束后把修改完成的 SAV 拷回原始出处。
    ★ V13.7 最高风险闸（覆盖原档 = 最高风险操作）：
      ① 必须显式输入 y 才覆盖（直接回车 / 其它输入 = 不覆盖）；
      ② 覆盖前先给目标做 .bak，并打印目标与源的 SHA-256 供核对；
      ③ 先写临时文件、校验 SHA 后再原子替换，绝不留下"写一半"的活档；
      ④ BOTW_NO_OVERWRITE_ORIG=1 时本函数绝不覆盖任何文件（保险丝）。"""
    global LAST_SAV_SOURCE
    if not LAST_SAV_SOURCE:
        return
    src = os.path.abspath(sav_path)
    dst = LAST_SAV_SOURCE
    if src == dst or not os.path.isdir(os.path.dirname(dst)):
        return
    if os.environ.get("BOTW_NO_OVERWRITE_ORIG") == "1":
        print()
        print("🛡 BOTW_NO_OVERWRITE_ORIG=1：已禁止覆盖原档，跳过拷回。")
        print("   需要生效请手动复制：", src, " → ", dst)
        return
    print()
    print("⚠️ 即将覆盖原档（最高风险操作）：")
    print("   目标：", dst)
    if os.path.isfile(dst):
        print("   目标 SHA-256：", file_sha256(dst))
    print("   源   SHA-256：", file_sha256(src))
    c = input("确认覆盖？[y=是 / 直接回车=否]：").strip().lower()
    if c != "y":
        print("已跳过，原档未被修改。需要时手动复制：", src, " → ", dst)
        return
    tmp = dst + ".copytmp"
    try:
        if os.path.isfile(dst):
            ts = datetime.now().strftime("%H%M%S")
            bak = dst + "." + ts + ".bak"
            shutil.copy2(dst, bak)
            print("✓ 已备份目标原文件 →", os.path.basename(bak))
        shutil.copy2(sav_path, tmp)                       # 先写临时文件
        if file_sha256(tmp) != file_sha256(sav_path):
            raise ValueError("临时副本 SHA-256 校验不一致")
        os.replace(tmp, dst)                              # 原子替换，避免写一半
        same = file_sha256(dst) == file_sha256(src)
        print("✓ 修改完成的 SAV 已拷回原位置。")
        print("   校验：", "SHA-256 与源一致 ✓" if same else "⚠️ SHA-256 与源不一致，请人工检查！")
        LAST_SAV_SOURCE = None
    except Exception as e:
        print("❌ 拷回失败（目标已先做 .bak，可据此回滚）：", e)
        print("   源文件：", src)
        try:
            if os.path.exists(tmp):
                os.remove(tmp)
        except OSError:
            pass


def offer_copy_back_to_root(sav_path):
    """★ V13.7（run_export 加固的配套）：run_export 不再移动原档之后，
    项目根和日期文件夹会各有一份同名 SAV。菜单 [2]（JSON→SAV）写回的是
    日期文件夹里那份，根目录那份可能已经过期 —— 这里询问是否同步。
    （offer_copy_back 依赖同一进程里的 LAST_SAV_SOURCE，菜单 [2] 是新进程，用这个。）
    ★ 最高风险闸与 offer_copy_back 完全一致：
      必须显式 y、打印双方 SHA-256、目标先做 .bak（放在目标旁边，不依赖 backups/）、
      临时文件校验后原子替换、BOTW_NO_OVERWRITE_ORIG=1 时绝不覆盖。"""
    try:
        name = os.path.basename(sav_path)
        root_copy = os.path.abspath(os.path.join(BASE_DIR, name))
        if root_copy == os.path.abspath(sav_path) or not os.path.isfile(root_copy):
            return
        if file_sha256(root_copy) == file_sha256(sav_path):
            print("✓ 项目根同名存档与写回结果一致，无需同步。")
            return
        if os.environ.get("BOTW_NO_OVERWRITE_ORIG") == "1":
            print()
            print("🛡 BOTW_NO_OVERWRITE_ORIG=1：已禁止覆盖原档，跳过同步。")
            print("   需要生效请手动复制：", sav_path, " → ", root_copy)
            return
        print()
        print("⚠️ 即将覆盖项目根的活档（最高风险操作）：")
        print("   目标：", root_copy)
        print("   目标 SHA-256：", file_sha256(root_copy))
        print("   源   SHA-256：", file_sha256(sav_path))
        c = input("确认覆盖？[y=是 / 直接回车=否]：").strip().lower()
        if c != "y":
            print("已跳过，活档未被修改。需要的话手动复制：", sav_path, " → ", root_copy)
            return
        tmp = root_copy + ".copytmp"
        ts = datetime.now().strftime("%H%M%S")
        bak = root_copy + "." + ts + ".bak"
        shutil.copy2(root_copy, bak)
        print("✓ 已备份目标原文件 →", os.path.basename(bak))
        shutil.copy2(sav_path, tmp)
        if file_sha256(tmp) != file_sha256(sav_path):
            raise ValueError("临时副本 SHA-256 校验不一致")
        os.replace(tmp, root_copy)
        same = file_sha256(root_copy) == file_sha256(sav_path)
        print("✓ 已同步覆盖回项目根。")
        print("   校验：", "SHA-256 与源一致 ✓" if same else "⚠️ SHA-256 与源不一致，请人工检查！")
    except Exception as e:
        print("❌ 同步回项目根失败（目标已先做 .bak，可据此回滚）：", e)


# ------------------------------------------------------------
# 1. 基础路径
# ------------------------------------------------------------

# ★ V12.3：目录重组后的路径约定（★ V13.7 按当前实际状态更新）
#
#   项目根（…存档实验室v13/）
#   ├─ 启动器/          ← 双击这里启动
#   ├─ core/            ← main.py / BotW-Save-Editor.exe / savdata_list*.json
#   │   └─ tests/       ← 回归测试
#   ├─ editor/          ← 塞尔达存档修改器.html + challenges*.js/json + assets/
#   ├─ backups/         ← 生成物与备份（日期文件夹 / .bak；用户可自行清理，用到才现建）
#   └─ game_data.sav    ← 唯一活档：run_export 只复制副本，原档永不被移动/删除（★ V13.7）
#
# CORE_DIR = 本文件所在目录（core/）
# BASE_DIR = 项目根目录（core/ 的上一级）
CORE_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(CORE_DIR)

# 自检 / 搜索用：按顺序找文件（本目录优先，再找项目根、editor）
SEARCH_DIRS = [CORE_DIR, BASE_DIR, os.path.join(BASE_DIR, "editor")]

# HTML 编辑器目录
EDITOR_DIR = os.path.join(BASE_DIR, "editor")

# 生成物（日期文件夹）与备份（.bak / 旧日期文件夹）统一放这里
BACKUP_DIR = os.path.join(BASE_DIR, "backups")

LAST_SAV_SOURCE = None  # ★ V11.3：SAV 原始出处（run_export 记录，流程结束自动拷回）

SAVDATA_FILES = [
    "savdata_list24EE.json",
    "savdata_list471A.json",
    "savdata_list471B.json",
]

# ★ V13.7：不再在导入时自动创建 backups/ —— 用户可能已手动清理过它；
# 真正需要时（make_backup / run_export 建日期文件夹）都会 exist_ok=True 现建，行为不变。


# ★ V13.4：精简启动输出——横幅和路径由 ps1 启动器负责打印，这里只报异常


# ------------------------------------------------------------
# 2. 启动自检
# ------------------------------------------------------------

EXE_FILE = find_exe(SEARCH_DIRS)
if EXE_FILE is None:
    print("❌ 找不到 BotW-Save-Editor.exe（应该在 core\\BotW-Save-Editor\\ 里）")
    pause()
    raise SystemExit(1)

EXE_DIR = os.path.dirname(EXE_FILE)

missing = [f for f in SAVDATA_FILES if not os.path.isfile(os.path.join(EXE_DIR, f))]
if missing:
    print("⚠️ savdata_list 缺失：")
    for f in missing:
        print(f"   - {f}")

HTML_FILE = find_html_file(EDITOR_DIR) or find_html_file(BASE_DIR)
if not HTML_FILE:
    print("⚠️ editor 目录里没找到 .html 编辑器")


# ------------------------------------------------------------
# ★ V13.4：本地 HTTP 服务 + 自动导入 JSON
#   file:// 网页出于安全不能读本地文件，所以起一个临时 HTTP 服务，
#   让浏览器通过 http://localhost 访问，HTML 就能 fetch 刚生成的 JSON。
# ------------------------------------------------------------
import threading
import http.server
import socketserver
import urllib.parse

_HTTP_SERVER = None  # 保持引用，进程退出前不回收
_HTTP_PORT = None     # ★ V13.6：连同端口一起记住（旧版第二次调用会因解包失败而崩）


def start_local_server():
    """在 BASE_DIR 根目录起一个临时 HTTP 服务，返回 (server, port)。"""
    global _HTTP_SERVER, _HTTP_PORT
    if _HTTP_SERVER is not None:
        return _HTTP_SERVER, _HTTP_PORT
    handler = lambda *a, **kw: http.server.SimpleHTTPRequestHandler(*a, directory=BASE_DIR, **kw)
    # 端口 0 = 系统自动分配空闲端口
    _HTTP_SERVER = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = _HTTP_SERVER.server_address[1]
    _HTTP_PORT = port
    t = threading.Thread(target=_HTTP_SERVER.serve_forever, daemon=True)
    t.start()
    return _HTTP_SERVER, port


def open_editor_auto(backup_dir=None, files=None):
    """打开 HTML 编辑器，并带上 ?auto=1&dir=...&files=... 让网页自动导入 JSON。
    backup_dir: backups/<日期>/ 的绝对路径。
    files:      该目录里要自动导入的 JSON 文件名列表（可选）。
    ★ V13.6：本函数从"从未被调用的死代码"转正——各编辑流程都改走这里；
      网页端读到 ?auto=1 后 fetch 这些文件，复用现有 importAllFiles() 分类导入。
      任何一步失败都退回旧的 file:// 直开方式，功能不劣于旧版。"""
    if not HTML_FILE:
        return
    try:
        _, port = start_local_server()
    except Exception as e:
        print(f"⚠️ 本地服务启动失败，退回直接打开 HTML：{e}")
        try: os.startfile(HTML_FILE)
        except: pass
        return

    # 计算 editor 相对 BASE_DIR 的 URL 路径
    rel = os.path.relpath(HTML_FILE, BASE_DIR).replace("\\", "/")
    url = f"http://127.0.0.1:{port}/{urllib.parse.quote(rel)}"
    params = ["auto=1"]
    if backup_dir:
        d = os.path.relpath(backup_dir, BASE_DIR).replace("\\", "/")
        params.append("dir=" + urllib.parse.quote(d))
    if files:
        params.append("files=" + ",".join(urllib.parse.quote(f) for f in files))
    url += "?" + "&".join(params)
    try:
        os.startfile(url)
        print(f"✓ 已启动编辑器（本地服务 :{port}，将自动导入 JSON）")
    except Exception as e:
        print(f"⚠️ 打开浏览器失败：{e}")
        print(f"   请手动访问：{url}")


# ------------------------------------------------------------
# 3. 文件选择
# ------------------------------------------------------------

def prompt_choose_sav():
    """★ V12.3：先看项目根目录（game_data.sav 就放这儿），
    没有再往 core / editor / backups 里找。"""
    hits = []
    for d in (BASE_DIR, CORE_DIR, EDITOR_DIR, BACKUP_DIR):
        if os.path.isdir(d):
            hits += glob.glob(os.path.join(d, "*.sav"))
    # 去重 + 按修改时间倒序（最新的一档排最前，和 find_all_sav_files 一致）
    sav_files = sorted(set(hits), key=lambda p: os.path.getmtime(p), reverse=True)
    if not sav_files:
        print("❌ 没找到 .sav 文件（把 game_data.sav 放到项目根目录或 backups\\ 里）。")
        return None
    if len(sav_files) == 1:
        print(f"✓ 检测到唯一存档：{os.path.relpath(sav_files[0], BASE_DIR)}")
        return sav_files[0]
    print(f"发现 {len(sav_files)} 个 SAV 文件：")
    for i, p in enumerate(sav_files, 1):
        mtime = datetime.fromtimestamp(os.path.getmtime(p)).strftime("%Y-%m-%d %H:%M")
        print(f"  [{i}] {os.path.relpath(p, BASE_DIR)}  ({mtime})")
    while True:
        c = input(f"请选择 [1-{len(sav_files)}]，或 q 退出：").strip().lower()
        if c == "q":
            return None
        if c.isdigit() and 1 <= int(c) <= len(sav_files):
            return sav_files[int(c) - 1]
        print("❌ 输入无效。")


def find_all_sav_files():
    """★ V12.3：跳过 .venv / backups 里的历史副本之外，全项目递归找 .sav"""
    result = []
    for root, dirs, files in os.walk(BASE_DIR):
        dirs[:] = [d for d in dirs if d not in (".venv", "site-packages", "__pycache__", ".git")]
        for f in files:
            if f.endswith(".sav"):
                result.append(os.path.join(root, f))
    result.sort(key=lambda p: (-os.path.getmtime(p), p.count(os.sep)))  # ★ V13.7：mtime 并列时项目根（路径更浅）优先
    return result


def prompt_choose_any_sav():
    savs = find_all_sav_files()
    if not savs:
        print("❌ 没找到任何 .sav 文件。")
        return None
    if len(savs) == 1:
        print(f"✓ 使用存档：{os.path.relpath(savs[0], BASE_DIR)}")
        return savs[0]
    print(f"发现 {len(savs)} 个 SAV：")
    for i, p in enumerate(savs, 1):
        mtime = datetime.fromtimestamp(os.path.getmtime(p)).strftime("%Y-%m-%d %H:%M")
        print(f"  [{i}] {os.path.relpath(p, BASE_DIR)}  ({mtime})")
    while True:
        c = input(f"请选择 [1-{len(savs)}]，或直接回车 = 最新一个：").strip().lower()
        if c == "":
            return savs[0]
        if c == "q":
            return None
        if c.isdigit() and 1 <= int(c) <= len(savs):
            return savs[int(c) - 1]
        print("❌ 输入无效。")


# ------------------------------------------------------------
# 4. SAV → JSON
# ------------------------------------------------------------

def run_export(sav_file):
    global LAST_SAV_SOURCE
    sav_filename = os.path.basename(sav_file)
    LAST_SAV_SOURCE = os.path.abspath(sav_file)  # ★ V11.3：记录原始出处，完成后可自动拷回

    # ★ V12.3.1 安全闸：测试/自检脚本 import main 后若误调 run_export，
    #   设 BOTW_NO_MOVE=1 就只会建目录、绝不搬动真实存档。
    dry = os.environ.get("BOTW_NO_MOVE") == "1"
    if dry:
        print("⚠️ BOTW_NO_MOVE=1（自检模式）：只演练流程，不移动/复制存档。")

    today = datetime.now().strftime("%Y-%m-%d")
    # ★ V12.3：日期文件夹统一建在 backups/ 里，项目根目录保持整洁
    os.makedirs(BACKUP_DIR, exist_ok=True)
    output_dir = os.path.join(BACKUP_DIR, today)
    counter = 1
    while os.path.exists(output_dir):
        output_dir = os.path.join(BACKUP_DIR, f"{today}_{counter:02d}")
        counter += 1
    os.makedirs(output_dir)

    print()
    print("文件：", sav_filename)
    print("创建存档文件夹：")
    print(output_dir)

    new_sav_path = os.path.join(output_dir, sav_filename)
    print()
    if dry:
        # 自检模式：不复制，直接把原文件当作“工作副本”继续跑转换（只读，原档不动）
        print("✓ 自检模式：跳过复制，直接使用", sav_file)
        new_sav_path = sav_file
    else:
        # ★ V13.7（run_export 加固）：由「移动原档」改为「复制工作副本」——
        #   旧版 shutil.move 会把 game_data.sav 搬进日期文件夹，一旦流程中途崩溃
        #   （实测踩过：崩在 move 之后、offer_copy_back 之前），用户原档就"没了"。
        #   现在：原档永远留在原处；日期文件夹里是副本；只有流程末尾
        #   offer_copy_back() 被用户显式确认后，才用副本覆盖原档（覆盖前先备份目标）。
        #   任何一步崩溃 → 原档字节不动，重新运行即可。
        print("正在复制 SAV 工作副本（原档保留在原处）...")
        copied = False
        last_err = None
        for attempt in range(1, 4):
            try:
                shutil.copy2(sav_file, new_sav_path)
                copied = True
                break
            except PermissionError as e:
                # ★ V12.1：文件被其他程序占用（OneDrive 同步 / 杀毒扫描 / 只读属性）
                last_err = e
                print(f"   复制重试 {attempt}/3 失败（文件被占用），稍后再试……")
                time.sleep(0.8)
            except OSError as e:
                last_err = e
                break
        if not copied:
            print("❌ 该文件无法读取，流程中止（原档未被移动或修改）：", last_err)
            print("   请暂停 OneDrive 同步 / 关闭杀毒实时扫描后，重新运行本流程。")
            return None
        if file_sha256(sav_file) != file_sha256(new_sav_path):
            print("❌ 复制后 SHA-256 校验不一致，流程中止（原档未动）。")
            try:
                os.remove(new_sav_path)
            except OSError:
                pass
            return None
        print("✓ SAV 已复制为工作副本 →", new_sav_path)
        print("✓ 原档保留在：", sav_file)

    print()
    print("开始 SAV → JSON 转换")
    print("命令：     Python 内置转换器")
    print("源文件：  ", sav_filename)
    print()

    json_file = os.path.join(output_dir, sav_filename + ".json")
    try:
        size = python_sav_to_json(new_sav_path, json_file)
        print(f"🎉 SAV → JSON 成功（Python 转换器）！ {size:,} 字节 → {os.path.basename(json_file)}")
        return json_file
    except Exception as e:
        print("⚠️ Python 转换器失败：", e)
        print("   回退到 C++ 转换器 BotW-Save-Editor.exe ...")
        print()

    print("正在调用 C++ 转换器...")
    print()
    result = run_cpp(EXE_FILE, sav_filename, output_dir)
    if result is None:
        return None

    print_cpp_output(result)

    if result.returncode == 0 and os.path.isfile(json_file):
        size = os.path.getsize(json_file)
        print(f"🎉 SAV → JSON 成功！ {size:,} 字节")
        return json_file

    print("⚠️ SAV → JSON 未成功。")
    return None


# ------------------------------------------------------------
# 5. savdata JSON 校验（C++ Import 之前必须通过）
# ------------------------------------------------------------

def validate_savdata_json(json_file):
    """
    校验 savdata JSON 能否安全交给 C++ Import。
    返回 (ok, 错误信息)。错误信息为 None 表示通过。
    """
    # 1) 必须是合法 JSON
    try:
        with open(json_file, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return False, f"JSON 解析失败：{e}"

    # 2) 顶层必须是 dict，且带 signature 和 savdata
    if not isinstance(data, dict):
        return False, "顶层应该是 JSON 对象（{...}），实际是 " + type(data).__name__
    if "signature" not in data:
        return False, "缺少 signature 字段（这不是 C++ 导出的 savdata JSON？）"
    if "savdata" not in data or not isinstance(data["savdata"], list):
        return False, "缺少 savdata 数组（这不是 C++ 导出的 savdata JSON？）"

    # 3) savdata 每一项必须有 DataName / HashValue / DataValue
    n = len(data["savdata"])
    for i, item in enumerate(data["savdata"]):
        if not isinstance(item, dict):
            return False, f"savdata[{i}] 不是对象"
        if "DataName" not in item or "HashValue" not in item or "DataValue" not in item:
            return False, f"savdata[{i}] 缺少 DataName / HashValue / DataValue 之一"
    # 条数下限按存档类型区分（★ V11.4）：
    #   game_data.sav 约 12.8 万条；caption.sav / option.sav 本来就只有几百条，
    #   旧版一刀切要求 ≥10 万条，导致它们导出后永远无法经菜单 [2] 导回。
    sav_name = os.path.basename(json_file)
    if sav_name.lower().endswith(".json"):
        sav_name = sav_name[:-5]
    min_entries = 100000 if sav_name == "game_data.sav" else 10
    if n < min_entries:
        return False, f"savdata 只有 {n} 条（该类型正常应 ≥ {min_entries} 条），可能导出坏了"

    return True, None


# ------------------------------------------------------------
# 6. JSON → SAV
# ------------------------------------------------------------

def run_import(json_file):
    work_dir = os.path.dirname(json_file)
    json_name = os.path.basename(json_file)
    sav_name = json_name[:-5]
    sav_path = os.path.join(work_dir, sav_name)

    print()
    print("JSON：    ", json_file)
    print("目标 SAV：", sav_path)
    print()

    # ★ V11.1：写回前先校验 JSON，坏文件直接拒绝
    print("正在校验 JSON ...")
    ok, err = validate_savdata_json(json_file)
    if not ok:
        print("❌ JSON 校验失败，已取消导入（存档未动）：")
        print("   " + err)
        return False
    print("✓ 校验通过")

    backup_path = None
    if os.path.isfile(sav_path):
        # ★ V12.3：备份统一放 backups/（同名自动加时分秒）
        try:
            backup_path = make_backup(sav_path, "bak")
            print("✓ 已备份原 SAV →", os.path.relpath(backup_path, BASE_DIR))
        except Exception as e:
            print("⚠️ 备份失败（继续导入）：", e)
            backup_path = None

    print()
    print("开始 JSON → SAV 转换")
    print("命令：     Python 内置转换器")
    print("源文件：  ", json_name)
    print()

    try:
        python_json_to_sav(json_file, sav_path)
        print("🎉 JSON → SAV 成功（Python 转换器）！")
        return True
    except Exception as e:
        print("⚠️ Python 转换器失败：", e)
        print("   回退到 C++ 转换器 BotW-Save-Editor.exe ...")
        print()

    print("正在调用 C++ 转换器...")
    print()
    result = run_cpp(EXE_FILE, json_name, work_dir)
    if result is None:
        return False

    print_cpp_output(result)

    ok = result.returncode == 0 and os.path.isfile(sav_path)
    if ok:
        print("🎉 JSON → SAV 成功！")
    else:
        print("⚠️ JSON → SAV 未成功。")
    return ok


# ------------------------------------------------------------
# 7. 背包区解析
# ------------------------------------------------------------
# 哈希全部来自 uking_saves 权威布局表（gamedata.json），已实测验证

HASH_PORCH_ITEM       = 0x5F283289  # string64_array PorchItem        × 6720（420 槽 × 16 块）
HASH_PORCH_ITEM_VALUE = 0x6A09FC59  # s32_array     PorchItem_Value1  × 420（数量 / 耐久×100 / 护甲染色）
HASH_PORCH_EQUIP      = 0x824892BE  # bool_array    PorchItem_EquipFlag × 420（★ V11.1 修正）
HASH_SWORD_FLAG       = 0x57EE221D  # s32_array     PorchSword_FlagSp   × 20
HASH_SWORD_VALUE      = 0xA6D926BC  # s32_array     PorchSword_ValueSp  × 20
HASH_BOW_FLAG         = 0x0CBF052A  # s32_array     PorchBow_FlagSp     × 14
HASH_BOW_VALUE        = 0x1E3FD294  # s32_array     PorchBow_ValueSp    × 14
HASH_SHIELD_FLAG      = 0xC5238D2B  # s32_array     PorchShield_FlagSp  × 20
HASH_SHIELD_VALUE     = 0x69F17E8A  # s32_array     PorchShield_ValueSp × 20

# 背包容量字段（★ V11.6）：哈诺特扩容后的当前袋容量，语义已三重实测验证：
#   基准档 Npc_OldKorok_Weapon01~05 = 5 次武器扩容 → 8(基础) + 5 = 14 = WeaponPorchStockNum ✓
#   Npc_OldKorok_Bow01~05          = 5 次弓扩容   → 5(基础) + 5 = 10 = BowPorchStockNum    ✓
#   Npc_OldKorok_Shield01~02       = 2 次盾扩容   → 4(基础) + 2 = 6  = ShieldPorchStockNum ✓
# 上限 20/14/20 即 PorchSword/PorchBow/PorchShield 三个修饰符数组的长度。
# 素材/料理/防具在存档里没有容量字段（游戏内置常量），无法可靠读取，不伪造。
HASH_WEAPON_STOCK = 0x8C270C56  # WeaponPorchStockNum  武器袋当前容量
HASH_BOW_STOCK    = 0xE7CE4453  # BowPorchStockNum     弓袋当前容量
HASH_SHIELD_STOCK = 0x2FC0D2AB  # ShieldPorchStockNum  盾袋当前容量

MAX_INVENTORY_SLOTS = 420
INVENTORY_NAME_SIZE = 64

DYE_NAMES = [
    "未染色", "蓝色", "红色", "黄色", "白色", "黑色", "紫色", "绿色",
    "浅蓝", "藏青", "橙色", "桃红", "深红", "浅黄", "棕色", "灰色",
]


def parse_sav_chunks(sav_path):
    with open(sav_path, "rb") as f:
        data = f.read()
    chunks = []
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        v = struct.unpack(">I", data[pos+4:pos+8])[0]
        chunks.append((pos, h, v))
        pos += 8
    return chunks


def weapon_category(name):
    """物品名 → 修饰符数组类别。返回 'sword' / 'bow' / 'shield' / None"""
    if name.startswith("Weapon_Bow_"):
        return "bow"
    if name.startswith("Weapon_Shield_"):
        return "shield"
    if name.startswith(("Weapon_Sword_", "Weapon_Lsword_", "Weapon_Spear_")):
        return "sword"
    return None


def read_inventory_from_sav(sav_path):
    chunks = parse_sav_chunks(sav_path)
    porch_bytes_list, value_blocks, equip_blocks = [], [], []
    mod_flag = {"sword": [], "bow": [], "shield": []}
    mod_value = {"sword": [], "bow": [], "shield": []}

    for _, h, v in chunks:
        if h == HASH_PORCH_ITEM:
            porch_bytes_list.append(struct.pack(">I", v))
        elif h == HASH_PORCH_ITEM_VALUE:
            value_blocks.append(v)
        elif h == HASH_PORCH_EQUIP:
            equip_blocks.append(v)
        elif h == HASH_SWORD_FLAG:
            mod_flag["sword"].append(v)
        elif h == HASH_BOW_FLAG:
            mod_flag["bow"].append(v)
        elif h == HASH_SHIELD_FLAG:
            mod_flag["shield"].append(v)
        elif h == HASH_SWORD_VALUE:
            mod_value["sword"].append(v)
        elif h == HASH_BOW_VALUE:
            mod_value["bow"].append(v)
        elif h == HASH_SHIELD_VALUE:
            mod_value["shield"].append(v)

    all_bytes = b"".join(porch_bytes_list)
    items = []
    for i in range(0, len(all_bytes), INVENTORY_NAME_SIZE):
        chunk = all_bytes[i:i+INVENTORY_NAME_SIZE]
        end = chunk.find(b"\x00")
        name_bytes = chunk[:end] if end >= 0 else chunk
        try:
            name = name_bytes.decode("ascii").strip()
        except UnicodeDecodeError:
            name = ""
        items.append(name)

    inventory = []
    # 每个类别的相对序号（修饰符数组的下标 = 该类别第几个物品）
    cat_index = {"sword": 0, "bow": 0, "shield": 0}
    for i in range(min(len(items), MAX_INVENTORY_SLOTS)):
        if not items[i]:
            continue
        cat = weapon_category(items[i])
        modifier = 0
        modifier_value = 0
        if cat and cat_index[cat] < len(mod_flag[cat]):
            modifier = mod_flag[cat][cat_index[cat]]
            if cat_index[cat] < len(mod_value[cat]):
                modifier_value = mod_value[cat][cat_index[cat]]
            cat_index[cat] += 1

        v1 = value_blocks[i] if i < len(value_blocks) else 0

        entry = {
            "slot": i,
            "name": items[i],
            "value": v1,
            "equipped": bool(equip_blocks[i]) if i < len(equip_blocks) else False,
            "modifier": modifier,
            "modifier_value": modifier_value,
        }
        # 护甲：Value1 就是染色编号（0~15 有效，-1=不可染色）
        if items[i].startswith("Armor_"):
            dye = v1 if v1 <= 15 else -1
            entry["dye"] = dye
        inventory.append(entry)
    return inventory


def read_bag_capacity_from_sav(sav_path):
    """
    读取哈诺特扩容后的当前袋容量（★ V11.6）。
    返回 {"weapon": n, "bow": n, "shield": n}；字段缺失的类别为 None。
    语义验证见 HASH_WEAPON_STOCK 注释（哈诺特旗标数 + 基础容量 完全吻合）。
    """
    chunks = parse_sav_chunks(sav_path)
    raw = {HASH_WEAPON_STOCK: None, HASH_BOW_STOCK: None, HASH_SHIELD_STOCK: None}
    for _, h, v in chunks:
        if h in raw and raw[h] is None:
            raw[h] = struct.unpack(">i", struct.pack(">I", v & 0xFFFFFFFF))[0]
    return {"weapon": raw[HASH_WEAPON_STOCK],
            "bow": raw[HASH_BOW_STOCK],
            "shield": raw[HASH_SHIELD_STOCK]}


def read_inventory_with_capacity_from_sav(sav_path):
    """
    ★ V11.6：给 inventory.json 附带背包容量标记。
    返回 与 read_inventory_from_sav 相同的物品列表，末尾多一个
    {"_capacity": {"weapon":14,"bow":10,"shield":6}} 标记元素（容量字段缺失时不加）。
    HTML 据此显示「武器 14/14」并检测超容量；写回时该标记会被剥掉，不影响 SAV 写入逻辑。
    """
    inventory = read_inventory_from_sav(sav_path)
    try:
        cap = read_bag_capacity_from_sav(sav_path)
        if any(cap[k] is not None for k in ("weapon", "bow", "shield")):
            inventory.append({"_capacity": cap})
    except Exception as e:
        print(f"⚠️ 读取背包容量失败（inventory.json 不含容量标记）：{e}")
    return inventory


def read_modifiers_from_sav(sav_path):
    """兼容旧接口：返回 {类别: [flag 列表]}"""
    chunks = parse_sav_chunks(sav_path)
    mods = {"sword": [], "bow": [], "shield": []}
    for _, h, v in chunks:
        if h == HASH_SWORD_FLAG:
            mods["sword"].append(v)
        elif h == HASH_BOW_FLAG:
            mods["bow"].append(v)
        elif h == HASH_SHIELD_FLAG:
            mods["shield"].append(v)
    return mods


def _write_s32_arrays(sav_path, hash_to_list):
    """通用 s32 数组写回：{哈希: [值列表]}，按出现顺序逐块写入"""
    with open(sav_path, "rb") as f:
        data = bytearray(f.read())
    pos = 12
    slots = {h: 0 for h in hash_to_list}
    written = 0
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h in hash_to_list:
            arr = hash_to_list[h]
            s = slots[h]
            if s < len(arr):
                struct.pack_into(">I", data, pos + 4, arr[s] & 0xFFFFFFFF)
                written += 1
            slots[h] += 1
        pos += 8
    with open(sav_path, "wb") as f:
        f.write(data)
    return written


def write_modifiers_to_sav(sav_path, modifiers):
    """
    兼容旧接口 + V11.1 新格式双支持。
    modifiers 若是 dict（{类别: [flag 列表]}）按三线写；
    若是普通 list，按旧逻辑写到剑数组（保持向后兼容）。
    返回写入的块数。
    """
    if isinstance(modifiers, dict):
        mapping = {HASH_SWORD_FLAG: modifiers.get("sword", []),
                   HASH_BOW_FLAG: modifiers.get("bow", []),
                   HASH_SHIELD_FLAG: modifiers.get("shield", [])}
    else:
        mapping = {HASH_SWORD_FLAG: list(modifiers)}
    return _write_s32_arrays(sav_path, mapping)


def write_modifier_values_to_sav(sav_path, values):
    """写修饰符强度数组（ValueSp）：{类别: [值列表]}"""
    mapping = {HASH_SWORD_VALUE: values.get("sword", []),
               HASH_BOW_VALUE: values.get("bow", []),
               HASH_SHIELD_VALUE: values.get("shield", [])}
    return _write_s32_arrays(sav_path, mapping)


# 修饰符数组按"类别内相对序号"与背包物品配对——增删物品时必须同步插入/删除，
# 否则后面所有同类物品的修饰符会整体错位（V11.2 修复）
CAT_MOD_HASHES = {
    "sword":  (0x57EE221D, 0xA6D926BC, 20),   # PorchSword_FlagSp / ValueSp
    "bow":    (0x0CBF052A, 0x1E3FD294, 14),   # PorchBow
    "shield": (0xC5238D2B, 0x69F17E8A, 20),   # PorchShield
}


def _hash_positions(data, hash_value):
    """某个哈希的所有值字段在文件中的位置列表（文件顺序）"""
    out = []
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h == hash_value:
            out.append(pos + 4)
        pos += 8
    return out


def _modifier_shift(data, cat, rel_idx, insert):
    """在类别修饰符数组的 rel_idx 处插入一个 0（insert=True）或删除一项（False）"""
    h_flag, h_val, size = CAT_MOD_HASHES[cat]
    flag_pos = _hash_positions(data, h_flag)
    val_pos = _hash_positions(data, h_val)
    if len(flag_pos) < size or len(val_pos) < size:
        return False
    if rel_idx < 0 or rel_idx >= size:
        return False
    for arr in (flag_pos, val_pos):
        if insert:
            # ★ V11.8：从 rel_idx+1 开始搬，避免 rel_idx=0 时读到 arr[-1]
            for i in range(size - 1, rel_idx, -1):
                struct.pack_into(">I", data, arr[i], struct.unpack(">I", data[arr[i-1]:arr[i-1]+4])[0])
            struct.pack_into(">I", data, arr[rel_idx], 0)
        else:
            for i in range(rel_idx, size - 1):
                struct.pack_into(">I", data, arr[i], struct.unpack(">I", data[arr[i+1]:arr[i+1]+4])[0])
            struct.pack_into(">I", data, arr[size - 1], 0)
    return True


def _category_rel_index(inventory, target_slot):
    """target_slot 物品在其修饰符类别里的相对序号。非武器返回 (None, None)。"""
    cnt = {"sword": 0, "bow": 0, "shield": 0}
    for it in inventory:
        cat = weapon_category(it["name"])
        if cat:
            if it["slot"] == target_slot:
                return cat, cnt[cat]
            cnt[cat] += 1
    return None, None


def find_empty_slot(sav_path):
    inventory = read_inventory_from_sav(sav_path)
    occupied = set(it["slot"] for it in inventory)
    for s in range(MAX_INVENTORY_SLOTS):
        if s not in occupied:
            return s
    return -1


def add_item_to_sav(sav_path, item_name, quantity=1, target_slot=None):
    """
    在背包里添加一个物品。
    target_slot=None → 自动找空槽位
    target_slot=数字 → 指定槽位（该槽位必须为空）
    返回：槽位号（成功）；-1 = 满；-2 = 目标槽位被占用；-3 = 名字太长
    V11.2：同时清空该槽位装备旗标，并在类别修饰符数组插入占位 0（保持对位）
    """
    if len(item_name) > INVENTORY_NAME_SIZE - 1:
        return -3

    inventory = read_inventory_from_sav(sav_path)
    occupied = set(it["slot"] for it in inventory)

    if target_slot is None:
        target_slot = -1
        for s in range(MAX_INVENTORY_SLOTS):
            if s not in occupied:
                target_slot = s
                break
        if target_slot < 0:
            return -1
    else:
        if target_slot in occupied:
            return -2

    name_bytes = item_name.encode("ascii").ljust(INVENTORY_NAME_SIZE, b"\x00")[:INVENTORY_NAME_SIZE]

    with open(sav_path, "rb") as f:
        data = bytearray(f.read())

    # ★ V11.2：新增物品同时点亮 IsGet 所有权旗标（游戏内可见性的关键，
    #   否则游戏认为你"从未获得"该物品，背包里不显示）
    flag_hashes = _load_flag_hashes()
    isget_hash = flag_hashes.get("IsGet_" + item_name)

    pos = 12
    porch_index = 0
    value_slot = 0
    equip_pos = []
    isget_pos = None

    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]

        if h == HASH_PORCH_ITEM:
            cur_slot = porch_index // 16
            if cur_slot == target_slot:
                offset = (porch_index % 16) * 4
                chunk = name_bytes[offset:offset+4]
                val = struct.unpack(">I", chunk)[0]
                struct.pack_into(">I", data, pos + 4, val)
            porch_index += 1

        elif h == HASH_PORCH_ITEM_VALUE:
            if value_slot == target_slot:
                struct.pack_into(">I", data, pos + 4, quantity & 0xFFFFFFFF)
            value_slot += 1

        elif h == HASH_PORCH_EQUIP:
            equip_pos.append(pos + 4)

        elif isget_hash is not None and h == isget_hash:
            isget_pos = pos + 4

        pos += 8

    # 清空装备旗标（防止残留的 equipped=1 被新物品继承）
    if target_slot < len(equip_pos):
        struct.pack_into(">I", data, equip_pos[target_slot], 0)

    # 点亮所有权旗标
    if isget_pos is not None:
        struct.pack_into(">I", data, isget_pos, 1)

    with open(sav_path, "wb") as f:
        f.write(data)

    # 修饰符数组插入占位（保持类别内对位）
    cat, rel = _category_rel_index(read_inventory_from_sav(sav_path), target_slot)
    if cat:
        with open(sav_path, "rb") as f:
            data = bytearray(f.read())
        _modifier_shift(data, cat, rel, insert=True)
        with open(sav_path, "wb") as f:
            f.write(data)

    return target_slot


def _name_from_slot_words(words):
    """背包槽位的 16 个 u32 → ASCII 名字（与 read_inventory_from_sav 的解码方式一致）"""
    raw = b"".join(struct.pack(">I", w & 0xFFFFFFFF) for w in words)
    end = raw.find(b"\x00")
    chunk = raw[:end] if end >= 0 else raw
    try:
        return chunk.decode("ascii").strip()
    except UnicodeDecodeError:
        return ""


def _read_slot_records(data):
    """
    读出背包三个「按槽位排列」的数组：
        PorchItem            × 6720（420 槽 × 16 个 u32 名字）
        PorchItem_Value1     × 420
        PorchItem_EquipFlag  × 420
    返回 (item_pos, val_pos, eq_pos, records)，records[s] = {words, name, value, equip}。
    """
    item_pos = _hash_positions(data, HASH_PORCH_ITEM)
    val_pos = _hash_positions(data, HASH_PORCH_ITEM_VALUE)
    eq_pos = _hash_positions(data, HASH_PORCH_EQUIP)
    need_item = MAX_INVENTORY_SLOTS * 16
    if len(item_pos) < need_item or len(val_pos) < MAX_INVENTORY_SLOTS or len(eq_pos) < MAX_INVENTORY_SLOTS:
        raise ValueError(
            f"背包数组长度异常（PorchItem {len(item_pos)}/{need_item}、"
            f"Value1 {len(val_pos)}/{MAX_INVENTORY_SLOTS}、"
            f"Equip {len(eq_pos)}/{MAX_INVENTORY_SLOTS}），拒绝改写"
        )
    unpack = struct.unpack
    records = []
    for s in range(MAX_INVENTORY_SLOTS):
        base = s * 16
        words = [unpack(">I", data[item_pos[base + w]:item_pos[base + w] + 4])[0] for w in range(16)]
        records.append({
            "words": words,
            "name": _name_from_slot_words(words),
            "value": unpack(">I", data[val_pos[s]:val_pos[s] + 4])[0],
            "equip": unpack(">I", data[eq_pos[s]:eq_pos[s] + 4])[0],
        })
    return item_pos, val_pos, eq_pos, records


def _write_slot_records(data, item_pos, val_pos, eq_pos, records):
    """把 records 稠密写回槽位 0..N-1，其余槽位清零（三个数组同步）。"""
    pack = struct.pack_into
    for s in range(MAX_INVENTORY_SLOTS):
        rec = records[s] if s < len(records) else None
        base = s * 16
        words = rec["words"] if rec else None
        for w in range(16):
            pack(">I", data, item_pos[base + w], words[w] if words else 0)
        pack(">I", data, val_pos[s], rec["value"] if rec else 0)
        pack(">I", data, eq_pos[s], rec["equip"] if rec else 0)


def compact_inventory_slots(sav_path):
    """
    ★ V11.7：把背包物品数组压成稠密（去掉中间所有空洞），保持相对顺序。
    BOTW 的背包是稠密列表（槽位 0..N-1 连续），游戏顺序读取时遇到空洞会
    截断列表 —— 表现为「空洞之后的服装/材料在游戏里全部看不见」。
    返回 (压前物品数, 压后物品数)；已经是稠密的档不会被改写。
    本函数也用来修复早期版本删除物品后留下空洞的存档。
    """
    with open(sav_path, "rb") as f:
        data = bytearray(f.read())
    item_pos, val_pos, eq_pos, records = _read_slot_records(data)
    before = sum(1 for r in records if r["name"])
    kept = [r for r in records if r["name"]]
    if len(kept) == len(records):
        return before, before          # 本来就没有空洞，不碰文件
    _write_slot_records(data, item_pos, val_pos, eq_pos, kept)
    with open(sav_path, "wb") as f:
        f.write(data)
    return before, len(kept)


def heal_inventory_holes(sav_path):
    """
    ★ V11.8：编辑流程开始前自愈背包空洞（调用既有的 compact_inventory_slots）。

    为什么必须补这一步：
      · BOTW 的背包是稠密列表，游戏顺序读到空洞就截断 —— 空洞之后的服装/材料
        在游戏里集体不显示（V11.7 已确认的机制）；
      · delete_item_from_sav 会补洞，但**历史遗留**的空洞（早期版本删过物品、
        或别的修改器改过）不会自己消失；
      · compact_inventory_slots() 早就写好却从来没被调用过 —— 这种档一直修不了。
    时机也关键：必须在「导出 savdata JSON / 生成 inventory.json」之前补洞，
    否则 JSON 里的槽位号会和补洞后的真实槽位对不上，写回整体错位。
    返回 (原物品数, 现物品数, 是否改写)；任何异常只警告，不阻断流程。
    """
    try:
        before, after = compact_inventory_slots(sav_path)
    except Exception as e:
        print(f"⚠️ 背包空洞自检跳过（{e}）")
        return None
    if after < before:
        print(f"✓ 背包空洞已自动补齐：{before} 件 → 压成 0..{after - 1} 连续槽位")
        print("  （空洞之后原本在游戏里看不见的服装/材料，现在会正常显示）")
    return before, after, after < before


def delete_item_from_sav(sav_path, target_slot):
    """
    删除槽位物品：把该槽位之后的物品整体前移一格（补洞），
    并压缩类别修饰符数组（V11.2）。

    ★ V11.7 修复的严重 bug
    ----------------------
    旧实现只「清名字 / 清数量 / 清装备旗标」，**不移动后续物品**，
    于是 PorchItem 里留下一个空洞。而 BOTW 的背包是稠密列表
    （实测用户两份正常存档都是 0..N-1 连续无洞，find_empty_slot()
    也是从槽位 0 找第一个空位），游戏顺序读取时遇到空洞就不再往下显示。
    实测后果：用户删掉槽位 33 的重复防具后，槽位 33 之后的所有物品
    （大部分服装 + 全部材料/料理）在游戏里集体消失。
    """
    inventory = read_inventory_from_sav(sav_path)
    cat, rel = _category_rel_index(inventory, target_slot)

    with open(sav_path, "rb") as f:
        data = bytearray(f.read())
    item_pos, val_pos, eq_pos, records = _read_slot_records(data)
    # 去掉目标槽位，其余非空物品按原顺序前移补洞（顺带自愈历史遗留的空洞）
    kept = [r for i, r in enumerate(records) if i != target_slot and r["name"]]
    _write_slot_records(data, item_pos, val_pos, eq_pos, kept)
    with open(sav_path, "wb") as f:
        f.write(data)

    if cat:
        with open(sav_path, "rb") as f:
            data = bytearray(f.read())
        _modifier_shift(data, cat, rel, insert=False)
        with open(sav_path, "wb") as f:
            f.write(data)


def _norm_u32(v):
    """把整数归一化成无符号 32 位。接受 [-2^31, 2^32) 的任何整数
    （负数按二进制补码解释，如 -2147483644 → 0x80000004）。越界返回 None。"""
    try:
        v = int(v)
    except (TypeError, ValueError):
        return None
    if -0x80000000 <= v <= 0xFFFFFFFF:
        return v & 0xFFFFFFFF
    return None


def validate_inventory_json(inventory_json):
    """
    校验 inventory.json 结构。返回 (ok, 错误信息)。
    ★ V11.3：value/modifier/modifier_value 接受负数补码表示并自动归一化
      （JS 的 & 0xFFFFFFFF 会把 ≥2^31 的值变成负数，这里兼容它而不是报错）。
    """
    if not isinstance(inventory_json, list):
        return False, "顶层应该是数组 [...]，实际是 " + type(inventory_json).__name__
    seen_slots = set()
    for i, it in enumerate(inventory_json):
        if not isinstance(it, dict):
            return False, f"第 {i} 项不是对象"
        # ★ V11.6：容量标记元素（{"_capacity": {...}}）不是物品，跳过物品校验
        if "_capacity" in it:
            cap = it["_capacity"]
            if not isinstance(cap, dict):
                return False, f"第 {i} 项 _capacity 应为对象"
            for k in ("weapon", "bow", "shield"):
                if k in cap and cap[k] is not None \
                        and (isinstance(cap[k], bool) or not isinstance(cap[k], int)):
                    return False, f"第 {i} 项 _capacity.{k} 应为整数或 null"
            continue
        if "_deleted" in it:
            if "slot" not in it:
                return False, f"第 {i} 项标记了删除但没有 slot"
            continue
        for key in ("slot", "name"):
            if key not in it:
                return False, f"第 {i} 项缺少 {key} 字段"
        if not isinstance(it["name"], str) or not it["name"]:
            return False, f"第 {i} 项 name 为空"
        if len(it["name"]) > INVENTORY_NAME_SIZE - 1:
            return False, f"第 {i} 项物品名太长（>{INVENTORY_NAME_SIZE-1} 字符）：{it['name']}"
        # ★ V11.4：名字必须 ASCII——add_item_to_sav 用 encode("ascii") 编码，
        #   手改 JSON 塞进中文会让写回在"删除已落盘、新增半途"时才崩溃
        if not it["name"].isascii():
            return False, f"第 {i} 项（{it['name']}）name 含非 ASCII 字符（存档物品名只支持 ASCII）"
        if "value" in it:
            v = it["value"]
            nv = _norm_u32(v)
            if not isinstance(v, int) or nv is None:
                return False, f"第 {i} 项（{it['name']}）value 非法：{v}（应为 0~4294967295 的整数）"
            it["value"] = nv  # 归一化（如 -1 → 4294967295）
        s = it["slot"]
        # ★ V11.4：slot 必须是整数；负数槽位 = 前端"新增物品"的临时占位
        #   （V11.4 起从 -1001 递减保证唯一，不再都是 -1）
        if not isinstance(s, int):
            return False, f"第 {i} 项 slot 非法：{s!r}（应为整数）"
        if s >= 0:
            if s in seen_slots:
                return False, f"槽位 {s} 出现了两次"
            seen_slots.add(s)
        if "modifier" in it:
            m = it["modifier"]
            nm = _norm_u32(m)
            if not isinstance(m, int) or nm is None:
                return False, f"第 {i} 项（{it['name']}）modifier 非法：{m}"
            it["modifier"] = nm  # 归一化（如 -2147483644 → 2147483652）
        if "modifier_value" in it:
            mv = it["modifier_value"]
            nmv = _norm_u32(mv)
            if not isinstance(mv, int) or nmv is None:
                return False, f"第 {i} 项（{it['name']}）modifier_value 非法：{mv}"
            it["modifier_value"] = nmv
    return True, None


def _load_flag_hashes():
    """懒加载 savdata_list471B.json 的 {旗标名: 哈希}，用于点亮 IsGet 旗标"""
    global _FLAG_HASHES
    try:
        return _FLAG_HASHES
    except NameError:
        pass
    _FLAG_HASHES = {}
    try:
        # ★ V12.3：同样按 SEARCH_DIRS 找表，exe 旁边的表缺失也能工作
        _p471b = os.path.join(EXE_DIR, "savdata_list471B.json")
        if not os.path.isfile(_p471b):
            for _d in SEARCH_DIRS:
                _c = os.path.join(_d, "savdata_list471B.json")
                if os.path.isfile(_c):
                    _p471b = _c
                    break
        sl = json.load(open(_p471b, encoding="utf-8"))
        for h, n in sl.get("game_data.sav", {}).items():
            _FLAG_HASHES[n] = int(h) & 0xFFFFFFFF
    except Exception as e:
        print("⚠️ 读取 savdata_list471B.json 失败（马具/升星旗标点亮将跳过）：", e)
    return _FLAG_HASHES


def _modifier_slot_map(sav_path):
    """当前 SAV 布局下 {槽位: (类别, 类别内相对序号)}，以及三类修饰符数组的现值。"""
    mods = read_modifiers_from_sav(sav_path)
    mods_value = {"sword": [], "bow": [], "shield": []}
    for _, h, v in parse_sav_chunks(sav_path):
        if h == HASH_SWORD_VALUE:
            mods_value["sword"].append(v)
        elif h == HASH_BOW_VALUE:
            mods_value["bow"].append(v)
        elif h == HASH_SHIELD_VALUE:
            mods_value["shield"].append(v)
    cat_index = {"sword": 0, "bow": 0, "shield": 0}
    slot_to_cat_idx = {}
    for it in read_inventory_from_sav(sav_path):
        cat = weapon_category(it["name"])
        if cat:
            slot_to_cat_idx[it["slot"]] = (cat, cat_index[cat])
            cat_index[cat] += 1
    return mods, mods_value, slot_to_cat_idx


def write_inventory_to_sav(sav_path, inventory_json):
    """
    根据 inventory.json 写回 SAV。
    返回 (数量更新数, 删除数, 新增数, 修饰符更新数, 新增失败数, 换形数, 点亮旗标数)
    ★ V11.1：入口处先做结构校验，坏 JSON 直接抛 ValueError。

    ★ V11.8 修复的严重 bug —— 阶段顺序
    ------------------------------------
    JSON 里的 slot 是【导入时的原始槽位】，而删除会把后面的物品整体前移补洞
    （V11.7 的稠密化）。旧版先删、先加，最后才按 JSON 里的原始 slot 写数量 /
    名字 / 修饰符，于是只要「删掉任何一件 + 同时改了它后面的物品」，
    那些改动就整体错位一格落到别的物品上（实测：删除后 1234567 被写进了
    相邻的另一件护甲，修饰符同理）。
    正确顺序：
        ① 名字 + 数量（按原始槽位）
        ② 修饰符（按原始槽位的类别序号）
        ③ 删除（从大到小，补洞）
        ④ 新增（落位 + 修饰符）
    前两步在布局没变时做，后面两步只做搬移，改动才会跟着物品走。
    """
    ok, err = validate_inventory_json(inventory_json)
    if not ok:
        raise ValueError("inventory.json 校验失败：" + err)

    # ★ V11.6：剥掉容量标记（只用于 HTML 显示，不参与任何 SAV 写入）
    inventory_json = [it for it in inventory_json if "_capacity" not in it]

    # 同时带 _new 和 _deleted 的条目视为「没加过、也不用删」，两个阶段都跳过
    to_delete = [it for it in inventory_json if it.get("_deleted") and not it.get("_new")]
    to_add    = [it for it in inventory_json if it.get("_new") and not it.get("_deleted")]
    to_update = [it for it in inventory_json if not it.get("_new") and not it.get("_deleted")]

    # ★ V11.2：名字变更（护甲升星 = 换成 ★ 形态 ID）
    cur_names = {it["slot"]: it["name"] for it in read_inventory_from_sav(sav_path)}
    name_changes = {}
    for item in to_update:
        s = int(item["slot"])
        if "name" in item and item["name"] != cur_names.get(s):
            name_changes[s] = str(item["name"])

    changes = {}
    for item in to_update:
        if "value" not in item:
            continue  # V11.2：缺 value 的更新项跳过而不是崩溃
        changes[int(item["slot"])] = int(item["value"]) & 0xFFFFFFFF

    with open(sav_path, "rb") as f:
        data = bytearray(f.read())
    pos = 12
    slot = 0
    porch_index = 0
    written = 0
    name_words = {s: _encode_string64(n) for s, n in name_changes.items()}
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h == HASH_PORCH_ITEM:
            cur_slot = porch_index // 16
            if cur_slot in name_words:
                offset = porch_index % 16
                struct.pack_into(">I", data, pos + 4, name_words[cur_slot][offset])
            porch_index += 1
        elif h == HASH_PORCH_ITEM_VALUE:
            if slot in changes:
                struct.pack_into(">I", data, pos + 4, changes[slot])
                written += 1
            slot += 1
        pos += 8
    with open(sav_path, "wb") as f:
        f.write(data)

    # ★ V11.2：点亮升星后形态的所有权旗标
    flags_lit = 0
    if name_changes:
        flag_hashes = _load_flag_hashes()
        lit = set()
        for nm in name_changes.values():
            h = flag_hashes.get("IsGet_" + nm)
            if h:
                lit.add(h)
        if lit:
            with open(sav_path, "rb") as f:
                data = bytearray(f.read())
            pos = 12
            while pos + 8 <= len(data):
                h = struct.unpack(">I", data[pos:pos+4])[0]
                if h in lit and struct.unpack(">I", data[pos+4:pos+8])[0] != 1:
                    struct.pack_into(">I", data, pos + 4, 1)
                    flags_lit += 1
                pos += 8
            with open(sav_path, "wb") as f:
                f.write(data)

    # ★ V11.1：修饰符按三线数组写回。
    #   ★ V11.8：必须在「删除 / 新增」之前做——此时槽位仍是 JSON 里的原始槽位。
    mods, mods_value, slot_to_cat_idx = _modifier_slot_map(sav_path)

    mod_updated = 0
    mod_value_updated = 0
    for item in to_update:
        slot = int(item["slot"])
        info = slot_to_cat_idx.get(slot)
        if not info:
            continue
        cat, idx = info
        if "modifier" in item:
            new_mod = int(item["modifier"]) & 0xFFFFFFFF
            if idx < len(mods[cat]) and new_mod != mods[cat][idx]:
                mods[cat][idx] = new_mod
                mod_updated += 1
        if "modifier_value" in item:
            new_mv = int(item["modifier_value"]) & 0xFFFFFFFF
            if idx < len(mods_value[cat]) and new_mv != mods_value[cat][idx]:
                mods_value[cat][idx] = new_mv
                mod_value_updated += 1
    if mod_updated > 0:
        write_modifiers_to_sav(sav_path, mods)
    if mod_value_updated > 0:
        write_modifier_values_to_sav(sav_path, mods_value)

    # ★ V11.7：删除会把后续物品前移一格补洞，所以必须「槽位从大到小」处理。
    #   否则删掉低位槽位后，后面的 target_slot 已经指向被前移过来的别的物品 → 删错东西。
    #   ★ V11.8：删除放在数量/名字/修饰符写完之后（见函数头注释）。
    for it in sorted(to_delete, key=lambda x: int(x["slot"]), reverse=True):
        delete_item_from_sav(sav_path, int(it["slot"]))

    add_ok, add_fail = 0, 0
    add_landed = []  # ★ V11.6：(新物品 JSON, add_item_to_sav 返回的实际落位 slot)，供修饰符写回
    for it in to_add:
        r = add_item_to_sav(sav_path, it["name"], int(it.get("value", 1)))
        if r >= 0:
            add_ok += 1
            if "modifier" in it or "modifier_value" in it:
                add_landed.append((it, r))
        else:
            add_fail += 1

    # ★ V11.6：新增物品自带修饰符时，写入其落位槽位（add 时插入的占位 0 处）。
    #   数组在增删之后已经搬过，所以这里必须重新读一遍现值与槽位映射。
    if add_landed:
        mods, mods_value, slot_to_cat_idx = _modifier_slot_map(sav_path)
        for item, landed_slot in add_landed:
            info = slot_to_cat_idx.get(landed_slot)
            if not info:
                continue
            cat, idx = info
            if "modifier" in item:
                new_mod = int(item["modifier"]) & 0xFFFFFFFF
                if idx < len(mods[cat]) and new_mod != mods[cat][idx]:
                    mods[cat][idx] = new_mod
                    mod_updated += 1
            if "modifier_value" in item:
                new_mv = int(item["modifier_value"]) & 0xFFFFFFFF
                if idx < len(mods_value[cat]) and new_mv != mods_value[cat][idx]:
                    mods_value[cat][idx] = new_mv
                    mod_value_updated += 1
        if mod_updated > 0:
            write_modifiers_to_sav(sav_path, mods)
        if mod_value_updated > 0:
            write_modifier_values_to_sav(sav_path, mods_value)

    return written, len(to_delete), add_ok, mod_updated + mod_value_updated, add_fail, len(name_changes), flags_lit


# ------------------------------------------------------------
# 7.5 马匹区解析（和背包同一条 Python 线路）
# ------------------------------------------------------------
# 数组哈希来自 uking_saves 权威布局表，实测：每匹马 16 块 string64，共 6 槽（5 注册 + 1 野马）

HORSE_ARRAY_HASHES = {
    "actor":  0xC247B696,  # Horse_ActorName  品种
    "name":   0x7B74E117,  # Horse_UserName   名字
    "saddle": 0x333AA6E5,  # Horse_SaddleName 马鞍
    "reins":  0x6150C6BE,  # Horse_ReinsName  缰绳
    "mane":   0x9C6CFD3F,  # Horse_ManeName   鬃毛
}
HORSE_FAMILIARITY_HASH = 0xE1A0CA54  # Horse_Familiarity f32 × 6（0~1，×100=亲密度%）
MAX_HORSE_SLOTS = 6

# 马具所有权旗标（换马具时自动点亮，保证驿站里能再次装备）
HORSE_TACK_ISGET_HASHES = {
    "GameRomHorseSaddle_01": 0x25B4A466,
    "GameRomHorseSaddle_02": 0xBCBDF5DC,
    "GameRomHorseSaddle_03": 0xCBBAC54A,
    "GameRomHorseSaddle_04": 0x55DE50E9,
    "GameRomHorseSaddle_05": 0x22D9607F,
    "GameRomHorseSaddle_10": 0x4BA8A5B1,
    "GameRomHorseReins_01":  0xAE33F926,
    "GameRomHorseReins_02":  0x373AA89C,
    "GameRomHorseReins_03":  0x403D980A,
    "GameRomHorseReins_04":  0xDE590DA9,
    "GameRomHorseReins_05":  0xA95E3D3F,
    "GameRomHorseReins_10":  0xC02FF8F1,
}


def _read_string_runs(data, hash_value, n_slots):
    """把连续的 string64 数组块解码成字符串列表（每串 16 块 × 4 字节 = 64 字节）"""
    vals = []
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h == hash_value:
            vals.append(struct.unpack(">I", data[pos+4:pos+8])[0])
        pos += 8
    out = []
    for i in range(n_slots):
        chunk = vals[i*16:(i+1)*16]
        if len(chunk) < 16:
            break
        raw = b"".join(struct.pack(">I", x) for x in chunk)[:64]
        end = raw.find(b"\x00")
        out.append(raw[:end].decode("ascii", errors="replace") if end >= 0 else raw.decode("ascii", errors="replace"))
    return out


def _encode_string64(s):
    b = s.encode("ascii", errors="replace")[:64]
    b = b + b"\x00" * (64 - len(b))
    return [struct.unpack(">I", b[i:i+4])[0] for i in range(0, 64, 4)]


def read_horses_from_sav(sav_path):
    """读出全部 6 个马匹槽位。actor 为空表示空槽位。"""
    with open(sav_path, "rb") as f:
        data = f.read()
    arrs = {k: _read_string_runs(data, h, MAX_HORSE_SLOTS) for k, h in HORSE_ARRAY_HASHES.items()}
    fam_raw = []
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h == HORSE_FAMILIARITY_HASH:
            fam_raw.append(struct.unpack(">I", data[pos+4:pos+8])[0])
        pos += 8

    def at(key, i):
        # ★ V11.8：某个数组比 actor 短时不再 IndexError（截断/特殊的档也能读出来）
        arr = arrs.get(key) or []
        return arr[i] if i < len(arr) else ""

    horses = []
    for i in range(MAX_HORSE_SLOTS):
        if i >= len(arrs["actor"]):
            break
        bonding = 0
        if i < len(fam_raw):
            bonding = round(struct.unpack(">f", struct.pack(">I", fam_raw[i]))[0] * 100)
        horses.append({
            "slot": i,
            "actor": at("actor", i),
            "name": at("name", i),
            "saddle": at("saddle", i),
            "reins": at("reins", i),
            "mane": at("mane", i),
            "bonding": max(0, min(100, bonding)),
        })
    return horses


def write_horses_to_sav(sav_path, horses_json):
    """
    写回马匹信息（品种/名字/马鞍/缰绳/鬃毛/亲密度），并自动点亮马具所有权旗标。
    返回 (其他字段修改数, 马具修改数, 亲密度修改数, 点亮的旗标数)
    """
    with open(sav_path, "rb") as f:
        data = bytearray(f.read())

    positions = {h: [] for h in HORSE_ARRAY_HASHES.values()}
    fam_pos = []
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h in positions:
            positions[h].append(pos + 4)
        elif h == HORSE_FAMILIARITY_HASH:
            fam_pos.append(pos + 4)
        pos += 8

    other_changed = tack_changed = bond_changed = flags_lit = 0
    lit_flags = set()

    for it in horses_json:
        try:
            slot = int(it["slot"])
        except (KeyError, TypeError, ValueError):
            continue
        if slot < 0 or slot >= MAX_HORSE_SLOTS:
            continue

        for field, h in HORSE_ARRAY_HASHES.items():
            if field not in it:
                continue
            new_s = str(it[field])
            plist = positions[h]
            if len(plist) < (slot + 1) * 16:
                continue
            base = slot * 16
            words = _encode_string64(new_s)
            cur = b"".join(struct.pack(">I", struct.unpack(">I", data[plist[base+i]:plist[base+i]+4])[0]) for i in range(16))
            if cur == b"".join(struct.pack(">I", w) for w in words):
                continue
            for i in range(16):
                struct.pack_into(">I", data, plist[base + i], words[i])
            if field in ("saddle", "reins"):
                tack_changed += 1
                if new_s.startswith("GameRomHorseSaddle_") or new_s.startswith("GameRomHorseReins_"):
                    if new_s in HORSE_TACK_ISGET_HASHES:
                        lit_flags.add(HORSE_TACK_ISGET_HASHES[new_s])
            else:
                other_changed += 1

        if "bonding" in it and slot < len(fam_pos):
            try:
                bond = max(0, min(100, int(it["bonding"])))
            except (TypeError, ValueError):
                continue
            cur_f = struct.unpack(">f", data[fam_pos[slot]:fam_pos[slot]+4])[0]
            # ★ V11.8：亲密度按「百分比」比较，不按原始 f32 位比较。
            #   读出来是 round(f32×100)，写回去是 f32(百分比/100)，两者可能差 1 ulp
            #   （例如存档里存 0.14999999 → 读 15% → 写回 0.15），于是"没改任何东西"
            #   的写回也会悄悄改掉 4 个字节。百分比一致就完全不动这一格。
            try:
                cur_pct = round(cur_f * 100) if math.isfinite(cur_f) else None
            except (OverflowError, ValueError):
                cur_pct = None
            if cur_pct == bond:
                continue
            raw = struct.unpack(">I", struct.pack(">f", bond / 100.0))[0]
            cur_raw = struct.unpack(">I", data[fam_pos[slot]:fam_pos[slot]+4])[0]
            if cur_raw != raw:
                struct.pack_into(">I", data, fam_pos[slot], raw)
                bond_changed += 1

    if lit_flags:
        pos = 12
        while pos + 8 <= len(data):
            h = struct.unpack(">I", data[pos:pos+4])[0]
            if h in lit_flags and struct.unpack(">I", data[pos+4:pos+8])[0] != 1:
                struct.pack_into(">I", data, pos + 4, 1)
                flags_lit += 1
            pos += 8

    with open(sav_path, "wb") as f:
        f.write(data)
    return other_changed, tack_changed, bond_changed, flags_lit


def apply_horses_json_if_changed(horses_json, hash_before, sav_path):
    """马匹 JSON 有改动时写回。返回 True 表示已应用。"""
    if not horses_json or not os.path.isfile(horses_json):
        return False
    if file_sha256(horses_json) == hash_before:
        return False
    with open(horses_json, "r", encoding="utf-8") as f:
        horses_data = json.load(f)
    if not isinstance(horses_data, list):
        print("⚠️ horses.json 格式不对（顶层应为数组），已跳过。")
        return False
    other_n, tack_n, bond_n, flag_n = write_horses_to_sav(sav_path, horses_data)
    print(f"✓ 马匹更新：品种/名字/鬃毛 {other_n} 处 · 马鞍/缰绳 {tack_n} 处 · 亲密度 {bond_n} 匹 · 点亮马具旗标 {flag_n} 个")
    return True


# ------------------------------------------------------------
# 7.8 Link 位置读写（★ V11.5：PlayerSavePos）
# ------------------------------------------------------------
# 字段来自 savdata_list471B.json（uking_saves 权威布局表），并经真实存档探测验证。
# Link 的保存位置是 savdata 普通哈希条目，不是特殊结构：
#     PlayerSavePos             0xA40BA103  f32 ×3       X/Y/Z（世界坐标，大端 IEEE-754 位模式）
#     PlayerSavePosAngleYDegree 0x6293B955  f32 ×1       朝向角（度）
#     PlayerSavePosMapName      0x0BEE9E46  string32 ×8  存档时所在地图区块名（基准档实测 "D-6"）
#     PlayerSavePosMapType      0xD913B769  string32 ×8  存档时所在地图类型（基准档实测 "MainField"）
# 写回只改 PlayerSavePos（含可选 Angle）对应哈希的值字段，MapName/MapType 及其余字节不动。

HASH_PLAYER_SAVE_POS       = 0xA40BA103
HASH_PLAYER_SAVE_ANGLE     = 0x6293B955
HASH_PLAYER_SAVE_MAP_NAME  = 0x0BEE9E46
HASH_PLAYER_SAVE_MAP_TYPE  = 0xD913B769

# 数值合法性范围（世界坐标粗界，拦截手滑输入；单位≈米）
POSITION_LIMITS = {"x": (-5000.0, 5000.0), "y": (-1000.0, 5000.0), "z": (-5000.0, 5000.0)}


def _words_at_hash(data, hash_value):
    """某个哈希全部条目的值（按文件顺序的 u32）"""
    return [struct.unpack(">I", data[p:p+4])[0] for p in _hash_positions(data, hash_value)]


def _string32_from_words(words):
    raw = b"".join(struct.pack(">I", w & 0xFFFFFFFF) for w in words)
    end = raw.find(b"\x00")
    return (raw[:end] if end >= 0 else raw).decode("ascii", errors="replace")


def _f32_from_word(w):
    return struct.unpack(">f", struct.pack(">I", w & 0xFFFFFFFF))[0]


def _f32_to_word(v):
    return struct.unpack(">I", struct.pack(">f", float(v)))[0]


def read_position_from_sav(sav_path):
    """读取 Link 保存位置。返回 {x, y, z, angle, map_name, map_type}，读不到的项为 None / ""。"""
    with open(sav_path, "rb") as f:
        data = f.read()
    pos_w = _words_at_hash(data, HASH_PLAYER_SAVE_POS)
    ang_w = _words_at_hash(data, HASH_PLAYER_SAVE_ANGLE)
    name_w = _words_at_hash(data, HASH_PLAYER_SAVE_MAP_NAME)
    type_w = _words_at_hash(data, HASH_PLAYER_SAVE_MAP_TYPE)
    return {
        "x": _f32_from_word(pos_w[0]) if len(pos_w) > 0 else None,
        "y": _f32_from_word(pos_w[1]) if len(pos_w) > 1 else None,
        "z": _f32_from_word(pos_w[2]) if len(pos_w) > 2 else None,
        "angle": _f32_from_word(ang_w[0]) if ang_w else None,
        "map_name": _string32_from_words(name_w[:8]) if name_w else "",
        "map_type": _string32_from_words(type_w[:8]) if type_w else "",
    }


def validate_position_json(pos_json):
    """
    校验 position.json（就地归一化数值）。返回 (ok, 错误信息)。
    """
    if not isinstance(pos_json, dict):
        return False, "顶层应该是对象 {...}，实际是 " + type(pos_json).__name__
    for k in ("x", "y", "z"):
        if k not in pos_json:
            return False, "缺少 " + k
        v = pos_json[k]
        if isinstance(v, bool) or not isinstance(v, (int, float)):
            return False, f"{k} 不是数字：{v!r}"
        v = float(v)
        if math.isnan(v) or math.isinf(v):
            return False, f"{k} 非法（NaN/Inf）"
        lo, hi = POSITION_LIMITS[k]
        if not lo <= v <= hi:
            return False, f"{k}={v} 超出世界坐标合理范围 [{lo}, {hi}]"
        pos_json[k] = v
    if pos_json.get("angle") is not None:
        v = pos_json["angle"]
        if isinstance(v, bool) or not isinstance(v, (int, float)) \
                or math.isnan(float(v)) or math.isinf(float(v)):
            return False, f"angle 非法：{v!r}"
        pos_json["angle"] = float(v)
    # 在神庙/神兽/特殊地图里存过档时，坐标含义不是世界坐标——需要显式确认才允许写
    mt = str(pos_json.get("map_type") or "")
    if mt and mt != "MainField" and not pos_json.get("confirm_non_mainfield"):
        return False, (f"存档时地图类型是 {mt}（非 MainField），写世界坐标可能卡加载；"
                       "确认要写请在 position.json 加 \"confirm_non_mainfield\": true")
    return True, None


def write_position_to_sav(sav_path, pos_json):
    """
    把 x/y/z（可选 angle）写回 PlayerSavePos。返回改动条数。
    只改匹配哈希的值字段；写后回读校验，不一致自动恢复原字节并抛异常。
    """
    ok, err = validate_position_json(pos_json)
    if not ok:
        raise ValueError("position.json 校验失败：" + err)

    with open(sav_path, "rb") as f:
        data = bytearray(f.read())
    original = bytes(data)  # 写前快照：校验失败时定向恢复位置字段

    targets = {HASH_PLAYER_SAVE_POS: [_f32_to_word(pos_json[k]) for k in ("x", "y", "z")]}
    if pos_json.get("angle") is not None:
        targets[HASH_PLAYER_SAVE_ANGLE] = [_f32_to_word(pos_json["angle"])]

    slots = {h: 0 for h in targets}
    changed = 0
    pos = 12
    while pos + 8 <= len(data):
        h = struct.unpack(">I", data[pos:pos+4])[0]
        if h in targets:
            arr = targets[h]
            s = slots[h]
            if s < len(arr) and arr[s] != struct.unpack(">I", data[pos+4:pos+8])[0]:
                struct.pack_into(">I", data, pos + 4, arr[s])
                changed += 1
            slots[h] += 1
        pos += 8

    if slots[HASH_PLAYER_SAVE_POS] != 3:
        raise ValueError(f"SAV 中 PlayerSavePos 条目数异常（{slots[HASH_PLAYER_SAVE_POS]}，应为 3），拒绝写入")
    if pos_json.get("angle") is not None and slots[HASH_PLAYER_SAVE_ANGLE] < 1:
        raise ValueError("SAV 中找不到 PlayerSavePosAngleYDegree，拒绝写入朝向")

    with open(sav_path, "wb") as f:
        f.write(data)

    # 回读校验；不一致则恢复写前字节（只影响位置区，其他数据本就没动）
    try:
        reread = read_position_from_sav(sav_path)
        for k in ("x", "y", "z"):
            if reread[k] != _f32_from_word(_f32_to_word(pos_json[k])):
                raise ValueError(f"{k} 回读不一致：期望 {pos_json[k]}，实际 {reread[k]}")
        if pos_json.get("angle") is not None and reread["angle"] != _f32_from_word(_f32_to_word(pos_json["angle"])):
            raise ValueError("angle 回读不一致")
    except Exception as e:
        with open(sav_path, "wb") as f:
            f.write(original)
        raise ValueError(f"位置写入校验失败（已自动恢复原字节）：{e}")
    return changed


def apply_position_json_if_changed(pos_json_path, hash_before, sav_path):
    """position.json 有改动时写回（与 horses 同一套对接方式）。返回 True 表示已应用。"""
    if not pos_json_path or not os.path.isfile(pos_json_path):
        return False
    if file_sha256(pos_json_path) == hash_before:
        return False
    with open(pos_json_path, "r", encoding="utf-8") as f:
        pos_data = json.load(f)
    n = write_position_to_sav(sav_path, pos_data)
    now = read_position_from_sav(sav_path)

    def _fmt(v):
        # ★ V11.8：字段读不到时不要用 None:.1f 抛 TypeError（写回其实已经成功了）
        return f"{v:.1f}" if isinstance(v, (int, float)) else "?"
    print(f"✓ 位置已写回：X={_fmt(now['x'])} Y={_fmt(now['y'])} Z={_fmt(now['z'])}（字节改动 {n} 处）")
    return True


# ------------------------------------------------------------
# 8. 菜单操作
# ------------------------------------------------------------

def do_export():
    print()
    print("==========================================")
    print(" [1] SAV → JSON （savdata）")
    print("==========================================")
    print()
    pause("按回车扫描主目录的 .sav ...")

    sav = prompt_choose_sav()
    if sav is None:
        pause()
        return

    run_export(sav)
    pause()


def do_import():
    print()
    print("==========================================")
    print(" [2] JSON → SAV （savdata）")
    print("==========================================")
    print()
    pause("按回车扫描 .sav.json ...")

    json_files = []
    for root, dirs, files in os.walk(BASE_DIR):
        dirs[:] = [d for d in dirs if d not in (".venv", "site-packages", "__pycache__", ".git")]
        for f in files:
            if f.endswith(".sav.json"):
                json_files.append(os.path.join(root, f))
    json_files.sort()

    if not json_files:
        print("❌ 没找到 .sav.json")
        pause()
        return

    if len(json_files) == 1:
        j = json_files[0]
        print(f"✓ 使用：{os.path.relpath(j, BASE_DIR)}")
    else:
        for i, p in enumerate(json_files, 1):
            print(f"  [{i}] {os.path.relpath(p, BASE_DIR)}")
        while True:
            c = input(f"请选择 [1-{len(json_files)}]，或 q：").strip().lower()
            if c == "q":
                pause()
                return
            if c.isdigit() and 1 <= int(c) <= len(json_files):
                j = json_files[int(c) - 1]
                break
            print("❌ 输入无效。")

    ok = run_import(j)
    if ok:
        # ★ V13.7：run_export 已改为"复制副本"，项目根可能留着一份旧 SAV —— 写回后问一句是否同步
        offer_copy_back_to_root(j[:-5] if j.lower().endswith(".json") else j)
    pause()


def do_full_cycle():
    print()
    print("==========================================")
    print(" [3] 一键流程 · savdata 编辑")
    print("==========================================")
    print()
    print("⚠️  本流程只修改 savdata 区（IsGet / 任务 / 心心 / 卢比…）")
    print("⚠️  如果你想同时改背包，请返回主菜单选 [5]")
    print()
    pause("按回车继续...")

    sav = prompt_choose_sav()
    if sav is None:
        pause()
        return

    json_path = run_export(sav)
    if not json_path:
        pause()
        return

    hash_before = file_sha256(json_path)
    json_name = os.path.basename(json_path)
    json_dir = os.path.dirname(json_path)

    while True:
        if HTML_FILE:
            print()
            print("正在打开 HTML 编辑器（将自动导入 savdata JSON）...")
            # ★ V13.6：改走本地服务 + ?auto=1，网页自动加载刚生成的 JSON
            open_editor_auto(json_dir, files=[json_name])

        print()
        print("=" * 50)
        print(" 请在浏览器中完成以下步骤：")
        print("=" * 50)
        print()
        print("  ① 确认 savdata JSON 已自动导入（V13.6 起页面打开即加载）")
        print("     若没有自动导入：点「📂 导入 JSON」选择 " + json_path)
        print("  ② 修改内容")
        print("  ③ 勾选顶部「用原文件名」")
        print("  ④ 点顶部「💾 导出 JSON」")
        print("  ⑤ 保存到：" + json_dir)
        print("     文件名：" + json_name)
        print("     覆盖原文件")
        print()

        pause("完成后回到这里按回车...")

        if not os.path.isfile(json_path):
            print("❌ JSON 不见了，放弃。")
            pause()
            return

        if file_sha256(json_path) == hash_before:
            print()
            print("⚠️  JSON 内容没变（SHA-256 一致）。")
            print("   可能：忘了导出 / 没保存到正确位置 / 没勾「用原文件名」")
            print()
            # ★ V13.0：主动去 Downloads 找刚导出的文件
            if offer_recover_from_downloads(json_path):
                if file_sha256(json_path) != hash_before:
                    print("✓ Downloads 里的文件已拷回，继续流程。")
                    break
            c = input("[y] 仍然继续  [r] 回去重新编辑  [n] 放弃：").strip().lower()
            if c == "y":
                break
            if c == "r":
                continue
            pause()
            return

        print("✓ 检测到 JSON 已更新。")
        break

    run_import(json_path)
    sav_final = os.path.join(os.path.dirname(json_path), os.path.basename(json_path)[:-5])
    offer_copy_back(sav_final)
    pause("全部完成，按回车退出...")


def do_inventory_edit():
    print()
    print("==========================================")
    print(" [4] 背包编辑")
    print("==========================================")
    print()
    print("⚠️  本流程只修改背包（数量 / 修饰符 / 增删物品），不改 savdata")
    print("⚠️  如果你想同时改 savdata，请返回主菜单选 [5]")
    print()
    pause("按回车选择 SAV ...")

    sav = prompt_choose_any_sav()
    if sav is None:
        pause()
        return

    work_dir = os.path.dirname(sav)
    inv_json = os.path.join(work_dir, "inventory.json")

    print()
    heal_inventory_holes(sav)          # ★ V11.8：先补历史遗留的空洞，再生成 JSON
    print("正在从 SAV 读取背包...")
    try:
        inventory = read_inventory_with_capacity_from_sav(sav)  # ★ V11.6：附带容量标记
    except Exception as e:
        print(f"❌ 读取失败：{e}")
        pause()
        return

    if not inventory:
        print("❌ 背包是空的，或解析失败。")
        pause()
        return

    print(f"✓ 读到 {len(inventory)} 个物品")

    with open(inv_json, "w", encoding="utf-8") as f:
        json.dump(inventory, f, ensure_ascii=False, indent=2)

    inv_hash_before = file_sha256(inv_json)
    print(f"✓ 已生成：{os.path.relpath(inv_json, BASE_DIR)}")

    # ★ V11.5：位置（position.json，供 HTML「📍 位置」Tab 读取/传送）
    pos_json = os.path.join(work_dir, "position.json")
    pos_hash_before = None
    try:
        pos = read_position_from_sav(sav)
        if pos["x"] is None:
            raise ValueError("SAV 中找不到 PlayerSavePos（3 条连续 f32）")
        with open(pos_json, "w", encoding="utf-8") as f:
            json.dump(pos, f, ensure_ascii=False, indent=2)
        pos_hash_before = file_sha256(pos_json)
        print(f"✓ 已生成：position.json（{pos['map_type'] or '未知地图'} · "
              f"X={pos['x']:.1f} Y={pos['y']:.1f} Z={pos['z']:.1f}）")
    except Exception as e:
        pos_json = None
        print(f"⚠️ position.json 生成失败（不影响背包编辑）：{e}")

    horses_json = os.path.join(work_dir, "horses.json")
    horses_hash_before = None
    try:
        horses = read_horses_from_sav(sav)
        with open(horses_json, "w", encoding="utf-8") as f:
            json.dump(horses, f, ensure_ascii=False, indent=2)
        horses_hash_before = file_sha256(horses_json)
        n_owned = sum(1 for hh in horses if hh["actor"])
        print(f"✓ 已生成：horses.json（{n_owned} 匹马）")
    except Exception as e:
        horses_json = None
        print(f"⚠️ horses.json 生成失败（不影响背包编辑）：{e}")

    if HTML_FILE:
        print()
        print("正在打开 HTML 编辑器（将自动导入 背包/马匹/位置 JSON）...")
        # ★ V13.6：改走本地服务 + ?auto=1，网页自动加载刚生成的 JSON
        auto_files = ["inventory.json"]
        if horses_json:
            auto_files.append(os.path.basename(horses_json))
        if pos_json:
            auto_files.append(os.path.basename(pos_json))
        open_editor_auto(work_dir, files=auto_files)

    print()
    print("=" * 50)
    print(" 请在浏览器中：")
    print("=" * 50)
    print()
    print("  ① 切到「🎒 背包」tab")
    print("  ② 确认 inventory.json 已自动导入（V13.6 起页面打开即加载）")
    print("     若没有自动导入：点「📂 读取 inventory.json」选择 " + inv_json)
    print("  ③ 修改数量 / 修饰符，或添加 / 删除物品")
    print("     （可选）切「🐴 马匹」读取 horses.json，换马鞍/缰绳/鬃毛/名字")
    print("     （可选）切「🐴 马匹」改完后点「💾 导出 horses.json」覆盖")
    print("     （可选）切「📍 位置」读取 position.json，查看坐标/最近地点或传送")
    print("  ④ 点「💾 保存修改」（直接写入选定文件）或「💾 导出 inventory.json」")
    print("  ⑤ 保存到：" + work_dir)
    print("     文件名：inventory.json")
    print("     覆盖原文件")
    print()

    pause("完成后回到这里按回车...")

    if not os.path.isfile(inv_json):
        print("❌ inventory.json 不见了，放弃。")
        pause()
        return

    if file_sha256(inv_json) == inv_hash_before:
        print()
        print("⚠️  inventory.json 没变化。")
        # ★ V13.0：主动去 Downloads 找刚导出的文件
        offer_recover_from_downloads(inv_json)
        if file_sha256(inv_json) == inv_hash_before:
            c = input("[y] 仍然继续  [r] 重新编辑（放弃本次） [n] 退出：").strip().lower()
            if c != "y":
                pause()
                return

    try:
        with open(inv_json, "r", encoding="utf-8") as f:
            new_inventory = json.load(f)
    except Exception as e:
        print(f"❌ 读取失败（JSON 坏了，存档未动）：{e}")
        pause()
        return

    backup = make_backup(sav, "before_inventory.bak")
    print(f"✓ 已备份原 SAV → {os.path.relpath(backup, BASE_DIR)}")

    try:
        written, n_del, n_add, n_mod, n_fail, n_name, n_flaglit = write_inventory_to_sav(sav, new_inventory)
    except ValueError as e:
        print(f"❌ {e}")
        print(f"   存档未动。备份在：{backup}")
        pause()
        return
    except Exception as e:
        print(f"❌ 写回失败：{e}")
        # ★ V11.4：写回是删→加→改名→改值→点旗标→写修饰符的多阶段过程，
        #   中途失败会留下"改一半"的存档——自动从写回前的备份恢复
        try:
            shutil.copy2(backup, sav)
            print("✓ 已自动从备份恢复原 SAV（本次写回作废）")
        except Exception as re_err:
            print(f"❌ 自动恢复失败，请手动把备份覆盖回去：{re_err}")
        print(f"   备份：{backup}")
        pause()
        return

    print()
    print(f"✓ 数量更新 {written} 个槽位")
    if n_add > 0: print(f"✓ 新增 {n_add} 个物品")
    if n_fail > 0: print(f"⚠️ {n_fail} 个物品添加失败（可能背包已满）")
    if n_del > 0: print(f"✓ 删除 {n_del} 个物品")
    if n_mod > 0: print(f"✓ 修饰符更新 {n_mod} 处")
    if n_name > 0: print(f"✓ 护甲升星换形 {n_name} 件（点亮旗标 {n_flaglit} 个）")

    try:
        apply_horses_json_if_changed(horses_json, horses_hash_before, sav)
    except Exception as e:
        print(f"❌ 马匹写回失败：{e}")
        print(f"   背包已写回，马匹未动。备份在：{backup}")

    # ★ V11.5：位置写回（失败不影响已写回的背包）
    try:
        apply_position_json_if_changed(pos_json, pos_hash_before, sav)
    except Exception as e:
        print(f"❌ 位置写回失败：{e}")
        print(f"   背包已写回，位置未动（写入前先校验，失败时位置区字节未改）。备份在：{backup}")

    print()
    print("SAV：", sav)
    print("备份：", backup)
    print()
    pause()


def do_full_both():
    print()
    print("==========================================")
    print(" [5] 完整流程 · savdata + 背包 一起改")
    print("==========================================")
    print()
    print("这是傻瓜式一键流程：")
    print("  1. SAV → savdata JSON + inventory JSON")
    print("  2. 你在浏览器里同时改两个")
    print("  3. 程序依次写回（先 savdata，再背包）")
    print()
    pause("按回车继续...")

    sav = prompt_choose_sav()
    if sav is None:
        pause()
        return

    # ★ V11.8：必须在 run_export（C++ 导出 savdata）之前补洞：
    #   [5] 流程是先 C++ 导回 savdata、再 Python 写背包，而写背包用的是
    #   补洞前的 inventory.json 槽位号，所以两边必须看到同一份布局。
    heal_inventory_holes(sav)

    json_path = run_export(sav)
    if not json_path:
        pause()
        return

    output_dir = os.path.dirname(json_path)
    sav_filename = os.path.basename(json_path)[:-5]
    sav_path = os.path.join(output_dir, sav_filename)
    inv_json = os.path.join(output_dir, "inventory.json")

    # ★ V12.1 原为"savdata JSON 就绪后立即打开 HTML"；
    # ★ V13.6 改为等四个 JSON 全部生成后再打开——这样 ?auto=1 自动导入
    #   能一次拿到 savdata + 背包 + 马匹 + 位置（生成本身只需不到 1 秒）。
    #   打开动作见下方 while 循环之前的 open_editor_auto()。

    print()
    print("正在读取背包...")
    try:
        inventory = read_inventory_with_capacity_from_sav(sav_path)  # ★ V11.6：附带容量标记
    except Exception as e:
        print(f"❌ 读取背包失败：{e}")
        pause()
        return

    print(f"✓ 读到 {len(inventory)} 个物品")

    with open(inv_json, "w", encoding="utf-8") as f:
        json.dump(inventory, f, ensure_ascii=False, indent=2)
    print(f"✓ 已生成：{os.path.relpath(inv_json, BASE_DIR)}")

    savdata_hash_before = file_sha256(json_path)
    inv_hash_before = file_sha256(inv_json)

    horses_json = os.path.join(output_dir, "horses.json")
    horses_hash_before = None
    try:
        horses = read_horses_from_sav(sav_path)
        with open(horses_json, "w", encoding="utf-8") as f:
            json.dump(horses, f, ensure_ascii=False, indent=2)
        horses_hash_before = file_sha256(horses_json)
        n_owned = sum(1 for hh in horses if hh["actor"])
        print(f"✓ 已生成：horses.json（{n_owned} 匹马）")
    except Exception as e:
        horses_json = None
        print(f"⚠️ horses.json 生成失败（不影响其他编辑）：{e}")

    # ★ V11.5：位置（position.json，供 HTML「📍 位置」Tab 读取/传送）
    pos_json = os.path.join(output_dir, "position.json")
    pos_hash_before = None
    try:
        pos = read_position_from_sav(sav_path)
        if pos["x"] is None:
            raise ValueError("SAV 中找不到 PlayerSavePos（3 条连续 f32）")
        with open(pos_json, "w", encoding="utf-8") as f:
            json.dump(pos, f, ensure_ascii=False, indent=2)
        pos_hash_before = file_sha256(pos_json)
        print(f"✓ 已生成：position.json（{pos['map_type'] or '未知地图'} · "
              f"X={pos['x']:.1f} Y={pos['y']:.1f} Z={pos['z']:.1f}）")
    except Exception as e:
        pos_json = None
        print(f"⚠️ position.json 生成失败（不影响其他编辑）：{e}")

    # ★ V13.6：四个 JSON 就绪后再开浏览器，?auto=1 一次性自动导入全部
    if HTML_FILE:
        # 注意：本流程里的 savdata 文件名变量是 json_path/sav_filename（没有 json_name）
        auto_files = [os.path.basename(json_path), "inventory.json"]
        if horses_json:
            auto_files.append(os.path.basename(horses_json))
        if pos_json:
            auto_files.append(os.path.basename(pos_json))
        print()
        print(f"正在打开网页编辑器（将自动导入 {len(auto_files)} 个 JSON）...")
        open_editor_auto(output_dir, files=auto_files)

    while True:
        print()
        print("=" * 55)
        print(" 请在浏览器中完成操作（HTML 编辑器已打开）：")
        print("=" * 55)
        print()
        print("【改 savdata】")
        print("  ① 确认 savdata JSON 已自动导入（V13.6 起页面打开即加载）")
        print("     若没有自动导入：点「📂 导入 JSON」选择 " + json_path)
        print("  ② 修改内容（IsGet、任务、心心、卢比、挑战等）")
        print("  ③ 点「💾 导出 JSON」覆盖原文件（文件名已自动匹配）")
        print()
        print("【改背包】（可选）")
        print("  ④ 切到「🎒 背包」tab → inventory.json 已自动导入（没有就点「📂 读取」）")
        print("  ⑤ 修改后点「💾 保存修改」覆盖 inventory.json")
        print()
        print("【马匹 / 位置】（可选）")
        if horses_json:
            print(f"  🐴 马匹：{horses_json}（已自动导入）")
        if pos_json:
            print(f"  📍 位置：{pos_json}（已自动导入）")
        print()
        print("💡 导入时「用原文件名」已自动勾选，导出时直接覆盖即可。")
        print()

        wait_for_user_done()   # ★ V13.5：真·等待，不会被残留回车跳过

        sav_ok = os.path.isfile(json_path)
        inv_ok = os.path.isfile(inv_json)

        if not sav_ok:
            print(f"❌ savdata JSON 不见了：{json_path}")
            c = input("[r] 回去重新编辑 [n] 放弃：").strip().lower()
            if c == "r":
                continue
            pause()
            return

        if not inv_ok:
            print(f"❌ inventory.json 不见了：{inv_json}")
            c = input("[r] 回去重新编辑 [n] 放弃：").strip().lower()
            if c == "r":
                continue
            pause()
            return

        sav_changed = file_sha256(json_path) != savdata_hash_before
        inv_changed = file_sha256(inv_json) != inv_hash_before

        print()
        print("变更检测：")
        print(f"  savdata JSON：    {'✓ 有修改' if sav_changed else '— 无修改'}")
        print(f"  inventory.json：  {'✓ 有修改' if inv_changed else '— 无修改'}")
        print()

        if not sav_changed and not inv_changed:
            print("⚠️  两个 JSON 都没变化。")
            print()
            # ★ V13.0：主动去 Downloads 找刚导出的文件
            offer_recover_from_downloads(json_path)
            offer_recover_from_downloads(inv_json)
            sav_changed = file_sha256(json_path) != savdata_hash_before
            inv_changed = file_sha256(inv_json) != inv_hash_before
            if sav_changed or inv_changed:
                print(f"✓ 已从 Downloads 找回：savdata={'有修改' if sav_changed else '无'}，inventory={'有修改' if inv_changed else '无'}")
                break
            c = input("[y] 仍然继续 [r] 回去重新编辑 [n] 放弃：").strip().lower()
            if c == "y":
                break
            if c == "r":
                continue
            pause()
            return

        break

    if sav_changed:
        print()
        print("=" * 55)
        print(" 第一步：应用 savdata 修改（C++ Import）")
        print("=" * 55)
        ok = run_import(json_path)
        if not ok:
            print("❌ savdata 写回失败，中止。背包未动。")
            pause()
            return

    if inv_changed:
        print()
        print("=" * 55)
        print(" 第二步：应用背包修改（Python 写回）")
        print("=" * 55)

        try:
            with open(inv_json, "r", encoding="utf-8") as f:
                new_inventory = json.load(f)
        except Exception as e:
            print(f"❌ 读取 inventory.json 失败（JSON 坏了，存档未动）：{e}")
            pause()
            return

        backup = make_backup(sav_path, "before_inventory.bak")
        print(f"✓ 已备份 → {os.path.relpath(backup, BASE_DIR)}")

        try:
            written, n_del, n_add, n_mod, n_fail, n_name, n_flaglit = write_inventory_to_sav(sav_path, new_inventory)
        except ValueError as e:
            print(f"❌ {e}")
            print(f"   存档未动。备份在：{backup}")
            pause()
            return
        except Exception as e:
            print(f"❌ 写回失败：{e}")
            # ★ V11.4：中途失败自动从备份恢复，避免"改一半"的存档
            try:
                shutil.copy2(backup, sav_path)
                print("✓ 已自动从备份恢复原 SAV（本次写回作废）")
            except Exception as re_err:
                print(f"❌ 自动恢复失败，请手动把备份覆盖回去：{re_err}")
            print(f"   备份：{backup}")
            pause()
            return

        print()
        print(f"✓ 数量更新 {written} 个槽位")
        if n_add > 0: print(f"✓ 新增 {n_add} 个物品")
        if n_fail > 0: print(f"⚠️ {n_fail} 个物品添加失败（可能背包已满）")
        if n_del > 0: print(f"✓ 删除 {n_del} 个物品")
        if n_mod > 0: print(f"✓ 修饰符更新 {n_mod} 处")
        if n_name > 0: print(f"✓ 护甲升星换形 {n_name} 件（点亮旗标 {n_flaglit} 个）")

    try:
        apply_horses_json_if_changed(horses_json, horses_hash_before, sav_path)
    except Exception as e:
        print(f"❌ 马匹写回失败：{e}")
        print("   savdata 与背包已写回，马匹未动。")

    # ★ V11.5：位置写回（失败不影响已写回的其他数据）
    try:
        apply_position_json_if_changed(pos_json, pos_hash_before, sav_path)
    except Exception as e:
        print(f"❌ 位置写回失败：{e}")
        print("   其余数据已写回，位置未动（写入前先校验，失败时位置区字节未改）。")

    print()
    print("=" * 55)
    print(" 🎉 全部完成")
    print("=" * 55)
    print()
    print("SAV：            " + sav_path)
    print("savdata JSON：   " + json_path)
    print("inventory JSON： " + inv_json)
    print()
    offer_copy_back(sav_path)
    print()
    print("下一步：进游戏读取该存档槽位测试。")
    print()

    pause()


def do_position_edit():
    print()
    print("==========================================")
    print(" [6] 位置编辑（读坐标 / 最近地点 / 传送）")
    print("==========================================")
    print()
    print("⚠️  本流程只修改 PlayerSavePos（Link 保存位置），不动 savdata 其他数据")
    print()
    pause("按回车选择 SAV ...")

    sav = prompt_choose_any_sav()
    if sav is None:
        pause()
        return

    work_dir = os.path.dirname(sav)
    pos_json = os.path.join(work_dir, "position.json")

    print()
    print("正在读取 Link 位置...")
    try:
        pos = read_position_from_sav(sav)
        if pos["x"] is None:
            raise ValueError("SAV 中找不到 PlayerSavePos（3 条连续 f32）")
    except Exception as e:
        print(f"❌ 读取失败：{e}")
        pause()
        return

    print(f"✓ 地图类型：{pos['map_type'] or '未知'}　　地图名：{pos['map_name'] or '（空）'}")
    print(f"✓ 当前坐标：X={pos['x']:.3f}  Y={pos['y']:.3f}  Z={pos['z']:.3f}")
    if pos["angle"] is not None:
        print(f"✓ 朝向角度：{pos['angle']:.1f}°")

    with open(pos_json, "w", encoding="utf-8") as f:
        json.dump(pos, f, ensure_ascii=False, indent=2)
    pos_hash_before = file_sha256(pos_json)
    print(f"✓ 已生成：{os.path.relpath(pos_json, BASE_DIR)}")

    while True:
        if HTML_FILE:
            print()
            print("正在打开 HTML 编辑器（将自动导入 position.json）...")
            # ★ V13.6：改走本地服务 + ?auto=1，网页自动加载刚生成的 JSON
            open_editor_auto(work_dir, files=[os.path.basename(pos_json)])

        print()
        print("=" * 50)
        print(" 请在浏览器中完成以下步骤：")
        print("=" * 50)
        print()
        print("  ① 切到「📍 位置」tab")
        print("  ② 确认 position.json 已自动导入（V13.6 起页面打开即加载）")
        print("     若没有自动导入：点「📂 读取 position.json」选择 " + pos_json)
        print("  ③ 查看最近地点，或改 X/Y/Z / 从地点库选「传送」")
        print("  ④ 点「💾 导出 position.json」")
        print("  ⑤ 保存到：" + work_dir)
        print("     文件名：position.json")
        print("     覆盖原文件")
        print()

        pause("完成后回到这里按回车...")

        if not os.path.isfile(pos_json):
            print("❌ position.json 不见了，放弃。")
            pause()
            return

        if file_sha256(pos_json) == pos_hash_before:
            print()
            print("⚠️  position.json 没变化。")
            c = input("[y] 仍然继续  [r] 回去重新编辑  [n] 放弃：").strip().lower()
            if c == "y":
                break
            if c == "r":
                continue
            pause()
            return

        print("✓ 检测到 position.json 已更新。")
        break

    backup = make_backup(sav, "before_position.bak")
    print(f"✓ 已备份原 SAV → {os.path.relpath(backup, BASE_DIR)}")

    try:
        apply_position_json_if_changed(pos_json, pos_hash_before, sav)
    except ValueError as e:
        print(f"❌ {e}")
        print(f"   存档未动。备份在：{backup}")
        pause()
        return
    except Exception as e:
        print(f"❌ 位置写回失败：{e}")
        print(f"   存档未动（写入前先校验）。备份在：{backup}")
        pause()
        return

    print()
    print("SAV：", sav)
    print("备份：", backup)
    print()
    print("下一步：进游戏读取该存档槽位，确认 Link 出现在新位置。")
    print()
    pause()


# ------------------------------------------------------------
# 9. 主菜单
# ------------------------------------------------------------

def choose_mode():
    """★ V13.7：恢复 [3]/[4]/[6] 三个单区流程入口。
    这三条流程功能完整（V13.6 已接入自动导入、V13.7 起 run_export 不再移动原档），
    V13.4 精简菜单时被藏掉、导致 main() 里对应分支不可达；现在作为"高级"项放回，
    默认（直接回车）仍是 [5]，常用路径不变。"""
    print("请选择操作：")
    print()
    print("  [5] 完整流程 ⭐         （savdata + 背包 一起改，推荐）")
    print()
    print("  [1] SAV → JSON          （只转 savdata，不开浏览器）")
    print("  [2] JSON → SAV          （只导回 savdata，不开浏览器）")
    print()
    print("  —— 高级：单区流程（与 [5] 同一套安全机制）——")
    print("  [3] 只改 savdata        （IsGet / 任务 / 心心 / 卢比 / 挑战）")
    print("  [4] 只改背包            （数量 / 修饰符 / 增删物品）")
    print("  [6] 只改位置            （读坐标 / 最近地点 / 传送）")
    print()
    print("  [q] 退出")
    print()
    while True:
        c = input("请选择 [1/2/3/4/5/6/q]（直接回车 = 5）：").strip().lower()
        if c == "" or c == "5":
            return "full_both"
        if c == "1":
            return "export"
        if c == "2":
            return "import"
        if c == "3":
            return "full"
        if c == "4":
            return "inventory"
        if c == "6":
            return "position"
        if c == "q":
            return None
        print("❌ 输入无效，请重新输入。")


# ------------------------------------------------------------
# 10. ★ V13.0 新增：命令行开关 + Downloads 自动找回
# ------------------------------------------------------------

VERSION = APP_VERSION  # ★ V13.7：兼容旧引用；唯一权威值是 APP_VERSION（文件头部定义）


def _downloads_dir():
    """返回当前用户 Downloads 目录（不存在则 None）。"""
    # 优先用 USERPROFILE\Downloads；某些中文系统是 "下载"
    cand = os.path.join(os.path.expanduser("~"), "Downloads")
    if os.path.isdir(cand):
        return cand
    cand2 = os.path.join(os.path.expanduser("~"), "下载")
    if os.path.isdir(cand2):
        return cand2
    return None


def find_recent_downloaded_json(target_name, max_age_sec=600):
    """★ V13.0：用户在浏览器里点了"导出 JSON"但没勾"用原文件名"时，
    文件会落到 Downloads（通常叫 game_data.sav_edited.json）。
    本函数在 Downloads 里找最近 max_age_sec 秒内修改过的、
    名字里含 target_name 主名（如 game_data.sav）或 *_edited.json 的文件。
    返回路径列表（按修改时间倒序），找不到返回 []。"""
    d = _downloads_dir()
    if not d:
        return []
    stem = os.path.splitext(os.path.basename(target_name))[0]  # game_data.sav
    now = time.time()
    hits = []
    try:
        for f in os.listdir(d):
            if not f.lower().endswith(".json"):
                continue
            full = os.path.join(d, f)
            try:
                mt = os.path.getmtime(full)
            except OSError:
                continue
            if now - mt > max_age_sec:
                continue
            fl = f.lower()
            # 名字里包含目标存档主名，或带 _edited 后缀
            if stem.lower() in fl or "_edited" in fl:
                hits.append((mt, full))
    except OSError:
        return []
    hits.sort(reverse=True)
    return [p for _, p in hits]


def offer_recover_from_downloads(json_path):
    """★ V13.0：当终端检测到 backups/<日期>/game_data.sav.json 没变，
    主动去 Downloads 找最近 10 分钟内导出的 JSON，让用户一键拷回。
    命中并拷回返回 True；否则返回 False。"""
    recent = find_recent_downloaded_json(json_path)
    if not recent:
        return False
    print()
    print("💡 在 Downloads 里发现最近导出的 JSON：")
    for i, p in enumerate(recent, 1):
        print(f"   [{i}] {p}  ({time.strftime('%H:%M:%S', time.localtime(os.path.getmtime(p)))})")
    c = input("是否把最新这份拷回工作目录覆盖原文件？[回车=是 / n=否]：").strip().lower()
    if c == "n":
        return False
    src = recent[0]
    try:
        shutil.copy2(src, json_path)
        print(f"✓ 已拷回：{os.path.basename(src)} → {json_path}")
        return True
    except Exception as e:
        print(f"❌ 拷回失败：{e}")
        return False


def _selftest():
    """★ V13.0：--selftest 一键跑全部回归测试（Python + Node）。
    ★ V13.6：把两个 Node 回归测试也纳进来——它们以前坏了没人知道。
    ★ V13.7：Node 测试需要 backups/<日期>/game_data.sav.json，而 backups/ 可能已被
      用户清理 → 这里用**根档的只读副本**在临时目录现造一份测试数据
      （BOTW_TEST_JSON 环境变量），根目录 game_data.sav 全程不被写入，
      跑完自动删除临时数据。测试默认走非严格基准模式；要按基准档严格校验
      请直接跑单个测试并加 --strict-baseline。"""
    import subprocess as _sp
    import tempfile as _tf
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(here)
    py = sys.executable
    tests = [
        "tests/test_position.py",
        "tests/test_v116_inventory.py",
        "tests/test_v118_write_order.py",
    ]
    js_tests = [
        "tests/test_chal_writeback.js",
        "tests/test_full_user_flow.js",
    ]
    print("=" * 60)
    print(" BOTW " + VERSION + " · 自检模式（跑全部回归测试）")
    print("=" * 60)
    failed = 0
    for t in tests:
        print()
        print(">>> " + t)
        r = _sp.run([py, os.path.join(here, t)], cwd=root)
        if r.returncode != 0:
            failed += 1

    # ★ V13.6：Node 测试（挑战写回链 / 完整用户流程），没装 node 就跳过
    node = shutil.which("node")
    if not node:
        print()
        print(">>> tests/*.js —— 跳过（PATH 里找不到 node）")
    else:
        # ★ V13.7：基准数据可能已被用户清理 → 用根档只读副本现造，绝不写原档
        js_env = os.environ.copy()
        data_dir = None
        sav_src = os.path.join(root, "game_data.sav")
        if os.path.isfile(sav_src):
            try:
                data_dir = _tf.mkdtemp(prefix="botw_selftest_data_", dir=root)
                js_json = os.path.join(data_dir, "game_data.sav.json")
                python_sav_to_json(sav_src, js_json)      # 只读原档
                js_env["BOTW_TEST_JSON"] = js_json
                print()
                print(">>> Node 测试数据：已用根档只读副本生成（原档未被改动）")
            except Exception as e:
                print(f"\n⚠️ 生成 Node 测试数据失败：{e}（缺数据的测试会自动跳过）")
                data_dir = None
        else:
            print("\n⚠️ 找不到根目录 game_data.sav，Node 测试数据无法生成（缺数据的测试会自动跳过）")
        try:
            for t in js_tests:
                print()
                print(">>> " + t)
                r = _sp.run([node, os.path.join(here, t)], cwd=root, env=js_env)
                if r.returncode != 0:
                    failed += 1
        finally:
            if data_dir:
                shutil.rmtree(data_dir, ignore_errors=True)

    print()
    print("=" * 60)
    if failed == 0:
        print(" ✓ 全部测试进程正常结束（具体通过/失败数见上）")
    else:
        print(f" ⚠️ {failed} 个测试进程异常退出")
    print("=" * 60)
    return 0 if failed == 0 else 1


def main():
    # ★ V13.0：命令行开关（不进入交互菜单）
    argv = sys.argv[1:]
    if argv:
        a = argv[0].lower()
        if a in ("-v", "--version", "-V"):
            print(f"BOTW Save Lab {VERSION}")
            print(f"Python: {sys.version.split()[0]}")
            print(f"Main:   {__file__}")
            return
        if a in ("-h", "--help", "/?"):
            print(f"BOTW Save Lab {VERSION}")
            print()
            print("用法：")
            print("  启动存档实验室.vbs        双击启动（推荐）")
            print("  python main.py            进入交互菜单")
            print("  python main.py --selftest 跑全部回归测试（Python + Node）")
            print("  python main.py --version  打印版本")
            print("  pytest                    收集并运行 core\\tests 下的三条 Python 回归")
            print("  python core\\tests\\test_position.py [--strict-baseline]")
            print("                            单测；--strict-baseline = 按基准档严格断言")
            print("                            （默认只做结构性校验，换存档也能跑）")
            return
        if a in ("--selftest", "--self-test"):
            sys.exit(_selftest())

    mode = choose_mode()
    if mode is None:
        return
    if mode == "export":
        do_export()
    elif mode == "import":
        do_import()
    elif mode == "full":
        do_full_cycle()
    elif mode == "inventory":
        do_inventory_edit()
    elif mode == "position":
        do_position_edit()
    else:
        do_full_both()


if __name__ == "__main__":
    main()
