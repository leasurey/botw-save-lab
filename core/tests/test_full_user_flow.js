/* 完整模拟用户流程：导入JSON → 导入challenges → 点击已完成 → 导出JSON → 读取导出文件 → 对比原始JSON
   验证：导出文件中的 DataValue 是否真的改变了
   V12.3：路径改为按目录结构自动定位（见 pick()）
*/
"use strict";
const fs = require("fs");
const path = require("path");

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

function pick(rel, mustExist = true){
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
  if(!mustExist) return cands[0];
  /* ★ V13.7：彻底没有基准数据 = 环境条件（如用户清理了 backups/），跳过而不是崩溃 */
  console.log(`[跳过] 找不到基准数据：${rel}`);
  console.log("       可用 BOTW_TEST_JSON=<path> 指定，或把 game_data.sav.json 放进 backups/<日期>/。");
  process.exit(0);
}

// 阶段0：准备原始文件
const originalJson = pick("2026-10-02/game_data.sav.json");
const exportedJson = path.join(path.dirname(originalJson), "game_data.sav_edited_test.json");
const challengesFile = pick("challenges.json");

console.log("=== 阶段1：加载原始 JSON 到 textCache ===");
let textCache = fs.readFileSync(originalJson, "utf8");
const originalText = textCache;
console.log(`原始文件大小: ${textCache.length} bytes`);

console.log("\n=== 阶段2：加载 challenges.json ===");
const db = JSON.parse(fs.readFileSync(challengesFile, "utf8"));
console.log(`挑战数: ${db.challenges.length}`);

// 模拟 HTML 的 chalInitDB
let chalItems = db.challenges.slice();
chalItems.forEach(c => {
  c.flags = c.flags || { ready: null, activated: null, finish: null, steps: [], aux: [] };
  c.flags.steps = c.flags.steps || [];
  c.flags.aux = c.flags.aux || [];
  c.counterFlags = new Set();
  [c.flags.ready, c.flags.activated, c.flags.finish].concat(c.flags.steps, c.flags.aux)
    .forEach(f => { if(f && /(RemainingBox|_Count$|BestTime|Spot_Int)/i.test(f)) c.counterFlags.add(f); });
});

console.log("\n=== 阶段3：快照当前挑战状态 ===");
// 简化版 chalSnapshot
let chalValues = new Map();
const want = new Set();
for(const c of chalItems){
  [c.flags.ready, c.flags.activated, c.flags.finish]
    .concat(c.flags.steps, c.flags.aux).forEach(f => { if(f) want.add(f); });
}

// 扫描 textCache 找旗标值
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
  if(!want.has(name) || occ > 0) continue;
  
  const objStart = findObjectStart(textCache, p);
  if(objStart < 0) continue;
  const objEnd = findObjectEnd(textCache, objStart);
  if(objEnd < 0) continue;
  
  const objText = textCache.slice(objStart, objEnd + 1);
  const vr = locateValueRange(objText, "DataValue");
  if(!vr) continue;
  const valueRaw = objText.slice(vr.start, vr.end);
  let val = parseRawText(valueRaw);
  if(typeof val === "string" && /^-?\d+$/.test(val.trim())) val = Number(val.trim());
  chalValues.set(name, { raw: valueRaw, val });
}
console.log(`快照到 ${chalValues.size} 个旗标值`);

// 查看 100enemy 当前状态
const c0 = chalItems.find(c => c.id === "100enemy");
console.log(`\n100enemy 任务旗标:`);
console.log(`  ready: ${c0.flags.ready} = ${chalValues.get(c0.flags.ready)?.val}`);
console.log(`  activated: ${c0.flags.activated} = ${chalValues.get(c0.flags.activated)?.val}`);
console.log(`  finish: ${c0.flags.finish} = ${chalValues.get(c0.flags.finish)?.val}`);

console.log("\n=== 阶段4：模拟点击「已完成」 ===");
// 模拟 chalQueue
let chalPending = new Map();
function queueChange(flag, nextVal){
  const cur = chalValues.get(flag)?.val;
  const curN = (cur === null || cur === undefined) ? null : Number(cur);
  const nextN = Number(nextVal);
  if(curN !== null && curN === nextN){
    if(chalPending.has(flag)) chalPending.delete(flag);
    return;
  }
  chalPending.set(flag, { id: "100enemy", flag, old: cur, next: nextN });
}

queueChange(c0.flags.ready, 1);
queueChange(c0.flags.activated, 1);
queueChange(c0.flags.finish, 1);
console.log(`待应用: ${[...chalPending.keys()].join(", ")}`);

console.log("\n=== 阶段5：模拟点击「应用修改」 ===");
// 模拟 chalApply -> commitEdit
let editHistory = [];
let okCount = 0;
const failures = [];

