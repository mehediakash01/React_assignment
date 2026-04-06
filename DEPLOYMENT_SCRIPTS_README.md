# Deployment Scripts

Quick deployment helpers for pushing your project to GitHub and deploying to Vercel.

## Available Scripts

### Windows (Recommended)

#### Option 1: PowerShell (Recommended for modern Windows)
```bash
./deploy.ps1
```

**Requirements**: Windows PowerShell 5.0+ or PowerShell Core

**If you get an execution policy error**:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run: `./deploy.ps1`

#### Option 2: Command Prompt (cmd.exe)
```cmd
deploy.bat
```

**Requirements**: Windows Command Prompt, Git installed

Just double-click `deploy.bat` or run from Command Prompt

### macOS & Linux

#### Bash
```bash
chmod +x deploy.sh
./deploy.sh
```

**Requirements**: Bash shell, Git installed

---

## What These Scripts Do

1. ✅ Verify Git is configured
2. ✅ Collect your GitHub username
3. ✅ Add GitHub remote to your local repository
4. ✅ Rename branch to 'main'
5. ✅ Push all commits to GitHub
6. ✅ Display live GitHub URL
7. ✅ Show next steps for Vercel deployment

---

## When to Use These Scripts

Use these deployment helpers when you're ready to:
- Push your project to GitHub
- Get a shareable GitHub repository link
- Set up for Vercel/Netlify deployment

---

## Prerequisites

Before running any deployment script:

### 1. Git Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. GitHub Account
- Already have GitHub? ✅ Ready to go
- New to GitHub? Create free account at https://github.com/signup

### 3. Git Installed
- Check: `git --version`
- Install from: https://git-scm.com/download

---

## Step-by-Step: Using PowerShell (Windows)

### Step 1: Open PowerShell
- Press: `Windows Key + X` → Select "Windows PowerShell"
- Or right-click folder → "Open with PowerShell"

### Step 2: Navigate to Project
```powershell
cd "path\to\React_assignment"
```

### Step 3: Run Script
```powershell
./deploy.ps1
```

### Step 4: Follow Prompts
- Enter your GitHub username when asked
- Authentication prompt will appear (use GitHub credentials)
- Script confirms successful push

### Step 5: Note Your URLs
The script shows:
- GitHub URL: `https://github.com/YOUR_USERNAME/kodawave-website`
- This is ready for Vercel deployment

---

## Step-by-Step: Using Command Prompt (Windows)

### Step 1: Open Command Prompt
- Press: `Windows Key + R`
- Type: `cmd`
- Press: Enter

### Step 2: Navigate to Project
```cmd
cd "path\to\React_assignment"
```

### Step 3: Run Script
```cmd
deploy.bat
```

### Step 4: Follow Prompts
Same as PowerShell instructions above

### Step 5: Note Your URLs
Script displays GitHub repository URL at the end

---

## Troubleshooting

### "PowerShell version not supported"
- Update Windows PowerShell to v5.0+
- Or use `deploy.bat` instead

### "Execution Policy Error"
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run: `./deploy.ps1`

### "Git not found"
- Install Git: https://git-scm.com/download/win
- Restart your terminal after installation

### "GitHub authentication failed"
1. Use personal access token instead of password
   - Generate at: https://github.com/settings/tokens
   - Select: `repo` scope
   - Use as password when prompted

2. Or configure SSH key
   - Generate: `ssh-keygen -t ed25519`
   - Add to GitHub: https://github.com/settings/keys

### "Repository already exists"
- Use different repository name
- Or delete existing repository on GitHub first

### "Push rejected"
Check:
- Repository is PUBLIC (not private)
- You have push access
- Branch name is correct (should be 'main')

---

## After Successful Push

### Verify on GitHub
1. Go to: `https://github.com/YOUR_USERNAME/kodawave-website`
2. You should see all your project files

### Deploy to Vercel
1. Go to: https://vercel.com/new
2. Click: "Continue with GitHub"
3. Search: "kodawave-website"
4. Click: "Import"
5. Review settings (auto-detected)
6. Click: "Deploy"

**Your live site**: `https://[projectname].vercel.app`

---

## What If the Script Fails?

Follow the manual deployment steps in [GITHUB_SETUP.md](GITHUB_SETUP.md):

1. Open terminal/command prompt
2. Navigate to project directory
3. Run these commands manually:

```bash
git remote add origin https://github.com/YOUR_USERNAME/kodawave-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Security Notes

These scripts:
- ✅ Only push to GitHub (no pulling or modifying)
- ✅ Don't store credentials
- ✅ Don't modify your code
- ✅ Don't delete anything

Your GitHub password/token is handled by Git's credential manager (standard Git behavior).

---

## Support

If something goes wrong:

1. **Read the error message carefully** - It usually tells you what's wrong
2. **Check prerequisites** - Git installed? GitHub account? Username entered?
3. **Use manual deployment** - Follow steps in GITHUB_SETUP.md
4. **Review platform docs**:
   - GitHub: https://docs.github.com
   - Git: https://git-scm.com/doc
   - Vercel: https://vercel.com/docs

---

## Quick Reference

| OS | Command |
|----|---------|
| Windows (PS) | `./deploy.ps1` |
| Windows (Cmd) | `deploy.bat` |
| macOS/Linux | `./deploy.sh` |

---

**Questions?** See [GITHUB_SETUP.md](GITHUB_SETUP.md) for detailed manual instructions.

