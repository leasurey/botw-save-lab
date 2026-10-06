"""
============================================================
 test_v118_write_order.py · V11.8 写回顺序 + 幂等性回归自测
============================================================

运行：python test_v118_write_order.py [可选：game_data.sav 路径]
默认使用 2026-09-30/game_data.sav（字段探测基准档），找不到就取最新的 .sav。
所有写入都在临时目录的【副本】上进行，绝不改动原 SAV。

为什么需要这个测试
------------------
V11.7 引入「删除后把后面的物品整体前移补洞」之后，inventory.json 里的 slot
仍然是**导入时的原始槽位**。旧版 write_inventory_to_sav 先删、先加，最后才按
原始 slot 写数量 / 名字 / 修饰符 —— 于是只要「删掉任何一件 + 同时改了它后面的
物品」，改动就整体错位一格写到别的物品上（实测：数量 1234567 落到了相邻的另一
件护甲，修饰符同理）。本测试就是把这个场景钉死。

覆盖内容：
    [1] 删除低位槽 + 改高位槽数量   → 改动必须落在正确的物品上
    [2] 删除低位槽 + 改高位槽名字   → 换形必须落在正确的物品上
    [3] 删除低位槽 + 改高位槽修饰符 → 修饰符/强度必须落在正确的武器上
    [4] 同时删 + 增               → 物品数守恒、背包稠密
    [5] 零改动写回                → SHA-256 不变（幂等）
    [6] 马匹零改动写回            → SHA-256 不变（亲密度不再被 1 ulp 误差改写）
============================================================
"""

import json
import os
import shutil
import sys
import tempfile

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import main as m  # noqa: E402  （import 时会打印程序横幅，属正常现象）

# ★ V12.3：目录重组后，项目根 = core/ 的上一级；存档可能在根目录或 backups/ 里
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
_SKIP = (".venv", "site-packages", "__pycache__", ".git")
DEFAULT_SAV = os.path.join(BASE_DIR, "2026-09-30", "game_data.sav")
if not os.path.isfile(DEFAULT_SAV):
    cands = [os.path.join(r, f) for r, ds, fs in os.walk(BASE_DIR)
             if not any(s in r.split(os.sep) for s in _SKIP)
             for f in fs if f.endswith(".sav")]
    if cands:
        DEFAULT_SAV = max(cands, key=os.path.getmtime)

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


def strip_capacity(inv):
    return [x for x in json.loads(json.dumps(inv)) if "_capacity" not in x]


