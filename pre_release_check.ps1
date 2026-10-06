# ============================================================
#  pre_release_check.ps1 - pre-publish checks for BOTW Save Lab
#  ASCII-only on purpose: Windows PowerShell 5.1 reads .ps1 without
#  BOM as ANSI, so no CJK literals may appear in *logic* paths.
#  (Chinese names still print fine - they come from the filesystem.)
#
#  READ-ONLY by default. Nothing is modified unless you pass:
#      -InitGit   git init + verify sensitive files are ignored
#      -Commit    first commit (blocked if sensitive files pending)
#
#  Run from Explorer : double-click pre_release_check.bat
#  Run from terminal : powershell -NoProfile -ExecutionPolicy Bypass -File .\pre_release_check.ps1 [-InitGit] [-Commit]
# ============================================================
param([switch]$InitGit, [switch]$Commit)

$ErrorActionPreference = 'Continue'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $Root
$script:Warn = 0
$script:Bad  = 0

function Step($n, $t) { Write-Host ""; Write-Host ("[{0}] {1}" -f $n, $t) -ForegroundColor Cyan }
function Ok($m)       { Write-Host ("  [ok] " + $m) -ForegroundColor Green }
function Warn($m)     { Write-Host ("  [!]  " + $m) -ForegroundColor Yellow; $script:Warn++ }
function Bad($m)      { Write-Host ("  [X]  " + $m) -ForegroundColor Red;    $script:Bad++ }

Write-Host "=== BOTW Save Lab - GitHub pre-release check ===" -ForegroundColor Cyan
Write-Host ("Root: " + $Root)
Write-Host ("Time: " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))

# ---------- [1] required release files (checks use ASCII wildcards) ----------
Step 1 "Required release files"
foreach ($f in @('.gitignore', 'LICENSE', 'README.md', 'core\main.py', 'pytest.ini')) {
    if (Test-Path -LiteralPath (Join-Path $Root $f)) { Ok $f } else { Bad ("missing: " + $f) }
}
$html = @(Get-ChildItem -LiteralPath (Join-Path $Root 'editor') -Filter '*.html' -File -ErrorAction SilentlyContinue)
if ($html.Count -gt 0) { Ok ("editor HTML found: " + $html[0].Name) } else { Bad "missing: editor\*.html" }

# ---------- [2] privacy scan ----------
#   scope : all text files except .venv / .git / backups (ignored dirs) /
#           this script itself / *.bak.* (ignored backups)
#   rules : drive paths need a path-like tail  -> kills binary-garbage FPs
#           keywords need ':' or '=' after them -> kills SecretClub-style game flags
Step 2 "Privacy scan (drive paths / api-key / password / secret / token / bearer)"
$exts = '\.(py|js|md|html|htm|ps1|vbs|ini|txt|json|cfg|yml|yaml|bat|css)$'
$files = @(Get-ChildItem -LiteralPath $Root -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object {
        $_.Extension -match $exts -and
        $_.FullName -notmatch '\\\.venv\\|\\\.git\\|\\backups\\' -and
        $_.Name -notmatch '^pre_release_check\.|\.bak\.'
    })