chalPending.forEach(p => {
  const found = locateByNameOcc(p.flag, 0);
  if(!found){
    console.log(`❌ 无法定位 ${p.flag}`);
    failures.push(p.flag);
    return;
  }
  
  const beforeRaw = found.valueRaw;
  const beforeType = getValueType(beforeRaw);
  const norm = normalizeInput(String(p.next), beforeType);
  if(!norm.ok){
    console.log(`❌ ${p.flag} 输入错误: ${norm.msg}`);
    failures.push(p.flag);
    return;
  }
  if(norm.text === beforeRaw){
    console.log(`⚠️ ${p.flag} 内容未变化`);
    return;
  }
  
  const delta = norm.text.length - (found.valEnd - found.valStart);
  textCache = textCache.slice(0, found.valStart) + norm.text + textCache.slice(found.valEnd);
  editHistory.push({ name: p.flag, occ: 0, beforeRaw, afterRaw: norm.text });
  okCount++;
  console.log(`✓ ${p.flag}: ${beforeRaw} → ${norm.text}`);
});

console.log(`\n应用结果: 成功 ${okCount}, 失败 ${failures.length}`);

console.log("\n=== 阶段6：模拟导出 JSON ===");
// 模拟 doExport: 直接写 textCache 到文件
const exportName = originalJson.replace(/\.json$/i, "_edited.json");
const blob = [textCache];
fs.writeFileSync(exportedJson, textCache, "utf8");
console.log(`已导出: ${exportedJson} (${blob[0].length} bytes)`);

console.log("\n=== 阶段7：读取导出文件并对比 ===");
const exportedText = fs.readFileSync(exportedJson, "utf8");
const originalParsed = JSON.parse(originalText);
const exportedParsed = JSON.parse(exportedText);

// 找 100enemy 相关条目
function findEntry(jsonObj, dataName){
  for(const key in jsonObj){
    if(key === "savdata"){
      for(const idx in jsonObj[key]){
        const item = jsonObj[key][idx];
        if(item && item.DataName === dataName){
          return { index: idx, item };
        }
      }
    }
  }
  return null;
}

console.log("\n100enemy 任务在原始/导出 JSON 中的对比:");
for(const flag of [c0.flags.ready, c0.flags.activated, c0.flags.finish]){
  const orig = findEntry(originalParsed, flag);
  const exp = findEntry(exportedParsed, flag);
  if(!orig || !exp){
    console.log(`  ❌ ${flag}: 未找到`);
    continue;
  }
  const changed = orig.item.DataValue !== exp.item.DataValue ? "✓ 已改变" : "✗ 未改变";
  console.log(`  ${flag}`);
  console.log(`    原始: ${JSON.stringify(orig.item.DataValue)} (index ${orig.index})`);
  console.log(`    导出: ${JSON.stringify(exp.item.DataValue)} (index ${exp.index})`);
  console.log(`    状态: ${changed}`);
  console.log(`    DataName 保持: ${orig.item.DataName === exp.item.DataName ? "✓" : "✗"}`);
  console.log(`    HashValue 保持: ${orig.item.HashValue === exp.item.HashValue ? "✓" : "✗"}`);
}

console.log("\n=== 阶段8：字节级差异 ===");
console.log(`文本长度差异: ${exportedText.length - originalText.length}`);
console.log(`文本是否相同: ${exportedText === originalText ? "是" : "否"}`);

// 统计值差异
let diffCount = 0;
for(const key in exportedParsed.savdata){
  const expItem = exportedParsed.savdata[key];
  const origItem = originalParsed.savdata[key];
  if(!origItem) continue;
  if(expItem.DataValue !== origItem.DataValue){
    diffCount++;
    if(diffCount <= 5){
      console.log(`  差异 #${diffCount}: ${expItem.DataName} = ${origItem.DataValue} → ${expItem.DataValue}`);
    }
  }
}
if(diffCount > 5) console.log(`  ... 共 ${diffCount} 处差异`);

console.log("\n=== 结论 ===");
if(okCount > 0 && exportedText !== originalText && diffCount > 0){
  console.log("✓ 写回链正常：UI 点击 → JSON 真实改变 → 导出文件正确");
  console.log("✓ 问题不在 HTML/JS 写回层");
} else {
  console.log("✗ 写回链异常：UI 点击未导致 JSON 真实改变");
}

// 清理测试文件
fs.unlinkSync(exportedJson);
console.log(`\n已清理测试文件: ${exportedJson}`);

// ========== 辅助函数（逐字复制自 HTML） ==========
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
function locateByNameOcc(name, occ){
  let result = null;
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
    const n = textCache.slice(first + 1, second);
    const o = occMap.get(n) || 0;
    occMap.set(n, o + 1);
    pos = second + 1;
    if(n !== name || o !== occ) continue;
    const objStart = findObjectStart(textCache, p);
    const objEnd = objStart >= 0 ? findObjectEnd(textCache, objStart) : -1;
    if(objStart < 0 || objEnd < 0) break;
    const objText = textCache.slice(objStart, objEnd + 1);
    if(objText.indexOf('"DataName"') < 0) break;
    const vr = locateValueRange(objText, "DataValue");
    if(!vr) break;
    const hr = locateValueRange(objText, "HashValue");
    result = {
      name, occ, objStart, objEnd,
      valStart: objStart + vr.start, valEnd: objStart + vr.end,
      valueRaw: objText.slice(vr.start, vr.end),
      hashValue: hr ? objText.slice(hr.start, hr.end) : ""
    };
    break;
  }
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
