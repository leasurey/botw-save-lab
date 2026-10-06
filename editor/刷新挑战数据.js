#!/usr/bin/env node
/* ============================================================
   刷新挑战数据库（改了 challenges.json 之后运行这个）
   ------------------------------------------------------------
   用法（在项目根目录执行）：
       node editor\刷新挑战数据.js            校验 + 按需生成 challenges_data.js
       node editor\刷新挑战数据.js --check    只校验，不写任何文件（CI/自检用）
       node editor\刷新挑战数据.js --sync     生成 challenges_data.js，
                                             并把 HTML 里的内嵌副本同步到最新
                                             （改 HTML 前自动备份 .bak.<日期>）

   做几件事：
     1) 校验 JSON 合法、挑战条数、必需字段
     2) challenges.json → challenges_data.js（离线加载形态，file:// 下不能 fetch 本地 JSON）
        —— 内容没变时不重写文件（避免无意义的时间戳抖动）
     3) 报告 HTML 内嵌副本状态；--sync 时自动同步（先备份 HTML）
     4) --check 模式：全部一致才 exit 0，否则 exit 1

   ★ V13.7：移除了对不存在的 editor\刷新挑战数据.py 的引用；
             新增 --check / --sync；同步前必定先备份 HTML。
   ============================================================ */
"use strict";
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const JSON_PATH = path.join(DIR, "challenges.json");
const JS_PATH = path.join(DIR, "challenges_data.js");
const HTML_PATH = path.join(DIR, "塞尔达存档修改器.html");
const EMBED_BEGIN = '<script id="botw-embedded-challenges" type="application/json">';

const argv = process.argv.slice(2);
const CHECK_ONLY = argv.includes("--check");
const SYNC = argv.includes("--sync");
const unknown = argv.filter(a => !/^--(check|sync)$/.test(a));
if (unknown.length) {
  console.error("[x] 未知参数：" + unknown.join(" ") + "（可用：--check / --sync）");
  process.exit(2);
}

function die(msg) { console.error("[x] " + msg); process.exit(1); }
/* ★ V13.7：用本地日期（toISOString 是 UTC，跨零点会和 main.py 的 backups/<本地日期> 差一天） */
function today() {
  const d = new Date(), p = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}
function sameDb(a, b) {
  try { return JSON.stringify(a) === JSON.stringify(b); } catch (e) { return false; }
}

/* ---------- 1) 读取并校验 challenges.json ---------- */
if (!fs.existsSync(JSON_PATH)) die("找不到 " + JSON_PATH);
const raw = fs.readFileSync(JSON_PATH, "utf8").trim();

let db;
try { db = JSON.parse(raw); } catch (e) { die("challenges.json 不是合法 JSON：" + e.message); }
if (!Array.isArray(db.challenges)) die("challenges.json 缺少 challenges 数组");
console.log("[v] challenges.json 合法：" + db.challenges.length + " 项挑战");

/* 字段体检（只提示，不阻断） */
let noFlags = 0, noId = 0;
for (const c of db.challenges) {
  if (!c || !c.id) noId++;
  if (!c || !c.flags) noFlags++;
}
if (noId) console.log("[!] 有 " + noId + " 项没有 id");
if (noFlags) console.log("[!] 有 " + noFlags + " 项没有 flags");

let problems = 0;

/* ---------- 2) challenges_data.js ---------- */
function buildHeader(stamp) {
  return "/* challenges_data.js —— 由 challenges.json 自动生成（" + stamp + "），请勿手改。\n" +
         "   作用：file:// 双击打开 HTML 时浏览器禁止 fetch 本地 JSON，\n" +
         "   因此把数据包成 script 直接给页面用。\n" +
         "   重新生成： node editor\\刷新挑战数据.js   （同步内嵌副本加 --sync）\n" +
         "   （HTML 里还有一份内嵌保底副本；这里刷新后，外部文件会被优先使用） */\n";
}