$patterns = @(
    '(?i)[a-z]:\\(?!(?:u[0-9a-f]{4}))[a-z0-9_~ .\\-]{2,}',
    '(?i)"(?:api[_-]?key|password|passwd|secret|token)"?\s*[:=]',
    '(?i)(?:api[_-]?key|password|passwd|secret|token)\s*[:=]',
    '(?i)bearer\s+[a-z0-9._\-]{8,}'
)
$hitCount = 0
foreach ($f in $files) {
    $rel = $f.FullName.Substring($Root.Length + 1)
    $i = 0
    foreach ($line in [System.IO.File]::ReadLines($f.FullName)) {
        $i++
        $isBlob = $line.Contains('\u0000')   # parsed game binary (MSBT garbage) - never a real path
        foreach ($p in $patterns) {
            if ($p.StartsWith('(?i)[a-z]') -and $isBlob) { continue }
            if ($line -match $p) {
                $frag = $Matches[0]
                if ($frag.Length -gt 60) { $frag = $frag.Substring(0, 60) + '...' }
                $shown = $line.Trim()
                if ($shown.Length -gt 110) { $shown = $shown.Substring(0, 110) + '...' }
                Write-Host ("  " + $rel + ":" + $i) -ForegroundColor Yellow
                Write-Host ("      pattern: " + $p) -ForegroundColor DarkYellow
                Write-Host ("      match  : " + $frag) -ForegroundColor DarkYellow
                Write-Host ("      line   : " + $shown) -ForegroundColor DarkYellow
                $hitCount++
                break
            }
        }
    }
}
if ($hitCount -eq 0) { Ok ("scanned " + $files.Count + " files, no hits") }
else { Warn ("hitCount = " + $hitCount + " - review each match above (game flag names like SecretClub are NOT secrets)") }

# ---------- [3] sensitive files present on disk (must stay untracked) ----------
Step 3 "Sensitive files present on disk (expected locally, must be git-ignored)"
foreach ($s in @('game_data.sav', '.venv\pyvenv.cfg', 'core\BotW-Save-Editor\BotW-Save-Editor.exe', 'core\__pycache__')) {
    if (Test-Path -LiteralPath (Join-Path $Root $s)) { Warn ("exists locally (ok if ignored): " + $s) }
}
$lnks = @(Get-ChildItem -LiteralPath $Root -Recurse -File -Filter '*.lnk' -Force -ErrorAction SilentlyContinue |
          Where-Object { $_.FullName -notmatch '\\\.venv\\' })
if ($lnks.Count -gt 0) {
    Warn ("" + $lnks.Count + " .lnk shortcut(s) on disk (ok if ignored):")
    $lnks | ForEach-Object { Write-Host ("      " + $_.FullName.Substring($Root.Length + 1)) -ForegroundColor DarkYellow }
}
$baks = @(Get-ChildItem -LiteralPath $Root -Recurse -File -Filter '*.bak.*' -Force -ErrorAction SilentlyContinue |
          Where-Object { $_.FullName -notmatch '\\\.venv\\|\\\.git\\' })
if ($baks.Count -gt 0) {
    Warn ("" + $baks.Count + " *.bak.* backup(s) on disk (ok if ignored by '*.bak.*'):")
    $baks | ForEach-Object { Write-Host ("      " + $_.FullName.Substring($Root.Length + 1) + "  (" + $_.Length + " B)") -ForegroundColor DarkYellow }
}
$bdir = Join-Path $Root 'backups'
if (Test-Path -LiteralPath $bdir) {
    $bfiles = @(Get-ChildItem -LiteralPath $bdir -Recurse -File -Force -ErrorAction SilentlyContinue)
    if ($bfiles.Count -gt 0) {
        Warn ("backups\ contains " + $bfiles.Count + " file(s) - ok if ignored; listed below:")
        $bfiles | ForEach-Object { Write-Host ("      " + $_.FullName.Substring($Root.Length + 1) + "  (" + $_.Length + " B)") -ForegroundColor DarkYellow }
    } else { Ok "backups\ exists but is empty" }
} else { Ok "no backups\ directory" }

# ---------- [4] top 20 largest files (excluding .venv) ----------
Step 4 "Top 20 largest files (excluding .venv)"
Get-ChildItem -LiteralPath $Root -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch '\\\.venv\\|\\\.git\\' } |
    Sort-Object Length -Descending | Select-Object -First 20 |
    ForEach-Object { Write-Host ("  {0,12:N0}  {1}" -f $_.Length, $_.FullName.Substring($Root.Length + 1)) }
