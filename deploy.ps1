#!/usr/bin/env pwsh
# Kodawave Website - One-Click Deployment Helper (Windows PowerShell)
# This script automates the GitHub + Vercel deployment process

Write-Host "=================================================="
Write-Host "KODAWAVE WEBSITE - DEPLOYMENT HELPER"
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is configured
$gitName = git config user.name
$gitEmail = git config user.email

if ([string]::IsNullOrEmpty($gitName) -or [string]::IsNullOrEmpty($gitEmail)) {
    Write-Host "❌ Git not configured. Please run:" -ForegroundColor Red
    Write-Host "   git config --global user.name 'Your Name'"
    Write-Host "   git config --global user.email 'your.email@example.com'"
    exit 1
}

Write-Host "✅ Git configured as: $gitName <$gitEmail>" -ForegroundColor Green
Write-Host ""

# Get GitHub username
$GITHUB_USERNAME = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrEmpty($GITHUB_USERNAME)) {
    Write-Host "❌ GitHub username is required" -ForegroundColor Red
    exit 1
}

$REPO_NAME = "kodawave-website"
$GITHUB_URL = "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

Write-Host ""
Write-Host "GitHub URL: $GITHUB_URL" -ForegroundColor Cyan
Write-Host ""

# Check if remote already exists
$remoteExists = git remote | Select-String "origin"
if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists" -ForegroundColor Yellow
    $response = Read-Host "Replace it? (y/n)"
    if ($response -eq "y") {
        git remote remove origin
        Write-Host "✅ Removed existing remote" -ForegroundColor Green
    } else {
        Write-Host "❌ Deployment cancelled" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📤 Adding Git remote..." -ForegroundColor Cyan
git remote add origin "$GITHUB_URL"
Write-Host "✅ Remote added" -ForegroundColor Green

Write-Host ""
Write-Host "🔄 Renaming branch to 'main'..." -ForegroundColor Cyan
git branch -M main
Write-Host "✅ Branch renamed" -ForegroundColor Green

Write-Host ""
Write-Host "⏳ Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "   (This may prompt for your GitHub authentication)" -ForegroundColor Gray
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your GitHub repository is now live at:" -ForegroundColor Cyan
    Write-Host "   $GITHUB_URL"
    Write-Host ""
    Write-Host "=================================================="
    Write-Host "NEXT STEPS - DEPLOY TO VERCEL" -ForegroundColor Cyan
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Go to: https://vercel.com/new"
    Write-Host "2. Click 'Continue with GitHub'"
    Write-Host "3. Search for repository: $REPO_NAME"
    Write-Host "4. Click 'Import'"
    Write-Host "5. Review deployment settings (auto-detected):"
    Write-Host "   - Framework: React"
    Write-Host "   - Build Command: npm run build"
    Write-Host "   - Output Directory: dist"
    Write-Host "6. Click 'Deploy'"
    Write-Host ""
    Write-Host "Your site will be live at: https://[projectname].vercel.app" -ForegroundColor Green
    Write-Host ""
    Write-Host "Typical deployment time: 1-2 minutes"
    Write-Host ""
    Write-Host "For more information, see: GITHUB_SETUP.md"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Please check:" -ForegroundColor Yellow
    Write-Host "- Your internet connection"
    Write-Host "- Your GitHub credentials"
    Write-Host "- That the repository doesn't already exist"
    Write-Host "- That you have access to create repositories"
    exit 1
}
