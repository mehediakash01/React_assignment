#!/bin/bash
# Kodawave Website - One-Click Deployment Helper
# This script automates the GitHub + Vercel deployment process

set -e

echo "=================================================="
echo "KODAWAVE WEBSITE - DEPLOYMENT HELPER"
echo "=================================================="
echo ""

# Check if Git is configured
if [ -z "$(git config user.name)" ]; then
    echo "❌ Git not configured. Please run:"
    echo "   git config --global user.name 'Your Name'"
    echo "   git config --global user.email 'your.email@example.com'"
    exit 1
fi

echo "✅ Git configured as: $(git config user.name) <$(git config user.email)>"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

REPO_NAME="kodawave-website"
GITHUB_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "GitHub URL: $GITHUB_URL"
echo ""

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists"
    read -p "Do you want to replace it? (y/n): " REPLACE_REMOTE
    if [ "$REPLACE_REMOTE" = "y" ]; then
        git remote remove origin
        echo "✅ Removed existing remote"
    else
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

echo ""
echo "📤 Adding Git remote..."
git remote add origin "$GITHUB_URL"
echo "✅ Remote added"

echo ""
echo "🔄 Renaming branch to 'main'..."
git branch -M main
echo "✅ Branch renamed"

echo ""
echo "⏳ Pushing to GitHub..."
echo "   (This may prompt for your GitHub authentication)"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "Your GitHub repository is now live at:"
    echo "   $GITHUB_URL"
    echo ""
    echo "=================================================="
    echo "NEXT STEPS - DEPLOY TO VERCEL"
    echo "=================================================="
    echo ""
    echo "1. Go to: https://vercel.com/new"
    echo "2. Click 'Continue with GitHub'"
    echo "3. Search for: $REPO_NAME"
    echo "4. Click 'Import'"
    echo "5. Review settings (Framework: React, Build: npm run build, Output: dist)"
    echo "6. Click 'Deploy'"
    echo ""
    echo "Your site will be live at: https://[projectname].vercel.app"
    echo ""
    echo "Typical deployment time: 1-2 minutes"
    echo ""
else
    echo ""
    echo "❌ Failed to push to GitHub"
    echo "Please check:"
    echo "- Your internet connection"
    echo "- Your GitHub credentials"
    echo "- That the repository doesn't already exist"
    exit 1
fi

echo "For more information, see: GITHUB_SETUP.md"
