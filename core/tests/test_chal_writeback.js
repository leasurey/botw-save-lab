/* 最小复现：挑战写回链 chalSnapshot → chalQueue → chalApply(commitEdit)
   函数体取自 editor/塞尔达存档修改器.html，只替换 DOM/setStatus 依赖。
   路径按 V12.3 目录结构调整：数据从 backups/ 与 editor/ 里找。 */
"use strict";
const fs = require("fs");
const path = require("path");

/* 依次在 项目根 / backups / editor 下找文件（从 core/tests 往上两级是项目根） */
const ROOT = path.resolve(__dirname, "..", "..");

/* ★ V13.6：基准日期目录换代后（如 backups/2026-10-02 → 2026-10-04）自动回退，
   取 backups/ 下含同名文件的最新目录；日期目录仍存在时行为与旧版完全一致。 */
function pickDateFallback(rel){
  const m = /^(\d{4}-\d{2}-\d{2})\/(.+)$/.exec(rel);
  if(!m) return null;
  const name = m[2];
  const bd = path.join(ROOT, "backups");
  if(!fs.existsSync(bd)) return null;
  const hits = [];
  for(const d of fs.readdirSync(bd)){
    const p = path.join(bd, d, name);
    if(fs.existsSync(p)) hits.push(p);
  }
  if(!hits.length) return null;
  hits.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  console.log(`[i] 基准目录 ${m[1]}/ 已不存在，回退到最新副本：${path.relative(ROOT, hits[0])}`);
  return hits[0];
}

function pick(rel){
  const cands = [
    path.join(ROOT, rel),
    path.join(ROOT, "backups", rel),
    path.join(ROOT, "editor", rel),
    path.join(ROOT, "core", rel)
  ];
  for(const p of cands) if(fs.existsSync(p)) return p;
  /* ★ V13.7：--selftest 用根档只读副本现造的数据（backups/ 可能已被用户清理） */
  const env = process.env.BOTW_TEST_JSON;
  if(env && fs.existsSync(env) && path.basename(env) === path.basename(rel)) return env;
  const fb = pickDateFallback(rel);
  if(fb) return fb;
  /* ★ V13.7：彻底没有基准数据 = 环境条件（如用户清理了 backups/），跳过而不是崩溃 */
  console.log(`[跳过] 找不到基准数据：${rel}`);
  console.log("       可用 BOTW_TEST_JSON=<path> 指定，或把 game_data.sav.json 放进 backups/<日期>/。");
  process.exit(0);
}

const text0 = fs.readFileSync(pick("2026-10-02/game_data.sav.json"), "utf8");
let textCache = text0;
const msgs = [];
const setStatus = m => msgs.push(String(m));
let editHistory = [];
const FIELD_LIMITS = {}, FLOAT_FIELDS = new Set();

