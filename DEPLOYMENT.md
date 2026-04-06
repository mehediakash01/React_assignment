# Deployment Guide

This document provides step-by-step instructions for deploying the Kodawave website to various platforms.

## Prerequisites

- GitHub repository with the project code
- Node.js 18+ and npm installed locally
- Production build tested locally (`npm run build`)

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel provides the fastest deployment experience for React/Vite projects.

#### Option A: GitHub Integration

1. Go to https://vercel.com/new
2. Select your GitHub repository
3. Click "Import"
4. Vercel automatically detects Vite configuration
5. Add environment variables if needed:
   - `VITE_ENVIRONMENT=production`
   - Any other variables from `.env.example`
6. Click "Deploy"
7. Your site is live at `https://your-project.vercel.app`

#### Option B: Manual Deployment

```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Configuration

Vercel will use `vercel.json` automatically which includes:
- Build command: `npm run build`
- Output directory: `dist/`
- Caching headers for static assets
- Rewrites for SPA routing

### 2. Netlify

Simple drag-and-drop or GitHub integration.

#### Option A: GitHub Integration

1. Go to https://app.netlify.com/
2. Click "New site from Git"
3. Select your GitHub repository
4. Leave build settings as default (Netlify auto-detects)
5. Add environment variables from `.env.example`
6. Click "Deploy site"
7. Your site is live at `https://your-project-name.netlify.app`

#### Option B: Drag & Drop

1. Run local build: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist/` folder
4. Your site is deployed

#### Configuration

Netlify will use `netlify.toml` which includes:
- Build configuration with Node 18
- Redirect rules for SPA routing
- Security headers
- Cache settings

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Deploy workflow will run automatically
4. Site available at `https://yourusername.github.io/React_assignment`

#### Custom Domain

1. In repository Settings → Pages
2. Add your custom domain under "Custom domain"
3. Update DNS records with GitHub's IP addresses
4. Wait for DNS verification

### 4. Docker Deployment

Deploy using Docker containers to any platform.

#### Build Docker Image

```bash
docker build -t kodawave:latest .
docker run -p 80:3000 kodawave:latest
```

#### Dockerfile Example

```dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Post-Deployment Checklist

After deploying to any platform, verify:

- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Links work correctly (routing)
- [ ] Contact form is functional
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] No console errors
- [ ] SEO meta tags are present
- [ ] Analytics tracked (if configured)
- [ ] SSL certificate is active (https)

## Environment Variables

Set these on your deployment platform:

```
VITE_ENVIRONMENT=production
VITE_API_URL=https://api.kodawave.com (if applicable)
VITE_ANALYTICS_ID=your_analytics_id
```

## Performance Monitoring

### Lighthouse Audit

```bash
npm run build
npm run preview
# In Chrome DevTools: Lighthouse → Generate report
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Bundle Analysis

```bash
npm install --save-dev vite-plugin-visualizer
npm run build:analyze
```

## Troubleshooting

### Build Fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues

Ensure your deployment platform has SPA routing configured:
- Vercel: Handled by `vercel.json` rewrites
- Netlify: Handled by `netlify.toml` redirects
- GitHub Pages: Use hash-based routing or configure redirects

### Performance Issues

1. Check bundle size: `npm run build:analyze`
2. Optimize images in `src/assets/`
3. Use dynamic imports for routes: `lazy(() => import('./pages/...'))`
4. Enable compression on server

## Continuous Deployment

The `.github/workflows/build-deploy.yml` automatically:
- Builds on push to main/develop
- Runs linting checks
- Tests build process
- Deploys to Vercel/Netlify on main branch push

To enable:
1. Set `VERCEL_TOKEN` and `NETLIFY_AUTH_TOKEN` secrets in GitHub
2. Configure `VERCEL_PROJECT_ID` and `NETLIFY_SITE_ID`
3. Push to main branch triggers automatic deployment

## Custom Domain Setup

### For Vercel

1. In Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records (CNAME or A record)
4. Wait for verification

### For Netlify

1. In Site Settings → Domain Management → Custom Domains
2. Add domain
3. Update DNS records
4. Wait for verification

### DNS Configuration

For domain `kodawave.com`:

**CNAME Record** (preferred):
```
subdomain: www
value: your-deployment.vercel.app (or netlify.app)
```

**A Record** (if CNAME not available):
```
subdomain: @
value: IP address provided by platform
```

## Rollback Procedure

### Vercel
1. Dashboard → Deployments
2. Click "..." on previous deployment
3. Select "Redeploy"

### Netlify
1. Site Overview → Deploys
2. Click on previous deploy
3. Click "Publish deploy"

## Monitoring & Analytics

Integrate these services for monitoring:

1. **Sentry** - Error tracking
2. **Vercel Analytics** - Performance metrics
3. **Google Analytics** - User behavior
4. **New Relic** - Application performance

## Support

For deployment issues:

- Vercel Support: https://vercel.com/support
- Netlify Support: https://support.netlify.com
- GitHub Pages: https://docs.github.com/en/pages

---

Last Updated: April 6, 2026
