# Cloudflare Pages Deployment Guide

## Prerequisites

1. ✅ Domena: `rafalniski.dev` (już wykupiona przez Cloudflare)
2. ✅ Projekt gotowy do buildowania
3. ✅ GitHub/GitLab repository (opcjonalne, ale zalecane)

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to **Pages** in the sidebar

2. **Create a new project**
   - Click **"Create a project"**
   - Choose **"Connect to Git"** (if you have GitHub/GitLab repo)
     OR
   - Choose **"Upload assets"** (if deploying manually)

3. **If connecting to Git:**
   - Authorize Cloudflare to access your repository
   - Select your repository: `portfolio-website`
   - Configure build settings:
     - **Framework preset:** Vite
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Root directory:** `/` (leave empty)

4. **Environment Variables:**
   - Go to **Settings** → **Environment variables**
   - Add production variable:
     - **Variable name:** `VITE_GA_MEASUREMENT_ID`
     - **Value:** `G-FRMQCJ4LLV`
     - **Environment:** Production (and Preview if you want)

5. **Custom Domain:**
   - Go to **Custom domains**
   - Add `rafalniski.dev`
   - Cloudflare will automatically configure DNS

6. **Deploy:**
   - Click **"Save and Deploy"**
   - Cloudflare will build and deploy automatically

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   wrangler pages deploy dist --project-name=portfolio-website
   ```

## Important Configuration

### Build Settings (if using Git integration):
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18 or higher (Cloudflare auto-detects)

### Environment Variables Required:
- `VITE_GA_MEASUREMENT_ID=G-FRMQCJ4LLV` (must be set in Cloudflare Pages dashboard)

### DNS Configuration:
Cloudflare should automatically configure DNS when you add the custom domain. Verify:
- A record pointing to Cloudflare Pages
- CNAME for www (if needed)

## Post-Deployment Checklist

1. ✅ Verify site loads at `https://rafalniski.dev`
2. ✅ Test all links (Play Store, Toptal, GitHub, LinkedIn)
3. ✅ Test contact form
4. ✅ Verify Google Analytics is tracking (check GA4 dashboard)
5. ✅ Test mobile responsiveness
6. ✅ Verify OG image displays correctly (use https://www.opengraph.xyz/)
7. ✅ Check favicon displays correctly
8. ✅ Test dark/light theme toggle

## Troubleshooting

### Build fails:
- Check Node version (should be 18+)
- Verify `package.json` has correct build script
- Check build logs in Cloudflare dashboard

### Analytics not working:
- Verify `VITE_GA_MEASUREMENT_ID` is set in environment variables
- Check browser console for errors
- Verify GA4 measurement ID is correct

### Images not loading:
- Ensure all images are in `public/` directory
- Check image paths are correct (should start with `/assets/...`)

## What I Need From You

To help you deploy, I need:

1. **Git Repository URL** (if using Git integration):
   - GitHub: `https://github.com/yourusername/portfolio-website`
   - Or let me know if you want to push to GitHub first

2. **Or if deploying manually:**
   - Just confirm and I'll prepare the `dist/` folder for upload

3. **Access to Cloudflare Dashboard:**
   - You'll need to do the actual deployment (I can't access your Cloudflare account)
   - But I can guide you through every step

## Next Steps

1. **If you have Git repo:** Push your code to GitHub/GitLab, then follow Option 1
2. **If no Git repo:** Build locally (`npm run build`) and upload `dist/` folder via Cloudflare dashboard
3. **Set environment variable** `VITE_GA_MEASUREMENT_ID` in Cloudflare Pages settings
4. **Add custom domain** `rafalniski.dev` in Cloudflare Pages

Let me know which option you prefer and I'll guide you through it!
