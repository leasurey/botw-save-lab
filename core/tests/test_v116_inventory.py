"""
============================================================
 test_v116_inventory.py · V11.6 背包容量标记 + 写回回归自测
============================================================

运行：python test_v116_inventory.py [可选：game_data.sav 路径]
默认使用 2026-09-30/game_data.sav（探测基准档）。
所有写入都在临时目录的【副本】上进行，绝不改动原 SAV。

覆盖内容：
    [1] 容量字段读取（基准档 = 14/10/6，与哈诺特旗标 5/5/2 + 基础 8/5/4 吻合）
    [2] inventory.json（含 _capacity 标记）原样写回 → SHA-256 不变（回归）
    [3] 新增单手剑写回 → 槽位占用 +1，容量字段不被改动
    [4] 删除写回 → 槽位释放
    [5] 校验：_capacity 标记通过；坏标记拒绝；负 slot（V11.4 机制）通过
    [6] 快速添加同款构造的物品（armor 默认染色值 0）写回成功
============================================================
"""

import json
import os
import shutil
import struct
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import main as m  # noqa: E402

# ★ V12.3：目录重组后，项目根 = core/ 的上一级；存档可能在根目录或 backups/ 里
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
_SKIP = (".venv", "site-packages", "__pycache__", ".git")
DEFAULT_SAV = os.path.join(BASE_DIR, "2026-09-30", "game_data.sav")
if not os.path.isfile(DEFAULT_SAV):
    # 基准档不在时 → 自动改用项目内最新的 .sav（如 backups/ 里的存档）
    cands = [os.path.join(r, f) for r, ds, fs in os.walk(BASE_DIR)
             if not any(s in r.split(os.sep) for s in _SKIP)
             for f in fs if f.endswith(".sav")]
    if cands:
        DEFAULT_SAV = max(cands, key=os.path.getmtime)

PASS = 0
FAIL = 0

# ★ V13.7：--strict-baseline 开关（默认关 = 只做结构性断言）
#   默认：容量字段按合法区间校验（武器 8-20 / 弓 5-14 / 盾 4-20，来自 main.py 的数组长度）
#   --strict-baseline：断言基准档数值 14/10/6（哈诺特旗标 5/5/2 的那一档）
STRICT_BASELINE = "--strict-baseline" in sys.argv


def check(name, cond, detail=""):
    global PASS, FAIL
    if cond:
        PASS += 1
        print("  ✓", name)
    else:
        FAIL += 1
        print("  ❌", name, ("→ " + str(detail)) if detail else "")


def cap_words(sav):
    """容量三个 u32 的原始字节（验证写回不碰它们）"""
    with open(sav, "rb") as f:
        data = f.read()
    out = {}
    for label, h in (("weapon", m.HASH_WEAPON_STOCK), ("bow", m.HASH_BOW_STOCK), ("shield", m.HASH_SHIELD_STOCK)):
        p = m._hash_positions(data, h)
        out[label] = [data[x:x+4] for x in p]
    return out


