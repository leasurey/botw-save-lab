@echo off
rem One-time git identity setup (required before the first commit).
rem Use an ASCII / English display name: Chinese typed in cmd may be
rem stored in the wrong encoding and show as mojibake on GitHub.
set /p GITNAME=Enter your GitHub display name (ASCII recommended): 
set /p GITMAIL=Enter your GitHub email: 
git config --global user.name "%GITNAME%"
git config --global user.email "%GITMAIL%"
echo.
echo Configured as:
git config --global user.name
git config --global user.email
echo.
pause
