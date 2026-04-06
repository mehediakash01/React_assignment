@echo off
REM Kodawave Website - One-Click Deployment Helper (Windows Batch)
REM This script automates the GitHub + Vercel deployment process

echo.
echo ==================================================
echo KODAWAVE WEBSITE - DEPLOYMENT HELPER
echo ==================================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Get GitHub username
set /p GITHUB_USERNAME="Enter your GitHub username: "

if "%GITHUB_USERNAME%"=="" (
    echo ERROR: GitHub username is required
    pause
    exit /b 1
)

set REPO_NAME=kodawave-website
set GITHUB_URL=https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo GitHub URL: %GITHUB_URL%
echo.

REM Check if remote already exists
git remote | findstr origin >nul 2>&1
if %errorlevel% equ 0 (
    echo WARNING: Remote 'origin' already exists
    set /p REPLACE_REMOTE="Replace it? (y/n): "
    if /i not "%REPLACE_REMOTE%"=="y" (
        echo Deployment cancelled
        pause
        exit /b 1
    )
    git remote remove origin
    echo Remote removed
)

echo.
echo Adding Git remote...
git remote add origin "%GITHUB_URL%"
echo Remote added

echo.
echo Renaming branch to 'main'...
git branch -M main
echo Branch renamed

echo.
echo Pushing to GitHub...
echo (This may prompt for your GitHub authentication)
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: Repository pushed to GitHub!
    echo.
    echo Your GitHub repository is now live at:
    echo    %GITHUB_URL%
    echo.
    echo ==================================================
    echo NEXT STEPS - DEPLOY TO VERCEL
    echo ==================================================
    echo.
    echo 1. Go to: https://vercel.com/new
    echo 2. Click "Continue with GitHub"
    echo 3. Search for: %REPO_NAME%
    echo 4. Click "Import"
    echo 5. Review settings (Framework: React, Build: npm run build, Output: dist)
    echo 6. Click "Deploy"
    echo.
    echo Your site will be live at: https://[projectname].vercel.app
    echo.
    echo Typical deployment time: 1-2 minutes
    echo.
    echo For more information, see: GITHUB_SETUP.md
    echo.
) else (
    echo.
    echo ERROR: Failed to push to GitHub
    echo.
    echo Please check:
    echo - Your internet connection
    echo - Your GitHub credentials
    echo - That the repository doesn't already exist
    echo - That you have access to create repositories
    echo.
)

pause
