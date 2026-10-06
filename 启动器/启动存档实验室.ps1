# ============================================================
#  BOTW · 塞尔达存档实验室 启动器（版本号见 core\main.py 的 APP_VERSION）
# ============================================================
#  双击 启动器\塞尔达存档实验室.vbs 即可。
#  本脚本：定位项目根 → 用 .venv 的 Python 跑 core\main.py
#  退出时不强制停留（除非程序报错）。
# ============================================================

param([switch]$DryRun)

# ---- 定位路径 ----
$Root     = Split-Path -Parent $PSScriptRoot
$VenvPy   = Join-Path $Root '.venv\Scripts\python.exe'
$MainPy   = Join-Path $Root 'core\main.py'
$Backup   = Join-Path $Root 'backups'

# ---- 版本号（★ V13.7：横幅从 core\main.py 读 APP_VERSION，避免两处打架）----
$ver = 'V13.7'   # 读不到时的兜底值
try {
    $txt = Get-Content -LiteralPath $MainPy -Raw -Encoding UTF8
    if ($txt -match 'APP_VERSION\s*=\s*"([^"]+)"') { $ver = $Matches[1] }
} catch { }

$Host.UI.RawUI.WindowTitle = "BOTW $ver · 塞尔达存档实验室"
Clear-Host

# ---- 自检 ----
$missing = @()
if (-not (Test-Path -LiteralPath $VenvPy)) { $missing += "Python 虚拟环境 (.venv)" }
if (-not (Test-Path -LiteralPath $MainPy)) { $missing += "core\main.py" }

if ($missing.Count -gt 0) {
    Write-Host ''
    Write-Host '  [X] 缺少必备文件：' -ForegroundColor Red
    foreach ($m in $missing) { Write-Host "      - $m" -ForegroundColor Red }
    Write-Host ''
    Write-Host '      请确认目录结构完整（启动器 / core / editor / .venv）。' -ForegroundColor Yellow
    Write-Host ''
    if (-not $DryRun) { [void](Read-Host '按回车关闭') }
    exit 1
}

if (-not (Test-Path -LiteralPath $Backup)) {
    try { New-Item -ItemType Directory -Path $Backup -Force | Out-Null } catch { }
}

# ---- 横幅 ----
Write-Host ''
Write-Host '  ╔══════════════════════════════════════════════╗' -ForegroundColor Cyan
Write-Host "  ║   BOTW 存档实验室  $ver  ·  Wii U 1.5.0     ║" -ForegroundColor Cyan
Write-Host '  ║   自动导入 · 背包/马匹/位置/挑战/体检        ║' -ForegroundColor Cyan
Write-Host '  ╚══════════════════════════════════════════════╝' -ForegroundColor Cyan
Write-Host ''
Write-Host '  快捷操作：' -ForegroundColor White
Write-Host '    [5] 完整流程     ← 日常推荐（一键 savdata+背包，回车直接进）' -ForegroundColor Gray
Write-Host '    [1] 只转 JSON    [2] 只写回 SAV    [q] 退出' -ForegroundColor Gray
Write-Host '    [3] 只改 savdata [4] 只改背包      [6] 只改位置（高级）' -ForegroundColor DarkGray
Write-Host ''
Write-Host '  小提示：' -ForegroundColor White
Write-Host '    · 网页会自动加载刚生成的 JSON，不用手动点导入' -ForegroundColor DarkGray
Write-Host '    · 导出时保持勾选「用原文件名」，终端才能检测到改动' -ForegroundColor DarkGray
Write-Host '    · 原档保护：game_data.sav 永不被移动；覆盖它必须输入 y，并自动 .bak' -ForegroundColor DarkGray
Write-Host '    · 改坏了？日期文件夹 / 目标旁边的 .bak 都能还原' -ForegroundColor DarkGray
Write-Host '    · 网页里按 / 或 Ctrl+K 可快速聚焦搜索框' -ForegroundColor DarkGray
Write-Host ''

if ($DryRun) {
    Write-Host '[DryRun] 工作目录：' -ForegroundColor Cyan
    Write-Host "         $Root"
    Write-Host '[DryRun] 将执行：' -ForegroundColor Cyan
    Write-Host "         `"$VenvPy`" `"$MainPy`""
    exit 0
}

# ---- 跑 main.py ----
Push-Location $Root
$code = 0
try {
    & $VenvPy $MainPy
    $code = $LASTEXITCODE
} finally {
    Pop-Location
}
if ($null -eq $code) { $code = 0 }

# ---- 退出：0 直接关，非 0 停留 ----
if ($code -ne 0) {
    Write-Host ''
    Write-Host "  [程序异常退出，退出码 $code]" -ForegroundColor Red
    Write-Host '  如反复出错，请把以上红字截图反馈。' -ForegroundColor Yellow
    Write-Host ''
    [void](Read-Host '按回车关闭窗口')
}
exit $code
