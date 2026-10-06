/* challenges_data.js —— 由 challenges.json 自动生成（2026-10-01），请勿手改。
   作用：file:// 双击打开 HTML 时浏览器禁止 fetch 本地 JSON，
   因此把数据包成 script 直接给页面用。
   重新生成： node editor\刷新挑战数据.js
   （HTML 里还有一份内嵌保底副本；这里刷新后，外部文件会被优先使用） */
window.CHALLENGE_DB = {
 "meta": {
  "format_version": 1,
  "generated": "2026-10-02",
  "game_version": "Wii U 1.5.0 (0x471B, signature 18203)",
  "hash_algorithm": "CRC32(UTF-8 flag name)，与存档 HashValue 全量验证一致",
  "sources": [
   "BotW-Save-Editor/savdata_list471B.json (43667 旗标名，已与游戏内 savedataformat.ssarc 逐名验证一致)",
   "游戏本机 Pack/Bootup_JPja.pack -> Message/Msg_JPja.product.ssarc -> QL_*.msbt (任务日志中文文本)",
   "2026-10-01/game_data.sav.json (存档快照，仅用于 values 字段与统计)"
  ],
  "disclaimer": "category/subcategory/category_basis 均为逆向分析所得分类，游戏文件中不存在官方分类字段；confidence: confirmed=文本与旗标明确对应, probable=高度相关未动态验证, unknown=仅确认存在关联",
  "hash_lookup": "savdata_list471B.json（键为有符号 int32 CRC32）",
  "validation": {
   "hash_mismatch": 0,
   "flag_names_all_from_471B": true
  }
 },
 "stats_hint": null,
 "special_structures": [
  {
   "stem": "BarrelErrand_Finish",
   "note": "复合旗标：存在 BarrelErrand_Finish_Finished / BarrelErrand_Intro_Finished，与 BarrelErrand_Activated/Ready 分属不同词干"
  },
  {
   "stem": "MamonoShop_BigEnemy_Golem",
   "note": "旗标名自嵌套：MamonoShop_BigEnemy_Golem_Mamonoshop_BigEnemy_Golem_Step1"
  },
  {
   "stem": "Rito_BrosRock",
   "note": "旗标名自嵌套：Rito_BrosRock_Rito_BrosRock_Step1/Step2"
  },
  {
   "stem": "Npc_Kakariko003_cooking1",
   "note": "小写 finished 后缀（Npc_Kakariko003_cooking1_finished），非任务三件套"
  },
  {
   "stem": "Npc_Kakariko003_cooking2",
   "note": "小写 finished 后缀，非任务三件套"
  },
  {
   "stem": "Npc_Kakariko003_cooking3",
   "note": "小写 finished 后缀，非任务三件套"
  },
  {
   "stem": "100enemy",
   "note": "DLC 剑之试练：无 _Activated 三件套，使用 Active/Active2/Active3 与 Clear_Junior/Middle/Senior"
  }
 ],
 "unmatched_quest_flags": [
  "AncientLabo_NPC002_ReadyFirst",
  "BigWhales_Ready_Gamyo",
  "BigWhales_Ready_Negyui",
  "BigWhales_Ready_Orak",
  "BoguQuest2_1_3",
  "BoguQuest_1_3",
  "GerudoQuestCount",
  "Guide_Quest",
  "HatenoNPC025_FirstFinish",
  "HatenoNPC028_DemonStatue_FinishFirst",
  "KokiriNPC002_OtherSageQuest",
  "MainField_Enemy_Assassin_Middle_Quest_671216765",
  "MiniGame_GambleTreasureBox_FirstTalkFinish",
  "Npc_Bottle_Mes001_ReadyFirst",
  "Npc_HatenoGate001_GuideFinish",
  "Npc_Zora006_FinishFirst",
  "Npc_Zora010_FinishFirst",
  "Npc_Zora011_FinishFirst",
  "Npc_Zora011_FrogFinishFirst",
  "Npc_Zora011_FrogReadyFirst",
  "Npc_Zora011_ReadyFirst",
  "Npc_Zora013_OreFinishFirst",
  "Npc_Zora013_OreReadyFirst",
  "Npc_Zora015_FinishFirst",
  "Npc_Zora015_ReadyFirst",
  "Npc_Zora027_FinishFirst",
  "Npc_Zora036_FinishFirst",
  "Npc_Zora036_ReadyFirst",
  "Npc_Zora036_WaterActivatedFirst",
  "Npc_Zora036_WaterFinishFirst",
  "Npc_Zora036_WaterReadyFirst",
  "QuestIndexSetPointGuide",
  "Rito_NPC010_Question",
  "Rito_NPC037_FinishFirst",
  "UMiiVillage_NPC031_FinishFirst",
  "UMiiVillage_NPC050_FinishFirst",
  "UotoriMini_RecipieSea_FinishDay",
  "WeaponQuest2_1_3",
  "WeaponQuest_1_3"
 ],
 "challenges": [
  {
   "id": "100enemy",
   "name": "库树长老所说，\n\n大师之剑尚未释放出真正的力量，\n要释放其真正的力量就必须接受剑之试练。\n\n只要将大师之剑插回台座上，\n就能挑战剑之试练。",
   "category": "DLC / 剑之试炼",
   "subcategory": "剑之试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为大师之剑·剑之试练",
   "message_file": "QL_100enemy",
   "text": {
    "name": "据德库树长老所说，大师之剑尚未释放出真正的力量，要释放其真正的力量就必须接受剑之试练。只要将大师之剑插回台座上，就能挑战剑之试练。",
    "desc": "耳畔忽闻人语声，你被告知将面临一个重大的试练。重大的试练到底是怎样的试练呢？据说只要拜访洛格森林德库树长老就会得到指引……",
    "finish": null,
    "steps": {
     "QL_100enemy_ToDeku": "耳畔忽闻人语声，你被告知将面临一个重大的试练。重大的试练到底是怎样的试练呢？据说只要拜访洛格森林德库树长老就会得到指引……",
     "QL_100enemy_Active": "你已成功通过试练，能更加自如地使用大师之剑。剑之试练好像仍未结束，直到获得大师之剑的真正光辉那天为止。"
    },
    "name_label": "QL_100enemy_Name",
    "desc_label": "QL_100enemy_ToDeku",
    "finish_label": null,
    "items": [
     {
      "label": "QL_100enemy_ToDeku",
      "text": "Ex 剑之试练"
     },
     {
      "label": "QL_100enemy_ToDeku",
      "text": "耳畔忽闻人语声，你被告知将面临一个重大的试练。重大的试练到底是怎样的试练呢？据说只要拜访洛格森林德库树长老就会得到指引……"
     },
     {
      "label": "QL_100enemy_Name",
      "text": "据德库树长老所说，大师之剑尚未释放出真正的力量，要释放其真正的力量就必须接受剑之试练。只要将大师之剑插回台座上，就能挑战剑之试练。"
     },
     {
      "label": null,
      "text": "你已成功通过试练。相比以前，你已经能自如地使用大师之剑。但是，这并不表示剑之试练已全部结束。为了获得大师之剑的真正光辉，还要继续挑战。"
     },
     {
      "label": "QL_100enemy_Active",
      "text": "你已成功通过试练，能更加自如地使用大师之剑。剑之试练好像仍未结束，直到获得大师之剑的真正光辉那天为止。"
     },
     {
      "label": null,
      "text": "将大师之剑插回台座后，你被送到异空的神庙，听到不可思议的声音。声音告诉你，只要不使用之前的武器、道具，排除此地出现的全部障碍，就可以获得大师之剑的真正光辉。"
     },
     {
      "label": null,
      "text": "你成功通过了严峻的剑之试练，获得了可以将大师之剑的力量全数发挥的肉体和精神。塞尔达公主肯定也会祝福你的成长吧。"
     }
    ],
    "source": "QL_100enemy"
   },
   "labels": [
    "QL_100enemy_ToDeku",
    "QL_100enemy_ToDeku",
    "QL_100enemy_Name",
    "QL_100enemy_Active2",
    "QL_100enemy_Active",
    "QL_100enemy_Desc",
    "������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\t\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0003�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\t\u0000\u0000\u0000(\u0000\u0000\u00008\u0000\u0000\u0000�\u0000\u0000\u0001f\u0000\u0000\u0001�\u0000\u0000\u0002f\u0000\u0000\u0003\u000e\u0000\u0000\u0003\u0010\u0000\u0000\u0003\u0012\u0000E\u0000x\u0000 RQNK��~�\u0000\u0000�3uT_���N���X��\f\u0000\nO`��TJw�\\\u0006�bN4N\u0000N*��Y'v���~�0\u0002\u0000\n\u0000\n��Y'v���~"
   ],
   "flags": {
    "ready": "100enemy_Ready",
    "activated": "100enemy_Activated",
    "finish": "100enemy_Finish",
    "steps": [],
    "aux": [
     "100enemy_Active",
     "100enemy_Active2",
     "100enemy_Active3",
     "100enemy_ClearScene_1",
     "100enemy_ClearScene_2",
     "100enemy_ClearScene_3",
     "100enemy_ClearScene_4",
     "100enemy_ClearScene_5",
     "100enemy_ClearScene_6",
     "100enemy_ClearScene_7",
     "100enemy_ClearScene_8",
     "100enemy_ClearScene_9",
     "100enemy_Clear_Junior",
     "100enemy_Clear_Middle",
     "100enemy_Clear_Senior",
     "100enemy_Demo209",
     "100enemy_OnceRetire",
     "100enemy_ToDeku",
     "100enemy_VanishPreist",
     "100enemy_VanishShield"
    ]
   },
   "source": [
    "QL_100enemy",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "100enemy_Ready": 1,
    "100enemy_Activated": 0,
    "100enemy_Finish": 0,
    "100enemy_Active": 0,
    "100enemy_Active2": 0,
    "100enemy_Active3": 0,
    "100enemy_ClearScene_1": 0,
    "100enemy_ClearScene_2": 0,
    "100enemy_ClearScene_3": 0,
    "100enemy_ClearScene_4": 0,
    "100enemy_ClearScene_5": 0,
    "100enemy_ClearScene_6": 0,
    "100enemy_ClearScene_7": 0,
    "100enemy_ClearScene_8": 0,
    "100enemy_ClearScene_9": 0,
    "100enemy_Clear_Junior": 0,
    "100enemy_Clear_Middle": 0,
    "100enemy_Clear_Senior": 0,
    "100enemy_Demo209": 0,
    "100enemy_OnceRetire": 0,
    "100enemy_ToDeku": 0,
    "100enemy_VanishPreist": 0,
    "100enemy_VanishShield": 0
   },
   "status_snapshot": "未开始",
   "title": "Ex 剑之试练",
   "title_source": "QL_100enemy · text[0] · 标签:QL_100enemy_ToDeku"
  },
  {
   "id": "Animal_Forest",
   "name": "长莺飞之大地，两杆枪野兽驰骋追丽。\n  乘此野兽以奔腾，勇者的试练方能现形。”\n\n两杆枪的野兽是指山鹿。\n\n骑着山鹿踏上浮雕，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Animal_Forest",
   "text": {
    "name": "“草长莺飞之大地，两杆枪野兽驰骋追丽。  乘此野兽以奔腾，勇者的试练方能现形。”两杆枪的野兽是指山鹿。骑着山鹿踏上浮雕，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "“草长莺飞之大地，两杆枪野兽驰骋追丽。  乘此野兽以奔腾，勇者的试练方能现形。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。",
    "steps": {},
    "name_label": "QL_Animal_Forest_Name",
    "desc_label": null,
    "finish_label": "QL_Animal_Forest_Finish",
    "items": [
     {
      "label": null,
      "text": "两杆枪野兽"
     },
     {
      "label": "QL_Animal_Forest_Finish",
      "text": "“草长莺飞之大地，两杆枪野兽驰骋追丽。  乘此野兽以奔腾，勇者的试练方能现形。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。"
     },
     {
      "label": "QL_Animal_Forest_Name",
      "text": "“草长莺飞之大地，两杆枪野兽驰骋追丽。  乘此野兽以奔腾，勇者的试练方能现形。”两杆枪的野兽是指山鹿。骑着山鹿踏上浮雕，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_Animal_Forest"
   },
   "labels": [
    "QL_Animal_Forest_Finish",
    "QL_Animal_Forest_Name"
   ],
   "flags": {
    "ready": "Animal_Forest_Ready",
    "activated": "Animal_Forest_Activated",
    "finish": "Animal_Forest_Finish",
    "steps": [
     "Animal_Forest_step1"
    ],
    "aux": [
     "Animal_Forest_Act"
    ]
   },
   "source": [
    "QL_Animal_Forest",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Animal_Forest_Ready": 1,
    "Animal_Forest_Activated": 0,
    "Animal_Forest_Finish": 0,
    "Animal_Forest_step1": 0,
    "Animal_Forest_Act": 0
   },
   "status_snapshot": "未开始",
   "title": "两杆枪野兽",
   "title_source": "QL_Animal_Forest · text[0] · 无标签"
  },
  {
   "id": "AoC_hero_memory",
   "name": null,
   "category": "DLC / 英杰之诗",
   "subcategory": "EX 其他",
   "category_source": "analysis",
   "category_basis": "analysis: AoC 前缀词干，无 QL 文件",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "AoC_hero_memory_Ready",
    "activated": "AoC_hero_memory_Activated",
    "finish": "AoC_hero_memory_Finish",
    "steps": [
     "AoC_hero_memory_Step01",
     "AoC_hero_memory_Step02"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "AoC_hero_memory_Ready": 0,
    "AoC_hero_memory_Activated": 0,
    "AoC_hero_memory_Finish": 0,
    "AoC_hero_memory_Step01": 0,
    "AoC_hero_memory_Step02": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "BalladOfHeroGerudo",
   "name": "之剑散去之处，出现了石碑。\n上面所刻的地图指示了下一项试练。\n自吟游诗人卡西瓦处听来\n可能与试练有关的古诗称，\n一是要倒沙海之主\n二是要野兽一起穿过光环\n三是要沙漠小镇的宝珠投入大洞之中\n需通过的试练尚有项",
   "category": "DLC / 英杰之诗",
   "subcategory": "英杰之诗",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为英杰之诗系列",
   "message_file": "QL_BalladOfHeroGerudo",
   "text": {
    "name": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项",
    "desc": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项",
    "finish": "必杀之剑散去之处出现了石碑。上面所刻的地图指名了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项",
    "steps": {
     "QL_BalladOfHeroGerudo_Seek2ndDungeon": "必杀之剑散去之处出现了石碑。上面所刻的地图指名了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项"
    },
    "name_label": "QL_BalladOfHeroGerudo_Name",
    "desc_label": "QL_BalladOfHeroGerudo_Name",
    "finish_label": "QL_BalladOfHeroGerudo_Seek2ndDungeon",
    "items": [
     {
      "label": null,
      "text": "Ex 英杰乌尔波扎之诗"
     },
     {
      "label": "QL_BalladOfHeroGerudo_Seek2ndDungeon",
      "text": "必杀之剑散去之处出现了石碑。上面所刻的地图指名了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项"
     },
     {
      "label": "QL_BalladOfHeroGerudo_Name",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项"
     },
     {
      "label": null,
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要倒沙海之主二是要野兽一起穿过光环三是要沙漠小镇的宝珠投入大洞之中需通过的试练尚有项"
     },
     {
      "label": null,
      "text": "已通过格鲁德地区石碑所示的3项试练。在最后的神庙集齐3个娜波力斯之证后，你受导师的指示前往神兽之处。前方究竟有什么在等着你呢？前往镇座神兽——瓦·娜波力斯所在之处吧。"
     },
     {
      "label": null,
      "text": "当你抵达神兽瓦·娜波力斯所在之处时，耳畔再次响起导师的声音，新的试练开始了！自身恐惧所生出的记忆幻影，雷咒盖侬出现了！试着凭授予的道具败它，通过试练吧！"
     },
     {
      "label": null,
      "text": "你已打败自身恐惧所生出的记忆幻影——雷咒盖侬，通过了试练！卡西瓦为你吟诵的杰乌尔波扎之诗让你如临其境，眼前浮现出100年前的情景。由于通过了试练，神圣之力提升，英杰乌尔波扎的愤怒已获得强化。"
     }
    ],
    "source": "QL_BalladOfHeroGerudo"
   },
   "labels": [
    "QL_BalladOfHeroGerudo_Seek2ndDungeon",
    "QL_BalladOfHeroGerudo_Name",
    "QL_BalladOfHeroGerudo_Seek1stDungeon",
    "QL_BalladOfHeroGerudo_Desc",
    "QL_BalladOfHeroGerudo_Finish"
   ],
   "flags": {
    "ready": "BalladOfHeroGerudo_Ready",
    "activated": "BalladOfHeroGerudo_Activated",
    "finish": "BalladOfHeroGerudo_Finish",
    "steps": [],
    "aux": [
     "BalladOfHeroGerudo_003_aboutGem",
     "BalladOfHeroGerudo_037_1stGerudoDesert",
     "BalladOfHeroGerudo_037_AfterTalk",
     "BalladOfHeroGerudo_037_GotHints",
     "BalladOfHeroGerudo_037_aboutWomanDress",
     "BalladOfHeroGerudo_AppearDungeon01",
     "BalladOfHeroGerudo_AppearDungeon02",
     "BalladOfHeroGerudo_AppearDungeon03",
     "BalladOfHeroGerudo_BallInHole",
     "BalladOfHeroGerudo_BigHoleAreaONOFF",
     "BalladOfHeroGerudo_CountVoice",
     "BalladOfHeroGerudo_DieCurse",
     "BalladOfHeroGerudo_EventClearDungeon01",
     "BalladOfHeroGerudo_EventClearDungeon02",
     "BalladOfHeroGerudo_EventClearDungeon03",
     "BalladOfHeroGerudo_FirstKillSandwormR",
     "BalladOfHeroGerudo_GenerateCurse",
     "BalladOfHeroGerudo_GiveHeroOrbs",
     "BalladOfHeroGerudo_OutsideHideout_Ball",
     "BalladOfHeroGerudo_ReliefSong",
     "BalladOfHeroGerudo_RingChaseSuccess",
     "BalladOfHeroGerudo_Seek1stDungeon",
     "BalladOfHeroGerudo_Seek2ndDungeon",
     "BalladOfHeroGerudo_Seek3rdDungeon",
     "BalladOfHeroGerudo_ToRemains"
    ]
   },
   "source": [
    "QL_BalladOfHeroGerudo",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "BalladOfHeroGerudo_Ready": 0,
    "BalladOfHeroGerudo_Activated": 0,
    "BalladOfHeroGerudo_Finish": 0,
    "BalladOfHeroGerudo_003_aboutGem": 0,
    "BalladOfHeroGerudo_037_1stGerudoDesert": 0,
    "BalladOfHeroGerudo_037_AfterTalk": 0,
    "BalladOfHeroGerudo_037_GotHints": 0,
    "BalladOfHeroGerudo_037_aboutWomanDress": 0,
    "BalladOfHeroGerudo_AppearDungeon01": 0,
    "BalladOfHeroGerudo_AppearDungeon02": 0,
    "BalladOfHeroGerudo_AppearDungeon03": 0,
    "BalladOfHeroGerudo_BallInHole": 0,
    "BalladOfHeroGerudo_BigHoleAreaONOFF": 0,
    "BalladOfHeroGerudo_CountVoice": 0,
    "BalladOfHeroGerudo_DieCurse": 0,
    "BalladOfHeroGerudo_EventClearDungeon01": 0,
    "BalladOfHeroGerudo_EventClearDungeon02": 0,
    "BalladOfHeroGerudo_EventClearDungeon03": 0,
    "BalladOfHeroGerudo_FirstKillSandwormR": 0,
    "BalladOfHeroGerudo_GenerateCurse": 0,
    "BalladOfHeroGerudo_GiveHeroOrbs": 0,
    "BalladOfHeroGerudo_OutsideHideout_Ball": 1,
    "BalladOfHeroGerudo_ReliefSong": 0,
    "BalladOfHeroGerudo_RingChaseSuccess": 0,
    "BalladOfHeroGerudo_Seek1stDungeon": 0,
    "BalladOfHeroGerudo_Seek2ndDungeon": 0,
    "BalladOfHeroGerudo_Seek3rdDungeon": 0,
    "BalladOfHeroGerudo_ToRemains": 0
   },
   "status_snapshot": "未知",
   "title": "Ex 英杰乌尔波扎之诗",
   "title_source": "QL_BalladOfHeroGerudo · text[0] · 无标签"
  },
  {
   "id": "BalladOfHeroGoron",
   "name": "英杰达尔克尔之诗",
   "category": "DLC / 英杰之诗",
   "subcategory": "英杰之诗",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为英杰之诗系列",
   "message_file": "QL_BalladOfHeroGoron",
   "text": {
    "name": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处",
    "desc": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处",
    "finish": null,
    "steps": {
     "QL_BalladOfHeroGoron_Seek3rdDungeon": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处",
     "QL_BalladOfHeroGoron_Seek1stDungeon": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处"
    },
    "name_label": "QL_BalladOfHeroGoron_Seek3rdDungeon",
    "desc_label": "QL_BalladOfHeroGoron_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_BalladOfHeroGoron_Name",
      "text": "Ex 英杰达尔克尔之诗"
     },
     {
      "label": "QL_BalladOfHeroGoron_Seek3rdDungeon",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处"
     },
     {
      "label": "QL_BalladOfHeroGoron_Seek1stDungeon",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处"
     },
     {
      "label": "QL_BalladOfHeroGoron_Desc",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要胜燃烧的巨石二是要越架设在火山上的光环三是要于熔岩之上需通过的试练尚有处"
     },
     {
      "label": null,
      "text": "已通过奥尔汀地区石碑所示的3项试练。在最后的神庙集齐3个鲁达尼亚之证后，你受导师的指示前往神兽之处。前方究竟有什么在等着你呢？前往镇座神兽——瓦·鲁达尼亚所在之处吧。"
     },
     {
      "label": null,
      "text": "当你抵达神兽瓦·鲁达尼亚所在之处时，耳畔再次响起导师的声音，新的试练开始了！自身恐惧所生出的记忆幻影，火咒盖侬出现了！试着凭授予的道具败它，通过试练吧！"
     },
     {
      "label": null,
      "text": "你已打败自身恐惧所生出的记忆幻影——火咒盖侬，通过了试练！卡西瓦为你吟诵的杰达尔克尔之诗让你如临其境，眼前浮现出100年前的情景。由于通过了试练，神圣之力提升，英杰达尔克尔的守护已获得强化。"
     }
    ],
    "source": "QL_BalladOfHeroGoron"
   },
   "labels": [
    "QL_BalladOfHeroGoron_Seek3rdDungeon",
    "QL_BalladOfHeroGoron_Name",
    "QL_BalladOfHeroGoron_Name",
    "QL_BalladOfHeroGoron_Desc",
    "QL_BalladOfHeroGoron_Seek1stDungeon"
   ],
   "flags": {
    "ready": "BalladOfHeroGoron_Ready",
    "activated": "BalladOfHeroGoron_Activated",
    "finish": "BalladOfHeroGoron_Finish",
    "steps": [],
    "aux": [
     "BalladOfHeroGoron_AppearDungeon01",
     "BalladOfHeroGoron_AppearDungeon02",
     "BalladOfHeroGoron_AppearDungeon03",
     "BalladOfHeroGoron_CountVoice",
     "BalladOfHeroGoron_DieCurse",
     "BalladOfHeroGoron_EventClearDungeon01",
     "BalladOfHeroGoron_EventClearDungeon02",
     "BalladOfHeroGoron_EventClearDungeon03",
     "BalladOfHeroGoron_FirstKillGolemR",
     "BalladOfHeroGoron_GenerateCurse",
     "BalladOfHeroGoron_GiveHeroOrbs",
     "BalladOfHeroGoron_Goron_ChangeSchedule",
     "BalladOfHeroGoron_Goronbrothers_Talk",
     "BalladOfHeroGoron_KillGolemR",
     "BalladOfHeroGoron_Npc_Goron022_AfterTalk",
     "BalladOfHeroGoron_Npc_Goron022_Omiyage",
     "BalladOfHeroGoron_Npc_Goron022_Talk",
     "BalladOfHeroGoron_ReliefSong",
     "BalladOfHeroGoron_RingMountainSuccess",
     "BalladOfHeroGoron_RingOnGround",
     "BalladOfHeroGoron_Seek1stDungeon",
     "BalladOfHeroGoron_Seek2ndDungeon",
     "BalladOfHeroGoron_Seek3rdDungeon",
     "BalladOfHeroGoron_ToRemains"
    ]
   },
   "source": [
    "QL_BalladOfHeroGoron",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "BalladOfHeroGoron_Ready": 0,
    "BalladOfHeroGoron_Activated": 0,
    "BalladOfHeroGoron_Finish": 0,
    "BalladOfHeroGoron_AppearDungeon01": 0,
    "BalladOfHeroGoron_AppearDungeon02": 0,
    "BalladOfHeroGoron_AppearDungeon03": 0,
    "BalladOfHeroGoron_CountVoice": 0,
    "BalladOfHeroGoron_DieCurse": 0,
    "BalladOfHeroGoron_EventClearDungeon01": 0,
    "BalladOfHeroGoron_EventClearDungeon02": 0,
    "BalladOfHeroGoron_EventClearDungeon03": 0,
    "BalladOfHeroGoron_FirstKillGolemR": 0,
    "BalladOfHeroGoron_GenerateCurse": 0,
    "BalladOfHeroGoron_GiveHeroOrbs": 0,
    "BalladOfHeroGoron_Goron_ChangeSchedule": 0,
    "BalladOfHeroGoron_Goronbrothers_Talk": 0,
    "BalladOfHeroGoron_KillGolemR": 0,
    "BalladOfHeroGoron_Npc_Goron022_AfterTalk": 0,
    "BalladOfHeroGoron_Npc_Goron022_Omiyage": 0,
    "BalladOfHeroGoron_Npc_Goron022_Talk": 0,
    "BalladOfHeroGoron_ReliefSong": 0,
    "BalladOfHeroGoron_RingMountainSuccess": 0,
    "BalladOfHeroGoron_RingOnGround": 0,
    "BalladOfHeroGoron_Seek1stDungeon": 0,
    "BalladOfHeroGoron_Seek2ndDungeon": 0,
    "BalladOfHeroGoron_Seek3rdDungeon": 0,
    "BalladOfHeroGoron_ToRemains": 0
   },
   "status_snapshot": "未知",
   "title": "Ex 英杰达尔克尔之诗",
   "title_source": "QL_BalladOfHeroGoron · text[0] · 标签:QL_BalladOfHeroGoron_Name"
  },
  {
   "id": "BalladOfHeroRito",
   "name": "英杰力巴尔之诗",
   "category": "DLC / 英杰之诗",
   "subcategory": "英杰之诗",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为英杰之诗系列",
   "message_file": "QL_BalladOfHeroRito",
   "text": {
    "name": "Ex 英杰力巴尔之诗",
    "desc": null,
    "finish": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要穿焰龙之角。二是要为疾风穿越光环。三是要间射中4个靶子。需通过的试练尚有处",
    "steps": {
     "QL_BalladOfHeroRito_Seek3rdDungeon": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要穿焰龙之角。二是要为疾风穿越光环。三是要间射中4个靶子。需通过的试练尚有处"
    },
    "name_label": "QL_BalladOfHeroRito_Name",
    "desc_label": null,
    "finish_label": "QL_BalladOfHeroRito_Seek3rdDungeon",
    "items": [
     {
      "label": "QL_BalladOfHeroRito_Name",
      "text": "Ex 英杰力巴尔之诗"
     },
     {
      "label": "QL_BalladOfHeroRito_Seek3rdDungeon",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要穿焰龙之角。二是要为疾风穿越光环。三是要间射中4个靶子。需通过的试练尚有处"
     },
     {
      "label": null,
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要穿焰龙之角。二是要为疾风穿越光环。三是要间射中4个靶子。需通过的试练尚有处"
     },
     {
      "label": "QL_BalladOfHeroRito_Name",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要穿焰龙之角。二是要为疾风穿越光环。三是要间射中4个靶子。需通过的试练尚有处"
     },
     {
      "label": null,
      "text": "已通过海布拉地区石碑所示的3项试练。在最后的神庙集齐3个梅德之证后，你受导师的指示前往神兽之处。前方究竟有什么在等着你呢？前往镇座神兽——瓦·梅德所在之处吧。"
     },
     {
      "label": null,
      "text": "当你抵达神兽瓦·梅德所在之处时，耳畔再次响起导师的声音，新的试练开始了！自身恐惧所生出的记忆幻影，风咒盖侬出现了！试着凭授予的道具败它，通过试练吧！"
     },
     {
      "label": null,
      "text": "你已打败自身恐惧所生出的记忆幻影——风咒盖侬，通过了试练！卡西瓦为你吟诵的杰力巴尔之诗让你如临其境，眼前浮现出100年前的情景。由于通过了试练，神圣之力提升，英杰力巴尔的勇猛已获得强化。"
     }
    ],
    "source": "QL_BalladOfHeroRito"
   },
   "labels": [
    "QL_BalladOfHeroRito_Name",
    "QL_BalladOfHeroRito_Name",
    "QL_BalladOfHeroRito_Seek3rdDungeon",
    "QL_BalladOfHeroRito_ToRemains",
    "QL_BalladOfHeroRito_Seek2ndDungeon",
    "QL_BalladOfHeroRito_Finish",
    "���ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0005�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000 \u0000\u0000\u00006\u0000\u0000\u0001\\\u0000\u0000\u0002�\u0000\u0000\u0003�\u0000\u0000\u0004T\u0000\u0000\u0005\u000e\u0000E\u0000x\u0000 ��gpR�]�\\\u0014NK��\u0000\u0000_�g@NKRQecS�NKY\u0004�\fQ�s�N�w�x�0\u0002\u0000\nN\n�bb@R;v�W0V�c\u0007y:N�N\u000bN\u0000�y��~�0\u0002\u0000\n"
   ],
   "flags": {
    "ready": "BalladOfHeroRito_Ready",
    "activated": "BalladOfHeroRito_Activated",
    "finish": "BalladOfHeroRito_Finish",
    "steps": [],
    "aux": [
     "BalladOfHeroRito_AppearDragonRing",
     "BalladOfHeroRito_AppearDungeon01",
     "BalladOfHeroRito_AppearDungeon02",
     "BalladOfHeroRito_AppearDungeon03",
     "BalladOfHeroRito_ClearDragonRing",
     "BalladOfHeroRito_CountVoice",
     "BalladOfHeroRito_DemoObj01",
     "BalladOfHeroRito_DieCurse",
     "BalladOfHeroRito_DragonEffect",
     "BalladOfHeroRito_DragonSuccess",
     "BalladOfHeroRito_DragonTalk",
     "BalladOfHeroRito_EventClearDungeon01",
     "BalladOfHeroRito_EventClearDungeon02",
     "BalladOfHeroRito_EventClearDungeon03",
     "BalladOfHeroRito_GenerateCurse",
     "BalladOfHeroRito_GiveHeroOrbs",
     "BalladOfHeroRito_NotDragonRingTalk",
     "BalladOfHeroRito_Npc_HighMountain011_Talk",
     "BalladOfHeroRito_ReliefSong",
     "BalladOfHeroRito_RingSurfingSuccess",
     "BalladOfHeroRito_RingUpdraftSuccess",
     "BalladOfHeroRito_Seek1stDungeon",
     "BalladOfHeroRito_Seek2ndDungeon",
     "BalladOfHeroRito_Seek3rdDungeon",
     "BalladOfHeroRito_Takka_Talk",
     "BalladOfHeroRito_TargetEffect",
     "BalladOfHeroRito_TargetHittingSuccess",
     "BalladOfHeroRito_ToRemains"
    ]
   },
   "source": [
    "QL_BalladOfHeroRito",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "BalladOfHeroRito_Ready": 0,
    "BalladOfHeroRito_Activated": 0,
    "BalladOfHeroRito_Finish": 0,
    "BalladOfHeroRito_AppearDragonRing": 0,
    "BalladOfHeroRito_AppearDungeon01": 0,
    "BalladOfHeroRito_AppearDungeon02": 0,
    "BalladOfHeroRito_AppearDungeon03": 0,
    "BalladOfHeroRito_ClearDragonRing": 0,
    "BalladOfHeroRito_CountVoice": 0,
    "BalladOfHeroRito_DemoObj01": 0,
    "BalladOfHeroRito_DieCurse": 0,
    "BalladOfHeroRito_DragonEffect": 0,
    "BalladOfHeroRito_DragonSuccess": 0,
    "BalladOfHeroRito_DragonTalk": 0,
    "BalladOfHeroRito_EventClearDungeon01": 0,
    "BalladOfHeroRito_EventClearDungeon02": 0,
    "BalladOfHeroRito_EventClearDungeon03": 0,
    "BalladOfHeroRito_GenerateCurse": 0,
    "BalladOfHeroRito_GiveHeroOrbs": 0,
    "BalladOfHeroRito_NotDragonRingTalk": 0,
    "BalladOfHeroRito_Npc_HighMountain011_Talk": 0,
    "BalladOfHeroRito_ReliefSong": 0,
    "BalladOfHeroRito_RingSurfingSuccess": 0,
    "BalladOfHeroRito_RingUpdraftSuccess": 0,
    "BalladOfHeroRito_Seek1stDungeon": 0,
    "BalladOfHeroRito_Seek2ndDungeon": 0,
    "BalladOfHeroRito_Seek3rdDungeon": 0,
    "BalladOfHeroRito_Takka_Talk": 0,
    "BalladOfHeroRito_TargetEffect": 1,
    "BalladOfHeroRito_TargetHittingSuccess": 0,
    "BalladOfHeroRito_ToRemains": 0
   },
   "status_snapshot": "未知",
   "title": "Ex 英杰力巴尔之诗",
   "title_source": "QL_BalladOfHeroRito · text[0] · 标签:QL_BalladOfHeroRito_Name"
  },
  {
   "id": "BalladOfHeroZora",
   "name": "英杰米法之诗",
   "category": "DLC / 英杰之诗",
   "subcategory": "英杰之诗",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为英杰之诗系列",
   "message_file": "QL_BalladOfHeroZora",
   "text": {
    "name": "Ex 英杰米法之诗",
    "desc": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，。一是要着光之路前进二是要退古代的傀儡士兵三是要越悬挂在瀑布上的光环需通过的试练尚有处",
    "finish": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要着光之路前进二是要退古代的傀儡士兵三是要越悬挂在瀑布上的光环需通过的试练尚有处",
    "steps": {},
    "name_label": "QL_BalladOfHeroZora_Name",
    "desc_label": "QL_BalladOfHeroZora_Name",
    "finish_label": "QL_BalladOfHeroZora_Finish",
    "items": [
     {
      "label": "QL_BalladOfHeroZora_Name",
      "text": "Ex 英杰米法之诗"
     },
     {
      "label": "QL_BalladOfHeroZora_Finish",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要着光之路前进二是要退古代的傀儡士兵三是要越悬挂在瀑布上的光环需通过的试练尚有处"
     },
     {
      "label": "QL_BalladOfHeroZora_Name",
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，。一是要着光之路前进二是要退古代的傀儡士兵三是要越悬挂在瀑布上的光环需通过的试练尚有处"
     },
     {
      "label": null,
      "text": "必杀之剑散去之处，出现了石碑。上面所刻的地图指示了下一项试练。自吟游诗人卡西瓦处听来可能与试练有关的古诗称，一是要着光之路前进二是要退古代的傀儡士兵三是要越悬挂在瀑布上的光环需通过的试练尚有处"
     },
     {
      "label": null,
      "text": "已通过拉聂尔地区石碑所示的3项试练。在最后的神庙集齐3个露塔之证后，你受导师的指示前往神兽之处。前方究竟有什么在等着你呢？前往镇座神兽——瓦·露塔所在之处吧。"
     },
     {
      "label": null,
      "text": "当你抵达神兽瓦·露塔所在之处时，耳畔再次响起导师的声音，新的试练开始了！自身恐惧所生出的记忆幻影，水咒盖侬出现了！试着凭授予的道具败它，通过试练吧！"
     },
     {
      "label": null,
      "text": "你已打败自身恐惧所生出的记忆幻影——水咒盖侬，通过了试练！卡西瓦为你吟场的杰米法之诗让你如临其境，眼前浮现出100年前的情景。由于通过了试练，神圣之力提升，英杰米法的祈福已获得强化。"
     }
    ],
    "source": "QL_BalladOfHeroZora"
   },
   "labels": [
    "QL_BalladOfHeroZora_Finish",
    "QL_BalladOfHeroZora_Name",
    "QL_BalladOfHeroZora_Name",
    "QL_BalladOfHeroZora_Desc",
    "QL_BalladOfHeroZora_Seek1stDungeon"
   ],
   "flags": {
    "ready": "BalladOfHeroZora_Ready",
    "activated": "BalladOfHeroZora_Activated",
    "finish": "BalladOfHeroZora_Finish",
    "steps": [],
    "aux": [
     "BalladOfHeroZora_004_aboutTrial",
     "BalladOfHeroZora_004_aboutTrial2",
     "BalladOfHeroZora_014_aboutTrial",
     "BalladOfHeroZora_032_aboutTrial",
     "BalladOfHeroZora_AppearDungeon01",
     "BalladOfHeroZora_AppearDungeon02",
     "BalladOfHeroZora_AppearDungeon03",
     "BalladOfHeroZora_CountVoice",
     "BalladOfHeroZora_DieCurse",
     "BalladOfHeroZora_EventClearDungeon01",
     "BalladOfHeroZora_EventClearDungeon02",
     "BalladOfHeroZora_EventClearDungeon03",
     "BalladOfHeroZora_GenerateCurse",
     "BalladOfHeroZora_GiveHeroOrbs",
     "BalladOfHeroZora_GuardianClear",
     "BalladOfHeroZora_ReliefSong",
     "BalladOfHeroZora_RingWaterFallSuccess",
     "BalladOfHeroZora_Seek1stDungeon",
     "BalladOfHeroZora_Seek2ndDungeon",
     "BalladOfHeroZora_Seek3rdDungeon",
     "BalladOfHeroZora_SunriseSuccess",
     "BalladOfHeroZora_ToRemains"
    ]
   },
   "source": [
    "QL_BalladOfHeroZora",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "BalladOfHeroZora_Ready": 0,
    "BalladOfHeroZora_Activated": 0,
    "BalladOfHeroZora_Finish": 0,
    "BalladOfHeroZora_004_aboutTrial": 0,
    "BalladOfHeroZora_004_aboutTrial2": 0,
    "BalladOfHeroZora_014_aboutTrial": 0,
    "BalladOfHeroZora_032_aboutTrial": 0,
    "BalladOfHeroZora_AppearDungeon01": 0,
    "BalladOfHeroZora_AppearDungeon02": 0,
    "BalladOfHeroZora_AppearDungeon03": 0,
    "BalladOfHeroZora_CountVoice": 0,
    "BalladOfHeroZora_DieCurse": 0,
    "BalladOfHeroZora_EventClearDungeon01": 0,
    "BalladOfHeroZora_EventClearDungeon02": 0,
    "BalladOfHeroZora_EventClearDungeon03": 0,
    "BalladOfHeroZora_GenerateCurse": 0,
    "BalladOfHeroZora_GiveHeroOrbs": 0,
    "BalladOfHeroZora_GuardianClear": 0,
    "BalladOfHeroZora_ReliefSong": 0,
    "BalladOfHeroZora_RingWaterFallSuccess": 0,
    "BalladOfHeroZora_Seek1stDungeon": 0,
    "BalladOfHeroZora_Seek2ndDungeon": 0,
    "BalladOfHeroZora_Seek3rdDungeon": 0,
    "BalladOfHeroZora_SunriseSuccess": 0,
    "BalladOfHeroZora_ToRemains": 0
   },
   "status_snapshot": "未知",
   "title": "Ex 英杰米法之诗",
   "title_source": "QL_BalladOfHeroZora · text[0] · 标签:QL_BalladOfHeroZora_Name"
  },
  {
   "id": "BalladOfHeroes",
   "name": "苏神庙将希卡之石放回最初的装置后，\n虚空中出现了一把不可思议的\n\n你必须使用这把\n前往初始台地的四个地方讨伐怪物。\n\n只要拿起试练似乎就会开始。",
   "category": "DLC / 英杰之诗",
   "subcategory": "英杰之诗",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确为英杰之诗系列",
   "message_file": "QL_BalladOfHeroes",
   "text": {
    "name": "在复苏神庙将希卡之石放回最初的装置后，虚空中出现了一把不可思议的你必须使用这把前往初始台地的四个地方讨伐怪物。只要拿起试练似乎就会开始。",
    "desc": "在复苏神庙将希卡之石放回最初的装置后，虚空中出现了一把不可思议的剑。你必须使用这把剑，前往初始台地的四个地方讨伐怪物。只要拿起已回到苏神庙剑，试练似乎就会重新开始。",
    "finish": "耳畔听闻塞尔达的声音。现在既已镇压了四只神兽，在苏神庙能取得隐藏的崭新力量。前往苏神庙将希卡之石放回最初的装置吧。",
    "steps": {
     "QL_BalladOfHeroes_Step2_Dungeon4": "Ex 英杰们的诗篇"
    },
    "name_label": "QL_BalladOfHeroes_Name",
    "desc_label": "QL_BalladOfHeroes_Desc",
    "finish_label": "QL_BalladOfHeroes_Finish",
    "items": [
     {
      "label": "QL_BalladOfHeroes_Step2_Dungeon4",
      "text": "Ex 英杰们的诗篇"
     },
     {
      "label": "QL_BalladOfHeroes_Finish",
      "text": "耳畔听闻塞尔达的声音。现在既已镇压了四只神兽，在苏神庙能取得隐藏的崭新力量。前往苏神庙将希卡之石放回最初的装置吧。"
     },
     {
      "label": "QL_BalladOfHeroes_Name",
      "text": "在复苏神庙将希卡之石放回最初的装置后，虚空中出现了一把不可思议的你必须使用这把前往初始台地的四个地方讨伐怪物。只要拿起试练似乎就会开始。"
     },
     {
      "label": "QL_BalladOfHeroes_Desc",
      "text": "在复苏神庙将希卡之石放回最初的装置后，虚空中出现了一把不可思议的剑。你必须使用这把剑，前往初始台地的四个地方讨伐怪物。只要拿起已回到苏神庙剑，试练似乎就会重新开始。"
     },
     {
      "label": null,
      "text": "在复苏神庙将希卡之石放回最初的装置后，虚空中出现了一把不可思议的剑。前往初始台地的四个地方，使用此剑讨伐怪物，并攻破出现在你眼前的神庙吧。只要拿起已回到苏神庙剑，试练似乎就会开始。"
     },
     {
      "label": null,
      "text": "必杀之剑正如其名，虽能一击便击败对手，但持剑者也会变得仅一击就被打倒。前往初始台地的地图所示之地，讨伐怪物吧。想要退出试练时，只需离开初始台地，手边的剑似即会回到复苏神庙。尚未讨伐的怪物据点仍有处"
     },
     {
      "label": null,
      "text": "必杀之剑正如其名，虽能一击将对手击败，但持剑者也会变得只能承受一击之力。前往地图所示的地点，讨伐怪物吧。想要退出试练时，只要离开初始台地，手边的剑似乎就会回到复苏神庙。尚未讨伐的怪物据点仍有处攻破出现的神庙吧。"
     },
     {
      "label": null,
      "text": "必杀之剑正如其名，虽能一击将对手击败，但持剑者也会变得只能承受一击之力。前往地图所示之地，讨伐怪物吧。想要退出试练时，只要离开初始台地，手边的剑似乎就会回到复苏神庙。尚未讨伐的怪物据点仍有处攻破出现的神庙吧。"
     },
     {
      "label": null,
      "text": "必杀之剑正如其名，虽能一击将对手击败，但持剑者也会变得只能承受一击之力。前往地图所示之地，讨伐怪物吧。想要退出试练时，只要离开初始台地，手边的剑似乎就会回到复苏神庙。尚未讨伐的怪物据点仍有处攻破出现的神庙吧。"
     },
     {
      "label": null,
      "text": "必杀之剑正如其名，虽能一击将对手击败，但持剑者也会变得只能承受一击之力。想要退出试练时，只要离开初始台地，手边的剑似乎就会回到复苏神庙。怪物据点已全数讨伐完毕。攻破出现的神庙吧。"
     },
     {
      "label": null,
      "text": "已通过初始台地的试练！待你走出最后的神庙， 必杀之剑化作四道光芒散落至海拉鲁各地。看来这次的试练还有后续，到底还有怎样的试练在等着你呢？前往地图所示的地点吧，还剩下所指示的所有试练！然而，此项试练似乎并未结束。苏神庙，通往最后试练之门扉已开启。再次前往苏神庙。"
     },
     {
      "label": null,
      "text": "已打败记忆中的强敌——咒盖侬，通过四个石碑所指示的所有试练！然而，此项试练似乎并未结束。苏神庙，通往最后试练之门扉已开启。再次前往苏神庙。"
     },
     {
      "label": null,
      "text": "将希卡之石放回复苏神庙的装置后，房间开始剧烈摇晃并下降！看来神庙本身即是为试练而准备的机关。降至地底下后，眼前出现一片巨大空间。突破这个迷宫吧。"
     },
     {
      "label": null,
      "text": "已抵达试练迷宫的最深处！当你欲告知导师米兹·乔西亚完成试练一事时，导师却站起身来。最后的试练开始了！与导师米兹·乔西亚对战，展现不负神兽操纵者之名的力量吧。"
     },
     {
      "label": null,
      "text": "你向导师密兹·裘西亚展现力量，通过了操纵神兽的所有试练！开启道具一栏，即可使用导师所授予的师摩托Zero走出迷宫后，吟游诗人卡西瓦为你吟诵所完成的杰们的诗篇这首诗让你不禁回想起被任命为英杰那天所发生之事。"
     }
    ],
    "source": "QL_BalladOfHeroes"
   },
   "labels": [
    "QL_BalladOfHeroes_Name",
    "QL_BalladOfHeroes_Finish",
    "QL_BalladOfHeroes_Step01",
    "QL_BalladOfHeroes_Step02",
    "QL_BalladOfHeroes_Step03",
    "QL_BalladOfHeroes_Step04",
    "QL_BalladOfHeroes_Step02_Dungeon01",
    "QL_BalladOfHeroes_Step02_Dungeon02",
    "QL_BalladOfHeroes_Desc",
    "QL_BalladOfHeroes_Step2_Dungeon4",
    "QL_BalladOfHeroes_Step2_Dungeon4"
   ],
   "flags": {
    "ready": "BalladOfHeroes_Ready",
    "activated": "BalladOfHeroes_Activated",
    "finish": "BalladOfHeroes_Finish",
    "steps": [
     "BalladOfHeroes_Step01",
     "BalladOfHeroes_Step02",
     "BalladOfHeroes_Step02_Dungeon01",
     "BalladOfHeroes_Step02_Dungeon02",
     "BalladOfHeroes_Step02_Dungeon03",
     "BalladOfHeroes_Step03",
     "BalladOfHeroes_Step04",
     "BalladOfHeroes_Step05",
     "BalladOfHeroes_Step06",
     "BalladOfHeroes_Step07",
     "BalladOfHeroes_Step2_Dungeon4"
    ],
    "aux": [
     "BalladOfHeroes_DRStoneStand",
     "BalladOfHeroes_DispPict_1stEvent",
     "BalladOfHeroes_DisplayPicture",
     "BalladOfHeroes_EventClearDungeon01",
     "BalladOfHeroes_EventClearDungeon02",
     "BalladOfHeroes_EventClearDungeon03",
     "BalladOfHeroes_EventClearDungeon04",
     "BalladOfHeroes_FourRemains_Clear",
     "BalladOfHeroes_Kasshiwa_Appear1",
     "BalladOfHeroes_Kasshiwa_Appear2",
     "BalladOfHeroes_Kasshiwa_Appear3",
     "BalladOfHeroes_Kasshiwa_Appear4",
     "BalladOfHeroes_Kasshiwa_Delete2",
     "BalladOfHeroes_Retire",
     "BalladOfHeroes_Retire_Dungeon04"
    ]
   },
   "source": [
    "QL_BalladOfHeroes",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "BalladOfHeroes_Ready": 1,
    "BalladOfHeroes_Activated": 0,
    "BalladOfHeroes_Finish": 0,
    "BalladOfHeroes_Step01": 0,
    "BalladOfHeroes_Step02": 0,
    "BalladOfHeroes_Step02_Dungeon01": 0,
    "BalladOfHeroes_Step02_Dungeon02": 0,
    "BalladOfHeroes_Step02_Dungeon03": 0,
    "BalladOfHeroes_Step03": 0,
    "BalladOfHeroes_Step04": 0,
    "BalladOfHeroes_Step05": 0,
    "BalladOfHeroes_Step06": 0,
    "BalladOfHeroes_Step07": 0,
    "BalladOfHeroes_Step2_Dungeon4": 0,
    "BalladOfHeroes_DRStoneStand": 0,
    "BalladOfHeroes_DispPict_1stEvent": 0,
    "BalladOfHeroes_DisplayPicture": 0,
    "BalladOfHeroes_EventClearDungeon01": 0,
    "BalladOfHeroes_EventClearDungeon02": 0,
    "BalladOfHeroes_EventClearDungeon03": 0,
    "BalladOfHeroes_EventClearDungeon04": 0,
    "BalladOfHeroes_FourRemains_Clear": 0,
    "BalladOfHeroes_Kasshiwa_Appear1": 0,
    "BalladOfHeroes_Kasshiwa_Appear2": 0,
    "BalladOfHeroes_Kasshiwa_Appear3": 0,
    "BalladOfHeroes_Kasshiwa_Appear4": 0,
    "BalladOfHeroes_Kasshiwa_Delete2": 0,
    "BalladOfHeroes_Retire": 0,
    "BalladOfHeroes_Retire_Dungeon04": 0
   },
   "status_snapshot": "未开始",
   "title": "Ex 英杰们的诗篇",
   "title_source": "QL_BalladOfHeroes · text[0] · 标签:QL_BalladOfHeroes_Step2_Dungeon4"
  },
  {
   "id": "BarrelErrand",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "BarrelErrand_Ready",
    "activated": "BarrelErrand_Activated",
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "BarrelErrand_Ready": 1,
    "BarrelErrand_Activated": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "BarrelErrand_Finish",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "BarrelErrand_Finish_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "BarrelErrand_Finish_Finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "BarrelErrand_Intro",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "BarrelErrand_Intro_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "BarrelErrand_Intro_Finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "BloodyMoonRelief",
   "name": "物降生的红月之夜，\n　古代勇者亦以赤子之身\n　立于台座，试练将苏醒。”\n　\n卡西瓦告诉你的古诗，\n其谜底所指之处，\n等待着你的会是勇者的试练吗……",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_BloodyMoonRelief",
   "text": {
    "name": "“怪物降生的红月之夜，　古代勇者亦以赤子之身　立于台座，试练将苏醒。”　卡西瓦告诉你的古诗，其谜底所指之处，等待着你的会是勇者的试练吗……",
    "desc": "红月之夜",
    "finish": null,
    "steps": {},
    "name_label": "QL_BloodyMoonRelief_Name",
    "desc_label": "QL_BloodyMoonRelief_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_BloodyMoonRelief_Desc",
      "text": "红月之夜"
     },
     {
      "label": "QL_BloodyMoonRelief_Name",
      "text": "“怪物降生的红月之夜，　古代勇者亦以赤子之身　立于台座，试练将苏醒。”　卡西瓦告诉你的古诗，其谜底所指之处，等待着你的会是勇者的试练吗……"
     },
     {
      "label": "QL_BloodyMoonRelief_Desc",
      "text": "“怪物降生的红月之夜，　古代勇者亦以赤子之身　立于台座，试练将苏醒。”赤身站立于浮雕之上，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_BloodyMoonRelief"
   },
   "labels": [
    "QL_BloodyMoonRelief_Name",
    "QL_BloodyMoonRelief_Desc",
    "QL_BloodyMoonRelief_Desc"
   ],
   "flags": {
    "ready": "BloodyMoonRelief_Ready",
    "activated": "BloodyMoonRelief_Activated",
    "finish": "BloodyMoonRelief_Finish",
    "steps": [],
    "aux": [
     "BloodyMoonRelief_NPC_AfterTalk",
     "BloodyMoonRelief_NPC_Talk"
    ]
   },
   "source": [
    "QL_BloodyMoonRelief",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "BloodyMoonRelief_Ready": 1,
    "BloodyMoonRelief_Activated": 0,
    "BloodyMoonRelief_Finish": 0,
    "BloodyMoonRelief_NPC_AfterTalk": 0,
    "BloodyMoonRelief_NPC_Talk": 0
   },
   "status_snapshot": "未开始",
   "title": "红月之夜",
   "title_source": "QL_BloodyMoonRelief · text[0] · 标签:QL_BloodyMoonRelief_Desc"
  },
  {
   "id": "Bottle_Mes",
   "name": "追寻息瓶行踪，\n和拾到信息瓶的“他”见面吧。\n\n信息瓶易碎，\n追踪时要小心为好。\n\n如果跟丢了信息瓶，\n试着回到菲内那里吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_Bottle_Mes",
   "text": {
    "name": "一路追寻息瓶行踪，和拾到信息瓶的“他”见面吧。信息瓶易碎，追踪时要小心为好。如果跟丢了信息瓶，试着回到菲内那里吧。",
    "desc": "信息瓶的行踪",
    "finish": null,
    "steps": {},
    "name_label": "QL_Bottle_Mes_Name",
    "desc_label": "QL_Bottle_Mes_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Bottle_Mes_Desc",
      "text": "信息瓶的行踪"
     },
     {
      "label": "QL_Bottle_Mes_Name",
      "text": "一路追寻息瓶行踪，和拾到信息瓶的“他”见面吧。信息瓶易碎，追踪时要小心为好。如果跟丢了信息瓶，试着回到菲内那里吧。"
     },
     {
      "label": null,
      "text": "息瓶碎，追踪时要小心为好。如果跟丢了信息瓶，不妨回到菲内那里吧。"
     },
     {
      "label": null,
      "text": "拾到信息瓶的是萨撒诺。萨撒诺为了见菲内正在前往卓拉领地。菲内可能也回到领地了，想知道后续就前去拉领地。"
     },
     {
      "label": "QL_Bottle_Mes_Desc",
      "text": "萨撒诺顺利到达卓拉领地，已经和菲内见面了。菲内希望萨撒诺变得更坚强可靠，不知这一新的愿望能否实现呢？"
     }
    ],
    "source": "QL_Bottle_Mes"
   },
   "labels": [
    "QL_Bottle_Mes_Name",
    "QL_Bottle_Mes_Desc",
    "QL_Bottle_Mes_Desc",
    "�ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0002\"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u001c\u0000\u0000\u0000*\u0000\u0000\u0000�\u0000\u0000\u0001&\u0000\u0000\u0001(\u0000\u0000\u0001�O�`ot�v��L�*\u0000\u0000N\u0000���[�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000O�`ot�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002��v��L�*�\f\u0000\nT�b�R0O�`ot�v� \u001cN� \u001d���bT'0\u0002\u0000\n\u0000\nO�`o",
    "�ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0002\"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u001c\u0000\u0000\u0000*\u0000\u0000\u0000�\u0000\u0000\u0001&\u0000\u0000\u0001(\u0000\u0000\u0001�O�`ot�v��L�*\u0000\u0000N\u0000���[�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000O�`ot�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002��v��L�*�\f\u0000\nT�b�R0O�`ot�v� \u001cN� \u001d���bT'0\u0002\u0000\n\u0000\nO�`o"
   ],
   "flags": {
    "ready": "Bottle_Mes_Ready",
    "activated": "Bottle_Mes_Activated",
    "finish": "Bottle_Mes_Finish",
    "steps": [
     "Bottle_Mes_Step10",
     "Bottle_Mes_Step30",
     "Bottle_Mes_Step40"
    ],
    "aux": [
     "Bottle_Mes_Demo30",
     "Bottle_Mes_Go",
     "Bottle_Mes_Item",
     "Bottle_Mes_Start",
     "Bottle_Mes_Think"
    ]
   },
   "source": [
    "QL_Bottle_Mes",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Bottle_Mes_Ready": 0,
    "Bottle_Mes_Activated": 0,
    "Bottle_Mes_Finish": 0,
    "Bottle_Mes_Step10": 0,
    "Bottle_Mes_Step30": 0,
    "Bottle_Mes_Step40": 0,
    "Bottle_Mes_Demo30": 0,
    "Bottle_Mes_Go": 0,
    "Bottle_Mes_Item": 0,
    "Bottle_Mes_Start": 0,
    "Bottle_Mes_Think": 0
   },
   "status_snapshot": "未知",
   "title": "信息瓶的行踪",
   "title_source": "QL_Bottle_Mes · text[0] · 标签:QL_Bottle_Mes_Desc"
  },
  {
   "id": "Carnivorous_Boy",
   "name": "外围的驿站的图洛陀\n久违地吃到肉，变得生龙活虎。\n如果继续拿生的顶级兽肉给他，\n他好像会以00卢比下来。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_Carnivorous_Boy",
   "text": {
    "name": "平原外围的驿站的图洛陀久违地吃到肉，变得生龙活虎。如果继续拿生的顶级兽肉给他，他好像会以00卢比下来。",
    "desc": null,
    "finish": "平原外围的驿站的图洛陀看起来无精打采……他似乎是想吃生的顶级兽肉。",
    "steps": {},
    "name_label": "QL_Carnivorous_Boy_Name",
    "desc_label": null,
    "finish_label": "QL_Carnivorous_Boy_Finish",
    "items": [
     {
      "label": null,
      "text": "爱吃肉的男子？！"
     },
     {
      "label": "QL_Carnivorous_Boy_Finish",
      "text": "平原外围的驿站的图洛陀看起来无精打采……他似乎是想吃生的顶级兽肉。"
     },
     {
      "label": "QL_Carnivorous_Boy_Name",
      "text": "平原外围的驿站的图洛陀久违地吃到肉，变得生龙活虎。如果继续拿生的顶级兽肉给他，他好像会以00卢比下来。"
     }
    ],
    "source": "QL_Carnivorous_Boy"
   },
   "labels": [
    "QL_Carnivorous_Boy_Finish",
    "QL_Carnivorous_Boy_Name"
   ],
   "flags": {
    "ready": "Carnivorous_Boy_Ready",
    "activated": "Carnivorous_Boy_Activated",
    "finish": "Carnivorous_Boy_Finish",
    "steps": [],
    "aux": [
     "Carnivorous_Boy_Stuffed"
    ]
   },
   "source": [
    "QL_Carnivorous_Boy",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Carnivorous_Boy_Ready": 1,
    "Carnivorous_Boy_Activated": 0,
    "Carnivorous_Boy_Finish": 0,
    "Carnivorous_Boy_Stuffed": 0
   },
   "status_snapshot": "未开始",
   "title": "爱吃肉的男子？！",
   "title_source": "QL_Carnivorous_Boy · text[0] · 无标签"
  },
  {
   "id": "CarryingBlueFireEXMini",
   "name": "蓝色火焰点燃炉灶后，\n哈特诺古代研究所的勇导石好像启动了。\n\n将此事告所长\n请她修复希卡之石吧。",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 其他",
   "category_source": "analysis",
   "category_basis": "analysis: 词干含 EX 且文本对应 DLC 内容",
   "message_file": "QL_CarryingBlueFireEXMini",
   "text": {
    "name": "利用蓝色火焰点燃炉灶后，哈特诺古代研究所的勇导石好像启动了。将此事告所长请她修复希卡之石吧。",
    "desc": "从哈特诺古代研究所所长的话来看，由于现在勇导石并没有启动，所以无法修复希卡之石。但如果让研究所外壁的炉灶里燃起蓝色火焰，勇导石好像就会启动了。带着哈特诺村古代炉里的色火焰点燃灶。",
    "finish": null,
    "steps": {
     "QL_CarryingBlueFireEXMini_Fired": "塞尔达的路标",
     "QL_CarryingBlueFireEXMini_Camera": "按英帕的话来看，塞尔达留下来引导你的希卡之石并不完整……哈特诺村里的哈特诺古代研究所长好像对希卡之石比较熟悉。按照地图所示去拜访下长看吧。"
    },
    "name_label": "QL_CarryingBlueFireEXMini_Name",
    "desc_label": "QL_CarryingBlueFireEXMini_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_CarryingBlueFireEXMini_Fired",
      "text": "塞尔达的路标"
     },
     {
      "label": "QL_CarryingBlueFireEXMini_Camera",
      "text": "按英帕的话来看，塞尔达留下来引导你的希卡之石并不完整……哈特诺村里的哈特诺古代研究所长好像对希卡之石比较熟悉。按照地图所示去拜访下长看吧。"
     },
     {
      "label": "QL_CarryingBlueFireEXMini_Desc",
      "text": "从哈特诺古代研究所所长的话来看，由于现在勇导石并没有启动，所以无法修复希卡之石。但如果让研究所外壁的炉灶里燃起蓝色火焰，勇导石好像就会启动了。带着哈特诺村古代炉里的色火焰点燃灶。"
     },
     {
      "label": "QL_CarryingBlueFireEXMini_Name",
      "text": "利用蓝色火焰点燃炉灶后，哈特诺古代研究所的勇导石好像启动了。将此事告所长请她修复希卡之石吧。"
     },
     {
      "label": null,
      "text": "拜托普尔亚修复希卡之石后，100年前的础道具原了。使用基础道具之一的相机来拍摄普尔亚看看吧！"
     },
     {
      "label": null,
      "text": "成功使用照相机拍摄了普尔亚！从普尔亚说的话来看，已经有一些过去的照片在相册中了。这些照片有着什么含义呢？去问问卡卡利科村的帕。"
     },
     {
      "label": null,
      "text": "你向英帕报告了希卡之石的基础道具复原一事！据说相册里的照片是100年前塞尔达留下来的“回忆”。去塞尔达“回忆”里的地方看看，唤醒100年前的记忆吧！"
     }
    ],
    "source": "QL_CarryingBlueFireEXMini"
   },
   "labels": [
    "QL_CarryingBlueFireEXMini_Camera",
    "QL_CarryingBlueFireEXMini_Desc",
    "QL_CarryingBlueFireEXMini_Fired",
    "QL_CarryingBlueFireEXMini_Fired",
    "QL_CarryingBlueFireEXMini_Name"
   ],
   "flags": {
    "ready": "CarryingBlueFireEXMini_Ready",
    "activated": "CarryingBlueFireEXMini_Activated",
    "finish": "CarryingBlueFireEXMini_Finish",
    "steps": [],
    "aux": [
     "CarryingBlueFireEXMini_Camera",
     "CarryingBlueFireEXMini_Carry",
     "CarryingBlueFireEXMini_Fired",
     "CarryingBlueFireEXMini_Permit",
     "CarryingBlueFireEXMini_Repaired"
    ]
   },
   "source": [
    "QL_CarryingBlueFireEXMini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "CarryingBlueFireEXMini_Ready": 1,
    "CarryingBlueFireEXMini_Activated": 0,
    "CarryingBlueFireEXMini_Finish": 0,
    "CarryingBlueFireEXMini_Camera": 0,
    "CarryingBlueFireEXMini_Carry": 0,
    "CarryingBlueFireEXMini_Fired": 0,
    "CarryingBlueFireEXMini_Permit": 0,
    "CarryingBlueFireEXMini_Repaired": 0
   },
   "status_snapshot": "未开始",
   "title": "塞尔达的路标",
   "title_source": "QL_CarryingBlueFireEXMini · text[0] · 标签:QL_CarryingBlueFireEXMini_Fired"
  },
  {
   "id": "Challenge_Learning_Konishi",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Challenge_Learning_Konishi_Ready",
    "activated": "Challenge_Learning_Konishi_Activated",
    "finish": "Challenge_Learning_Konishi_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Challenge_Learning_Konishi_Ready": 1,
    "Challenge_Learning_Konishi_Activated": 0,
    "Challenge_Learning_Konishi_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Challenge_Learning_Konishi2",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Challenge_Learning_Konishi2_Ready",
    "activated": "Challenge_Learning_Konishi2_Activated",
    "finish": "Challenge_Learning_Konishi2_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Challenge_Learning_Konishi2_Ready": 1,
    "Challenge_Learning_Konishi2_Activated": 0,
    "Challenge_Learning_Konishi2_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Cliff_Maze",
   "name": "是何人所造的断崖迷宫。\n\n通过此迷宫后，\n前方等待你的是一座古代神庙。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Cliff_Maze",
   "text": {
    "name": "不知是何人所造的断崖迷宫。通过此迷宫后，前方等待你的是一座古代神庙。",
    "desc": null,
    "finish": "当你靠近位于塔邦挞大雪原东北部的诡异遗迹时，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。",
    "steps": {},
    "name_label": "QL_Cliff_Maze_Name",
    "desc_label": null,
    "finish_label": "QL_Cliff_Maze_Finish",
    "items": [
     {
      "label": null,
      "text": "断崖的试练"
     },
     {
      "label": "QL_Cliff_Maze_Finish",
      "text": "当你靠近位于塔邦挞大雪原东北部的诡异遗迹时，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。"
     },
     {
      "label": "QL_Cliff_Maze_Name",
      "text": "不知是何人所造的断崖迷宫。通过此迷宫后，前方等待你的是一座古代神庙。"
     }
    ],
    "source": "QL_Cliff_Maze"
   },
   "labels": [
    "QL_Cliff_Maze_Finish",
    "QL_Cliff_Maze_Name"
   ],
   "flags": {
    "ready": "Cliff_Maze_Ready",
    "activated": "Cliff_Maze_Activated",
    "finish": "Cliff_Maze_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Cliff_Maze",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Cliff_Maze_Ready": 1,
    "Cliff_Maze_Activated": 0,
    "Cliff_Maze_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "断崖的试练",
   "title_source": "QL_Cliff_Maze · text[0] · 无标签"
  },
  {
   "id": "CompleteDungeon",
   "name": "却神殿拿到了来自导师的褒奖。\n\n宝箱里装着绿色的特殊服装，\n应该是为旷野之旅的勇者而准备的礼物。\n\n穿上这身服装就能成为真正的勇者吗？",
   "category": "主线任务",
   "subcategory": "初始台地",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_CompleteDungeon",
   "text": {
    "name": "在忘却神殿拿到了来自导师的褒奖。宝箱里装着绿色的特殊服装，应该是为旷野之旅的勇者而准备的礼物。穿上这身服装就能成为真正的勇者吗？",
    "desc": null,
    "finish": "你通过了所有的试练。导师似乎为你准备了相应的奖励。奖励被放在忘却神殿中最古老的女神像那里。不知导师为你准备了什么呢？真是令人期待不已。",
    "steps": {},
    "name_label": "QL_CompleteDungeon_Name",
    "desc_label": null,
    "finish_label": "QL_CompleteDungeon_Finish",
    "items": [
     {
      "label": null,
      "text": "来自导师的褒奖"
     },
     {
      "label": "QL_CompleteDungeon_Finish",
      "text": "你通过了所有的试练。导师似乎为你准备了相应的奖励。奖励被放在忘却神殿中最古老的女神像那里。不知导师为你准备了什么呢？真是令人期待不已。"
     },
     {
      "label": "QL_CompleteDungeon_Name",
      "text": "在忘却神殿拿到了来自导师的褒奖。宝箱里装着绿色的特殊服装，应该是为旷野之旅的勇者而准备的礼物。穿上这身服装就能成为真正的勇者吗？"
     }
    ],
    "source": "QL_CompleteDungeon"
   },
   "labels": [
    "QL_CompleteDungeon_Finish",
    "QL_CompleteDungeon_Name"
   ],
   "flags": {
    "ready": "CompleteDungeon_Ready",
    "activated": "CompleteDungeon_Activated",
    "finish": "CompleteDungeon_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_CompleteDungeon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "CompleteDungeon_Ready": 1,
    "CompleteDungeon_Activated": 0,
    "CompleteDungeon_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "来自导师的褒奖",
   "title_source": "QL_CompleteDungeon · text[0] · 无标签"
  },
  {
   "id": "CursedStatue",
   "name": "黑暗之光宿居于被诅咒的石像之际，\n　贯穿其眼，即可释放被封印之试练。”\n\n去解开自称考古学家的卡里尤告诉你的\n古诗之谜，释放被封印之试练吧。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_CursedStatue",
   "text": {
    "name": "“当黑暗之光宿居于被诅咒的石像之际，　贯穿其眼，即可释放被封印之试练。”去解开自称考古学家的卡里尤告诉你的古诗之谜，释放被封印之试练吧。",
    "desc": "“当黑暗之光宿居于被诅咒的石像之际，　贯穿其眼，即可释放被封印之试练。”去解开自称考古学家的卡里尤告诉你的古诗之谜，释放被封印之试练吧。",
    "finish": null,
    "steps": {
     "QL_CursedStatue_Game": "“当黑暗之光宿居于被诅咒的石像之际，　贯穿其眼，即可释放被封印之试练。”去解开自称考古学家的卡里尤告诉你的古诗之谜，释放被封印之试练吧。"
    },
    "name_label": "QL_CursedStatue_Game",
    "desc_label": "QL_CursedStatue_Game",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "被诅咒的石像"
     },
     {
      "label": "QL_CursedStatue_Game",
      "text": "“当黑暗之光宿居于被诅咒的石像之际，　贯穿其眼，即可释放被封印之试练。”去解开自称考古学家的卡里尤告诉你的古诗之谜，释放被封印之试练吧。"
     },
     {
      "label": null,
      "text": "“当黑暗之光宿居于被诅咒的石像之际，　贯穿其眼，即可释放被封印之试练。”用箭射穿夜里发光的石像之眼，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_CursedStatue"
   },
   "labels": [
    "QL_CursedStatue_Game",
    "QL_CursedStatue_Name",
    "QL_CursedStatue_Desc"
   ],
   "flags": {
    "ready": "CursedStatue_Ready",
    "activated": "CursedStatue_Activated",
    "finish": "CursedStatue_Finish",
    "steps": [],
    "aux": [
     "CursedStatue_Game",
     "CursedStatue_StatueBroken"
    ]
   },
   "source": [
    "QL_CursedStatue",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "CursedStatue_Ready": 1,
    "CursedStatue_Activated": 0,
    "CursedStatue_Finish": 0,
    "CursedStatue_Game": 0,
    "CursedStatue_StatueBroken": 0
   },
   "status_snapshot": "未开始",
   "title": "被诅咒的石像",
   "title_source": "QL_CursedStatue · text[0] · 无标签"
  },
  {
   "id": "DarkTable-Land",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "DarkTable-Land_Ready",
    "activated": "DarkTable-Land_Activated",
    "finish": "DarkTable-Land_Finish",
    "steps": [
     "DarkTable-Land_Step01",
     "DarkTable-Land_Step02",
     "DarkTable-Land_Step03"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "DarkTable-Land_Ready": 0,
    "DarkTable-Land_Activated": 0,
    "DarkTable-Land_Finish": 0,
    "DarkTable-Land_Step01": 0,
    "DarkTable-Land_Step02": 0,
    "DarkTable-Land_Step03": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "DarkWoods",
   "name": "何人在德依布朗遗迹里造出的\n暗黑的试练。\n\n从隐藏在最深处的西诺克斯那里\n夺回了宝珠并将之嵌入台座，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_DarkWoods",
   "text": {
    "name": "不知何人在德依布朗遗迹里造出的暗黑的试练。从隐藏在最深处的西诺克斯那里夺回了宝珠并将之嵌入台座，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "当你来到伸手不见五指的宽阔遗迹，耳畔忽闻人语声。白天也依然漆黑一片的遗迹里，好像隐藏着勇者的试练。",
    "steps": {},
    "name_label": "QL_DarkWoods_Name",
    "desc_label": null,
    "finish_label": "QL_DarkWoods_Finish",
    "items": [
     {
      "label": null,
      "text": "暗黑的试练"
     },
     {
      "label": "QL_DarkWoods_Finish",
      "text": "当你来到伸手不见五指的宽阔遗迹，耳畔忽闻人语声。白天也依然漆黑一片的遗迹里，好像隐藏着勇者的试练。"
     },
     {
      "label": "QL_DarkWoods_Name",
      "text": "不知何人在德依布朗遗迹里造出的暗黑的试练。从隐藏在最深处的西诺克斯那里夺回了宝珠并将之嵌入台座，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_DarkWoods"
   },
   "labels": [
    "QL_DarkWoods_Finish",
    "QL_DarkWoods_Name"
   ],
   "flags": {
    "ready": "DarkWoods_Ready",
    "activated": "DarkWoods_Activated",
    "finish": "DarkWoods_Finish",
    "steps": [],
    "aux": [
     "DarkWoods_Dungeon",
     "DarkWoods_Giant_Clear",
     "DarkWoods_Giant_Dead",
     "DarkWoods_SetBall"
    ]
   },
   "source": [
    "QL_DarkWoods",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "DarkWoods_Ready": 1,
    "DarkWoods_Activated": 0,
    "DarkWoods_Finish": 0,
    "DarkWoods_Dungeon": 0,
    "DarkWoods_Giant_Clear": 0,
    "DarkWoods_Giant_Dead": 0,
    "DarkWoods_SetBall": 0
   },
   "status_snapshot": "未开始",
   "title": "暗黑的试练",
   "title_source": "QL_DarkWoods · text[0] · 无标签"
  },
  {
   "id": "Desert_Maze",
   "name": "迷宫建于摩尔达巴山的山麓。\n\n通过此迷宫后，\n前方等待你的是一座古代神庙。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Desert_Maze",
   "text": {
    "name": "沙漠迷宫建于摩尔达巴山的山麓。通过此迷宫后，前方等待你的是一座古代神庙。",
    "desc": null,
    "finish": "在格鲁德沙漠中前行，当你靠近位于摩尔达巴山麓的诡异遗迹时，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。",
    "steps": {},
    "name_label": "QL_Desert_Maze_Name",
    "desc_label": null,
    "finish_label": "QL_Desert_Maze_Finish",
    "items": [
     {
      "label": null,
      "text": "沙漠的试练"
     },
     {
      "label": "QL_Desert_Maze_Finish",
      "text": "在格鲁德沙漠中前行，当你靠近位于摩尔达巴山麓的诡异遗迹时，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。"
     },
     {
      "label": "QL_Desert_Maze_Name",
      "text": "沙漠迷宫建于摩尔达巴山的山麓。通过此迷宫后，前方等待你的是一座古代神庙。"
     }
    ],
    "source": "QL_Desert_Maze"
   },
   "labels": [
    "QL_Desert_Maze_Finish",
    "QL_Desert_Maze_Name"
   ],
   "flags": {
    "ready": "Desert_Maze_Ready",
    "activated": "Desert_Maze_Activated",
    "finish": "Desert_Maze_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Desert_Maze",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Desert_Maze_Ready": 1,
    "Desert_Maze_Activated": 0,
    "Desert_Maze_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "沙漠的试练",
   "title_source": "QL_Desert_Maze · text[0] · 无标签"
  },
  {
   "id": "DokuroEye",
   "name": "髅池塘左眼的顶峰上\n发现了古代神庙。\n\n你好像明白了洁琳所说的\n到达那里难于登天的意思。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_DokuroEye",
   "text": {
    "name": "在骷髅池塘左眼的顶峰上发现了古代神庙。你好像明白了洁琳所说的到达那里难于登天的意思。",
    "desc": null,
    "finish": "据洁琳所说，髅池塘的左眼有座古代神庙。因为地处断崖绝壁，要到达那里无疑是难于登天……",
    "steps": {},
    "name_label": "QL_DokuroEye_Name",
    "desc_label": null,
    "finish_label": "QL_DokuroEye_Finish",
    "items": [
     {
      "label": null,
      "text": "骷髅的左眼"
     },
     {
      "label": "QL_DokuroEye_Finish",
      "text": "据洁琳所说，髅池塘的左眼有座古代神庙。因为地处断崖绝壁，要到达那里无疑是难于登天……"
     },
     {
      "label": "QL_DokuroEye_Name",
      "text": "在骷髅池塘左眼的顶峰上发现了古代神庙。你好像明白了洁琳所说的到达那里难于登天的意思。"
     }
    ],
    "source": "QL_DokuroEye"
   },
   "labels": [
    "QL_DokuroEye_Finish",
    "QL_DokuroEye_Name"
   ],
   "flags": {
    "ready": "DokuroEye_Ready",
    "activated": "DokuroEye_Activated",
    "finish": "DokuroEye_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_DokuroEye",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "DokuroEye_Ready": 1,
    "DokuroEye_Activated": 0,
    "DokuroEye_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "骷髅的左眼",
   "title_source": "QL_DokuroEye · text[0] · 无标签"
  },
  {
   "id": "DontDamageFlower",
   "name": "芭在古代神庙\n周围种了许多花儿。\n\n注意要踩踏花朵\n小心地前进吧。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_DontDamageFlower",
   "text": {
    "name": "奥可芭在古代神庙周围种了许多花儿。注意要踩踏花朵小心地前进吧。",
    "desc": "奥可芭在古代神庙周围种了许多花儿。注意要踩踏花朵小心地前进吧。",
    "finish": "奥可芭在古代神庙周围种了许多花儿。注意要踩踏花朵小心地前进吧。",
    "steps": {},
    "name_label": "QL_DontDamageFlower_Finish",
    "desc_label": "QL_DontDamageFlower_Finish",
    "finish_label": "QL_DontDamageFlower_Finish",
    "items": [
     {
      "label": "QL_DontDamageFlower_Desc",
      "text": "不要践踏花儿"
     },
     {
      "label": "QL_DontDamageFlower_Finish",
      "text": "奥可芭在古代神庙周围种了许多花儿。注意要踩踏花朵小心地前进吧。"
     },
     {
      "label": null,
      "text": "没有踩到花朵成功抵达了古代神庙。幸好没有触碰到奥可芭的逆鳞。"
     }
    ],
    "source": "QL_DontDamageFlower"
   },
   "labels": [
    "QL_DontDamageFlower_Finish",
    "QL_DontDamageFlower_Name",
    "QL_DontDamageFlower_Desc",
    "QL_DontDamageFlower_Desc",
    "����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u001e\u0000\u0000\u0000~N\r�����\u000f��Q?\u0000\u0000YeSW(S�N�y^^�\u0000\nThV�y�N���Y\u001a��Q?0\u0002\u0000\n\u0000\nl�a\u000f\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000N\r���)�\u000f��g5\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002���\f\u0000\n\\\u000f_"
   ],
   "flags": {
    "ready": "DontDamageFlower_Ready",
    "activated": "DontDamageFlower_Activated",
    "finish": "DontDamageFlower_Finish",
    "steps": [],
    "aux": [
     "DontDamageFlower_Fail",
     "DontDamageFlower_Game",
     "DontDamageFlower_OneMiss",
     "DontDamageFlower_ReadyFail"
    ]
   },
   "source": [
    "QL_DontDamageFlower",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "DontDamageFlower_Ready": 1,
    "DontDamageFlower_Activated": 0,
    "DontDamageFlower_Finish": 0,
    "DontDamageFlower_Fail": 0,
    "DontDamageFlower_Game": 0,
    "DontDamageFlower_OneMiss": 0,
    "DontDamageFlower_ReadyFail": 0
   },
   "status_snapshot": "未开始",
   "title": "不要践踏花儿",
   "title_source": "QL_DontDamageFlower · text[0] · 标签:QL_DontDamageFlower_Desc"
  },
  {
   "id": "Drag_Hero",
   "name": "名男子潜入了禁止男性入内的格鲁德小镇，\n他好像就在卡拉卡拉集市的什么地方。\n\n收集目击信息，\n把那个男人找出来吧。",
   "category": "主线任务",
   "subcategory": "四神兽·格鲁德",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本指向主线相关剧情（待动态验证）",
   "message_file": "QL_Drag_Hero",
   "text": {
    "name": "有一名男子潜入了禁止男性入内的格鲁德小镇，他好像就在卡拉卡拉集市的什么地方。收集目击信息，把那个男人找出来吧。",
    "desc": "找到了潜入格鲁德小镇的男人，并获得了淑女服。如果穿上这套服装，好像就能变成一位窈窕淑女……",
    "finish": "有一名男子潜入了禁止男性入内的格鲁德小镇，他好像就在卡拉卡拉集市的什么地方。收集目击信息，把那个男人找出来吧。",
    "steps": {},
    "name_label": "QL_Drag_Hero_Name",
    "desc_label": "QL_Drag_Hero_Desc",
    "finish_label": "QL_Drag_Hero_Name",
    "items": [
     {
      "label": null,
      "text": "潜入！男子禁入的小镇"
     },
     {
      "label": "QL_Drag_Hero_Name",
      "text": "有一名男子潜入了禁止男性入内的格鲁德小镇，他好像就在卡拉卡拉集市的什么地方。收集目击信息，把那个男人找出来吧。"
     },
     {
      "label": "QL_Drag_Hero_Desc",
      "text": "找到了潜入格鲁德小镇的男人，并获得了淑女服。如果穿上这套服装，好像就能变成一位窈窕淑女……"
     },
     {
      "label": null,
      "text": "成功潜入格鲁德小镇！换上淑女服后，好像成功瞒过了门卫们的眼睛。"
     }
    ],
    "source": "QL_Drag_Hero"
   },
   "labels": [
    "QL_Drag_Hero_Name",
    "QL_Drag_Hero_Finish",
    "QL_Drag_Hero_Desc"
   ],
   "flags": {
    "ready": "Drag_Hero_Ready",
    "activated": "Drag_Hero_Activated",
    "finish": "Drag_Hero_Finish",
    "steps": [
     "Drag_Hero_Step1"
    ],
    "aux": [
     "Drag_Hero_Debug01",
     "Drag_Hero_Demo378_1_ElectlicRelic",
     "Drag_Hero_DragMerchant",
     "Drag_Hero_Dressing",
     "Drag_Hero_Finish_first",
     "Drag_Hero_FirstTime",
     "Drag_Hero_GerdoKeepOut",
     "Drag_Hero_Rob",
     "Drag_Hero_rob_first",
     "Drag_Hero_warning01",
     "Drag_Hero_warning02"
    ]
   },
   "source": [
    "QL_Drag_Hero",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Drag_Hero_Ready": 1,
    "Drag_Hero_Activated": 1,
    "Drag_Hero_Finish": 1,
    "Drag_Hero_Step1": 0,
    "Drag_Hero_Debug01": 0,
    "Drag_Hero_Demo378_1_ElectlicRelic": 0,
    "Drag_Hero_DragMerchant": 0,
    "Drag_Hero_Dressing": 0,
    "Drag_Hero_Finish_first": 0,
    "Drag_Hero_FirstTime": 1,
    "Drag_Hero_GerdoKeepOut": 1,
    "Drag_Hero_Rob": 0,
    "Drag_Hero_rob_first": 0,
    "Drag_Hero_warning01": 0,
    "Drag_Hero_warning02": 0
   },
   "status_snapshot": "已完成",
   "title": "潜入！男子禁入的小镇",
   "title_source": "QL_Drag_Hero · text[0] · 无标签"
  },
  {
   "id": "Electric_Relic",
   "name": "到了盗贼的基地！\n但基地里面却人头攒动。\n如果就这样战斗的话，好像形势会很不利。\n\n偷偷潜入进去，\n取回格鲁德族的神器吧。",
   "category": "主线任务",
   "subcategory": "四神兽·格鲁德",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Electric_Relic",
   "text": {
    "name": "你来到了盗贼的基地！但基地里面却人头攒动。如果就这样战斗的话，好像形势会很不利。偷偷潜入进去，取回格鲁德族的神器吧。",
    "desc": null,
    "finish": null,
    "steps": {
     "QL_Electric_Relic_GetBack": "雷之神兽瓦·娜波力斯",
     "QL_Electric_Relic_Strategy": "格鲁德族族长璐菊希望你能帮助她们镇压神兽瓦·娜波力斯。看起来你得先去把被盗贼夺走的格鲁德族神器抢回来才行。兵营里的队长珂好像知道那些盗贼的消息。",
     "QL_Electric_Relic_Search": "从队长琪珂那里打听到了盗贼的消息。虽然查明了盗贼的基地在尔萨谷但好像还没有人去过那里。在兵营里收集更为详细的信息，然后前往盗贼的基地吧。"
    },
    "name_label": "QL_Electric_Relic_Name",
    "desc_label": null,
    "finish_label": null,
    "items": [
     {
      "label": "QL_Electric_Relic_GetBack",
      "text": "雷之神兽瓦·娜波力斯"
     },
     {
      "label": "QL_Electric_Relic_Strategy",
      "text": "格鲁德族族长璐菊希望你能帮助她们镇压神兽瓦·娜波力斯。看起来你得先去把被盗贼夺走的格鲁德族神器抢回来才行。兵营里的队长珂好像知道那些盗贼的消息。"
     },
     {
      "label": "QL_Electric_Relic_Search",
      "text": "从队长琪珂那里打听到了盗贼的消息。虽然查明了盗贼的基地在尔萨谷但好像还没有人去过那里。在兵营里收集更为详细的信息，然后前往盗贼的基地吧。"
     },
     {
      "label": "QL_Electric_Relic_Name",
      "text": "你来到了盗贼的基地！但基地里面却人头攒动。如果就这样战斗的话，好像形势会很不利。偷偷潜入进去，取回格鲁德族的神器吧。"
     },
     {
      "label": null,
      "text": "你从盗贼头头那里夺回了格鲁德族的神器！赶快回到格鲁德小镇，把它还给璐菊吧。"
     },
     {
      "label": null,
      "text": "马上就要和神兽瓦·娜波力斯战斗了。前往璐菊所在的哨所吧。按璐菊的话来看，事先熟悉一下沙海象的操纵，好像会有利于战斗。"
     },
     {
      "label": null,
      "text": "和神兽瓦·娜波力斯的战斗开始了。你必须用炸弹箭击穿它的4只脚，让它彻底停止行动。好像待在璐菊的身边就能让强烈的落雷失去威力。"
     },
     {
      "label": null,
      "text": "你成功击毁了神兽瓦·娜波力斯的4只脚，让它彻底停止了行动！接下来进入娜波力斯的体内，完全镇压它吧。"
     },
     {
      "label": null,
      "text": "你在神兽瓦·娜波力斯体内的深处打倒了雷咒盖侬！现在，乌尔波扎的神兽瓦·娜波力斯就坐镇在格鲁德沙漠的东边。返回格鲁德小镇，向族长璐菊报告吧！"
     },
     {
      "label": null,
      "text": "你向璐菊报告了镇压神兽瓦·娜波力斯一事！你已经能够使用英杰加护之力中的“乌尔波扎的愤怒”了。"
     }
    ],
    "source": "QL_Electric_Relic"
   },
   "labels": [
    "QL_Electric_Relic_Strategy",
    "QL_Electric_Relic_Search",
    "QL_Electric_Relic_GetBack",
    "QL_Electric_Relic_GetBack",
    "QL_Electric_Relic_Arrival",
    "QL_Electric_Relic_Name",
    "QL_Electric_Relic_Defeat"
   ],
   "flags": {
    "ready": "Electric_Relic_Ready",
    "activated": "Electric_Relic_Activated",
    "finish": "Electric_Relic_Finished",
    "steps": [],
    "aux": [
     "Electric_Relic_Arrival",
     "Electric_Relic_AssassinBoss",
     "Electric_Relic_AssassinFirst",
     "Electric_Relic_AssassunBossEnd",
     "Electric_Relic_BomArrowGet",
     "Electric_Relic_BomArrowGet2",
     "Electric_Relic_BomArrowGet3",
     "Electric_Relic_Defeat",
     "Electric_Relic_Deliver",
     "Electric_Relic_FirstTalk",
     "Electric_Relic_GetBack",
     "Electric_Relic_Invasion",
     "Electric_Relic_RunningStop",
     "Electric_Relic_Search",
     "Electric_Relic_Strategy",
     "Electric_Relic_SunazarashiRouge",
     "Electric_Relic_Varetta_first",
     "Electric_Relic_Varetta_first_lady"
    ]
   },
   "source": [
    "QL_Electric_Relic",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Electric_Relic_Ready": 1,
    "Electric_Relic_Activated": 1,
    "Electric_Relic_Finished": 0,
    "Electric_Relic_Arrival": 0,
    "Electric_Relic_AssassinBoss": 0,
    "Electric_Relic_AssassinFirst": 0,
    "Electric_Relic_AssassunBossEnd": 0,
    "Electric_Relic_BomArrowGet": 0,
    "Electric_Relic_BomArrowGet2": 0,
    "Electric_Relic_BomArrowGet3": 0,
    "Electric_Relic_Defeat": 0,
    "Electric_Relic_Deliver": 0,
    "Electric_Relic_FirstTalk": 0,
    "Electric_Relic_GetBack": 0,
    "Electric_Relic_Invasion": 0,
    "Electric_Relic_RunningStop": 0,
    "Electric_Relic_Search": 1,
    "Electric_Relic_Strategy": 0,
    "Electric_Relic_SunazarashiRouge": 0,
    "Electric_Relic_Varetta_first": 0,
    "Electric_Relic_Varetta_first_lady": 0
   },
   "status_snapshot": "进行中",
   "title": "雷之神兽瓦·娜波力斯",
   "title_source": "QL_Electric_Relic · text[0] · 标签:QL_Electric_Relic_GetBack"
  },
  {
   "id": "FairyFountain",
   "name": "康吉思要找的大精灵之泉拍了照，\n并把拍好的片康吉思看了看。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_FairyFountain",
   "text": {
    "name": "你给康吉思要找的大精灵之泉拍了照，并把拍好的片康吉思看了看。",
    "desc": null,
    "finish": "康吉思希望你能帮他寻找世上美丽的精灵之泉首先，让知道泉水大概位置的康吉思为你带路吧。当你找到精灵之泉，就把它拍下来给康吉思看看吧。",
    "steps": {},
    "name_label": "QL_FairyFountain_Name",
    "desc_label": null,
    "finish_label": "QL_FairyFountain_Finish",
    "items": [
     {
      "label": null,
      "text": "寻找精灵之泉"
     },
     {
      "label": "QL_FairyFountain_Finish",
      "text": "康吉思希望你能帮他寻找世上美丽的精灵之泉首先，让知道泉水大概位置的康吉思为你带路吧。当你找到精灵之泉，就把它拍下来给康吉思看看吧。"
     },
     {
      "label": "QL_FairyFountain_Name",
      "text": "你给康吉思要找的大精灵之泉拍了照，并把拍好的片康吉思看了看。"
     }
    ],
    "source": "QL_FairyFountain"
   },
   "labels": [
    "QL_FairyFountain_Finish",
    "QL_FairyFountain_Name"
   ],
   "flags": {
    "ready": "FairyFountain_Ready",
    "activated": "FairyFountain_Activated",
    "finish": "FairyFountain_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_FairyFountain",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "FairyFountain_Ready": 0,
    "FairyFountain_Activated": 0,
    "FairyFountain_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "寻找精灵之泉",
   "title_source": "QL_FairyFountain · text[0] · 无标签"
  },
  {
   "id": "FindDungeon",
   "name": "从神庙里出来后，老人再次出现在了你的面前。\n他告诉你，这片台地上一共有4座神庙，\n当你在所有神庙里都获得了试练通过证后，\n他就会用滑翔帆来和你交换。\n\n他再次催促你爬上塔顶，并告诉你如果\n要寻找神庙，可以去高处环视四周。\n不过，你好像也可以用希卡之石把自己传送上去……",
   "category": "主线任务",
   "subcategory": "初始台地",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_FindDungeon",
   "text": {
    "name": "当你从神庙里出来后，老人再次出现在了你的面前。他告诉你，这片台地上一共有4座神庙，当你在所有神庙里都获得了试练通过证后，他就会用滑翔帆来和你交换。他再次催促你爬上塔顶，并告诉你如果要寻找神庙，可以去高处环视四周。不过，你好像也可以用希卡之石把自己传送上去……",
    "desc": "当你从神庙里出来后，老人再次出现在了你的面前。他告诉你，这片台地上一共有4座神庙，当你在所有神庙里都获得了试练通过证后，他就会用滑翔帆来和你交换。他再次催促你爬上塔顶，并告诉你如果要寻找神庙，可以去高处环视四周。不过，你好像也可以用希卡之石把自己传送上去……",
    "finish": "当你从塔上下来的时候，老人再次出现在你的面前。他告诉你过去统治这片大地的海拉鲁王国已经在100年前被厄盖侬毁了。如果要从这个台地上下去，并前往有声音传来的海拉鲁城堡，就需要用到老人手上的滑翔帆。他好像会用它来交换埋藏在某处的宝物。",
    "steps": {},
    "name_label": "QL_FindDungeon_Desc",
    "desc_label": "QL_FindDungeon_Desc",
    "finish_label": "QL_FindDungeon_Finish",
    "items": [
     {
      "label": null,
      "text": "封锁的台地"
     },
     {
      "label": "QL_FindDungeon_Finish",
      "text": "当你从塔上下来的时候，老人再次出现在你的面前。他告诉你过去统治这片大地的海拉鲁王国已经在100年前被厄盖侬毁了。如果要从这个台地上下去，并前往有声音传来的海拉鲁城堡，就需要用到老人手上的滑翔帆。他好像会用它来交换埋藏在某处的宝物。"
     },
     {
      "label": "QL_FindDungeon_Desc",
      "text": "当你从神庙里出来后，老人再次出现在了你的面前。他告诉你，这片台地上一共有4座神庙，当你在所有神庙里都获得了试练通过证后，他就会用滑翔帆来和你交换。他再次催促你爬上塔顶，并告诉你如果要寻找神庙，可以去高处环视四周。不过，你好像也可以用希卡之石把自己传送上去……"
     },
     {
      "label": null,
      "text": "当你在台地上的所有神庙里都获得了试练通过证后，老人再次出现在了你的面前。“在4座神庙的交汇处等你，说完这句话后，老人就消失了……"
     },
     {
      "label": null,
      "text": "那名老人竟然是海拉鲁国王的幽灵，而那动听女声的主人就是塞尔达公主。据说她至今仍在那个被怨念包围的海拉鲁城堡的某处压制着盖侬……“打倒盖侬，救出塞尔达公主”，说完这句话后，老人把滑翔帆交给了你，然后像是完成了自己的使命一般消失了……"
     }
    ],
    "source": "QL_FindDungeon"
   },
   "labels": [
    "QL_FindDungeon_Desc",
    "QL_FindDungeon_Finish",
    "QL_FindDungeon_Name"
   ],
   "flags": {
    "ready": "FindDungeon_Ready",
    "activated": "FindDungeon_Activated",
    "finish": "FindDungeon_Finish",
    "steps": [],
    "aux": [
     "FindDungeon_1stClear",
     "FindDungeon_AllClear"
    ]
   },
   "source": [
    "QL_FindDungeon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "FindDungeon_Ready": 1,
    "FindDungeon_Activated": 1,
    "FindDungeon_Finish": 1,
    "FindDungeon_1stClear": 1,
    "FindDungeon_AllClear": 1
   },
   "status_snapshot": "已完成",
   "title": "封锁的台地",
   "title_source": "QL_FindDungeon · text[0] · 无标签"
  },
  {
   "id": "Find_4Relic",
   "name": "四头神兽吧",
   "category": "主线任务",
   "subcategory": "解放四神兽",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Find_4Relic",
   "text": {
    "name": "解放四头神兽吧",
    "desc": "解放四头神兽吧",
    "finish": null,
    "steps": {
     "QL_Find_4Relic_3rdClear": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯接下来你要去寻找神兽关于各个神兽，好像各族的族长知道得比较清楚一些。"
    },
    "name_label": "QL_Find_4Relic_Name",
    "desc_label": "QL_Find_4Relic_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Find_4Relic_Name",
      "text": "解放四头神兽吧"
     },
     {
      "label": "QL_Find_4Relic_3rdClear",
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯接下来你要去寻找神兽关于各个神兽，好像各族的族长知道得比较清楚一些。"
     },
     {
      "label": "QL_Find_4Relic_Name",
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯关于神兽好像各部族的族长知道的比较多。你打倒了附身在神兽上的厄咒盖侬，还剩下个咒盖侬。"
     },
     {
      "label": null,
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯关于神兽好像各部族的族长知道的比较多。你打倒了附身在神兽上的厄咒盖侬，还剩下个咒盖侬。"
     },
     {
      "label": "QL_Find_4Relic_Desc",
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯关于神兽好像各部族的族长知道的比较多。你打倒了附身在神兽上的厄咒盖侬，还剩下个咒盖侬。"
     },
     {
      "label": null,
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯你打倒了附身在神兽上的厄咒盖侬，并夺回了全部的神兽去向英帕汇报一下吧。"
     },
     {
      "label": null,
      "text": "鼓隆族的达尔克尔操纵的是兽瓦·鲁达尼亚利特族的力巴尔操纵的是兽瓦·梅德卓拉族的米法操纵的是兽瓦·露塔格鲁德族的乌尔波扎操纵的是兽瓦·娜波力斯你打倒了附身在神兽上的厄咒盖侬，并夺回了全部的神兽这样一来，打倒侬准备就完成了。"
     }
    ],
    "source": "QL_Find_4Relic"
   },
   "labels": [
    "QL_Find_4Relic_3rdClear",
    "QL_Find_4Relic_Name",
    "QL_Find_4Relic_Name",
    "QL_Find_4Relic_Desc",
    "QL_Find_4Relic_Desc"
   ],
   "flags": {
    "ready": "Find_4Relic_Ready",
    "activated": "Find_4Relic_Activated",
    "finish": "Find_4Relic_Finish",
    "steps": [],
    "aux": [
     "Find_4Relic_1stClear",
     "Find_4Relic_2ndClear",
     "Find_4Relic_3rdClear",
     "Find_4Relic_4thClear"
    ]
   },
   "source": [
    "QL_Find_4Relic",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Find_4Relic_Ready": 1,
    "Find_4Relic_Activated": 0,
    "Find_4Relic_Finish": 0,
    "Find_4Relic_1stClear": 0,
    "Find_4Relic_2ndClear": 0,
    "Find_4Relic_3rdClear": 0,
    "Find_4Relic_4thClear": 0
   },
   "status_snapshot": "未开始",
   "title": "解放四头神兽吧",
   "title_source": "QL_Find_4Relic · text[0] · 标签:QL_Find_4Relic_Name"
  },
  {
   "id": "Find_Impa",
   "name": "利科村的村长英帕把100年前发生的事情\n以及塞尔达公主的留言“解放神兽\n告诉了失去记忆的你……\n\n不过，希卡之石好像并不完整。\n如果把它拿到特诺村古代研究所去修复，\n或许它就能成为你接下来前进的路标……",
   "category": "主线任务",
   "subcategory": "寻找英帕",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Find_Impa",
   "text": {
    "name": "卡卡利科村的村长英帕把100年前发生的事情以及塞尔达公主的留言“解放神兽告诉了失去记忆的你……不过，希卡之石好像并不完整。如果把它拿到特诺村古代研究所去修复，或许它就能成为你接下来前进的路标……",
    "desc": null,
    "finish": "据说住在卡卡利科村里的帕会为你前行的道路指明方向……从初始台地上下来后，先往东走，然后翻越双子山，再沿路向北走的话，好像就能到达那个村子了。希卡之石中地图上的光点会引导你前进。",
    "steps": {},
    "name_label": "QL_Find_Impa_Name",
    "desc_label": null,
    "finish_label": "QL_Find_Impa_Finish",
    "items": [
     {
      "label": null,
      "text": "访问英帕"
     },
     {
      "label": "QL_Find_Impa_Finish",
      "text": "据说住在卡卡利科村里的帕会为你前行的道路指明方向……从初始台地上下来后，先往东走，然后翻越双子山，再沿路向北走的话，好像就能到达那个村子了。希卡之石中地图上的光点会引导你前进。"
     },
     {
      "label": "QL_Find_Impa_Name",
      "text": "卡卡利科村的村长英帕把100年前发生的事情以及塞尔达公主的留言“解放神兽告诉了失去记忆的你……不过，希卡之石好像并不完整。如果把它拿到特诺村古代研究所去修复，或许它就能成为你接下来前进的路标……"
     }
    ],
    "source": "QL_Find_Impa"
   },
   "labels": [
    "QL_Find_Impa_Finish",
    "QL_Find_Impa_Name"
   ],
   "flags": {
    "ready": "Find_Impa_Ready",
    "activated": "Find_Impa_Activated",
    "finish": "Find_Impa_Finish",
    "steps": [],
    "aux": [
     "Find_Impa_Sayonara00"
    ]
   },
   "source": [
    "QL_Find_Impa",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Find_Impa_Ready": 1,
    "Find_Impa_Activated": 1,
    "Find_Impa_Finish": 0,
    "Find_Impa_Sayonara00": 0
   },
   "status_snapshot": "进行中",
   "title": "访问英帕",
   "title_source": "QL_Find_Impa · text[0] · 无标签"
  },
  {
   "id": "Fire_Relic",
   "name": "废弃的北部矿坑和多立疆的谈话来看，\n阿陨好像去了废弃的北部矿坑深处的保管库。\n\n阿陨他没事吧……\n\n把前往管库阿陨找出来吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_Fire_Relic",
   "text": {
    "name": "从在废弃的北部矿坑和多立疆的谈话来看，阿陨好像去了废弃的北部矿坑深处的保管库。阿陨他没事吧……把前往管库阿陨找出来吧。",
    "desc": "鼓隆城的老大布尔多想去打倒那个麻烦的神兽瓦·鲁达尼亚，但由于腰痛发作，他好像去不了了。而且，前往弃的北部矿坑止痛药的阿陨也一去不返，布尔多正在为此发愁。",
    "finish": null,
    "steps": {
     "QL_Fire_Relic_GoDeathMt": "火之神兽瓦·鲁达尼亚",
     "QL_Fire_Relic_Battle": "鼓隆城的老大布尔多想去打倒那个麻烦的神兽瓦·鲁达尼亚，但由于腰痛发作，他好像去不了了。而且，前往弃的北部矿坑止痛药的阿陨也一去不返，布尔多正在为此发愁。",
     "QL_Fire_Relic_NorthMine": "从在废弃的北部矿坑和多立疆的谈话来看，阿陨好像去了废弃的北部矿坑深处的保管库。阿陨他没事吧……把前往管库阿陨找出来吧。"
    },
    "name_label": "QL_Fire_Relic_NorthMine",
    "desc_label": "QL_Fire_Relic_Battle",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Fire_Relic_GoDeathMt",
      "text": "火之神兽瓦·鲁达尼亚"
     },
     {
      "label": "QL_Fire_Relic_Battle",
      "text": "鼓隆城的老大布尔多想去打倒那个麻烦的神兽瓦·鲁达尼亚，但由于腰痛发作，他好像去不了了。而且，前往弃的北部矿坑止痛药的阿陨也一去不返，布尔多正在为此发愁。"
     },
     {
      "label": "QL_Fire_Relic_NorthMine",
      "text": "从在废弃的北部矿坑和多立疆的谈话来看，阿陨好像去了废弃的北部矿坑深处的保管库。阿陨他没事吧……把前往管库阿陨找出来吧。"
     },
     {
      "label": null,
      "text": "在废弃的北部矿坑遇到了阿陨。阿陨为了把缓解腰部疼痛的止痛药交给布尔多，便急匆匆地回去了。你好像可以得到谢礼，去尔多里看看吧。"
     },
     {
      "label": null,
      "text": "布尔多非常感谢你救了阿陨。虽然吃下止痛药的布尔多打算前去讨伐神兽瓦·鲁达尼亚，但想不到腰痛再次发作，今日讨伐神兽瓦·鲁达尼亚一事也只好就此作罢。去把此事告诉先一步前往尔汀桥阿陨吧。"
     },
     {
      "label": null,
      "text": "你在奥尔汀桥前救下了受到怪物袭击的阿陨，并把取消讨伐一事告诉了他。但是，你仍需要进入神兽瓦·鲁达尼亚的体内。看起来要前往神兽瓦·鲁达尼亚那里，必须得把尔汀桥起来才行……"
     },
     {
      "label": null,
      "text": "多亏阿陨使用达尔克尔的守护，变成了大炮的炮弹，你成功架起了奥尔汀桥！通过尔汀桥把神兽瓦·鲁达尼亚赶入火山口吧。"
     },
     {
      "label": null,
      "text": "在死亡之山上，神兽瓦·鲁达尼亚放出的侦查机将入侵者挡在了门外。避过侦查机的耳目，引导阿陨向着炮边前进，并将神兽瓦·鲁达尼亚赶入火山口吧。"
     },
     {
      "label": null,
      "text": "多亏阿陨使用达尔克尔的守护，变成了大炮的炮弹，你成功地把神兽瓦·鲁达尼亚赶入了火山口。接下来你需要进入兽瓦·鲁达尼亚体内，让它彻底停止行动。"
     },
     {
      "label": null,
      "text": "由于打倒了火咒盖侬，鼓隆族的英杰达尔克尔的灵魂得到了解放，神兽瓦·鲁达尼亚也清醒了过来！随后，在死亡之山的山顶上，神兽瓦·鲁达尼亚开始了讨伐盖侬的准备。看到它那个样子后，阿陨也放心地回到了鼓隆城。向尔多报下至今所发生的事情吧。"
     },
     {
      "label": null,
      "text": "你向布尔多报告了神兽瓦·鲁达尼亚清醒一事！这样一来，鼓隆城终于恢复了和平。你继承了达尔克尔的英杰之力，现在可以使用达尔克尔的守护了。"
     }
    ],
    "source": "QL_Fire_Relic"
   },
   "labels": [
    "QL_Fire_Relic_Battle",
    "QL_Fire_Relic_Storage",
    "QL_Fire_Relic_GoDeathMt",
    "QL_Fire_Relic_GoDeathMt",
    "QL_Fire_Relic_Desc",
    "QL_Fire_Relic_NorthMine",
    "QL_Fire_Relic_NorthMine",
    "QL_Fire_Relic_Name",
    "QL_Fire_Relic_Dungeon",
    "QL_Fire_Relic_Dungeon",
    "QL_Fire_Relic_Bridge"
   ],
   "flags": {
    "ready": "Fire_Relic_Ready",
    "activated": "Fire_Relic_Activated",
    "finish": "Fire_Relic_Finished",
    "steps": [],
    "aux": [
     "Fire_Relic_Battle",
     "Fire_Relic_Battle1stAttack",
     "Fire_Relic_Battle2ndAttack",
     "Fire_Relic_Battle3rdAttack",
     "Fire_Relic_BattlePlaying",
     "Fire_Relic_BattlePlaying_AreaInAppear",
     "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Bridge00",
     "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon1st",
     "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon2nd",
     "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon3nd",
     "Fire_Relic_BattlePlaying_HintArea1_OFF",
     "Fire_Relic_Bridge",
     "Fire_Relic_Bridge_AreaInAppear",
     "Fire_Relic_Bridge_Cannon",
     "Fire_Relic_Bridge_Enemy_A_Die",
     "Fire_Relic_Bridge_Enemy_B_Die",
     "Fire_Relic_Bridge_ExplanationAncestor",
     "Fire_Relic_Bridge_ExplanationOrdinBridge",
     "Fire_Relic_Bridge_ExplanationRudania",
     "Fire_Relic_Bridge_NPC006_First",
     "Fire_Relic_Bridge_NPC020_First",
     "Fire_Relic_BurudoThankYouGoods",
     "Fire_Relic_CraterFireRelicApper",
     "Fire_Relic_DeathBridgeONOFF",
     "Fire_Relic_DeathMT_Cannon1",
     "Fire_Relic_DeathMT_Cannon2",
     "Fire_Relic_DeathMT_Cannon3",
     "Fire_Relic_DeathMt_Wind_OFF",
     "Fire_Relic_Demo346_4",
     "Fire_Relic_Demo346_4_1st",
     "Fire_Relic_DemoArea_Demo346_4",
     "Fire_Relic_DroneAlert1st",
     "Fire_Relic_DroneONOFF_Demo346_4",
     "Fire_Relic_Dungeon",
     "Fire_Relic_Dungeon_NPC020_First",
     "Fire_Relic_EnemyOFF_1",
     "Fire_Relic_Finish_NPC020_First",
     "Fire_Relic_Finish_NPC020_Stop",
     "Fire_Relic_FireRelicONOFF",
     "Fire_Relic_GoDeathMt",
     "Fire_Relic_GoDeathMt_Enemy",
     "Fire_Relic_GoDeathMt_EnemyDie",
     "Fire_Relic_GoDeathMt_NPC020_First",
     "Fire_Relic_GoGoronCity",
     "Fire_Relic_Meet_StrageYunBo",
     "Fire_Relic_NPC020_Follow",
     "Fire_Relic_NPC020_StorageFirst",
     "Fire_Relic_NorthMine",
     "Fire_Relic_Ready_NPC006_First",
     "Fire_Relic_Rready_NPC020_First",
     "Fire_Relic_Rready_NPC020_GranPa",
     "Fire_Relic_Rready_NPC020_Telepathy",
     "Fire_Relic_Rready_NPC020_Wink",
     "Fire_Relic_StopForever_VolcanicPlume",
     "Fire_Relic_Storage",
     "Fire_Relic_Storage_AscendingCurrent",
     "Fire_Relic_Storage_ScaffoldIronBroken",
     "Fire_Relic_Storage_SkullRockBroken",
     "Fire_Relic_TBox_Appear",
     "Fire_Relic_VolcanicBomb_OFF_1",
     "Fire_Relic_VolcanicBomb_OFF_2",
     "Fire_Relic_VolcanicBomb_OFF_3",
     "Fire_Relic_VolcanicBomb_ONOFF_1",
     "Fire_Relic_VolcanicBomb_ONOFF_2",
     "Fire_Relic_VolcanicBomb_ONOFF_3",
     "Fire_Relic_WhistleMessage",
     "Fire_Relic_YunboStopGo"
    ]
   },
   "source": [
    "QL_Fire_Relic",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Fire_Relic_Ready": 1,
    "Fire_Relic_Activated": 0,
    "Fire_Relic_Finished": 0,
    "Fire_Relic_Battle": 0,
    "Fire_Relic_Battle1stAttack": 0,
    "Fire_Relic_Battle2ndAttack": 0,
    "Fire_Relic_Battle3rdAttack": 0,
    "Fire_Relic_BattlePlaying": 0,
    "Fire_Relic_BattlePlaying_AreaInAppear": 0,
    "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Bridge00": 0,
    "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon1st": 0,
    "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon2nd": 0,
    "Fire_Relic_BattlePlaying_ForceSavePos_YunBo_Cannon3nd": 0,
    "Fire_Relic_BattlePlaying_HintArea1_OFF": 0,
    "Fire_Relic_Bridge": 0,
    "Fire_Relic_Bridge_AreaInAppear": 0,
    "Fire_Relic_Bridge_Cannon": 0,
    "Fire_Relic_Bridge_Enemy_A_Die": 0,
    "Fire_Relic_Bridge_Enemy_B_Die": 0,
    "Fire_Relic_Bridge_ExplanationAncestor": 0,
    "Fire_Relic_Bridge_ExplanationOrdinBridge": 0,
    "Fire_Relic_Bridge_ExplanationRudania": 0,
    "Fire_Relic_Bridge_NPC006_First": 0,
    "Fire_Relic_Bridge_NPC020_First": 0,
    "Fire_Relic_BurudoThankYouGoods": 0,
    "Fire_Relic_CraterFireRelicApper": 0,
    "Fire_Relic_DeathBridgeONOFF": 0,
    "Fire_Relic_DeathMT_Cannon1": 1,
    "Fire_Relic_DeathMT_Cannon2": 1,
    "Fire_Relic_DeathMT_Cannon3": 1,
    "Fire_Relic_DeathMt_Wind_OFF": 0,
    "Fire_Relic_Demo346_4": 0,
    "Fire_Relic_Demo346_4_1st": 0,
    "Fire_Relic_DemoArea_Demo346_4": 0,
    "Fire_Relic_DroneAlert1st": 0,
    "Fire_Relic_DroneONOFF_Demo346_4": 0,
    "Fire_Relic_Dungeon": 0,
    "Fire_Relic_Dungeon_NPC020_First": 0,
    "Fire_Relic_EnemyOFF_1": 0,
    "Fire_Relic_Finish_NPC020_First": 0,
    "Fire_Relic_Finish_NPC020_Stop": 0,
    "Fire_Relic_FireRelicONOFF": 0,
    "Fire_Relic_GoDeathMt": 0,
    "Fire_Relic_GoDeathMt_Enemy": 0,
    "Fire_Relic_GoDeathMt_EnemyDie": 0,
    "Fire_Relic_GoDeathMt_NPC020_First": 0,
    "Fire_Relic_GoGoronCity": 0,
    "Fire_Relic_Meet_StrageYunBo": 0,
    "Fire_Relic_NPC020_Follow": 0,
    "Fire_Relic_NPC020_StorageFirst": 0,
    "Fire_Relic_NorthMine": 0,
    "Fire_Relic_Ready_NPC006_First": 0,
    "Fire_Relic_Rready_NPC020_First": 0,
    "Fire_Relic_Rready_NPC020_GranPa": 1,
    "Fire_Relic_Rready_NPC020_Telepathy": 0,
    "Fire_Relic_Rready_NPC020_Wink": 0,
    "Fire_Relic_StopForever_VolcanicPlume": 0,
    "Fire_Relic_Storage": 0,
    "Fire_Relic_Storage_AscendingCurrent": 0,
    "Fire_Relic_Storage_ScaffoldIronBroken": 0,
    "Fire_Relic_Storage_SkullRockBroken": 0,
    "Fire_Relic_TBox_Appear": 0,
    "Fire_Relic_VolcanicBomb_OFF_1": 0,
    "Fire_Relic_VolcanicBomb_OFF_2": 0,
    "Fire_Relic_VolcanicBomb_OFF_3": 0,
    "Fire_Relic_VolcanicBomb_ONOFF_1": 1,
    "Fire_Relic_VolcanicBomb_ONOFF_2": 0,
    "Fire_Relic_VolcanicBomb_ONOFF_3": 0,
    "Fire_Relic_WhistleMessage": 0,
    "Fire_Relic_YunboStopGo": 0
   },
   "status_snapshot": "未开始",
   "title": "火之神兽瓦·鲁达尼亚",
   "title_source": "QL_Fire_Relic · text[0] · 标签:QL_Fire_Relic_GoDeathMt"
  },
  {
   "id": "FironeMini_GiantHorse",
   "name": "布巴巴草地捕捉到巨大马匹。\n\n的确是巨大的马匹，\n甚至可以踢开怪物向前奔驰，真爽！\n\n将马带到司狄亚那里，\n他也非常惊讶。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_FironeMini_GiantHorse",
   "text": {
    "name": "在奥布巴巴草地捕捉到巨大马匹。的确是巨大的马匹，甚至可以踢开怪物向前奔驰，真爽！将马带到司狄亚那里，他也非常惊讶。",
    "desc": null,
    "finish": "你遇到了在费罗尼草原进行动物生态调查的司狄亚。他正在调查栖息于奥布巴巴草地的大马匹你要代替调查进展不顺的司狄亚捕捉大马匹到底有多巨大呢？",
    "steps": {},
    "name_label": "QL_FironeMini_GiantHorse_Name",
    "desc_label": null,
    "finish_label": "QL_FironeMini_GiantHorse_Finish",
    "items": [
     {
      "label": null,
      "text": "巨大马匹捕捉大作战"
     },
     {
      "label": "QL_FironeMini_GiantHorse_Finish",
      "text": "你遇到了在费罗尼草原进行动物生态调查的司狄亚。他正在调查栖息于奥布巴巴草地的大马匹你要代替调查进展不顺的司狄亚捕捉大马匹到底有多巨大呢？"
     },
     {
      "label": "QL_FironeMini_GiantHorse_Name",
      "text": "在奥布巴巴草地捕捉到巨大马匹。的确是巨大的马匹，甚至可以踢开怪物向前奔驰，真爽！将马带到司狄亚那里，他也非常惊讶。"
     }
    ],
    "source": "QL_FironeMini_GiantHorse"
   },
   "labels": [
    "QL_FironeMini_GiantHorse_Finish",
    "QL_FironeMini_GiantHorse_Name"
   ],
   "flags": {
    "ready": "FironeMini_GiantHorse_Ready",
    "activated": "FironeMini_GiantHorse_Activated",
    "finish": "FironeMini_GiantHorse_Finish",
    "steps": [],
    "aux": [
     "FironeMini_GiantHorse_IsTalked",
     "FironeMini_GiantHorse_Present"
    ]
   },
   "source": [
    "QL_FironeMini_GiantHorse",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FironeMini_GiantHorse_Ready": 1,
    "FironeMini_GiantHorse_Activated": 0,
    "FironeMini_GiantHorse_Finish": 0,
    "FironeMini_GiantHorse_IsTalked": 0,
    "FironeMini_GiantHorse_Present": 0
   },
   "status_snapshot": "未开始",
   "title": "巨大马匹捕捉大作战",
   "title_source": "QL_FironeMini_GiantHorse · text[0] · 无标签"
  },
  {
   "id": "FironeMini_HeartPond",
   "name": "对一名格鲁德族女子一见钟情。\n他想将行草给她，\n借此来传达自己的心意。\n但是他好像太紧张而无法动弹。\n\n儒秀拜托你代替他\n将行草给女子。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_FironeMini_HeartPond",
   "text": {
    "name": "儒秀对一名格鲁德族女子一见钟情。他想将行草给她，借此来传达自己的心意。但是他好像太紧张而无法动弹。儒秀拜托你代替他将行草给女子。",
    "desc": "潜行草之爱情告白",
    "finish": null,
    "steps": {},
    "name_label": "QL_FironeMini_HeartPond_Name",
    "desc_label": "QL_FironeMini_HeartPond_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_FironeMini_HeartPond_Desc",
      "text": "潜行草之爱情告白"
     },
     {
      "label": null,
      "text": "儒秀对一名格鲁德族女子一见钟情。他想将行草给她，借此来传达自己的心意。但他好像没有关键的行草为此很烦恼。"
     },
     {
      "label": "QL_FironeMini_HeartPond_Name",
      "text": "儒秀对一名格鲁德族女子一见钟情。他想将行草给她，借此来传达自己的心意。但是他好像太紧张而无法动弹。儒秀拜托你代替他将行草给女子。"
     },
     {
      "label": "QL_FironeMini_HeartPond_Desc",
      "text": "你代替因紧张而无法动弹的儒秀将行草给了佩蒂。"
     },
     {
      "label": null,
      "text": "对佩蒂一见钟情的儒秀，一直等待儒秀向自己开口的佩蒂。虽然没能实现理想中的告白，但是他们终是遇到了命中注定之人。"
     }
    ],
    "source": "QL_FironeMini_HeartPond"
   },
   "labels": [
    "QL_FironeMini_HeartPond_Desc",
    "QL_FironeMini_HeartPond_Desc",
    "QL_FironeMini_HeartPond_Name"
   ],
   "flags": {
    "ready": "FironeMini_HeartPond_Ready",
    "activated": "FironeMini_HeartPond_Activated",
    "finish": "FironeMini_HeartPond_Finish",
    "steps": [],
    "aux": [
     "FironeMini_HeartPond_GetFlower",
     "FironeMini_HeartPond_GetRupee",
     "FironeMini_HeartPond_ManIsTalked",
     "FironeMini_HeartPond_PresentFlower",
     "FironeMini_HeartPond_WomanIsTalked"
    ]
   },
   "source": [
    "QL_FironeMini_HeartPond",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FironeMini_HeartPond_Ready": 1,
    "FironeMini_HeartPond_Activated": 0,
    "FironeMini_HeartPond_Finish": 0,
    "FironeMini_HeartPond_GetFlower": 0,
    "FironeMini_HeartPond_GetRupee": 0,
    "FironeMini_HeartPond_ManIsTalked": 0,
    "FironeMini_HeartPond_PresentFlower": 0,
    "FironeMini_HeartPond_WomanIsTalked": 0
   },
   "status_snapshot": "未开始",
   "title": "潜行草之爱情告白",
   "title_source": "QL_FironeMini_HeartPond · text[0] · 标签:QL_FironeMini_HeartPond_Desc"
  },
  {
   "id": "FironeMini_HorseEnemy",
   "name": "了占据草原的莽者们\n\n听到这件事后，\n相信索艾也能重拾笑容吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_FironeMini_HorseEnemy",
   "text": {
    "name": "击退了占据草原的莽者们听到这件事后，相信索艾也能重拾笑容吧。",
    "desc": "费罗尼草原是有名的马匹产地。但是最近这里被骑马的莽者们占据了，索艾很伤心。如果能击退莽者们或许索艾就能重拾笑容。",
    "finish": null,
    "steps": {},
    "name_label": "QL_FironeMini_HorseEnemy_Name",
    "desc_label": "QL_FironeMini_HorseEnemy_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "骑马的鲁莽者"
     },
     {
      "label": "QL_FironeMini_HorseEnemy_Desc",
      "text": "费罗尼草原是有名的马匹产地。但是最近这里被骑马的莽者们占据了，索艾很伤心。如果能击退莽者们或许索艾就能重拾笑容。"
     },
     {
      "label": "QL_FironeMini_HorseEnemy_Name",
      "text": "击退了占据草原的莽者们听到这件事后，相信索艾也能重拾笑容吧。"
     },
     {
      "label": null,
      "text": "击退了占据草原的鲁莽者们！告诉索艾后，她非常开心。赠予你毅力胡萝卜作为谢礼。这个好像是马的最爱？"
     }
    ],
    "source": "QL_FironeMini_HorseEnemy"
   },
   "labels": [
    "QL_FironeMini_HorseEnemy_Desc",
    "QL_FironeMini_HorseEnemy_Name",
    "QL_FironeMini_HorseEnemy_Exterminate"
   ],
   "flags": {
    "ready": "FironeMini_HorseEnemy_Ready",
    "activated": "FironeMini_HorseEnemy_Activated",
    "finish": "FironeMini_HorseEnemy_Finish",
    "steps": [],
    "aux": [
     "FironeMini_HorseEnemy_Exterminate",
     "FironeMini_HorseEnemy_GetReward",
     "FironeMini_HorseEnemy_IsTalked",
     "FironeMini_HorseEnemy_TalkGiantHorse",
     "FironeMini_HorseEnemy_TalkMaron"
    ]
   },
   "source": [
    "QL_FironeMini_HorseEnemy",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FironeMini_HorseEnemy_Ready": 1,
    "FironeMini_HorseEnemy_Activated": 0,
    "FironeMini_HorseEnemy_Finish": 0,
    "FironeMini_HorseEnemy_Exterminate": 0,
    "FironeMini_HorseEnemy_GetReward": 0,
    "FironeMini_HorseEnemy_IsTalked": 0,
    "FironeMini_HorseEnemy_TalkGiantHorse": 0,
    "FironeMini_HorseEnemy_TalkMaron": 0
   },
   "status_snapshot": "未开始",
   "title": "骑马的鲁莽者",
   "title_source": "QL_FironeMini_HorseEnemy · text[0] · 无标签"
  },
  {
   "id": "FironeMini_TerribleThunder",
   "name": "纳总是愁眉不展，\n心烦的原因好像是\n\n不知道为什么常会落在湖畔驿站。\n她拜托你去调查其中原因。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_FironeMini_TerribleThunder",
   "text": {
    "name": "西米纳总是愁眉不展，心烦的原因好像是不知道为什么常会落在湖畔驿站。她拜托你去调查其中原因。",
    "desc": "湖畔驿站的最高处插着一把金属制的武器。大概是因为这把武器，驿站才容易落把这件事告诉西米纳，让她放心吧。",
    "finish": "西米纳总是愁眉不展，心烦的原因好像是不知道为什么常会落在湖畔驿站。她拜托你去调查其中原因。",
    "steps": {},
    "name_label": "QL_FironeMini_TerribleThunder_Finish",
    "desc_label": "QL_FironeMini_TerribleThunder_Desc",
    "finish_label": "QL_FironeMini_TerribleThunder_Finish",
    "items": [
     {
      "label": null,
      "text": "害怕打雷"
     },
     {
      "label": "QL_FironeMini_TerribleThunder_Finish",
      "text": "西米纳总是愁眉不展，心烦的原因好像是不知道为什么常会落在湖畔驿站。她拜托你去调查其中原因。"
     },
     {
      "label": "QL_FironeMini_TerribleThunder_Desc",
      "text": "湖畔驿站的最高处插着一把金属制的武器。大概是因为这把武器，驿站才容易落把这件事告诉西米纳，让她放心吧。"
     },
     {
      "label": null,
      "text": "听了你的报告之后，西米纳也放下心来。但她好像还是害怕雷声。"
     }
    ],
    "source": "QL_FironeMini_TerribleThunder"
   },
   "labels": [
    "QL_FironeMini_TerribleThunder_Desc",
    "QL_FironeMini_TerribleThunder_Finish",
    "QL_FironeMini_TerribleThunder_Name"
   ],
   "flags": {
    "ready": "FironeMini_TerribleThunder_Ready",
    "activated": "FironeMini_TerribleThunder_Activated",
    "finish": "FironeMini_TerribleThunder_Finish",
    "steps": [],
    "aux": [
     "FironeMini_TerribleThunder_GetReward",
     "FironeMini_TerribleThunder_Ono",
     "FironeMini_TerribleThunder_Remove"
    ]
   },
   "source": [
    "QL_FironeMini_TerribleThunder",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FironeMini_TerribleThunder_Ready": 1,
    "FironeMini_TerribleThunder_Activated": 0,
    "FironeMini_TerribleThunder_Finish": 0,
    "FironeMini_TerribleThunder_GetReward": 0,
    "FironeMini_TerribleThunder_Ono": 0,
    "FironeMini_TerribleThunder_Remove": 0
   },
   "status_snapshot": "未开始",
   "title": "害怕打雷",
   "title_source": "QL_FironeMini_TerribleThunder · text[0] · 无标签"
  },
  {
   "id": "FirstOhenro",
   "name": "定要守护\n拓奇最初的试练。\n\n以防被拓奇发现，\n偷偷地跟在他的身后吧。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_FirstOhenro",
   "text": {
    "name": "你决定要守护拓奇最初的试练。以防被拓奇发现，偷偷地跟在他的身后吧。",
    "desc": "拓奇顺利地到达目的地了！你一路见证了他成功完成最初的试练。",
    "finish": null,
    "steps": {
     "QL_FirstOhenro_Step2": "你决定要守护拓奇最初的试练。以防被拓奇发现，偷偷地跟在他的身后吧。"
    },
    "name_label": "QL_FirstOhenro_Step2",
    "desc_label": "QL_FirstOhenro_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "最初的试练"
     },
     {
      "label": "QL_FirstOhenro_Step2",
      "text": "你决定要守护拓奇最初的试练。以防被拓奇发现，偷偷地跟在他的身后吧。"
     },
     {
      "label": null,
      "text": "拓奇出发去试练了。以防被他发现，偷偷跟在后面守护他吧。"
     },
     {
      "label": "QL_FirstOhenro_Desc",
      "text": "拓奇顺利地到达目的地了！你一路见证了他成功完成最初的试练。"
     },
     {
      "label": null,
      "text": "拓奇顺利到达目的地，成功完成了最初的试练！拓奇的目的地居然是一座古代神庙！"
     }
    ],
    "source": "QL_FirstOhenro"
   },
   "labels": [
    "QL_FirstOhenro_Step2",
    "QL_FirstOhenro_Name",
    "QL_FirstOhenro_Desc"
   ],
   "flags": {
    "ready": "FirstOhenro_Ready",
    "activated": "FirstOhenro_Activated",
    "finish": "FirstOhenro_Finish",
    "steps": [
     "FirstOhenro_Step2"
    ],
    "aux": []
   },
   "source": [
    "QL_FirstOhenro",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FirstOhenro_Ready": 1,
    "FirstOhenro_Activated": 0,
    "FirstOhenro_Finish": 0,
    "FirstOhenro_Step2": 0
   },
   "status_snapshot": "未开始",
   "title": "最初的试练",
   "title_source": "QL_FirstOhenro · text[0] · 无标签"
  },
  {
   "id": "FirstTower",
   "name": "卡之石轻放在指示的地方后\n巨塔突然拔地而起，\n把你和你脚下的地面一同带往空中……\n\n而且在塔上的时候，从远远可见的城堡那里\n再次传来了那个动听的女声……",
   "category": "主线任务",
   "subcategory": "初始台地",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_FirstTower",
   "text": {
    "name": "将希卡之石轻放在指示的地方后巨塔突然拔地而起，把你和你脚下的地面一同带往空中……而且在塔上的时候，从远远可见的城堡那里再次传来了那个动听的女声……",
    "desc": null,
    "finish": "不知从哪里传来了一个动听的女声：“前往希卡之石图上所指示的地方…”对于这块醒来时获得的神奇石板，你虽然从未见过，却有着一种熟悉的感觉……可以按。",
    "steps": {},
    "name_label": "QL_FirstTower_Name",
    "desc_label": null,
    "finish_label": "QL_FirstTower_Finish",
    "items": [
     {
      "label": null,
      "text": "希卡之石的指示地"
     },
     {
      "label": "QL_FirstTower_Finish",
      "text": "不知从哪里传来了一个动听的女声：“前往希卡之石图上所指示的地方…”对于这块醒来时获得的神奇石板，你虽然从未见过，却有着一种熟悉的感觉……可以按。"
     },
     {
      "label": "QL_FirstTower_Name",
      "text": "将希卡之石轻放在指示的地方后巨塔突然拔地而起，把你和你脚下的地面一同带往空中……而且在塔上的时候，从远远可见的城堡那里再次传来了那个动听的女声……"
     }
    ],
    "source": "QL_FirstTower"
   },
   "labels": [
    "QL_FirstTower_Finish",
    "QL_FirstTower_Name"
   ],
   "flags": {
    "ready": "FirstTower_Ready",
    "activated": "FirstTower_Activated",
    "finish": "FirstTower_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_FirstTower",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "FirstTower_Ready": 1,
    "FirstTower_Activated": 1,
    "FirstTower_Finish": 1
   },
   "status_snapshot": "已完成",
   "title": "希卡之石的指示地",
   "title_source": "QL_FirstTower · text[0] · 无标签"
  },
  {
   "id": "FourJewel",
   "name": "石柱上描绘的图案，\n放置好4个魂灵。\n\n在雷之台地的中央\n随之出现了一座古代神庙！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_FourJewel",
   "text": {
    "name": "配合石柱上描绘的图案，放置好4个魂灵。在雷之台地的中央随之出现了一座古代神庙！",
    "desc": null,
    "finish": "当你到达雷雨交加的雷之台地，耳畔忽闻人声语。声音告诉你，只要将4个魂灵安放至正确的地方，勇者的试练就会出现。",
    "steps": {},
    "name_label": "QL_FourJewel_Name",
    "desc_label": null,
    "finish_label": "QL_FourJewel_Finish",
    "items": [
     {
      "label": null,
      "text": "雷鸣的试练"
     },
     {
      "label": "QL_FourJewel_Finish",
      "text": "当你到达雷雨交加的雷之台地，耳畔忽闻人声语。声音告诉你，只要将4个魂灵安放至正确的地方，勇者的试练就会出现。"
     },
     {
      "label": "QL_FourJewel_Name",
      "text": "配合石柱上描绘的图案，放置好4个魂灵。在雷之台地的中央随之出现了一座古代神庙！"
     }
    ],
    "source": "QL_FourJewel"
   },
   "labels": [
    "QL_FourJewel_Finish",
    "QL_FourJewel_Name"
   ],
   "flags": {
    "ready": "FourJewel_Ready",
    "activated": "FourJewel_Activated",
    "finish": "FourJewel_Finish",
    "steps": [],
    "aux": [
     "FourJewel_Dungeon",
     "FourJewel_SetA",
     "FourJewel_SetB",
     "FourJewel_SetC",
     "FourJewel_SetD"
    ]
   },
   "source": [
    "QL_FourJewel",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "FourJewel_Ready": 1,
    "FourJewel_Activated": 0,
    "FourJewel_Finish": 0,
    "FourJewel_Dungeon": 0,
    "FourJewel_SetA": 0,
    "FourJewel_SetB": 0,
    "FourJewel_SetC": 0,
    "FourJewel_SetD": 0
   },
   "status_snapshot": "未开始",
   "title": "雷鸣的试练",
   "title_source": "QL_FourJewel · text[0] · 无标签"
  },
  {
   "id": "Gaman",
   "name": "力",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Gaman",
   "text": {
    "name": "热血的鼓隆兄弟向你发起了比耐力的挑战。内容很简单，只要比三兄弟更长时间续呆在热的赛场上即可获胜。话说如此，但……",
    "desc": "第一回合挑战成功。",
    "finish": null,
    "steps": {
     "QL_Gaman_Step2_12": "热血的鼓隆兄弟向你发起了比耐力的挑战。内容很简单，只要比三兄弟更长时间续呆在热的赛场上即可获胜。话说如此，但……",
     "QL_Gaman_Step1_2_10": "“男子汉要有　坚实的胸膛、　　满腔的热血。”整装蓄势，心心满格时去挑战才是正道鼓咯。——巴恺忒",
     "QL_Gaman_Step1_2_5": "第一回合挑战成功。",
     "QL_Gaman_Step1_2_9": "第一回合挑战成功。"
    },
    "name_label": "QL_Gaman_Step2_12",
    "desc_label": "QL_Gaman_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Gaman_Name",
      "text": "比耐力"
     },
     {
      "label": "QL_Gaman_Step2_12",
      "text": "热血的鼓隆兄弟向你发起了比耐力的挑战。内容很简单，只要比三兄弟更长时间续呆在热的赛场上即可获胜。话说如此，但……"
     },
     {
      "label": "QL_Gaman_Step1_2_10",
      "text": "“男子汉要有　坚实的胸膛、　　满腔的热血。”整装蓄势，心心满格时去挑战才是正道鼓咯。——巴恺忒"
     },
     {
      "label": "QL_Gaman_Step1_2_5",
      "text": "第一回合挑战成功。"
     },
     {
      "label": "QL_Gaman_Step1_2_9",
      "text": "第一回合挑战成功。"
     },
     {
      "label": "QL_Gaman_Desc",
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战成功。"
     },
     {
      "label": null,
      "text": "第一回合挑战失败。"
     },
     {
      "label": null,
      "text": "你即将参加更加艰难的比耐力挑战。想要继承弃甲投戈的三兄弟之意志，看来需要充分做好耐火措施后，再走上灼热赛场。"
     },
     {
      "label": null,
      "text": "“男子汉要有　气力体力、　　不屈的精神。”这是无人曾到达的领域鼓咯，耐火措施也做好了吗鼓咯！？——夕尔"
     },
     {
      "label": null,
      "text": "多亏忍耐住了灼热的试练，古代神庙出现在你的眼前！…………啊，没有卡贝塔男子汉的金句了吗鼓咯？有点遗憾啊鼓咯……"
     }
    ],
    "source": "QL_Gaman"
   },
   "labels": [
    "QL_Gaman_Desc",
    "QL_Gaman_Step1_2_9",
    "QL_Gaman_Step2_12",
    "QL_Gaman_Step1_2_10",
    "QL_Gaman_Step1_2_11",
    "QL_Gaman_Step1_2_12",
    "QL_Gaman_Step1_2_13",
    "QL_Gaman_Step2_17",
    "QL_Gaman_Step1_2",
    "QL_Gaman_Step2_19",
    "QL_Gaman_Name",
    "QL_Gaman_Name",
    "QL_Gaman_Step1_2_Successed",
    "QL_Gaman_Step1_2_Successed",
    "QL_Gaman_Step1_2_Successed",
    "QL_Gaman_Step1_2_1",
    "QL_Gaman_Step1_2_1",
    "QL_Gaman_Step1_2_2",
    "QL_Gaman_Step1_2_3",
    "QL_Gaman_Step1_2_4",
    "QL_Gaman_Step1_2_5",
    "QL_Gaman_Step1_2_6",
    "QL_Gaman_Step1_2_7"
   ],
   "flags": {
    "ready": "Gaman_Ready",
    "activated": "Gaman_Activated",
    "finish": "Gaman_Finish",
    "steps": [
     "Gaman_Step1",
     "Gaman_Step1_2",
     "Gaman_Step1_2_1",
     "Gaman_Step1_2_10",
     "Gaman_Step1_2_11",
     "Gaman_Step1_2_12",
     "Gaman_Step1_2_13",
     "Gaman_Step1_2_2",
     "Gaman_Step1_2_3",
     "Gaman_Step1_2_4",
     "Gaman_Step1_2_5",
     "Gaman_Step1_2_6",
     "Gaman_Step1_2_7",
     "Gaman_Step1_2_8",
     "Gaman_Step1_2_9",
     "Gaman_Step1_2_Failed",
     "Gaman_Step1_2_Successed",
     "Gaman_Step2",
     "Gaman_Step2_10",
     "Gaman_Step2_11",
     "Gaman_Step2_12",
     "Gaman_Step2_13",
     "Gaman_Step2_14",
     "Gaman_Step2_15",
     "Gaman_Step2_16",
     "Gaman_Step2_17",
     "Gaman_Step2_18",
     "Gaman_Step2_19",
     "Gaman_Step2_20",
     "Gaman_Step2_21",
     "Gaman_Step2_3",
     "Gaman_Step2_4",
     "Gaman_Step2_5",
     "Gaman_Step2_6",
     "Gaman_Step2_7",
     "Gaman_Step2_8",
     "Gaman_Step2_9",
     "Gaman_Step2_AreaMake",
     "Gaman_Step2_Retry"
    ],
    "aux": [
     "Gaman_DungeonArrival",
     "Gaman_Gaman_Step1_2_FailedAir",
     "Gaman_Gaman_Step2_2",
     "Gaman_Gaman_Step2_Failed",
     "Gaman_Gaman_Step2_FailedAir_Npc_Gaman01_StepStart",
     "Gaman_Start01"
    ]
   },
   "source": [
    "QL_Gaman",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gaman_Ready": 1,
    "Gaman_Activated": 0,
    "Gaman_Finish": 0,
    "Gaman_Step1": 0,
    "Gaman_Step1_2": 0,
    "Gaman_Step1_2_1": 0,
    "Gaman_Step1_2_10": 0,
    "Gaman_Step1_2_11": 0,
    "Gaman_Step1_2_12": 0,
    "Gaman_Step1_2_13": 0,
    "Gaman_Step1_2_2": 0,
    "Gaman_Step1_2_3": 0,
    "Gaman_Step1_2_4": 0,
    "Gaman_Step1_2_5": 0,
    "Gaman_Step1_2_6": 0,
    "Gaman_Step1_2_7": 0,
    "Gaman_Step1_2_8": 0,
    "Gaman_Step1_2_9": 0,
    "Gaman_Step1_2_Failed": 0,
    "Gaman_Step1_2_Successed": 0,
    "Gaman_Step2": 0,
    "Gaman_Step2_10": 0,
    "Gaman_Step2_11": 0,
    "Gaman_Step2_12": 0,
    "Gaman_Step2_13": 0,
    "Gaman_Step2_14": 0,
    "Gaman_Step2_15": 0,
    "Gaman_Step2_16": 0,
    "Gaman_Step2_17": 0,
    "Gaman_Step2_18": 0,
    "Gaman_Step2_19": 0,
    "Gaman_Step2_20": 0,
    "Gaman_Step2_21": 0,
    "Gaman_Step2_3": 0,
    "Gaman_Step2_4": 0,
    "Gaman_Step2_5": 0,
    "Gaman_Step2_6": 0,
    "Gaman_Step2_7": 0,
    "Gaman_Step2_8": 0,
    "Gaman_Step2_9": 0,
    "Gaman_Step2_AreaMake": 0,
    "Gaman_Step2_Retry": 0,
    "Gaman_DungeonArrival": 0,
    "Gaman_Gaman_Step1_2_FailedAir": 0,
    "Gaman_Gaman_Step2_2": 0,
    "Gaman_Gaman_Step2_Failed": 0,
    "Gaman_Gaman_Step2_FailedAir_Npc_Gaman01_StepStart": 0,
    "Gaman_Start01": 0
   },
   "status_snapshot": "未开始",
   "title": "比耐力",
   "title_source": "QL_Gaman · text[0] · 标签:QL_Gaman_Name"
  },
  {
   "id": "GanonQuest",
   "name": "？\n根据灾厄盖侬的不同形态，分步实施比较好。",
   "category": "主线任务",
   "subcategory": "讨伐灾厄盖侬",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_GanonQuest",
   "text": {
    "name": "不要？根据灾厄盖侬的不同形态，分步实施比较好。",
    "desc": null,
    "finish": "海拉鲁国王的幽灵告诉你，这个王国现在正处于灭亡的边缘……当在海拉鲁城堡压制着厄盖侬量的塞尔达公主精疲力尽之时……灾厄盖侬将会完全复活，世界也将迎来终焉。你能在那之前救出塞尔达公主吗……",
    "steps": {},
    "name_label": "QL_GanonQuest_Name",
    "desc_label": null,
    "finish_label": "QL_GanonQuest_Finished",
    "items": [
     {
      "label": null,
      "text": "讨伐盖侬"
     },
     {
      "label": "QL_GanonQuest_Finished",
      "text": "海拉鲁国王的幽灵告诉你，这个王国现在正处于灭亡的边缘……当在海拉鲁城堡压制着厄盖侬量的塞尔达公主精疲力尽之时……灾厄盖侬将会完全复活，世界也将迎来终焉。你能在那之前救出塞尔达公主吗……"
     },
     {
      "label": "QL_GanonQuest_Name",
      "text": "不要？根据灾厄盖侬的不同形态，分步实施比较好。"
     }
    ],
    "source": "QL_GanonQuest"
   },
   "labels": [
    "QL_GanonQuest_Finished",
    "QL_GanonQuest_Name"
   ],
   "flags": {
    "ready": "GanonQuest_Ready",
    "activated": "GanonQuest_Activated",
    "finish": "GanonQuest_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_GanonQuest",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "GanonQuest_Ready": 1,
    "GanonQuest_Activated": 1,
    "GanonQuest_Finished": 0
   },
   "status_snapshot": "进行中",
   "title": "讨伐盖侬",
   "title_source": "QL_GanonQuest · text[0] · 无标签"
  },
  {
   "id": "GerudoMiniJewel",
   "name": "店的老板艾夏\n在为打火石用完了而烦恼。\n多亏你给了她10颗打火石，\n店铺顺利恢复营业了。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_GerudoMiniJewel",
   "text": {
    "name": "珠宝店的老板艾夏在为打火石用完了而烦恼。多亏你给了她10颗打火石，店铺顺利恢复营业了。",
    "desc": null,
    "finish": "珠宝店的老板艾夏很烦恼。似乎是制作首饰时需要用到的打火石用完了。据说只要有0颗打火石店铺就可以恢复营业。",
    "steps": {},
    "name_label": "QL_GerudoMiniJewel_Name",
    "desc_label": null,
    "finish_label": "QL_GerudoMiniJewel_Finished",
    "items": [
     {
      "label": null,
      "text": "你喜欢宝石吗？"
     },
     {
      "label": "QL_GerudoMiniJewel_Finished",
      "text": "珠宝店的老板艾夏很烦恼。似乎是制作首饰时需要用到的打火石用完了。据说只要有0颗打火石店铺就可以恢复营业。"
     },
     {
      "label": "QL_GerudoMiniJewel_Name",
      "text": "珠宝店的老板艾夏在为打火石用完了而烦恼。多亏你给了她10颗打火石，店铺顺利恢复营业了。"
     }
    ],
    "source": "QL_GerudoMiniJewel"
   },
   "labels": [
    "QL_GerudoMiniJewel_Finished",
    "QL_GerudoMiniJewel_Name"
   ],
   "flags": {
    "ready": "GerudoMiniJewel_Ready",
    "activated": "GerudoMiniJewel_Activated",
    "finish": "GerudoMiniJewel_Finished",
    "steps": [],
    "aux": [
     "GerudoMiniJewel_Display",
     "GerudoMiniJewel_First",
     "GerudoMiniJewel_Poach",
     "GerudoMiniJewel_Talked"
    ]
   },
   "source": [
    "QL_GerudoMiniJewel",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GerudoMiniJewel_Ready": 1,
    "GerudoMiniJewel_Activated": 1,
    "GerudoMiniJewel_Finished": 1,
    "GerudoMiniJewel_Display": 1,
    "GerudoMiniJewel_First": 0,
    "GerudoMiniJewel_Poach": 0,
    "GerudoMiniJewel_Talked": 0
   },
   "status_snapshot": "已完成",
   "title": "你喜欢宝石吗？",
   "title_source": "QL_GerudoMiniJewel · text[0] · 无标签"
  },
  {
   "id": "Gerudo_CarryIce",
   "name": "玉液琼浆……",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Gerudo_CarryIce",
   "text": {
    "name": "寻求玉液琼浆……",
    "desc": "寻求玉液琼浆……",
    "finish": null,
    "steps": {},
    "name_label": "QL_Gerudo_CarryIce_Desc",
    "desc_label": "QL_Gerudo_CarryIce_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Gerudo_CarryIce_Desc",
      "text": "寻求玉液琼浆……"
     },
     {
      "label": null,
      "text": "有一名叫帕可忒的格鲁德人晕倒在古代神庙前。如果她不能恢复精神，好像就无法进入神庙里面。她喃喃呓语般嘟囔着想喝伊迷兹沃伊"
     },
     {
      "label": null,
      "text": "瓦伊迷兹沃伊是格鲁德酒馆的名酒。但据说现在冰块用完了无法酿制。让小镇北部冰屋的昂琪艾分点冰块给你吧。但是你需要在黑之前往。"
     },
     {
      "label": "QL_Gerudo_CarryIce_Desc",
      "text": "从昂琪艾那里分到了冰块！想要将冰块运到约在遗迹碰头的芙洛丝那里，要注意免冰块在沙漠酷暑下融化"
     },
     {
      "label": null,
      "text": "将冰块交给了酒馆老板。这下应该能制作出透心凉的瓦伊迷兹沃伊了吧。快点将这个好消息告诉晕倒在古代神庙的帕可忒吧。"
     },
     {
      "label": null,
      "text": "刚把透心凉的瓦伊迷兹沃伊一事告诉给帕可忒，她就飞奔去了格鲁德酒馆。这下应该可以悠哉地进入古代神庙了。"
     }
    ],
    "source": "QL_Gerudo_CarryIce"
   },
   "labels": [
    "QL_Gerudo_CarryIce_Desc",
    "QL_Gerudo_CarryIce_Desc",
    "QL_Gerudo_CarryIce_Name",
    "QL_Gerudo_CarryIce_Name",
    "QL_Gerudo_CarryIce_Name"
   ],
   "flags": {
    "ready": "Gerudo_CarryIce_Ready",
    "activated": "Gerudo_CarryIce_Activated",
    "finish": "Gerudo_CarryIce_Finished",
    "steps": [],
    "aux": [
     "Gerudo_CarryIce_Bar_First",
     "Gerudo_CarryIce_Delivered",
     "Gerudo_CarryIce_FirstVoy",
     "Gerudo_CarryIce_Gerudo_CarryIce_bar",
     "Gerudo_CarryIce_Get",
     "Gerudo_CarryIce_IceExist",
     "Gerudo_CarryIce_Talk",
     "Gerudo_CarryIce_fireworks_end",
     "Gerudo_CarryIce_fireworks_ice"
    ]
   },
   "source": [
    "QL_Gerudo_CarryIce",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_CarryIce_Ready": 1,
    "Gerudo_CarryIce_Activated": 0,
    "Gerudo_CarryIce_Finished": 0,
    "Gerudo_CarryIce_Bar_First": 0,
    "Gerudo_CarryIce_Delivered": 0,
    "Gerudo_CarryIce_FirstVoy": 0,
    "Gerudo_CarryIce_Gerudo_CarryIce_bar": 0,
    "Gerudo_CarryIce_Get": 0,
    "Gerudo_CarryIce_IceExist": 0,
    "Gerudo_CarryIce_Talk": 0,
    "Gerudo_CarryIce_fireworks_end": 0,
    "Gerudo_CarryIce_fireworks_ice": 0
   },
   "status_snapshot": "未开始",
   "title": "寻求玉液琼浆……",
   "title_source": "QL_Gerudo_CarryIce · text[0] · 标签:QL_Gerudo_CarryIce_Desc"
  },
  {
   "id": "Gerudo_CarryIce_mini",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_CarryIce_mini",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_Gerudo_CarryIce_mini"
   },
   "labels": [
    "QL_Gerudo_CarryIce_mini_Step1",
    "QL_Gerudo_CarryIce_mini_Step2",
    "������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0000\u0000\u0000����������"
   ],
   "flags": {
    "ready": "Gerudo_CarryIce_mini_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Gerudo_CarryIce_mini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_CarryIce_mini_Ready": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Gerudo_Ch_FindingValetta",
   "name": "了晕倒在沙漠中的芭乐塔。\n\n她喃喃呓语般不断叨念着\n“生命榴莲、生命榴莲”。\n\n看来她非常想吃命榴莲",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_FindingValetta",
   "text": {
    "name": "找到了晕倒在沙漠中的芭乐塔。她喃喃呓语般不断叨念着“生命榴莲、生命榴莲”。看来她非常想吃命榴莲",
    "desc": "找到了晕倒在沙漠中的芭乐塔。她喃喃呓语般不断叨念着“生命榴莲、生命榴莲”。看来她非常想吃命榴莲",
    "finish": null,
    "steps": {
     "QL_Gerudo_Ch_FindingValetta_Step1": "芭乐塔又不见踪影了。她好像去调查位于西南方的大化石后就再没有回来。据说那一带不仅有莫尔德拉吉克出没，而且是没有特殊装备就会非常危险的暑地带靠地图去找芭乐塔吧。"
    },
    "name_label": "QL_Gerudo_Ch_FindingValetta_Desc",
    "desc_label": "QL_Gerudo_Ch_FindingValetta_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "寻找芭乐塔"
     },
     {
      "label": "QL_Gerudo_Ch_FindingValetta_Step1",
      "text": "芭乐塔又不见踪影了。她好像去调查位于西南方的大化石后就再没有回来。据说那一带不仅有莫尔德拉吉克出没，而且是没有特殊装备就会非常危险的暑地带靠地图去找芭乐塔吧。"
     },
     {
      "label": "QL_Gerudo_Ch_FindingValetta_Desc",
      "text": "找到了晕倒在沙漠中的芭乐塔。她喃喃呓语般不断叨念着“生命榴莲、生命榴莲”。看来她非常想吃命榴莲"
     },
     {
      "label": null,
      "text": "给晕倒在沙漠中的芭乐塔吃了生命榴莲。芭乐塔虽然恢复了精神，但是告诉她朗洁正生气的事情后，她一溜烟地飞奔回了格鲁德小镇。以防万一，将芭乐塔平安的消息告诉朗洁吧。"
     },
     {
      "label": null,
      "text": "芭乐塔相安无事回到了格鲁德小镇。但是她的失踪着实令人担心，为此似乎被朗洁严厉批评了一番。她应该会安分一段时间吧。"
     }
    ],
    "source": "QL_Gerudo_Ch_FindingValetta"
   },
   "labels": [
    "QL_Gerudo_Ch_FindingValetta_Desc",
    "QL_Gerudo_Ch_FindingValetta_Name",
    "QL_Gerudo_Ch_FindingValetta_Step1"
   ],
   "flags": {
    "ready": "Gerudo_Ch_FindingValetta_Ready",
    "activated": "Gerudo_Ch_FindingValetta_Activated",
    "finish": "Gerudo_Ch_FindingValetta_Finish",
    "steps": [
     "Gerudo_Ch_FindingValetta_Step1",
     "Gerudo_Ch_FindingValetta_Step2"
    ],
    "aux": [
     "Gerudo_Ch_FindingValetta_Find"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_FindingValetta",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_FindingValetta_Ready": 0,
    "Gerudo_Ch_FindingValetta_Activated": 0,
    "Gerudo_Ch_FindingValetta_Finish": 0,
    "Gerudo_Ch_FindingValetta_Step1": 0,
    "Gerudo_Ch_FindingValetta_Step2": 0,
    "Gerudo_Ch_FindingValetta_Find": 0
   },
   "status_snapshot": "未知",
   "title": "寻找芭乐塔",
   "title_source": "QL_Gerudo_Ch_FindingValetta · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_Helmet",
   "name": "决了小镇居民的全部烦恼！\n\n璐菊授予你格鲁德族之友的称号，\n你获得了雷鸣头盔！",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_Helmet",
   "text": {
    "name": "你解决了小镇居民的全部烦恼！璐菊授予你格鲁德族之友的称号，你获得了雷鸣头盔！",
    "desc": null,
    "finish": "从乌尔波扎的时代起，雷鸣头盔就作为格鲁德族之宝被世代相传。实在很难开口叫人家让宝予你，但只要把小镇居民的烦恼部解决就可以借雷鸣头盔一用。",
    "steps": {},
    "name_label": "QL_Gerudo_Ch_Helmet_Name",
    "desc_label": null,
    "finish_label": "QL_Gerudo_Ch_Helmet_Finish",
    "items": [
     {
      "label": null,
      "text": "格鲁德至宝 雷鸣头盔！"
     },
     {
      "label": "QL_Gerudo_Ch_Helmet_Finish",
      "text": "从乌尔波扎的时代起，雷鸣头盔就作为格鲁德族之宝被世代相传。实在很难开口叫人家让宝予你，但只要把小镇居民的烦恼部解决就可以借雷鸣头盔一用。"
     },
     {
      "label": "QL_Gerudo_Ch_Helmet_Name",
      "text": "你解决了小镇居民的全部烦恼！璐菊授予你格鲁德族之友的称号，你获得了雷鸣头盔！"
     }
    ],
    "source": "QL_Gerudo_Ch_Helmet"
   },
   "labels": [
    "QL_Gerudo_Ch_Helmet_Finish",
    "QL_Gerudo_Ch_Helmet_Name"
   ],
   "flags": {
    "ready": "Gerudo_Ch_Helmet_Ready",
    "activated": "Gerudo_Ch_Helmet_Activated",
    "finish": "Gerudo_Ch_Helmet_Finish",
    "steps": [],
    "aux": [
     "Gerudo_Ch_Helmet_Get",
     "Gerudo_Ch_Helmet_first"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_Helmet",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_Helmet_Ready": 0,
    "Gerudo_Ch_Helmet_Activated": 0,
    "Gerudo_Ch_Helmet_Finish": 0,
    "Gerudo_Ch_Helmet_Get": 0,
    "Gerudo_Ch_Helmet_first": 0
   },
   "status_snapshot": "未知",
   "title": "格鲁德至宝 雷鸣头盔！",
   "title_source": "QL_Gerudo_Ch_Helmet · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_Poison",
   "name": "池堆积着垃圾，无法用水。\n原因是有名女性在水渠上游边吃蜜瓜边扔果皮。\n那名女性说，只要给她0颗在格鲁德高地的雪原地带才能摘得的珍贵莓\n她可以考虑停止吃蜜瓜……",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_Poison",
   "text": {
    "name": "取水池堆积着垃圾，无法用水。原因是有名女性在水渠上游边吃蜜瓜边扔果皮。那名女性说，只要给她0颗在格鲁德高地的雪原地带才能摘得的珍贵莓她可以考虑停止吃蜜瓜……",
    "desc": "取水池堆积着垃圾，无法用水。原因是有名女性在水渠上游边吃蜜瓜边扔果皮。那名女性说，只要给她0颗在格鲁德高地的雪原地带才能摘得的珍贵莓她可以考虑停止吃蜜瓜……",
    "finish": "缇克尔一心致力于耕种果田。但是田地的取水池堆积着垃圾，她无法进行作业，似乎很是烦恼。乱扔垃圾的人底是……",
    "steps": {},
    "name_label": "QL_Gerudo_Ch_Poison_Name",
    "desc_label": "QL_Gerudo_Ch_Poison_Name",
    "finish_label": "QL_Gerudo_Ch_Poison_Finish",
    "items": [
     {
      "label": null,
      "text": "谁是犯人？！"
     },
     {
      "label": "QL_Gerudo_Ch_Poison_Finish",
      "text": "缇克尔一心致力于耕种果田。但是田地的取水池堆积着垃圾，她无法进行作业，似乎很是烦恼。乱扔垃圾的人底是……"
     },
     {
      "label": "QL_Gerudo_Ch_Poison_Name",
      "text": "取水池堆积着垃圾，无法用水。原因是有名女性在水渠上游边吃蜜瓜边扔果皮。那名女性说，只要给她0颗在格鲁德高地的雪原地带才能摘得的珍贵莓她可以考虑停止吃蜜瓜……"
     },
     {
      "label": null,
      "text": "取水池堆积着垃圾，无法用水。原因是有名女性在水渠上游边吃蜜瓜边扔果皮。用10颗草莓做交换，她同意不再吃蜜瓜了。这样取水池就不会再有垃圾了吧。快点把这个好消息告诉缇克尔吧。"
     },
     {
      "label": null,
      "text": "缇克尔种下了从凯列邦那里拿到的草莓，并表示草莓成熟后可以自由摘取。取水池也变干净了，接下来只需等待草莓成熟。"
     }
    ],
    "source": "QL_Gerudo_Ch_Poison"
   },
   "labels": [
    "QL_Gerudo_Ch_Poison_Name",
    "QL_Gerudo_Ch_Poison_Desc",
    "QL_Gerudo_Ch_Poison_Finish"
   ],
   "flags": {
    "ready": "Gerudo_Ch_Poison_Ready",
    "activated": "Gerudo_Ch_Poison_Activated",
    "finish": "Gerudo_Ch_Poison_Finish",
    "steps": [
     "Gerudo_Ch_Poison_Step1",
     "Gerudo_Ch_Poison_Step2"
    ],
    "aux": [
     "Gerudo_Ch_Poison_First",
     "Gerudo_Ch_Poison_Ichigo"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_Poison",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_Poison_Ready": 0,
    "Gerudo_Ch_Poison_Activated": 0,
    "Gerudo_Ch_Poison_Finish": 0,
    "Gerudo_Ch_Poison_Step1": 0,
    "Gerudo_Ch_Poison_Step2": 0,
    "Gerudo_Ch_Poison_First": 0,
    "Gerudo_Ch_Poison_Ichigo": 0
   },
   "status_snapshot": "未知",
   "title": "谁是犯人？！",
   "title_source": "QL_Gerudo_Ch_Poison · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_SandWarm",
   "name": "治梅尔埃娜的丈夫需要用到的\n莫尔德拉吉克的肝脏交给了她。\n\n她满心欢喜地回到了丈夫的身边。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_SandWarm",
   "text": {
    "name": "将救治梅尔埃娜的丈夫需要用到的莫尔德拉吉克的肝脏交给了她。她满心欢喜地回到了丈夫的身边。",
    "desc": "梅尔埃娜的丈夫病倒了。想要治好他的病，据说需要尔德拉吉克的肝脏莫尔德拉吉克是一种对振动敏感、会袭击所有靠近自己之物的凶暴怪物。虽然她拼命向大家求助，但好像没人伸出援手……",
    "finish": null,
    "steps": {},
    "name_label": "QL_Gerudo_Ch_SandWarm_Name",
    "desc_label": "QL_Gerudo_Ch_SandWarm_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "莫尔德拉吉克的肝脏"
     },
     {
      "label": "QL_Gerudo_Ch_SandWarm_Desc",
      "text": "梅尔埃娜的丈夫病倒了。想要治好他的病，据说需要尔德拉吉克的肝脏莫尔德拉吉克是一种对振动敏感、会袭击所有靠近自己之物的凶暴怪物。虽然她拼命向大家求助，但好像没人伸出援手……"
     },
     {
      "label": "QL_Gerudo_Ch_SandWarm_Name",
      "text": "将救治梅尔埃娜的丈夫需要用到的莫尔德拉吉克的肝脏交给了她。她满心欢喜地回到了丈夫的身边。"
     }
    ],
    "source": "QL_Gerudo_Ch_SandWarm"
   },
   "labels": [
    "QL_Gerudo_Ch_SandWarm_Desc",
    "QL_Gerudo_Ch_SandWarm_Name",
    "����ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001T\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000$\u0000\u0000\u0000�\\\u0014_�b�T\tQKv����\u000f\u0000\u0000h�\\\u0014W�Z\u001cv�N\bY+u�P\u0012N�0\u0002\u0000\n`�l�Y}N�v�u��\f\u0000\ncn���\u0000��\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000��\\\u0014_�b�T\tQKv����\u000f\u0000\u000e\u0000\u0000\u0000"
   ],
   "flags": {
    "ready": "Gerudo_Ch_SandWarm_Ready",
    "activated": "Gerudo_Ch_SandWarm_Activated",
    "finish": "Gerudo_Ch_SandWarm_Finish",
    "steps": [],
    "aux": [
     "Gerudo_Ch_SandWarm_First"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_SandWarm",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_SandWarm_Ready": 1,
    "Gerudo_Ch_SandWarm_Activated": 1,
    "Gerudo_Ch_SandWarm_Finish": 0,
    "Gerudo_Ch_SandWarm_First": 0
   },
   "status_snapshot": "进行中",
   "title": "莫尔德拉吉克的肝脏",
   "title_source": "QL_Gerudo_Ch_SandWarm · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_SecretClub",
   "name": "清了秘密暗号。\n\n暗号是“GSC◆”。\n\n这样就可以随时自由进出啦。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_SecretClub",
   "text": {
    "name": "你弄清了秘密暗号。暗号是“GSC◆”。这样就可以随时自由进出啦。",
    "desc": null,
    "finish": "服装店时尚激情有个只有会员才能进入的秘密后门。想进门就需要会员才知道的密暗号而且据说只要对错一次暗号，就要再等一天才能再次尝试。",
    "steps": {},
    "name_label": "QL_Gerudo_Ch_SecretClub_Name",
    "desc_label": null,
    "finish_label": "QL_Gerudo_Ch_SecretClub_Finish",
    "items": [
     {
      "label": null,
      "text": "秘密俱乐部里的秘密"
     },
     {
      "label": "QL_Gerudo_Ch_SecretClub_Finish",
      "text": "服装店时尚激情有个只有会员才能进入的秘密后门。想进门就需要会员才知道的密暗号而且据说只要对错一次暗号，就要再等一天才能再次尝试。"
     },
     {
      "label": "QL_Gerudo_Ch_SecretClub_Name",
      "text": "你弄清了秘密暗号。暗号是“GSC◆”。这样就可以随时自由进出啦。"
     }
    ],
    "source": "QL_Gerudo_Ch_SecretClub"
   },
   "labels": [
    "QL_Gerudo_Ch_SecretClub_Finish",
    "QL_Gerudo_Ch_SecretClub_Name"
   ],
   "flags": {
    "ready": "Gerudo_Ch_SecretClub_Ready",
    "activated": "Gerudo_Ch_SecretClub_Activated",
    "finish": "Gerudo_Ch_SecretClub_Finish",
    "steps": [],
    "aux": [
     "Gerudo_Ch_SecretClub_CodeA",
     "Gerudo_Ch_SecretClub_CodeB",
     "Gerudo_Ch_SecretClub_CodeC",
     "Gerudo_Ch_SecretClub_CodeD",
     "Gerudo_Ch_SecretClub_CodeGet",
     "Gerudo_Ch_SecretClub_Stop"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_SecretClub",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_SecretClub_Ready": 1,
    "Gerudo_Ch_SecretClub_Activated": 1,
    "Gerudo_Ch_SecretClub_Finish": 0,
    "Gerudo_Ch_SecretClub_CodeA": 0,
    "Gerudo_Ch_SecretClub_CodeB": 0,
    "Gerudo_Ch_SecretClub_CodeC": 0,
    "Gerudo_Ch_SecretClub_CodeD": 1,
    "Gerudo_Ch_SecretClub_CodeGet": 0,
    "Gerudo_Ch_SecretClub_Stop": 1
   },
   "status_snapshot": "进行中",
   "title": "秘密俱乐部里的秘密",
   "title_source": "QL_Gerudo_Ch_SecretClub · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_SnowBoots",
   "name": "格鲁德高地的顶峰\n找到了第八位英雄的剑。\n\n将这把剑拍成照片，\n伯腾萨按照约定送给你雪地靴 。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_SnowBoots",
   "text": {
    "name": "你在格鲁德高地的顶峰找到了第八位英雄的剑。将这把剑拍成照片，伯腾萨按照约定送给你雪地靴 。",
    "desc": null,
    "finish": "第八位英雄其实曾持有虽然可能是伯腾萨乱说的，但还是值得找找看。被认为是第八位英雄所持有的很有可能沉睡在格鲁德高地的某处。给伯腾萨看第八位英雄的剑的照片，获取地靴。",
    "steps": {},
    "name_label": "QL_Gerudo_Ch_SnowBoots_Name",
    "desc_label": null,
    "finish_label": "QL_Gerudo_Ch_SnowBoots_Finish",
    "items": [
     {
      "label": null,
      "text": "被遗忘的剑"
     },
     {
      "label": "QL_Gerudo_Ch_SnowBoots_Finish",
      "text": "第八位英雄其实曾持有虽然可能是伯腾萨乱说的，但还是值得找找看。被认为是第八位英雄所持有的很有可能沉睡在格鲁德高地的某处。给伯腾萨看第八位英雄的剑的照片，获取地靴。"
     },
     {
      "label": "QL_Gerudo_Ch_SnowBoots_Name",
      "text": "你在格鲁德高地的顶峰找到了第八位英雄的剑。将这把剑拍成照片，伯腾萨按照约定送给你雪地靴 。"
     }
    ],
    "source": "QL_Gerudo_Ch_SnowBoots"
   },
   "labels": [
    "QL_Gerudo_Ch_SnowBoots_Finish",
    "QL_Gerudo_Ch_SnowBoots_Name"
   ],
   "flags": {
    "ready": "Gerudo_Ch_SnowBoots_Ready",
    "activated": "Gerudo_Ch_SnowBoots_Activated",
    "finish": "Gerudo_Ch_SnowBoots_Finish",
    "steps": [],
    "aux": [
     "Gerudo_Ch_SnowBoots_Boots",
     "Gerudo_Ch_SnowBoots_First_boy",
     "Gerudo_Ch_SnowBoots_First_lady",
     "Gerudo_Ch_SnowBoots_Full",
     "Gerudo_Ch_SnowBoots_sand_first"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_SnowBoots",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_SnowBoots_Ready": 0,
    "Gerudo_Ch_SnowBoots_Activated": 0,
    "Gerudo_Ch_SnowBoots_Finish": 0,
    "Gerudo_Ch_SnowBoots_Boots": 0,
    "Gerudo_Ch_SnowBoots_First_boy": 0,
    "Gerudo_Ch_SnowBoots_First_lady": 0,
    "Gerudo_Ch_SnowBoots_Full": 0,
    "Gerudo_Ch_SnowBoots_sand_first": 0
   },
   "status_snapshot": "未知",
   "title": "被遗忘的剑",
   "title_source": "QL_Gerudo_Ch_SnowBoots · text[0] · 无标签"
  },
  {
   "id": "Gerudo_Ch_SnowMT",
   "name": "德地区流传着“七位英雄”的传说。\n但除此之外还存在着八位雄，\n至今仍由信奉者供奉于鲁德高地…\n寻找第八位英雄的身姿，\n将其半身拍成照片\n再将照片拿给伯腾萨看吧。\n关于“七位英雄”，\n格鲁德小镇上好像有了解详情的人。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_Ch_SnowMT",
   "text": {
    "name": "格鲁德地区流传着“七位英雄”的传说。但除此之外还存在着八位雄，至今仍由信奉者供奉于鲁德高地…寻找第八位英雄的身姿，将其半身拍成照片再将照片拿给伯腾萨看吧。关于“七位英雄”，格鲁德小镇上好像有了解详情的人。",
    "desc": "第八位英雄",
    "finish": null,
    "steps": {},
    "name_label": "QL_Gerudo_Ch_SnowMT_Name",
    "desc_label": "QL_Gerudo_Ch_SnowMT_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Gerudo_Ch_SnowMT_Desc",
      "text": "第八位英雄"
     },
     {
      "label": "QL_Gerudo_Ch_SnowMT_Name",
      "text": "格鲁德地区流传着“七位英雄”的传说。但除此之外还存在着八位雄，至今仍由信奉者供奉于鲁德高地…寻找第八位英雄的身姿，将其半身拍成照片再将照片拿给伯腾萨看吧。关于“七位英雄”，格鲁德小镇上好像有了解详情的人。"
     },
     {
      "label": "QL_Gerudo_Ch_SnowMT_Desc",
      "text": "第八位英雄至今仍由信奉者供奉于格鲁德高地。将第八位英雄的身姿拍成照片，伯腾萨按照约定送给你沙地靴 。"
     }
    ],
    "source": "QL_Gerudo_Ch_SnowMT"
   },
   "labels": [
    "QL_Gerudo_Ch_SnowMT_Name",
    "QL_Gerudo_Ch_SnowMT_Desc",
    "QL_Gerudo_Ch_SnowMT_Desc"
   ],
   "flags": {
    "ready": "Gerudo_Ch_SnowMT_Ready",
    "activated": "Gerudo_Ch_SnowMT_Activated",
    "finish": "Gerudo_Ch_SnowMT_Finish",
    "steps": [],
    "aux": [
     "Gerudo_Ch_SnowMT_Boots",
     "Gerudo_Ch_SnowMT_First",
     "Gerudo_Ch_SnowMT_boots_get",
     "Gerudo_Ch_SnowMT_full"
    ]
   },
   "source": [
    "QL_Gerudo_Ch_SnowMT",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_Ch_SnowMT_Ready": 0,
    "Gerudo_Ch_SnowMT_Activated": 0,
    "Gerudo_Ch_SnowMT_Finish": 0,
    "Gerudo_Ch_SnowMT_Boots": 0,
    "Gerudo_Ch_SnowMT_First": 0,
    "Gerudo_Ch_SnowMT_boots_get": 0,
    "Gerudo_Ch_SnowMT_full": 0
   },
   "status_snapshot": "未知",
   "title": "第八位英雄",
   "title_source": "QL_Gerudo_Ch_SnowMT · text[0] · 标签:QL_Gerudo_Ch_SnowMT_Desc"
  },
  {
   "id": "Gerudo_HorseBuyer",
   "name": "途中不慎丢失马匹而烦恼的兹基，\n似乎很中意你带来的这匹马。\n\n以00卢比价格将这匹马卖给了他。",
   "category": "迷你挑战",
   "subcategory": "格鲁德地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Gerudo_HorseBuyer",
   "text": {
    "name": "因旅途中不慎丢失马匹而烦恼的兹基，似乎很中意你带来的这匹马。以00卢比价格将这匹马卖给了他。",
    "desc": null,
    "finish": "在格鲁德地区的大道上遇到旅行者兹基，他好像因为旅途中不慎丢失了马匹而烦恼着。他说只要带来马匹，他会以00卢比下。但马匹必须是适合兹基体格的小适中的马行。",
    "steps": {},
    "name_label": "QL_Gerudo_HorseBuyer_Name",
    "desc_label": null,
    "finish_label": "QL_Gerudo_HorseBuyer_Finish",
    "items": [
     {
      "label": null,
      "text": "我要买下这匹马！"
     },
     {
      "label": "QL_Gerudo_HorseBuyer_Finish",
      "text": "在格鲁德地区的大道上遇到旅行者兹基，他好像因为旅途中不慎丢失了马匹而烦恼着。他说只要带来马匹，他会以00卢比下。但马匹必须是适合兹基体格的小适中的马行。"
     },
     {
      "label": "QL_Gerudo_HorseBuyer_Name",
      "text": "因旅途中不慎丢失马匹而烦恼的兹基，似乎很中意你带来的这匹马。以00卢比价格将这匹马卖给了他。"
     }
    ],
    "source": "QL_Gerudo_HorseBuyer"
   },
   "labels": [
    "QL_Gerudo_HorseBuyer_Finish",
    "QL_Gerudo_HorseBuyer_Name"
   ],
   "flags": {
    "ready": "Gerudo_HorseBuyer_Ready",
    "activated": "Gerudo_HorseBuyer_Activated",
    "finish": "Gerudo_HorseBuyer_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Gerudo_HorseBuyer",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Gerudo_HorseBuyer_Ready": 1,
    "Gerudo_HorseBuyer_Activated": 0,
    "Gerudo_HorseBuyer_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "我要买下这匹马！",
   "title_source": "QL_Gerudo_HorseBuyer · text[0] · 无标签"
  },
  {
   "id": "Gerudo_tsukamidake",
   "name": "5朵速速蘑菇交给\n格鲁德峡谷驿站的匹鲁艾，\n和他交换了钻石。\n但这些好像还远不能满足他。\n\n今后如果你采集到5朵速蘑菇，\n他会用市价倍价格买下。",
   "category": "主线任务",
   "subcategory": "四神兽·格鲁德",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Gerudo_tsukamidake",
   "text": {
    "name": "将55朵速速蘑菇交给格鲁德峡谷驿站的匹鲁艾，和他交换了钻石。但这些好像还远不能满足他。今后如果你采集到5朵速蘑菇，他会用市价倍价格买下。",
    "desc": null,
    "finish": "格鲁德峡谷驿站的匹鲁艾似乎很喜欢吃速速蘑菇。但速速蘑菇生长在悬崖之上，匹鲁艾无法亲自前去采集。他提议用珍贵的钻石作交换，希望你摘回5朵速速蘑菇他。",
    "steps": {},
    "name_label": "QL_Gerudo_tsukamidake_Name",
    "desc_label": null,
    "finish_label": "QL_Gerudo_tsukamidake_Finish",
    "items": [
     {
      "label": null,
      "text": "速速蘑菇ＧｏＧｏ！"
     },
     {
      "label": "QL_Gerudo_tsukamidake_Finish",
      "text": "格鲁德峡谷驿站的匹鲁艾似乎很喜欢吃速速蘑菇。但速速蘑菇生长在悬崖之上，匹鲁艾无法亲自前去采集。他提议用珍贵的钻石作交换，希望你摘回5朵速速蘑菇他。"
     },
     {
      "label": "QL_Gerudo_tsukamidake_Name",
      "text": "将55朵速速蘑菇交给格鲁德峡谷驿站的匹鲁艾，和他交换了钻石。但这些好像还远不能满足他。今后如果你采集到5朵速蘑菇，他会用市价倍价格买下。"
     }
    ],
    "source": "QL_Gerudo_tsukamidake"
   },
   "labels": [
    "QL_Gerudo_tsukamidake_Finish",
    "QL_Gerudo_tsukamidake_Name"
   ],
   "flags": {
    "ready": "Gerudo_tsukamidake_Ready",
    "activated": "Gerudo_tsukamidake_Activated",
    "finish": "Gerudo_tsukamidake_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Gerudo_tsukamidake",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Gerudo_tsukamidake_Ready": 1,
    "Gerudo_tsukamidake_Activated": 1,
    "Gerudo_tsukamidake_Finish": 0
   },
   "status_snapshot": "进行中",
   "title": "速速蘑菇ＧｏＧｏ！",
   "title_source": "QL_Gerudo_tsukamidake · text[0] · 无标签"
  },
  {
   "id": "Get_MasterSword",
   "name": "得了传说中的驱魔之剑“师之剑。\n或许是心理作用，你觉得剑似乎也很高兴……\n\n塞尔达公主现仍在海拉鲁城堡中\n为抑制灾厄而战斗着……\n她坚信你一定会去找她……！\n\n以你现在的实力，能够拯救她吗……",
   "category": "主线任务",
   "subcategory": "大师剑",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Get_MasterSword",
   "text": {
    "name": "你获得了传说中的驱魔之剑“师之剑。或许是心理作用，你觉得剑似乎也很高兴……塞尔达公主现仍在海拉鲁城堡中为抑制灾厄而战斗着……她坚信你一定会去找她……！以你现在的实力，能够拯救她吗……",
    "desc": "勇者之剑",
    "finish": null,
    "steps": {},
    "name_label": "QL_Get_MasterSword_Name",
    "desc_label": "QL_Get_MasterSword_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Get_MasterSword_Desc",
      "text": "勇者之剑"
     },
     {
      "label": "QL_Get_MasterSword_Desc",
      "text": "在穿过迷失的森林后到达的克洛格森林里，沉睡着一把据说能打倒灾厄的魔之剑一棵叫做德库树的参天古木告诉你，想要得到那把剑，就需要接受剑的考验……虽然在100年前，你好像得到过那把剑，但如今的你还能将它拔出来吗……"
     },
     {
      "label": "QL_Get_MasterSword_Name",
      "text": "你获得了传说中的驱魔之剑“师之剑。或许是心理作用，你觉得剑似乎也很高兴……塞尔达公主现仍在海拉鲁城堡中为抑制灾厄而战斗着……她坚信你一定会去找她……！以你现在的实力，能够拯救她吗……"
     }
    ],
    "source": "QL_Get_MasterSword"
   },
   "labels": [
    "QL_Get_MasterSword_Desc",
    "QL_Get_MasterSword_Desc",
    "QL_Get_MasterSword_Name"
   ],
   "flags": {
    "ready": "Get_MasterSword_Ready",
    "activated": "Get_MasterSword_Activated",
    "finish": "Get_MasterSword_Finish",
    "steps": [],
    "aux": [
     "Get_MasterSword_Deku",
     "Get_MasterSword_FirstFailure"
    ]
   },
   "source": [
    "QL_Get_MasterSword",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Get_MasterSword_Ready": 1,
    "Get_MasterSword_Activated": 0,
    "Get_MasterSword_Finish": 0,
    "Get_MasterSword_Deku": 0,
    "Get_MasterSword_FirstFailure": 0
   },
   "status_snapshot": "未开始",
   "title": "勇者之剑",
   "title_source": "QL_Get_MasterSword · text[0] · 标签:QL_Get_MasterSword_Desc"
  },
  {
   "id": "Giant_ZoraMini",
   "name": "功讨伐了拉尔斯池塘的西诺克斯。\n\n把这个好消息告诉卓拉领地的尔伏。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_Giant_ZoraMini",
   "text": {
    "name": "你成功讨伐了拉尔斯池塘的西诺克斯。把这个好消息告诉卓拉领地的尔伏。",
    "desc": "卓拉领地的托尔伏交予你讨伐诺克斯任务。那头巨人据说在尔斯池塘",
    "finish": null,
    "steps": {
     "QL_Giant_ZoraMini_Step1": "卓拉领地的托尔伏交予你讨伐诺克斯任务。那头巨人据说在尔斯池塘"
    },
    "name_label": "QL_Giant_ZoraMini_Name",
    "desc_label": "QL_Giant_ZoraMini_Step1",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "拉尔斯池塘之巨人讨伐"
     },
     {
      "label": "QL_Giant_ZoraMini_Step1",
      "text": "卓拉领地的托尔伏交予你讨伐诺克斯任务。那头巨人据说在尔斯池塘"
     },
     {
      "label": "QL_Giant_ZoraMini_Name",
      "text": "你成功讨伐了拉尔斯池塘的西诺克斯。把这个好消息告诉卓拉领地的尔伏。"
     },
     {
      "label": null,
      "text": "你成功讨伐了拉尔斯池塘的巨人。把好消息告诉给托尔伏，得到了夸奖。"
     }
    ],
    "source": "QL_Giant_ZoraMini"
   },
   "labels": [
    "QL_Giant_ZoraMini_Step1",
    "QL_Giant_ZoraMini_Name",
    "QL_Giant_ZoraMini_Desc"
   ],
   "flags": {
    "ready": "Giant_ZoraMini_Ready",
    "activated": "Giant_ZoraMini_Activated",
    "finish": "Giant_ZoraMini_Finish",
    "steps": [
     "Giant_ZoraMini_Step1"
    ],
    "aux": [
     "Giant_ZoraMini_Punitive"
    ]
   },
   "source": [
    "QL_Giant_ZoraMini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Giant_ZoraMini_Ready": 0,
    "Giant_ZoraMini_Activated": 0,
    "Giant_ZoraMini_Finish": 0,
    "Giant_ZoraMini_Step1": 0,
    "Giant_ZoraMini_Punitive": 0
   },
   "status_snapshot": "未知",
   "title": "拉尔斯池塘之巨人讨伐",
   "title_source": "QL_Giant_ZoraMini · text[0] · 无标签"
  },
  {
   "id": "GodTree",
   "name": "兹基那里接受了克洛格试练。\n\n“吞铁之树为你指明道路。\n  唯有操控之力将之看透。”\n\n这段话想表达什么意思呢？",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_GodTree",
   "text": {
    "name": "从阿兹基那里接受了克洛格试练。“吞铁之树为你指明道路。  唯有操控之力将之看透。”这段话想表达什么意思呢？",
    "desc": "操控力的试练",
    "finish": null,
    "steps": {},
    "name_label": "QL_GodTree_Name",
    "desc_label": "QL_GodTree_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_GodTree_Desc",
      "text": "操控力的试练"
     },
     {
      "label": "QL_GodTree_Name",
      "text": "从阿兹基那里接受了克洛格试练。“吞铁之树为你指明道路。  唯有操控之力将之看透。”这段话想表达什么意思呢？"
     },
     {
      "label": "QL_GodTree_Desc",
      "text": "“吞铁之树为你指明道路。  唯有操控之力将之看透。”一路追寻吞食铁块之树，在尽头发现了一座古代神庙。"
     }
    ],
    "source": "QL_GodTree"
   },
   "labels": [
    "QL_GodTree_Name",
    "QL_GodTree_Desc",
    "QL_GodTree_Desc"
   ],
   "flags": {
    "ready": "GodTree_Ready",
    "activated": "GodTree_Activated",
    "finish": "GodTree_Finish",
    "steps": [
     "GodTree_Step010"
    ],
    "aux": [
     "GodTree_Dis_Tree",
     "GodTree_Dis_Tree2",
     "GodTree_Enemy_Pop"
    ]
   },
   "source": [
    "QL_GodTree",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GodTree_Ready": 1,
    "GodTree_Activated": 0,
    "GodTree_Finish": 0,
    "GodTree_Step010": 0,
    "GodTree_Dis_Tree": 0,
    "GodTree_Dis_Tree2": 0,
    "GodTree_Enemy_Pop": 0
   },
   "status_snapshot": "未开始",
   "title": "操控力的试练",
   "title_source": "QL_GodTree · text[0] · 标签:QL_GodTree_Desc"
  },
  {
   "id": "GoronCamp",
   "name": "那些字干什么，兄弟？！\n这些文字不应该出现在这里！\n你最好立即向上级汇报！！！",
   "category": "主线任务",
   "subcategory": "四神兽·鼓隆",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_GoronCamp",
   "text": {
    "name": "你看那些字干什么，兄弟？！这些文字不应该出现在这里！你最好立即向上级汇报！！！",
    "desc": "“你打开冒险笔记干什么鼓咯！现在正在训练当中鼓咯！！快去攀登顶峰回来鼓咯！！！”——巴恺忒",
    "finish": null,
    "steps": {},
    "name_label": "QL_GoronCamp_Name",
    "desc_label": "QL_GoronCamp_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "鼓隆的毅力崖挑战"
     },
     {
      "label": null,
      "text": "你即将接受来自热血的鼓隆三兄弟的严～峻训练。其名为登毅力崖挑战！！准备好了就向巴恺忒搭话吧。"
     },
     {
      "label": "QL_GoronCamp_Desc",
      "text": "“你打开冒险笔记干什么鼓咯！现在正在训练当中鼓咯！！快去攀登顶峰回来鼓咯！！！”——巴恺忒"
     },
     {
      "label": "QL_GoronCamp_Name",
      "text": "你看那些字干什么，兄弟？！这些文字不应该出现在这里！你最好立即向上级汇报！！！"
     },
     {
      "label": null,
      "text": "你完成了攀崖训练，让三兄弟离开了神庙的入口！攀崖好像可以无限次挑战，而且还有更难的路线等待着你。"
     }
    ],
    "source": "QL_GoronCamp"
   },
   "labels": [
    "QL_GoronCamp_Desc",
    "QL_GoronCamp_Name",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0018\u0000\u0000\u0000*\u0000\u0000\u0000�\u0000\u0000\u0001\u000e\u0000\u0000\u0001b�\u0013��v�k�R�]\u0016c\u0011b\u0018\u0000\u0000O`Ss\\\u0006c�S�ge��p�@v�\u0000\n�\u0013��N\tQD_\u001fv�N%�^\\���~�0\u0002\u0000\n\u0000\nQvT\rN:\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000e\u0000v{k�"
   ],
   "flags": {
    "ready": "GoronCamp_Ready",
    "activated": "GoronCamp_Activated",
    "finish": "GoronCamp_Finish",
    "steps": [],
    "aux": [
     "GoronCamp_BestScore",
     "GoronCamp_GameReady",
     "GoronCamp_ResetGame"
    ]
   },
   "source": [
    "QL_GoronCamp",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "GoronCamp_Ready": 1,
    "GoronCamp_Activated": 0,
    "GoronCamp_Finish": 0,
    "GoronCamp_BestScore": 0,
    "GoronCamp_GameReady": 0,
    "GoronCamp_ResetGame": 0
   },
   "status_snapshot": "未开始",
   "title": "鼓隆的毅力崖挑战",
   "title_source": "QL_GoronCamp · text[0] · 无标签"
  },
  {
   "id": "GoronCamp_mini",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "鼓隆地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_GoronCamp_mini",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_GoronCamp_mini"
   },
   "labels": [
    "QL_GoronCamp_mini_GameReady",
    "QL_GoronCamp_mini_ResetGame",
    "������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0000\u0000\u0000����������"
   ],
   "flags": {
    "ready": "GoronCamp_mini_Ready",
    "activated": "GoronCamp_mini_Activated",
    "finish": "GoronCamp_mini_Finish",
    "steps": [],
    "aux": [
     "GoronCamp_mini_ChoiceExclude",
     "GoronCamp_mini_FirstTalk",
     "GoronCamp_mini_GameReady",
     "GoronCamp_mini_ResetGame"
    ]
   },
   "source": [
    "QL_GoronCamp_mini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GoronCamp_mini_Ready": 0,
    "GoronCamp_mini_Activated": 0,
    "GoronCamp_mini_Finish": 0,
    "GoronCamp_mini_ChoiceExclude": 0,
    "GoronCamp_mini_FirstTalk": 0,
    "GoronCamp_mini_GameReady": 0,
    "GoronCamp_mini_ResetGame": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "GoronCityMini_BeatGolem",
   "name": "打倒了鲁尼亚湖的岩巨人\n把这个好消息告诉呼戈吧。",
   "category": "迷你挑战",
   "subcategory": "鼓隆地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_GoronCityMini_BeatGolem",
   "text": {
    "name": "成功打倒了鲁尼亚湖的岩巨人把这个好消息告诉呼戈吧。",
    "desc": "成功打倒了鲁尼亚湖的岩巨人把这个好消息告诉呼戈吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_GoronCityMini_BeatGolem_Name",
    "desc_label": "QL_GoronCityMini_BeatGolem_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_GoronCityMini_BeatGolem_Desc",
      "text": "继承衣钵之道"
     },
     {
      "label": null,
      "text": "呼戈为了能被师父伯洛杭认可，必须要打倒鲁尼亚湖的岩巨人但那里并不是轻易能到达的地方，他好像正在寻找能帮他打倒岩巨人人。"
     },
     {
      "label": "QL_GoronCityMini_BeatGolem_Name",
      "text": "成功打倒了鲁尼亚湖的岩巨人把这个好消息告诉呼戈吧。"
     },
     {
      "label": null,
      "text": "你打倒了达鲁尼亚湖中的熔岩巨人，并把这个好消息告诉给呼戈。获得100卢比作为谢礼。"
     }
    ],
    "source": "QL_GoronCityMini_BeatGolem"
   },
   "labels": [
    "QL_GoronCityMini_BeatGolem_Name",
    "QL_GoronCityMini_BeatGolem_Desc",
    "QL_GoronCityMini_BeatGolem_Desc"
   ],
   "flags": {
    "ready": "GoronCityMini_BeatGolem_Ready",
    "activated": "GoronCityMini_BeatGolem_Activated",
    "finish": "GoronCityMini_BeatGolem_Finish",
    "steps": [],
    "aux": [
     "GoronCityMini_BeatGolem_Beated"
    ]
   },
   "source": [
    "QL_GoronCityMini_BeatGolem",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GoronCityMini_BeatGolem_Ready": 1,
    "GoronCityMini_BeatGolem_Activated": 0,
    "GoronCityMini_BeatGolem_Finish": 0,
    "GoronCityMini_BeatGolem_Beated": 0
   },
   "status_snapshot": "未开始",
   "title": "继承衣钵之道",
   "title_source": "QL_GoronCityMini_BeatGolem · text[0] · 标签:QL_GoronCityMini_BeatGolem_Desc"
  },
  {
   "id": "GoronMini_ImportGem",
   "name": "拉用高价向你买下10颗琥珀。\n\n拉梅拉还想采购更多的宝石，\n今后只要拿宝石过去，\n她好像都会以高价买下。",
   "category": "迷你挑战",
   "subcategory": "鼓隆地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_GoronMini_ImportGem",
   "text": {
    "name": "拉梅拉用高价向你买下10颗琥珀。拉梅拉还想采购更多的宝石，今后只要拿宝石过去，她好像都会以高价买下。",
    "desc": null,
    "finish": "据说宝石批发商拉梅拉会用高价收购宝石。收集0颗琥珀给拉梅拉吧。",
    "steps": {},
    "name_label": "QL_GoronMini_ImportGem_Name",
    "desc_label": null,
    "finish_label": "QL_GoronMini_ImportGem_Finish",
    "items": [
     {
      "label": null,
      "text": "宝石进口商"
     },
     {
      "label": "QL_GoronMini_ImportGem_Finish",
      "text": "据说宝石批发商拉梅拉会用高价收购宝石。收集0颗琥珀给拉梅拉吧。"
     },
     {
      "label": "QL_GoronMini_ImportGem_Name",
      "text": "拉梅拉用高价向你买下10颗琥珀。拉梅拉还想采购更多的宝石，今后只要拿宝石过去，她好像都会以高价买下。"
     }
    ],
    "source": "QL_GoronMini_ImportGem"
   },
   "labels": [
    "QL_GoronMini_ImportGem_Finish",
    "QL_GoronMini_ImportGem_Name"
   ],
   "flags": {
    "ready": "GoronMini_ImportGem_Ready",
    "activated": "GoronMini_ImportGem_Activated",
    "finish": "GoronMini_ImportGem_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_GoronMini_ImportGem",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GoronMini_ImportGem_Ready": 0,
    "GoronMini_ImportGem_Activated": 0,
    "GoronMini_ImportGem_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "宝石进口商",
   "title_source": "QL_GoronMini_ImportGem · text[0] · 无标签"
  },
  {
   "id": "GoronMini_WallCrackTBox",
   "name": "之山的秘密",
   "category": "迷你挑战",
   "subcategory": "鼓隆地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_GoronMini_WallCrackTBox",
   "text": {
    "name": "死亡之山的秘密",
    "desc": "从鼓隆温泉去奥尔汀桥的途中，发现了埋在岩石中的岩棒这就是科普思所说的物？将获得的岩棒科普思看看吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_GoronMini_WallCrackTBox_Name",
    "desc_label": "QL_GoronMini_WallCrackTBox_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_GoronMini_WallCrackTBox_Name",
      "text": "死亡之山的秘密"
     },
     {
      "label": null,
      "text": "在鼓隆温泉泡澡的少年科普思喃喃自语着：“我从介里去奥尔汀桥的途中，　仓了物咯！　是灰常酷的咯哦！　如果能找出来，　你就阔以拿走～咕咯！”虽然听不太懂他在说什么，但好像有什么……"
     },
     {
      "label": "QL_GoronMini_WallCrackTBox_Name",
      "text": "从鼓隆温泉去奥尔汀桥的途中，发现了埋在岩石中的岩棒这就是科普思所说的物？将获得的岩棒科普思看看吧。"
     },
     {
      "label": null,
      "text": "鼓隆族少年科普思所藏起来的宝物就是这根削岩棒。他好像要把这根削岩棒直接送给你。"
     }
    ],
    "source": "QL_GoronMini_WallCrackTBox"
   },
   "labels": [
    "QL_GoronMini_WallCrackTBox_Name",
    "QL_GoronMini_WallCrackTBox_Name",
    "QL_GoronMini_WallCrackTBox_Desc"
   ],
   "flags": {
    "ready": "GoronMini_WallCrackTBox_Ready",
    "activated": "GoronMini_WallCrackTBox_Activated",
    "finish": "GoronMini_WallCrackTBox_Finish",
    "steps": [],
    "aux": [
     "GoronMini_WallCrackTBox_Get",
     "GoronMini_WallCrackTBox_GetOn"
    ]
   },
   "source": [
    "QL_GoronMini_WallCrackTBox",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "GoronMini_WallCrackTBox_Ready": 1,
    "GoronMini_WallCrackTBox_Activated": 0,
    "GoronMini_WallCrackTBox_Finish": 0,
    "GoronMini_WallCrackTBox_Get": 0,
    "GoronMini_WallCrackTBox_GetOn": 0
   },
   "status_snapshot": "未开始",
   "title": "死亡之山的秘密",
   "title_source": "QL_GoronMini_WallCrackTBox · text[0] · 标签:QL_GoronMini_WallCrackTBox_Name"
  },
  {
   "id": "Goron_Steakrock",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "鼓隆地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Goron_Steakrock_Ready",
    "activated": "Goron_Steakrock_Activated",
    "finish": "Goron_Steakrock_Finish",
    "steps": [
     "Goron_Steakrock_Step1"
    ],
    "aux": [
     "Goron_Steakrock_Goron_get_Bigbomb",
     "Goron_Steakrock_get_bigbomb",
     "Goron_Steakrock_get_bigbomb_carry"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Goron_Steakrock_Ready": 0,
    "Goron_Steakrock_Activated": 0,
    "Goron_Steakrock_Finish": 0,
    "Goron_Steakrock_Step1": 0,
    "Goron_Steakrock_Goron_get_Bigbomb": 0,
    "Goron_Steakrock_get_bigbomb": 0,
    "Goron_Steakrock_get_bigbomb_carry": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "GoronsRock",
   "name": "在何方？",
   "category": "主线任务",
   "subcategory": "四神兽·鼓隆",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_GoronsRock",
   "text": {
    "name": "布莱顿的弟弟贡哥隆尚未归家……他好像是为了挖掘勇者的秘密而前去马尔鼓池塘西南方的尔鼓坑道…",
    "desc": "布莱顿的弟弟贡哥隆尚未归家……他好像是为了挖掘勇者的秘密而前去马尔鼓池塘西南方的尔鼓坑道…",
    "finish": null,
    "steps": {
     "QL_GoronsRock_Step005": "未使用 * 待完善"
    },
    "name_label": "QL_GoronsRock_Desc",
    "desc_label": "QL_GoronsRock_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_GoronsRock_Name",
      "text": "弟弟在何方？"
     },
     {
      "label": "QL_GoronsRock_Desc",
      "text": "布莱顿的弟弟贡哥隆尚未归家……他好像是为了挖掘勇者的秘密而前去马尔鼓池塘西南方的尔鼓坑道…"
     },
     {
      "label": null,
      "text": "知道贡哥隆真正目的的哥哥布莱顿希望你能帮忙取回一块斯岩石斯岩石像就在马尔鼓坑道前坡道尽头的托洛鼓悬崖附近。"
     },
     {
      "label": null,
      "text": "知道贡哥隆真正目的的哥哥布莱顿希望你能帮忙取回一块斯岩石拿着斯岩石往等在马尔鼓坑道的布莱顿兄弟那里吧。"
     },
     {
      "label": null,
      "text": "知道贡哥隆真正目的的哥哥布莱顿希望你能帮忙取回一块斯岩石拿着斯岩石往等在马尔鼓坑道的布莱顿兄弟那里吧。"
     },
     {
      "label": null,
      "text": "未使用 * 待完善"
     },
     {
      "label": "QL_GoronsRock_Step005",
      "text": "未使用 * 待完善"
     },
     {
      "label": null,
      "text": "饱食了美味的香烤里脊岩后，贡哥隆恢复了精神并帮你弄碎了岩石！岩石之后隐藏着一座古代神庙。贡哥隆看着弟弟布莱顿变得更加壮实的背影，似乎很是满意。"
     }
    ],
    "source": "QL_GoronsRock"
   },
   "labels": [
    "QL_GoronsRock_Desc",
    "QL_GoronsRock_Name",
    "QL_GoronsRock_Name",
    "QL_GoronsRock_Name",
    "QL_GoronsRock_Step005"
   ],
   "flags": {
    "ready": "GoronsRock_Ready",
    "activated": "GoronsRock_Activated",
    "finish": "GoronsRock_Finish",
    "steps": [
     "GoronsRock_Step005",
     "GoronsRock_Step010",
     "GoronsRock_Step020",
     "GoronsRock_Step030",
     "GoronsRock_Step040"
    ],
    "aux": [
     "GoronsRock_Break",
     "GoronsRock_Carry",
     "GoronsRock_Cooking",
     "GoronsRock_Dish",
     "GoronsRock_DungeonAppear",
     "GoronsRock_Father_Disp"
    ]
   },
   "source": [
    "QL_GoronsRock",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "GoronsRock_Ready": 1,
    "GoronsRock_Activated": 0,
    "GoronsRock_Finish": 0,
    "GoronsRock_Step005": 0,
    "GoronsRock_Step010": 0,
    "GoronsRock_Step020": 0,
    "GoronsRock_Step030": 0,
    "GoronsRock_Step040": 0,
    "GoronsRock_Break": 0,
    "GoronsRock_Carry": 0,
    "GoronsRock_Cooking": 0,
    "GoronsRock_Dish": 0,
    "GoronsRock_DungeonAppear": 0,
    "GoronsRock_Father_Disp": 0
   },
   "status_snapshot": "未开始",
   "title": "弟弟在何方？",
   "title_source": "QL_GoronsRock · text[0] · 标签:QL_GoronsRock_Name"
  },
  {
   "id": "GotoZoraVillage",
   "name": "族的王子希多拜托你\n卓拉领地一趟\n\n但是因为暴雨的缘故，\n沿途的悬崖变得非常湿滑。",
   "category": "主线任务",
   "subcategory": "四神兽·卓拉",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_GotoZoraVillage",
   "text": {
    "name": "卓拉族的王子希多拜托你卓拉领地一趟但是因为暴雨的缘故，沿途的悬崖变得非常湿滑。",
    "desc": "千辛万苦走到卓拉领地",
    "finish": null,
    "steps": {},
    "name_label": "QL_GotoZoraVillage_Name",
    "desc_label": "QL_GotoZoraVillage_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_GotoZoraVillage_Desc",
      "text": "千辛万苦走到卓拉领地"
     },
     {
      "label": "QL_GotoZoraVillage_Name",
      "text": "卓拉族的王子希多拜托你卓拉领地一趟但是因为暴雨的缘故，沿途的悬崖变得非常湿滑。"
     },
     {
      "label": null,
      "text": "你来到了卓拉领地。多莱凡王好像在王座那里。上层的王座里吧。"
     },
     {
      "label": "QL_GotoZoraVillage_Desc",
      "text": "你来到了卓拉领地的王座跟前。按希多的话来看，卓拉领地已经陷入了危机，需要一个强大的海利亚人出手相助。"
     }
    ],
    "source": "QL_GotoZoraVillage"
   },
   "labels": [
    "QL_GotoZoraVillage_Name",
    "QL_GotoZoraVillage_Desc",
    "QL_GotoZoraVillage_Desc"
   ],
   "flags": {
    "ready": "GotoZoraVillage_Ready",
    "activated": "GotoZoraVillage_Activated",
    "finish": "GotoZoraVillage_Finish",
    "steps": [
     "GotoZoraVillage_Step1"
    ],
    "aux": []
   },
   "source": [
    "QL_GotoZoraVillage",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "GotoZoraVillage_Ready": 1,
    "GotoZoraVillage_Activated": 0,
    "GotoZoraVillage_Finish": 0,
    "GotoZoraVillage_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": "千辛万苦走到卓拉领地",
   "title_source": "QL_GotoZoraVillage · text[0] · 标签:QL_GotoZoraVillage_Desc"
  },
  {
   "id": "HateeluMini_Treasure",
   "name": "代勇者弥留之语称，\n  假以时日灾厄必将苏醒，\n  防其未萌，屹立于沧海之岩石，\n  十七之时将指引向吾之积蓄。”\n\n你解开了卡西瓦告知的古诗之谜，\n获得了金卢比。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_HateeluMini_Treasure",
   "text": {
    "name": "“古代勇者弥留之语称，  假以时日灾厄必将苏醒，  防其未萌，屹立于沧海之岩石，  十七之时将指引向吾之积蓄。”你解开了卡西瓦告知的古诗之谜，获得了金卢比。",
    "desc": null,
    "finish": "“古代勇者弥留之语称，  假以时日灾厄必将苏醒。  防其未萌，屹立于沧海之岩石，  十七之时将指引向吾之积蓄。”卡西瓦告诉你的这首古诗，其寓意是……？",
    "steps": {},
    "name_label": "QL_HateeluMini_Treasure_Name",
    "desc_label": null,
    "finish_label": "QL_HateeluMini_Treasure_Finish",
    "items": [
     {
      "label": null,
      "text": "勇者的存款？"
     },
     {
      "label": "QL_HateeluMini_Treasure_Finish",
      "text": "“古代勇者弥留之语称，  假以时日灾厄必将苏醒。  防其未萌，屹立于沧海之岩石，  十七之时将指引向吾之积蓄。”卡西瓦告诉你的这首古诗，其寓意是……？"
     },
     {
      "label": "QL_HateeluMini_Treasure_Name",
      "text": "“古代勇者弥留之语称，  假以时日灾厄必将苏醒，  防其未萌，屹立于沧海之岩石，  十七之时将指引向吾之积蓄。”你解开了卡西瓦告知的古诗之谜，获得了金卢比。"
     }
    ],
    "source": "QL_HateeluMini_Treasure"
   },
   "labels": [
    "QL_HateeluMini_Treasure_Finish",
    "QL_HateeluMini_Treasure_Name"
   ],
   "flags": {
    "ready": "HateeluMini_Treasure_Ready",
    "activated": "HateeluMini_Treasure_Activated",
    "finish": "HateeluMini_Treasure_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_HateeluMini_Treasure",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HateeluMini_Treasure_Ready": 1,
    "HateeluMini_Treasure_Activated": 0,
    "HateeluMini_Treasure_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "勇者的存款？",
   "title_source": "QL_HateeluMini_Treasure · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_BlueFire",
   "name": "到了阿卡莱古代研究所的研究者洛贝利。\n\n但是，他的小樱桃……\n不，是希卡炉出了故障动不了，\n无法制作古代兵装。\n\n据说用色火焰燃外面的灶可以让希卡炉动起来。",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_BlueFire",
   "text": {
    "name": "你见到了阿卡莱古代研究所的研究者洛贝利。但是，他的小樱桃……不，是希卡炉出了故障动不了，无法制作古代兵装。据说用色火焰燃外面的灶可以让希卡炉动起来。",
    "desc": "普尔亚说，如果你找到代材料希望你也能将材料提供给贝利洛贝利这号人物好像住在阿卡莱地区的卡莱古代研究所",
    "finish": null,
    "steps": {},
    "name_label": "QL_HatenoMini_BlueFire_Name",
    "desc_label": "QL_HatenoMini_BlueFire_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "另一位研究者"
     },
     {
      "label": "QL_HatenoMini_BlueFire_Desc",
      "text": "普尔亚说，如果你找到代材料希望你也能将材料提供给贝利洛贝利这号人物好像住在阿卡莱地区的卡莱古代研究所"
     },
     {
      "label": "QL_HatenoMini_BlueFire_Name",
      "text": "你见到了阿卡莱古代研究所的研究者洛贝利。但是，他的小樱桃……不，是希卡炉出了故障动不了，无法制作古代兵装。据说用色火焰燃外面的灶可以让希卡炉动起来。"
     },
     {
      "label": null,
      "text": "用蓝色火焰点燃了阿卡莱古代研究所的炉灶，这样希卡炉应该能动起来了。快点把这个好消息告诉贝利。"
     },
     {
      "label": null,
      "text": "你向洛贝利报告了用蓝色火焰点燃了炉灶一事。洛贝利好像认为是爱的力量让希卡炉动起来的。只要支付古代材料和少许卢比，希卡炉就会为你变换古代兵装。"
     }
    ],
    "source": "QL_HatenoMini_BlueFire"
   },
   "labels": [
    "QL_HatenoMini_BlueFire_Name",
    "QL_HatenoMini_BlueFire_Meet",
    "QL_HatenoMini_BlueFire_Desc"
   ],
   "flags": {
    "ready": "HatenoMini_BlueFire_Ready",
    "activated": "HatenoMini_BlueFire_Activated",
    "finish": "HatenoMini_BlueFire_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_BlueFire_Carry",
     "HatenoMini_BlueFire_Meet"
    ]
   },
   "source": [
    "QL_HatenoMini_BlueFire",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_BlueFire_Ready": 1,
    "HatenoMini_BlueFire_Activated": 0,
    "HatenoMini_BlueFire_Finish": 0,
    "HatenoMini_BlueFire_Carry": 0,
    "HatenoMini_BlueFire_Meet": 0
   },
   "status_snapshot": "未开始",
   "title": "另一位研究者",
   "title_source": "QL_HatenoMini_BlueFire · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_CameraBoy",
   "name": "感应器＋\n据说可以探测登录在海拉鲁图鉴的所有东西。\n常言道熟能生巧，于是西蒙交给你一项任务。\n\n用照相机拍下\n哈特诺古代研究所后面的暖蘑菇\n再向西蒙报告结果吧。",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_CameraBoy",
   "text": {
    "name": "希卡感应器＋据说可以探测登录在海拉鲁图鉴的所有东西。常言道熟能生巧，于是西蒙交给你一项任务。用照相机拍下哈特诺古代研究所后面的暖蘑菇再向西蒙报告结果吧。",
    "desc": "据说只要将海拉鲁图鉴的暖暖蘑菇设置为寻找物，希卡感应器＋就会帮你探测附近的暖暖蘑菇。使用这个功能，在北部的奇斯帕森林采集野生的朵暖暖蘑菇给西蒙吧。",
    "finish": "希卡感应器＋据说可以探测登录在海拉鲁图鉴的所有东西。常言道熟能生巧，于是西蒙交给你一项任务。用照相机拍下哈特诺古代研究所后面的暖蘑菇再向西蒙报告结果吧。",
    "steps": {},
    "name_label": "QL_HatenoMini_CameraBoy_Name",
    "desc_label": "QL_HatenoMini_CameraBoy_Desc",
    "finish_label": "QL_HatenoMini_CameraBoy_Name",
    "items": [
     {
      "label": null,
      "text": "照相机和希卡感应器"
     },
     {
      "label": "QL_HatenoMini_CameraBoy_Name",
      "text": "希卡感应器＋据说可以探测登录在海拉鲁图鉴的所有东西。常言道熟能生巧，于是西蒙交给你一项任务。用照相机拍下哈特诺古代研究所后面的暖蘑菇再向西蒙报告结果吧。"
     },
     {
      "label": "QL_HatenoMini_CameraBoy_Desc",
      "text": "据说只要将海拉鲁图鉴的暖暖蘑菇设置为寻找物，希卡感应器＋就会帮你探测附近的暖暖蘑菇。使用这个功能，在北部的奇斯帕森林采集野生的朵暖暖蘑菇给西蒙吧。"
     },
     {
      "label": null,
      "text": "你将3朵暖暖蘑菇交给了西蒙。只要平时勤用照相机拍下各种东西并事先登录到海拉鲁图鉴，就能通过希卡感应器＋的探测更方便地找到需要的东西呢。"
     }
    ],
    "source": "QL_HatenoMini_CameraBoy"
   },
   "labels": [
    "QL_HatenoMini_CameraBoy_Name",
    "QL_HatenoMini_CameraBoy_Desc",
    "QL_HatenoMini_CameraBoy_Finish"
   ],
   "flags": {
    "ready": "HatenoMini_CameraBoy_Ready",
    "activated": "HatenoMini_CameraBoy_Activated",
    "finish": "HatenoMini_CameraBoy_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_CameraBoy_Bought",
     "HatenoMini_CameraBoy_BuyPicture",
     "HatenoMini_CameraBoy_Buy_First",
     "HatenoMini_CameraBoy_Camera",
     "HatenoMini_CameraBoy_Chat",
     "HatenoMini_CameraBoy_FinishFirst",
     "HatenoMini_CameraBoy_FullComp",
     "HatenoMini_CameraBoy_Get",
     "HatenoMini_CameraBoy_GetReward",
     "HatenoMini_CameraBoy_Shot"
    ]
   },
   "source": [
    "QL_HatenoMini_CameraBoy",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_CameraBoy_Ready": 0,
    "HatenoMini_CameraBoy_Activated": 0,
    "HatenoMini_CameraBoy_Finish": 0,
    "HatenoMini_CameraBoy_Bought": 0,
    "HatenoMini_CameraBoy_BuyPicture": 1,
    "HatenoMini_CameraBoy_Buy_First": 0,
    "HatenoMini_CameraBoy_Camera": 0,
    "HatenoMini_CameraBoy_Chat": 1,
    "HatenoMini_CameraBoy_FinishFirst": 0,
    "HatenoMini_CameraBoy_FullComp": 0,
    "HatenoMini_CameraBoy_Get": 0,
    "HatenoMini_CameraBoy_GetReward": 0,
    "HatenoMini_CameraBoy_Shot": 0
   },
   "status_snapshot": "未知",
   "title": "照相机和希卡感应器",
   "title_source": "QL_HatenoMini_CameraBoy · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_DeathDevil",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "HatenoMini_DeathDevil_Ready",
    "activated": "HatenoMini_DeathDevil_Activated",
    "finish": "HatenoMini_DeathDevil_Finish",
    "steps": [
     "HatenoMini_DeathDevil_Step"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_DeathDevil_Ready": 1,
    "HatenoMini_DeathDevil_Activated": 0,
    "HatenoMini_DeathDevil_Finish": 0,
    "HatenoMini_DeathDevil_Step": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "HatenoMini_DevilSeal",
   "name": "诺村的恶魔像\n叫你去增加1个\n之容器力容器",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_DevilSeal",
   "text": {
    "name": "哈特诺村的恶魔像叫你去增加1个之容器力容器",
    "desc": "哈特诺村的恶魔像叫你去增加1个之容器力容器",
    "finish": null,
    "steps": {
     "QL_HatenoMini_DevilSeal_GiveUtsuwa": "被哈特诺村的恶魔像夺去了容器。和它话让它归还容器吧。"
    },
    "name_label": "QL_HatenoMini_DevilSeal_Desc",
    "desc_label": "QL_HatenoMini_DevilSeal_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "容器商者"
     },
     {
      "label": "QL_HatenoMini_DevilSeal_Desc",
      "text": "哈特诺村的恶魔像叫你去增加1个之容器力容器"
     },
     {
      "label": "QL_HatenoMini_DevilSeal_GiveUtsuwa",
      "text": "被哈特诺村的恶魔像夺去了容器。和它话让它归还容器吧。"
     },
     {
      "label": null,
      "text": "让恶魔像还回了容器。这样就可以买卖容器了。结果变成……你可以用100卢比将心之容器或精力容器卖给恶魔像，或是用120卢比从恶魔像那里购入。"
     }
    ],
    "source": "QL_HatenoMini_DevilSeal"
   },
   "labels": [
    "QL_HatenoMini_DevilSeal_GiveUtsuwa",
    "QL_HatenoMini_DevilSeal_Desc",
    "QL_HatenoMini_DevilSeal_Name"
   ],
   "flags": {
    "ready": "HatenoMini_DevilSeal_Ready",
    "activated": "HatenoMini_DevilSeal_Activated",
    "finish": "HatenoMini_DevilSeal_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_DevilSeal_GiveUtsuwa"
    ]
   },
   "source": [
    "QL_HatenoMini_DevilSeal",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_DevilSeal_Ready": 1,
    "HatenoMini_DevilSeal_Activated": 0,
    "HatenoMini_DevilSeal_Finish": 0,
    "HatenoMini_DevilSeal_GiveUtsuwa": 0
   },
   "status_snapshot": "未开始",
   "title": "容器商者",
   "title_source": "QL_HatenoMini_DevilSeal · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_GoatThief",
   "name": "诺村的牧羊人托可优\n因为羊被怪物捉走而烦恼着。\n\n怪物似乎盘踞在特诺海滩\n\n在将怪物部倒之前，\n应该是没办法遏制羊群被盗。",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_GoatThief",
   "text": {
    "name": "哈特诺村的牧羊人托可优因为羊被怪物捉走而烦恼着。怪物似乎盘踞在特诺海滩在将怪物部倒之前，应该是没办法遏制羊群被盗。",
    "desc": "将盘踞在哈特诺海滩的怪物全部击退了！这样哈特诺村的羊群应该不会再被捉走了吧。告诉哈特诺村的牧羊人可优已击退怪物一事吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_HatenoMini_GoatThief_Name",
    "desc_label": "QL_HatenoMini_GoatThief_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "可恶的偷羊贼"
     },
     {
      "label": "QL_HatenoMini_GoatThief_Name",
      "text": "哈特诺村的牧羊人托可优因为羊被怪物捉走而烦恼着。怪物似乎盘踞在特诺海滩在将怪物部倒之前，应该是没办法遏制羊群被盗。"
     },
     {
      "label": "QL_HatenoMini_GoatThief_Desc",
      "text": "将盘踞在哈特诺海滩的怪物全部击退了！这样哈特诺村的羊群应该不会再被捉走了吧。告诉哈特诺村的牧羊人可优已击退怪物一事吧。"
     },
     {
      "label": null,
      "text": "将击退盘踞于哈特诺海滩的怪物一事告诉给托可优后获得谢礼！托可优向你敞开了心扉！……应该不是错觉？"
     }
    ],
    "source": "QL_HatenoMini_GoatThief"
   },
   "labels": [
    "QL_HatenoMini_GoatThief_Desc",
    "QL_HatenoMini_GoatThief_Name",
    "QL_HatenoMini_GoatThief_Extermination"
   ],
   "flags": {
    "ready": "HatenoMini_GoatThief_Ready",
    "activated": "HatenoMini_GoatThief_Activated",
    "finish": "HatenoMini_GoatThief_Finished",
    "steps": [],
    "aux": [
     "HatenoMini_GoatThief_Extermination"
    ]
   },
   "source": [
    "QL_HatenoMini_GoatThief",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_GoatThief_Ready": 1,
    "HatenoMini_GoatThief_Activated": 0,
    "HatenoMini_GoatThief_Finished": 0,
    "HatenoMini_GoatThief_Extermination": 0
   },
   "status_snapshot": "未开始",
   "title": "可恶的偷羊贼",
   "title_source": "QL_HatenoMini_GoatThief · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_LoveInsects",
   "name": "的朋友的朋友\n好像非常非常地想引起\n东风亭店主茨琪米的注意。\n\n茨琪米对话\n不知能不能打探出\n她喜欢的东西呢？",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_LoveInsects",
   "text": {
    "name": "万作的朋友的朋友好像非常非常地想引起东风亭店主茨琪米的注意。茨琪米对话不知能不能打探出她喜欢的东西呢？",
    "desc": "茨琪米的梦想是在100只力蚱蜢围下生活。将这件事告诉作。",
    "finish": null,
    "steps": {},
    "name_label": "QL_HatenoMini_LoveInsects_Name",
    "desc_label": "QL_HatenoMini_LoveInsects_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "送给爱人的礼物"
     },
     {
      "label": "QL_HatenoMini_LoveInsects_Name",
      "text": "万作的朋友的朋友好像非常非常地想引起东风亭店主茨琪米的注意。茨琪米对话不知能不能打探出她喜欢的东西呢？"
     },
     {
      "label": "QL_HatenoMini_LoveInsects_Desc",
      "text": "茨琪米的梦想是在100只力蚱蜢围下生活。将这件事告诉作。"
     },
     {
      "label": null,
      "text": "茨琪米的梦想是在100只精力蚱蜢包围下生活。知道这件事之后，万作拜托你帮忙收集蚱蜢。总之先收集0只精力蚱蜢拿去万作那里吧。"
     },
     {
      "label": null,
      "text": "将10只精力蚱蜢交给万作，获得谢礼。结果想引起茨琪米注意的好像就是万作本人。剩下的精力蚱蜢由他自己去找吧。"
     }
    ],
    "source": "QL_HatenoMini_LoveInsects"
   },
   "labels": [
    "QL_HatenoMini_LoveInsects_Desc",
    "QL_HatenoMini_LoveInsects_Name",
    "QL_HatenoMini_LoveInsects_Report"
   ],
   "flags": {
    "ready": "HatenoMini_LoveInsects_Ready",
    "activated": "HatenoMini_LoveInsects_Activated",
    "finish": "HatenoMini_LoveInsects_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_LoveInsects_Answer",
     "HatenoMini_LoveInsects_Report"
    ]
   },
   "source": [
    "QL_HatenoMini_LoveInsects",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_LoveInsects_Ready": 1,
    "HatenoMini_LoveInsects_Activated": 0,
    "HatenoMini_LoveInsects_Finish": 0,
    "HatenoMini_LoveInsects_Answer": 0,
    "HatenoMini_LoveInsects_Report": 0
   },
   "status_snapshot": "未开始",
   "title": "送给爱人的礼物",
   "title_source": "QL_HatenoMini_LoveInsects · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_MyHome",
   "name": "哈特诺村买房子了！\n\n只要给樱达建筑店的社长樱达\n送去木柴捆，\n他好像就会把原价50000卢比\n优惠到3000卢比。\n\n收集0捆木柴捆去给他吧！",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_MyHome",
   "text": {
    "name": "要在哈特诺村买房子了！只要给樱达建筑店的社长樱达送去木柴捆，他好像就会把原价50000卢比优惠到3000卢比。收集0捆木柴捆去给他吧！",
    "desc": "要在哈特诺村买房子了！只要给樱达建筑店的社长樱达送去木柴捆，他好像就会把原价50000卢比优惠到3000卢比。收集0捆木柴捆去给他吧！",
    "finish": null,
    "steps": {
     "QL_HatenoMini_MyHome_Wood": "将木柴捆交给樱达，他将旧民居的价格从50000卢比降到了3000卢比。准备好000卢比，和达话吧！"
    },
    "name_label": "QL_HatenoMini_MyHome_Name",
    "desc_label": "QL_HatenoMini_MyHome_Name",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "幸福搬运匠"
     },
     {
      "label": "QL_HatenoMini_MyHome_Name",
      "text": "要在哈特诺村买房子了！只要给樱达建筑店的社长樱达送去木柴捆，他好像就会把原价50000卢比优惠到3000卢比。收集0捆木柴捆去给他吧！"
     },
     {
      "label": "QL_HatenoMini_MyHome_Wood",
      "text": "将木柴捆交给樱达，他将旧民居的价格从50000卢比降到了3000卢比。准备好000卢比，和达话吧！"
     },
     {
      "label": null,
      "text": "用3000卢比在哈特诺村买了房子！因为房间里什么也没有，樱达顺便帮你装了武器架作为乔迁贺礼。但是家里还是空荡如野，找达量，说不定他能帮上忙。"
     },
     {
      "label": null,
      "text": "达议你在他那里购买家具！不只是家具，他好像还能帮忙外装修。添置家具，修缮外装，打造你的豪宅吧！"
     },
     {
      "label": null,
      "text": "家具和外装全数定制，陋居变身为豪宅！因为完成了大工程，樱达总算是放下心来。"
     }
    ],
    "source": "QL_HatenoMini_MyHome"
   },
   "labels": [
    "QL_HatenoMini_MyHome_Name",
    "QL_HatenoMini_MyHome_Wood",
    "QL_HatenoMini_MyHome_Desc",
    "QL_HatenoMini_MyHome_Repurchase",
    "QL_HatenoMini_MyHome_Furniture"
   ],
   "flags": {
    "ready": "HatenoMini_MyHome_Ready",
    "activated": "HatenoMini_MyHome_Activated",
    "finish": "HatenoMini_MyHome_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_MyHome_EnokidaHummer",
     "HatenoMini_MyHome_Furniture",
     "HatenoMini_MyHome_KatsuradaHummer",
     "HatenoMini_MyHome_Ready_Toryo_First",
     "HatenoMini_MyHome_Repurchase",
     "HatenoMini_MyHome_StopNow",
     "HatenoMini_MyHome_Wood"
    ]
   },
   "source": [
    "QL_HatenoMini_MyHome",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_MyHome_Ready": 1,
    "HatenoMini_MyHome_Activated": 0,
    "HatenoMini_MyHome_Finish": 0,
    "HatenoMini_MyHome_EnokidaHummer": 0,
    "HatenoMini_MyHome_Furniture": 0,
    "HatenoMini_MyHome_KatsuradaHummer": 0,
    "HatenoMini_MyHome_Ready_Toryo_First": 0,
    "HatenoMini_MyHome_Repurchase": 0,
    "HatenoMini_MyHome_StopNow": 0,
    "HatenoMini_MyHome_Wood": 0
   },
   "status_snapshot": "未开始",
   "title": "幸福搬运匠",
   "title_source": "QL_HatenoMini_MyHome · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_Net",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "HatenoMini_Net_Ready",
    "activated": "HatenoMini_Net_Activated",
    "finish": "HatenoMini_Net_Finished",
    "steps": [],
    "aux": [
     "HatenoMini_Net_Findbro",
     "HatenoMini_Net_Findsis"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_Net_Ready": 1,
    "HatenoMini_Net_Activated": 0,
    "HatenoMini_Net_Finished": 0,
    "HatenoMini_Net_Findbro": 0,
    "HatenoMini_Net_Findsis": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "HatenoMini_ThreeTree",
   "name": "三为一，背道向海而行。\n　勇者的试练沉睡于封闭的岩石之中。”\n\n解开三棵杉树的传说之谜，\n你发现了勇者的试练。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_HatenoMini_ThreeTree",
   "text": {
    "name": "“合三为一，背道向海而行。　勇者的试练沉睡于封闭的岩石之中。”解开三棵杉树的传说之谜，你发现了勇者的试练。",
    "desc": null,
    "finish": "从哈特诺村可望见雪山顶峰上的三棵杉树自古流传着这样一个传说。“三为一道向海行。　勇者的试练沉睡于封闭的岩石之中。”",
    "steps": {},
    "name_label": "QL_HatenoMini_ThreeTree_Name",
    "desc_label": null,
    "finish_label": "QL_HatenoMini_ThreeTree_Finished",
    "items": [
     {
      "label": null,
      "text": "三棵杉树的秘密"
     },
     {
      "label": "QL_HatenoMini_ThreeTree_Finished",
      "text": "从哈特诺村可望见雪山顶峰上的三棵杉树自古流传着这样一个传说。“三为一道向海行。　勇者的试练沉睡于封闭的岩石之中。”"
     },
     {
      "label": "QL_HatenoMini_ThreeTree_Name",
      "text": "“合三为一，背道向海而行。　勇者的试练沉睡于封闭的岩石之中。”解开三棵杉树的传说之谜，你发现了勇者的试练。"
     }
    ],
    "source": "QL_HatenoMini_ThreeTree"
   },
   "labels": [
    "QL_HatenoMini_ThreeTree_Finished",
    "QL_HatenoMini_ThreeTree_Name"
   ],
   "flags": {
    "ready": "HatenoMini_ThreeTree_Ready",
    "activated": "HatenoMini_ThreeTree_Activated",
    "finish": "HatenoMini_ThreeTree_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_HatenoMini_ThreeTree",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_ThreeTree_Ready": 1,
    "HatenoMini_ThreeTree_Activated": 0,
    "HatenoMini_ThreeTree_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": "三棵杉树的秘密",
   "title_source": "QL_HatenoMini_ThreeTree · text[0] · 无标签"
  },
  {
   "id": "HatenoMini_WeaponMania",
   "name": "诺村的少年纳卜\n想让你拿某样武器给他看看。\n\n找到人之剑拿去给他吧。",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_HatenoMini_WeaponMania",
   "text": {
    "name": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到人之剑拿去给他吧。",
    "desc": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到焰杖拿去给他吧。",
    "finish": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到人之剑拿去给他吧。",
    "steps": {
     "QL_HatenoMini_WeaponMania_Weapon05": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到人之剑拿去给他吧。"
    },
    "name_label": "QL_HatenoMini_WeaponMania_Weapon05",
    "desc_label": "QL_HatenoMini_WeaponMania_Desc",
    "finish_label": "QL_HatenoMini_WeaponMania_Weapon05",
    "items": [
     {
      "label": "QL_HatenoMini_WeaponMania_Finish",
      "text": "年轻的武器迷"
     },
     {
      "label": "QL_HatenoMini_WeaponMania_Weapon05",
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到人之剑拿去给他吧。"
     },
     {
      "label": "QL_HatenoMini_WeaponMania_Desc",
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到焰杖拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到力布林棍拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到连弓拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到风刀拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到护者之斧+拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到雪枪拿去给他吧。"
     },
     {
      "label": null,
      "text": "哈特诺村的少年纳卜想让你拿某样武器给他看看。找到代兵装·剑拿去给他吧。"
     },
     {
      "label": null,
      "text": "你将哈特诺村的少年纳卜想看的武器全部展现给他了。纳卜赠予你钻石作为谢礼。他的祖父想必也在天堂为他开心吧。"
     }
    ],
    "source": "QL_HatenoMini_WeaponMania"
   },
   "labels": [
    "QL_HatenoMini_WeaponMania_Weapon05",
    "QL_HatenoMini_WeaponMania_Weapon06",
    "QL_HatenoMini_WeaponMania_Weapon07",
    "QL_HatenoMini_WeaponMania_Name",
    "QL_HatenoMini_WeaponMania_Finish",
    "QL_HatenoMini_WeaponMania_Finish",
    "QL_HatenoMini_WeaponMania_Finish",
    "QL_HatenoMini_WeaponMania_Weapon01",
    "QL_HatenoMini_WeaponMania_Weapon01",
    "QL_HatenoMini_WeaponMania_Weapon01",
    "QL_HatenoMini_WeaponMania_Weapon02",
    "QL_HatenoMini_WeaponMania_Desc",
    "QL_HatenoMini_WeaponMania_Weapon04"
   ],
   "flags": {
    "ready": "HatenoMini_WeaponMania_Ready",
    "activated": "HatenoMini_WeaponMania_Activated",
    "finish": "HatenoMini_WeaponMania_Finish",
    "steps": [],
    "aux": [
     "HatenoMini_WeaponMania_Weapon01",
     "HatenoMini_WeaponMania_Weapon02",
     "HatenoMini_WeaponMania_Weapon03",
     "HatenoMini_WeaponMania_Weapon04",
     "HatenoMini_WeaponMania_Weapon05",
     "HatenoMini_WeaponMania_Weapon06",
     "HatenoMini_WeaponMania_Weapon07",
     "HatenoMini_WeaponMania_Weapon08",
     "HatenoMini_WeaponMania_Weapon09",
     "HatenoMini_WeaponMania_Weapon10",
     "HatenoMini_WeaponMania_Weapon11",
     "HatenoMini_WeaponMania_Weapon12",
     "HatenoMini_WeaponMania_Weapon13",
     "HatenoMini_WeaponMania_Weapon14",
     "HatenoMini_WeaponMania_Weapon15",
     "HatenoMini_WeaponMania_Weapon16",
     "HatenoMini_WeaponMania_Weapon17",
     "HatenoMini_WeaponMania_Weapon18",
     "HatenoMini_WeaponMania_Weapon19"
    ]
   },
   "source": [
    "QL_HatenoMini_WeaponMania",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_WeaponMania_Ready": 1,
    "HatenoMini_WeaponMania_Activated": 0,
    "HatenoMini_WeaponMania_Finish": 0,
    "HatenoMini_WeaponMania_Weapon01": 0,
    "HatenoMini_WeaponMania_Weapon02": 0,
    "HatenoMini_WeaponMania_Weapon03": 0,
    "HatenoMini_WeaponMania_Weapon04": 0,
    "HatenoMini_WeaponMania_Weapon05": 0,
    "HatenoMini_WeaponMania_Weapon06": 0,
    "HatenoMini_WeaponMania_Weapon07": 0,
    "HatenoMini_WeaponMania_Weapon08": 0,
    "HatenoMini_WeaponMania_Weapon09": 0,
    "HatenoMini_WeaponMania_Weapon10": 0,
    "HatenoMini_WeaponMania_Weapon11": 0,
    "HatenoMini_WeaponMania_Weapon12": 0,
    "HatenoMini_WeaponMania_Weapon13": 0,
    "HatenoMini_WeaponMania_Weapon14": 0,
    "HatenoMini_WeaponMania_Weapon15": 0,
    "HatenoMini_WeaponMania_Weapon16": 0,
    "HatenoMini_WeaponMania_Weapon17": 0,
    "HatenoMini_WeaponMania_Weapon18": 0,
    "HatenoMini_WeaponMania_Weapon19": 0
   },
   "status_snapshot": "未开始",
   "title": "年轻的武器迷",
   "title_source": "QL_HatenoMini_WeaponMania · text[0] · 标签:QL_HatenoMini_WeaponMania_Finish"
  },
  {
   "id": "HatenoMini_WhiteDragon",
   "name": "特诺村的村民西默茨凯处听到传闻，\n据说在村庄以北的拉聂尔山上，\n有一座久以前海拉鲁公主用于祓禊的\n“慧之泉……\n\n传闻那座慧之泉沉睡着宝物。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_HatenoMini_WhiteDragon",
   "text": {
    "name": "从哈特诺村的村民西默茨凯处听到传闻，据说在村庄以北的拉聂尔山上，有一座久以前海拉鲁公主用于祓禊的“慧之泉……传闻那座慧之泉沉睡着宝物。",
    "desc": "探索拉聂尔山的宝贝！",
    "finish": "从哈特诺村的村民西默茨凯处听到传闻，据说在村庄以北的拉聂尔山上，有一座久以前海拉鲁公主用于祓禊的“慧之泉……传闻那座慧之泉沉睡着宝物。",
    "steps": {
     "QL_HatenoMini_WhiteDragon_Play": "从哈特诺村的村民西默茨凯处听到传闻，据说在村庄以北的拉聂尔山上，有一座久以前海拉鲁公主用于祓禊的“慧之泉……传闻那座慧之泉沉睡着宝物。"
    },
    "name_label": "QL_HatenoMini_WhiteDragon_Play",
    "desc_label": "QL_HatenoMini_WhiteDragon_Desc",
    "finish_label": "QL_HatenoMini_WhiteDragon_Play",
    "items": [
     {
      "label": "QL_HatenoMini_WhiteDragon_Desc",
      "text": "探索拉聂尔山的宝贝！"
     },
     {
      "label": "QL_HatenoMini_WhiteDragon_Play",
      "text": "从哈特诺村的村民西默茨凯处听到传闻，据说在村庄以北的拉聂尔山上，有一座久以前海拉鲁公主用于祓禊的“慧之泉……传闻那座慧之泉沉睡着宝物。"
     },
     {
      "label": "QL_HatenoMini_WhiteDragon_Desc",
      "text": "你没有找到宝物，但发现智慧之泉使者——精灵尔龙被邪恶的力量附身了。击溃尔龙怨念，驱逐邪恶的力量吧。"
     },
     {
      "label": null,
      "text": "将拉聂尔山的蓝色精灵尔龙从邪恶力量中解放出来。尔龙天时，留下了尔龙的鳞片"
     },
     {
      "label": null,
      "text": "将聂尔龙的鳞片漂浮在智慧之泉上，古代神庙出现在你的眼前！从邪恶力量中被解放出来的聂尔龙不知飞去了何方。"
     }
    ],
    "source": "QL_HatenoMini_WhiteDragon"
   },
   "labels": [
    "QL_HatenoMini_WhiteDragon_Play",
    "QL_HatenoMini_WhiteDragon_Name",
    "QL_HatenoMini_WhiteDragon_Desc",
    "QL_HatenoMini_WhiteDragon_Desc",
    "QL_HatenoMini_WhiteDragon_Finish"
   ],
   "flags": {
    "ready": "HatenoMini_WhiteDragon_Ready",
    "activated": "HatenoMini_WhiteDragon_Activated",
    "finish": "HatenoMini_WhiteDragon_Finish",
    "steps": [
     "HatenoMini_WhiteDragon_Step1"
    ],
    "aux": [
     "HatenoMini_WhiteDragon_Play"
    ]
   },
   "source": [
    "QL_HatenoMini_WhiteDragon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoMini_WhiteDragon_Ready": 1,
    "HatenoMini_WhiteDragon_Activated": 0,
    "HatenoMini_WhiteDragon_Finish": 0,
    "HatenoMini_WhiteDragon_Step1": 0,
    "HatenoMini_WhiteDragon_Play": 0
   },
   "status_snapshot": "未开始",
   "title": "探索拉聂尔山的宝贝！",
   "title_source": "QL_HatenoMini_WhiteDragon · text[0] · 标签:QL_HatenoMini_WhiteDragon_Desc"
  },
  {
   "id": "HatenoNPC018_First",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "HatenoNPC018_First_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HatenoNPC018_First_Ready": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Hateno_SheikPad_PowerUp",
   "name": "将代材料给普尔亚，\n她就会帮你强化道具。\n\n据说强化希卡感应器要个古代螺丝 \n遥控炸弹要个古代传动轴 \n静止器要个古代核心",
   "category": "迷你挑战",
   "subcategory": "哈特诺村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Hateno_SheikPad_PowerUp",
   "text": {
    "name": "只要将代材料给普尔亚，她就会帮你强化道具。据说强化希卡感应器要个古代螺丝 遥控炸弹要个古代传动轴 静止器要个古代核心",
    "desc": "只要将代材料给普尔亚，她就会帮你强化道具。据说强化希卡感应器要个古代螺丝 遥控炸弹要个古代传动轴 静止器要个古代核心",
    "finish": null,
    "steps": {},
    "name_label": "QL_Hateno_SheikPad_PowerUp_Name",
    "desc_label": "QL_Hateno_SheikPad_PowerUp_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Hateno_SheikPad_PowerUp_Desc",
      "text": "释放 更大的力量"
     },
     {
      "label": null,
      "text": "只要拜托普尔亚，用代材料交换，她会给你一些“好东西”。代材料竟是什么呢？贝利竟是何人呢？向普尔亚询问详情吧。"
     },
     {
      "label": "QL_Hateno_SheikPad_PowerUp_Name",
      "text": "只要将代材料给普尔亚，她就会帮你强化道具。据说强化希卡感应器要个古代螺丝 遥控炸弹要个古代传动轴 静止器要个古代核心"
     },
     {
      "label": null,
      "text": "普尔亚帮你强化了希卡感应器、遥控炸弹、静止器的性能！普尔亚表示，她无法强化其他的道具，也无法将现有道具进一步强化。"
     }
    ],
    "source": "QL_Hateno_SheikPad_PowerUp"
   },
   "labels": [
    "QL_Hateno_SheikPad_PowerUp_Name",
    "QL_Hateno_SheikPad_PowerUp_Desc",
    "QL_Hateno_SheikPad_PowerUp_Desc"
   ],
   "flags": {
    "ready": "Hateno_SheikPad_PowerUp_Ready",
    "activated": "Hateno_SheikPad_PowerUp_Activated",
    "finish": "Hateno_SheikPad_PowerUp_Finish",
    "steps": [],
    "aux": [
     "Hateno_SheikPad_PowerUp_Eemon",
     "Hateno_SheikPad_PowerUp_Explain",
     "Hateno_SheikPad_PowerUp_First"
    ]
   },
   "source": [
    "QL_Hateno_SheikPad_PowerUp",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Hateno_SheikPad_PowerUp_Ready": 0,
    "Hateno_SheikPad_PowerUp_Activated": 0,
    "Hateno_SheikPad_PowerUp_Finish": 0,
    "Hateno_SheikPad_PowerUp_Eemon": 0,
    "Hateno_SheikPad_PowerUp_Explain": 0,
    "Hateno_SheikPad_PowerUp_First": 0
   },
   "status_snapshot": "未知",
   "title": "释放 更大的力量",
   "title_source": "QL_Hateno_SheikPad_PowerUp · text[0] · 标签:QL_Hateno_SheikPad_PowerUp_Desc"
  },
  {
   "id": "HigakkareMini_RedDragon",
   "name": "之泉的传说",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_HigakkareMini_RedDragon",
   "text": {
    "name": "力量之泉的传说",
    "desc": "东阿卡莱驿站以量之泉流传着这样一个传说：“将神圣的具给力量之泉吧。”神圣的具竟是指什么呢？",
    "finish": null,
    "steps": {},
    "name_label": "QL_HigakkareMini_RedDragon_Name",
    "desc_label": "QL_HigakkareMini_RedDragon_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_HigakkareMini_RedDragon_Name",
      "text": "力量之泉的传说"
     },
     {
      "label": "QL_HigakkareMini_RedDragon_Desc",
      "text": "东阿卡莱驿站以量之泉流传着这样一个传说：“将神圣的具给力量之泉吧。”神圣的具竟是指什么呢？"
     },
     {
      "label": null,
      "text": "你找到了量之泉在泉边听到女神的低语。“向此力量之泉献上红色精灵  尔龙的鳞片”具指尔龙的鳞片？奥尔龙又是什么？"
     },
     {
      "label": "QL_HigakkareMini_RedDragon_Name",
      "text": "“向此力量之泉献上红色精灵  奥尔龙的鳞片。”遵照女神像之言，将奥尔龙的鳞片漂浮在力量之泉上，古代神庙出现在你的眼前。神圣的神具好像就是指奥尔龙的鳞片。"
     }
    ],
    "source": "QL_HigakkareMini_RedDragon"
   },
   "labels": [
    "QL_HigakkareMini_RedDragon_Name",
    "QL_HigakkareMini_RedDragon_Name",
    "QL_HigakkareMini_RedDragon_Desc"
   ],
   "flags": {
    "ready": "HigakkareMini_RedDragon_Ready",
    "activated": "HigakkareMini_RedDragon_Activated",
    "finish": "HigakkareMini_RedDragon_Finish",
    "steps": [
     "HigakkareMini_RedDragon_Step1"
    ],
    "aux": []
   },
   "source": [
    "QL_HigakkareMini_RedDragon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HigakkareMini_RedDragon_Ready": 1,
    "HigakkareMini_RedDragon_Activated": 0,
    "HigakkareMini_RedDragon_Finish": 0,
    "HigakkareMini_RedDragon_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": "力量之泉的传说",
   "title_source": "QL_HigakkareMini_RedDragon · text[0] · 标签:QL_HigakkareMini_RedDragon_Name"
  },
  {
   "id": "HigakkareMini_StrangeMan",
   "name": "司塔看了吉尔顿的照片。\n\n看到吉尔顿怪异的模样，\n霍司塔好像也释然了。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_HigakkareMini_StrangeMan",
   "text": {
    "name": "给霍司塔看了吉尔顿的照片。看到吉尔顿怪异的模样，霍司塔好像也释然了。",
    "desc": null,
    "finish": "东阿卡莱驿站的佣兵霍司塔拜托你调查一位可疑人物。可疑人物好像开了一家物商店找到符合条件的可疑人物后，给霍司塔看看那人的模样吧。",
    "steps": {},
    "name_label": "QL_HigakkareMini_StrangeMan_Name",
    "desc_label": null,
    "finish_label": "QL_HigakkareMini_StrangeMan_Finish",
    "items": [
     {
      "label": null,
      "text": "寻求！可疑者信息"
     },
     {
      "label": "QL_HigakkareMini_StrangeMan_Finish",
      "text": "东阿卡莱驿站的佣兵霍司塔拜托你调查一位可疑人物。可疑人物好像开了一家物商店找到符合条件的可疑人物后，给霍司塔看看那人的模样吧。"
     },
     {
      "label": "QL_HigakkareMini_StrangeMan_Name",
      "text": "给霍司塔看了吉尔顿的照片。看到吉尔顿怪异的模样，霍司塔好像也释然了。"
     }
    ],
    "source": "QL_HigakkareMini_StrangeMan"
   },
   "labels": [
    "QL_HigakkareMini_StrangeMan_Finish",
    "QL_HigakkareMini_StrangeMan_Name"
   ],
   "flags": {
    "ready": "HigakkareMini_StrangeMan_Ready",
    "activated": "HigakkareMini_StrangeMan_Activated",
    "finish": "HigakkareMini_StrangeMan_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_HigakkareMini_StrangeMan",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HigakkareMini_StrangeMan_Ready": 1,
    "HigakkareMini_StrangeMan_Activated": 0,
    "HigakkareMini_StrangeMan_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "寻求！可疑者信息",
   "title_source": "QL_HigakkareMini_StrangeMan · text[0] · 无标签"
  },
  {
   "id": "HutagoHatago_Ch_001",
   "name": "生马匹驯服锦标赛”第2名的\n弗撒兰向你发出了挑战！\n\n“2分钟之内野生马匹带回驿站。”\n\n野生马匹警惕心强，\n这场比赛……看来不能用普通办法。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_HutagoHatago_Ch_001",
   "text": {
    "name": "“野生马匹驯服锦标赛”第2名的弗撒兰向你发出了挑战！“2分钟之内野生马匹带回驿站。”野生马匹警惕心强，这场比赛……看来不能用普通办法。",
    "desc": "“野生马匹驯服锦标赛”第2名的弗撒兰向你发出了挑战！“2分钟之内野生马匹带回驿站。”野生马匹警惕心强，这场比赛……看来不能用普通办法。不过你决定再次挑战。",
    "finish": null,
    "steps": {
     "QL_HutagoHatago_Ch_001_Again": "捕捉野生马匹"
    },
    "name_label": "QL_HutagoHatago_Ch_001_Name",
    "desc_label": "QL_HutagoHatago_Ch_001_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_HutagoHatago_Ch_001_Again",
      "text": "捕捉野生马匹"
     },
     {
      "label": "QL_HutagoHatago_Ch_001_Name",
      "text": "“野生马匹驯服锦标赛”第2名的弗撒兰向你发出了挑战！“2分钟之内野生马匹带回驿站。”野生马匹警惕心强，这场比赛……看来不能用普通办法。"
     },
     {
      "label": "QL_HutagoHatago_Ch_001_Desc",
      "text": "“野生马匹驯服锦标赛”第2名的弗撒兰向你发出了挑战！“2分钟之内野生马匹带回驿站。”野生马匹警惕心强，这场比赛……看来不能用普通办法。不过你决定再次挑战。"
     },
     {
      "label": null,
      "text": "“野生马匹驯服锦标赛”第2名的弗撒兰向你发出了挑战！“2分钟之内野生马匹带回驿站。”你抓到了一匹野生马匹！之后只需回到弗撒兰那里就行。"
     },
     {
      "label": null,
      "text": "“2分钟之内野生马匹带回驿站。”弗撒兰向你发出这个挑战。由于野生马匹警惕心强，要按时带回马匹好像并不容易。如果有熟悉野生马匹的人倒是想向他请教……"
     },
     {
      "label": null,
      "text": "按时将野生马匹带回了驿站！“野生马匹驯服锦标赛”第2名的弗撒兰被超了记录好像很不甘心。"
     }
    ],
    "source": "QL_HutagoHatago_Ch_001"
   },
   "labels": [
    "QL_HutagoHatago_Ch_001_Desc",
    "QL_HutagoHatago_Ch_001_Again",
    "QL_HutagoHatago_Ch_001_Again",
    "QL_HutagoHatago_Ch_001_Name",
    "QL_HutagoHatago_Ch_001_HorseGet"
   ],
   "flags": {
    "ready": "HutagoHatago_Ch_001_Ready",
    "activated": "HutagoHatago_Ch_001_Activated",
    "finish": "HutagoHatago_Ch_001_Finish",
    "steps": [],
    "aux": [
     "HutagoHatago_Ch_001_First",
     "HutagoHatago_Ch_001_Get",
     "HutagoHatago_Ch_001_Retry"
    ]
   },
   "source": [
    "QL_HutagoHatago_Ch_001",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HutagoHatago_Ch_001_Ready": 0,
    "HutagoHatago_Ch_001_Activated": 0,
    "HutagoHatago_Ch_001_Finish": 0,
    "HutagoHatago_Ch_001_First": 0,
    "HutagoHatago_Ch_001_Get": 0,
    "HutagoHatago_Ch_001_Retry": 0
   },
   "status_snapshot": "未知",
   "title": "捕捉野生马匹",
   "title_source": "QL_HutagoHatago_Ch_001 · text[0] · 标签:QL_HutagoHatago_Ch_001_Again"
  },
  {
   "id": "HyruleDepthMini_WhiteHorse",
   "name": "原外围的驿站中的陀特茨看过马\n获得王族马鞍与缰绳作为谢礼。\n\n据陀特茨老爷爷所说，\n塞尔达公主驾驭马华丽英姿\n超脱凡尘，其美不可言表。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_HyruleDepthMini_WhiteHorse",
   "text": {
    "name": "给平原外围的驿站中的陀特茨看过马获得王族马鞍与缰绳作为谢礼。据陀特茨老爷爷所说，塞尔达公主驾驭马华丽英姿超脱凡尘，其美不可言表。",
    "desc": null,
    "finish": "平原外围的驿站中的陀特茨拜托你带一匹马来。据说马居在萨尔法山丘，是鬃毛柔顺、美丽的纯白马匹，平时活动在离其他马匹稍远的地方。",
    "steps": {},
    "name_label": "QL_HyruleDepthMini_WhiteHorse_Name",
    "desc_label": null,
    "finish_label": "QL_HyruleDepthMini_WhiteHorse_Finish",
    "items": [
     {
      "label": null,
      "text": "王族白马"
     },
     {
      "label": "QL_HyruleDepthMini_WhiteHorse_Finish",
      "text": "平原外围的驿站中的陀特茨拜托你带一匹马来。据说马居在萨尔法山丘，是鬃毛柔顺、美丽的纯白马匹，平时活动在离其他马匹稍远的地方。"
     },
     {
      "label": "QL_HyruleDepthMini_WhiteHorse_Name",
      "text": "给平原外围的驿站中的陀特茨看过马获得王族马鞍与缰绳作为谢礼。据陀特茨老爷爷所说，塞尔达公主驾驭马华丽英姿超脱凡尘，其美不可言表。"
     }
    ],
    "source": "QL_HyruleDepthMini_WhiteHorse"
   },
   "labels": [
    "QL_HyruleDepthMini_WhiteHorse_Finish",
    "QL_HyruleDepthMini_WhiteHorse_Name"
   ],
   "flags": {
    "ready": "HyruleDepthMini_WhiteHorse_Ready",
    "activated": "HyruleDepthMini_WhiteHorse_Activated",
    "finish": "HyruleDepthMini_WhiteHorse_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_HyruleDepthMini_WhiteHorse",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HyruleDepthMini_WhiteHorse_Ready": 1,
    "HyruleDepthMini_WhiteHorse_Activated": 0,
    "HyruleDepthMini_WhiteHorse_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "王族白马",
   "title_source": "QL_HyruleDepthMini_WhiteHorse · text[0] · 无标签"
  },
  {
   "id": "HyrulePlainMini_Balloon",
   "name": "爪怪气球\n顺利完成与夏媚的约定。\n\n夏媚赠予你星星碎片作为谢礼。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_HyrulePlainMini_Balloon",
   "text": {
    "name": "使用爪怪气球顺利完成与夏媚的约定。夏媚赠予你星星碎片作为谢礼。",
    "desc": null,
    "finish": "你和森林驿站的小孩夏媚约定要给她看球舞上天的情景。只要使用可当作球东西，将木桶带飞到空中，她应该会满意。",
    "steps": {},
    "name_label": "QL_HyrulePlainMini_Balloon_Name",
    "desc_label": null,
    "finish_label": "QL_HyrulePlainMini_Balloon_Finish",
    "items": [
     {
      "label": null,
      "text": "飘起来吧！气球！"
     },
     {
      "label": "QL_HyrulePlainMini_Balloon_Finish",
      "text": "你和森林驿站的小孩夏媚约定要给她看球舞上天的情景。只要使用可当作球东西，将木桶带飞到空中，她应该会满意。"
     },
     {
      "label": "QL_HyrulePlainMini_Balloon_Name",
      "text": "使用爪怪气球顺利完成与夏媚的约定。夏媚赠予你星星碎片作为谢礼。"
     }
    ],
    "source": "QL_HyrulePlainMini_Balloon"
   },
   "labels": [
    "QL_HyrulePlainMini_Balloon_Finish",
    "QL_HyrulePlainMini_Balloon_Name"
   ],
   "flags": {
    "ready": "HyrulePlainMini_Balloon_Ready",
    "activated": "HyrulePlainMini_Balloon_Activated",
    "finish": "HyrulePlainMini_Balloon_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_HyrulePlainMini_Balloon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "HyrulePlainMini_Balloon_Ready": 1,
    "HyrulePlainMini_Balloon_Activated": 0,
    "HyrulePlainMini_Balloon_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "飘起来吧！气球！",
   "title_source": "QL_HyrulePlainMini_Balloon · text[0] · 无标签"
  },
  {
   "id": "Imagawa_test05",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Imagawa_test05_Ready",
    "activated": "Imagawa_test05_Activated",
    "finish": "Imagawa_test05_Finish",
    "steps": [
     "Imagawa_test05_Step"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Imagawa_test05_Ready": 1,
    "Imagawa_test05_Activated": 0,
    "Imagawa_test05_Finish": 0,
    "Imagawa_test05_Step": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Imagawa_test6",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Imagawa_test6_Ready",
    "activated": "Imagawa_test6_Activated",
    "finish": "Imagawa_test6_Finish",
    "steps": [
     "Imagawa_test6_Step"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Imagawa_test6_Ready": 1,
    "Imagawa_test6_Activated": 0,
    "Imagawa_test6_Finish": 0,
    "Imagawa_test6_Step": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Imagawa_tunobue",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Imagawa_tunobue_Ready",
    "activated": "Imagawa_tunobue_Activated",
    "finish": "Imagawa_tunobue_Finish",
    "steps": [
     "Imagawa_tunobue_Step1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Imagawa_tunobue_Ready": 1,
    "Imagawa_tunobue_Activated": 0,
    "Imagawa_tunobue_Finish": 0,
    "Imagawa_tunobue_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "IslandMini_Battle",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "IslandMini_Battle_Ready",
    "activated": "IslandMini_Battle_Activated",
    "finish": "IslandMini_Battle_Finished",
    "steps": [],
    "aux": [
     "IslandMini_Battle_Success",
     "IslandMini_Battle_playing"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "IslandMini_Battle_Ready": 1,
    "IslandMini_Battle_Activated": 0,
    "IslandMini_Battle_Finished": 0,
    "IslandMini_Battle_Success": 0,
    "IslandMini_Battle_playing": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Kakariko_Ch_004",
   "name": "利科村是只有行家才知道的萤火虫观赏胜地。\n黑夜中闪耀的萤火虫之光宛如点点繁星……\n\n服装店的俏丽女店员拉兹莉很喜欢萤火虫。\n\n在家里欣赏到最爱的萤火虫，\n她的脸上露出了笑容。",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_004",
   "text": {
    "name": "卡卡利科村是只有行家才知道的萤火虫观赏胜地。黑夜中闪耀的萤火虫之光宛如点点繁星……服装店的俏丽女店员拉兹莉很喜欢萤火虫。在家里欣赏到最爱的萤火虫，她的脸上露出了笑容。",
    "desc": null,
    "finish": "卡卡利科村是只有行家才知道的萤火虫观赏胜地。黑夜中闪耀的萤火虫之光宛如点点繁星……服装店的俏丽女店员拉兹莉很喜欢萤火虫，但是她祖母十分严厉地，不许她晚上出门……“火虫能来我房间玩就好了……”拉兹莉的愿望能否实现呢？",
    "steps": {},
    "name_label": "QL_Kakariko_Ch_004_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Ch_004_Finish",
    "items": [
     {
      "label": null,
      "text": "萤火虫之光"
     },
     {
      "label": "QL_Kakariko_Ch_004_Finish",
      "text": "卡卡利科村是只有行家才知道的萤火虫观赏胜地。黑夜中闪耀的萤火虫之光宛如点点繁星……服装店的俏丽女店员拉兹莉很喜欢萤火虫，但是她祖母十分严厉地，不许她晚上出门……“火虫能来我房间玩就好了……”拉兹莉的愿望能否实现呢？"
     },
     {
      "label": "QL_Kakariko_Ch_004_Name",
      "text": "卡卡利科村是只有行家才知道的萤火虫观赏胜地。黑夜中闪耀的萤火虫之光宛如点点繁星……服装店的俏丽女店员拉兹莉很喜欢萤火虫。在家里欣赏到最爱的萤火虫，她的脸上露出了笑容。"
     }
    ],
    "source": "QL_Kakariko_Ch_004"
   },
   "labels": [
    "QL_Kakariko_Ch_004_Finish",
    "QL_Kakariko_Ch_004_Name"
   ],
   "flags": {
    "ready": "Kakariko_Ch_004_Ready",
    "activated": "Kakariko_Ch_004_Activated",
    "finish": "Kakariko_Ch_004_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_004_First"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_004",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_004_Ready": 0,
    "Kakariko_Ch_004_Activated": 0,
    "Kakariko_Ch_004_Finish": 0,
    "Kakariko_Ch_004_First": 0
   },
   "status_snapshot": "未知",
   "title": "萤火虫之光",
   "title_source": "QL_Kakariko_Ch_004 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Ch_005",
   "name": "珂在村里活蹦乱跳。\n\n她好像是因为白天没有玩伴，\n所以闲得精力无处打发，\n但是她似乎已经遇到了好玩伴。",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_005",
   "text": {
    "name": "普莉珂在村里活蹦乱跳。她好像是因为白天没有玩伴，所以闲得精力无处打发，但是她似乎已经遇到了好玩伴。",
    "desc": null,
    "finish": "普莉珂在村里活蹦乱跳。她好像是因为白天没有玩伴，所以闲得精力无处打发。",
    "steps": {},
    "name_label": "QL_Kakariko_Ch_005_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Ch_005_Finish",
    "items": [
     {
      "label": null,
      "text": "和普莉珂玩吧！"
     },
     {
      "label": "QL_Kakariko_Ch_005_Finish",
      "text": "普莉珂在村里活蹦乱跳。她好像是因为白天没有玩伴，所以闲得精力无处打发。"
     },
     {
      "label": "QL_Kakariko_Ch_005_Name",
      "text": "普莉珂在村里活蹦乱跳。她好像是因为白天没有玩伴，所以闲得精力无处打发，但是她似乎已经遇到了好玩伴。"
     }
    ],
    "source": "QL_Kakariko_Ch_005"
   },
   "labels": [
    "QL_Kakariko_Ch_005_Finish",
    "QL_Kakariko_Ch_005_Name"
   ],
   "flags": {
    "ready": "Kakariko_Ch_005_Ready",
    "activated": "Kakariko_Ch_005_Activated",
    "finish": "Kakariko_Ch_005_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_005_1stReward",
     "Kakariko_Ch_005_full"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_005",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_005_Ready": 1,
    "Kakariko_Ch_005_Activated": 0,
    "Kakariko_Ch_005_Finish": 0,
    "Kakariko_Ch_005_1stReward": 0,
    "Kakariko_Ch_005_full": 0
   },
   "status_snapshot": "未开始",
   "title": "和普莉珂玩吧！",
   "title_source": "QL_Kakariko_Ch_005 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Ch_006",
   "name": "店店主塞罗拉\n习惯调侃看似能干的客人。\n\n“村里女神像附近的烛台点燃……\n与她明朗的笑容相反的是，\n她的任务好像并不容易解决。",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_006",
   "text": {
    "name": "杂货店店主塞罗拉习惯调侃看似能干的客人。“村里女神像附近的烛台点燃……与她明朗的笑容相反的是，她的任务好像并不容易解决。",
    "desc": "用燃烧的箭头刺穿它",
    "finish": null,
    "steps": {},
    "name_label": "QL_Kakariko_Ch_006_Name",
    "desc_label": "QL_Kakariko_Ch_006_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Kakariko_Ch_006_Desc",
      "text": "用燃烧的箭头刺穿它"
     },
     {
      "label": "QL_Kakariko_Ch_006_Name",
      "text": "杂货店店主塞罗拉习惯调侃看似能干的客人。“村里女神像附近的烛台点燃……与她明朗的笑容相反的是，她的任务好像并不容易解决。"
     },
     {
      "label": null,
      "text": "“村里女神像附近的烛台点燃……依照杂货店店主塞罗拉的委托，你点燃了烛台。快点告诉塞罗拉吧。"
     },
     {
      "label": "QL_Kakariko_Ch_006_Desc",
      "text": "一如烛台被点燃，塞罗拉的热情似乎也被点燃了。她和丈夫破镜重圆的日子应该也不远了吧。"
     }
    ],
    "source": "QL_Kakariko_Ch_006"
   },
   "labels": [
    "QL_Kakariko_Ch_006_Name",
    "QL_Kakariko_Ch_006_Desc",
    "QL_Kakariko_Ch_006_Desc"
   ],
   "flags": {
    "ready": "Kakariko_Ch_006_Ready",
    "activated": "Kakariko_Ch_006_Activated",
    "finish": "Kakariko_Ch_006_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_006_Arrow",
     "Kakariko_Ch_006_Light",
     "Kakariko_Ch_006_first",
     "Kakariko_Ch_006_hobi"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_006",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_006_Ready": 0,
    "Kakariko_Ch_006_Activated": 0,
    "Kakariko_Ch_006_Finish": 0,
    "Kakariko_Ch_006_Arrow": 0,
    "Kakariko_Ch_006_Light": 0,
    "Kakariko_Ch_006_first": 0,
    "Kakariko_Ch_006_hobi": 0
   },
   "status_snapshot": "未知",
   "title": "用燃烧的箭头刺穿它",
   "title_source": "QL_Kakariko_Ch_006 · text[0] · 标签:QL_Kakariko_Ch_006_Desc"
  },
  {
   "id": "Kakariko_Ch_Cooking2",
   "name": "娜干劲十足地拿起锅子\n正准备做黄油苹果，\n却发现她忘记买材料山羊黄油，\n不知怎么办才好。\n你将山羊黄油交给她，\n黄油苹果大功告成！\n珂珂娜脸上恢复了笑容。\n////食谱备忘/////苹果、山羊黄油",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_Cooking2",
   "text": {
    "name": "珂珂娜干劲十足地拿起锅子正准备做黄油苹果，却发现她忘记买材料山羊黄油，不知怎么办才好。你将山羊黄油交给她，黄油苹果大功告成！珂珂娜脸上恢复了笑容。////食谱备忘/////苹果、山羊黄油",
    "desc": null,
    "finish": "珂珂娜干劲十足地拿起锅子正准备做黄油苹果，却发现她忘记买材料羊黄油不知怎么办才好。如果有羊黄油好了……",
    "steps": {},
    "name_label": "QL_Kakariko_Ch_Cooking2_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Ch_Cooking2_Finish",
    "items": [
     {
      "label": null,
      "text": "珂珂娜的厨房２"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking2_Finish",
      "text": "珂珂娜干劲十足地拿起锅子正准备做黄油苹果，却发现她忘记买材料羊黄油不知怎么办才好。如果有羊黄油好了……"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking2_Name",
      "text": "珂珂娜干劲十足地拿起锅子正准备做黄油苹果，却发现她忘记买材料山羊黄油，不知怎么办才好。你将山羊黄油交给她，黄油苹果大功告成！珂珂娜脸上恢复了笑容。////食谱备忘/////苹果、山羊黄油"
     }
    ],
    "source": "QL_Kakariko_Ch_Cooking2"
   },
   "labels": [
    "QL_Kakariko_Ch_Cooking2_Finish",
    "QL_Kakariko_Ch_Cooking2_Name"
   ],
   "flags": {
    "ready": "Kakariko_Ch_Cooking2_Ready",
    "activated": "Kakariko_Ch_Cooking2_Activated",
    "finish": "Kakariko_Ch_Cooking2_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_Cooking2_Reward"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_Cooking2",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_Cooking2_Ready": 0,
    "Kakariko_Ch_Cooking2_Activated": 0,
    "Kakariko_Ch_Cooking2_Finish": 0,
    "Kakariko_Ch_Cooking2_Reward": 0
   },
   "status_snapshot": "未知",
   "title": "珂珂娜的厨房２",
   "title_source": "QL_Kakariko_Ch_Cooking2 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Ch_Cooking3",
   "name": "娜打算做“坚硬南瓜酿肉”\n来犒劳平日辛苦工作的父亲多朗。\n但是兽肉用完了，她不知怎么办才好。\n不过，多亏你给她送去兽肉，\n她能做出营养丰富的料理了。\n珂珂娜的脸上挂满了笑容。\n////食谱备忘/////肉（任何肉都OK）、铠甲南瓜",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_Cooking3",
   "text": {
    "name": "珂珂娜打算做“坚硬南瓜酿肉”来犒劳平日辛苦工作的父亲多朗。但是兽肉用完了，她不知怎么办才好。不过，多亏你给她送去兽肉，她能做出营养丰富的料理了。珂珂娜的脸上挂满了笑容。////食谱备忘/////肉（任何肉都OK）、铠甲南瓜",
    "desc": null,
    "finish": "珂珂娜打算做“坚硬南瓜酿肉”来犒劳平日辛苦工作的父亲多朗。当她干劲十足地拿起锅子准备做菜，却发现材料肉用完了，不知怎么办才好。要获得肉必须狩猎野兽，小孩子应该办不到。",
    "steps": {},
    "name_label": "QL_Kakariko_Ch_Cooking3_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Ch_Cooking3_Finish",
    "items": [
     {
      "label": null,
      "text": "珂珂娜的厨房３"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking3_Finish",
      "text": "珂珂娜打算做“坚硬南瓜酿肉”来犒劳平日辛苦工作的父亲多朗。当她干劲十足地拿起锅子准备做菜，却发现材料肉用完了，不知怎么办才好。要获得肉必须狩猎野兽，小孩子应该办不到。"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking3_Name",
      "text": "珂珂娜打算做“坚硬南瓜酿肉”来犒劳平日辛苦工作的父亲多朗。但是兽肉用完了，她不知怎么办才好。不过，多亏你给她送去兽肉，她能做出营养丰富的料理了。珂珂娜的脸上挂满了笑容。////食谱备忘/////肉（任何肉都OK）、铠甲南瓜"
     }
    ],
    "source": "QL_Kakariko_Ch_Cooking3"
   },
   "labels": [
    "QL_Kakariko_Ch_Cooking3_Finish",
    "QL_Kakariko_Ch_Cooking3_Name"
   ],
   "flags": {
    "ready": "Kakariko_Ch_Cooking3_Ready",
    "activated": "Kakariko_Ch_Cooking3_Activated",
    "finish": "Kakariko_Ch_Cooking3_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_Cooking3_Reward"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_Cooking3",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_Cooking3_Ready": 0,
    "Kakariko_Ch_Cooking3_Activated": 0,
    "Kakariko_Ch_Cooking3_Finish": 0,
    "Kakariko_Ch_Cooking3_Reward": 0
   },
   "status_snapshot": "未知",
   "title": "珂珂娜的厨房３",
   "title_source": "QL_Kakariko_Ch_Cooking3 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Ch_Cooking4",
   "name": "力蜂的蜂蜜交给珂珂娜，\n她似乎顺利地做出了\n母亲曾放入咖喱里的蜂蜜苹果。\n想起了令人怀念的母亲的味道，\n珂珂娜的脸上交织着笑容和眼泪。",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Ch_Cooking4",
   "text": {
    "name": "将精力蜂的蜂蜜交给珂珂娜，她似乎顺利地做出了母亲曾放入咖喱里的蜂蜜苹果。想起了令人怀念的母亲的味道，珂珂娜的脸上交织着笑容和眼泪。",
    "desc": null,
    "finish": "蜂蜜苹果是珂珂娜母亲喜欢的料理。珂珂娜想着大家的笑脸拿起锅子准备做菜，但是关键的力蜂的蜂蜜完了，不知怎么办才好。量蜂息于怪物盘踞的村外。小孩子应该无法拿到蜂蜜。",
    "steps": {},
    "name_label": "QL_Kakariko_Ch_Cooking4_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Ch_Cooking4_Finish",
    "items": [
     {
      "label": null,
      "text": "珂珂娜的厨房４"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking4_Finish",
      "text": "蜂蜜苹果是珂珂娜母亲喜欢的料理。珂珂娜想着大家的笑脸拿起锅子准备做菜，但是关键的力蜂的蜂蜜完了，不知怎么办才好。量蜂息于怪物盘踞的村外。小孩子应该无法拿到蜂蜜。"
     },
     {
      "label": "QL_Kakariko_Ch_Cooking4_Name",
      "text": "将精力蜂的蜂蜜交给珂珂娜，她似乎顺利地做出了母亲曾放入咖喱里的蜂蜜苹果。想起了令人怀念的母亲的味道，珂珂娜的脸上交织着笑容和眼泪。"
     }
    ],
    "source": "QL_Kakariko_Ch_Cooking4"
   },
   "labels": [
    "QL_Kakariko_Ch_Cooking4_Finish",
    "QL_Kakariko_Ch_Cooking4_Name"
   ],
   "flags": {
    "ready": "Kakariko_Ch_Cooking4_Ready",
    "activated": "Kakariko_Ch_Cooking4_Activated",
    "finish": "Kakariko_Ch_Cooking4_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Ch_Cooking4_Reward"
    ]
   },
   "source": [
    "QL_Kakariko_Ch_Cooking4",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Ch_Cooking4_Ready": 0,
    "Kakariko_Ch_Cooking4_Activated": 0,
    "Kakariko_Ch_Cooking4_Finish": 0,
    "Kakariko_Ch_Cooking4_Reward": 0
   },
   "status_snapshot": "未知",
   "title": "珂珂娜的厨房４",
   "title_source": "QL_Kakariko_Ch_Cooking4 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Cha_001",
   "name": "买材料速速胡萝卜\n而不知如何是好的珂珂娜\n顺利地拿到速速胡萝卜，\n可以做速速蔬菜浓汤了！\n珂珂娜恢复了笑容，\n普莉珂也一定会很高兴吧！\n////食谱备忘/////速速胡萝卜、岩盐、鲜奶",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Cha_001",
   "text": {
    "name": "忘记买材料速速胡萝卜而不知如何是好的珂珂娜顺利地拿到速速胡萝卜，可以做速速蔬菜浓汤了！珂珂娜恢复了笑容，普莉珂也一定会很高兴吧！////食谱备忘/////速速胡萝卜、岩盐、鲜奶",
    "desc": null,
    "finish": "“今天的菜单是速速蔬菜浓汤！”珂珂娜干劲十足地拿起锅子准备做菜，却发现她忘记买材料速胡萝卜不知怎么办才好。速速蔬菜浓汤是她妹妹普莉珂的最爱，这样下去珂珂娜和普莉珂都会很难过。如果有速胡萝卜好了……",
    "steps": {},
    "name_label": "QL_Kakariko_Cha_001_Name",
    "desc_label": null,
    "finish_label": "QL_Kakariko_Cha_001_Finish",
    "items": [
     {
      "label": null,
      "text": "珂珂娜的厨房"
     },
     {
      "label": "QL_Kakariko_Cha_001_Finish",
      "text": "“今天的菜单是速速蔬菜浓汤！”珂珂娜干劲十足地拿起锅子准备做菜，却发现她忘记买材料速胡萝卜不知怎么办才好。速速蔬菜浓汤是她妹妹普莉珂的最爱，这样下去珂珂娜和普莉珂都会很难过。如果有速胡萝卜好了……"
     },
     {
      "label": "QL_Kakariko_Cha_001_Name",
      "text": "忘记买材料速速胡萝卜而不知如何是好的珂珂娜顺利地拿到速速胡萝卜，可以做速速蔬菜浓汤了！珂珂娜恢复了笑容，普莉珂也一定会很高兴吧！////食谱备忘/////速速胡萝卜、岩盐、鲜奶"
     }
    ],
    "source": "QL_Kakariko_Cha_001"
   },
   "labels": [
    "QL_Kakariko_Cha_001_Finish",
    "QL_Kakariko_Cha_001_Name"
   ],
   "flags": {
    "ready": "Kakariko_Cha_001_Ready",
    "activated": "Kakariko_Cha_001_Activated",
    "finish": "Kakariko_Cha_001_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Cha_001_Reward"
    ]
   },
   "source": [
    "QL_Kakariko_Cha_001",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Cha_001_Ready": 1,
    "Kakariko_Cha_001_Activated": 0,
    "Kakariko_Cha_001_Finish": 0,
    "Kakariko_Cha_001_Reward": 0
   },
   "status_snapshot": "未开始",
   "title": "珂珂娜的厨房",
   "title_source": "QL_Kakariko_Cha_001 · text[0] · 无标签"
  },
  {
   "id": "Kakariko_Cha_002",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Kakariko_Cha_002_Ready",
    "activated": "Kakariko_Cha_002_Activated",
    "finish": "Kakariko_Cha_002_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Cha_002_Battle",
     "Kakariko_Cha_002_first"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Cha_002_Ready": 0,
    "Kakariko_Cha_002_Activated": 0,
    "Kakariko_Cha_002_Finish": 0,
    "Kakariko_Cha_002_Battle": 0,
    "Kakariko_Cha_002_first": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Kakariko_Cha_003",
   "name": "多非常喜欢的咕咕鸡逃出了栅栏。\n你找遍村子，终于找回了所有咕咕鸡。\n\n快点将这件事告诉博嘉多，\n让他放心吧。",
   "category": "迷你挑战",
   "subcategory": "卡卡利科村",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Kakariko_Cha_003",
   "text": {
    "name": "博嘉多非常喜欢的咕咕鸡逃出了栅栏。你找遍村子，终于找回了所有咕咕鸡。快点将这件事告诉博嘉多，让他放心吧。",
    "desc": "博嘉多非常喜欢的咕咕鸡逃出了栅栏。你找遍村子，终于找回了所有咕咕鸡。快点将这件事告诉博嘉多，让他放心吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_Kakariko_Cha_003_Desc",
    "desc_label": "QL_Kakariko_Cha_003_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "消失的咕咕鸡"
     },
     {
      "label": null,
      "text": "博嘉多非常喜欢的咕咕鸡逃出了栅栏。博嘉多一共有0只咕鸡。找到全部的咕咕鸡，将它们放回栅栏中吧。"
     },
     {
      "label": "QL_Kakariko_Cha_003_Desc",
      "text": "博嘉多非常喜欢的咕咕鸡逃出了栅栏。你找遍村子，终于找回了所有咕咕鸡。快点将这件事告诉博嘉多，让他放心吧。"
     },
     {
      "label": null,
      "text": "博嘉多非常喜欢的咕咕鸡逃出了栅栏。不过你找遍村子，成功找回了所有咕咕鸡。博嘉多重新意识到咕咕鸡的重要性，同时他好像也意识到了妻子的重要性。"
     }
    ],
    "source": "QL_Kakariko_Cha_003"
   },
   "labels": [
    "QL_Kakariko_Cha_003_Desc",
    "QL_Kakariko_Cha_003_Name",
    "����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\"\u0000\u0000\u0000�\u0000\u0000\u0001\u0014m�Y1v�T�T��!\u0000\u0000SZV\tY\u001a�^^8U�k\"v�T�T��!�\u0003Q�N�h\u0005h\u000f0\u0002\u0000\n\u0000\nSZV\tY\u001aN\u0000Qqg\t\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000\u00001\u00000S�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002��T�T"
   ],
   "flags": {
    "ready": "Kakariko_Cha_003_Ready",
    "activated": "Kakariko_Cha_003_Activated",
    "finish": "Kakariko_Cha_003_Finish",
    "steps": [],
    "aux": [
     "Kakariko_Cha_003_10kokko"
    ]
   },
   "source": [
    "QL_Kakariko_Cha_003",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Kakariko_Cha_003_Ready": 0,
    "Kakariko_Cha_003_Activated": 0,
    "Kakariko_Cha_003_Finish": 0,
    "Kakariko_Cha_003_10kokko": 0
   },
   "status_snapshot": "未知",
   "title": "消失的咕咕鸡",
   "title_source": "QL_Kakariko_Cha_003 · text[0] · 无标签"
  },
  {
   "id": "KnightDoll",
   "name": "确引导吾等七人魂灵之人，\n　方能赐予勇者的试练资格。”\n\n根据谜题的指示，\n将魂灵中描绘的图案\n与英雄们的装饰相匹配，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_KnightDoll",
   "text": {
    "name": "“正确引导吾等七人魂灵之人，　方能赐予勇者的试练资格。”根据谜题的指示，将魂灵中描绘的图案与英雄们的装饰相匹配，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "据说格鲁德小镇外以东有位英雄的巨像巨像似乎与勇者的试练有关……首先，必须解开这个谜题。“正确引导吾等七人魂灵之人，　方能赐予勇者的试练资格。”",
    "steps": {},
    "name_label": "QL_KnightDoll_Name",
    "desc_label": null,
    "finish_label": "QL_KnightDoll_Finish",
    "items": [
     {
      "label": null,
      "text": "七位英雄"
     },
     {
      "label": "QL_KnightDoll_Finish",
      "text": "据说格鲁德小镇外以东有位英雄的巨像巨像似乎与勇者的试练有关……首先，必须解开这个谜题。“正确引导吾等七人魂灵之人，　方能赐予勇者的试练资格。”"
     },
     {
      "label": "QL_KnightDoll_Name",
      "text": "“正确引导吾等七人魂灵之人，　方能赐予勇者的试练资格。”根据谜题的指示，将魂灵中描绘的图案与英雄们的装饰相匹配，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_KnightDoll"
   },
   "labels": [
    "QL_KnightDoll_Finish",
    "QL_KnightDoll_Name"
   ],
   "flags": {
    "ready": "KnightDoll_Ready",
    "activated": "KnightDoll_Activated",
    "finish": "KnightDoll_Finish",
    "steps": [],
    "aux": [
     "KnightDoll_Dungeon",
     "KnightDoll_SetA",
     "KnightDoll_SetB",
     "KnightDoll_SetC",
     "KnightDoll_SetD",
     "KnightDoll_SetE",
     "KnightDoll_SetF",
     "KnightDoll_SetG",
     "KnightDoll_first"
    ]
   },
   "source": [
    "QL_KnightDoll",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "KnightDoll_Ready": 1,
    "KnightDoll_Activated": 0,
    "KnightDoll_Finish": 0,
    "KnightDoll_Dungeon": 0,
    "KnightDoll_SetA": 0,
    "KnightDoll_SetB": 0,
    "KnightDoll_SetC": 0,
    "KnightDoll_SetD": 0,
    "KnightDoll_SetE": 0,
    "KnightDoll_SetF": 0,
    "KnightDoll_SetG": 1,
    "KnightDoll_first": 0
   },
   "status_snapshot": "未开始",
   "title": "七位英雄",
   "title_source": "QL_KnightDoll · text[0] · 无标签"
  },
  {
   "id": "KorokMini_KorokShiren",
   "name": "方的“操控力的试练”。\n西北方的“最初的试练”。\n东方的“不燃烧的试练”。\n\n你通过了这3项试练，\n将此事告诉思达吉吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_KorokMini_KorokShiren",
   "text": {
    "name": "西南方的“操控力的试练”。西北方的“最初的试练”。东方的“不燃烧的试练”。你通过了这3项试练，将此事告诉思达吉吧。",
    "desc": "西南方的“操控力的试练”。西北方的“最初的试练”。东方的“不燃烧的试练”。你通过了这3项试练，将此事告诉思达吉吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_KorokMini_KorokShiren_Desc",
    "desc_label": "QL_KorokMini_KorokShiren_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "克洛格试练"
     },
     {
      "label": null,
      "text": "思达吉告诉你有关克洛格试练的消息。西南方的“操控力的试练”。西北方的“最初的试练”。东方的“不燃烧的试练”。据说与神庙有密切关系……"
     },
     {
      "label": "QL_KorokMini_KorokShiren_Desc",
      "text": "西南方的“操控力的试练”。西北方的“最初的试练”。东方的“不燃烧的试练”。你通过了这3项试练，将此事告诉思达吉吧。"
     },
     {
      "label": null,
      "text": "西南方的“操控力的试练”。西北方的“最初的试练”。东方的“不燃烧的试练”。告诉思达吉你已通过3项试练，获得了豪华奖品！"
     }
    ],
    "source": "QL_KorokMini_KorokShiren"
   },
   "labels": [
    "QL_KorokMini_KorokShiren_Desc",
    "QL_KorokMini_KorokShiren_Name",
    "������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000 \u0000\u0000\u0000�\u0000\u0000\u00010QKm\u001bh<��~�\u0000\u0000`\u001d��T\tTJ��O`g\tQsQKm\u001bh<��~�v�m�`o0\u0002\u0000\n\u0000\n�SWe�v� \u001cd�c�R�v���~� \u001d0\u0002\u0000\n�S\u0017e�v� \u001cg\u0000R\u001dv���~"
   ],
   "flags": {
    "ready": "KorokMini_KorokShiren_Ready",
    "activated": "KorokMini_KorokShiren_Activated",
    "finish": "KorokMini_KorokShiren_Finish",
    "steps": [
     "KorokMini_KorokShiren_Step010"
    ],
    "aux": [
     "KorokMini_KorokShiren_RewardNotYet"
    ]
   },
   "source": [
    "QL_KorokMini_KorokShiren",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "KorokMini_KorokShiren_Ready": 0,
    "KorokMini_KorokShiren_Activated": 0,
    "KorokMini_KorokShiren_Finish": 0,
    "KorokMini_KorokShiren_Step010": 0,
    "KorokMini_KorokShiren_RewardNotYet": 0
   },
   "status_snapshot": "未知",
   "title": "克洛格试练",
   "title_source": "QL_KorokMini_KorokShiren · text[0] · 无标签"
  },
  {
   "id": "KorokMini_RiddleShiren",
   "name": "鲁猜谜试练",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_KorokMini_RiddleShiren",
   "text": {
    "name": "海拉鲁猜谜试练",
    "desc": "你答对了第4题，下一道题是：“似爪非爪，足中帝王，　猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。",
    "finish": "你即将去挑战海拉鲁猜谜试练。“又小，又红，又圆，又爽口，又甜美！　猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。",
    "steps": {},
    "name_label": "QL_KorokMini_RiddleShiren_Name",
    "desc_label": "QL_KorokMini_RiddleShiren_Desc",
    "finish_label": "QL_KorokMini_RiddleShiren_Name",
    "items": [
     {
      "label": "QL_KorokMini_RiddleShiren_Name",
      "text": "海拉鲁猜谜试练"
     },
     {
      "label": "QL_KorokMini_RiddleShiren_Name",
      "text": "你即将去挑战海拉鲁猜谜试练。“又小，又红，又圆，又爽口，又甜美！　猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。"
     },
     {
      "label": null,
      "text": "你答对了第1题，下一道题是：“卡卡利科村特产！　坚硬的蔬菜，猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。"
     },
     {
      "label": null,
      "text": "你答对了第2题，下一道题是：“生长在炎热之地，烹饪后  会暖暖的蘑菇，猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。"
     },
     {
      "label": null,
      "text": "你答对了第3题，下一道题是：“吃了就不怕电击的鳟鱼！　猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。"
     },
     {
      "label": "QL_KorokMini_RiddleShiren_Desc",
      "text": "你答对了第4题，下一道题是：“似爪非爪，足中帝王，　猜猜是什么谜？”如果你猜出谜底，就找到它并拿去纳末敏那里吧。"
     },
     {
      "label": null,
      "text": "你答对了纳末敏所出的共5道谜题。你完成了克洛格终极试练“海拉鲁猜谜试练”！"
     }
    ],
    "source": "QL_KorokMini_RiddleShiren"
   },
   "labels": [
    "QL_KorokMini_RiddleShiren_Name",
    "QL_KorokMini_RiddleShiren_Name",
    "QL_KorokMini_RiddleShiren_Finish",
    "QL_KorokMini_RiddleShiren_Desc",
    "ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0003*\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000 \u0000\u0000\u00000\u0000\u0000\u0000�\u0000\u0000\u0001D\u0000\u0000\u0001�\u0000\u0000\u0002X\u0000\u0000\u0002�mwbɜ�s\u001c�\u001c��~�\u0000\u0000O`Ss\\\u0006S�c\u0011b\u0018mwbɜ�s\u001c�\u001c��~�0\u0002\u0000\n\u0000\n \u001cS�\\\u000f�\fS�~��\fS�W\u0006�\fS�r=S��\fS�u\u001c��\u0001\u0000\n0\u0000s\u001cs"
   ],
   "flags": {
    "ready": "KorokMini_RiddleShiren_Ready",
    "activated": "KorokMini_RiddleShiren_Activated",
    "finish": "KorokMini_RiddleShiren_Finish",
    "steps": [
     "KorokMini_RiddleShiren_Step010",
     "KorokMini_RiddleShiren_Step020",
     "KorokMini_RiddleShiren_Step030",
     "KorokMini_RiddleShiren_Step040"
    ],
    "aux": [
     "KorokMini_RiddleShiren_RewardNotYet"
    ]
   },
   "source": [
    "QL_KorokMini_RiddleShiren",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "KorokMini_RiddleShiren_Ready": 1,
    "KorokMini_RiddleShiren_Activated": 0,
    "KorokMini_RiddleShiren_Finish": 0,
    "KorokMini_RiddleShiren_Step010": 0,
    "KorokMini_RiddleShiren_Step020": 0,
    "KorokMini_RiddleShiren_Step030": 0,
    "KorokMini_RiddleShiren_Step040": 0,
    "KorokMini_RiddleShiren_RewardNotYet": 0
   },
   "status_snapshot": "未开始",
   "title": "海拉鲁猜谜试练",
   "title_source": "QL_KorokMini_RiddleShiren · text[0] · 标签:QL_KorokMini_RiddleShiren_Name"
  },
  {
   "id": "KorokMini_RodShiren",
   "name": "拉塞看了冰之杖！\n\n你所获得的杖是\n可以释放冰将怪物变坚硬的魔法之杖。\n似乎能在战斗中派上用场。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_KorokMini_RodShiren",
   "text": {
    "name": "给卡拉塞看了冰之杖！你所获得的杖是可以释放冰将怪物变坚硬的魔法之杖。似乎能在战斗中派上用场。",
    "desc": null,
    "finish": "卡拉塞对你说“给我看一下冰之杖！”冰雪长袍魔法师好像持有释放冰的杖。",
    "steps": {},
    "name_label": "QL_KorokMini_RodShiren_Name",
    "desc_label": null,
    "finish_label": "QL_KorokMini_RodShiren_Finish",
    "items": [
     {
      "label": null,
      "text": "冰之杖试练"
     },
     {
      "label": "QL_KorokMini_RodShiren_Finish",
      "text": "卡拉塞对你说“给我看一下冰之杖！”冰雪长袍魔法师好像持有释放冰的杖。"
     },
     {
      "label": "QL_KorokMini_RodShiren_Name",
      "text": "给卡拉塞看了冰之杖！你所获得的杖是可以释放冰将怪物变坚硬的魔法之杖。似乎能在战斗中派上用场。"
     }
    ],
    "source": "QL_KorokMini_RodShiren"
   },
   "labels": [
    "QL_KorokMini_RodShiren_Finish",
    "QL_KorokMini_RodShiren_Name"
   ],
   "flags": {
    "ready": "KorokMini_RodShiren_Ready",
    "activated": "KorokMini_RodShiren_Activated",
    "finish": "KorokMini_RodShiren_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_KorokMini_RodShiren",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "KorokMini_RodShiren_Ready": 0,
    "KorokMini_RodShiren_Activated": 0,
    "KorokMini_RodShiren_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "冰之杖试练",
   "title_source": "QL_KorokMini_RodShiren · text[0] · 无标签"
  },
  {
   "id": "KorokMini_UMAShiren",
   "name": "康看了卢咪的照片。\n\n卢咪好像是一种\n中箭后会掉出卢比的稀有生物。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_KorokMini_UMAShiren",
   "text": {
    "name": "给匹康看了卢咪的照片。卢咪好像是一种中箭后会掉出卢比的稀有生物。",
    "desc": null,
    "finish": "匹康拜托你说，不管是图片或者其它形式他想要看看咪模样！卢咪好像是一种会全身发光的神奇生物。",
    "steps": {},
    "name_label": "QL_KorokMini_UMAShiren_Name",
    "desc_label": null,
    "finish_label": "QL_KorokMini_UMAShiren_Finish",
    "items": [
     {
      "label": null,
      "text": "闪闪发光的卢咪试练"
     },
     {
      "label": "QL_KorokMini_UMAShiren_Finish",
      "text": "匹康拜托你说，不管是图片或者其它形式他想要看看咪模样！卢咪好像是一种会全身发光的神奇生物。"
     },
     {
      "label": "QL_KorokMini_UMAShiren_Name",
      "text": "给匹康看了卢咪的照片。卢咪好像是一种中箭后会掉出卢比的稀有生物。"
     }
    ],
    "source": "QL_KorokMini_UMAShiren"
   },
   "labels": [
    "QL_KorokMini_UMAShiren_Finish",
    "QL_KorokMini_UMAShiren_Name"
   ],
   "flags": {
    "ready": "KorokMini_UMAShiren_Ready",
    "activated": "KorokMini_UMAShiren_Activated",
    "finish": "KorokMini_UMAShiren_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_KorokMini_UMAShiren",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "KorokMini_UMAShiren_Ready": 0,
    "KorokMini_UMAShiren_Activated": 0,
    "KorokMini_UMAShiren_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "闪闪发光的卢咪试练",
   "title_source": "QL_KorokMini_UMAShiren · text[0] · 无标签"
  },
  {
   "id": "LanayruMini_ZoraRelief",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "LanayruMini_ZoraRelief_Ready",
    "activated": "LanayruMini_ZoraRelief_Activated",
    "finish": "LanayruMini_ZoraRelief_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "LanayruMini_ZoraRelief_Ready": 1,
    "LanayruMini_ZoraRelief_Activated": 0,
    "LanayruMini_ZoraRelief_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "LetterErrand",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "LetterErrand_Ready",
    "activated": "LetterErrand_Activated",
    "finish": "LetterErrand_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "LetterErrand_Ready": 1,
    "LetterErrand_Activated": 0,
    "LetterErrand_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MacuseIseki",
   "name": "代球运到马秋兹半岛中心，\n从而发现了勇者的试练。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_MacuseIseki",
   "text": {
    "name": "将古代球运到马秋兹半岛中心，从而发现了勇者的试练。",
    "desc": null,
    "finish": "“若要前往马秋兹半岛的勇者的试练，  此代球为你指路。”石碑上记载的这段话是什么意思呢？",
    "steps": {},
    "name_label": "QL_MacuseIseki_Name",
    "desc_label": null,
    "finish_label": "QL_MacuseIseki_Finish",
    "items": [
     {
      "label": null,
      "text": "前往漩涡状中心"
     },
     {
      "label": "QL_MacuseIseki_Finish",
      "text": "“若要前往马秋兹半岛的勇者的试练，  此代球为你指路。”石碑上记载的这段话是什么意思呢？"
     },
     {
      "label": "QL_MacuseIseki_Name",
      "text": "将古代球运到马秋兹半岛中心，从而发现了勇者的试练。"
     }
    ],
    "source": "QL_MacuseIseki"
   },
   "labels": [
    "QL_MacuseIseki_Finish",
    "QL_MacuseIseki_Name"
   ],
   "flags": {
    "ready": "MacuseIseki_Ready",
    "activated": "MacuseIseki_Activated",
    "finish": "MacuseIseki_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MacuseIseki",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MacuseIseki_Ready": 1,
    "MacuseIseki_Activated": 0,
    "MacuseIseki_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "前往漩涡状中心",
   "title_source": "QL_MacuseIseki · text[0] · 无标签"
  },
  {
   "id": "MagneticFld",
   "name": "剑士的指引，\n在沙尘暴中成功找到了宝物！\n\n宝物是一座古代神庙！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_MagneticFld",
   "text": {
    "name": "根据剑士的指引，在沙尘暴中成功找到了宝物！宝物是一座古代神庙！",
    "desc": null,
    "finish": "格鲁德沙漠有个传说称士之像指引之地藏有宝物。看来需要在沙尘暴中前行了……",
    "steps": {},
    "name_label": "QL_MagneticFld_Name",
    "desc_label": null,
    "finish_label": "QL_MagneticFld_Finish",
    "items": [
     {
      "label": null,
      "text": "不会说话的剑士"
     },
     {
      "label": "QL_MagneticFld_Finish",
      "text": "格鲁德沙漠有个传说称士之像指引之地藏有宝物。看来需要在沙尘暴中前行了……"
     },
     {
      "label": "QL_MagneticFld_Name",
      "text": "根据剑士的指引，在沙尘暴中成功找到了宝物！宝物是一座古代神庙！"
     }
    ],
    "source": "QL_MagneticFld"
   },
   "labels": [
    "QL_MagneticFld_Finish",
    "QL_MagneticFld_Name"
   ],
   "flags": {
    "ready": "MagneticFld_Ready",
    "activated": "MagneticFld_Activated",
    "finish": "MagneticFld_Finish",
    "steps": [],
    "aux": [
     "MagneticFld_assassin",
     "MagneticFld_assassin_GJ",
     "MagneticFld_assassin_first"
    ]
   },
   "source": [
    "QL_MagneticFld",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MagneticFld_Ready": 1,
    "MagneticFld_Activated": 0,
    "MagneticFld_Finish": 0,
    "MagneticFld_assassin": 0,
    "MagneticFld_assassin_GJ": 0,
    "MagneticFld_assassin_first": 0
   },
   "status_snapshot": "未开始",
   "title": "不会说话的剑士",
   "title_source": "QL_MagneticFld · text[0] · 无标签"
  },
  {
   "id": "MamonoShop_BigEnemy_Giant",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 无任务日志(QL)但存在 EventFlowMsg/MamonoShop_BigEnemy_Giant.msbt 文本，分类待人工确认",
   "message_file": null,
   "text": null,
   "labels": [
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������",
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������"
   ],
   "flags": {
    "ready": "MamonoShop_BigEnemy_Giant_Ready",
    "activated": "MamonoShop_BigEnemy_Giant_Activated",
    "finish": "MamonoShop_BigEnemy_Giant_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "EventFlowMsg/MamonoShop_BigEnemy_Giant.msbt",
    "savdata_list471B.json"
   ],
   "confidence": "probable",
   "values": {
    "MamonoShop_BigEnemy_Giant_Ready": 1,
    "MamonoShop_BigEnemy_Giant_Activated": 0,
    "MamonoShop_BigEnemy_Giant_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MamonoShop_BigEnemy_Golem",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 无任务日志(QL)但存在 EventFlowMsg/MamonoShop_BigEnemy_Golem.msbt 文本，分类待人工确认",
   "message_file": null,
   "text": null,
   "labels": [
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������",
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������"
   ],
   "flags": {
    "ready": "MamonoShop_BigEnemy_Golem_Ready",
    "activated": "MamonoShop_BigEnemy_Golem_Activated",
    "finish": "MamonoShop_BigEnemy_Golem_Finish",
    "steps": [
     "MamonoShop_BigEnemy_Golem_Step1"
    ],
    "aux": []
   },
   "source": [
    "EventFlowMsg/MamonoShop_BigEnemy_Golem.msbt",
    "savdata_list471B.json"
   ],
   "confidence": "probable",
   "values": {
    "MamonoShop_BigEnemy_Golem_Ready": 1,
    "MamonoShop_BigEnemy_Golem_Activated": 0,
    "MamonoShop_BigEnemy_Golem_Finish": 0,
    "MamonoShop_BigEnemy_Golem_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MamonoShop_BigEnemy_Golem_Mamonoshop_BigEnemy_Golem",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [
     "MamonoShop_BigEnemy_Golem_Mamonoshop_BigEnemy_Golem_Step1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "MamonoShop_BigEnemy_Golem_Mamonoshop_BigEnemy_Golem_Step1": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MamonoShop_BigEnemy_Sandworm",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 无任务日志(QL)但存在 EventFlowMsg/MamonoShop_BigEnemy_Sandworm.msbt 文本，分类待人工确认",
   "message_file": null,
   "text": null,
   "labels": [
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������",
    "�����������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004��������TXT2\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000������������"
   ],
   "flags": {
    "ready": "MamonoShop_BigEnemy_Sandworm_Ready",
    "activated": "MamonoShop_BigEnemy_Sandworm_Activated",
    "finish": "MamonoShop_BigEnemy_Sandworm_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "EventFlowMsg/MamonoShop_BigEnemy_Sandworm.msbt",
    "savdata_list471B.json"
   ],
   "confidence": "probable",
   "values": {
    "MamonoShop_BigEnemy_Sandworm_Ready": 1,
    "MamonoShop_BigEnemy_Sandworm_Activated": 0,
    "MamonoShop_BigEnemy_Sandworm_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MarittaMini_BigWhales",
   "name": "尔汀地区、海布拉地区、格鲁德地区的\n巨鲸化石的照片全部给奥拉科他们看过后，\n获得00卢比为谢礼。\n\n这下子他们的研究也会有所进展吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MarittaMini_BigWhales",
   "text": {
    "name": "将奥尔汀地区、海布拉地区、格鲁德地区的巨鲸化石的照片全部给奥拉科他们看过后，获得00卢比为谢礼。这下子他们的研究也会有所进展吧。",
    "desc": null,
    "finish": "玛丽塔驿站的奥拉科拜托你画下巨鲸化石。图画只要有头部，不是全身也没问题。据说巨鲸之骨位于东北的奥尔汀地区、西北的海布拉地区、西南的格鲁德地区。",
    "steps": {},
    "name_label": "QL_MarittaMini_BigWhales_Name",
    "desc_label": null,
    "finish_label": "QL_MarittaMini_BigWhales_Finish",
    "items": [
     {
      "label": null,
      "text": "巨鲸化石"
     },
     {
      "label": "QL_MarittaMini_BigWhales_Finish",
      "text": "玛丽塔驿站的奥拉科拜托你画下巨鲸化石。图画只要有头部，不是全身也没问题。据说巨鲸之骨位于东北的奥尔汀地区、西北的海布拉地区、西南的格鲁德地区。"
     },
     {
      "label": "QL_MarittaMini_BigWhales_Name",
      "text": "将奥尔汀地区、海布拉地区、格鲁德地区的巨鲸化石的照片全部给奥拉科他们看过后，获得00卢比为谢礼。这下子他们的研究也会有所进展吧。"
     }
    ],
    "source": "QL_MarittaMini_BigWhales"
   },
   "labels": [
    "QL_MarittaMini_BigWhales_Finish",
    "QL_MarittaMini_BigWhales_Name"
   ],
   "flags": {
    "ready": "MarittaMini_BigWhales_Ready",
    "activated": "MarittaMini_BigWhales_Activated",
    "finish": "MarittaMini_BigWhales_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MarittaMini_BigWhales",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MarittaMini_BigWhales_Ready": 0,
    "MarittaMini_BigWhales_Activated": 0,
    "MarittaMini_BigWhales_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "巨鲸化石",
   "title_source": "QL_MarittaMini_BigWhales · text[0] · 无标签"
  },
  {
   "id": "MessageGame",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "MessageGame_Ready",
    "activated": "MessageGame_Activated",
    "finish": "MessageGame_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "MessageGame_Ready": 1,
    "MessageGame_Activated": 0,
    "MessageGame_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MinakkareMini_Dragonfly",
   "name": "的虫子之中\n茨亚特别喜欢蜻蜓。\n\n但茱英好像非常怕蜻蜓，\n所以她不忍心央求姐姐。\n\n把这件事告诉英。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MinakkareMini_Dragonfly",
   "text": {
    "name": "所有的虫子之中茨亚特别喜欢蜻蜓。但茱英好像非常怕蜻蜓，所以她不忍心央求姐姐。把这件事告诉英。",
    "desc": "所有的虫子之中茨亚特别喜欢蜻蜓。但茱英好像非常怕蜻蜓，所以她不忍心央求姐姐。把这件事告诉英。",
    "finish": null,
    "steps": {
     "QL_MinakkareMini_Dragonfly_Dragonfly": "茱英想为她那喜欢虫子的妹妹茨亚准备生日礼物。她曾问过妹妹想要什么虫子，但是茨亚不肯告诉她。向亚听打听吧。"
    },
    "name_label": "QL_MinakkareMini_Dragonfly_Name",
    "desc_label": "QL_MinakkareMini_Dragonfly_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_MinakkareMini_Dragonfly_Desc",
      "text": "小妹妹的大愿望"
     },
     {
      "label": "QL_MinakkareMini_Dragonfly_Dragonfly",
      "text": "茱英想为她那喜欢虫子的妹妹茨亚准备生日礼物。她曾问过妹妹想要什么虫子，但是茨亚不肯告诉她。向亚听打听吧。"
     },
     {
      "label": "QL_MinakkareMini_Dragonfly_Name",
      "text": "所有的虫子之中茨亚特别喜欢蜻蜓。但茱英好像非常怕蜻蜓，所以她不忍心央求姐姐。把这件事告诉英。"
     },
     {
      "label": null,
      "text": "茱英果然非常怕蜻蜓，但是她心意已决，无论如何都想亲手把礼物送给妹妹。为英去一只暖蜻蜓冷蜻蜓还有麻蜻蜓。"
     },
     {
      "label": null,
      "text": "茱英还是不敢触碰蜻蜓。直接把暖蜻蜓冷蜻蜓 还有麻蜻蜓给她的妹妹亚。"
     },
     {
      "label": null,
      "text": "你把暖暖蜻蜓、冰冷蜻蜓、还有酥麻蜻蜓送给茨亚了。茨亚喜出望外，飞奔去茱英那里。怕蜻蜓的英事吧？"
     },
     {
      "label": null,
      "text": "把暖暖蜻蜓、冰冷蜻蜓、酥麻蜻蜓送给茨亚后，从茱英那里获得谢礼。"
     }
    ],
    "source": "QL_MinakkareMini_Dragonfly"
   },
   "labels": [
    "QL_MinakkareMini_Dragonfly_Name",
    "QL_MinakkareMini_Dragonfly_Desc",
    "QL_MinakkareMini_Dragonfly_Desc",
    "QL_MinakkareMini_Dragonfly_Dragonfly",
    "QL_MinakkareMini_Dragonfly_Through"
   ],
   "flags": {
    "ready": "MinakkareMini_Dragonfly_Ready",
    "activated": "MinakkareMini_Dragonfly_Activated",
    "finish": "MinakkareMini_Dragonfly_Finish",
    "steps": [],
    "aux": [
     "MinakkareMini_Dragonfly_Dragonfly",
     "MinakkareMini_Dragonfly_Give",
     "MinakkareMini_Dragonfly_LittleSister",
     "MinakkareMini_Dragonfly_Through"
    ]
   },
   "source": [
    "QL_MinakkareMini_Dragonfly",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MinakkareMini_Dragonfly_Ready": 1,
    "MinakkareMini_Dragonfly_Activated": 0,
    "MinakkareMini_Dragonfly_Finish": 0,
    "MinakkareMini_Dragonfly_Dragonfly": 0,
    "MinakkareMini_Dragonfly_Give": 0,
    "MinakkareMini_Dragonfly_LittleSister": 0,
    "MinakkareMini_Dragonfly_Through": 0
   },
   "status_snapshot": "未开始",
   "title": "小妹妹的大愿望",
   "title_source": "QL_MinakkareMini_Dragonfly · text[0] · 标签:QL_MinakkareMini_Dragonfly_Desc"
  },
  {
   "id": "MinamihateeluMini_touzoku",
   "name": "物猎人多米达克和布利森兄弟那里\n获得了写有拉姆达大盗的财宝下落的暗号。\n\n“稚弟卧川波，逆流而上溯其源。\n　暗夜银光现，瀑布水落自九天。”\n\n一夜暴富的梦想是否能实现呢……",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MinamihateeluMini_touzoku",
   "text": {
    "name": "从宝物猎人多米达克和布利森兄弟那里获得了写有拉姆达大盗的财宝下落的暗号。“稚弟卧川波，逆流而上溯其源。　暗夜银光现，瀑布水落自九天。”一夜暴富的梦想是否能实现呢……",
    "desc": "从宝物猎人多米达克和布利森兄弟那里获得了写有拉姆达大盗的财宝下落的暗号。“稚弟卧川波，逆流而上溯其源。　暗夜银光现，瀑布水落自九天。”一夜暴富的梦想是否能实现呢……",
    "finish": "从宝物猎人多米达克和布利森兄弟那里获得了写有拉姆达大盗的财宝下落的暗号。“稚弟卧川波，逆流而上溯其源。　暗夜银光现，瀑布水落自九天。”一夜暴富的梦想是否能实现呢……",
    "steps": {},
    "name_label": "QL_MinamihateeluMini_touzoku_Finish",
    "desc_label": "QL_MinamihateeluMini_touzoku_Finish",
    "finish_label": "QL_MinamihateeluMini_touzoku_Finish",
    "items": [
     {
      "label": null,
      "text": "拉姆达大盗的财宝"
     },
     {
      "label": "QL_MinamihateeluMini_touzoku_Finish",
      "text": "从宝物猎人多米达克和布利森兄弟那里获得了写有拉姆达大盗的财宝下落的暗号。“稚弟卧川波，逆流而上溯其源。　暗夜银光现，瀑布水落自九天。”一夜暴富的梦想是否能实现呢……"
     },
     {
      "label": null,
      "text": "从宝物猎人兄弟那里获得了写有拉姆达大盗财宝下落的暗号。“稚弟卧川波，逆流而上溯其源。　暗夜银光现，瀑布水落自九天。”你成功地解开了暗号，获得了拉姆达大盗的财宝。"
     }
    ],
    "source": "QL_MinamihateeluMini_touzoku"
   },
   "labels": [
    "QL_MinamihateeluMini_touzoku_Finish",
    "QL_MinamihateeluMini_touzoku_Desc",
    "QL_MinamihateeluMini_touzoku_Name"
   ],
   "flags": {
    "ready": "MinamihateeluMini_touzoku_Ready",
    "activated": "MinamihateeluMini_touzoku_Activated",
    "finish": "MinamihateeluMini_touzoku_Finish",
    "steps": [],
    "aux": [
     "MinamihateeluMini_touzoku_FindCave",
     "MinamihateeluMini_touzoku_FindTreasure"
    ]
   },
   "source": [
    "QL_MinamihateeluMini_touzoku",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MinamihateeluMini_touzoku_Ready": 1,
    "MinamihateeluMini_touzoku_Activated": 0,
    "MinamihateeluMini_touzoku_Finish": 0,
    "MinamihateeluMini_touzoku_FindCave": 0,
    "MinamihateeluMini_touzoku_FindTreasure": 0
   },
   "status_snapshot": "未开始",
   "title": "拉姆达大盗的财宝",
   "title_source": "QL_MinamihateeluMini_touzoku · text[0] · 无标签"
  },
  {
   "id": "MiniGame100enemy",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame100enemy",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame100enemy"
   },
   "labels": [
    "QL_MiniGame100enemy_Finish",
    "QL_MiniGame100enemy_Finish",
    "QL_MiniGame100enemy_Battle"
   ],
   "flags": {
    "ready": "MiniGame100enemy_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MiniGame100enemy",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame100enemy_Ready": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_Bowling",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_Bowling",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_Bowling"
   },
   "labels": [
    "QL_MiniGame_Bowling_RollResult",
    "QL_MiniGame_Bowling_IfOutOfArea",
    "QL_MiniGame_Bowling_RollPrepare",
    "QL_MiniGame_Bowling_RollPrepare",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u001a\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000����",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u001a\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000����",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u001a\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000����"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_Bowling_AreaIn",
     "MiniGame_Bowling_GetPrizeRod",
     "MiniGame_Bowling_IsTalked"
    ]
   },
   "source": [
    "QL_MiniGame_Bowling",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_Bowling_AreaIn": 0,
    "MiniGame_Bowling_GetPrizeRod": 0,
    "MiniGame_Bowling_IsTalked": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_Crosscountry",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_Crosscountry",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_Crosscountry"
   },
   "labels": [
    "QL_MiniGame_Crosscountry_Game",
    "QL_MiniGame_Crosscountry_Game",
    "QL_MiniGame_Crosscountry_Finish",
    "QL_MiniGame_Crosscountry_ForceStop",
    "������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0000\u0000\u0000����������"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MiniGame_Crosscountry",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {},
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_HillTower_BirdMan",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_HillTower_BirdMan",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_HillTower_BirdMan"
   },
   "labels": [
    "QL_MiniGame_HillTower_BirdMan_Game",
    "QL_MiniGame_HillTower_BirdMan_Game",
    "QL_MiniGame_HillTower_BirdMan_Game",
    "QL_MiniGame_HillTower_BirdMan_Game",
    "QL_MiniGame_HillTower_BirdMan_Retire"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_HillTower_BirdMan_ExplanedOnce",
     "MiniGame_HillTower_BirdMan_FinishedOnce",
     "MiniGame_HillTower_BirdMan_TalkedOnce"
    ]
   },
   "source": [
    "QL_MiniGame_HillTower_BirdMan",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_HillTower_BirdMan_ExplanedOnce": 0,
    "MiniGame_HillTower_BirdMan_FinishedOnce": 0,
    "MiniGame_HillTower_BirdMan_TalkedOnce": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_HorseRace",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_HorseRace",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_HorseRace"
   },
   "labels": [
    "QL_MiniGame_HorseRace_Finish",
    "QL_MiniGame_HorseRace_Game",
    "QL_MiniGame_HorseRace_Game"
   ],
   "flags": {
    "ready": "MiniGame_HorseRace_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_HorseRace_BestResultMiliSecond",
     "MiniGame_HorseRace_BestResultMinute",
     "MiniGame_HorseRace_BestResultSecond",
     "MiniGame_HorseRace_ClearTime",
     "MiniGame_HorseRace_First",
     "MiniGame_HorseRace_GetReins",
     "MiniGame_HorseRace_GetSaddle",
     "MiniGame_HorseRace_GoaledRace",
     "MiniGame_HorseRace_MiddleTime",
     "MiniGame_HorseRace_PlayedRace",
     "MiniGame_HorseRace_UptdateRecord"
    ]
   },
   "source": [
    "QL_MiniGame_HorseRace",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_HorseRace_Ready": 1,
    "MiniGame_HorseRace_BestResultMiliSecond": 0,
    "MiniGame_HorseRace_BestResultMinute": 0,
    "MiniGame_HorseRace_BestResultSecond": 0,
    "MiniGame_HorseRace_ClearTime": 0,
    "MiniGame_HorseRace_First": 0,
    "MiniGame_HorseRace_GetReins": 0,
    "MiniGame_HorseRace_GetSaddle": 0,
    "MiniGame_HorseRace_GoaledRace": 0,
    "MiniGame_HorseRace_MiddleTime": 0,
    "MiniGame_HorseRace_PlayedRace": 0,
    "MiniGame_HorseRace_UptdateRecord": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_HorsebackArchery",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_HorsebackArchery",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_HorsebackArchery"
   },
   "labels": [
    "QL_MiniGame_HorsebackArchery_Game",
    "QL_MiniGame_HorsebackArchery_Game",
    "QL_MiniGame_HorsebackArchery_Finish",
    "QL_MiniGame_HorsebackArchery_Finish",
    "QL_MiniGame_HorsebackArchery_Finish"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_HorsebackArchery_HasAlreadyGivenHorseReins",
     "MiniGame_HorsebackArchery_HasAlreadyGivenHorseSaddle",
     "MiniGame_HorsebackArchery_IsPlayed",
     "MiniGame_HorsebackArchery_IsTalked"
    ]
   },
   "source": [
    "QL_MiniGame_HorsebackArchery",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_HorsebackArchery_HasAlreadyGivenHorseReins": 0,
    "MiniGame_HorsebackArchery_HasAlreadyGivenHorseSaddle": 0,
    "MiniGame_HorsebackArchery_IsPlayed": 0,
    "MiniGame_HorsebackArchery_IsTalked": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_KitakkareBF",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_KitakkareBF",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_KitakkareBF"
   },
   "labels": [
    "QL_MiniGame_KitakkareBF_Start",
    "��������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\f\u0000\u0000\u0000\u000e\u0000\u0000\u0000\u0000",
    "��������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\f\u0000\u0000\u0000\u000e\u0000\u0000\u0000\u0000"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_KitakkareBF_1stClear",
     "MiniGame_KitakkareBF_2stClear",
     "MiniGame_KitakkareBF_3rdClear",
     "MiniGame_KitakkareBF_Fire",
     "MiniGame_KitakkareBF_Rain"
    ]
   },
   "source": [
    "QL_MiniGame_KitakkareBF",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_KitakkareBF_1stClear": 0,
    "MiniGame_KitakkareBF_2stClear": 0,
    "MiniGame_KitakkareBF_3rdClear": 0,
    "MiniGame_KitakkareBF_Fire": 1,
    "MiniGame_KitakkareBF_Rain": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_ParasailArchery",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_ParasailArchery",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_ParasailArchery"
   },
   "labels": [
    "QL_MiniGame_ParasailArchery_Finish",
    "QL_MiniGame_ParasailArchery_Playing",
    "QL_MiniGame_ParasailArchery_Playing",
    "QL_MiniGame_ParasailArchery_Failed",
    "���ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u001a\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000����"
   ],
   "flags": {
    "ready": "MiniGame_ParasailArchery_Ready",
    "activated": "MiniGame_ParasailArchery_Activated",
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_ParasailArchery_BombArrow",
     "MiniGame_ParasailArchery_EventTimerAppear",
     "MiniGame_ParasailArchery_Fail_AreaInAppear",
     "MiniGame_ParasailArchery_Fail_BombArrow",
     "MiniGame_ParasailArchery_Fail_Bow",
     "MiniGame_ParasailArchery_Fail_Self",
     "MiniGame_ParasailArchery_Fail_TimeOut",
     "MiniGame_ParasailArchery_Playing",
     "MiniGame_ParasailArchery_Ready_Teba_First",
     "MiniGame_ParasailArchery_Ready_Tyuri_First",
     "MiniGame_ParasailArchery_Start",
     "MiniGame_ParasailArchery_TargetONOFF",
     "MiniGame_ParasailArchery_TimeOver"
    ]
   },
   "source": [
    "QL_MiniGame_ParasailArchery",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_ParasailArchery_Ready": 0,
    "MiniGame_ParasailArchery_Activated": 0,
    "MiniGame_ParasailArchery_BombArrow": 0,
    "MiniGame_ParasailArchery_EventTimerAppear": 0,
    "MiniGame_ParasailArchery_Fail_AreaInAppear": 0,
    "MiniGame_ParasailArchery_Fail_BombArrow": 0,
    "MiniGame_ParasailArchery_Fail_Bow": 0,
    "MiniGame_ParasailArchery_Fail_Self": 0,
    "MiniGame_ParasailArchery_Fail_TimeOut": 0,
    "MiniGame_ParasailArchery_Playing": 0,
    "MiniGame_ParasailArchery_Ready_Teba_First": 0,
    "MiniGame_ParasailArchery_Ready_Tyuri_First": 0,
    "MiniGame_ParasailArchery_Start": 0,
    "MiniGame_ParasailArchery_TargetONOFF": 1,
    "MiniGame_ParasailArchery_TimeOver": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_ParasailRide",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_ParasailRide",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_ParasailRide"
   },
   "labels": [
    "QL_MiniGame_ParasailRide_Flying",
    "QL_MiniGame_ParasailRide_WaitToTakeOff",
    "ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\u0016\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0014\u0000\u0000\u0000\u0000\u0000\u0000����������"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_ParasailRide_BestRecord",
     "MiniGame_ParasailRide_IsPlayed",
     "MiniGame_ParasailRide_IsTalked"
    ]
   },
   "source": [
    "QL_MiniGame_ParasailRide",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_ParasailRide_BestRecord": 0,
    "MiniGame_ParasailRide_IsPlayed": 0,
    "MiniGame_ParasailRide_IsTalked": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_ShieldSurfing",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_ShieldSurfing",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_ShieldSurfing"
   },
   "labels": [
    "QL_MiniGame_ShieldSurfing_Explain",
    "QL_MiniGame_ShieldSurfing_Failed",
    "QL_MiniGame_ShieldSurfing_Game",
    "QL_MiniGame_ShieldSurfing_Finish",
    "�������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000\"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u001a\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u001e\u0000\u0000\u0000 \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000��������������"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_ShieldSurfing_IsGoalOnce",
     "MiniGame_ShieldSurfing_Try"
    ]
   },
   "source": [
    "QL_MiniGame_ShieldSurfing",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_ShieldSurfing_IsGoalOnce": 0,
    "MiniGame_ShieldSurfing_Try": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_SmashGolf",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_SmashGolf",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_SmashGolf"
   },
   "labels": [
    "QL_MiniGame_SmashGolf_OB",
    "QL_MiniGame_SmashGolf_MoveBall",
    "QL_MiniGame_SmashGolf_ForceStop",
    "QL_MiniGame_SmashGolf_ForceStop",
    "QL_MiniGame_SmashGolf_Game",
    "�������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000(\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u001e\u0000\u0000\u0000 \u0000\u0000\u0000\"\u0000\u0000\u0000$\u0000\u0000\u0000&\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000��������",
    "�������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0000(\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0006\u0000\u0000\u0000\u001c\u0000\u0000\u0000\u001e\u0000\u0000\u0000 \u0000\u0000\u0000\"\u0000\u0000\u0000$\u0000\u0000\u0000&\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000��������"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "MiniGame_SmashGolf_IsTalked"
    ]
   },
   "source": [
    "QL_MiniGame_SmashGolf",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MiniGame_SmashGolf_IsTalked": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MiniGame_TimeLimitHunting",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_MiniGame_TimeLimitHunting",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_MiniGame_TimeLimitHunting"
   },
   "labels": [
    "QL_MiniGame_TimeLimitHunting_Game",
    "QL_MiniGame_TimeLimitHunting_Game",
    "QL_MiniGame_TimeLimitHunting_Finish"
   ],
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MiniGame_TimeLimitHunting",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {},
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "MlsYmaQueTest01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "MlsYmaQueTest01_Ready",
    "activated": "MlsYmaQueTest01_Activated",
    "finish": "MlsYmaQueTest01_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "MlsYmaQueTest01_Ready": 1,
    "MlsYmaQueTest01_Activated": 0,
    "MlsYmaQueTest01_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "MouthofDragon",
   "name": "古兰特树海，卡西瓦吟诵着古诗。\n你解开了古诗的谜语，找到勇气之泉，\n在泉边听到女神的低语。\n\n“向此勇气之泉\n  献上黄金精灵罗龙的鳞片”\n\n罗龙的鳞片竟是……？",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_MouthofDragon",
   "text": {
    "name": "在思古兰特树海，卡西瓦吟诵着古诗。你解开了古诗的谜语，找到勇气之泉，在泉边听到女神的低语。“向此勇气之泉  献上黄金精灵罗龙的鳞片”罗龙的鳞片竟是……？",
    "desc": "在思古兰特树海，卡西瓦吟诵着古诗。你解开了古诗的谜语，找到勇气之泉，在泉边听到女神的低语。“向此勇气之泉  献上黄金精灵罗龙的鳞片”罗龙的鳞片竟是……？",
    "finish": null,
    "steps": {},
    "name_label": "QL_MouthofDragon_Name",
    "desc_label": "QL_MouthofDragon_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_MouthofDragon_Desc",
      "text": "吞食巨蛇的龙"
     },
     {
      "label": null,
      "text": "在思古兰特树海，卡西瓦吟诵着古诗。“深渊的森林，为吞蛇而张开的龙之颚。　那里沉睡着勇者的试练。”这首诗的寓意究竟是……"
     },
     {
      "label": "QL_MouthofDragon_Name",
      "text": "在思古兰特树海，卡西瓦吟诵着古诗。你解开了古诗的谜语，找到勇气之泉，在泉边听到女神的低语。“向此勇气之泉  献上黄金精灵罗龙的鳞片”罗龙的鳞片竟是……？"
     },
     {
      "label": null,
      "text": "“向此勇气之泉  献上黄金精灵费罗龙的鳞片。”遵照女神之言，将费罗龙的鳞片漂浮在勇气之泉上，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_MouthofDragon"
   },
   "labels": [
    "QL_MouthofDragon_Name",
    "QL_MouthofDragon_Desc",
    "QL_MouthofDragon_Desc"
   ],
   "flags": {
    "ready": "MouthofDragon_Ready",
    "activated": "MouthofDragon_Activated",
    "finish": "MouthofDragon_Finish",
    "steps": [
     "MouthofDragon_Step1"
    ],
    "aux": [
     "MouthofDragon_Play"
    ]
   },
   "source": [
    "QL_MouthofDragon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MouthofDragon_Ready": 1,
    "MouthofDragon_Activated": 0,
    "MouthofDragon_Finish": 0,
    "MouthofDragon_Step1": 0,
    "MouthofDragon_Play": 0
   },
   "status_snapshot": "未开始",
   "title": "吞食巨蛇的龙",
   "title_source": "QL_MouthofDragon · text[0] · 标签:QL_MouthofDragon_Desc"
  },
  {
   "id": "MtMotelMini_Landscape",
   "name": "驿站中装饰着的风景画。\n\n你找到了这幅风景画中\n所描绘的古代神庙！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_MtMotelMini_Landscape",
   "text": {
    "name": "山麓驿站中装饰着的风景画。你找到了这幅风景画中所描绘的古代神庙！",
    "desc": null,
    "finish": "山麓驿站中装饰着的风景画据说是从南方眺望驿站时绘制而成。画中描绘了驿站和火山等风景，若仔细一看……",
    "steps": {},
    "name_label": "QL_MtMotelMini_Landscape_Name",
    "desc_label": null,
    "finish_label": "QL_MtMotelMini_Landscape_Finished",
    "items": [
     {
      "label": null,
      "text": "驿站的风景画"
     },
     {
      "label": "QL_MtMotelMini_Landscape_Finished",
      "text": "山麓驿站中装饰着的风景画据说是从南方眺望驿站时绘制而成。画中描绘了驿站和火山等风景，若仔细一看……"
     },
     {
      "label": "QL_MtMotelMini_Landscape_Name",
      "text": "山麓驿站中装饰着的风景画。你找到了这幅风景画中所描绘的古代神庙！"
     }
    ],
    "source": "QL_MtMotelMini_Landscape"
   },
   "labels": [
    "QL_MtMotelMini_Landscape_Finished",
    "QL_MtMotelMini_Landscape_Name"
   ],
   "flags": {
    "ready": "MtMotelMini_Landscape_Ready",
    "activated": "MtMotelMini_Landscape_Activated",
    "finish": "MtMotelMini_Landscape_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_MtMotelMini_Landscape",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "MtMotelMini_Landscape_Ready": 1,
    "MtMotelMini_Landscape_Activated": 0,
    "MtMotelMini_Landscape_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": "驿站的风景画",
   "title_source": "QL_MtMotelMini_Landscape · text[0] · 无标签"
  },
  {
   "id": "My_Hero",
   "name": "直在等待勇者的伊莱扎看过大师之剑。\n仅是如此，她好像就心满意足了……",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_My_Hero",
   "text": {
    "name": "给一直在等待勇者的伊莱扎看过大师之剑。仅是如此，她好像就心满意足了……",
    "desc": null,
    "finish": "平原外围的驿站的伊莱扎好像一直在等待勇者的到来……据说那位大人拥有说之剑…？",
    "steps": {},
    "name_label": "QL_My_Hero_Name",
    "desc_label": null,
    "finish_label": "QL_My_Hero_Finish",
    "items": [
     {
      "label": null,
      "text": "我的勇者！"
     },
     {
      "label": "QL_My_Hero_Finish",
      "text": "平原外围的驿站的伊莱扎好像一直在等待勇者的到来……据说那位大人拥有说之剑…？"
     },
     {
      "label": "QL_My_Hero_Name",
      "text": "给一直在等待勇者的伊莱扎看过大师之剑。仅是如此，她好像就心满意足了……"
     }
    ],
    "source": "QL_My_Hero"
   },
   "labels": [
    "QL_My_Hero_Finish",
    "QL_My_Hero_Name"
   ],
   "flags": {
    "ready": "My_Hero_Ready",
    "activated": "My_Hero_Activated",
    "finish": "My_Hero_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_My_Hero",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "My_Hero_Ready": 1,
    "My_Hero_Activated": 0,
    "My_Hero_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "我的勇者！",
   "title_source": "QL_My_Hero · text[0] · 无标签"
  },
  {
   "id": "NakedIsland",
   "name": "塞哈特诺岛后忽闻人声，\n你的武器和防具被夺走了。\n\n据说只要向岛上的3处祭坛献上珠\n就可以拿回装备……",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_NakedIsland",
   "text": {
    "name": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。据说只要向岛上的3处祭坛献上珠就可以拿回装备……",
    "desc": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。据说只要向岛上的3处祭坛献上珠就可以拿回装备……",
    "finish": null,
    "steps": {
     "QL_NakedIsland_Naked": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。你暂时放弃了试练，武器和防具都回到了手中，不过你还会去那座岛接受试练吗……"
    },
    "name_label": "QL_NakedIsland_Name",
    "desc_label": "QL_NakedIsland_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_NakedIsland_Desc",
      "text": "野外的试练"
     },
     {
      "label": "QL_NakedIsland_Naked",
      "text": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。你暂时放弃了试练，武器和防具都回到了手中，不过你还会去那座岛接受试练吗……"
     },
     {
      "label": "QL_NakedIsland_Name",
      "text": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。据说只要向岛上的3处祭坛献上珠就可以拿回装备……"
     },
     {
      "label": null,
      "text": "登上塞哈特诺岛后忽闻人声，你的武器和防具被夺走了。据说只要向岛上的3处祭坛献上珠就可以拿回装备……"
     },
     {
      "label": null,
      "text": "向3个祭坛献上宝珠后，岛的最高处出现了一座古代神庙。之后你又听到有人低语，被夺走的装备回到了你的手上。"
     }
    ],
    "source": "QL_NakedIsland"
   },
   "labels": [
    "QL_NakedIsland_Naked",
    "QL_NakedIsland_Name",
    "QL_NakedIsland_Desc",
    "QL_NakedIsland_Desc",
    "QL_NakedIsland_OnceRetire"
   ],
   "flags": {
    "ready": "NakedIsland_Ready",
    "activated": "NakedIsland_Activated",
    "finish": "NakedIsland_Finish",
    "steps": [],
    "aux": [
     "NakedIsland_AppearDungeon",
     "NakedIsland_DemoAppearDungeon",
     "NakedIsland_EraseBall_1",
     "NakedIsland_EraseBall_2",
     "NakedIsland_EraseBall_3",
     "NakedIsland_KillGiant",
     "NakedIsland_ReachTop",
     "NakedIsland_SetBall_1",
     "NakedIsland_SetBall_2",
     "NakedIsland_SetBall_3"
    ]
   },
   "source": [
    "QL_NakedIsland",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "NakedIsland_Ready": 1,
    "NakedIsland_Activated": 0,
    "NakedIsland_Finish": 0,
    "NakedIsland_AppearDungeon": 0,
    "NakedIsland_DemoAppearDungeon": 0,
    "NakedIsland_EraseBall_1": 0,
    "NakedIsland_EraseBall_2": 0,
    "NakedIsland_EraseBall_3": 0,
    "NakedIsland_KillGiant": 0,
    "NakedIsland_ReachTop": 0,
    "NakedIsland_SetBall_1": 0,
    "NakedIsland_SetBall_2": 0,
    "NakedIsland_SetBall_3": 0
   },
   "status_snapshot": "未开始",
   "title": "野外的试练",
   "title_source": "QL_NakedIsland · text[0] · 标签:QL_NakedIsland_Desc"
  },
  {
   "id": "Npc_Brigade_001",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "Npc_Brigade_001_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_Brigade_001_Finish": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Npc_Kakariko003_cooking1",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "Npc_Kakariko003_cooking1_finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_Kakariko003_cooking1_finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Npc_Kakariko003_cooking2",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "Npc_Kakariko003_cooking2_finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_Kakariko003_cooking2_finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Npc_Kakariko003_cooking3",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "Npc_Kakariko003_cooking3_finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_Kakariko003_cooking3_finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Npc_King_ChoiceExclude",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "Npc_King_ChoiceExclude_Finish",
    "steps": [],
    "aux": [
     "Npc_King_ChoiceExclude_Diary",
     "Npc_King_ChoiceExclude_Recipe"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_King_ChoiceExclude_Finish": 1,
    "Npc_King_ChoiceExclude_Diary": 1,
    "Npc_King_ChoiceExclude_Recipe": 1
   },
   "status_snapshot": "已完成",
   "title": null,
   "title_source": null
  },
  {
   "id": "Npc_King_Tennokoe",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Npc_King_Tennokoe_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Npc_King_Tennokoe_Ready": 1
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "OPDemo",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": "OPDemo_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "OPDemo_Finished": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Oasis_Ch_Drug",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Oasis_Ch_Drug_Ready",
    "activated": "Oasis_Ch_Drug_Activated",
    "finish": "Oasis_Ch_Drug_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Oasis_Ch_Drug_Ready": 1,
    "Oasis_Ch_Drug_Activated": 0,
    "Oasis_Ch_Drug_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Oasis_Drug_Challenge",
   "name": "冰冷药，交给了柒内玛。\n\n////食谱备忘/////具有冰冷效果的虫子\n怪物材料",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_Oasis_Drug_Challenge",
   "text": {
    "name": "制成冰冷药，交给了柒内玛。////食谱备忘/////具有冰冷效果的虫子怪物材料",
    "desc": null,
    "finish": "卡拉卡拉集市的柒内玛正在寻找可抵挡沙漠高温的“冰冷药”。集齐有冰冷功效的虫子物材料可制药。具有冰冷功效的虫子据说生存在鲁德高地的寒冷之处代替柒内玛制作冰冷药吧。",
    "steps": {},
    "name_label": "QL_Oasis_Drug_Challenge_Name",
    "desc_label": null,
    "finish_label": "QL_Oasis_Drug_Challenge_Finish",
    "items": [
     {
      "label": null,
      "text": "避暑药"
     },
     {
      "label": "QL_Oasis_Drug_Challenge_Finish",
      "text": "卡拉卡拉集市的柒内玛正在寻找可抵挡沙漠高温的“冰冷药”。集齐有冰冷功效的虫子物材料可制药。具有冰冷功效的虫子据说生存在鲁德高地的寒冷之处代替柒内玛制作冰冷药吧。"
     },
     {
      "label": "QL_Oasis_Drug_Challenge_Name",
      "text": "制成冰冷药，交给了柒内玛。////食谱备忘/////具有冰冷效果的虫子怪物材料"
     }
    ],
    "source": "QL_Oasis_Drug_Challenge"
   },
   "labels": [
    "QL_Oasis_Drug_Challenge_Finish",
    "QL_Oasis_Drug_Challenge_Name"
   ],
   "flags": {
    "ready": "Oasis_Drug_Challenge_Ready",
    "activated": "Oasis_Drug_Challenge_Activated",
    "finish": "Oasis_Drug_Challenge_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Oasis_Drug_Challenge",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Oasis_Drug_Challenge_Ready": 1,
    "Oasis_Drug_Challenge_Activated": 1,
    "Oasis_Drug_Challenge_Finish": 0
   },
   "status_snapshot": "进行中",
   "title": "避暑药",
   "title_source": "QL_Oasis_Drug_Challenge · text[0] · 无标签"
  },
  {
   "id": "OldKorok_Help",
   "name": "精灵伯库林\n拜托你帮忙取回沙球。\n\n沙球似乎是被盘踞在附近的怪物夺走了。\n\n据伯库林所说，\n没有沙球他就无法使用“力量”。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_OldKorok_Help",
   "text": {
    "name": "木之精灵伯库林拜托你帮忙取回沙球。沙球似乎是被盘踞在附近的怪物夺走了。据伯库林所说，没有沙球他就无法使用“力量”。",
    "desc": "虽然成功取回了沙球，不过你又被拜托帮忙找回之前放在沙球里的克洛格的果实。据说克洛格的果实收集得越多，伯库林的沙球就会逐渐恢复力量，他就会帮你扩大袋子。",
    "finish": "木之精灵伯库林拜托你帮忙取回沙球。沙球似乎是被盘踞在附近的怪物夺走了。据伯库林所说，没有沙球他就无法使用“力量”。",
    "steps": {},
    "name_label": "QL_OldKorok_Help_Finish",
    "desc_label": "QL_OldKorok_Help_Desc",
    "finish_label": "QL_OldKorok_Help_Finish",
    "items": [
     {
      "label": null,
      "text": "重要的沙球"
     },
     {
      "label": "QL_OldKorok_Help_Finish",
      "text": "木之精灵伯库林拜托你帮忙取回沙球。沙球似乎是被盘踞在附近的怪物夺走了。据伯库林所说，没有沙球他就无法使用“力量”。"
     },
     {
      "label": "QL_OldKorok_Help_Desc",
      "text": "虽然成功取回了沙球，不过你又被拜托帮忙找回之前放在沙球里的克洛格的果实。据说克洛格的果实收集得越多，伯库林的沙球就会逐渐恢复力量，他就会帮你扩大袋子。"
     },
     {
      "label": null,
      "text": "你帮忙取回了伯库林被怪物夺走的沙球。而且将旅途中从克洛格那里拿到的克洛格的果实还给伯库林之后，作为谢礼他帮你扩大了袋子。"
     }
    ],
    "source": "QL_OldKorok_Help"
   },
   "labels": [
    "QL_OldKorok_Help_Finish",
    "QL_OldKorok_Help_Desc",
    "QL_OldKorok_Help_Name"
   ],
   "flags": {
    "ready": "OldKorok_Help_Ready",
    "activated": "OldKorok_Help_Activated",
    "finish": "OldKorok_Help_Finish",
    "steps": [],
    "aux": [
     "OldKorok_Help_FirstPorch",
     "OldKorok_Help_KorokFruit",
     "OldKorok_Help_Maracus",
     "OldKorok_Help_NormalFirst",
     "OldKorok_Help_SecondPorch",
     "OldKorok_Help_Self",
     "OldKorok_Help_snif"
    ]
   },
   "source": [
    "QL_OldKorok_Help",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "OldKorok_Help_Ready": 1,
    "OldKorok_Help_Activated": 0,
    "OldKorok_Help_Finish": 0,
    "OldKorok_Help_FirstPorch": 0,
    "OldKorok_Help_KorokFruit": 0,
    "OldKorok_Help_Maracus": 0,
    "OldKorok_Help_NormalFirst": 0,
    "OldKorok_Help_SecondPorch": 0,
    "OldKorok_Help_Self": 0,
    "OldKorok_Help_snif": 0
   },
   "status_snapshot": "未开始",
   "title": "重要的沙球",
   "title_source": "QL_OldKorok_Help · text[0] · 无标签"
  },
  {
   "id": "OneHundred",
   "name": "纳在结伴旅行途中\n在梅竹台地的大道附近遭到怪物们袭击。\n他险些丧命，死里逃生后回头一看，\n发现同伴们都不见了踪影……\n\n消失的同伴有人\n快点找到他们让格玛纳放心吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_OneHundred",
   "text": {
    "name": "格玛纳在结伴旅行途中在梅竹台地的大道附近遭到怪物们袭击。他险些丧命，死里逃生后回头一看，发现同伴们都不见了踪影……消失的同伴有人快点找到他们让格玛纳放心吧。",
    "desc": "格玛纳在结伴旅行途中在梅竹台地的大道附近遭到怪物们袭击。他险些丧命，死里逃生后回头一看，发现同伴们都不见了踪影……消失的同伴有人快点找到他们让格玛纳放心吧。",
    "finish": null,
    "steps": {
     "QL_OneHundred_Step1": "你成功救出了被怪物们缠住而无法动弹的格玛纳同伴们。快点回到格鲁德峡谷驿站，把这个好消息告诉格玛纳吧。"
    },
    "name_label": "QL_OneHundred_Desc",
    "desc_label": "QL_OneHundred_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "格鲁德峡谷失踪事件"
     },
     {
      "label": "QL_OneHundred_Desc",
      "text": "格玛纳在结伴旅行途中在梅竹台地的大道附近遭到怪物们袭击。他险些丧命，死里逃生后回头一看，发现同伴们都不见了踪影……消失的同伴有人快点找到他们让格玛纳放心吧。"
     },
     {
      "label": "QL_OneHundred_Step1",
      "text": "你成功救出了被怪物们缠住而无法动弹的格玛纳同伴们。快点回到格鲁德峡谷驿站，把这个好消息告诉格玛纳吧。"
     },
     {
      "label": null,
      "text": "你已全数救出被怪物们缠住而无法动弹的格玛纳同伴4人。格鲁德峡谷失踪事件至此落下帷幕。"
     }
    ],
    "source": "QL_OneHundred"
   },
   "labels": [
    "QL_OneHundred_Desc",
    "QL_OneHundred_Step1",
    "QL_OneHundred_Name"
   ],
   "flags": {
    "ready": "OneHundred_Ready",
    "activated": "OneHundred_Activated",
    "finish": "OneHundred_Finish",
    "steps": [
     "OneHundred_Step1"
    ],
    "aux": [
     "OneHundred_1st",
     "OneHundred_Fr02Free",
     "OneHundred_Fr03Free",
     "OneHundred_Fr04Free",
     "OneHundred_Fr0Free",
     "OneHundred_KillCount"
    ]
   },
   "source": [
    "QL_OneHundred",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "OneHundred_Ready": 1,
    "OneHundred_Activated": 1,
    "OneHundred_Finish": 0,
    "OneHundred_Step1": 0,
    "OneHundred_1st": 0,
    "OneHundred_Fr02Free": 0,
    "OneHundred_Fr03Free": 0,
    "OneHundred_Fr04Free": 0,
    "OneHundred_Fr0Free": 0,
    "OneHundred_KillCount": 0
   },
   "status_snapshot": "进行中",
   "title": "格鲁德峡谷失踪事件",
   "title_source": "QL_OneHundred · text[0] · 无标签"
  },
  {
   "id": "PictureMemory",
   "name": "里的记忆",
   "category": "主线任务",
   "subcategory": "照片记忆",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_PictureMemory",
   "text": {
    "name": "照片里的记忆",
    "desc": "这12张照片据说是塞尔达公主留在相册里的。造访照片上的所有地方后，说不定就能想起和塞尔达公主有关的回忆了。现在还剩英帕报告目前的进度吧。",
    "finish": null,
    "steps": {
     "QL_PictureMemory_GetShirt": "你找到了照片上的所有地方！去向卡卡利科村的英帕报告这件事吧。"
    },
    "name_label": "QL_PictureMemory_Name",
    "desc_label": "QL_PictureMemory_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_PictureMemory_Name",
      "text": "照片里的记忆"
     },
     {
      "label": "QL_PictureMemory_Name",
      "text": "这12张照片据说是塞尔达公主留在相册里的。造访照片上的所有地方后，说不定就能想起和塞尔达公主有关的回忆了。现在还剩是塞尔达公主留在相册里的。造访照片上的所有地方后，说不定就能想起和塞尔达公主有关的回忆了。现在还剩英帕报告目前的进度吧。"
     },
     {
      "label": "QL_PictureMemory_Desc",
      "text": "这12张照片据说是塞尔达公主留在相册里的。造访照片上的所有地方后，说不定就能想起和塞尔达公主有关的回忆了。现在还剩英帕报告目前的进度吧。"
     },
     {
      "label": null,
      "text": "这12张照片据说是塞尔达公主留在相册里的。造访照片上的所有地方后，说不定就能想起和塞尔达公主有关的回忆了。现在还剩所有地方！去向卡卡利科村的英帕报告这件事吧。"
     },
     {
      "label": "QL_PictureMemory_GetShirt",
      "text": "你找到了照片上的所有地方！去向卡卡利科村的英帕报告这件事吧。"
     },
     {
      "label": null,
      "text": "在英帕屋子墙上挂着的画中，描绘着最后的回忆之地。塞尔达公主在此地留下的记忆是……"
     },
     {
      "label": null,
      "text": "造访了13处回忆之地后，你想起了关于塞尔达公主的点点滴滴。回忆中的塞尔达公主一直都在尽心尽力……你想尽快救出塞尔达公主，再次亲眼看看她的笑容。"
     }
    ],
    "source": "QL_PictureMemory"
   },
   "labels": [
    "QL_PictureMemory_Name",
    "QL_PictureMemory_Name",
    "QL_PictureMemory_Desc",
    "QL_PictureMemory_GetShirt",
    "��ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0004\u0012\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\u0000\u0000\u0000 \u0000\u0000\u0000.\u0000\u0000\u0001\u0004\u0000\u0000\u0002\u0004\u0000\u0000\u0002�\u0000\u0000\u0003\u001c\u0000\u0000\u0003tqgrG��v���_�\u0000\u0000��\u00001\u00002_ qgrGcn��f/\u0000\nX^\\\u0014��QlN;uYW(v�Q���v�0\u0002\u0000\n� ��qgrGN\nv�b@g\tW0e�T\u000e�\f\u0000\n��N"
   ],
   "flags": {
    "ready": "PictureMemory_Ready",
    "activated": "PictureMemory_Activated",
    "finish": "PictureMemory_Finish",
    "steps": [],
    "aux": [
     "PictureMemory_Find11",
     "PictureMemory_First1",
     "PictureMemory_GetShirt",
     "PictureMemory_Last1",
     "PictureMemory_Spot_Int",
     "PictureMemory_goodjob"
    ]
   },
   "source": [
    "QL_PictureMemory",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "PictureMemory_Ready": 1,
    "PictureMemory_Activated": 0,
    "PictureMemory_Finish": 0,
    "PictureMemory_Find11": 0,
    "PictureMemory_First1": 0,
    "PictureMemory_GetShirt": 0,
    "PictureMemory_Last1": 0,
    "PictureMemory_Spot_Int": 12,
    "PictureMemory_goodjob": 0
   },
   "status_snapshot": "未开始",
   "title": "照片里的记忆",
   "title_source": "QL_PictureMemory · text[0] · 标签:QL_PictureMemory_Name"
  },
  {
   "id": "PrezentationOkamura",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "PrezentationOkamura_Ready",
    "activated": "PrezentationOkamura_Activated",
    "finish": "PrezentationOkamura_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "PrezentationOkamura_Ready": 1,
    "PrezentationOkamura_Activated": 0,
    "PrezentationOkamura_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "QueenLetter",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "QueenLetter_Ready",
    "activated": "QueenLetter_Activated",
    "finish": "QueenLetter_Finished",
    "steps": [],
    "aux": [
     "QueenLetter_Map",
     "QueenLetter_Parashawl"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "QueenLetter_Ready": 1,
    "QueenLetter_Activated": 0,
    "QueenLetter_Finished": 0,
    "QueenLetter_Map": 0,
    "QueenLetter_Parashawl": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Relief_Landing",
   "name": "狂风呼啸之大地，碎石御风。\n  展开御赐羽翼，降于光芒四射之地，\n  勇者的试练方能现形。”\n\n御赐羽翼是指滑翔帆。\n\n当你击碎岩石、开辟风过之路，\n降落于光芒四射的台座上，古代神庙随即出现！",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Relief_Landing",
   "text": {
    "name": "“于狂风呼啸之大地，碎石御风。  展开御赐羽翼，降于光芒四射之地，  勇者的试练方能现形。”御赐羽翼是指滑翔帆。当你击碎岩石、开辟风过之路，降落于光芒四射的台座上，古代神庙随即出现！",
    "desc": null,
    "finish": "“于狂风呼啸之大地，碎石御风。  展开御赐羽翼，降于光芒四射之地，  勇者的试练方能现形。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。",
    "steps": {},
    "name_label": "QL_Relief_Landing_Name",
    "desc_label": null,
    "finish_label": "QL_Relief_Landing_Finish",
    "items": [
     {
      "label": null,
      "text": "御风拓路者"
     },
     {
      "label": "QL_Relief_Landing_Finish",
      "text": "“于狂风呼啸之大地，碎石御风。  展开御赐羽翼，降于光芒四射之地，  勇者的试练方能现形。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。"
     },
     {
      "label": "QL_Relief_Landing_Name",
      "text": "“于狂风呼啸之大地，碎石御风。  展开御赐羽翼，降于光芒四射之地，  勇者的试练方能现形。”御赐羽翼是指滑翔帆。当你击碎岩石、开辟风过之路，降落于光芒四射的台座上，古代神庙随即出现！"
     }
    ],
    "source": "QL_Relief_Landing"
   },
   "labels": [
    "QL_Relief_Landing_Finish",
    "QL_Relief_Landing_Name"
   ],
   "flags": {
    "ready": "Relief_Landing_Ready",
    "activated": "Relief_Landing_Activated",
    "finish": "Relief_Landing_Finish",
    "steps": [
     "Relief_Landing_step1"
    ],
    "aux": [
     "Relief_Landing_Act",
     "Relief_Landing_paras"
    ]
   },
   "source": [
    "QL_Relief_Landing",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Relief_Landing_Ready": 1,
    "Relief_Landing_Activated": 0,
    "Relief_Landing_Finish": 0,
    "Relief_Landing_step1": 0,
    "Relief_Landing_Act": 0,
    "Relief_Landing_paras": 0
   },
   "status_snapshot": "未开始",
   "title": "御风拓路者",
   "title_source": "QL_Relief_Landing · text[0] · 无标签"
  },
  {
   "id": "Remains_Fancier",
   "name": "古物的柳奈一直抚摸着球不肯放手。\n\n在飞的守护者。\n小小的守护者。\n行走的守护者。\n\n她一直嘟囔着想见见这种守护者…",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Remains_Fancier",
   "text": {
    "name": "喜欢古物的柳奈一直抚摸着球不肯放手。在飞的守护者。小小的守护者。行走的守护者。她一直嘟囔着想见见这种守护者…",
    "desc": "给喜欢古物的柳奈看了三种守护者的照片后，她放开了球。要将球嵌入旁边的座。",
    "finish": null,
    "steps": {},
    "name_label": "QL_Remains_Fancier_Name",
    "desc_label": "QL_Remains_Fancier_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "想见见守护者！"
     },
     {
      "label": "QL_Remains_Fancier_Name",
      "text": "喜欢古物的柳奈一直抚摸着球不肯放手。在飞的守护者。小小的守护者。行走的守护者。她一直嘟囔着想见见这种守护者…"
     },
     {
      "label": "QL_Remains_Fancier_Desc",
      "text": "给喜欢古物的柳奈看了三种守护者的照片后，她放开了球。要将球嵌入旁边的座。"
     },
     {
      "label": null,
      "text": "给喜欢古物的柳奈看了三种守护者的照片后，她放开了球。将球嵌入台座后，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_Remains_Fancier"
   },
   "labels": [
    "QL_Remains_Fancier_Name",
    "QL_Remains_Fancier_Step1",
    "QL_Remains_Fancier_Desc"
   ],
   "flags": {
    "ready": "Remains_Fancier_Ready",
    "activated": "Remains_Fancier_Activated",
    "finish": "Remains_Fancier_Finish",
    "steps": [
     "Remains_Fancier_Step1"
    ],
    "aux": [
     "Remains_Fancier_Appearance",
     "Remains_Fancier_BallDelete",
     "Remains_Fancier_Gaved",
     "Remains_Fancier_Talked",
     "Remains_Fancier_photo",
     "Remains_Fancier_photoA",
     "Remains_Fancier_photoB",
     "Remains_Fancier_photoC"
    ]
   },
   "source": [
    "QL_Remains_Fancier",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Remains_Fancier_Ready": 0,
    "Remains_Fancier_Activated": 0,
    "Remains_Fancier_Finish": 0,
    "Remains_Fancier_Step1": 0,
    "Remains_Fancier_Appearance": 0,
    "Remains_Fancier_BallDelete": 0,
    "Remains_Fancier_Gaved": 0,
    "Remains_Fancier_Talked": 0,
    "Remains_Fancier_photo": 0,
    "Remains_Fancier_photoA": 0,
    "Remains_Fancier_photoB": 0,
    "Remains_Fancier_photoC": 0
   },
   "status_snapshot": "未知",
   "title": "想见见守护者！",
   "title_source": "QL_Remains_Fancier · text[0] · 无标签"
  },
  {
   "id": "RinelSearch",
   "name": "凶暴的兽人莱尼尔的照片\n拿给福拉拉拖看。\n\n获得卓拉护胫作为谢礼。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_RinelSearch",
   "text": {
    "name": "你将凶暴的兽人莱尼尔的照片拿给福拉拉拖看。获得卓拉护胫作为谢礼。",
    "desc": null,
    "finish": "卓拉领地的福拉拉拖拜托你，如果你看到了尼尔希望也能她一睹其容卓拉领地以东的雷兽山好像就有莱尼尔出没……想个办法给她看看莱尼尔吧。",
    "steps": {},
    "name_label": "QL_RinelSearch_Name",
    "desc_label": null,
    "finish_label": "QL_RinelSearch_Finish",
    "items": [
     {
      "label": null,
      "text": "莱尼尔调查"
     },
     {
      "label": "QL_RinelSearch_Finish",
      "text": "卓拉领地的福拉拉拖拜托你，如果你看到了尼尔希望也能她一睹其容卓拉领地以东的雷兽山好像就有莱尼尔出没……想个办法给她看看莱尼尔吧。"
     },
     {
      "label": "QL_RinelSearch_Name",
      "text": "你将凶暴的兽人莱尼尔的照片拿给福拉拉拖看。获得卓拉护胫作为谢礼。"
     }
    ],
    "source": "QL_RinelSearch"
   },
   "labels": [
    "QL_RinelSearch_Finish",
    "QL_RinelSearch_Name"
   ],
   "flags": {
    "ready": "RinelSearch_Ready",
    "activated": "RinelSearch_Activated",
    "finish": "RinelSearch_Finish",
    "steps": [
     "RinelSearch_Step010",
     "RinelSearch_Step1"
    ],
    "aux": [
     "RinelSearch_ArmorSend"
    ]
   },
   "source": [
    "QL_RinelSearch",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "RinelSearch_Ready": 0,
    "RinelSearch_Activated": 0,
    "RinelSearch_Finish": 0,
    "RinelSearch_Step010": 0,
    "RinelSearch_Step1": 0,
    "RinelSearch_ArmorSend": 0
   },
   "status_snapshot": "未知",
   "title": "莱尼尔调查",
   "title_source": "QL_RinelSearch · text[0] · 无标签"
  },
  {
   "id": "RitoMini_Cook",
   "name": "烤苹果交给了\n来利特村度蜜月的茱诺！\n\n茱诺振振有词，烤苹果是装进另一个胃的。\n\n多做点苹果\n再一起拿给她吧！",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_RitoMini_Cook",
   "text": {
    "name": "你将烤苹果交给了来利特村度蜜月的茱诺！茱诺振振有词，烤苹果是装进另一个胃的。多做点苹果再一起拿给她吧！",
    "desc": null,
    "finish": "到利特村度蜜月的茱诺，因村里没有她想要的东西而非常生气。但若能吃到最爱的苹果她应该会消气吧。为了拯救她的婚姻，拿苹果她吧！",
    "steps": {},
    "name_label": "QL_RitoMini_Cook_Name",
    "desc_label": null,
    "finish_label": "QL_RitoMini_Cook_Finish",
    "items": [
     {
      "label": null,
      "text": "新娘舍华求实"
     },
     {
      "label": "QL_RitoMini_Cook_Finish",
      "text": "到利特村度蜜月的茱诺，因村里没有她想要的东西而非常生气。但若能吃到最爱的苹果她应该会消气吧。为了拯救她的婚姻，拿苹果她吧！"
     },
     {
      "label": "QL_RitoMini_Cook_Name",
      "text": "你将烤苹果交给了来利特村度蜜月的茱诺！茱诺振振有词，烤苹果是装进另一个胃的。多做点苹果再一起拿给她吧！"
     }
    ],
    "source": "QL_RitoMini_Cook"
   },
   "labels": [
    "QL_RitoMini_Cook_Finish",
    "QL_RitoMini_Cook_Name"
   ],
   "flags": {
    "ready": "RitoMini_Cook_Ready",
    "activated": "RitoMini_Cook_Activated",
    "finish": "RitoMini_Cook_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_RitoMini_Cook",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoMini_Cook_Ready": 1,
    "RitoMini_Cook_Activated": 0,
    "RitoMini_Cook_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "新娘舍华求实",
   "title_source": "QL_RitoMini_Cook · text[0] · 无标签"
  },
  {
   "id": "RitoMini_Flint",
   "name": "打火石交给了\n来利特村度蜜月的久戈，\n获得卢比作为谢礼！\n\n久戈好像打算多做点烤苹果。\n\n获得火石，\n一起拿去给他吧！",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_RitoMini_Flint",
   "text": {
    "name": "你把打火石交给了来利特村度蜜月的久戈，获得卢比作为谢礼！久戈好像打算多做点烤苹果。获得火石，一起拿去给他吧！",
    "desc": null,
    "finish": "到利特村度蜜月的久戈想为妻子准备烤苹果。要做烤苹果自然需要用火。拿火石他点火吧。",
    "steps": {},
    "name_label": "QL_RitoMini_Flint_Name",
    "desc_label": null,
    "finish_label": "QL_RitoMini_Flint_Finish",
    "items": [
     {
      "label": null,
      "text": "新郎挽回名誉"
     },
     {
      "label": "QL_RitoMini_Flint_Finish",
      "text": "到利特村度蜜月的久戈想为妻子准备烤苹果。要做烤苹果自然需要用火。拿火石他点火吧。"
     },
     {
      "label": "QL_RitoMini_Flint_Name",
      "text": "你把打火石交给了来利特村度蜜月的久戈，获得卢比作为谢礼！久戈好像打算多做点烤苹果。获得火石，一起拿去给他吧！"
     }
    ],
    "source": "QL_RitoMini_Flint"
   },
   "labels": [
    "QL_RitoMini_Flint_Finish",
    "QL_RitoMini_Flint_Name"
   ],
   "flags": {
    "ready": "RitoMini_Flint_Ready",
    "activated": "RitoMini_Flint_Activated",
    "finish": "RitoMini_Flint_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_RitoMini_Flint",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoMini_Flint_Ready": 1,
    "RitoMini_Flint_Activated": 0,
    "RitoMini_Flint_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "新郎挽回名誉",
   "title_source": "QL_RitoMini_Flint · text[0] · 无标签"
  },
  {
   "id": "RitoMini_IceGolem",
   "name": "伐了暴风谷里的冰岩巨人！\n利特村的守门人基藏应该也会很惊讶吧。\n\n快点把这个好消息告诉藏。",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_RitoMini_IceGolem",
   "text": {
    "name": "你讨伐了暴风谷里的冰岩巨人！利特村的守门人基藏应该也会很惊讶吧。快点把这个好消息告诉藏。",
    "desc": "你讨伐了暴风谷里的冰岩巨人！利特村的守门人基藏应该也会很惊讶吧。快点把这个好消息告诉藏。",
    "finish": null,
    "steps": {},
    "name_label": "QL_RitoMini_IceGolem_Desc",
    "desc_label": "QL_RitoMini_IceGolem_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "暴风谷里的冰岩巨人"
     },
     {
      "label": null,
      "text": "利特村的守门人基藏据说曾在暴风谷见过冰岩巨人……找到风谷里的冰岩巨人，向它们发起挑战吧。"
     },
     {
      "label": "QL_RitoMini_IceGolem_Desc",
      "text": "你讨伐了暴风谷里的冰岩巨人！利特村的守门人基藏应该也会很惊讶吧。快点把这个好消息告诉藏。"
     },
     {
      "label": null,
      "text": "你向利特村的守门人基藏报告了已讨伐暴风谷里的冰岩巨人一事。从惊讶的基藏那里获得卢比作为谢礼。"
     }
    ],
    "source": "QL_RitoMini_IceGolem"
   },
   "labels": [
    "QL_RitoMini_IceGolem_Desc",
    "QL_RitoMini_IceGolem_Name",
    "�������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001~\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000(\u0000\u0000\u0000�\u0000\u0000\u0001\u001af��Ό7��v�Q�\\�]�N�\u0000\u0000R)rygQv�[���N�W���\u0000\ncn��f�W(f��Ό7����Q�\\�]�N� & &\u0000\n\u0000\nb~R0\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000f��Ό7��"
   ],
   "flags": {
    "ready": "RitoMini_IceGolem_Ready",
    "activated": "RitoMini_IceGolem_Activated",
    "finish": "RitoMini_IceGolem_Finish",
    "steps": [],
    "aux": [
     "RitoMini_IceGolem_Beated"
    ]
   },
   "source": [
    "QL_RitoMini_IceGolem",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoMini_IceGolem_Ready": 0,
    "RitoMini_IceGolem_Activated": 0,
    "RitoMini_IceGolem_Finish": 0,
    "RitoMini_IceGolem_Beated": 0
   },
   "status_snapshot": "未知",
   "title": "暴风谷里的冰岩巨人",
   "title_source": "QL_RitoMini_IceGolem · text[0] · 无标签"
  },
  {
   "id": "RitoRabitMountain",
   "name": "虹告诉你的那棵大杉树上眺望，\n看到了静寂地沉睡在雪原的鸟状台地。\n\n那里竟隐藏着一座古代神庙！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_RitoRabitMountain",
   "text": {
    "name": "从桃虹告诉你的那棵大杉树上眺望，看到了静寂地沉睡在雪原的鸟状台地。那里竟隐藏着一座古代神庙！",
    "desc": null,
    "finish": "利特村的村民桃虹告诉你海布拉山脉上那棵大杉树故事！“高耸入云的山上有棵参天大树，　老爷爷从大树向着西北方望去，　看见一只白鸟正欲展翅高飞。　他飞奔前去小鸟那里，　发现它的肚子里有很重要的东西。”",
    "steps": {},
    "name_label": "QL_RitoRabitMountain_Name",
    "desc_label": null,
    "finish_label": "QL_RitoRabitMountain_Finish",
    "items": [
     {
      "label": null,
      "text": "高耸入云的山上有棵参天大树"
     },
     {
      "label": "QL_RitoRabitMountain_Finish",
      "text": "利特村的村民桃虹告诉你海布拉山脉上那棵大杉树故事！“高耸入云的山上有棵参天大树，　老爷爷从大树向着西北方望去，　看见一只白鸟正欲展翅高飞。　他飞奔前去小鸟那里，　发现它的肚子里有很重要的东西。”"
     },
     {
      "label": "QL_RitoRabitMountain_Name",
      "text": "从桃虹告诉你的那棵大杉树上眺望，看到了静寂地沉睡在雪原的鸟状台地。那里竟隐藏着一座古代神庙！"
     }
    ],
    "source": "QL_RitoRabitMountain"
   },
   "labels": [
    "QL_RitoRabitMountain_Finish",
    "QL_RitoRabitMountain_Name"
   ],
   "flags": {
    "ready": "RitoRabitMountain_Ready",
    "activated": "RitoRabitMountain_Activated",
    "finish": "RitoRabitMountain_Finish",
    "steps": [],
    "aux": [
     "RitoRabitMountain_FlyTraining",
     "RitoRabitMountain_Talk"
    ]
   },
   "source": [
    "QL_RitoRabitMountain",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoRabitMountain_Ready": 1,
    "RitoRabitMountain_Activated": 0,
    "RitoRabitMountain_Finish": 0,
    "RitoRabitMountain_FlyTraining": 1,
    "RitoRabitMountain_Talk": 0
   },
   "status_snapshot": "未开始",
   "title": "高耸入云的山上有棵参天大树",
   "title_source": "QL_RitoRabitMountain · text[0] · 无标签"
  },
  {
   "id": "RitoSongMystery",
   "name": "的姐姐索里莱丝告诉了你诗的下文。\n\n“利特之巨塔，漆黑之身躯，\n　日头高挂时，真心始现形，\n　然其正沉眠，炙焰唤魂醒。”\n\n这首诗中隐藏的团底是……？",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_RitoSongMystery",
   "text": {
    "name": "蓓拉的姐姐索里莱丝告诉了你诗的下文。“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形，　然其正沉眠，炙焰唤魂醒。”这首诗中隐藏的团底是……？",
    "desc": "“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形。”利特村村民蓓拉告诉你的这首诗，好像还有下文……蓓拉的姐姐里莱丝似乎知道这首诗的下文……",
    "finish": "“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形。”利特村村民蓓拉告诉你的这首诗，好像还有下文……蓓拉的姐姐里莱丝似乎知道这首诗的下文……",
    "steps": {},
    "name_label": "QL_RitoSongMystery_Name",
    "desc_label": "QL_RitoSongMystery_Desc",
    "finish_label": "QL_RitoSongMystery_Desc",
    "items": [
     {
      "label": null,
      "text": "利特的诗谜"
     },
     {
      "label": "QL_RitoSongMystery_Desc",
      "text": "“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形。”利特村村民蓓拉告诉你的这首诗，好像还有下文……蓓拉的姐姐里莱丝似乎知道这首诗的下文……"
     },
     {
      "label": "QL_RitoSongMystery_Name",
      "text": "蓓拉的姐姐索里莱丝告诉了你诗的下文。“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形，　然其正沉眠，炙焰唤魂醒。”这首诗中隐藏的团底是……？"
     },
     {
      "label": null,
      "text": "“利特之巨塔，漆黑之身躯，　日头高挂时，真心始现形，　然其正沉眠，炙焰唤魂醒。”你发现了利特村的诗谜所暗示的新神庙的入口！"
     }
    ],
    "source": "QL_RitoSongMystery"
   },
   "labels": [
    "QL_RitoSongMystery_Desc",
    "QL_RitoSongMystery_Name",
    "QL_RitoSongMystery_Finished"
   ],
   "flags": {
    "ready": "RitoSongMystery_Ready",
    "activated": "RitoSongMystery_Activated",
    "finish": "RitoSongMystery_Finished",
    "steps": [],
    "aux": [
     "RitoSongMystery_NPC012_First",
     "RitoSongMystery_NPC030_First",
     "RitoSongMystery_PanelOn",
     "RitoSongMystery_Shrine",
     "RitoSongMystery_Sister"
    ]
   },
   "source": [
    "QL_RitoSongMystery",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoSongMystery_Ready": 0,
    "RitoSongMystery_Activated": 0,
    "RitoSongMystery_Finished": 0,
    "RitoSongMystery_NPC012_First": 0,
    "RitoSongMystery_NPC030_First": 0,
    "RitoSongMystery_PanelOn": 0,
    "RitoSongMystery_Shrine": 0,
    "RitoSongMystery_Sister": 0
   },
   "status_snapshot": "未知",
   "title": "利特的诗谜",
   "title_source": "QL_RitoSongMystery · text[0] · 无标签"
  },
  {
   "id": "RitoUmayadoMini_HotRecipe",
   "name": "邦挞边境利特驿站的赖斯\n送去了隆的调味粉获得50卢比。\n你得知以拉鲁米隆的调味粉底料，\n再混合其他材料，可以做出多种多样的咖喱饭。\n\n从下次开始，赖斯好像会帮你\n把隆的调味粉成拉鲁米",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_RitoUmayadoMini_HotRecipe",
   "text": {
    "name": "为塔邦挞边境利特驿站的赖斯送去了隆的调味粉获得50卢比。你得知以拉鲁米隆的调味粉底料，再混合其他材料，可以做出多种多样的咖喱饭。从下次开始，赖斯好像会帮你把隆的调味粉成拉鲁米",
    "desc": null,
    "finish": "塔邦挞边境利特驿站的赖斯拜托你捎回咖喱饭的材料隆的调味粉。获得隆的调味粉，送去利特驿站的赖斯那里吧。",
    "steps": {},
    "name_label": "QL_RitoUmayadoMini_HotRecipe_Name",
    "desc_label": null,
    "finish_label": "QL_RitoUmayadoMini_HotRecipe_Finish",
    "items": [
     {
      "label": null,
      "text": "寒冷时要吃咖喱！"
     },
     {
      "label": "QL_RitoUmayadoMini_HotRecipe_Finish",
      "text": "塔邦挞边境利特驿站的赖斯拜托你捎回咖喱饭的材料隆的调味粉。获得隆的调味粉，送去利特驿站的赖斯那里吧。"
     },
     {
      "label": "QL_RitoUmayadoMini_HotRecipe_Name",
      "text": "为塔邦挞边境利特驿站的赖斯送去了隆的调味粉获得50卢比。你得知以拉鲁米隆的调味粉底料，再混合其他材料，可以做出多种多样的咖喱饭。从下次开始，赖斯好像会帮你把隆的调味粉成拉鲁米"
     }
    ],
    "source": "QL_RitoUmayadoMini_HotRecipe"
   },
   "labels": [
    "QL_RitoUmayadoMini_HotRecipe_Finish",
    "QL_RitoUmayadoMini_HotRecipe_Name"
   ],
   "flags": {
    "ready": "RitoUmayadoMini_HotRecipe_Ready",
    "activated": "RitoUmayadoMini_HotRecipe_Activated",
    "finish": "RitoUmayadoMini_HotRecipe_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_RitoUmayadoMini_HotRecipe",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RitoUmayadoMini_HotRecipe_Ready": 1,
    "RitoUmayadoMini_HotRecipe_Activated": 0,
    "RitoUmayadoMini_HotRecipe_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "寒冷时要吃咖喱！",
   "title_source": "QL_RitoUmayadoMini_HotRecipe · text[0] · 无标签"
  },
  {
   "id": "Rito_BrosRock",
   "name": "妹所唱的利特村流传的老歌中\n有着这样的歌词：\n\n“伴随着少女的歌声，\n  那岩石迎风歌唱时，\n  道路将呈现于勇者眼前。”\n\n这个地方是不是隐藏着什么秘密呢？",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Rito_BrosRock",
   "text": {
    "name": "五姐妹所唱的利特村流传的老歌中有着这样的歌词：“伴随着少女的歌声，  那岩石迎风歌唱时，  道路将呈现于勇者眼前。”这个地方是不是隐藏着什么秘密呢？",
    "desc": "利特的兄弟岩",
    "finish": null,
    "steps": {},
    "name_label": "QL_Rito_BrosRock_Name",
    "desc_label": "QL_Rito_BrosRock_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Rito_BrosRock_Desc",
      "text": "利特的兄弟岩"
     },
     {
      "label": null,
      "text": "住在利特村的五姐妹中的小妹奇尔正为不来练歌的姐姐们生气。帮她把位于子某处大姐娜楠、二姐珂茨、三姐庚珂、四姐格里戈莉叫到奇尔那里吧。"
     },
     {
      "label": "QL_Rito_BrosRock_Desc",
      "text": "请任性的三姐庚珂吃了干煎三文鱼后，她的心情好转了。其他姐妹好像也在前往弟岩去看看情况吧。"
     },
     {
      "label": "QL_Rito_BrosRock_Name",
      "text": "五姐妹所唱的利特村流传的老歌中有着这样的歌词：“伴随着少女的歌声，  那岩石迎风歌唱时，  道路将呈现于勇者眼前。”这个地方是不是隐藏着什么秘密呢？"
     },
     {
      "label": null,
      "text": "解开了隐藏在利特村流传的歌曲和兄弟岩的谜题，你发现了一座新的古代神庙！不但尽情地练歌，还发现了神庙的姐妹们一脸满足地回到利特村。"
     }
    ],
    "source": "QL_Rito_BrosRock"
   },
   "labels": [
    "QL_Rito_BrosRock_Desc",
    "QL_Rito_BrosRock_Desc",
    "QL_Rito_BrosRock_Name"
   ],
   "flags": {
    "ready": "Rito_BrosRock_Ready",
    "activated": "Rito_BrosRock_Activated",
    "finish": "Rito_BrosRock_Finish",
    "steps": [],
    "aux": [
     "Rito_BrosRock_Dungeon",
     "Rito_BrosRock_S1",
     "Rito_BrosRock_S1Next1",
     "Rito_BrosRock_S1Next2",
     "Rito_BrosRock_S1Next3",
     "Rito_BrosRock_S2",
     "Rito_BrosRock_S3",
     "Rito_BrosRock_S4",
     "Rito_BrosRock_Singsong"
    ]
   },
   "source": [
    "QL_Rito_BrosRock",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Rito_BrosRock_Ready": 0,
    "Rito_BrosRock_Activated": 0,
    "Rito_BrosRock_Finish": 0,
    "Rito_BrosRock_Dungeon": 0,
    "Rito_BrosRock_S1": 0,
    "Rito_BrosRock_S1Next1": 0,
    "Rito_BrosRock_S1Next2": 0,
    "Rito_BrosRock_S1Next3": 0,
    "Rito_BrosRock_S2": 0,
    "Rito_BrosRock_S3": 0,
    "Rito_BrosRock_S4": 0,
    "Rito_BrosRock_Singsong": 0
   },
   "status_snapshot": "未知",
   "title": "利特的兄弟岩",
   "title_source": "QL_Rito_BrosRock · text[0] · 标签:QL_Rito_BrosRock_Desc"
  },
  {
   "id": "Rito_BrosRock_Rito_BrosRock",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [
     "Rito_BrosRock_Rito_BrosRock_Step1",
     "Rito_BrosRock_Rito_BrosRock_Step2"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Rito_BrosRock_Rito_BrosRock_Step1": 0,
    "Rito_BrosRock_Rito_BrosRock_Step2": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Rito_KeelSearch",
   "name": "正在兄弟岩练歌。\n帮她给母亲米拉平安吧。",
   "category": "迷你挑战",
   "subcategory": "利特地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Rito_KeelSearch",
   "text": {
    "name": "奇尔正在兄弟岩练歌。帮她给母亲米拉平安吧。",
    "desc": "奇尔正在兄弟岩练歌。帮她给母亲米拉平安吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_Rito_KeelSearch_Name",
    "desc_label": "QL_Rito_KeelSearch_Name",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "寻找奇尔！"
     },
     {
      "label": null,
      "text": "哈米拉的女儿奇尔不见了。她好像一个人去了弟岩找到奇尔，让她母亲哈米拉放心吧。"
     },
     {
      "label": "QL_Rito_KeelSearch_Name",
      "text": "奇尔正在兄弟岩练歌。帮她给母亲米拉平安吧。"
     },
     {
      "label": null,
      "text": "将奇尔正在兄弟岩练歌一事转达给哈米拉后，她好像也放心了。如果奇尔拜托的事还没完成，赶紧去完成了吧。"
     }
    ],
    "source": "QL_Rito_KeelSearch"
   },
   "labels": [
    "QL_Rito_KeelSearch_Name",
    "QL_Rito_KeelSearch_Desc",
    "ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000 \u0000\u0000\u0000�\u0000\u0000\u0000�[�b~YG\\\u0014�\u0001\u0000\u0000T�|sb�v�YsQ?YG\\\u0014N\r��N�0\u0002\u0000\n\u0000\nYyY}P�N\u0000N*N�S�N�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000QD_\u001f\\�\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002��0\u0002\u0000\nb~R0YG\\\u0014�\f��Yyk�N"
   ],
   "flags": {
    "ready": "Rito_KeelSearch_Ready",
    "activated": "Rito_KeelSearch_Activated",
    "finish": "Rito_KeelSearch_Finish",
    "steps": [
     "Rito_KeelSearch_Step1"
    ],
    "aux": []
   },
   "source": [
    "QL_Rito_KeelSearch",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Rito_KeelSearch_Ready": 0,
    "Rito_KeelSearch_Activated": 0,
    "Rito_KeelSearch_Finish": 0,
    "Rito_KeelSearch_Step1": 0
   },
   "status_snapshot": "未知",
   "title": "寻找奇尔！",
   "title_source": "QL_Rito_KeelSearch · text[0] · 无标签"
  },
  {
   "id": "RiversideMini_CastleWeapon",
   "name": "据传已毁灭100年之久的海拉鲁城堡中\n获得了在武器收藏家之中颇有名气、\n被称为卫系列武器。\n\n给驿站的旅行者帕莉塞看过后，\n好像激起了她的好奇心。\n希望她最好不要乱来……",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_RiversideMini_CastleWeapon",
   "text": {
    "name": "你在据传已毁灭100年之久的海拉鲁城堡中获得了在武器收藏家之中颇有名气、被称为卫系列武器。给驿站的旅行者帕莉塞看过后，好像激起了她的好奇心。希望她最好不要乱来……",
    "desc": null,
    "finish": "海拉鲁城堡据传早在100年前就已毁灭……在城堡中好像还能找到从前的稀世武器。其中甚至有被称为卫系列、在武器收藏家之中颇有名气的武器。驿站的旅行者帕莉塞想一睹其容。最近怪物和机械妖怪非常活跃，轻易靠近城好像很危险……",
    "steps": {},
    "name_label": "QL_RiversideMini_CastleWeapon_Name",
    "desc_label": null,
    "finish_label": "QL_RiversideMini_CastleWeapon_Finish",
    "items": [
     {
      "label": null,
      "text": "沉睡在海拉鲁城堡的武器"
     },
     {
      "label": "QL_RiversideMini_CastleWeapon_Finish",
      "text": "海拉鲁城堡据传早在100年前就已毁灭……在城堡中好像还能找到从前的稀世武器。其中甚至有被称为卫系列、在武器收藏家之中颇有名气的武器。驿站的旅行者帕莉塞想一睹其容。最近怪物和机械妖怪非常活跃，轻易靠近城好像很危险……"
     },
     {
      "label": "QL_RiversideMini_CastleWeapon_Name",
      "text": "你在据传已毁灭100年之久的海拉鲁城堡中获得了在武器收藏家之中颇有名气、被称为卫系列武器。给驿站的旅行者帕莉塞看过后，好像激起了她的好奇心。希望她最好不要乱来……"
     }
    ],
    "source": "QL_RiversideMini_CastleWeapon"
   },
   "labels": [
    "QL_RiversideMini_CastleWeapon_Finish",
    "QL_RiversideMini_CastleWeapon_Name"
   ],
   "flags": {
    "ready": "RiversideMini_CastleWeapon_Ready",
    "activated": "RiversideMini_CastleWeapon_Activated",
    "finish": "RiversideMini_CastleWeapon_Finish",
    "steps": [],
    "aux": [
     "RiversideMini_CastleWeapon_ShowedShield"
    ]
   },
   "source": [
    "QL_RiversideMini_CastleWeapon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RiversideMini_CastleWeapon_Ready": 1,
    "RiversideMini_CastleWeapon_Activated": 0,
    "RiversideMini_CastleWeapon_Finish": 0,
    "RiversideMini_CastleWeapon_ShowedShield": 0
   },
   "status_snapshot": "未开始",
   "title": "沉睡在海拉鲁城堡的武器",
   "title_source": "QL_RiversideMini_CastleWeapon · text[0] · 无标签"
  },
  {
   "id": "RiversideMini_RoyalRecipe",
   "name": "饪了一道据传曾是海拉鲁城堡的宫廷料理。\n将料理交给了驿站的戈艾塔弗，\n他欣喜若狂，似乎因此变得更美了。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_RiversideMini_RoyalRecipe",
   "text": {
    "name": "你烹饪了一道据传曾是海拉鲁城堡的宫廷料理。将料理交给了驿站的戈艾塔弗，他欣喜若狂，似乎因此变得更美了。",
    "desc": null,
    "finish": "知道自己的祖先是海拉鲁城堡的御厨后，驿站的戈艾塔弗对王族的料理很感兴趣。在海拉鲁城堡中，说不定还留存着有关烹饪食谱的文献。",
    "steps": {},
    "name_label": "QL_RiversideMini_RoyalRecipe_Name",
    "desc_label": null,
    "finish_label": "QL_RiversideMini_RoyalRecipe_Finish",
    "items": [
     {
      "label": null,
      "text": "王族秘传的食谱"
     },
     {
      "label": "QL_RiversideMini_RoyalRecipe_Finish",
      "text": "知道自己的祖先是海拉鲁城堡的御厨后，驿站的戈艾塔弗对王族的料理很感兴趣。在海拉鲁城堡中，说不定还留存着有关烹饪食谱的文献。"
     },
     {
      "label": "QL_RiversideMini_RoyalRecipe_Name",
      "text": "你烹饪了一道据传曾是海拉鲁城堡的宫廷料理。将料理交给了驿站的戈艾塔弗，他欣喜若狂，似乎因此变得更美了。"
     }
    ],
    "source": "QL_RiversideMini_RoyalRecipe"
   },
   "labels": [
    "QL_RiversideMini_RoyalRecipe_Finish",
    "QL_RiversideMini_RoyalRecipe_Name"
   ],
   "flags": {
    "ready": "RiversideMini_RoyalRecipe_Ready",
    "activated": "RiversideMini_RoyalRecipe_Activated",
    "finish": "RiversideMini_RoyalRecipe_Finish",
    "steps": [],
    "aux": [
     "RiversideMini_RoyalRecipe_Clear00",
     "RiversideMini_RoyalRecipe_Clear01"
    ]
   },
   "source": [
    "QL_RiversideMini_RoyalRecipe",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "RiversideMini_RoyalRecipe_Ready": 1,
    "RiversideMini_RoyalRecipe_Activated": 0,
    "RiversideMini_RoyalRecipe_Finish": 0,
    "RiversideMini_RoyalRecipe_Clear00": 0,
    "RiversideMini_RoyalRecipe_Clear01": 0
   },
   "status_snapshot": "未开始",
   "title": "王族秘传的食谱",
   "title_source": "QL_RiversideMini_RoyalRecipe · text[0] · 无标签"
  },
  {
   "id": "SandStorm",
   "name": "拉卡拉集市可望见的沙尘暴\n沉睡在深处的宝物是一座古代神庙。\n\n之后要做的就是成功通过勇者的试练。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_SandStorm",
   "text": {
    "name": "从卡拉卡拉集市可望见的沙尘暴沉睡在深处的宝物是一座古代神庙。之后要做的就是成功通过勇者的试练。",
    "desc": null,
    "finish": "从卡拉卡拉集市可望见的沙尘暴，据说在其深处沉睡着代人遗留的宝物看准沙尘暴消失的时机，去寻宝吧。",
    "steps": {},
    "name_label": "QL_SandStorm_Name",
    "desc_label": null,
    "finish_label": "QL_SandStorm_Finish",
    "items": [
     {
      "label": null,
      "text": "消失的沙尘暴？"
     },
     {
      "label": "QL_SandStorm_Finish",
      "text": "从卡拉卡拉集市可望见的沙尘暴，据说在其深处沉睡着代人遗留的宝物看准沙尘暴消失的时机，去寻宝吧。"
     },
     {
      "label": "QL_SandStorm_Name",
      "text": "从卡拉卡拉集市可望见的沙尘暴沉睡在深处的宝物是一座古代神庙。之后要做的就是成功通过勇者的试练。"
     }
    ],
    "source": "QL_SandStorm"
   },
   "labels": [
    "QL_SandStorm_Finish",
    "QL_SandStorm_Name"
   ],
   "flags": {
    "ready": "SandStorm_Ready",
    "activated": "SandStorm_Activated",
    "finish": "SandStorm_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_SandStorm",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SandStorm_Ready": 1,
    "SandStorm_Activated": 0,
    "SandStorm_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "消失的沙尘暴？",
   "title_source": "QL_SandStorm · text[0] · 无标签"
  },
  {
   "id": "SanrokuMini_Lizard",
   "name": "捕捉0只耐火蜥谢礼，\n麦萨奇赠予你一副耐火石铠！\n\n而且从下次开始，\n他会用0卢比下只耐火蜥",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_SanrokuMini_Lizard",
   "text": {
    "name": "作为捕捉0只耐火蜥谢礼，麦萨奇赠予你一副耐火石铠！而且从下次开始，他会用0卢比下只耐火蜥",
    "desc": null,
    "finish": "南部采矿场的麦萨奇拜托你捕捉0只息于死亡之山的火蜥南部采矿场附近好像就有耐火蜥出没。捕捉0只耐火蜥送去麦萨奇那里吧。",
    "steps": {},
    "name_label": "QL_SanrokuMini_Lizard_Name",
    "desc_label": null,
    "finish_label": "QL_SanrokuMini_Lizard_Finish",
    "items": [
     {
      "label": null,
      "text": "捉住耐火蜥！"
     },
     {
      "label": "QL_SanrokuMini_Lizard_Finish",
      "text": "南部采矿场的麦萨奇拜托你捕捉0只息于死亡之山的火蜥南部采矿场附近好像就有耐火蜥出没。捕捉0只耐火蜥送去麦萨奇那里吧。"
     },
     {
      "label": "QL_SanrokuMini_Lizard_Name",
      "text": "作为捕捉0只耐火蜥谢礼，麦萨奇赠予你一副耐火石铠！而且从下次开始，他会用0卢比下只耐火蜥"
     }
    ],
    "source": "QL_SanrokuMini_Lizard"
   },
   "labels": [
    "QL_SanrokuMini_Lizard_Finish",
    "QL_SanrokuMini_Lizard_Name"
   ],
   "flags": {
    "ready": "SanrokuMini_Lizard_Ready",
    "activated": "SanrokuMini_Lizard_Activated",
    "finish": "SanrokuMini_Lizard_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_SanrokuMini_Lizard",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SanrokuMini_Lizard_Ready": 1,
    "SanrokuMini_Lizard_Activated": 0,
    "SanrokuMini_Lizard_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "捉住耐火蜥！",
   "title_source": "QL_SanrokuMini_Lizard · text[0] · 无标签"
  },
  {
   "id": "SearchStone",
   "name": "尼想知道缺失的石碑上写了什么。\n\n如果你找到了散落的石碑碎块，\n利迦尼希望你能拍下照片。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_SearchStone",
   "text": {
    "name": "利迦尼想知道缺失的石碑上写了什么。如果你找到了散落的石碑碎块，利迦尼希望你能拍下照片。",
    "desc": "利迦尼想知道缺失的石碑上写了什么。如果你找到了散落的石碑碎块，利迦尼希望你能拍下照片。",
    "finish": null,
    "steps": {
     "QL_SearchStone_Step1": "你找到了所有散落的石碑碎块，将其拍成片拿给利迦尼看。你还发现石碑上刻有一段神秘话语！“两个生命齐跪下，同心协力之际，  试练之门随之敞开。”"
    },
    "name_label": "QL_SearchStone_Desc",
    "desc_label": "QL_SearchStone_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "寻找石碑碎块"
     },
     {
      "label": "QL_SearchStone_Desc",
      "text": "利迦尼想知道缺失的石碑上写了什么。如果你找到了散落的石碑碎块，利迦尼希望你能拍下照片。"
     },
     {
      "label": "QL_SearchStone_Step1",
      "text": "你找到了所有散落的石碑碎块，将其拍成片拿给利迦尼看。你还发现石碑上刻有一段神秘话语！“两个生命齐跪下，同心协力之际，  试练之门随之敞开。”"
     },
     {
      "label": null,
      "text": "两人下跪，同心协力，古代神庙出现在你们眼前！利迦尼一脸满足地一直注视着出现的神庙。"
     }
    ],
    "source": "QL_SearchStone"
   },
   "labels": [
    "QL_SearchStone_Desc",
    "QL_SearchStone_Step1",
    "QL_SearchStone_Name"
   ],
   "flags": {
    "ready": "SearchStone_Ready",
    "activated": "SearchStone_Activated",
    "finish": "SearchStone_Finish",
    "steps": [
     "SearchStone_Step1"
    ],
    "aux": [
     "SearchStone_AfterTalk",
     "SearchStone_Dungeon",
     "SearchStone_Stone2end",
     "SearchStone_Stone3end",
     "SearchStone_Stone4end"
    ]
   },
   "source": [
    "QL_SearchStone",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SearchStone_Ready": 0,
    "SearchStone_Activated": 0,
    "SearchStone_Finish": 0,
    "SearchStone_Step1": 0,
    "SearchStone_AfterTalk": 0,
    "SearchStone_Dungeon": 0,
    "SearchStone_Stone2end": 0,
    "SearchStone_Stone3end": 0,
    "SearchStone_Stone4end": 0
   },
   "status_snapshot": "未知",
   "title": "寻找石碑碎块",
   "title_source": "QL_SearchStone · text[0] · 无标签"
  },
  {
   "id": "SecretofObject",
   "name": "子投射在仅在特定时间\n才发出淡淡光芒的神秘台座。\n古代神庙出现在你的眼前！\n\n在神庙中等待你的\n究竟会是什么呢……？",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_SecretofObject",
   "text": {
    "name": "将影子投射在仅在特定时间才发出淡淡光芒的神秘台座。古代神庙出现在你的眼前！在神庙中等待你的究竟会是什么呢……？",
    "desc": null,
    "finish": "在祖先遗留的日志中记载着关于神秘台座的调查记录。“雪山台座散发光芒之际，  于台座中心投下黑暗之影。”形似雪山覆盖的神秘台座中似乎隐藏着什么秘密。",
    "steps": {},
    "name_label": "QL_SecretofObject_Name",
    "desc_label": null,
    "finish_label": "QL_SecretofObject_Finish",
    "items": [
     {
      "label": null,
      "text": "雪山的日志"
     },
     {
      "label": "QL_SecretofObject_Finish",
      "text": "在祖先遗留的日志中记载着关于神秘台座的调查记录。“雪山台座散发光芒之际，  于台座中心投下黑暗之影。”形似雪山覆盖的神秘台座中似乎隐藏着什么秘密。"
     },
     {
      "label": "QL_SecretofObject_Name",
      "text": "将影子投射在仅在特定时间才发出淡淡光芒的神秘台座。古代神庙出现在你的眼前！在神庙中等待你的究竟会是什么呢……？"
     }
    ],
    "source": "QL_SecretofObject"
   },
   "labels": [
    "QL_SecretofObject_Finish",
    "QL_SecretofObject_Name"
   ],
   "flags": {
    "ready": "SecretofObject_Ready",
    "activated": "SecretofObject_Activated",
    "finish": "SecretofObject_Finish",
    "steps": [
     "SecretofObject_Step1"
    ],
    "aux": []
   },
   "source": [
    "QL_SecretofObject",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SecretofObject_Ready": 1,
    "SecretofObject_Activated": 0,
    "SecretofObject_Finish": 0,
    "SecretofObject_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": "雪山的日志",
   "title_source": "QL_SecretofObject · text[0] · 无标签"
  },
  {
   "id": "SeekerEye",
   "name": "塔邦挞大桥驿站的果戈看到的地方，\n发现绝壁上绘有某种花纹。\n\n将电箭射向花纹的中心，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_SeekerEye",
   "text": {
    "name": "前往塔邦挞大桥驿站的果戈看到的地方，发现绝壁上绘有某种花纹。将电箭射向花纹的中心，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "塔邦挞大桥驿站的果戈觉得远山的崖壁上有一部分好似人工加工而成。那里到底有什么呢？",
    "steps": {},
    "name_label": "QL_SeekerEye_Name",
    "desc_label": null,
    "finish_label": "QL_SeekerEye_Finish",
    "items": [
     {
      "label": null,
      "text": "绝壁花纹"
     },
     {
      "label": "QL_SeekerEye_Finish",
      "text": "塔邦挞大桥驿站的果戈觉得远山的崖壁上有一部分好似人工加工而成。那里到底有什么呢？"
     },
     {
      "label": "QL_SeekerEye_Name",
      "text": "前往塔邦挞大桥驿站的果戈看到的地方，发现绝壁上绘有某种花纹。将电箭射向花纹的中心，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_SeekerEye"
   },
   "labels": [
    "QL_SeekerEye_Finish",
    "QL_SeekerEye_Name"
   ],
   "flags": {
    "ready": "SeekerEye_Ready",
    "activated": "SeekerEye_Activated",
    "finish": "SeekerEye_Finish",
    "steps": [
     "SeekerEye_Step1"
    ],
    "aux": []
   },
   "source": [
    "QL_SeekerEye",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SeekerEye_Ready": 1,
    "SeekerEye_Activated": 0,
    "SeekerEye_Finish": 0,
    "SeekerEye_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": "绝壁花纹",
   "title_source": "QL_SeekerEye · text[0] · 无标签"
  },
  {
   "id": "Sekimoto_Test01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Sekimoto_Test01_Ready",
    "activated": "Sekimoto_Test01_Activated",
    "finish": "Sekimoto_Test01_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Sekimoto_Test01_Ready": 1,
    "Sekimoto_Test01_Activated": 0,
    "Sekimoto_Test01_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Sekimoto_Test01_Sekimoto_Test01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [
     "Sekimoto_Test01_Sekimoto_Test01_Step1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Sekimoto_Test01_Sekimoto_Test01_Step1": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "SetugenUmayadoMini_Umahonephoto",
   "name": "照片",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_SetugenUmayadoMini_Umahonephoto",
   "text": {
    "name": "骨马照片",
    "desc": "雪原驿站的一叶说想看一眼马怪物要怎样才能给她看呢？据说骨马怪物出没于北塔邦挞雪原以及雪原以东的奇怪遗迹周围。",
    "finish": null,
    "steps": {},
    "name_label": "QL_SetugenUmayadoMini_Umahonephoto_Name",
    "desc_label": "QL_SetugenUmayadoMini_Umahonephoto_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_SetugenUmayadoMini_Umahonephoto_Name",
      "text": "骨马照片"
     },
     {
      "label": "QL_SetugenUmayadoMini_Umahonephoto_Desc",
      "text": "雪原驿站的一叶说想看一眼马怪物要怎样才能给她看呢？据说骨马怪物出没于北塔邦挞雪原以及雪原以东的奇怪遗迹周围。"
     },
     {
      "label": "QL_SetugenUmayadoMini_Umahonephoto_Name",
      "text": "将骷髅马的照片给一叶看过，她竟惟妙惟肖地临摹了下来。她打算用那幅画撰写报道，并兴高采烈地称这会是一篇好报道。"
     }
    ],
    "source": "QL_SetugenUmayadoMini_Umahonephoto"
   },
   "labels": [
    "QL_SetugenUmayadoMini_Umahonephoto_Name",
    "QL_SetugenUmayadoMini_Umahonephoto_Name",
    "QL_SetugenUmayadoMini_Umahonephoto_Desc"
   ],
   "flags": {
    "ready": "SetugenUmayadoMini_Umahonephoto_Ready",
    "activated": "SetugenUmayadoMini_Umahonephoto_Activated",
    "finish": "SetugenUmayadoMini_Umahonephoto_Finish",
    "steps": [
     "SetugenUmayadoMini_Umahonephoto_Step01"
    ],
    "aux": [
     "SetugenUmayadoMini_Umahonephoto_SetugenUmayadoMini_Umaphoto"
    ]
   },
   "source": [
    "QL_SetugenUmayadoMini_Umahonephoto",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SetugenUmayadoMini_Umahonephoto_Ready": 0,
    "SetugenUmayadoMini_Umahonephoto_Activated": 0,
    "SetugenUmayadoMini_Umahonephoto_Finish": 0,
    "SetugenUmayadoMini_Umahonephoto_Step01": 0,
    "SetugenUmayadoMini_Umahonephoto_SetugenUmayadoMini_Umaphoto": 0
   },
   "status_snapshot": "未知",
   "title": "骨马照片",
   "title_source": "QL_SetugenUmayadoMini_Umahonephoto · text[0] · 标签:QL_SetugenUmayadoMini_Umahonephoto_Name"
  },
  {
   "id": "Shadow_Sign",
   "name": "下天光照耀西北之时，\n  在塔影指引之处，飞箭射天光。\n  勇者的试练将赫然耸现。”\n\n当天光位于西北方时，\n在格鲁德之塔所指示的台座上\n朝向天光放箭，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Shadow_Sign",
   "text": {
    "name": "“上下天光照耀西北之时，  在塔影指引之处，飞箭射天光。  勇者的试练将赫然耸现。”当天光位于西北方时，在格鲁德之塔所指示的台座上朝向天光放箭，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "“上下天光照耀西北之时，  在塔影指引之处，飞箭射天光。  勇者的试练将赫然耸现。”在格鲁德之塔从卡西瓦那里听来的古诗，解开这首诗的谜底，就能找到代神庙",
    "steps": {},
    "name_label": "QL_Shadow_Sign_Name",
    "desc_label": null,
    "finish_label": "QL_Shadow_Sign_Finish",
    "items": [
     {
      "label": null,
      "text": "去影子指示的地方"
     },
     {
      "label": "QL_Shadow_Sign_Finish",
      "text": "“上下天光照耀西北之时，  在塔影指引之处，飞箭射天光。  勇者的试练将赫然耸现。”在格鲁德之塔从卡西瓦那里听来的古诗，解开这首诗的谜底，就能找到代神庙"
     },
     {
      "label": "QL_Shadow_Sign_Name",
      "text": "“上下天光照耀西北之时，  在塔影指引之处，飞箭射天光。  勇者的试练将赫然耸现。”当天光位于西北方时，在格鲁德之塔所指示的台座上朝向天光放箭，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_Shadow_Sign"
   },
   "labels": [
    "QL_Shadow_Sign_Finish",
    "QL_Shadow_Sign_Name"
   ],
   "flags": {
    "ready": "Shadow_Sign_Ready",
    "activated": "Shadow_Sign_Activated",
    "finish": "Shadow_Sign_Finish",
    "steps": [],
    "aux": [
     "Shadow_Sign_Dungeon"
    ]
   },
   "source": [
    "QL_Shadow_Sign",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Shadow_Sign_Ready": 1,
    "Shadow_Sign_Activated": 0,
    "Shadow_Sign_Finish": 0,
    "Shadow_Sign_Dungeon": 0
   },
   "status_snapshot": "未开始",
   "title": "去影子指示的地方",
   "title_source": "QL_Shadow_Sign · text[0] · 无标签"
  },
  {
   "id": "ShieldofKolog",
   "name": "将在克洛格森林接受\n达秘达米的试练。\n\n准备好了就向达秘达米搭话吧。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_ShieldofKolog",
   "text": {
    "name": "你即将在克洛格森林接受达秘达米的试练。准备好了就向达秘达米搭话吧。",
    "desc": null,
    "finish": "你即将在克洛格森林接受达秘达米的试练。准备好了就向达秘达米搭话吧。",
    "steps": {},
    "name_label": "QL_ShieldofKolog_Name",
    "desc_label": null,
    "finish_label": "QL_ShieldofKolog_Name",
    "items": [
     {
      "label": null,
      "text": "不燃烧的试练"
     },
     {
      "label": "QL_ShieldofKolog_Name",
      "text": "你即将在克洛格森林接受达秘达米的试练。准备好了就向达秘达米搭话吧。"
     },
     {
      "label": null,
      "text": "森民之剑、森民之弓、森民盾，上身装备，朝目的地进发吧。"
     },
     {
      "label": null,
      "text": "森民之剑、森民之弓、森民盾换上这身装备到达了目的地，你发现了一座古代神庙！"
     }
    ],
    "source": "QL_ShieldofKolog"
   },
   "labels": [
    "QL_ShieldofKolog_Name",
    "QL_ShieldofKolog_Desc",
    "QL_ShieldofKolog_Finish"
   ],
   "flags": {
    "ready": "ShieldofKolog_Ready",
    "activated": "ShieldofKolog_Activated",
    "finish": "ShieldofKolog_Finish",
    "steps": [
     "ShieldofKolog_Step010"
    ],
    "aux": [
     "ShieldofKolog_Failed",
     "ShieldofKolog_Minigame",
     "ShieldofKolog_RentalBow",
     "ShieldofKolog_RentalShield",
     "ShieldofKolog_RentalSword",
     "ShieldofKolog_Retire",
     "ShieldofKolog_WeaponHide"
    ]
   },
   "source": [
    "QL_ShieldofKolog",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "ShieldofKolog_Ready": 1,
    "ShieldofKolog_Activated": 0,
    "ShieldofKolog_Finish": 0,
    "ShieldofKolog_Step010": 0,
    "ShieldofKolog_Failed": 0,
    "ShieldofKolog_Minigame": 0,
    "ShieldofKolog_RentalBow": 0,
    "ShieldofKolog_RentalShield": 0,
    "ShieldofKolog_RentalSword": 0,
    "ShieldofKolog_Retire": 0,
    "ShieldofKolog_WeaponHide": 0
   },
   "status_snapshot": "未开始",
   "title": "不燃烧的试练",
   "title_source": "QL_ShieldofKolog · text[0] · 无标签"
  },
  {
   "id": "ShieldofKolog_mini",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_ShieldofKolog_mini",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_ShieldofKolog_mini"
   },
   "labels": [
    "QL_ShieldofKolog_mini_Goal",
    "QL_ShieldofKolog_mini_Retire",
    "QL_ShieldofKolog_mini_Finish"
   ],
   "flags": {
    "ready": "ShieldofKolog_mini_Ready",
    "activated": "ShieldofKolog_mini_Activated",
    "finish": "ShieldofKolog_mini_Finish",
    "steps": [],
    "aux": [
     "ShieldofKolog_mini_BestTime_L",
     "ShieldofKolog_mini_BestTime_M",
     "ShieldofKolog_mini_BestTime_S",
     "ShieldofKolog_mini_Check",
     "ShieldofKolog_mini_Check_Record",
     "ShieldofKolog_mini_Check_Talk",
     "ShieldofKolog_mini_Goal",
     "ShieldofKolog_mini_Minigame",
     "ShieldofKolog_mini_Retire",
     "ShieldofKolog_mini_ThisTime_L",
     "ShieldofKolog_mini_ThisTime_M",
     "ShieldofKolog_mini_ThisTime_S"
    ]
   },
   "source": [
    "QL_ShieldofKolog_mini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "ShieldofKolog_mini_Ready": 0,
    "ShieldofKolog_mini_Activated": 0,
    "ShieldofKolog_mini_Finish": 0,
    "ShieldofKolog_mini_BestTime_L": 5,
    "ShieldofKolog_mini_BestTime_M": 0,
    "ShieldofKolog_mini_BestTime_S": 0,
    "ShieldofKolog_mini_Check": 0,
    "ShieldofKolog_mini_Check_Record": 0,
    "ShieldofKolog_mini_Check_Talk": 0,
    "ShieldofKolog_mini_Goal": 0,
    "ShieldofKolog_mini_Minigame": 0,
    "ShieldofKolog_mini_Retire": 0,
    "ShieldofKolog_mini_ThisTime_L": 0,
    "ShieldofKolog_mini_ThisTime_M": 0,
    "ShieldofKolog_mini_ThisTime_S": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "SnowMountainRescue",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "SnowMountainRescue_Ready",
    "activated": "SnowMountainRescue_Activated",
    "finish": "SnowMountainRescue_Finished",
    "steps": [],
    "aux": [
     "SnowMountainRescue_I7test",
     "SnowMountainRescue_TimeUp"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "SnowMountainRescue_Ready": 1,
    "SnowMountainRescue_Activated": 0,
    "SnowMountainRescue_Finished": 0,
    "SnowMountainRescue_I7test": 0,
    "SnowMountainRescue_TimeUp": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Solitary_Maze",
   "name": "何人所建的孤岛迷宫。\n\n通过此迷宫后，\n前方等待你的是一座古代神庙。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Solitary_Maze",
   "text": {
    "name": "不知何人所建的孤岛迷宫。通过此迷宫后，前方等待你的是一座古代神庙。",
    "desc": null,
    "finish": "当你靠近飘浮于阿卡莱海中孤岛上的诡异遗迹，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。",
    "steps": {},
    "name_label": "QL_Solitary_Maze_Name",
    "desc_label": null,
    "finish_label": "QL_Solitary_Maze_Finish",
    "items": [
     {
      "label": null,
      "text": "孤岛的试练"
     },
     {
      "label": "QL_Solitary_Maze_Finish",
      "text": "当你靠近飘浮于阿卡莱海中孤岛上的诡异遗迹，耳畔忽闻人声。据说只要破此迷宫就会被赐予祝福。"
     },
     {
      "label": "QL_Solitary_Maze_Name",
      "text": "不知何人所建的孤岛迷宫。通过此迷宫后，前方等待你的是一座古代神庙。"
     }
    ],
    "source": "QL_Solitary_Maze"
   },
   "labels": [
    "QL_Solitary_Maze_Finish",
    "QL_Solitary_Maze_Name"
   ],
   "flags": {
    "ready": "Solitary_Maze_Ready",
    "activated": "Solitary_Maze_Activated",
    "finish": "Solitary_Maze_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Solitary_Maze",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Solitary_Maze_Ready": 1,
    "Solitary_Maze_Activated": 0,
    "Solitary_Maze_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "孤岛的试练",
   "title_source": "QL_Solitary_Maze · text[0] · 无标签"
  },
  {
   "id": "StatueofZora",
   "name": "曲告诉你一首卓拉英杰祭祀诗。\n　“天降之光鳞，切断塞拉之脚下。\n    锃光闪耀，试练方现。”\n\n摩尔登好像把英杰祭上使用的\n“祭祀之枪”掉落在桥下。\n如果找到枪，再按诗中所说行事，\n勇者的试练是否会出现呢？",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_StatueofZora",
   "text": {
    "name": "鲁拉曲告诉你一首卓拉英杰祭祀诗。　“天降之光鳞，切断塞拉之脚下。    锃光闪耀，试练方现。”摩尔登好像把英杰祭上使用的“祭祀之枪”掉落在桥下。如果找到枪，再按诗中所说行事，勇者的试练是否会出现呢？",
    "desc": "鲁拉曲告诉你一首卓拉英杰祭祀诗。　“天降之光鳞，切断塞拉之脚下。    锃光闪耀，试练方现。”摩尔登好像把英杰祭上使用的“祭祀之枪”掉落在桥下。如果找到枪，再按诗中所说行事，勇者的试练是否会出现呢？",
    "finish": null,
    "steps": {},
    "name_label": "QL_StatueofZora_Name",
    "desc_label": "QL_StatueofZora_Name",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "英杰祭祀诗"
     },
     {
      "label": null,
      "text": "鲁拉曲告诉你一首卓拉英杰祭祀诗。“天降之光鳞，切断塞拉之脚下。   锃光闪耀，试练方现。”主持英杰祭的好像是摩尔登。"
     },
     {
      "label": "QL_StatueofZora_Name",
      "text": "鲁拉曲告诉你一首卓拉英杰祭祀诗。　“天降之光鳞，切断塞拉之脚下。    锃光闪耀，试练方现。”摩尔登好像把英杰祭上使用的“祭祀之枪”掉落在桥下。如果找到枪，再按诗中所说行事，勇者的试练是否会出现呢？"
     },
     {
      "label": null,
      "text": "将释放着光鳞余辉的枪刺向隐藏在塞拉瀑布的台座，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_StatueofZora"
   },
   "labels": [
    "QL_StatueofZora_Name",
    "QL_StatueofZora_Desc",
    "������������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000 \u0000\u0000\u0000�\u0000\u0000\u0001v��gpymy@��\u0000\u0000��b�f�TJ��O`N\u0000��SSbɂ�gpymy@��0\u0002\u0000\n\u0000\n \u001cY)�MNKQI���\fR\u0007e�X^b�NK�\u001aN\u000b0\u0002\u0000\n\u0000 \u0000 \u0000 �\u0003QI�"
   ],
   "flags": {
    "ready": "StatueofZora_Ready",
    "activated": "StatueofZora_Activated",
    "finish": "StatueofZora_Finish",
    "steps": [
     "StatueofZora_Step1"
    ],
    "aux": [
     "StatueofZora_Dungeon",
     "StatueofZora_Weapon_Spear_049"
    ]
   },
   "source": [
    "QL_StatueofZora",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "StatueofZora_Ready": 0,
    "StatueofZora_Activated": 0,
    "StatueofZora_Finish": 0,
    "StatueofZora_Step1": 0,
    "StatueofZora_Dungeon": 0,
    "StatueofZora_Weapon_Spear_049": 0
   },
   "status_snapshot": "未知",
   "title": "英杰祭祀诗",
   "title_source": "QL_StatueofZora · text[0] · 无标签"
  },
  {
   "id": "StolenBook",
   "name": "房子中的宝珠被盗。\n似乎是有人在间入而得手。\n\n守门人多朗和博嘉多没有看到\n村民以外的其他人，事情越发扑朔迷离。\n犯人可能还潜伏在附近。\n帕雅提醒你，如果在晚上看见可疑之人，\n对不要轻易接近",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_StolenBook",
   "text": {
    "name": "英帕房子中的宝珠被盗。似乎是有人在间入而得手。守门人多朗和博嘉多没有看到村民以外的其他人，事情越发扑朔迷离。犯人可能还潜伏在附近。帕雅提醒你，如果在晚上看见可疑之人，对不要轻易接近",
    "desc": "被盗的宝珠",
    "finish": "被盗的宝珠",
    "steps": {},
    "name_label": "QL_StolenBook_Desc",
    "desc_label": "QL_StolenBook_Desc",
    "finish_label": "QL_StolenBook_Desc",
    "items": [
     {
      "label": "QL_StolenBook_Desc",
      "text": "被盗的宝珠"
     },
     {
      "label": "QL_StolenBook_Desc",
      "text": "英帕房子中的宝珠被盗。似乎是有人在间入而得手。守门人多朗和博嘉多没有看到村民以外的其他人，事情越发扑朔迷离。犯人可能还潜伏在附近。帕雅提醒你，如果在晚上看见可疑之人，对不要轻易接近"
     },
     {
      "label": null,
      "text": "从英帕房子中盗走宝珠的犯人是依盖队。事件的起因是同属依盖队的多朗想脱离组织，未料有人要报复他而故意策划了此案。你帮忙解决了这桩案件，不仅找回了宝珠，还发现了古代神庙。"
     }
    ],
    "source": "QL_StolenBook"
   },
   "labels": [
    "QL_StolenBook_Desc",
    "QL_StolenBook_Desc",
    "QL_StolenBook_Finish",
    "QL_StolenBook_Finish",
    "QL_StolenBook_Name"
   ],
   "flags": {
    "ready": "StolenBook_Ready",
    "activated": "StolenBook_Activated",
    "finish": "StolenBook_Finish",
    "steps": [],
    "aux": [
     "StolenBook_Conclusion_NPC008",
     "StolenBook_Conclusion_NPC016",
     "StolenBook_Destination_NPC007",
     "StolenBook_Destination_NPC008",
     "StolenBook_Destination_NPC016",
     "StolenBook_DungeonGenerate",
     "StolenBook_KaidoNPC_Delete",
     "StolenBook_NakinCheck"
    ]
   },
   "source": [
    "QL_StolenBook",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "StolenBook_Ready": 0,
    "StolenBook_Activated": 0,
    "StolenBook_Finish": 0,
    "StolenBook_Conclusion_NPC008": 0,
    "StolenBook_Conclusion_NPC016": 0,
    "StolenBook_Destination_NPC007": 0,
    "StolenBook_Destination_NPC008": 0,
    "StolenBook_Destination_NPC016": 0,
    "StolenBook_DungeonGenerate": 0,
    "StolenBook_KaidoNPC_Delete": 0,
    "StolenBook_NakinCheck": 0
   },
   "status_snapshot": "未知",
   "title": "被盗的宝珠",
   "title_source": "QL_StolenBook · text[0] · 标签:QL_StolenBook_Desc"
  },
  {
   "id": "SunazarashiRace",
   "name": "沙海象拉力赛中\n打破了冠军帕弗宇的记录！\n\n作为冠军的证明，\n获得了玉\n尝试将此玉于台座吧。",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_SunazarashiRace",
   "text": {
    "name": "你在沙海象拉力赛中打破了冠军帕弗宇的记录！作为冠军的证明，获得了玉尝试将此玉于台座吧。",
    "desc": "你要在沙海象拉力赛中挑战世界冠军帕弗宇的记录。冠军记录分30秒大关可不是寻常人能打破的。但是如果不跨越这道大关，通往古代神庙之门就不会敞开。尝试多次挑战吧。",
    "finish": "不败的女王",
    "steps": {},
    "name_label": "QL_SunazarashiRace_Name",
    "desc_label": "QL_SunazarashiRace_Desc",
    "finish_label": "QL_SunazarashiRace_Finish",
    "items": [
     {
      "label": "QL_SunazarashiRace_Finish",
      "text": "不败的女王"
     },
     {
      "label": "QL_SunazarashiRace_Finish",
      "text": "你要在沙海象拉力赛中挑战世界冠军帕弗宇的记录！据说只要创下新记录，通往古代神庙之路就会为你敞开。冠军记录是分30秒并不容易打破。"
     },
     {
      "label": "QL_SunazarashiRace_Desc",
      "text": "你要在沙海象拉力赛中挑战世界冠军帕弗宇的记录。冠军记录分30秒大关可不是寻常人能打破的。但是如果不跨越这道大关，通往古代神庙之门就不会敞开。尝试多次挑战吧。"
     },
     {
      "label": "QL_SunazarashiRace_Name",
      "text": "你在沙海象拉力赛中打破了冠军帕弗宇的记录！作为冠军的证明，获得了玉尝试将此玉于台座吧。"
     },
     {
      "label": null,
      "text": "你在沙海象拉力赛中打破了冠军帕弗宇的记录！作为冠军的证明，获得了玉尝试将此玉于台座吧。"
     },
     {
      "label": null,
      "text": "你在沙海象拉力赛中打破了冠军帕弗宇的记录！作为冠军的证明，获得了玉尝试将此玉于台座吧。"
     },
     {
      "label": null,
      "text": "将宝玉献于台座后，古代神庙出现在你的眼前！沙海象拉力赛似乎随时以挑战争取再创新记录吧！"
     }
    ],
    "source": "QL_SunazarashiRace"
   },
   "labels": [
    "QL_SunazarashiRace_Finish",
    "QL_SunazarashiRace_Finish",
    "QL_SunazarashiRace_Name",
    "QL_SunazarashiRace_Step2",
    "QL_SunazarashiRace_Desc"
   ],
   "flags": {
    "ready": "SunazarashiRace_Ready",
    "activated": "SunazarashiRace_Activated",
    "finish": "SunazarashiRace_Finish",
    "steps": [
     "SunazarashiRace_Step1",
     "SunazarashiRace_Step2",
     "SunazarashiRace_Step3"
    ],
    "aux": [
     "SunazarashiRace_BestTime_L",
     "SunazarashiRace_BestTime_M",
     "SunazarashiRace_BestTime_S",
     "SunazarashiRace_Demo330_1",
     "SunazarashiRace_Dungeon",
     "SunazarashiRace_Field1",
     "SunazarashiRace_First",
     "SunazarashiRace_Gate01",
     "SunazarashiRace_Gate02",
     "SunazarashiRace_Gate03",
     "SunazarashiRace_Gate04",
     "SunazarashiRace_Gate05",
     "SunazarashiRace_Gate06",
     "SunazarashiRace_Gate07",
     "SunazarashiRace_Retry01",
     "SunazarashiRace_SetBall",
     "SunazarashiRace_ThisTime_L",
     "SunazarashiRace_ThisTime_M",
     "SunazarashiRace_ThisTime_S"
    ]
   },
   "source": [
    "QL_SunazarashiRace",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "SunazarashiRace_Ready": 0,
    "SunazarashiRace_Activated": 0,
    "SunazarashiRace_Finish": 0,
    "SunazarashiRace_Step1": 0,
    "SunazarashiRace_Step2": 0,
    "SunazarashiRace_Step3": 0,
    "SunazarashiRace_BestTime_L": 0,
    "SunazarashiRace_BestTime_M": 0,
    "SunazarashiRace_BestTime_S": 0,
    "SunazarashiRace_Demo330_1": 0,
    "SunazarashiRace_Dungeon": 0,
    "SunazarashiRace_Field1": 0,
    "SunazarashiRace_First": 0,
    "SunazarashiRace_Gate01": 0,
    "SunazarashiRace_Gate02": 0,
    "SunazarashiRace_Gate03": 0,
    "SunazarashiRace_Gate04": 0,
    "SunazarashiRace_Gate05": 0,
    "SunazarashiRace_Gate06": 0,
    "SunazarashiRace_Gate07": 0,
    "SunazarashiRace_Retry01": 0,
    "SunazarashiRace_SetBall": 0,
    "SunazarashiRace_ThisTime_L": 0,
    "SunazarashiRace_ThisTime_M": 0,
    "SunazarashiRace_ThisTime_S": 0
   },
   "status_snapshot": "未知",
   "title": "不败的女王",
   "title_source": "QL_SunazarashiRace · text[0] · 标签:QL_SunazarashiRace_Finish"
  },
  {
   "id": "SunazarashiRace_mini",
   "name": null,
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_SunazarashiRace_mini",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_SunazarashiRace_mini"
   },
   "labels": [
    "QL_SunazarashiRace_mini_Step1",
    "QL_SunazarashiRace_mini_Finish",
    "QL_SunazarashiRace_mini_Finish"
   ],
   "flags": {
    "ready": "SunazarashiRace_mini_Ready",
    "activated": null,
    "finish": null,
    "steps": [],
    "aux": [
     "SunazarashiRace_mini_first"
    ]
   },
   "source": [
    "QL_SunazarashiRace_mini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "SunazarashiRace_mini_Ready": 0,
    "SunazarashiRace_mini_first": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "TabantaBridgeMini_Sundial",
   "name": "给大精灵",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_TabantaBridgeMini_Sundial",
   "text": {
    "name": "进献给大精灵",
    "desc": "告诉在塔邦挞大桥驿站等待的陀鲁你已经将卢比进献给大精灵。哪怕是黄粱一梦，也希望和大精灵相见。陀鲁的愿望……会有一天能实现吗？",
    "finish": null,
    "steps": {},
    "name_label": "QL_TabantaBridgeMini_Sundial_Name",
    "desc_label": "QL_TabantaBridgeMini_Sundial_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_TabantaBridgeMini_Sundial_Name",
      "text": "进献给大精灵"
     },
     {
      "label": "QL_TabantaBridgeMini_Sundial_Name",
      "text": "在塔邦挞大桥驿站中遇到的旅行者陀鲁拜托你进献给大精灵500卢比。大精灵之泉位于塔邦挞大桥前方。传闻从高塔上眺望午过后影子所在方位能看见。"
     },
     {
      "label": null,
      "text": "将卢比进献给大精灵，完成了和陀鲁的约定。将此事报告给在塔邦挞大桥驿站中等待的陀鲁吧。"
     },
     {
      "label": "QL_TabantaBridgeMini_Sundial_Desc",
      "text": "告诉在塔邦挞大桥驿站等待的陀鲁你已经将卢比进献给大精灵。哪怕是黄粱一梦，也希望和大精灵相见。陀鲁的愿望……会有一天能实现吗？"
     }
    ],
    "source": "QL_TabantaBridgeMini_Sundial"
   },
   "labels": [
    "QL_TabantaBridgeMini_Sundial_Desc",
    "QL_TabantaBridgeMini_Sundial_Name",
    "QL_TabantaBridgeMini_Sundial_Name"
   ],
   "flags": {
    "ready": "TabantaBridgeMini_Sundial_Ready",
    "activated": "TabantaBridgeMini_Sundial_Activated",
    "finish": "TabantaBridgeMini_Sundial_Finish",
    "steps": [],
    "aux": [
     "TabantaBridgeMini_Sundial_Play"
    ]
   },
   "source": [
    "QL_TabantaBridgeMini_Sundial",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "TabantaBridgeMini_Sundial_Ready": 1,
    "TabantaBridgeMini_Sundial_Activated": 0,
    "TabantaBridgeMini_Sundial_Finish": 0,
    "TabantaBridgeMini_Sundial_Play": 0
   },
   "status_snapshot": "未开始",
   "title": "进献给大精灵",
   "title_source": "QL_TabantaBridgeMini_Sundial · text[0] · 标签:QL_TabantaBridgeMini_Sundial_Name"
  },
  {
   "id": "TestQuest_Takano_01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "TestQuest_Takano_01_Ready",
    "activated": "TestQuest_Takano_01_Activated",
    "finish": "TestQuest_Takano_01_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TestQuest_Takano_01_Ready": 1,
    "TestQuest_Takano_01_Activated": 0,
    "TestQuest_Takano_01_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "TestQuest_Takano_01_TestQuest_Takano_01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [
     "TestQuest_Takano_01_TestQuest_Takano_01_Step01"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TestQuest_Takano_01_TestQuest_Takano_01_Step01": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "TestQuest_kwz001",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "TestQuest_kwz001_Ready",
    "activated": "TestQuest_kwz001_Activated",
    "finish": "TestQuest_kwz001_Finished",
    "steps": [],
    "aux": [
     "TestQuest_kwz001_Extermination"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TestQuest_kwz001_Ready": 1,
    "TestQuest_kwz001_Activated": 0,
    "TestQuest_kwz001_Finished": 0,
    "TestQuest_kwz001_Extermination": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "TestQuest_shimizu01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "TestQuest_shimizu01_Ready",
    "activated": "TestQuest_shimizu01_Activated",
    "finish": "TestQuest_shimizu01_Finish",
    "steps": [
     "TestQuest_shimizu01_Step"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TestQuest_shimizu01_Ready": 1,
    "TestQuest_shimizu01_Activated": 0,
    "TestQuest_shimizu01_Finish": 0,
    "TestQuest_shimizu01_Step": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Imagawa",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Imagawa_Ready",
    "activated": "Test_Imagawa_Activated",
    "finish": "Test_Imagawa_Finish",
    "steps": [
     "Test_Imagawa_STEP1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Imagawa_Ready": 1,
    "Test_Imagawa_Activated": 1,
    "Test_Imagawa_Finish": 1,
    "Test_Imagawa_STEP1": 0
   },
   "status_snapshot": "已完成",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Imagawa_Test_Imagawa",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": null,
    "activated": null,
    "finish": null,
    "steps": [
     "Test_Imagawa_Test_Imagawa_Step1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Imagawa_Test_Imagawa_Step1": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Murakami",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Murakami_Ready",
    "activated": "Test_Murakami_Activated",
    "finish": "Test_Murakami_Finished",
    "steps": [
     "Test_Murakami_Step"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Murakami_Ready": 1,
    "Test_Murakami_Activated": 0,
    "Test_Murakami_Finished": 0,
    "Test_Murakami_Step": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Nakayama",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Nakayama_Ready",
    "activated": "Test_Nakayama_Activated",
    "finish": "Test_Nakayama_Finished",
    "steps": [],
    "aux": [
     "Test_Nakayama_Horn"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Nakayama_Ready": 1,
    "Test_Nakayama_Activated": 0,
    "Test_Nakayama_Finished": 0,
    "Test_Nakayama_Horn": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Nakayama00",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Nakayama00_Ready",
    "activated": "Test_Nakayama00_Activated",
    "finish": "Test_Nakayama00_Finished",
    "steps": [
     "Test_Nakayama00_Step1"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Nakayama00_Ready": 1,
    "Test_Nakayama00_Activated": 0,
    "Test_Nakayama00_Finished": 0,
    "Test_Nakayama00_Step1": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Naoto_Michikai",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Naoto_Michikai_Ready",
    "activated": "Test_Naoto_Michikai_Activated",
    "finish": "Test_Naoto_Michikai_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Naoto_Michikai_Ready": 1,
    "Test_Naoto_Michikai_Activated": 0,
    "Test_Naoto_Michikai_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Tsumita00",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Tsumita00_Ready",
    "activated": "Test_Tsumita00_Activated",
    "finish": "Test_Tsumita00_Finished",
    "steps": [],
    "aux": [
     "Test_Tsumita00_CHK",
     "Test_Tsumita00_Playing"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Tsumita00_Ready": 1,
    "Test_Tsumita00_Activated": 0,
    "Test_Tsumita00_Finished": 0,
    "Test_Tsumita00_CHK": 0,
    "Test_Tsumita00_Playing": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_Tsumita01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_Tsumita01_Ready",
    "activated": "Test_Tsumita01_Activated",
    "finish": "Test_Tsumita01_Finish",
    "steps": [],
    "aux": [
     "Test_Tsumita01_CHK"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_Tsumita01_Ready": 1,
    "Test_Tsumita01_Activated": 0,
    "Test_Tsumita01_Finish": 0,
    "Test_Tsumita01_CHK": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_kkawazoe01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_kkawazoe01_Ready",
    "activated": "Test_kkawazoe01_Activated",
    "finish": "Test_kkawazoe01_Finish",
    "steps": [
     "Test_kkawazoe01_Step01"
    ],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_kkawazoe01_Ready": 1,
    "Test_kkawazoe01_Activated": 0,
    "Test_kkawazoe01_Finish": 0,
    "Test_kkawazoe01_Step01": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_nakayama01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_nakayama01_Ready",
    "activated": "Test_nakayama01_Activated",
    "finish": "Test_nakayama01_Finish",
    "steps": [
     "Test_nakayama01_Step1"
    ],
    "aux": [
     "Test_nakayama01_Horn1",
     "Test_nakayama01_Horn2",
     "Test_nakayama01_Horn3",
     "Test_nakayama01_Horn4"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_nakayama01_Ready": 1,
    "Test_nakayama01_Activated": 0,
    "Test_nakayama01_Finish": 0,
    "Test_nakayama01_Step1": 0,
    "Test_nakayama01_Horn1": 0,
    "Test_nakayama01_Horn2": 0,
    "Test_nakayama01_Horn3": 0,
    "Test_nakayama01_Horn4": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Test_sima",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Test_sima_Ready",
    "activated": "Test_sima_Activated",
    "finish": "Test_sima_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Test_sima_Ready": 1,
    "Test_sima_Activated": 0,
    "Test_sima_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Threebros_giant",
   "name": "泰尔美山的西诺克斯三兄弟\n脖子上挂着球。\n\n将这些球分别献于台座后，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Threebros_giant",
   "text": {
    "name": "住在泰尔美山的西诺克斯三兄弟脖子上挂着球。将这些球分别献于台座后，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "“泰尔美山的巨人们守护的古代球  将指引你前往勇者的试练。”住在附近的人们是否掌握着什么关键信息……",
    "steps": {},
    "name_label": "QL_Threebros_giant_Name",
    "desc_label": null,
    "finish_label": "QL_Threebros_giant_Finish",
    "items": [
     {
      "label": null,
      "text": "巨人三兄弟的秘密"
     },
     {
      "label": "QL_Threebros_giant_Finish",
      "text": "“泰尔美山的巨人们守护的古代球  将指引你前往勇者的试练。”住在附近的人们是否掌握着什么关键信息……"
     },
     {
      "label": "QL_Threebros_giant_Name",
      "text": "住在泰尔美山的西诺克斯三兄弟脖子上挂着球。将这些球分别献于台座后，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_Threebros_giant"
   },
   "labels": [
    "QL_Threebros_giant_Finish",
    "QL_Threebros_giant_Name"
   ],
   "flags": {
    "ready": "Threebros_giant_Ready",
    "activated": "Threebros_giant_Activated",
    "finish": "Threebros_giant_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_Threebros_giant",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Threebros_giant_Ready": 1,
    "Threebros_giant_Activated": 0,
    "Threebros_giant_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "巨人三兄弟的秘密",
   "title_source": "QL_Threebros_giant · text[0] · 无标签"
  },
  {
   "id": "Throw_Out",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "NPC/剧情辅助旗标",
   "category_source": "analysis",
   "category_basis": "analysis: 无 QL 文件、非标准任务三件套结构",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Throw_Out_Ready",
    "activated": null,
    "finish": "Throw_Out_Finish",
    "steps": [],
    "aux": [
     "Throw_Out_Throw_Out"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Throw_Out_Ready": 1,
    "Throw_Out_Finish": 0,
    "Throw_Out_Throw_Out": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Thunder_Sword",
   "name": "代勇者挥引掣电，\n  开启沉睡于巨岩中的勇者的试练。”\n\n通过落雷击碎了巨岩，\n岩石中出现一座古代神庙！",
   "category": "神庙挑战",
   "subcategory": "卡西瓦试练",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_Thunder_Sword",
   "text": {
    "name": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”通过落雷击碎了巨岩，岩石中出现一座古代神庙！",
    "desc": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。",
    "finish": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。",
    "steps": {},
    "name_label": "QL_Thunder_Sword_Name",
    "desc_label": "QL_Thunder_Sword_Finish",
    "finish_label": "QL_Thunder_Sword_Finish",
    "items": [
     {
      "label": null,
      "text": "闪电开启的试练"
     },
     {
      "label": "QL_Thunder_Sword_Finish",
      "text": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”解开卡西瓦告诉你的古诗之谜，找出勇者的试练吧。"
     },
     {
      "label": "QL_Thunder_Sword_Name",
      "text": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”通过落雷击碎了巨岩，岩石中出现一座古代神庙！"
     },
     {
      "label": null,
      "text": "“古代勇者挥引掣电，  开启沉睡于巨岩中的勇者的试练。”被雷击碎的岩石中出现了一座古代神庙！"
     }
    ],
    "source": "QL_Thunder_Sword"
   },
   "labels": [
    "QL_Thunder_Sword_Finish",
    "QL_Thunder_Sword_Desc",
    "QL_Thunder_Sword_Name"
   ],
   "flags": {
    "ready": "Thunder_Sword_Ready",
    "activated": "Thunder_Sword_Activated",
    "finish": "Thunder_Sword_Finish",
    "steps": [
     "Thunder_Sword_Step010"
    ],
    "aux": []
   },
   "source": [
    "QL_Thunder_Sword",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Thunder_Sword_Ready": 1,
    "Thunder_Sword_Activated": 0,
    "Thunder_Sword_Finish": 0,
    "Thunder_Sword_Step010": 0
   },
   "status_snapshot": "未开始",
   "title": "闪电开启的试练",
   "title_source": "QL_Thunder_Sword · text[0] · 无标签"
  },
  {
   "id": "Tincle7Quest",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Tincle7Quest_Ready",
    "activated": "Tincle7Quest_Activated",
    "finish": "Tincle7Quest_Finished",
    "steps": [
     "Tincle7Quest_Step01",
     "Tincle7Quest_Step02",
     "Tincle7Quest_Step03",
     "Tincle7Quest_Step04",
     "Tincle7Quest_Step05"
    ],
    "aux": [
     "Tincle7Quest_Blue",
     "Tincle7Quest_Green",
     "Tincle7Quest_Indigo",
     "Tincle7Quest_Orange",
     "Tincle7Quest_Purple",
     "Tincle7Quest_Red",
     "Tincle7Quest_Yellow"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Tincle7Quest_Ready": 1,
    "Tincle7Quest_Activated": 0,
    "Tincle7Quest_Finished": 0,
    "Tincle7Quest_Step01": 0,
    "Tincle7Quest_Step02": 0,
    "Tincle7Quest_Step03": 0,
    "Tincle7Quest_Step04": 0,
    "Tincle7Quest_Step05": 0,
    "Tincle7Quest_Blue": 0,
    "Tincle7Quest_Green": 0,
    "Tincle7Quest_Indigo": 0,
    "Tincle7Quest_Orange": 0,
    "Tincle7Quest_Purple": 0,
    "Tincle7Quest_Red": 0,
    "Tincle7Quest_Yellow": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "TominagaTest",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "TominagaTest_Ready",
    "activated": "TominagaTest_Activated",
    "finish": "TominagaTest_Finished",
    "steps": [],
    "aux": [
     "TominagaTest_Miss",
     "TominagaTest_Out",
     "TominagaTest_Playing"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TominagaTest_Ready": 0,
    "TominagaTest_Activated": 0,
    "TominagaTest_Finished": 0,
    "TominagaTest_Miss": 0,
    "TominagaTest_Out": 0,
    "TominagaTest_Playing": 0
   },
   "status_snapshot": "未知",
   "title": null,
   "title_source": null
  },
  {
   "id": "TreasureHunt01",
   "name": "奇妙的面具谣传",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt01",
   "text": {
    "name": "你阅读了传闻中的三叶 Ex增刊号Vol.1。据书中记载，有一种寄宿着灵魂的道具，名为克洛格的面具。据说放有克洛格的面具的宝箱藏在惑前进者的森林里的可怕树洞中找到那座森林，寻找宝箱吧！好像也有某种便捷的寻找方法……",
    "desc": "你阅读了传闻中的三叶 Ex增刊号Vol.1。据书中记载，有一种寄宿着灵魂的道具，名为克洛格的面具。据说放有克洛格的面具的宝箱藏在惑前进者的森林里的可怕树洞中找到那座森林，寻找宝箱吧！好像也有某种便捷的寻找方法……",
    "finish": null,
    "steps": {},
    "name_label": "QL_TreasureHunt01_Desc",
    "desc_label": "QL_TreasureHunt01_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_TreasureHunt01_Name",
      "text": "Ex 奇妙的面具谣传"
     },
     {
      "label": null,
      "text": "据说有一种道具名为克洛格的面具，会告诉你隐藏在附近的克洛格。记载有这个传闻的《传闻中的三叶 Ex增刊号》好像摆放在林驿站。"
     },
     {
      "label": "QL_TreasureHunt01_Desc",
      "text": "你阅读了传闻中的三叶 Ex增刊号Vol.1。据书中记载，有一种寄宿着灵魂的道具，名为克洛格的面具。据说放有克洛格的面具的宝箱藏在惑前进者的森林里的可怕树洞中找到那座森林，寻找宝箱吧！好像也有某种便捷的寻找方法……"
     },
     {
      "label": null,
      "text": "在迷失的森林的可怕树洞中找到了洛格的面具据说只要戴着克洛格的面具行走，面具就会告诉你隐藏在附近的克洛格。"
     }
    ],
    "source": "QL_TreasureHunt01"
   },
   "labels": [
    "QL_TreasureHunt01_Desc",
    "QL_TreasureHunt01_Name",
    "QL_TreasureHunt01_Name"
   ],
   "flags": {
    "ready": "TreasureHunt01_Ready",
    "activated": "TreasureHunt01_Activated",
    "finish": "TreasureHunt01_Finish",
    "steps": [
     "TreasureHunt01_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt01",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt01_Ready": 1,
    "TreasureHunt01_Activated": 1,
    "TreasureHunt01_Finish": 0,
    "TreasureHunt01_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 奇妙的面具谣传",
   "title_source": "QL_TreasureHunt01 · text[0] · 标签:QL_TreasureHunt01_Name"
  },
  {
   "id": "TreasureHunt02",
   "name": "读了传闻中的三叶 Ex增刊号Vol.2。\n据书中记载，传闻有一种道具\n可以瞬间返回设置好的地方。\n据说放有道具的宝箱藏在\n卡莱地区东北部的迷宫地下\n\n如果你相信传闻，\n就找出迷宫，寻找宝箱吧！",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt02",
   "text": {
    "name": "你阅读了传闻中的三叶 Ex增刊号Vol.2。据书中记载，传闻有一种道具可以瞬间返回设置好的地方。据说放有道具的宝箱藏在卡莱地区东北部的迷宫地下如果你相信传闻，就找出迷宫，寻找宝箱吧！",
    "desc": "据说有一种道具可以瞬间移动到自己喜欢的地方。记载有这个传闻的《传闻中的三叶 Ex增刊号》好像摆放在阿卡莱驿站。",
    "finish": "据说有一种道具可以瞬间移动到自己喜欢的地方。记载有这个传闻的《传闻中的三叶 Ex增刊号》好像摆放在阿卡莱驿站。",
    "steps": {},
    "name_label": "QL_TreasureHunt02_Name",
    "desc_label": "QL_TreasureHunt02_Finish",
    "finish_label": "QL_TreasureHunt02_Finish",
    "items": [
     {
      "label": null,
      "text": "Ex 瞬间移动？！的谣传"
     },
     {
      "label": "QL_TreasureHunt02_Finish",
      "text": "据说有一种道具可以瞬间移动到自己喜欢的地方。记载有这个传闻的《传闻中的三叶 Ex增刊号》好像摆放在阿卡莱驿站。"
     },
     {
      "label": "QL_TreasureHunt02_Name",
      "text": "你阅读了传闻中的三叶 Ex增刊号Vol.2。据书中记载，传闻有一种道具可以瞬间返回设置好的地方。据说放有道具的宝箱藏在卡莱地区东北部的迷宫地下如果你相信传闻，就找出迷宫，寻找宝箱吧！"
     },
     {
      "label": null,
      "text": "到达洛美岛的迷宫，在隐藏于地下深处的大房间里成功找到了送标注器正如传闻一样，传送标注器能让你瞬间移动到设置好的地方。相信传闻准没错！"
     }
    ],
    "source": "QL_TreasureHunt02"
   },
   "labels": [
    "QL_TreasureHunt02_Finish",
    "QL_TreasureHunt02_Name",
    "QL_TreasureHunt02_Desc"
   ],
   "flags": {
    "ready": "TreasureHunt02_Ready",
    "activated": "TreasureHunt02_Activated",
    "finish": "TreasureHunt02_Finish",
    "steps": [
     "TreasureHunt02_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt02",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt02_Ready": 1,
    "TreasureHunt02_Activated": 1,
    "TreasureHunt02_Finish": 0,
    "TreasureHunt02_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 瞬间移动？！的谣传",
   "title_source": "QL_TreasureHunt02 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt03",
   "name": "读了传闻中的三叶Ex增刊号Vol.3。\n据书中记载，传闻有能激发马匹能力的缰绳，\n以及能瞬间将马呼唤过来的马鞍流传于世。\n据说装有这些道具的宝箱分别藏于\n物聚集的山中樱树下\n及有马之化身在的奇异泉水处\n如果你相信传闻，就去寻找宝箱吧！\n还剩\u0002\u0002:6TreasureHunt03_RemainingBox",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt03",
   "text": {
    "name": "你阅读了传闻中的三叶Ex增刊号Vol.3。据书中记载，传闻有能激发马匹能力的缰绳，以及能瞬间将马呼唤过来的马鞍流传于世。据说装有这些道具的宝箱分别藏于物聚集的山中樱树下及有马之化身在的奇异泉水处如果你相信传闻，就去寻找宝箱吧！还剩:6TreasureHunt03_RemainingBox",
    "desc": "具有能激发马匹能力的缰绳，以及瞬间将马呼唤过来的马鞍，传闻称有这种古代马具的存在。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在原驿站。",
    "finish": "具有能激发马匹能力的缰绳，以及瞬间将马呼唤过来的马鞍，传闻称有这种古代马具的存在。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在原驿站。",
    "steps": {},
    "name_label": "QL_TreasureHunt03_Name",
    "desc_label": "QL_TreasureHunt03_Desc",
    "finish_label": "QL_TreasureHunt03_Desc",
    "items": [
     {
      "label": null,
      "text": "Ex 古代马具的谣传"
     },
     {
      "label": "QL_TreasureHunt03_Desc",
      "text": "具有能激发马匹能力的缰绳，以及瞬间将马呼唤过来的马鞍，传闻称有这种古代马具的存在。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在原驿站。"
     },
     {
      "label": "QL_TreasureHunt03_Name",
      "text": "你阅读了传闻中的三叶Ex增刊号Vol.3。据书中记载，传闻有能激发马匹能力的缰绳，以及能瞬间将马呼唤过来的马鞍流传于世。据说装有这些道具的宝箱分别藏于物聚集的山中樱树下及有马之化身在的奇异泉水处如果你相信传闻，就去寻找宝箱吧！还剩:6TreasureHunt03_RemainingBox"
     },
     {
      "label": null,
      "text": "在萨托利山以及玛胧之泉的宝箱中获得了代马具只要让马装上古代缰绳，就能延长它的袭步时间；如果让马装上古代马鞍，便能通过吹口哨，瞬间将它呼唤过来。相信传闻准没错！"
     }
    ],
    "source": "QL_TreasureHunt03"
   },
   "labels": [
    "QL_TreasureHunt03_Name",
    "QL_TreasureHunt03_Desc",
    "QL_TreasureHunt03_Finish"
   ],
   "flags": {
    "ready": "TreasureHunt03_Ready",
    "activated": "TreasureHunt03_Activated",
    "finish": "TreasureHunt03_Finish",
    "steps": [
     "TreasureHunt03_Step01"
    ],
    "aux": [
     "TreasureHunt03_Open01",
     "TreasureHunt03_Open02",
     "TreasureHunt03_RemainingBox"
    ]
   },
   "source": [
    "QL_TreasureHunt03",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt03_Ready": 1,
    "TreasureHunt03_Activated": 1,
    "TreasureHunt03_Finish": 0,
    "TreasureHunt03_Step01": 0,
    "TreasureHunt03_Open01": 0,
    "TreasureHunt03_Open02": 0,
    "TreasureHunt03_RemainingBox": 2
   },
   "status_snapshot": "进行中",
   "title": "Ex 古代马具的谣传",
   "title_source": "QL_TreasureHunt03 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt04",
   "name": "在海拉鲁城堡中，\n至今仍留有近卫兵的装备。\n\n记载有这个传闻的\n《传闻中的三叶 Ex增刊号》\n似乎摆放在畔驿站。",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt04",
   "text": {
    "name": "据传在海拉鲁城堡中，至今仍留有近卫兵的装备。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在畔驿站。",
    "desc": "你阅读了传闻中的三叶Ex增刊号Vol.4。据书中记载，传闻有一套曾任王族护卫的近卫兵的装备留存至今。据说放有此装备的宝箱藏在海拉鲁城堡内堂附近的通道练所以及殿二楼如果你相信传闻，就去寻找宝箱吧！还剩:6TreasureHunt04_RemainingBox",
    "finish": null,
    "steps": {
     "QL_TreasureHunt04_Step01": "据传在海拉鲁城堡中，至今仍留有近卫兵的装备。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在畔驿站。"
    },
    "name_label": "QL_TreasureHunt04_Step01",
    "desc_label": "QL_TreasureHunt04_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 近卫兵的谣传"
     },
     {
      "label": "QL_TreasureHunt04_Step01",
      "text": "据传在海拉鲁城堡中，至今仍留有近卫兵的装备。记载有这个传闻的《传闻中的三叶 Ex增刊号》似乎摆放在畔驿站。"
     },
     {
      "label": "QL_TreasureHunt04_Desc",
      "text": "你阅读了传闻中的三叶Ex增刊号Vol.4。据书中记载，传闻有一套曾任王族护卫的近卫兵的装备留存至今。据说放有此装备的宝箱藏在海拉鲁城堡内堂附近的通道练所以及殿二楼如果你相信传闻，就去寻找宝箱吧！还剩:6TreasureHunt04_RemainingBox"
     },
     {
      "label": null,
      "text": "从食堂附近的秘密房间、训练所的仓库以及主殿二楼所发现的宝箱中获得了卫兵的装备 相信传闻准没错！"
     }
    ],
    "source": "QL_TreasureHunt04"
   },
   "labels": [
    "QL_TreasureHunt04_Desc",
    "QL_TreasureHunt04_Step01",
    "QL_TreasureHunt04_Name"
   ],
   "flags": {
    "ready": "TreasureHunt04_Ready",
    "activated": "TreasureHunt04_Activated",
    "finish": "TreasureHunt04_Finish",
    "steps": [
     "TreasureHunt04_Step01"
    ],
    "aux": [
     "TreasureHunt04_Open01",
     "TreasureHunt04_Open02",
     "TreasureHunt04_Open03",
     "TreasureHunt04_RemainingBox"
    ]
   },
   "source": [
    "QL_TreasureHunt04",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt04_Ready": 1,
    "TreasureHunt04_Activated": 1,
    "TreasureHunt04_Finish": 0,
    "TreasureHunt04_Step01": 0,
    "TreasureHunt04_Open01": 0,
    "TreasureHunt04_Open02": 0,
    "TreasureHunt04_Open03": 0,
    "TreasureHunt04_RemainingBox": 3
   },
   "status_snapshot": "进行中",
   "title": "Ex 近卫兵的谣传",
   "title_source": "QL_TreasureHunt04 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku01",
   "name": "太古往昔相传之面具，\n   藏在可望见科摩罗池塘的屯兵遗址……\n\n拉姆达的随笔Ex中记载着\n太古面具的藏匿之地。\n望见池塘的屯兵遗址指……？",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku01",
   "text": {
    "name": "“自太古往昔相传之面具，   藏在可望见科摩罗池塘的屯兵遗址……拉姆达的随笔Ex中记载着太古面具的藏匿之地。望见池塘的屯兵遗址指……？",
    "desc": "“自太古往昔相传之面具，   藏在可望见科摩罗池塘的屯兵遗址……拉姆达的随笔Ex中记载着太古面具的藏匿之地。望见池塘的屯兵遗址指……？",
    "finish": null,
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku01_Name",
    "desc_label": "QL_TreasureHunt_touzoku01_Name",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 太古面具"
     },
     {
      "label": null,
      "text": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗秘宝之一名为太古面具。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku01_Name",
      "text": "“自太古往昔相传之面具，   藏在可望见科摩罗池塘的屯兵遗址……拉姆达的随笔Ex中记载着太古面具的藏匿之地。望见池塘的屯兵遗址指……？"
     },
     {
      "label": null,
      "text": "“自太古往昔相传之面具，  埋藏在可望见科摩罗池塘的屯兵遗址……”从埋藏于科摩罗驻军地遗迹的宝箱中获得吉拉的面具"
     }
    ],
    "source": "QL_TreasureHunt_touzoku01"
   },
   "labels": [
    "QL_TreasureHunt_touzoku01_Name",
    "QL_TreasureHunt_touzoku01_Desc",
    "���ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u00024\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u00002\u0000\u0000\u0000�\u0000\u0000\u0001�\u0000E\u0000x\u0000 b�YƏ�v�y�[�\u0000 Y*S�bQw\u0000\u0000mwbɜ�s�e�sͅ�v�g�QwS�S�N�P<v�g\r�p�\f\u0000\n��T\rN:b�YƏ�v�Y'v�Y:S�N�0\u0002\u0000\n��v�"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku01_Ready",
    "activated": "TreasureHunt_touzoku01_Activated",
    "finish": "TreasureHunt_touzoku01_Finish",
    "steps": [
     "TreasureHunt_touzoku01_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt_touzoku01",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku01_Ready": 1,
    "TreasureHunt_touzoku01_Activated": 1,
    "TreasureHunt_touzoku01_Finish": 0,
    "TreasureHunt_touzoku01_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 太古面具",
   "title_source": "QL_TreasureHunt_touzoku01 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku02",
   "name": "黄昏勇者名传后世，暗影国度女王之王冠，\n   神殿遗迹一同沉眠，浸没在希麦加米河中”\n\n拉姆达的随笔Ex中记载着\n黄昏之冠的藏匿之处。\n没在水中的神殿遗迹指……？",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku02",
   "text": {
    "name": "“随黄昏勇者名传后世，暗影国度女王之王冠，   神殿遗迹一同沉眠，浸没在希麦加米河中”拉姆达的随笔Ex中记载着黄昏之冠的藏匿之处。没在水中的神殿遗迹指……？",
    "desc": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为黄昏之冠。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。",
    "finish": null,
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku02_Name",
    "desc_label": "QL_TreasureHunt_touzoku02_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 黄昏之冠"
     },
     {
      "label": "QL_TreasureHunt_touzoku02_Desc",
      "text": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为黄昏之冠。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku02_Name",
      "text": "“随黄昏勇者名传后世，暗影国度女王之王冠，   神殿遗迹一同沉眠，浸没在希麦加米河中”拉姆达的随笔Ex中记载着黄昏之冠的藏匿之处。没在水中的神殿遗迹指……？"
     },
     {
      "label": null,
      "text": "“随黄昏勇者名传后世，暗影国度女王之王冠，  与神殿遗迹一同沉眠，浸没在希麦加米河中。”从埋藏于贤者之神殿遗迹的宝箱中获得了多娜的王冠"
     }
    ],
    "source": "QL_TreasureHunt_touzoku02"
   },
   "labels": [
    "QL_TreasureHunt_touzoku02_Desc",
    "QL_TreasureHunt_touzoku02_Name",
    "QL_TreasureHunt_touzoku02_Step01"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku02_Ready",
    "activated": "TreasureHunt_touzoku02_Activated",
    "finish": "TreasureHunt_touzoku02_Finish",
    "steps": [
     "TreasureHunt_touzoku02_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt_touzoku02",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku02_Ready": 1,
    "TreasureHunt_touzoku02_Activated": 1,
    "TreasureHunt_touzoku02_Finish": 0,
    "TreasureHunt_touzoku02_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 黄昏之冠",
   "title_source": "QL_TreasureHunt_touzoku02 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku03",
   "name": "达的随笔Ex中记载着精灵绿衣的藏匿之处。\n“憧憬精灵的男子绿衣，\n  藏于拉鲁平原古迹\n  一于易繁盛之遗迹\n  一于押罪人之遗迹\n  一于场双双相毗邻，\n  人口聚集市镇之遗迹”\n尚未找到的服饰剩下\u0002\u0002JFTreasureHunt_touzoku03_RemainingBox",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku03",
   "text": {
    "name": "拉姆达的随笔Ex中记载着精灵绿衣的藏匿之处。“憧憬精灵的男子绿衣，  藏于拉鲁平原古迹  一于易繁盛之遗迹  一于押罪人之遗迹  一于场双双相毗邻，  人口聚集市镇之遗迹”尚未找到的服饰剩下JFTreasureHunt_touzoku03_RemainingBox",
    "desc": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为精灵绿衣。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。",
    "finish": null,
    "steps": {
     "QL_TreasureHunt_touzoku03_Step01": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为精灵绿衣。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。"
    },
    "name_label": "QL_TreasureHunt_touzoku03_Name",
    "desc_label": "QL_TreasureHunt_touzoku03_Step01",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 精灵绿衣"
     },
     {
      "label": "QL_TreasureHunt_touzoku03_Step01",
      "text": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为精灵绿衣。据说记载着其藏匿之处的随笔位于拉鲁驿站村废墟某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku03_Name",
      "text": "拉姆达的随笔Ex中记载着精灵绿衣的藏匿之处。“憧憬精灵的男子绿衣，  藏于拉鲁平原古迹  一于易繁盛之遗迹  一于押罪人之遗迹  一于场双双相毗邻，  人口聚集市镇之遗迹”尚未找到的服饰剩下JFTreasureHunt_touzoku03_RemainingBox"
     },
     {
      "label": null,
      "text": "“憧憬精灵的男子绿衣，  藏于海拉鲁平原古迹。  一于贸易繁盛之遗迹，  一于关押罪人之遗迹，  一于牧场双双相毗邻，  人口聚集市镇之遗迹。”分别从埋藏于“交易所遗迹”、“监狱遗迹”以及“麦贝镇遗迹”的宝箱里获得空装备"
     }
    ],
    "source": "QL_TreasureHunt_touzoku03"
   },
   "labels": [
    "QL_TreasureHunt_touzoku03_Name",
    "QL_TreasureHunt_touzoku03_Step01",
    "QL_TreasureHunt_touzoku03_Desc"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku03_Ready",
    "activated": "TreasureHunt_touzoku03_Activated",
    "finish": "TreasureHunt_touzoku03_Finish",
    "steps": [
     "TreasureHunt_touzoku03_Step01"
    ],
    "aux": [
     "TreasureHunt_touzoku03_Open01",
     "TreasureHunt_touzoku03_Open02",
     "TreasureHunt_touzoku03_Open03",
     "TreasureHunt_touzoku03_RemainingBox"
    ]
   },
   "source": [
    "QL_TreasureHunt_touzoku03",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku03_Ready": 1,
    "TreasureHunt_touzoku03_Activated": 1,
    "TreasureHunt_touzoku03_Finish": 0,
    "TreasureHunt_touzoku03_Step01": 0,
    "TreasureHunt_touzoku03_Open01": 0,
    "TreasureHunt_touzoku03_Open02": 0,
    "TreasureHunt_touzoku03_Open03": 0,
    "TreasureHunt_touzoku03_RemainingBox": 3
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 精灵绿衣",
   "title_source": "QL_TreasureHunt_touzoku03 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku04",
   "name": "达的随笔Ex中记载着梦幻铠甲的藏匿之处。\n“勇者畏惧之怪物盔甲，\n  藏于拉鲁平原古迹\n  一于技战斗之遗迹\n  一于赏近卫之骑士，\n  行表彰之祭奠场遗迹\n  一于拉鲁屯兵遗迹”\n尚未找到的服饰剩下\u0002\u0002JFTreasureHunt_touzoku04_RemainingBox",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku04",
   "text": {
    "name": "拉姆达的随笔Ex中记载着梦幻铠甲的藏匿之处。“勇者畏惧之怪物盔甲，  藏于拉鲁平原古迹  一于技战斗之遗迹  一于赏近卫之骑士，  行表彰之祭奠场遗迹  一于拉鲁屯兵遗迹”尚未找到的服饰剩下JFTreasureHunt_touzoku04_RemainingBox",
    "desc": "Ex 拉姆达的秘宝 梦幻铠甲",
    "finish": null,
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku04_Desc",
    "desc_label": "QL_TreasureHunt_touzoku04_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_TreasureHunt_touzoku04_Desc",
      "text": "Ex 拉姆达的秘宝 梦幻铠甲"
     },
     {
      "label": null,
      "text": "海拉鲁王族珍藏的极具历史价值的服饰，被名为拉姆达的大盗夺去了。被盗珍宝之一名为梦幻铠甲。据说记载着藏匿之处的随笔，位于拉鲁驿站村废墟某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku04_Desc",
      "text": "拉姆达的随笔Ex中记载着梦幻铠甲的藏匿之处。“勇者畏惧之怪物盔甲，  藏于拉鲁平原古迹  一于技战斗之遗迹  一于赏近卫之骑士，  行表彰之祭奠场遗迹  一于拉鲁屯兵遗迹”尚未找到的服饰剩下JFTreasureHunt_touzoku04_RemainingBox"
     },
     {
      "label": null,
      "text": "“勇者畏惧之怪物盔甲，  藏于海拉鲁平原古迹。  一于竞技战斗之遗迹，  一于赞赏近卫之骑士，  行表彰之祭奠场遗迹，  一于海拉鲁屯兵遗迹。”分别从埋藏于“竞技场遗迹”、“祭奠场遗迹”、“海拉鲁驻军地遗迹”的宝箱中获得影装备"
     }
    ],
    "source": "QL_TreasureHunt_touzoku04"
   },
   "labels": [
    "QL_TreasureHunt_touzoku04_Desc",
    "QL_TreasureHunt_touzoku04_Desc",
    "QL_TreasureHunt_touzoku04_Name"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku04_Ready",
    "activated": "TreasureHunt_touzoku04_Activated",
    "finish": "TreasureHunt_touzoku04_Finish",
    "steps": [
     "TreasureHunt_touzoku04_Step01"
    ],
    "aux": [
     "TreasureHunt_touzoku04_Open01",
     "TreasureHunt_touzoku04_Open02",
     "TreasureHunt_touzoku04_Open03",
     "TreasureHunt_touzoku04_RemainingBox"
    ]
   },
   "source": [
    "QL_TreasureHunt_touzoku04",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku04_Ready": 1,
    "TreasureHunt_touzoku04_Activated": 1,
    "TreasureHunt_touzoku04_Finish": 0,
    "TreasureHunt_touzoku04_Step01": 0,
    "TreasureHunt_touzoku04_Open01": 0,
    "TreasureHunt_touzoku04_Open02": 0,
    "TreasureHunt_touzoku04_Open03": 0,
    "TreasureHunt_touzoku04_RemainingBox": 3
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 梦幻铠甲",
   "title_source": "QL_TreasureHunt_touzoku04 · text[0] · 标签:QL_TreasureHunt_touzoku04_Desc"
  },
  {
   "id": "TreasureHunt_touzoku05",
   "name": "鲁王族珍藏的极具历史价值的服饰\n被名为拉姆达的大盗夺去了。\n被盗秘宝之一名为行商头巾。\n\n据说记载着其藏匿之处的随笔\n位于德亚村遗迹某处。",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku05",
   "text": {
    "name": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为行商头巾。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。",
    "desc": "“自异世界造访之旅行商人头巾，  于卡兹溜湖 噬勇气之泉的龙之右手……拉姆达的随笔Ex2中记载着行商头巾的藏匿之地。兹溜湖 噬勇气之泉的龙之右手指……？",
    "finish": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为行商头巾。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。",
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku05_Name",
    "desc_label": "QL_TreasureHunt_touzoku05_Desc",
    "finish_label": "QL_TreasureHunt_touzoku05_Name",
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 行商头巾"
     },
     {
      "label": "QL_TreasureHunt_touzoku05_Name",
      "text": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为行商头巾。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku05_Desc",
      "text": "“自异世界造访之旅行商人头巾，  于卡兹溜湖 噬勇气之泉的龙之右手……拉姆达的随笔Ex2中记载着行商头巾的藏匿之地。兹溜湖 噬勇气之泉的龙之右手指……？"
     },
     {
      "label": null,
      "text": "“自异世界造访之旅行商人头巾，  藏于卡兹溜湖，噬勇气之泉的龙之右手……”在卡兹溜湖，从藏匿于龙之遗迹右手的宝箱中，取得了维奥的头巾"
     }
    ],
    "source": "QL_TreasureHunt_touzoku05"
   },
   "labels": [
    "QL_TreasureHunt_touzoku05_Desc",
    "QL_TreasureHunt_touzoku05_Name",
    "QL_TreasureHunt_touzoku05_Finish"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku05_Ready",
    "activated": "TreasureHunt_touzoku05_Activated",
    "finish": "TreasureHunt_touzoku05_Finish",
    "steps": [
     "TreasureHunt_touzoku05_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt_touzoku05",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku05_Ready": 1,
    "TreasureHunt_touzoku05_Activated": 1,
    "TreasureHunt_touzoku05_Finish": 0,
    "TreasureHunt_touzoku05_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 行商头巾",
   "title_source": "QL_TreasureHunt_touzoku05 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku06",
   "name": "鲁王族珍藏的极具历史价值的服饰\n被名为拉姆达的大盗夺去了。\n被盗秘宝之一名为风之青衣。\n\n据说记载着其藏匿之处的随笔\n位于德亚村遗迹某处。",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku06",
   "text": {
    "name": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为风之青衣。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。",
    "desc": "“遍游大海之纵风勇者青衣，  藏于恩河昔日起源之地”拉姆达的随笔Ex2中记载着风之青衣的藏匿之地。恩河的起源之地指……？",
    "finish": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为风之青衣。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。",
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku06_Name",
    "desc_label": "QL_TreasureHunt_touzoku06_Desc",
    "finish_label": "QL_TreasureHunt_touzoku06_Name",
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 风之青衣"
     },
     {
      "label": "QL_TreasureHunt_touzoku06_Name",
      "text": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为风之青衣。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku06_Desc",
      "text": "“遍游大海之纵风勇者青衣，  藏于恩河昔日起源之地”拉姆达的随笔Ex2中记载着风之青衣的藏匿之地。恩河的起源之地指……？"
     },
     {
      "label": null,
      "text": "“遍游大海之纵风勇者青衣，  藏于爱恩河昔日起源之地。”从藏匿于珊湖的宝箱中获得了色大虾衬衫"
     }
    ],
    "source": "QL_TreasureHunt_touzoku06"
   },
   "labels": [
    "QL_TreasureHunt_touzoku06_Name",
    "QL_TreasureHunt_touzoku06_Finish",
    "QL_TreasureHunt_touzoku06_Desc"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku06_Ready",
    "activated": "TreasureHunt_touzoku06_Activated",
    "finish": "TreasureHunt_touzoku06_Finish",
    "steps": [
     "TreasureHunt_touzoku06_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt_touzoku06",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku06_Ready": 1,
    "TreasureHunt_touzoku06_Activated": 1,
    "TreasureHunt_touzoku06_Finish": 0,
    "TreasureHunt_touzoku06_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 风之青衣",
   "title_source": "QL_TreasureHunt_touzoku06 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku07",
   "name": "称为影王之人所戴头盔，\n  于双子山南枯木谷之沼”\n\n拉姆达的随笔Ex2中记载着\n僭王头盔的藏匿之地。\n于双子山南枯木谷之沼指……？",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku07",
   "text": {
    "name": "“僭称为影王之人所戴头盔，  于双子山南枯木谷之沼”拉姆达的随笔Ex2中记载着僭王头盔的藏匿之地。于双子山南枯木谷之沼指……？",
    "desc": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为僭王头盔。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。",
    "finish": null,
    "steps": {
     "QL_TreasureHunt_touzoku07_Step01": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为僭王头盔。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。"
    },
    "name_label": "QL_TreasureHunt_touzoku07_Name",
    "desc_label": "QL_TreasureHunt_touzoku07_Step01",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 僭王头盔"
     },
     {
      "label": "QL_TreasureHunt_touzoku07_Step01",
      "text": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为僭王头盔。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku07_Name",
      "text": "“僭称为影王之人所戴头盔，  于双子山南枯木谷之沼”拉姆达的随笔Ex2中记载着僭王头盔的藏匿之地。于双子山南枯木谷之沼指……？"
     },
     {
      "label": null,
      "text": "“僭称为影王之人所戴头盔，  潜于双子山南枯木谷之沼。”从藏匿于比托谷的宝箱中获得了特头盔"
     }
    ],
    "source": "QL_TreasureHunt_touzoku07"
   },
   "labels": [
    "QL_TreasureHunt_touzoku07_Step01",
    "QL_TreasureHunt_touzoku07_Desc",
    "QL_TreasureHunt_touzoku07_Name"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku07_Ready",
    "activated": "TreasureHunt_touzoku07_Activated",
    "finish": "TreasureHunt_touzoku07_Finish",
    "steps": [
     "TreasureHunt_touzoku07_Step01"
    ],
    "aux": []
   },
   "source": [
    "QL_TreasureHunt_touzoku07",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku07_Ready": 1,
    "TreasureHunt_touzoku07_Activated": 1,
    "TreasureHunt_touzoku07_Finish": 0,
    "TreasureHunt_touzoku07_Step01": 0
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 僭王头盔",
   "title_source": "QL_TreasureHunt_touzoku07 · text[0] · 无标签"
  },
  {
   "id": "TreasureHunt_touzoku08",
   "name": "大魔王之恶灵甲胄，藏于罗尼树海中。\n  一于柔莉亚湖以北，相连之第三道瀑布底\n  一于柔莉亚河河畔，为小瀑布所包夹之桥\n  一于贝拉树海之中，如今已然碎裂之石鸟”\n\n拉姆达的随笔Ex2中记载着恶灵铠甲的藏匿之地。\n未发现的服装还剩\u0002\u0002JFTreasureHunt_touzoku08_RemainingBox",
   "category": "DLC / 剑之试炼",
   "subcategory": "EX 宝物",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本明确提到 Ex 增刊/随笔 Ex（DLC 宝物）",
   "message_file": "QL_TreasureHunt_touzoku08",
   "text": {
    "name": "“拟大魔王之恶灵甲胄，藏于罗尼树海中。  一于柔莉亚湖以北，相连之第三道瀑布底  一于柔莉亚河河畔，为小瀑布所包夹之桥  一于贝拉树海之中，如今已然碎裂之石鸟”拉姆达的随笔Ex2中记载着恶灵铠甲的藏匿之地。未发现的服装还剩JFTreasureHunt_touzoku08_RemainingBox",
    "desc": "“拟大魔王之恶灵甲胄，藏于罗尼树海中。  一于柔莉亚湖以北，相连之第三道瀑布底  一于柔莉亚河河畔，为小瀑布所包夹之桥  一于贝拉树海之中，如今已然碎裂之石鸟”拉姆达的随笔Ex2中记载着恶灵铠甲的藏匿之地。未发现的服装还剩JFTreasureHunt_touzoku08_RemainingBox",
    "finish": null,
    "steps": {},
    "name_label": "QL_TreasureHunt_touzoku08_Desc",
    "desc_label": "QL_TreasureHunt_touzoku08_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "Ex 拉姆达的秘宝 恶灵铠甲"
     },
     {
      "label": null,
      "text": "海拉鲁王族珍藏的极具历史价值的服饰被名为拉姆达的大盗夺去了。被盗秘宝之一名为恶灵铠甲。据说记载着其藏匿之处的随笔位于德亚村遗迹某处。"
     },
     {
      "label": "QL_TreasureHunt_touzoku08_Desc",
      "text": "“拟大魔王之恶灵甲胄，藏于罗尼树海中。  一于柔莉亚湖以北，相连之第三道瀑布底  一于柔莉亚河河畔，为小瀑布所包夹之桥  一于贝拉树海之中，如今已然碎裂之石鸟”拉姆达的随笔Ex2中记载着恶灵铠甲的藏匿之地。未发现的服装还剩JFTreasureHunt_touzoku08_RemainingBox"
     },
     {
      "label": null,
      "text": "“拟大魔王之恶灵甲胄，藏于费罗尼树海之中。  一于花柔莉亚湖以北，相连之第三道瀑布底。  一于花柔莉亚河河畔，为小瀑布所包夹之桥。  一于利贝拉树海之中，如今已然碎裂之石鸟。”分别从埋藏于“路特斯湖”、“撒戎桥”以及“利贝拉树海”的宝箱中获得了影盖侬装备"
     }
    ],
    "source": "QL_TreasureHunt_touzoku08"
   },
   "labels": [
    "QL_TreasureHunt_touzoku08_Desc",
    "QL_TreasureHunt_touzoku08_Name",
    "���ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0003�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u00002\u0000\u0000\u0000�\u0000\u0000\u0002�\u0000E\u0000x\u0000 b�YƏ�v�y�[�\u0000 `vpu��u2\u0000\u0000mwbɜ�s�e�sͅ�v�g�QwS�S�N�P<v�g\r�p\u0000\n��T\rN:b�YƏ�v�Y'v�Y:S�N�0\u0002\u0000\n��v�y�"
   ],
   "flags": {
    "ready": "TreasureHunt_touzoku08_Ready",
    "activated": "TreasureHunt_touzoku08_Activated",
    "finish": "TreasureHunt_touzoku08_Finish",
    "steps": [
     "TreasureHunt_touzoku08_Step01"
    ],
    "aux": [
     "TreasureHunt_touzoku08_Open01",
     "TreasureHunt_touzoku08_Open02",
     "TreasureHunt_touzoku08_Open03",
     "TreasureHunt_touzoku08_RemainingBox"
    ]
   },
   "source": [
    "QL_TreasureHunt_touzoku08",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TreasureHunt_touzoku08_Ready": 1,
    "TreasureHunt_touzoku08_Activated": 1,
    "TreasureHunt_touzoku08_Finish": 0,
    "TreasureHunt_touzoku08_Step01": 0,
    "TreasureHunt_touzoku08_Open01": 0,
    "TreasureHunt_touzoku08_Open02": 0,
    "TreasureHunt_touzoku08_Open03": 0,
    "TreasureHunt_touzoku08_RemainingBox": 3
   },
   "status_snapshot": "进行中",
   "title": "Ex 拉姆达的秘宝 恶灵铠甲",
   "title_source": "QL_TreasureHunt_touzoku08 · text[0] · 无标签"
  },
  {
   "id": "TurnTestQuest",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "TurnTestQuest_Ready",
    "activated": "TurnTestQuest_Activated",
    "finish": "TurnTestQuest_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "TurnTestQuest_Ready": 1,
    "TurnTestQuest_Activated": 0,
    "TurnTestQuest_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "TutorialDungeon",
   "name": null,
   "category": "主线任务",
   "subcategory": "初始台地",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_TutorialDungeon",
   "text": {
    "name": null,
    "desc": null,
    "finish": null,
    "steps": {},
    "name_label": null,
    "desc_label": null,
    "finish_label": null,
    "items": [],
    "source": "QL_TutorialDungeon"
   },
   "labels": [
    "QL_TutorialDungeon_GuardJustWarning",
    "QL_TutorialDungeon_GuardJust",
    "QL_TutorialDungeon_GuardJust",
    "QL_TutorialDungeon_SideStep",
    "QL_TutorialDungeon_SideStepWarning",
    "QL_TutorialDungeon_BackStepWarning",
    "QL_TutorialDungeon_BackStep"
   ],
   "flags": {
    "ready": "TutorialDungeon_Ready",
    "activated": null,
    "finish": "TutorialDungeon_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_TutorialDungeon",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "TutorialDungeon_Ready": 1,
    "TutorialDungeon_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "TwoWheels",
   "name": "箭穿两环，\n　勇者的试练方现形。”\n\n用箭射穿有孔的两块岩石后，\n古代神庙出现在你的眼前！",
   "category": "神庙挑战",
   "subcategory": "各地区神庙挑战",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本以“古代神庙/勇者的试练”收束，为神庙挑战的典型结构",
   "message_file": "QL_TwoWheels",
   "text": {
    "name": "“一箭穿两环，　勇者的试练方现形。”用箭射穿有孔的两块岩石后，古代神庙出现在你的眼前！",
    "desc": null,
    "finish": "卡西瓦告诉你一首古诗：“一箭穿两环，  勇者的试练方现形。”只要按诗中所言行事，好像就可以找到古代神庙。",
    "steps": {},
    "name_label": "QL_TwoWheels_Name",
    "desc_label": null,
    "finish_label": "QL_TwoWheels_Finish",
    "items": [
     {
      "label": null,
      "text": "两个环"
     },
     {
      "label": "QL_TwoWheels_Finish",
      "text": "卡西瓦告诉你一首古诗：“一箭穿两环，  勇者的试练方现形。”只要按诗中所言行事，好像就可以找到古代神庙。"
     },
     {
      "label": "QL_TwoWheels_Name",
      "text": "“一箭穿两环，　勇者的试练方现形。”用箭射穿有孔的两块岩石后，古代神庙出现在你的眼前！"
     }
    ],
    "source": "QL_TwoWheels"
   },
   "labels": [
    "QL_TwoWheels_Finish",
    "QL_TwoWheels_Name"
   ],
   "flags": {
    "ready": "TwoWheels_Ready",
    "activated": "TwoWheels_Activated",
    "finish": "TwoWheels_Finish",
    "steps": [],
    "aux": [
     "TwoWheels_Dungeon"
    ]
   },
   "source": [
    "QL_TwoWheels",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "TwoWheels_Ready": 1,
    "TwoWheels_Activated": 0,
    "TwoWheels_Finish": 0,
    "TwoWheels_Dungeon": 0
   },
   "status_snapshot": "未开始",
   "title": "两个环",
   "title_source": "QL_TwoWheels · text[0] · 无标签"
  },
  {
   "id": "UMiiMini_GiveCake",
   "name": "鲁丽送去了怪物蛋糕！\n\n只吃蛋糕的女儿哈妮，\n好像顺利地吃下了怪物蛋糕。\n\n哈妮现在怎么样了呢？\n和鲁丽话吧！",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UMiiMini_GiveCake",
   "text": {
    "name": "为哈鲁丽送去了怪物蛋糕！只吃蛋糕的女儿哈妮，好像顺利地吃下了怪物蛋糕。哈妮现在怎么样了呢？和鲁丽话吧！",
    "desc": "儿女不知父母心",
    "finish": null,
    "steps": {},
    "name_label": "QL_UMiiMini_GiveCake_Desc",
    "desc_label": "QL_UMiiMini_GiveCake_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_UMiiMini_GiveCake_Desc",
      "text": "儿女不知父母心"
     },
     {
      "label": null,
      "text": "你不小心偷听到哈吉和哈鲁丽夫妇的吵架……哈鲁丽拿只吃蛋糕的女儿哈妮没有办法。只要女儿能恢复健康，即使要将灵魂卖给物，她好像也打算获取各种各样的蛋糕。哈鲁丽从未见过的糕到底要去哪里才能找到呢？"
     },
     {
      "label": "QL_UMiiMini_GiveCake_Desc",
      "text": "为哈鲁丽送去了怪物蛋糕！只吃蛋糕的女儿哈妮，好像顺利地吃下了怪物蛋糕。哈妮现在怎么样了呢？和鲁丽话吧！"
     },
     {
      "label": null,
      "text": "为哈鲁丽送去了怪物蛋糕！然后获得了很多谢礼！哈鲁丽的女儿哈妮恢复了往日的健朗，好像能在外面玩耍了。"
     }
    ],
    "source": "QL_UMiiMini_GiveCake"
   },
   "labels": [
    "QL_UMiiMini_GiveCake_Desc",
    "QL_UMiiMini_GiveCake_Desc",
    "QL_UMiiMini_GiveCake_Name"
   ],
   "flags": {
    "ready": "UMiiMini_GiveCake_Ready",
    "activated": "UMiiMini_GiveCake_Activated",
    "finish": "UMiiMini_GiveCake_Finish",
    "steps": [],
    "aux": [
     "UMiiMini_GiveCake_Give"
    ]
   },
   "source": [
    "QL_UMiiMini_GiveCake",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UMiiMini_GiveCake_Ready": 1,
    "UMiiMini_GiveCake_Activated": 0,
    "UMiiMini_GiveCake_Finish": 0,
    "UMiiMini_GiveCake_Give": 0
   },
   "status_snapshot": "未开始",
   "title": "儿女不知父母心",
   "title_source": "QL_UMiiMini_GiveCake · text[0] · 标签:QL_UMiiMini_GiveCake_Desc"
  },
  {
   "id": "UMiiMini_MakeVillage",
   "name": "达和普彭达顺利抵达一始村！\n格莱达着手碎石的工作，\n普彭达则开始贩卖碎石时采集到的矿石！\n\n据松达所说，\n他还想在村里建更多的房子，\n但是材料仍远远不够。\n拿0捆木柴捆他吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UMiiMini_MakeVillage",
   "text": {
    "name": "格莱达和普彭达顺利抵达一始村！格莱达着手碎石的工作，普彭达则开始贩卖碎石时采集到的矿石！据松达所说，他还想在村里建更多的房子，但是材料仍远远不够。拿0捆木柴捆他吧。",
    "desc": "欣欣向荣吧！樱达建筑店",
    "finish": null,
    "steps": {
     "QL_UMiiMini_MakeVillage_Invite04": "樱达建筑店的资深木匠松达为了扩展业务而前往卡莱地区阿卡莱地区在哈特诺村以北很远的地方。途经阿卡莱地区附近时，不妨顺道去拜访一下达。",
     "QL_UMiiMini_MakeVillage_Wood01": "在阿卡莱地区遇到了松达！他为了扩展樱达建筑店的业务好像要在这片土地上建造村庄。起名为一始村倒是没有问题，但是要建村子还真是什么都缺。先拿0捆木柴捆他吧。"
    },
    "name_label": "QL_UMiiMini_MakeVillage_Name",
    "desc_label": "QL_UMiiMini_MakeVillage_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_UMiiMini_MakeVillage_Desc",
      "text": "欣欣向荣吧！樱达建筑店"
     },
     {
      "label": "QL_UMiiMini_MakeVillage_Invite04",
      "text": "樱达建筑店的资深木匠松达为了扩展业务而前往卡莱地区阿卡莱地区在哈特诺村以北很远的地方。途经阿卡莱地区附近时，不妨顺道去拜访一下达。"
     },
     {
      "label": "QL_UMiiMini_MakeVillage_Wood01",
      "text": "在阿卡莱地区遇到了松达！他为了扩展樱达建筑店的业务好像要在这片土地上建造村庄。起名为一始村倒是没有问题，但是要建村子还真是什么都缺。先拿0捆木柴捆他吧。"
     },
     {
      "label": "QL_UMiiMini_MakeVillage_Desc",
      "text": "为松达送去了木柴捆！这次他想击碎散落在一始村的岩石。希望你帮忙找一位腕力大的隆族按照樱达建筑店的入伙条件，向字以“达”结尾的鼓隆族人话吧。"
     },
     {
      "label": null,
      "text": "鼓隆族的格莱达搬去一始村了！他的弟弟普彭达好像也一起跟来了。已经顺利抵达了吗？去看看他们的情况，顺便将至今为止发生的事报告给达。"
     },
     {
      "label": "QL_UMiiMini_MakeVillage_Name",
      "text": "格莱达和普彭达顺利抵达一始村！格莱达着手碎石的工作，普彭达则开始贩卖碎石时采集到的矿石！据松达所说，他还想在村里建更多的房子，但是材料仍远远不够。拿0捆木柴捆他吧。"
     },
     {
      "label": null,
      "text": "为松达送去了木柴捆！松达说，接下来希望你帮忙找一位擅长裁缝的鲁德族他修补工作服。按照樱达建筑店的入伙条件，向字以“达”结尾的格鲁德族人话吧。"
     },
     {
      "label": null,
      "text": "格鲁德族的帕伍达搬去一始村了！已经顺利抵达了吗？去看看她的情况，顺便将至今为止发生的事报告给达。"
     },
     {
      "label": null,
      "text": "帕伍达顺利抵达一始村，好像在为松达修补工作服。而且帕伍达活用自身的技术，开始经营防具店！据松达所说，他还想在村里建更多的房子，但是材料仍远远不够。拿0捆木柴捆他吧。"
     },
     {
      "label": null,
      "text": "为松达送去了木柴捆！松达说想在村子里开杂货店，希望你帮忙找一位懂得开店经商的特族按照樱达建筑店的入伙条件，向字以“达”结尾的利特族人话吧。"
     },
     {
      "label": null,
      "text": "利特族的培达搬去一始村了！已经顺利抵达了吗？去看看他的情况，顺便将至今为止发生的事报告给达。"
     },
     {
      "label": null,
      "text": "培达顺利抵达一始村，并活用老家的开店经验，开始经营杂货店！松达说，他还想在村里建更多的房子，但是材料仍远远不够。拿0捆木柴捆他吧。"
     },
     {
      "label": null,
      "text": "为松达送去了木柴捆！没想到松达和帕伍达订婚了！他们想举办婚礼，希望你帮忙找一位可以当神父的拉族按照樱达建筑店的入伙条件，向字以“达”结尾的卓拉族人话吧。"
     },
     {
      "label": null,
      "text": "卓拉族的卡颇达出发前往一始村了！已经顺利抵达了吗？去看看他的情况，顺便将至今为止发生的事报告给达。"
     },
     {
      "label": null,
      "text": "卓拉族的卡颇达顺利抵达一始村！曾当过神父的卡颇达现在要开始为婚礼做准备。松达想邀请樱达和桂达来参加婚礼。代替忙于筹备婚礼的松达去邀请特诺村的樱达和桂达。"
     },
     {
      "label": null,
      "text": "樱达和桂达顺利抵达一始村！万事俱备就等着在一始村举办松达和帕伍达的婚礼了。将至今为止发生的事报告给达去参加婚礼吧。"
     },
     {
      "label": null,
      "text": "松达和帕伍达的婚礼顺利结束了！虽然卡颇达宣读的誓词有些古怪，婚礼还是相安无事地结束了。为了祝福已立誓终身偕老的两人，和达话吧。"
     },
     {
      "label": null,
      "text": "松达和帕伍达的婚礼结束，一始村也变得越发繁荣。出于对之前帮助的感谢，松达送给你很多宝石。这些宝石好像是开拓一始村时挖到的。愿两位新人幸福美满，白头到老。"
     }
    ],
    "source": "QL_UMiiMini_MakeVillage"
   },
   "labels": [
    "QL_UMiiMini_MakeVillage_Desc",
    "QL_UMiiMini_MakeVillage_Desc",
    "QL_UMiiMini_MakeVillage_Desc",
    "QL_UMiiMini_MakeVillage_Wood01",
    "QL_UMiiMini_MakeVillage_Invite01",
    "QL_UMiiMini_MakeVillage_Name",
    "QL_UMiiMini_MakeVillage_Invite03",
    "QL_UMiiMini_MakeVillage_Invite04",
    "QL_UMiiMini_MakeVillage_Invite05",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\f(\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0012\u0000\u0000\u0000L\u0000\u0000\u0000d\u0000\u0000\u0001$\u0000\u0000\u0001�\u0000\u0000\u0002�\u0000\u0000\u0003R\u0000\u0000\u0004\u001e\u0000\u0000\u0004�\u0000\u0000\u0005l\u0000\u0000\u0006:\u0000\u0000\u0007\u0002\u0000\u0000\u0007�\u0000\u0000\b.\u0000\u0000\t\u0004\u0000\u0000\t�\u0000\u0000\nH\u0000\u0000\n�\u0000\u0000\u000b�k#k#T\u0011�cT'�\u0001j1��^�{Q^�\u0000\u0000j1��^�{Q^�v��D",
    "���������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0012\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\f(\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0012\u0000\u0000\u0000L\u0000\u0000\u0000d\u0000\u0000\u0001$\u0000\u0000\u0001�\u0000\u0000\u0002�\u0000\u0000\u0003R\u0000\u0000\u0004\u001e\u0000\u0000\u0004�\u0000\u0000\u0005l\u0000\u0000\u0006:\u0000\u0000\u0007\u0002\u0000\u0000\u0007�\u0000\u0000\b.\u0000\u0000\t\u0004\u0000\u0000\t�\u0000\u0000\nH\u0000\u0000\n�\u0000\u0000\u000b�k#k#T\u0011�cT'�\u0001j1��^�{Q^�\u0000\u0000j1��^�{Q^�v��D"
   ],
   "flags": {
    "ready": "UMiiMini_MakeVillage_Ready",
    "activated": "UMiiMini_MakeVillage_Activated",
    "finish": "UMiiMini_MakeVillage_Finish",
    "steps": [],
    "aux": [
     "UMiiMini_MakeVillage_Bell",
     "UMiiMini_MakeVillage_Invite01",
     "UMiiMini_MakeVillage_Invite02",
     "UMiiMini_MakeVillage_Invite03",
     "UMiiMini_MakeVillage_Invite04",
     "UMiiMini_MakeVillage_Invite05",
     "UMiiMini_MakeVillage_LookFor01",
     "UMiiMini_MakeVillage_LookFor02",
     "UMiiMini_MakeVillage_LookFor03",
     "UMiiMini_MakeVillage_LookFor04",
     "UMiiMini_MakeVillage_LookFor05",
     "UMiiMini_MakeVillage_Marry",
     "UMiiMini_MakeVillage_Wood01",
     "UMiiMini_MakeVillage_Wood02",
     "UMiiMini_MakeVillage_Wood03",
     "UMiiMini_MakeVillage_Wood04"
    ]
   },
   "source": [
    "QL_UMiiMini_MakeVillage",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UMiiMini_MakeVillage_Ready": 1,
    "UMiiMini_MakeVillage_Activated": 0,
    "UMiiMini_MakeVillage_Finish": 0,
    "UMiiMini_MakeVillage_Bell": 0,
    "UMiiMini_MakeVillage_Invite01": 0,
    "UMiiMini_MakeVillage_Invite02": 0,
    "UMiiMini_MakeVillage_Invite03": 0,
    "UMiiMini_MakeVillage_Invite04": 0,
    "UMiiMini_MakeVillage_Invite05": 0,
    "UMiiMini_MakeVillage_LookFor01": 0,
    "UMiiMini_MakeVillage_LookFor02": 0,
    "UMiiMini_MakeVillage_LookFor03": 0,
    "UMiiMini_MakeVillage_LookFor04": 0,
    "UMiiMini_MakeVillage_LookFor05": 0,
    "UMiiMini_MakeVillage_Marry": 0,
    "UMiiMini_MakeVillage_Wood01": 0,
    "UMiiMini_MakeVillage_Wood02": 0,
    "UMiiMini_MakeVillage_Wood03": 0,
    "UMiiMini_MakeVillage_Wood04": 0
   },
   "status_snapshot": "未开始",
   "title": "欣欣向荣吧！樱达建筑店",
   "title_source": "QL_UMiiMini_MakeVillage · text[0] · 标签:QL_UMiiMini_MakeVillage_Desc"
  },
  {
   "id": "UMiiMini_RichmansHobby",
   "name": "倒了塔林湿地的两台守护者\n并将此事报告给了哈吉。\n\n拿到的报酬比订金还少。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UMiiMini_RichmansHobby",
   "text": {
    "name": "你打倒了塔林湿地的两台守护者并将此事报告给了哈吉。拿到的报酬比订金还少。",
    "desc": null,
    "finish": "一始村的哈吉请你去打倒徘徊在林湿地台守护者再回去向他报告。吃人嘴软拿人手短，既然已经收下订金只能放手干了。",
    "steps": {},
    "name_label": "QL_UMiiMini_RichmansHobby_Name",
    "desc_label": null,
    "finish_label": "QL_UMiiMini_RichmansHobby_Finish",
    "items": [
     {
      "label": null,
      "text": "暴发户的玩法"
     },
     {
      "label": "QL_UMiiMini_RichmansHobby_Finish",
      "text": "一始村的哈吉请你去打倒徘徊在林湿地台守护者再回去向他报告。吃人嘴软拿人手短，既然已经收下订金只能放手干了。"
     },
     {
      "label": "QL_UMiiMini_RichmansHobby_Name",
      "text": "你打倒了塔林湿地的两台守护者并将此事报告给了哈吉。拿到的报酬比订金还少。"
     }
    ],
    "source": "QL_UMiiMini_RichmansHobby"
   },
   "labels": [
    "QL_UMiiMini_RichmansHobby_Finish",
    "QL_UMiiMini_RichmansHobby_Name"
   ],
   "flags": {
    "ready": "UMiiMini_RichmansHobby_Ready",
    "activated": "UMiiMini_RichmansHobby_Activated",
    "finish": "UMiiMini_RichmansHobby_Finish",
    "steps": [],
    "aux": [
     "UMiiMini_RichmansHobby_Beat"
    ]
   },
   "source": [
    "QL_UMiiMini_RichmansHobby",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UMiiMini_RichmansHobby_Ready": 1,
    "UMiiMini_RichmansHobby_Activated": 0,
    "UMiiMini_RichmansHobby_Finish": 0,
    "UMiiMini_RichmansHobby_Beat": 0
   },
   "status_snapshot": "未开始",
   "title": "暴发户的玩法",
   "title_source": "QL_UMiiMini_RichmansHobby · text[0] · 无标签"
  },
  {
   "id": "UotoriMini_RecipeSea",
   "name": "集到的山羊黄油和生命海螺\n交给了基丘乌。\n她分给你一些海鲜杂烩饭作为谢礼。\n\n////食谱备忘/////山羊黄油、生命海螺、大剑鲷鱼\n岩盐 、海拉鲁米",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UotoriMini_RecipeSea",
   "text": {
    "name": "将收集到的山羊黄油和生命海螺交给了基丘乌。她分给你一些海鲜杂烩饭作为谢礼。////食谱备忘/////山羊黄油、生命海螺、大剑鲷鱼岩盐 、海拉鲁米",
    "desc": null,
    "finish": "沃托里村渔夫之家的基丘乌每天忙于家务和育儿。今天的晚餐是孩子们非常喜欢的海鲜杂烩饭，但材料好像不够了。忙碌的基丘乌拜托你准备材料，去收集羊黄油命海螺。",
    "steps": {},
    "name_label": "QL_UotoriMini_RecipeSea_Name",
    "desc_label": null,
    "finish_label": "QL_UotoriMini_RecipeSea_Finish",
    "items": [
     {
      "label": null,
      "text": "今日晚餐"
     },
     {
      "label": "QL_UotoriMini_RecipeSea_Finish",
      "text": "沃托里村渔夫之家的基丘乌每天忙于家务和育儿。今天的晚餐是孩子们非常喜欢的海鲜杂烩饭，但材料好像不够了。忙碌的基丘乌拜托你准备材料，去收集羊黄油命海螺。"
     },
     {
      "label": "QL_UotoriMini_RecipeSea_Name",
      "text": "将收集到的山羊黄油和生命海螺交给了基丘乌。她分给你一些海鲜杂烩饭作为谢礼。////食谱备忘/////山羊黄油、生命海螺、大剑鲷鱼岩盐 、海拉鲁米"
     }
    ],
    "source": "QL_UotoriMini_RecipeSea"
   },
   "labels": [
    "QL_UotoriMini_RecipeSea_Finish",
    "QL_UotoriMini_RecipeSea_Name"
   ],
   "flags": {
    "ready": "UotoriMini_RecipeSea_Ready",
    "activated": "UotoriMini_RecipeSea_Activated",
    "finish": "UotoriMini_RecipeSea_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_UotoriMini_RecipeSea",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UotoriMini_RecipeSea_Ready": 1,
    "UotoriMini_RecipeSea_Activated": 0,
    "UotoriMini_RecipeSea_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": "今日晚餐",
   "title_source": "QL_UotoriMini_RecipeSea · text[0] · 无标签"
  },
  {
   "id": "UotoriMini_RecoverBay",
   "name": "了以阿拉伊索海岸为据点的全部怪物！\n\n把这个好消息告诉萨巴卡亚吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UotoriMini_RecoverBay",
   "text": {
    "name": "击退了以阿拉伊索海岸为据点的全部怪物！把这个好消息告诉萨巴卡亚吧。",
    "desc": "击退了以阿拉伊索海岸为据点的全部怪物！把这个好消息告诉萨巴卡亚吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_UotoriMini_RecoverBay_Desc",
    "desc_label": "QL_UotoriMini_RecoverBay_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "被夺走的渔场"
     },
     {
      "label": null,
      "text": "沃托里村是渔夫之村。渔夫萨巴卡亚在烦恼。首屈一指的优良渔场阿拉伊索海岸好像被物们占作为据点了。击退怪物，让萨巴卡亚安心吧。"
     },
     {
      "label": "QL_UotoriMini_RecoverBay_Desc",
      "text": "击退了以阿拉伊索海岸为据点的全部怪物！把这个好消息告诉萨巴卡亚吧。"
     },
     {
      "label": null,
      "text": "占据阿拉伊索海岸的怪物们不见了，又能在首屈一指的优良渔场捕鱼了。"
     }
    ],
    "source": "QL_UotoriMini_RecoverBay"
   },
   "labels": [
    "QL_UotoriMini_RecoverBay_Desc",
    "QL_UotoriMini_RecoverBay_Name",
    "��ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001N\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0014\u0000\u0000\u0000\"\u0000\u0000\u0000�\u0000\u0000\u0001\n��Y:�pv�n\u0014W:\u0000\u0000l�bX��gQf/n\u0014Y+NKgQ0\u0002\u0000\n\u0000\nn\u0014Y+�(]�SaN�W(p�`|0\u0002\u0000\n��\\HN\u0000c\u0007v�O\u0018�on\u0014W:�?b�O\n}\"mw\\�\u0000\nY}Pψ�\u0000\u000e\u0000"
   ],
   "flags": {
    "ready": "UotoriMini_RecoverBay_Ready",
    "activated": "UotoriMini_RecoverBay_Activated",
    "finish": "UotoriMini_RecoverBay_Finish",
    "steps": [],
    "aux": [
     "UotoriMini_RecoverBay_Exterminate",
     "UotoriMini_RecoverBay_GetReward",
     "UotoriMini_RecoverBay_IsTalked"
    ]
   },
   "source": [
    "QL_UotoriMini_RecoverBay",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UotoriMini_RecoverBay_Ready": 1,
    "UotoriMini_RecoverBay_Activated": 0,
    "UotoriMini_RecoverBay_Finish": 0,
    "UotoriMini_RecoverBay_Exterminate": 0,
    "UotoriMini_RecoverBay_GetReward": 0,
    "UotoriMini_RecoverBay_IsTalked": 0
   },
   "status_snapshot": "未开始",
   "title": "被夺走的渔场",
   "title_source": "QL_UotoriMini_RecoverBay · text[0] · 无标签"
  },
  {
   "id": "UotoriMini_SinkTreasure",
   "name": "隐居的渔夫洛泽尔\n每天过着面朝大海春暖花开的生活。\n\n从他那里你得知了入海中的财宝传说。\n\n“财宝沉睡于黄金三角的中央。”\n\n开始寻宝吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 词干 Mini/Ch 结构 + 无神庙文本",
   "message_file": "QL_UotoriMini_SinkTreasure",
   "text": {
    "name": "现已隐居的渔夫洛泽尔每天过着面朝大海春暖花开的生活。从他那里你得知了入海中的财宝传说。“财宝沉睡于黄金三角的中央。”开始寻宝吧。",
    "desc": "“财宝沉睡于黄金三角的中央。”你找出了传说的藏宝之地，在克拉里海滩的近海处打捞出这批财宝。把这个好消息告诉洛泽尔吧。",
    "finish": "现已隐居的渔夫洛泽尔每天过着面朝大海春暖花开的生活。从他那里你得知了入海中的财宝传说。“财宝沉睡于黄金三角的中央。”开始寻宝吧。",
    "steps": {},
    "name_label": "QL_UotoriMini_SinkTreasure_Name",
    "desc_label": "QL_UotoriMini_SinkTreasure_Desc",
    "finish_label": "QL_UotoriMini_SinkTreasure_Name",
    "items": [
     {
      "label": null,
      "text": "沉入海中的财宝"
     },
     {
      "label": "QL_UotoriMini_SinkTreasure_Name",
      "text": "现已隐居的渔夫洛泽尔每天过着面朝大海春暖花开的生活。从他那里你得知了入海中的财宝传说。“财宝沉睡于黄金三角的中央。”开始寻宝吧。"
     },
     {
      "label": "QL_UotoriMini_SinkTreasure_Desc",
      "text": "“财宝沉睡于黄金三角的中央。”你找出了传说的藏宝之地，在克拉里海滩的近海处打捞出这批财宝。把这个好消息告诉洛泽尔吧。"
     },
     {
      "label": null,
      "text": "听完你的报告，洛泽尔好像很高兴。在这广阔大海里可能还沉睡着无数的财宝。"
     }
    ],
    "source": "QL_UotoriMini_SinkTreasure"
   },
   "labels": [
    "QL_UotoriMini_SinkTreasure_Desc",
    "QL_UotoriMini_SinkTreasure_Name",
    "QL_UotoriMini_SinkTreasure_Finish"
   ],
   "flags": {
    "ready": "UotoriMini_SinkTreasure_Ready",
    "activated": "UotoriMini_SinkTreasure_Activated",
    "finish": "UotoriMini_SinkTreasure_Finish",
    "steps": [],
    "aux": [
     "UotoriMini_SinkTreasure_IsTalked",
     "UotoriMini_SinkTreasure_Salvage"
    ]
   },
   "source": [
    "QL_UotoriMini_SinkTreasure",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "UotoriMini_SinkTreasure_Ready": 1,
    "UotoriMini_SinkTreasure_Activated": 0,
    "UotoriMini_SinkTreasure_Finish": 0,
    "UotoriMini_SinkTreasure_IsTalked": 0,
    "UotoriMini_SinkTreasure_Salvage": 0
   },
   "status_snapshot": "未开始",
   "title": "沉入海中的财宝",
   "title_source": "QL_UotoriMini_SinkTreasure · text[0] · 无标签"
  },
  {
   "id": "Water_Relic",
   "name": "经收集了20支电箭。\n去东部的蓄水湖和等待在那里的希多汇合吧。\n\n东部的蓄水湖在雷兽山山顶试海角的正下方",
   "category": "主线任务",
   "subcategory": "四神兽·卓拉",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Water_Relic",
   "text": {
    "name": "你已经收集了20支电箭。去东部的蓄水湖和等待在那里的希多汇合吧。东部的蓄水湖在雷兽山山顶试海角的正下方",
    "desc": null,
    "finish": null,
    "steps": {
     "QL_Water_Relic_Step1": "虽然你打算说服慕兹力帮你，但他并不认可海利亚人。如果你能证明自己就是米法的心上人，他好像就会帮你了。你手上有一件米法制作的拉铠甲…就用这个证明给他看吧。",
     "QL_Water_Relic_Step4": "有人拜托你去帮忙镇压水之神兽瓦·露塔。要镇压露塔的话，你需要很多电箭。你得先去拉领地的广场找执政官慕兹力，问问他从哪里才能获得那么多的电箭。"
    },
    "name_label": "QL_Water_Relic_Name",
    "desc_label": null,
    "finish_label": null,
    "items": [
     {
      "label": "QL_Water_Relic_Step1",
      "text": "水之神兽瓦·露塔"
     },
     {
      "label": "QL_Water_Relic_Step4",
      "text": "有人拜托你去帮忙镇压水之神兽瓦·露塔。要镇压露塔的话，你需要很多电箭。你得先去拉领地的广场找执政官慕兹力，问问他从哪里才能获得那么多的电箭。"
     },
     {
      "label": "QL_Water_Relic_Step1",
      "text": "虽然你打算说服慕兹力帮你，但他并不认可海利亚人。如果你能证明自己就是米法的心上人，他好像就会帮你了。你手上有一件米法制作的拉铠甲…就用这个证明给他看吧。"
     },
     {
      "label": null,
      "text": "你从慕兹力那里了解到，如果去雷兽山，就能收集到很多电箭。穿上卓拉铠甲后，你就能使用攀瀑了。如果利用它攀上卓拉领地东边的瀑布，你就能立刻到达雷兽山。先收集0支电箭。"
     },
     {
      "label": "QL_Water_Relic_Name",
      "text": "你已经收集了20支电箭。去东部的蓄水湖和等待在那里的希多汇合吧。东部的蓄水湖在雷兽山山顶试海角的正下方"
     },
     {
      "label": null,
      "text": "你在东部的蓄水湖那里和希多汇合了。利用电箭输送电力，动兽瓦·露塔背上的置。"
     },
     {
      "label": null,
      "text": "你在东部的蓄水湖那里和希多汇合了。利用电箭输送电力，动兽瓦·露塔背上的置。"
     },
     {
      "label": null,
      "text": "你启动了它背上的装置，并成功阻止了发狂的神兽瓦·露塔。接下来进入神兽体内，回神兽。"
     },
     {
      "label": null,
      "text": "你打倒了夺走神兽瓦·露塔的水咒盖侬。现在，米法的神兽瓦·露塔就坐镇在拉聂尔大水源的西边。返回卓拉领地，向莱凡王报告。"
     },
     {
      "label": null,
      "text": "你向多莱凡王报告了事情的经过。现在，就连卓拉领地里的老人们也发自内心地开始接纳你了。你已经能够发动英杰加护之力中的米法的祈福了。神兽瓦·露塔就坐镇在此地，等待和灾厄盖侬决战之时的到来。"
     }
    ],
    "source": "QL_Water_Relic"
   },
   "labels": [
    "QL_Water_Relic_Step1",
    "QL_Water_Relic_Step1",
    "QL_Water_Relic_Step1_2",
    "QL_Water_Relic_Name",
    "QL_Water_Relic_Step4",
    "QL_Water_Relic_Step5",
    "������ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\n\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0005�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\n\u0000\u0000\u0000,\u0000\u0000\u0000>\u0000\u0000\u0000�\u0000\u0000\u0001�\u0000\u0000\u0002z\u0000\u0000\u0003\u0000\u0000\u0000\u0003�\u0000\u0000\u0004\u0004\u0000\u0000\u0004v\u0000\u0000\u0005\u000el4NKy^Q}t�\u0000��2XT\u0000\u0000g\tN�b�bXO`S�^._ٕGS�l4NKy^Q}t�\u0000��2XT0\u0002\u0000\n\u0000\n���GS��2XTv��"
   ],
   "flags": {
    "ready": "Water_Relic_Ready",
    "activated": "Water_Relic_Activated",
    "finish": "Water_Relic_Finished",
    "steps": [
     "Water_Relic_Step1",
     "Water_Relic_Step1_1",
     "Water_Relic_Step1_2",
     "Water_Relic_Step2",
     "Water_Relic_Step3",
     "Water_Relic_Step4",
     "Water_Relic_Step5"
    ],
    "aux": [
     "Water_Relic_ArmorSend",
     "Water_Relic_BoysNotRun",
     "Water_Relic_KingTalk01",
     "Water_Relic_RainStop",
     "Water_Relic_SunnyKingTalk",
     "Water_Relic_firstPrinceRide"
    ]
   },
   "source": [
    "QL_Water_Relic",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Water_Relic_Ready": 1,
    "Water_Relic_Activated": 0,
    "Water_Relic_Finished": 0,
    "Water_Relic_Step1": 0,
    "Water_Relic_Step1_1": 0,
    "Water_Relic_Step1_2": 0,
    "Water_Relic_Step2": 0,
    "Water_Relic_Step3": 0,
    "Water_Relic_Step4": 0,
    "Water_Relic_Step5": 0,
    "Water_Relic_ArmorSend": 0,
    "Water_Relic_BoysNotRun": 0,
    "Water_Relic_KingTalk01": 0,
    "Water_Relic_RainStop": 0,
    "Water_Relic_SunnyKingTalk": 0,
    "Water_Relic_firstPrinceRide": 0
   },
   "status_snapshot": "未开始",
   "title": "水之神兽瓦·露塔",
   "title_source": "QL_Water_Relic · text[0] · 标签:QL_Water_Relic_Step1"
  },
  {
   "id": "Wind_Relic",
   "name": "神兽瓦·梅德",
   "category": "主线任务",
   "subcategory": "四神兽·利特",
   "category_source": "analysis",
   "category_basis": "analysis: QL 文本对应主线剧情节点 + 旗标族确认",
   "message_file": "QL_Wind_Relic",
   "text": {
    "name": "风之神兽瓦·梅德",
    "desc": "风之神兽瓦·梅德",
    "finish": null,
    "steps": {
     "QL_Wind_Relic_Battle": "利特村的族长卡昂希望你能去帮助村里的战士特巴。特巴究竟在哪里呢？特巴的妻子琪或许知道他的行踪。也和利特村的其他村民谈谈，收集一下信息吧。",
     "QL_Wind_Relic_BattlePlaying": "你在飞行训练场见到了特巴！看来在镇压神兽瓦·梅德之前，特巴并不打算回到村子里去。去帮助想要挑战神兽瓦·梅德的特巴吧。",
     "QL_Wind_Relic_Step1": "特巴说，如果你要挑战神兽瓦·梅德的话，就必须先把飞行训练场上的靶子全部击毁。据说在上升气流中打开滑翔帆，就可以飞上很长一段距离。你必须熟练操纵滑翔帆，在限定时间内用弓箭击毁个靶子让特巴认可你的本领才行。"
    },
    "name_label": "QL_Wind_Relic_Name",
    "desc_label": "QL_Wind_Relic_Name",
    "finish_label": null,
    "items": [
     {
      "label": "QL_Wind_Relic_Name",
      "text": "风之神兽瓦·梅德"
     },
     {
      "label": "QL_Wind_Relic_Battle",
      "text": "利特村的族长卡昂希望你能去帮助村里的战士特巴。特巴究竟在哪里呢？特巴的妻子琪或许知道他的行踪。也和利特村的其他村民谈谈，收集一下信息吧。"
     },
     {
      "label": "QL_Wind_Relic_Name",
      "text": "你从莎琪那里打听到了特巴的行踪！看来特巴已经去了飞行训练场。寻找行训练场追上特巴吧。"
     },
     {
      "label": "QL_Wind_Relic_BattlePlaying",
      "text": "你在飞行训练场见到了特巴！看来在镇压神兽瓦·梅德之前，特巴并不打算回到村子里去。去帮助想要挑战神兽瓦·梅德的特巴吧。"
     },
     {
      "label": "QL_Wind_Relic_Step1",
      "text": "特巴说，如果你要挑战神兽瓦·梅德的话，就必须先把飞行训练场上的靶子全部击毁。据说在上升气流中打开滑翔帆，就可以飞上很长一段距离。你必须熟练操纵滑翔帆，在限定时间内用弓箭击毁个靶子让特巴认可你的本领才行。"
     },
     {
      "label": null,
      "text": "你成功击毁了飞行训练场上的靶子！在和神兽瓦·梅德的战斗中，特巴说他会去吸引神兽的攻击，所以希望你能趁机摧毁炮台。按特巴的话来看，他好像会带你前往神兽瓦·梅德所在的空中。"
     },
     {
      "label": null,
      "text": "你成功击毁了飞行训练场上的靶子！在和神兽瓦·梅德的战斗中，特巴说他会去吸引神兽的攻击，所以希望你能趁机摧毁炮台。按特巴的话来看，他好像会带你前往神兽瓦·梅德所在的空中。"
     },
     {
      "label": null,
      "text": "和神兽瓦·梅德的战斗开始了！操纵滑翔帆，用炸弹箭摧毁所有的台。注意不要太过靠近神兽瓦·梅德，以免碰到它的护盾！"
     },
     {
      "label": null,
      "text": "虽然你摧毁了神兽瓦·梅德的炮台，并登上了它的后背，但特巴却因为受伤回到了地上。接下来你需要进入兽瓦·梅德体内，让它彻底停止行动。"
     },
     {
      "label": null,
      "text": "虽然你摧毁了神兽瓦·梅德的炮台，并登上了它的后背，但特巴却因为受伤回到了地上。接下来你需要进入兽瓦·梅德体内，让它彻底停止行动。"
     },
     {
      "label": null,
      "text": "你打倒了盘踞在神兽瓦·梅德体内的风咒盖侬！现在，神兽瓦·梅德就坐镇在利特村的顶上。特巴好像也回到了利特村。去把事情的始末报告给昂！"
     },
     {
      "label": null,
      "text": "你向卡昂报告了神兽瓦·梅德清醒一事！现在，你继承了力巴尔的英杰之力，已经能够使用力巴尔的勇猛了。"
     }
    ],
    "source": "QL_Wind_Relic"
   },
   "labels": [
    "QL_Wind_Relic_Name",
    "QL_Wind_Relic_Name",
    "QL_Wind_Relic_Battle",
    "QL_Wind_Relic_ParashawlFailed",
    "QL_Wind_Relic_ParashawlFinished",
    "QL_Wind_Relic_Step1",
    "QL_Wind_Relic_BattleSucceeded",
    "QL_Wind_Relic_BattleSucceeded",
    "QL_Wind_Relic_Desc",
    "QL_Wind_Relic_Desc",
    "QL_Wind_Relic_BattlePlaying"
   ],
   "flags": {
    "ready": "Wind_Relic_Ready",
    "activated": "Wind_Relic_Activated",
    "finish": "Wind_Relic_Finished",
    "steps": [
     "Wind_Relic_Step1"
    ],
    "aux": [
     "Wind_Relic_BatteryONOFF",
     "Wind_Relic_Battery_A_02_Die",
     "Wind_Relic_Battery_A_02_Die_Front",
     "Wind_Relic_Battery_A_02_Die_L",
     "Wind_Relic_Battery_A_02_Die_R",
     "Wind_Relic_Battery_A_02_Die_Rear",
     "Wind_Relic_Battle",
     "Wind_Relic_BattleClear",
     "Wind_Relic_BattleFailed",
     "Wind_Relic_BattleFinished",
     "Wind_Relic_BattleFirstDemoEnd",
     "Wind_Relic_BattlePlaying",
     "Wind_Relic_BattleStart",
     "Wind_Relic_Battle_Fail_BombArrow",
     "Wind_Relic_Battle_Fail_Bow",
     "Wind_Relic_BombArrow1",
     "Wind_Relic_BombArrow2",
     "Wind_Relic_Dungeon",
     "Wind_Relic_MiniGameStart",
     "Wind_Relic_NPC010_Battle_First",
     "Wind_Relic_NPC010_Finish_First",
     "Wind_Relic_NPC010_First",
     "Wind_Relic_NPC010_Parashowl_First",
     "Wind_Relic_NPC10_HelpYou",
     "Wind_Relic_Parashawl",
     "Wind_Relic_ParashawlClear",
     "Wind_Relic_ParashawlFinished",
     "Wind_Relic_ParashawlPlaying",
     "Wind_Relic_ParashawlTimeOver",
     "Wind_Relic_Parashawl_EventTimerAppear",
     "Wind_Relic_Parashawl_Fail_AreaInAppear",
     "Wind_Relic_Parashawl_Fail_BombArrow",
     "Wind_Relic_Parashawl_Fail_Bow",
     "Wind_Relic_Parashawl_Fail_Self",
     "Wind_Relic_Parashawl_Fail_TimeOut",
     "Wind_Relic_Saki",
     "Wind_Relic_TBox_Appear",
     "Wind_Relic_TargetONOFF",
     "Wind_Relic_WindRelicDemo20ONOFF",
     "Wind_Relic_WindRelicONOFF"
    ]
   },
   "source": [
    "QL_Wind_Relic",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "confirmed",
   "values": {
    "Wind_Relic_Ready": 1,
    "Wind_Relic_Activated": 0,
    "Wind_Relic_Finished": 0,
    "Wind_Relic_Step1": 0,
    "Wind_Relic_BatteryONOFF": 0,
    "Wind_Relic_Battery_A_02_Die": 0,
    "Wind_Relic_Battery_A_02_Die_Front": 0,
    "Wind_Relic_Battery_A_02_Die_L": 0,
    "Wind_Relic_Battery_A_02_Die_R": 0,
    "Wind_Relic_Battery_A_02_Die_Rear": 0,
    "Wind_Relic_Battle": 0,
    "Wind_Relic_BattleClear": 0,
    "Wind_Relic_BattleFailed": 0,
    "Wind_Relic_BattleFinished": 0,
    "Wind_Relic_BattleFirstDemoEnd": 0,
    "Wind_Relic_BattlePlaying": 0,
    "Wind_Relic_BattleStart": 0,
    "Wind_Relic_Battle_Fail_BombArrow": 0,
    "Wind_Relic_Battle_Fail_Bow": 0,
    "Wind_Relic_BombArrow1": 0,
    "Wind_Relic_BombArrow2": 0,
    "Wind_Relic_Dungeon": 0,
    "Wind_Relic_MiniGameStart": 0,
    "Wind_Relic_NPC010_Battle_First": 0,
    "Wind_Relic_NPC010_Finish_First": 0,
    "Wind_Relic_NPC010_First": 0,
    "Wind_Relic_NPC010_Parashowl_First": 0,
    "Wind_Relic_NPC10_HelpYou": 1,
    "Wind_Relic_Parashawl": 0,
    "Wind_Relic_ParashawlClear": 0,
    "Wind_Relic_ParashawlFinished": 0,
    "Wind_Relic_ParashawlPlaying": 0,
    "Wind_Relic_ParashawlTimeOver": 0,
    "Wind_Relic_Parashawl_EventTimerAppear": 0,
    "Wind_Relic_Parashawl_Fail_AreaInAppear": 0,
    "Wind_Relic_Parashawl_Fail_BombArrow": 0,
    "Wind_Relic_Parashawl_Fail_Bow": 0,
    "Wind_Relic_Parashawl_Fail_Self": 0,
    "Wind_Relic_Parashawl_Fail_TimeOut": 0,
    "Wind_Relic_Saki": 0,
    "Wind_Relic_TBox_Appear": 0,
    "Wind_Relic_TargetONOFF": 1,
    "Wind_Relic_WindRelicDemo20ONOFF": 0,
    "Wind_Relic_WindRelicONOFF": 1
   },
   "status_snapshot": "未开始",
   "title": "风之神兽瓦·梅德",
   "title_source": "QL_Wind_Relic · text[0] · 标签:QL_Wind_Relic_Name"
  },
  {
   "id": "YmdQueTest",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "YmdQueTest_Ready",
    "activated": "YmdQueTest_Activated",
    "finish": "YmdQueTest_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "YmdQueTest_Ready": 1,
    "YmdQueTest_Activated": 0,
    "YmdQueTest_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "Z_quest_test01",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "Z_quest_test01_Ready",
    "activated": "Z_quest_test01_Activated",
    "finish": "Z_quest_test01_Finished",
    "steps": [],
    "aux": [
     "Z_quest_test01_Extermination"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "Z_quest_test01_Ready": 1,
    "Z_quest_test01_Activated": 0,
    "Z_quest_test01_Finished": 0,
    "Z_quest_test01_Extermination": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "ZoraMini_DiveChallenge",
   "name": "下地跳入下面的水池，\n得到了诺尔的认可。\n\n接着要挑战瀑",
   "category": "迷你挑战",
   "subcategory": "卓拉地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_ZoraMini_DiveChallenge",
   "text": {
    "name": "头朝下地跳入下面的水池，得到了诺尔的认可。接着要挑战瀑",
    "desc": "从下面的水池逆流而上，成功地攀爬上瀑布。去听听尔感想吧。",
    "finish": null,
    "steps": {},
    "name_label": "QL_ZoraMini_DiveChallenge_Name",
    "desc_label": "QL_ZoraMini_DiveChallenge_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "陶醉在跳水中的男人"
     },
     {
      "label": null,
      "text": "诺尔怂恿你从这里跳入下面的水池。不是脚朝下地跳，而是必须朝下跳，不然不算数。"
     },
     {
      "label": "QL_ZoraMini_DiveChallenge_Name",
      "text": "头朝下地跳入下面的水池，得到了诺尔的认可。接着要挑战瀑"
     },
     {
      "label": "QL_ZoraMini_DiveChallenge_Desc",
      "text": "从下面的水池逆流而上，成功地攀爬上瀑布。去听听尔感想吧。"
     },
     {
      "label": null,
      "text": "你成功完成了跳水和攀瀑。诺尔的灵魂好像受到极大的冲击。"
     }
    ],
    "source": "QL_ZoraMini_DiveChallenge"
   },
   "labels": [
    "QL_ZoraMini_DiveChallenge_Desc",
    "QL_ZoraMini_DiveChallenge_Name",
    "ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0001�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0018\u0000\u0000\u0000,\u0000\u0000\u0000�\u0000\u0000\u0000�\u0000\u0000\u0001J�v��W(��l4N-v�u7N�\u0000\u0000��\\\u0014`\u0002`O`NΏّ�\u0000\n��QeN\u000b�bv�l4l`0\u0002\u0000\n\u0000\nN\rf/�\u001ag\u001dN\u000bW0���\f\u0000\n�\ff/_Ř{\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000Y4g\u001dN"
   ],
   "flags": {
    "ready": "ZoraMini_DiveChallenge_Ready",
    "activated": "ZoraMini_DiveChallenge_Activated",
    "finish": "ZoraMini_DiveChallenge_Finish",
    "steps": [
     "ZoraMini_DiveChallenge_Step1",
     "ZoraMini_DiveChallenge_Step2"
    ],
    "aux": [
     "ZoraMini_DiveChallenge_ItemGet",
     "ZoraMini_DiveChallenge_ItemNoGet"
    ]
   },
   "source": [
    "QL_ZoraMini_DiveChallenge",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "ZoraMini_DiveChallenge_Ready": 0,
    "ZoraMini_DiveChallenge_Activated": 0,
    "ZoraMini_DiveChallenge_Finish": 0,
    "ZoraMini_DiveChallenge_Step1": 0,
    "ZoraMini_DiveChallenge_Step2": 0,
    "ZoraMini_DiveChallenge_ItemGet": 0,
    "ZoraMini_DiveChallenge_ItemNoGet": 0
   },
   "status_snapshot": "未知",
   "title": "陶醉在跳水中的男人",
   "title_source": "QL_ZoraMini_DiveChallenge · text[0] · 无标签"
  },
  {
   "id": "ZoraMini_FlowedWife",
   "name": "到了在海利亚湖捕鱼的迪美。\n\n迪美将捕到的鱼交给你，\n急匆匆地赶回扶丘身边。",
   "category": "迷你挑战",
   "subcategory": "卓拉地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_ZoraMini_FlowedWife",
   "text": {
    "name": "你遇到了在海利亚湖捕鱼的迪美。迪美将捕到的鱼交给你，急匆匆地赶回扶丘身边。",
    "desc": null,
    "finish": "神兽瓦·露塔变得温驯了，但是扶丘的妻子迪美却还没回家。你要代替极其沮丧的扶丘去寻找美究竟去哪里才能见到她呢？",
    "steps": {},
    "name_label": "QL_ZoraMini_FlowedWife_Name",
    "desc_label": null,
    "finish_label": "QL_ZoraMini_FlowedWife_Finish",
    "items": [
     {
      "label": null,
      "text": "被冲走的妻子"
     },
     {
      "label": "QL_ZoraMini_FlowedWife_Finish",
      "text": "神兽瓦·露塔变得温驯了，但是扶丘的妻子迪美却还没回家。你要代替极其沮丧的扶丘去寻找美究竟去哪里才能见到她呢？"
     },
     {
      "label": "QL_ZoraMini_FlowedWife_Name",
      "text": "你遇到了在海利亚湖捕鱼的迪美。迪美将捕到的鱼交给你，急匆匆地赶回扶丘身边。"
     }
    ],
    "source": "QL_ZoraMini_FlowedWife"
   },
   "labels": [
    "QL_ZoraMini_FlowedWife_Finish",
    "QL_ZoraMini_FlowedWife_Name"
   ],
   "flags": {
    "ready": "ZoraMini_FlowedWife_Ready",
    "activated": "ZoraMini_FlowedWife_Activated",
    "finish": "ZoraMini_FlowedWife_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "QL_ZoraMini_FlowedWife",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "ZoraMini_FlowedWife_Ready": 0,
    "ZoraMini_FlowedWife_Activated": 0,
    "ZoraMini_FlowedWife_Finish": 0
   },
   "status_snapshot": "未知",
   "title": "被冲走的妻子",
   "title_source": "QL_ZoraMini_FlowedWife · text[0] · 无标签"
  },
  {
   "id": "ZoraMini_HarvestingStone",
   "name": "0颗夜光石交给雷托冈。\n\n应该会对领地修缮有帮助吧。",
   "category": "迷你挑战",
   "subcategory": "卓拉地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_ZoraMini_HarvestingStone",
   "text": {
    "name": "将10颗夜光石交给雷托冈。应该会对领地修缮有帮助吧。",
    "desc": null,
    "finish": "雷托冈为了修缮卓拉领地，拜托你取回0颗夜光石在拉台地某处好像可以采集到很多夜光石。",
    "steps": {},
    "name_label": "QL_ZoraMini_HarvestingStone_Name",
    "desc_label": null,
    "finish_label": "QL_ZoraMini_HarvestingStone_Finish",
    "items": [
     {
      "label": null,
      "text": "夜光石收集"
     },
     {
      "label": "QL_ZoraMini_HarvestingStone_Finish",
      "text": "雷托冈为了修缮卓拉领地，拜托你取回0颗夜光石在拉台地某处好像可以采集到很多夜光石。"
     },
     {
      "label": "QL_ZoraMini_HarvestingStone_Name",
      "text": "将10颗夜光石交给雷托冈。应该会对领地修缮有帮助吧。"
     }
    ],
    "source": "QL_ZoraMini_HarvestingStone"
   },
   "labels": [
    "QL_ZoraMini_HarvestingStone_Finish",
    "QL_ZoraMini_HarvestingStone_Name"
   ],
   "flags": {
    "ready": "ZoraMini_HarvestingStone_Ready",
    "activated": "ZoraMini_HarvestingStone_Activated",
    "finish": "ZoraMini_HarvestingStone_Finish",
    "steps": [
     "ZoraMini_HarvestingStone_Step1"
    ],
    "aux": [
     "ZoraMini_HarvestingStone_WaterRelicClearTalk"
    ]
   },
   "source": [
    "QL_ZoraMini_HarvestingStone",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "ZoraMini_HarvestingStone_Ready": 0,
    "ZoraMini_HarvestingStone_Activated": 0,
    "ZoraMini_HarvestingStone_Finish": 0,
    "ZoraMini_HarvestingStone_Step1": 0,
    "ZoraMini_HarvestingStone_WaterRelicClearTalk": 0
   },
   "status_snapshot": "未知",
   "title": "夜光石收集",
   "title_source": "QL_ZoraMini_HarvestingStone · text[0] · 无标签"
  },
  {
   "id": "ZoraMini_ReliefSearch",
   "name": "到全部的10块石碑，\n并将此事报告给了基奥托。\n\n这样一来，基奥托的研究\n也会有所进展吧。",
   "category": "迷你挑战",
   "subcategory": "卓拉地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_ZoraMini_ReliefSearch",
   "text": {
    "name": "已找到全部的10块石碑，并将此事报告给了基奥托。这样一来，基奥托的研究也会有所进展吧。",
    "desc": "寻找卓拉石碑",
    "finish": null,
    "steps": {},
    "name_label": "QL_ZoraMini_ReliefSearch_Name",
    "desc_label": "QL_ZoraMini_ReliefSearch_Desc",
    "finish_label": null,
    "items": [
     {
      "label": "QL_ZoraMini_ReliefSearch_Desc",
      "text": "寻找卓拉石碑"
     },
     {
      "label": "QL_ZoraMini_ReliefSearch_Desc",
      "text": "你接受了基奥托的委托，要去寻找存在于卓拉领地周边的碑除了领地内的石碑，总共应该有0块碑……还剩下0块石碑。去奥托里报告此事吧。"
     },
     {
      "label": null,
      "text": "在卓拉领地周边搜寻，找到了全部的10块石碑。去奥托里报告此事吧。"
     },
     {
      "label": "QL_ZoraMini_ReliefSearch_Name",
      "text": "已找到全部的10块石碑，并将此事报告给了基奥托。这样一来，基奥托的研究也会有所进展吧。"
     }
    ],
    "source": "QL_ZoraMini_ReliefSearch"
   },
   "labels": [
    "QL_ZoraMini_ReliefSearch_Desc",
    "QL_ZoraMini_ReliefSearch_Desc",
    "QL_ZoraMini_ReliefSearch_Name"
   ],
   "flags": {
    "ready": "ZoraMini_ReliefSearch_Ready",
    "activated": "ZoraMini_ReliefSearch_Activated",
    "finish": "ZoraMini_ReliefSearch_Finish",
    "steps": [],
    "aux": [
     "ZoraMini_ReliefSearch_Count",
     "ZoraMini_ReliefSearch_FirstTalk",
     "ZoraMini_ReliefSearch_RewardWait",
     "ZoraMini_ReliefSearch_SearchRelief"
    ]
   },
   "source": [
    "QL_ZoraMini_ReliefSearch",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "ZoraMini_ReliefSearch_Ready": 0,
    "ZoraMini_ReliefSearch_Activated": 0,
    "ZoraMini_ReliefSearch_Finish": 0,
    "ZoraMini_ReliefSearch_Count": 10,
    "ZoraMini_ReliefSearch_FirstTalk": 0,
    "ZoraMini_ReliefSearch_RewardWait": 0,
    "ZoraMini_ReliefSearch_SearchRelief": 0
   },
   "status_snapshot": "未知",
   "title": "寻找卓拉石碑",
   "title_source": "QL_ZoraMini_ReliefSearch · text[0] · 标签:QL_ZoraMini_ReliefSearch_Desc"
  },
  {
   "id": "Zora_FlogMini",
   "name": "特送去了5只速速蛙。\n获得铠甲草作为谢礼。\n\n彭特似乎非常高兴。",
   "category": "迷你挑战",
   "subcategory": "卓拉地区",
   "category_source": "analysis",
   "category_basis": "analysis: 词干地区前缀 + 无神庙文本",
   "message_file": "QL_Zora_FlogMini",
   "text": {
    "name": "为彭特送去了5只速速蛙。获得铠甲草作为谢礼。彭特似乎非常高兴。",
    "desc": null,
    "finish": "卓拉领地的彭特拜托你送他只速速蛙他打算变卖充当生活费。速速蛙似乎多在天现。",
    "steps": {},
    "name_label": "QL_Zora_FlogMini_Name",
    "desc_label": null,
    "finish_label": "QL_Zora_FlogMini_Finish",
    "items": [
     {
      "label": null,
      "text": "雨天的青蛙"
     },
     {
      "label": "QL_Zora_FlogMini_Finish",
      "text": "卓拉领地的彭特拜托你送他只速速蛙他打算变卖充当生活费。速速蛙似乎多在天现。"
     },
     {
      "label": "QL_Zora_FlogMini_Name",
      "text": "为彭特送去了5只速速蛙。获得铠甲草作为谢礼。彭特似乎非常高兴。"
     }
    ],
    "source": "QL_Zora_FlogMini"
   },
   "labels": [
    "QL_Zora_FlogMini_Finish",
    "QL_Zora_FlogMini_Name"
   ],
   "flags": {
    "ready": "Zora_FlogMini_Ready",
    "activated": "Zora_FlogMini_Activated",
    "finish": "Zora_FlogMini_Finish",
    "steps": [],
    "aux": [
     "Zora_FlogMini_Getitem"
    ]
   },
   "source": [
    "QL_Zora_FlogMini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "probable",
   "values": {
    "Zora_FlogMini_Ready": 0,
    "Zora_FlogMini_Activated": 0,
    "Zora_FlogMini_Finish": 0,
    "Zora_FlogMini_Getitem": 0
   },
   "status_snapshot": "未知",
   "title": "雨天的青蛙",
   "title_source": "QL_Zora_FlogMini · text[0] · 无标签"
  },
  {
   "id": "bf2_collabo",
   "name": "在海拉鲁各地的3颗\n红色的流星已全部找到。\n\n在异度神剑２的世界里，\n冒险潜入云海回收沉没的遗物者，\n被称为打捞员。\n将得到的3件装备都穿戴在身上的话，\n就能体会到打捞员的感觉吧。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_bf2_collabo",
   "text": {
    "name": "坠落在海拉鲁各地的3颗红色的流星已全部找到。在异度神剑２的世界里，冒险潜入云海回收沉没的遗物者，被称为打捞员。将得到的3件装备都穿戴在身上的话，就能体会到打捞员的感觉吧。",
    "desc": null,
    "finish": "最大桥的中央，看那南方的夜空，从骷髅的左眼，看那东方的夜空，从陡峭的雪山之巅，看那东南方的夜空。仰望夜空，寻找红色的流星吧，尚未找到的星星还剩.*bf2_collabo_remaining",
    "steps": {},
    "name_label": "QL_bf2_collabo_Name",
    "desc_label": null,
    "finish_label": "QL_bf2_collabo_Finish",
    "items": [
     {
      "label": null,
      "text": "联动：异度神剑２"
     },
     {
      "label": "QL_bf2_collabo_Finish",
      "text": "最大桥的中央，看那南方的夜空，从骷髅的左眼，看那东方的夜空，从陡峭的雪山之巅，看那东南方的夜空。仰望夜空，寻找红色的流星吧，尚未找到的星星还剩.*bf2_collabo_remaining"
     },
     {
      "label": "QL_bf2_collabo_Name",
      "text": "坠落在海拉鲁各地的3颗红色的流星已全部找到。在异度神剑２的世界里，冒险潜入云海回收沉没的遗物者，被称为打捞员。将得到的3件装备都穿戴在身上的话，就能体会到打捞员的感觉吧。"
     }
    ],
    "source": "QL_bf2_collabo"
   },
   "labels": [
    "QL_bf2_collabo_Finish",
    "QL_bf2_collabo_Name"
   ],
   "flags": {
    "ready": "bf2_collabo_Ready",
    "activated": "bf2_collabo_Activated",
    "finish": "bf2_collabo_Finish",
    "steps": [],
    "aux": [
     "bf2_collabo_open01",
     "bf2_collabo_open02",
     "bf2_collabo_open03",
     "bf2_collabo_remaining"
    ]
   },
   "source": [
    "QL_bf2_collabo",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "bf2_collabo_Ready": 1,
    "bf2_collabo_Activated": 1,
    "bf2_collabo_Finish": 0,
    "bf2_collabo_open01": 0,
    "bf2_collabo_open02": 0,
    "bf2_collabo_open03": 0,
    "bf2_collabo_remaining": 3
   },
   "status_snapshot": "进行中",
   "title": "联动：异度神剑２",
   "title_source": "QL_bf2_collabo · text[0] · 无标签"
  },
  {
   "id": "isso_treasure_mini",
   "name": "驿站的伊琐\n神情古怪地眺望着海利亚河。\n\n他好像对沉入利亚河底的\n箱面的东西非常非常地在意，\n但又为捞不上来而烦恼着。",
   "category": "迷你挑战",
   "subcategory": "其他地区 / 未分类",
   "category_source": "analysis",
   "category_basis": "analysis: 有 QL 日志文本但无法从词干/文本确认地区或类型",
   "message_file": "QL_isso_treasure_mini",
   "text": {
    "name": "湿地驿站的伊琐神情古怪地眺望着海利亚河。他好像对沉入利亚河底的箱面的东西非常非常地在意，但又为捞不上来而烦恼着。",
    "desc": "你捞起了沉入海利亚河底的宝箱。为了告诉琐箱里面的东西，先打开宝箱一探究竟吧。",
    "finish": null,
    "steps": {
     "QL_isso_treasure_mini_Step1": "湿地驿站的伊琐神情古怪地眺望着海利亚河。他好像对沉入利亚河底的箱面的东西非常非常地在意，但又为捞不上来而烦恼着。"
    },
    "name_label": "QL_isso_treasure_mini_Step1",
    "desc_label": "QL_isso_treasure_mini_Desc",
    "finish_label": null,
    "items": [
     {
      "label": null,
      "text": "沉入水底的宝贝"
     },
     {
      "label": "QL_isso_treasure_mini_Step1",
      "text": "湿地驿站的伊琐神情古怪地眺望着海利亚河。他好像对沉入利亚河底的箱面的东西非常非常地在意，但又为捞不上来而烦恼着。"
     },
     {
      "label": "QL_isso_treasure_mini_Desc",
      "text": "你捞起了沉入海利亚河底的宝箱。为了告诉琐箱里面的东西，先打开宝箱一探究竟吧。"
     },
     {
      "label": null,
      "text": "你捞起了沉入海利亚河的宝箱，取出了里面的东西。告诉琐箱中藏有什么吧。"
     },
     {
      "label": null,
      "text": "你捞起了沉入海利亚河的宝箱，并告诉伊琐宝箱里面的东西。伊琐似乎了却了一桩心事，心满意足地返回了湿地驿站。"
     }
    ],
    "source": "QL_isso_treasure_mini"
   },
   "labels": [
    "QL_isso_treasure_mini_Step1",
    "QL_isso_treasure_mini_Step2",
    "QL_isso_treasure_mini_Name",
    "QL_isso_treasure_mini_Desc",
    "����ATR1\u0000\u0000\u0000\b\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0000��������TXT2\u0000\u0000\u0002\u0016\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0018\u0000\u0000\u0000(\u0000\u0000\u0000�\u0000\u0000\u0001@\u0000\u0000\u0001�l�Qel4^�v�[��\u001d\u0000\u0000nW0�z�v�O\nt\u0010\u0000\ny^`�S�`*W0w:g\u001bw@mwR)N�l�0\u0002\u0000\n\u0000\nN�Y}P�[�l�Qe\u0000\u000e\u0000\u0000\u0000\u0003\u0000\u0002\u0000\u0000mwR)N�l�\u0000\u000e\u0000"
   ],
   "flags": {
    "ready": "isso_treasure_mini_Ready",
    "activated": "isso_treasure_mini_Activated",
    "finish": "isso_treasure_mini_Finish",
    "steps": [
     "isso_treasure_mini_Step2"
    ],
    "aux": [
     "isso_treasure_mini_Flash",
     "isso_treasure_mini_katudouba",
     "isso_treasure_mini_open"
    ]
   },
   "source": [
    "QL_isso_treasure_mini",
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "isso_treasure_mini_Ready": 1,
    "isso_treasure_mini_Activated": 0,
    "isso_treasure_mini_Finish": 0,
    "isso_treasure_mini_Step2": 0,
    "isso_treasure_mini_Flash": 0,
    "isso_treasure_mini_katudouba": 0,
    "isso_treasure_mini_open": 0
   },
   "status_snapshot": "未开始",
   "title": "沉入水底的宝贝",
   "title_source": "QL_isso_treasure_mini · text[0] · 无标签"
  },
  {
   "id": "kawazoe_FujitaLearning001",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "kawazoe_FujitaLearning001_Ready",
    "activated": "kawazoe_FujitaLearning001_Activated",
    "finish": "kawazoe_FujitaLearning001_Finish",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "kawazoe_FujitaLearning001_Ready": 1,
    "kawazoe_FujitaLearning001_Activated": 0,
    "kawazoe_FujitaLearning001_Finish": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "testZel",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": "开发者测试残留",
   "category_source": "analysis",
   "category_basis": "analysis: 词干为开发者测试命名",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "testZel_Ready",
    "activated": "testZel_Activated",
    "finish": "testZel_Finished",
    "steps": [],
    "aux": [
     "testZel_Get"
    ]
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "testZel_Ready": 1,
    "testZel_Activated": 0,
    "testZel_Finished": 0,
    "testZel_Get": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  },
  {
   "id": "yorozu",
   "name": null,
   "category": "其他 / 未分类",
   "subcategory": null,
   "category_source": "analysis",
   "category_basis": "analysis: 仅有 GameData 旗标，无 QL 任务日志对应",
   "message_file": null,
   "text": null,
   "labels": null,
   "flags": {
    "ready": "yorozu_Ready",
    "activated": "yorozu_Activated",
    "finish": "yorozu_Finished",
    "steps": [],
    "aux": []
   },
   "source": [
    "savdata_list471B.json",
    "savedataformat.ssarc(游戏内)"
   ],
   "confidence": "unknown",
   "values": {
    "yorozu_Ready": 1,
    "yorozu_Activated": 0,
    "yorozu_Finished": 0
   },
   "status_snapshot": "未开始",
   "title": null,
   "title_source": null
  }
 ]
};
