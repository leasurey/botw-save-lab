@echo off
rem Double-click: stage everything, REFUSE if any sensitive file would be
rem committed, then create the first commit ("Initial public release").
rem Requires the git identity to be set once (set-git-identity.bat).
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0pre_release_check.ps1" -InitGit -Commit
echo.
pause