def main_test(argv=None):
    # ★ V13.7：兼容 pytest —— 只认 *.sav 参数，忽略 pytest 自己的参数
    args = list(sys.argv[1:] if argv is None else argv)
    sav = next((a for a in args if a.lower().endswith(".sav")), None) or DEFAULT_SAV
    if not os.path.isfile(sav):
        print(f"❌ 找不到 SAV：{sav}")
        print("   用法：python test_v116_inventory.py [game_data.sav 路径] [--strict-baseline]")
        return 1

    print("=" * 50)
    print(" V11.6 背包回归自测 · 基准 SAV：", os.path.basename(sav))
    print("=" * 50)

    tmp = tempfile.mkdtemp(prefix="botw_v116_test_")
    try:
        print()
        print("[1] 读取容量字段（WeaponPorchStockNum 等）")
        cap = m.read_bag_capacity_from_sav(sav)
        if STRICT_BASELINE:
            check("基准档容量 = 14/10/6（--strict-baseline）",
                  (cap["weapon"], cap["bow"], cap["shield"]) == (14, 10, 6), cap)
        else:
            ok_range = (8 <= cap["weapon"] <= 20
                        and 5 <= cap["bow"] <= 14
                        and 4 <= cap["shield"] <= 20)
            check("容量字段结构合理（武器 8-20 / 弓 5-14 / 盾 4-20）", ok_range, cap)
            print(f"   （当前档容量 {cap['weapon']}/{cap['bow']}/{cap['shield']}；"
                  f"要按基准档断言 14/10/6 请加 --strict-baseline）")
        inv = m.read_inventory_with_capacity_from_sav(sav)
        check("inventory_with_capacity 末尾带 _capacity 标记",
              isinstance(inv[-1], dict) and inv[-1].get("_capacity") == cap, inv[-1])
        BASE_N = len(inv) - 1          # 基准档物品数（★ V11.7：不再写死 230，换基准档也能跑）
        check(f"物品数 > 0（不含末尾 _capacity 标记）：{BASE_N}", BASE_N > 0, len(inv))

        print()
        print("[2] 原样写回归归（含 _capacity 标记 → SHA 不变）")
        dst = os.path.join(tmp, "noop.sav")
        shutil.copy2(sav, dst)
        before = m.file_sha256(dst)
        cap0 = cap_words(dst)
        n = m.write_inventory_to_sav(dst, json.loads(json.dumps(inv)))
        check(f"写回完成（{BASE_N} 个槽位值原样重写，其余 0）", n == (BASE_N, 0, 0, 0, 0, 0, 0), n)
        check("SHA-256 不变（字节级零改动）", m.file_sha256(dst) == before)
        check("容量字段字节未被改动", cap_words(dst) == cap0)

        print()
        print("[3] 新增单手剑（快速添加同款构造）写回")
        dst2 = os.path.join(tmp, "add.sav")
        shutil.copy2(sav, dst2)
        mods_before = m.read_modifiers_from_sav(dst2)["sword"][:]  # 插入前的修饰符数组
        inv2 = json.loads(json.dumps(inv))
        inv2.append({"slot": -1001, "name": "Weapon_Sword_070", "value": 4000,
                     "equipped": False, "modifier": 0, "modifier_value": 0, "_new": True})
        n2 = m.write_inventory_to_sav(dst2, inv2)
        check("新增 1 件成功", n2[2] == 1, n2)
        after = m.read_inventory_from_sav(dst2)
        check(f"背包 {BASE_N} → {BASE_N + 1}", len(after) == BASE_N + 1, len(after))
        check("大师之剑已在背包", any(x["name"] == "Weapon_Sword_070" for x in after))
        # 修饰符数组：新剑排在第 15 把（rel=14），应在 index 14 插入 0，原值整体后移一位
        mods_after = m.read_modifiers_from_sav(dst2)["sword"]
        check("修饰符数组在 rel=14 正确插入占位",
              mods_after[:14] == mods_before[:14] and mods_after[14] == 0
              and mods_after[15:20] == mods_before[14:19],
              (mods_before[:6], mods_after[:6]))
        check("容量字段字节未被改动", cap_words(dst2) == cap0)

        print()
        print("[4] 删除写回（释放槽位）")
        dst3 = os.path.join(tmp, "del.sav")
        shutil.copy2(dst2, dst3)
        inv3 = m.read_inventory_with_capacity_from_sav(dst3)
        first_weapon = next(it for it in inv3 if m.weapon_category(it["name"]))
        inv3.append({"_deleted": True, "slot": first_weapon["slot"]})
        n3 = m.write_inventory_to_sav(dst3, inv3)
        check("删除 1 件成功", n3[1] == 1, n3)
        after3 = m.read_inventory_from_sav(dst3)
        check(f"背包 {BASE_N + 1} → {BASE_N}", len(after3) == BASE_N, len(after3))
        # ★ V11.7：旧断言写的是「被删物品的槽位必须为空」——那是旧版「删完留空洞」的行为，
        #   而留空洞正是本次修掉的 bug：BOTW 的背包是稠密列表（0..N-1 连续），
        #   游戏顺序读取时遇到空洞会截断列表，空洞之后的服装/材料全部不显示。
        #   正确的断言是：该物品少了一把，且背包仍然是稠密的。
        nb = [x["name"] for x in inv3 if x.get("name")]
        na = [x["name"] for x in after3 if x.get("name")]
        check(f"被删的 {first_weapon['name']} 少了一把",
              na.count(first_weapon["name"]) == nb.count(first_weapon["name"]) - 1,
              f'{nb.count(first_weapon["name"])} -> {na.count(first_weapon["name"])}')
        _slots3 = sorted(x["slot"] for x in after3 if x["name"])
        _gaps = [i for i in range(_slots3[0], _slots3[-1] + 1) if i not in set(_slots3)]
        check("删除后背包仍然稠密（无空洞）", _gaps == [], _gaps)

        print()
        print("[5] 校验规则（_capacity / 负 slot）")
        ok, err = m.validate_inventory_json([{"_capacity": cap}])
        check("合法 _capacity 标记通过", ok, err)
        ok, err = m.validate_inventory_json([{"_capacity": {"weapon": "14"}}])
        check("容量值非整数被拒绝", not ok, err)
        ok, err = m.validate_inventory_json([{"_capacity": [1, 2, 3]}])
        check("_capacity 非对象被拒绝", not ok, err)
        ok, err = m.validate_inventory_json([{"slot": -1001, "name": "Weapon_Sword_070"}])
        check("负 slot（V11.4 新增占位机制）通过", ok, err)

        print()
        print("[6] 防具默认染色值 0 写回（快速添加默认路径）")
        dst4 = os.path.join(tmp, "armor.sav")
        shutil.copy2(sav, dst4)
        inv4 = json.loads(json.dumps(inv))
        inv4.append({"slot": -1002, "name": "Armor_002_Head", "value": 0,
                     "equipped": False, "modifier": 0, "modifier_value": 0, "_new": True})
        n4 = m.write_inventory_to_sav(dst4, inv4)
        check("防具新增成功", n4[2] == 1, n4)
        after4 = m.read_inventory_from_sav(dst4)
        a = next(x for x in after4 if x["name"] == "Armor_002_Head")
        check("染色值 = 0（可染色护甲）", a["value"] == 0, a["value"])

        print()
        print("[7] ★ V11.6 修复验证：新物品自带修饰符/强度写回")
        dst5 = os.path.join(tmp, "newmod.sav")
        shutil.copy2(sav, dst5)
        inv5 = json.loads(json.dumps(inv))
        # 模拟 HTML 快速添加 + 用户在卡片上选修饰符：attack_up_level2(0x80000003) 强度 18
        inv5.append({"slot": -1001, "name": "Weapon_Sword_016", "value": 5000,
                     "equipped": False, "modifier": 0x80000003, "modifier_value": 18, "_new": True})
        n5 = m.write_inventory_to_sav(dst5, inv5)
        check("新增 1 件 + 修饰符更新 ≥1 处", n5[2] == 1 and n5[3] >= 1, n5)
        after5 = m.read_inventory_from_sav(dst5)
        landed = next(x for x in after5 if x["slot"] >= 0 and x["name"] == "Weapon_Sword_016"
                      and x not in [e for e in m.read_inventory_from_sav(sav) if e["name"] == "Weapon_Sword_016"])
        mods5 = m.read_modifiers_from_sav(dst5)["sword"]
        # 落位物品在类别里的相对序号
        cnt = 0
        for it in sorted(after5, key=lambda x: x["slot"]):
            if m.weapon_category(it["name"]) == "sword":
                if it["slot"] == landed["slot"]:
                    break
                cnt += 1
        check("修饰符写在落位槽位的类别序号处（非占位 0）",
              mods5[cnt] == 0x80000003,
              (cnt, hex(mods5[cnt]) if mods5 else None))
        # 修饰强度 ValueSp
        sv = []
        for _, h, v in m.parse_sav_chunks(dst5):
            if h == m.HASH_SWORD_VALUE:
                sv.append(v)
        check("修饰强度 18 写入 ValueSp 对应下标",
              sv[cnt] == 18, (cnt, sv[cnt]))
        # 其余原有修饰符不被挪动（数组定长 20：插入位后整体后移，末位挤出）
        mods0 = m.read_modifiers_from_sav(sav)["sword"]
        check("原有修饰符保持原位（插入对位不破坏）",
              mods5[:cnt] == mods0[:cnt] and mods5[cnt+1:] == mods0[cnt:len(mods0)-1],
              (mods0[:4], mods5[:4]))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    print()
    print("=" * 50)
    print(f" 结果：{PASS} 通过 · {FAIL} 失败")
    print("=" * 50)
    return 0 if FAIL == 0 else 1


def test_all_inventory():
    """★ V13.7 pytest 入口（pytest.ini: python_functions = test_all_*）。
    默认非严格模式；要按基准档严格校验请直接运行并加 --strict-baseline。"""
    rc = main_test()
    assert rc == 0, "背包读写回归失败（详见上方输出）"


if __name__ == "__main__":
    sys.exit(main_test())
