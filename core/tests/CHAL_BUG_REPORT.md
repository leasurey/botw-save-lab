# 挑战修改写回 Bug 排查报告

## 测试结论

**JavaScript 写回链完全正常**，问题出在**导出文件路径不匹配**。

### 测试结果

```
✓ chalSnapshot() 快照正确：找到 1491 个旗标
✓ chalQueue() 队列正确：100enemy_Activated, 100enemy_Finish 入队
✓ commitEdit() 写回正确：textCache 真实修改，0→1
✓ 导出逻辑正确：Blob 包含修改后的内容
✓ JSON 对比验证：2 处 DataValue 真实改变
✓ DataName/HashValue 保持不变
```

### 根因分析

**不是 JavaScript Bug，是工作流问题**：

1. HTML 的 `commitEdit()` 成功修改 `textCache`（内存中的 JSON 文本）
2. 用户点击"导出 JSON"，浏览器触发下载
3. **浏览器下载的文件默认保存到 `Downloads` 文件夹**（如 `<用户目录>\Downloads\game_data.sav_edited.json`）
4. 转换器 main.py 检查的是 `backups/2026-10-02/game_data.sav.json`（原始导入的文件）
5. 用户没有把下载的文件复制回 `backups/2026-10-02/` 目录
6. 转换器发现 `backups/2026-10-02/game_data.sav.json` 的 SHA256 没变，报告"无修改"

### 关键代码追踪

- `chalApply()` → `commitEdit(flag, 0, value)` ✓ 正确
- `commitEdit()` → `locateByNameOcc()` → `textCache.slice() + norm.text + ...` ✓ 正确
- `doExport()` → `new Blob([textCache])` ✓ 正确
- **问题点**：浏览器下载的默认路径是 `Downloads`，不是 `backups/2026-10-02/`

### 用户操作断点

main.py 第 2189 行明确提示：
```
③ 勾选顶部「用原文件名」
```

但这个复选框**默认是未选中**的（HTML 第 1542 行初始化）。如果用户没勾选，导出文件名会是 `*_edited.json`，更容易被下载到错误位置。

## 修复建议

### 方案 1：改进 UI 提示（推荐）

在 `chalApply()` 成功后，给出更明确的导出指引：

```javascript
setStatus("🎯 已应用 " + ok + " 处挑战修改" + 
  " · 点击「💾 导出 JSON」" +
  " · 保存到：" + originalFileName + " 所在目录" +
  " · 覆盖原文件");
```

### 方案 2：自动勾选"用原文件名"

在导入 JSON 时自动勾选复选框，减少用户操作步骤。

### 方案 3：导出前警告

如果"用原文件名"未勾选，弹出警告提示用户选择正确的保存位置。

## 当前状态

- ✅ JavaScript 写回链 100% 正常
- ✅ 测试用例通过（100enemy 任务修改验证）
- ⚠️ 需要改进用户指引或默认行为