/** 返回现有 challenges_data.js 里的 CHALLENGE_DB（解析失败返回 null） */
function readExistingJs() {
  if (!fs.existsSync(JS_PATH)) return null;
  try {
    const t = fs.readFileSync(JS_PATH, "utf8");
    const m = /window\.CHALLENGE_DB\s*=\s*([\s\S]*);\s*$/.exec(t);
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

const existingJs = readExistingJs();
const jsUpToDate = existingJs !== null && sameDb(existingJs, db);

if (jsUpToDate) {
  console.log("[v] challenges_data.js 与 challenges.json 内容一致（无需重写）");
} else if (CHECK_ONLY) {
  console.log("[x] challenges_data.js 与 challenges.json 不一致（--check 模式未写入）");
  problems++;
} else {
  fs.writeFileSync(JS_PATH, buildHeader(today()) + "window.CHALLENGE_DB = " + raw + ";\n", "utf8");
  console.log("[v] 已生成 " + path.basename(JS_PATH) + "（" + fs.statSync(JS_PATH).size + " 字节）");
}

/* ---------- 3) HTML 内嵌副本 ---------- */
function readEmbedded(html) {
  const at = html.indexOf(EMBED_BEGIN);
  if (at < 0) return null;
  const gt = html.indexOf(">", at);
  const end = html.indexOf("</script>", gt);
  if (gt < 0 || end < 0) return null;
  return { start: gt + 1, end: end, text: html.slice(gt + 1, end) };
}

if (!fs.existsSync(HTML_PATH)) {
  console.log("[!] 没找到 HTML，跳过内嵌副本检查");
} else {
  const html = fs.readFileSync(HTML_PATH, "utf8");
  const emb = readEmbedded(html);
  if (!emb) {
    console.log("[!] HTML 里没有内嵌副本（外部文件在就没事）");
    if (CHECK_ONLY) problems++;
  } else {
    let embDb = null;
    try { embDb = JSON.parse(emb.text); } catch (e) { /* 块损坏 */ }
    const ok = embDb !== null && sameDb(embDb, db);
    if (ok) {
      console.log("[v] HTML 内嵌副本与 challenges.json 一致（" + emb.text.length + " 字符）");
    } else if (SYNC) {
      /* ★ 改 HTML 前先备份（约束：任何修改前都要有 .bak.<日期>） */
      const bak = HTML_PATH + ".bak." + today();
      if (fs.existsSync(bak)) {
        let n = 1, cand;
        do { cand = HTML_PATH + ".bak." + today() + "_" + n; n++; } while (fs.existsSync(cand));
        fs.copyFileSync(HTML_PATH, cand);
        console.log("[v] 已备份 HTML → " + path.basename(cand));
      } else {
        fs.copyFileSync(HTML_PATH, bak);
        console.log("[v] 已备份 HTML → " + path.basename(bak));
      }
      const patched = html.slice(0, emb.start) + raw + html.slice(emb.end);
      /* 写前回读校验：替换后必须仍能解析出同样的数据库 */
      const verify = readEmbedded(patched);
      const vdb = verify ? JSON.parse(verify.text) : null;
      if (!vdb || !sameDb(vdb, db)) die("内嵌副本替换自检失败，HTML 未被改动");
      fs.writeFileSync(HTML_PATH, patched, "utf8");
      const after = readEmbedded(fs.readFileSync(HTML_PATH, "utf8"));
      const adb = after ? JSON.parse(after.text) : null;
      if (!adb || !sameDb(adb, db)) die("写回后校验失败，请用 .bak 还原");
      console.log("[v] HTML 内嵌副本已同步（" + raw.length + " 字符），并已回读校验");
    } else {
      console.log("[!] HTML 内嵌副本与 challenges.json 不一致——");
      console.log("    打开 HTML 会优先用外部 challenges_data.js（已最新），");
      console.log("    只有外部文件丢失时才会退到旧的内嵌副本。");
      console.log("    要同步请运行： node editor\\刷新挑战数据.js --sync");
      problems++;
    }
  }
}

/* ---------- 4) 收尾 ---------- */
if (CHECK_ONLY) {
  console.log("");
  if (problems) { console.log("[x] --check 发现 " + problems + " 处不一致"); process.exit(1); }
  console.log("[v] --check 通过：challenges.json / challenges_data.js / HTML 内嵌副本三者一致");
  process.exit(0);
}

console.log("");
console.log("完成。现在双击 editor\\塞尔达存档修改器.html，挑战页应自动加载。");
