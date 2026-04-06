# GitHub Setup & Deployment Guide

Complete this guide to push your project to GitHub and deploy it live.

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `kodawave-website` (or your preferred name)
3. Description: "Professional digital agency website built with React, Vite, and Tailwind CSS"
4. Choose: **Public** (so it can be deployed)
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

After creation, GitHub will show you the commands to push an existing repository.

---

## Step 2: Configure Git Remote (Copy & Paste These Commands)

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/kodawave-website.git
git branch -M main
git push -u origin main
```

**Full example:**
```bash
git remote add origin https://github.com/yourname/kodawave-website.git
git branch -M main
git push -u origin main
```

### Alternative: Using SSH (if you have SSH key configured)
```bash
git remote add origin git@github.com:YOUR_USERNAME/kodawave-website.git
git branch -M main
git push -u origin main
```

---

## Step 3: Verify Repository Pushed

1. Visit: `https://github.com/YOUR_USERNAME/kodawave-website`
2. You should see all files, commits, and the README

✅ If you see your project, GitHub push is complete!

---

## Step 4: Deploy to Vercel (Recommended - 30 seconds)

### Quick Deploy Method

1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Search for your repository: `kodawave-website`
4. Click "Import"
5. Framework: React (auto-detected)
6. Build Command: `npm run build` (auto-filled)
7. Output Directory: `dist` (auto-filled)
8. Click "Deploy"

**That's it!** Your site is now live within 1-2 minutes.

### Get Your Live URL
- After deployment, Vercel shows your live URL
- Format: `https://[YOUR_PROJECT].vercel.app`
- You can configure a custom domain later

---

## Step 5: Deploy to Netlify (Alternative)

### Via GitHub Connection
1. Go to https://app.netlify.com/signup
2. Click "Sign up with GitHub"
3. Authorize Netlify
4. Click "New site from Git"
5. Select your `kodawave-website` repository
6. Build settings auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

**Your site is live!** Netlify provides a URL like `https://[random-name].netlify.app`

---

## Step 6: Configure Custom Domain (Optional)

### For Vercel
1. Go to your project settings
2. "Domains" section
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate auto-generated

### For Netlify
1. Go to Site settings
2. "Domain management"
3. Add custom domain
4. Update DNS CNAME record
5. SSL certificate auto-generated

---

## Step 7: Final Verification

### Check Deployment Status
- [ ] GitHub repository created and pushed
- [ ] GitHub URL working: `https://github.com/YOUR_USERNAME/kodawave-website`
- [ ] Vercel or Netlify deployment complete
- [ ] Live site loading: `https://[your-live-url]`
- [ ] All pages accessible:
  - [ ] Home page
  - [ ] Services page
  - [ ] About page
  - [ ] Blog page
  - [ ] Contact page

### Submit Deployment Link
Share your live deployment link:
```
GitHub: https://github.com/YOUR_USERNAME/kodawave-website
Live Site: https://[your-live-url]
```

---

## Troubleshooting

### Git Push Authentication Error
If you get authentication errors:

**Using HTTPS:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/kodawave-website.git
```
Then use Personal Access Token as password (not your GitHub password)

**Using SSH:**
```bash
git remote remove origin
git remote add origin git@github.com:YOUR_USERNAME/kodawave-website.git
```
Generate SSH key if needed: Run `ssh-keygen -t ed25519` 

### Deployment Build Fails
Check deployment logs:
- **Vercel**: Go to Deployments → Click failed deployment → View logs
- **Netlify**: Go to Deploys → View deploy log

Common issues:
- Node version mismatch: Check `.nvmrc` file (should be 18.18.0)
- Missing environment variables: Configure in Vercel/Netlify settings
- Build command wrong: Should be `npm run build`

### Site Not Loading After Deployment
- [ ] Wait 2-3 minutes for deployment to complete
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try incognito/private window
- [ ] Check domain DNS propagation: https://whatsmydns.net/

---

## Success Checklist

- [x] Project code complete and tested
- [x] Production build passing
- [x] Documentation complete
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel or Netlify deployment active
- [ ] Live URL accessible
- [ ] All pages loading correctly
- [ ] Contact form working
- [ ] Mobile responsive on live site
- [ ] SEO meta tags visible
- [ ] Performance satisfactory

---

## Post-Deployment Actions

### Update Documentation
```bash
# Update this in your README.md or create a LIVE_DEPLOYMENT.md file:
**Live Site**: [Your Live URL]
**GitHub Repository**: [Your GitHub URL]
**Deployment Date**: [Date]
```

### Monitor Live Site
- Set up Google Analytics on live domain
- Submit sitemap to Google Search Console
- Monitor error logs in Vercel/Netlify dashboard

### Custom Domain Setup (If Purchased)
1. Buy domain from GoDaddy, Namecheap, or similar
2. Point domain DNS to Vercel/Netlify
3. Configure SSL in deployment platform

---

## Quick Reference Commands

```bash
# Check remote
git remote -v

# Push to GitHub
git push -u origin main

# Add remote if not configured
git remote add origin https://github.com/YOUR_USERNAME/kodawave-website.git

# View recent commits
git log --oneline -5

# Check build locally before deploying
npm run build

# Start dev server to test
npm run dev
```

---

## Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com
- **GitHub Documentation**: https://docs.github.com
- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev

---

## Support

If you encounter issues:
1. Check the relevant platform's deployment logs
2. Review the DEPLOYMENT.md guide for specific platform details
3. Verify all requirements in this checklist
4. Ensure Node.js version matches .nvmrc (18.18.0)

---

**You're ready to go live!** 🚀

Follow the steps above to push your Kodawave website to GitHub and deploy it to production.

Your project deadline is **April 8 before midnight**.