/* ---- 以下函数逐字复制自 HTML ---- */
function findStringEnd(s, start){
  let escp = false;
  for(let i = start; i < s.length; i++){
    const c = s[i];
    if(escp){ escp = false; continue; }
    if(c === "\\"){ escp = true; continue; }
    if(c === '"') return i;
  }
  return -1;
}
function findObjectStart(s, dataNamePos){
  const limit = Math.max(0, dataNamePos - 1048576);
  let depth = 0, inStr = false;
  for(let i = dataNamePos - 1; i >= limit; i--){
    const c = s[i];
    if(inStr){
      if(c === '"'){
        let bs = 0;
        for(let j = i - 1; j >= limit && s[j] === "\\"; j--) bs++;
        if(bs % 2 === 0) inStr = false;
      }
      continue;
    }
    if(c === '"'){ inStr = true; continue; }
    if(c === "}" || c === "]") depth++;
    else if(c === "{"){
      if(depth === 0) return i;
      depth--;
    } else if(c === "["){
      if(depth === 0) return -1;
      depth--;
    }
  }
  return -1;
}
function findObjectEnd(s, objStart){
  let depth = 0, inStr = false, escp = false;
  for(let i = objStart; i < s.length; i++){
    const c = s[i];
    if(inStr){ if(escp) escp=false; else if(c==="\\") escp=true; else if(c==='"') inStr=false; continue; }
    if(c === '"'){ inStr = true; continue; }
    if(c === "{") depth++;
    else if(c === "}"){ depth--; if(depth === 0) return i; }
  }
  return -1;
}
function matchBracket(s, start){
  const open = s[start], close = open === "{" ? "}" : "]";
  let d = 0, inStr = false, escp = false;
  for(let i = start; i < s.length; i++){
    const c = s[i];
    if(inStr){ if(escp) escp=false; else if(c==="\\") escp=true; else if(c==='"') inStr=false; continue; }
    if(c === '"'){ inStr = true; continue; }
    if(c === open) d++;
    else if(c === close){ d--; if(d === 0) return i; }
  }
  return -1;
}
function locateValueRange(objText, key){
  const k = '"' + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"[ \\t\\n\\r]*:[ \\t\\n\\r]*';
  const re = new RegExp(k);
  const m = re.exec(objText);
  if(!m) return null;
  const vs = m.index + m[0].length;
  const c = objText[vs];
  if(c === '"'){
    const ve = findStringEnd(objText, vs + 1);
    return ve < 0 ? null : { start: vs, end: ve + 1 };
  }
  if(c === "{" || c === "["){
    const ve = matchBracket(objText, vs);
    return ve < 0 ? null : { start: vs, end: ve + 1 };
  }
  let i = vs;
  while(i < objText.length){
    const ch = objText[i];
    if(ch === "," || ch === "}" || ch === "]" || ch === " " || ch === "\n" || ch === "\r" || ch === "\t") break;
    i++;
  }
  return { start: vs, end: i };
}
function parseRawText(raw){
  if(raw == null) return "—";
  const c = raw[0];
  if(c === '"'){ try{ return JSON.parse(raw); }catch{ return raw.slice(1,-1); } }
  if(c === "{" || c === "[") return raw.length > 220 ? raw.slice(0,220) + " …" : raw;
  return raw;
}
function forEachDataName(want, callback){
  if(callback === undefined){ callback = want; want = null; }
  let pos = 0;
  const occMap = new Map();
  while(pos < textCache.length){
    const p = textCache.indexOf('"DataName"', pos);
    if(p < 0) break;
    const colon = textCache.indexOf(":", p);
    if(colon < 0) break;
    const first = textCache.indexOf('"', colon + 1);
    if(first < 0) break;
    const second = findStringEnd(textCache, first + 1);
    if(second < 0) break;
    const name = textCache.slice(first + 1, second);
    const occ = occMap.get(name) || 0;
    occMap.set(name, occ + 1);
    pos = second + 1;
    if(want && !want(name)) continue;
    const objStart = findObjectStart(textCache, p);
    const objEnd = objStart >= 0 ? findObjectEnd(textCache, objStart) : -1;
    if(callback(name, occ, p, objStart, objEnd) === false) break;
  }
}
function makeEntry(name, occ, objStart, objEnd){
  if(objStart < 0 || objEnd < 0) return null;
  const objText = textCache.slice(objStart, objEnd + 1);
  if(objText.indexOf('"DataName"') < 0) return null;
  const vr = locateValueRange(objText, "DataValue");
  if(!vr) return null;
  const hr = locateValueRange(objText, "HashValue");
  return {
    name, occ, objStart, objEnd,
    valStart: objStart + vr.start, valEnd: objStart + vr.end,
    valueRaw: objText.slice(vr.start, vr.end),
    hashValue: hr ? objText.slice(hr.start, hr.end) : "",
    raw: objText.length > 1200 ? objText.slice(0,1200) + " …" : objText
  };
}
function locateByNameOcc(name, occ){
  let result = null;
  forEachDataName((n, o, p, os, oe) => {
    if(n === name && o === occ){ result = makeEntry(name, occ, os, oe); return false; }
  });
  return result;
}
function getValueType(raw){
  if(raw == null || raw === "") return "unknown";
  const c = raw[0];
  if(c === '"') return "string";
  if(c === "{") return "object";
  if(c === "[") return "array";
  if(c === "t" || c === "f") return "boolean";
  if(c === "n") return "null";
  if(c === "-" || (c >= "0" && c <= "9")) return "number";
  return "unknown";
}
function normalizeInput(rawInput, origType){
  const trimmed = String(rawInput).trim();
  if(trimmed === "") return { ok:false, msg:"输入为空。" };
  if(origType === "string"){
    if(trimmed.length >= 2 && trimmed[0] === '"' && trimmed[trimmed.length-1] === '"'){
      try{
        const parsed = JSON.parse(trimmed);
        if(typeof parsed === "string") return { ok:true, text: trimmed, type:"string" };
      }catch{}
    }
    return { ok:true, text: JSON.stringify(String(rawInput)), type:"string" };
  }
  let parsed;
  try{ parsed = JSON.parse(trimmed); }
  catch{ return { ok:false, msg:"无法解析为合法 JSON。" }; }
  let newType;
  if(typeof parsed === "number") newType = "number";
  else if(typeof parsed === "string") newType = "string";
  else if(typeof parsed === "boolean") newType = "boolean";
  else if(parsed === null) newType = "null";
  else if(Array.isArray(parsed)) newType = "array";
  else newType = "object";
  if(newType !== origType) return { ok:false, msg:"类型不匹配：原 " + origType + " → " + newType };
  if(newType === "number" && Number.isInteger(parsed) && !Number.isSafeInteger(parsed))
    return { ok:false, msg:"整数超出安全范围。" };
  return { ok:true, text: trimmed, type: newType };
}
function commitEdit(name, occ, rawInput){
  const found = locateByNameOcc(name, occ);
  if(!found){ setStatus("无法定位 " + name + "，修改失败。"); return false; }
  if(found.valStart < 0){ setStatus(name + " 没有 DataValue。"); return false; }
  const beforeRaw = found.valueRaw;
  const beforeType = getValueType(beforeRaw);
  const norm = normalizeInput(rawInput, beforeType);
  if(!norm.ok){ setStatus("❌ " + norm.msg); return false; }
  if(norm.text === beforeRaw){ setStatus("内容未变化。"); return false; }
  const lim = FIELD_LIMITS[name];
  if(lim && norm.type === "number"){
    const n = Number(parseRawText(norm.text));
    if(Number.isFinite(n) && (n < lim.min || n > lim.max)){
      setStatus("❌ 值超出范围 " + lim.min + "~" + lim.max);
      return false;
    }
  }
  const delta = norm.text.length - (found.valEnd - found.valStart);
  textCache = textCache.slice(0, found.valStart) + norm.text + textCache.slice(found.valEnd);
  editHistory.push({ name, occ, beforeRaw, afterRaw: norm.text, ts: Date.now() });
  setStatus("已修改 " + name + "：" + beforeRaw + " → " + norm.text + " · 共 " + editHistory.length + " 处");
  return true;
}
/* ---- chal 快照 / 队列（逐字复制） ---- */
let chalValues = null, chalPending = new Map(), chalItems = [];
function chalSnapshot(){
  const want = new Set();
  for(const c of chalItems){
    [c.flags.ready, c.flags.activated, c.flags.finish]
      .concat(c.flags.steps, c.flags.aux).forEach(f => { if(f) want.add(f); });
  }
  const m = new Map();
  forEachDataName(n => want.has(n), (name, occ, p, os, oe) => {
    if(occ > 0) return;
    const e = makeEntry(name, 0, os, oe);
    if(e) m.set(name, { raw: e.valueRaw, val: parseRawText(e.valueRaw) });
  });
  chalValues = m;
}
function chalVal(flag){
  if(!flag) return null;
  const v = chalValues && chalValues.get(flag);
  if(!v) return null;
  let t = v.val;
  if(typeof t === "string" && /^-?\d+$/.test(t.trim())) t = Number(t.trim());
  return t;
}
function chalQueue(flag, id, next){
  if(!flag) return;
  const cur = chalVal(flag);
  const curN = (cur === null || cur === undefined) ? null : Number(cur);
  const nextN = Number(next);
  if(curN !== null && curN === nextN){
    if(chalPending.has(flag)) chalPending.delete(flag);
    return;
  }
  chalPending.set(flag, { id, flag, old: cur, next: nextN });
}
function chalApply(){
  let ok = 0; const fail = [];
  chalPending.forEach(p => {
    if(commitEdit(p.flag, 0, String(p.next))) ok++;
    else fail.push(p.flag);
  });
  return { ok, fail };
}

