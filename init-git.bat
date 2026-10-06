@echo off
rem Double-click: create the git repository (.git folder) and verify the
rem ignore rules. This does NOT create a commit - it only shows you the
rem full list of files that WOULD enter history, plus a safety check.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0pre_release_check.ps1" -InitGit
echo.
pause
