"""
============================================================
 test_position.py · V11.5 位置读写自测
============================================================

不依赖 pytest，直接运行：
    python test_position.py [可选：某个 game_data.sav 路径]

不传参数时使用 2026-09-30/game_data.sav（字段探测基准档）。
所有测试都在临时目录的【副本】上进行，绝不改动原 SAV。

覆盖内容：
    [1] 读取 PlayerSavePos（含基准档探测值断言）
    [2] 写入 → 回读往返 + 其他字节零改动（二进制 diff）
    [3] 原值写入 = 零改动（SHA-256 不变）
    [4] 非法 JSON 拒绝（缺字段 / 非数字 / NaN / 越界 / 非 MainField 未确认）
    [5] 非 MainField 带确认旗标可写入
============================================================
"""

import json
import math
import os
import shutil
import struct
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import main as m  # noqa: E402  （import 时会打印程序横幅，属正常现象）

# ★ V12.3：目录重组后，项目根 = core/ 的上一级；存档可能在根目录或 backups/ 里
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
_SKIP = (".venv", "site-packages", "__pycache__", ".git")
DEFAULT_SAV = os.path.join(BASE_DIR, "2026-09-30", "game_data.sav")
if not os.path.isfile(DEFAULT_SAV):
    # 基准档被流程移走（SAV 会挪进日期文件夹）→ 自动改用最新的 .sav
    cands = [os.path.join(r, f) for r, ds, fs in os.walk(BASE_DIR)
             if not any(s in r.split(os.sep) for s in _SKIP)
             for f in fs if f.endswith(".sav")]
    if cands:
        DEFAULT_SAV = max(cands, key=os.path.getmtime)

# V11.5 字段探测时的原始基准档 SHA-256。探测值断言只对这一版有效；
# 之后文件被正常使用（如传送/续玩改写 PlayerSavePos）时，只做合理性断言。
PROBE_SHA = "125351f6d2fe904f550cb451e0c41be2b3a52bf11e93b8afc4a1aeaa26f1429e"

# ★ V13.7：--strict-baseline 开关
#   默认（不加开关）：只做结构性/合理性断言，任何一份能读出来的存档都能过；
#   加 --strict-baseline：启用基准档数值断言（朝向 0~360° 等），用于校验特定存档。
STRICT_BASELINE = "--strict-baseline" in sys.argv

PASS = 0
FAIL = 0


def check(name, cond, detail=""):
    global PASS, FAIL
    if cond:
        PASS += 1
        print("  ✓", name)
    else:
        FAIL += 1
        print("  ❌", name, ("→ " + str(detail)) if detail else "")


def expect_value_error(name, fn):
    global PASS, FAIL
    try:
        fn()
    except ValueError as e:
        PASS += 1
        print("  ✓", name, "→", str(e)[:60].replace("\n", " "))
        return
    except Exception as e:  # noqa: BLE001
        FAIL += 1
        print("  ❌", name, "→ 抛的是别的异常：", type(e).__name__, e)
        return
    FAIL += 1
    print("  ❌", name, "→ 没有抛 ValueError")


def f32(v):
    """和写回路径一致的 f32 舍入"""
    return struct.unpack(">f", struct.pack(">f", v))[0]


def test_read(sav):
    print()
    print("[1] 读取 PlayerSavePos")
    pos = m.read_position_from_sav(sav)
    check("x/y/z 为有限浮点",
          all(isinstance(pos[k], float) and math.isfinite(pos[k]) for k in ("x", "y", "z")),
          pos)
    check("angle 为有限浮点", isinstance(pos["angle"], float) and math.isfinite(pos["angle"]))
    check("map_type == MainField", pos["map_type"] == "MainField", pos["map_type"])
    check("map_name 非空（区块名格式）", bool(pos["map_name"]), pos["map_name"])
    is_probe_baseline = m.file_sha256(sav) == PROBE_SHA
    if is_probe_baseline:
        # V11.5 探测时的原始基准档：坐标精确断言
        check("基准档坐标与探测值吻合（初始台地 -1125.6, 237.3, 1903.9）",
              abs(pos["x"] - (-1125.588)) < 0.5
              and abs(pos["y"] - 237.270) < 0.5
              and abs(pos["z"] - 1903.928) < 0.5,
              (pos["x"], pos["y"], pos["z"]))
        check("基准档朝向与探测值吻合（141.0°）", abs(pos["angle"] - 141.0002) < 0.01, pos["angle"])
    else:
        # 档已被正常使用改写过（如传送/续玩）：只做世界坐标合理性断言
        check("坐标在世界范围内（±5000 / Y -1000~5000）",
              -5000 <= pos["x"] <= 5000 and -5000 <= pos["z"] <= 5000
              and -1000 <= pos["y"] <= 5000,
              (pos["x"], pos["y"], pos["z"]))
        if STRICT_BASELINE:
            # ★ V13.7：基准档口径 —— 游戏把朝向写成 0~360°
            check("朝向在 0~360°（--strict-baseline）", -0.01 <= pos["angle"] <= 360.01, pos["angle"])
        else:
            # 负角（如 -41.7°）也是合法表示，非严格模式不按基准档口径卡
            check("朝向为有限值且在 ±360° 内（结构性）", abs(pos["angle"]) <= 360.01, pos["angle"])
        print(f"   （此档已非探测基准版：当前坐标 X={pos['x']:.1f} Y={pos['y']:.1f} Z={pos['z']:.1f}，"
              f"当前只做合理性断言；要按基准档严格校验请加 --strict-baseline）")
    return pos