$big = @(Get-ChildItem -LiteralPath $Root -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch '\\\.venv\\|\\\.git\\' -and $_.Length -gt 10MB })
if ($big.Count -gt 0) { Warn ("" + $big.Count + " file(s) exceed 10MB outside .venv") } else { Ok "no file exceeds 10MB outside .venv" }

# ---------- [5] git state ----------
Step 5 "Git state"
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
    Bad "git not found in PATH - install Git first"
} else {
    $isRepo = Test-Path -LiteralPath (Join-Path $Root '.git')
    if (-not $isRepo) {
        Warn "not a git repository yet"
        if ($InitGit) {
            git init 2>&1 | ForEach-Object { Write-Host ("  " + $_) }
            $isRepo = Test-Path -LiteralPath (Join-Path $Root '.git')
            if ($isRepo) { Ok "git init done" } else { Bad "git init failed" }
        } else {
            Write-Host "  re-run with -InitGit to create the repository" -ForegroundColor DarkGray
        }
    } else {
        Ok "is a git repository"
        Write-Host "  --- git status --short ---" -ForegroundColor DarkGray
        git status --short 2>&1 | ForEach-Object { Write-Host ("  " + $_) }
        Write-Host "  --- git ls-files (tracked) ---" -ForegroundColor DarkGray
        git ls-files 2>&1 | ForEach-Object { Write-Host ("  " + $_) }
    }
    if ($isRepo) {
        # porcelain 用于简洁计数；'git add -n' 干跑会逐个列出**将要入库的每一个文件**
        # （含未跟踪目录内部展开，无折叠盲区）——危险文件检查以这份清单为准
        $stagedView = @(git status --porcelain 2>$null)
        $wouldAdd = @(git add --dry-run -A 2>$null)
        if ($wouldAdd.Count -gt 0) {
            Write-Host ("  --- would commit (" + $wouldAdd.Count + " entries) ---") -ForegroundColor DarkGray
            $wouldAdd | ForEach-Object { Write-Host ("  " + $_) }
        }
        $danger = @($wouldAdd | Where-Object { $_ -match 'game_data\.sav|\.venv|\.lnk|backups[\\/]|BotW-Save-Editor\.exe|savdata_list|\.bak|\.pyc|__pycache__' })
        if ($danger.Count -gt 0) {
            Bad "these files WOULD be committed and look sensitive:"
            $danger | ForEach-Object { Write-Host ("      " + $_) -ForegroundColor Red }
        } elseif ($stagedView.Count -gt 0) {
            Ok ("nothing sensitive pending (" + $stagedView.Count + " change(s) listed above)")
        } else {
            Ok "working tree clean"
        }
        if ($Commit) {
            $name = git config user.name; $email = git config user.email
            if (-not $name -or -not $email) {
                Bad "git user.name / user.email not set - run: git config user.name ""YourName"" && git config user.email ""you@example.com"""
            } elseif ($danger.Count -eq 0) {
                git add -A 2>&1 | ForEach-Object { Write-Host ("  " + $_) }
                git commit -m "Initial public release (BOTW Save Lab V13.7)" 2>&1 | ForEach-Object { Write-Host ("  " + $_) }
                Ok "first commit created"
            } else {
                Bad "commit blocked: sensitive files pending (fix .gitignore first)"
            }
        }
    }
}

# ---------- summary ----------
Write-Host ""
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
if ($script:Bad -gt 0)   { Write-Host ("  blockers : " + $script:Bad) -ForegroundColor Red }
else                     { Write-Host "  blockers : 0" -ForegroundColor Green }
if ($script:Warn -gt 0)  { Write-Host ("  warnings : " + $script:Warn) -ForegroundColor Yellow }
else                     { Write-Host "  warnings : 0" -ForegroundColor Green }
if ($script:Bad -eq 0) { Write-Host "  VERDICT  : ready (review warnings above)" -ForegroundColor Green }
else { Write-Host "  VERDICT  : fix [X] items before publishing" -ForegroundColor Red }
Write-Host ""
exit $script:Bad
