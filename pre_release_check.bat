@echo off
rem Pre-publish check for BOTW Save Lab. Read-only unless extra args passed.
rem To create git repo:  pre_release_check.bat -InitGit
rem To create first commit (after InitGit):  pre_release_check.bat -InitGit -Commit
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0pre_release_check.ps1" %*
echo.
pause