def main_test(argv=None):
    # ★ V13.7：兼容 pytest —— 只认 *.sav 参数，忽略 pytest 自己的参数
    args = list(sys.argv[1:] if argv is None else argv)
    sav = next((a for a in args if a.lower().endswith(".sav")), None) or DEFAULT_SAV
    if not os.path.isfile(sav):
        print(f"❌ 找不到 SAV：{sav}")
        print("   用法：python test_v118_write_order.py [game_data.sav 路径]")
        return 1

    print("=" * 50)
    print(" V11.8 写回顺序自测 · 基准 SAV：", os.path.basename(sav))
    print("=" * 50)

    tmp = tempfile.mkdtemp(prefix="botw_v118_test_")
    try:
        inv = m.read_inventory_with_capacity_from_sav(sav)
        items = [x for x in inv if "name" in x]
        if len(items) < 30:
            print(f"⚠️ 这份档只有 {len(items)} 件物品，测试需要至少 30 件。")
            return 1
        print(f"（基准档物品 {len(items)} 件）")

        # ---------- [1] 删除 + 改数量 ----------
        print()
        print("[1] 删除低位槽 + 改高位槽数量")
        dst = os.path.join(tmp, "order_value.sav")
        shutil.copy2(sav, dst)
        base = m.read_inventory_with_capacity_from_sav(dst)
        base_items = [x for x in base if "name" in x]
        del_slot = base_items[2]["slot"]
        target_i = 60 if len(base_items) > 60 else len(base_items) - 1
        tgt = base_items[target_i]
        payload = strip_capacity(base)
        for x in payload:
            if x["slot"] == tgt["slot"]:
                x["value"] = 1234567
        payload.append({"_deleted": True, "slot": del_slot})
        m.write_inventory_to_sav(dst, payload)
        after = m.read_inventory_from_sav(dst)
        # 删除发生在目标之前 → 目标在列表里的序号各前移 1
        want_i = target_i - 1
        check(f"被删物品少了一件（槽位 {del_slot}）",
              [x["name"] for x in after].count(base_items[2]["name"]) ==
              [x["name"] for x in base_items].count(base_items[2]["name"]) - 1)
        check(f"序号 {want_i} 仍是 {tgt['name']}",
              after[want_i]["name"] == tgt["name"], (after[want_i]["slot"], after[want_i]["name"]))
        check(f"数量 1234567 落在 {tgt['name']} 上",
              after[want_i]["value"] == 1234567, after[want_i]["value"])
        strays = [x for i, x in enumerate(after) if x["value"] == 1234567 and i != want_i]
        check("没有别的物品被误写这个数量", not strays,
              [(x["slot"], x["name"], x["value"]) for x in strays])
        check("写回后背包仍然稠密（无空洞）",
              [x["slot"] for x in after] == list(range(len(after))))

        # ---------- [2] 删除 + 换形 ----------
        print()
        print("[2] 删除低位槽 + 改高位槽名字（护甲换形）")
        dst2 = os.path.join(tmp, "order_name.sav")
        shutil.copy2(sav, dst2)
        base2 = m.read_inventory_with_capacity_from_sav(dst2)
        b2 = [x for x in base2 if "name" in x]
        armor_i = next((i for i, x in enumerate(b2) if i > 3 and x["name"].startswith("Armor_")), None)
        if armor_i is None:
            print("  （跳过：这份档里没有可测试的护甲）")
        else:
            all_names = {x["name"] for x in b2}
            new_name = next(c for c in ("Armor_002_Head", "Armor_003_Head", "Armor_004_Head",
                                        "Armor_015_Head", "Armor_035_Head", "Armor_099_Lower")
                            if c not in all_names)
            payload2 = strip_capacity(base2)
            for x in payload2:
                if x["slot"] == b2[armor_i]["slot"]:
                    x["name"] = new_name
            payload2.append({"_deleted": True, "slot": b2[2]["slot"]})
            m.write_inventory_to_sav(dst2, payload2)
            a2 = m.read_inventory_from_sav(dst2)
            want_i2 = armor_i - 1
            check(f"序号 {want_i2} 换形为 {new_name}",
                  a2[want_i2]["name"] == new_name, (a2[want_i2]["slot"], a2[want_i2]["name"]))
            check("换形没有波及别的物品",
                  [x["name"] for i, x in enumerate(a2) if i != want_i2] ==
                  [x["name"] for i, x in enumerate(b2) if i != armor_i and i != 2])

        # ---------- [3] 删除 + 改修饰符 ----------
        print()
        print("[3] 删除低位槽 + 改高位槽修饰符")
        dst3 = os.path.join(tmp, "order_mod.sav")
        shutil.copy2(sav, dst3)
        base3 = m.read_inventory_with_capacity_from_sav(dst3)
        b3 = [x for x in base3 if "name" in x]
        w_i = next((i for i, x in enumerate(b3) if i > 3 and m.weapon_category(x["name"])), None)
        if w_i is None:
            print("  （跳过：这份档第 4 件之后没有武器）")
        else:
            payload3 = strip_capacity(base3)
            for x in payload3:
                if x["slot"] == b3[w_i]["slot"]:
                    x["modifier"] = 0x80000004
                    x["modifier_value"] = 33
            payload3.append({"_deleted": True, "slot": b3[2]["slot"]})
            n3 = m.write_inventory_to_sav(dst3, payload3)
            a3 = m.read_inventory_from_sav(dst3)
            want_i3 = w_i - 1
            check(f"序号 {want_i3} 仍是 {b3[w_i]['name']}",
                  a3[want_i3]["name"] == b3[w_i]["name"],
                  (a3[want_i3]["slot"], a3[want_i3]["name"]))
            check("修饰符落在这把武器上",
                  (a3[want_i3]["modifier"] & 0xFFFFFFFF) == 0x80000004, hex(a3[want_i3]["modifier"]))
            check("修饰强度同步落位", a3[want_i3]["modifier_value"] == 33, a3[want_i3]["modifier_value"])

        # ---------- [4] 同时删 + 增 ----------
        print()
        print("[4] 同时删除 + 新增")
        dst4 = os.path.join(tmp, "order_add.sav")
        shutil.copy2(sav, dst4)
        base4 = m.read_inventory_with_capacity_from_sav(dst4)
        b4 = [x for x in base4 if "name" in x]
        payload4 = strip_capacity(base4)
        payload4.append({"_deleted": True, "slot": b4[0]["slot"]})
        payload4.append({"slot": -1001, "name": "Weapon_Sword_070", "value": 4000,
                         "equipped": False, "modifier": 0, "modifier_value": 0, "_new": True})
        n4 = m.write_inventory_to_sav(dst4, payload4)
        a4 = m.read_inventory_from_sav(dst4)
        check("物品数守恒（删 1 增 1）", len(a4) == len(b4), (len(b4), len(a4), n4))
        check("新增的物品真的在背包里",
              any(x["name"] == "Weapon_Sword_070" for x in a4))
        check("背包稠密", [x["slot"] for x in a4] == list(range(len(a4))))

        # ---------- [5] 零改动幂等 ----------
        print()
        print("[5] 零改动写回 = 不动文件")
        dst5 = os.path.join(tmp, "noop.sav")
        shutil.copy2(sav, dst5)
        inv5 = m.read_inventory_with_capacity_from_sav(dst5)
        before = m.file_sha256(dst5)
        m.write_inventory_to_sav(dst5, inv5)
        check("背包零改动写回 SHA-256 不变", m.file_sha256(dst5) == before)

        horses = m.read_horses_from_sav(dst5)
        before_h = m.file_sha256(dst5)
        m.write_horses_to_sav(dst5, json.loads(json.dumps(horses)))
        check("马匹零改动写回 SHA-256 不变（亲密度不被 1 ulp 改写）",
              m.file_sha256(dst5) == before_h)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    print()
    print("=" * 50)
    print(f" 结果：{PASS} 通过 · {FAIL} 失败")
    print("=" * 50)
    return 0 if FAIL == 0 else 1


def test_all_write_order():
    """★ V13.7 pytest 入口（pytest.ini: python_functions = test_all_*）。"""
    rc = main_test()
    assert rc == 0, "写回顺序回归失败（详见上方输出）"


if __name__ == "__main__":
    sys.exit(main_test())