def test_write_roundtrip(sav, tmp):
    print()
    print("[2] 写入 → 回读往返 + 其他字节零改动")
    dst = os.path.join(tmp, "roundtrip.sav")
    shutil.copy2(sav, dst)

    target = {"x": 1854.69, "y": 270.0, "z": 981.32, "angle": 180.0,
              "map_type": "MainField", "map_name": "D-6"}
    n = m.write_position_to_sav(dst, dict(target))
    check("报告 4 处字节改动（XYZ + 朝向）", n == 4, n)

    pos = m.read_position_from_sav(dst)
    check("回读 X 一致", pos["x"] == f32(target["x"]), (pos["x"], f32(target["x"])))
    check("回读 Y 一致", pos["y"] == f32(target["y"]))
    check("回读 Z 一致", pos["z"] == f32(target["z"]))
    check("回读朝向一致", pos["angle"] == f32(target["angle"]))
    check("文件大小不变", os.path.getsize(dst) == os.path.getsize(sav))

    with open(sav, "rb") as f:
        a = f.read()
    with open(dst, "rb") as f:
        b = f.read()
    # 按 u32 字计数（两个 f32 可能共享最高字节，按字节计数会低估）
    aw = struct.unpack(f">{len(a)//4}I", a[:len(a)//4*4])
    bw = struct.unpack(f">{len(b)//4}I", b[:len(b)//4*4])
    diff_words = sum(1 for x, y in zip(aw, bw) if x != y)
    check("二进制差异恰好 4 个 u32 字（XYZ + 朝向，其余 0 改动）", diff_words == 4, diff_words)


def test_write_noop(sav, tmp):
    print()
    print("[3] 原值写入 = 零改动")
    dst = os.path.join(tmp, "noop.sav")
    shutil.copy2(sav, dst)
    cur = m.read_position_from_sav(sav)

    before = m.file_sha256(dst)
    n = m.write_position_to_sav(dst, dict(cur))
    check("改动条数为 0", n == 0, n)
    check("SHA-256 不变（存档未被触碰）", m.file_sha256(dst) == before)


def test_validate(sav, tmp):
    print()
    print("[4] 非法输入拒绝（零写入）")
    dst = os.path.join(tmp, "validate.sav")
    shutil.copy2(sav, dst)
    before = m.file_sha256(dst)

    expect_value_error("缺少 z 字段",
                       lambda: m.write_position_to_sav(dst, {"x": 1.0, "y": 2.0}))
    expect_value_error("x 传字符串",
                       lambda: m.write_position_to_sav(dst, {"x": "abc", "y": 0, "z": 0}))
    expect_value_error("y 为 NaN",
                       lambda: m.write_position_to_sav(dst, {"x": 0, "y": float("nan"), "z": 0}))
    expect_value_error("x 超出世界坐标范围",
                       lambda: m.write_position_to_sav(dst, {"x": 99999.0, "y": 0, "z": 0}))
    expect_value_error("顶层不是对象",
                       lambda: m.write_position_to_sav(dst, [1, 2, 3]))
    expect_value_error("非 MainField 且无确认旗标",
                       lambda: m.write_position_to_sav(
                           dst, {"x": 10.0, "y": 100.0, "z": 20.0, "map_type": "Dungeon050"}))
    check("以上全部拒绝后存档未动", m.file_sha256(dst) == before)


def test_non_mainfield_confirm(sav, tmp):
    print()
    print("[5] 非 MainField + 确认旗标 → 允许写入")
    dst = os.path.join(tmp, "confirm.sav")
    shutil.copy2(sav, dst)
    payload = {"x": 10.0, "y": 100.0, "z": 20.0, "angle": 45.0,
               "map_type": "Dungeon050", "confirm_non_mainfield": True}
    n = m.write_position_to_sav(dst, payload)
    check("写入成功", n == 4, n)
    pos = m.read_position_from_sav(dst)
    check("回读一致", pos["x"] == f32(10.0) and pos["y"] == f32(100.0)
          and pos["z"] == f32(20.0) and pos["angle"] == f32(45.0))


def main_test(argv=None):
    # ★ V13.7：兼容 pytest —— 只认 *.sav 参数，忽略 -q/--collect-only 等 pytest 自己的参数
    args = list(sys.argv[1:] if argv is None else argv)
    sav = next((a for a in args if a.lower().endswith(".sav")), None) or DEFAULT_SAV
    if not os.path.isfile(sav):
        print(f"❌ 找不到 SAV：{sav}")
        print("   用法：python test_position.py [game_data.sav 路径] [--strict-baseline]")
        return 1

    print("=" * 50)
    print(" 位置读写自测 · 基准 SAV：", os.path.basename(sav))
    print("=" * 50)

    tmp = tempfile.mkdtemp(prefix="botw_pos_test_")
    try:
        test_read(sav)
        test_write_roundtrip(sav, tmp)
        test_write_noop(sav, tmp)
        test_validate(sav, tmp)
        test_non_mainfield_confirm(sav, tmp)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    print()
    print("=" * 50)
    print(f" 结果：{PASS} 通过 · {FAIL} 失败")
    print("=" * 50)
    return 0 if FAIL == 0 else 1


def test_all_position():
    """★ V13.7 pytest 入口（pytest.ini: python_functions = test_all_*）。
    默认非严格模式；要按基准档严格校验请直接运行并加 --strict-baseline。"""
    rc = main_test()
    assert rc == 0, "位置读写回归失败（详见上方输出）"


if __name__ == "__main__":
    sys.exit(main_test())