/* ================= 测试 ================= */
const db = JSON.parse(fs.readFileSync(pick("challenges.json"), "utf8"));
chalItems = db.challenges;

/* 阶段0：快照诊断 —— 数据库里有多少旗标能在 savdata 中找到？ */
chalSnapshot();
let found = 0, missing = [];
for(const c of chalItems){
  const fs2 = [c.flags.ready, c.flags.activated, c.flags.finish].concat(c.flags.steps).filter(Boolean);
  for(const f of fs2){ if(chalValues.has(f)) found++; else missing.push(f); }
}
console.log("[snapshot] 旗标命中 " + found + "，缺失 " + missing.length);
console.log("[snapshot] 缺失示例:", missing.slice(0, 8));

/* 阶段1：完整复现 UI 链（以 100enemy 为例：点击「已完成」） */
const c0 = chalItems.find(c => c.id === "100enemy");
chalPending = new Map();
chalQueue(c0.flags.ready, c0.id, 1);
chalQueue(c0.flags.activated, c0.id, 1);
chalQueue(c0.flags.finish, c0.id, 1);
console.log("[queue] 待应用:", [...chalPending.keys()]);
const r = chalApply();
console.log("[apply] ok=" + r.ok + " fail=" + JSON.stringify(r.fail));
msgs.forEach(m => console.log("[status]", m));

/* 阶段2：验证 JSON 真的变化 */
console.log("[diff] 字节差异:", textCache !== text0 ? "有 " + (textCache.length - text0.length) : "无");
if(r.ok > 0){
  const after = JSON.parse(textCache);
  const before = JSON.parse(text0);
  const walk = (o, b, path, out) => {
    if(o === null || typeof o !== "object"){ if(o !== b) out.push(path + ": " + JSON.stringify(b) + " -> " + JSON.stringify(o)); return; }
    for(const k in o){
      if(!(k in b)) { out.push(path + "." + k + " 新增"); continue; }
      walk(o[k], b[k], path + "." + k, out);
    }
  };
  const out = [];
  walk(after, before, "$", out);
  console.log("[diff] JSON 值差异数:", out.length);
  out.slice(0, 10).forEach(x => console.log("  ", x));
  /* 找到旗标条目确认 DataName/HashValue 未动 */
  const re = /"DataName"\s*:\s*"100enemy_Finish"[\s\S]{0,200}?"DataValue"\s*:\s*([^,}]+)/;
  const m2 = re.exec(textCache);
  console.log("[check] 100enemy_Finish DataValue =", m2 && m2[1]);
}
/* 撤销恢复，便于重复测试 */
if(editHistory.length){ textCache = text0; editHistory = []; }
