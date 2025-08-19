# 🚀 Deploy to Vercel - Complete Guide

## 📋 Quick Start (5 minutes)

### Step 1: Go to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account

### Step 2: Import Your Project

1. Click "New Project"
2. Select your repository: `UCSD-Course-Reccomendation`
3. Vercel will auto-detect it's a Vite project

### Step 3: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

```
VITE_SUPABASE_URL=https://snrkourgqlpkketqlgte.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your app will be live at: `https://your-project-name.vercel.app`

## 🔧 Detailed Configuration

### Project Settings (Auto-detected by Vercel):

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables Required:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 🌐 Your Live URLs

After deployment:

- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-branch.vercel.app` (for each branch)

## 🔄 Continuous Deployment

Every time you push to GitHub:

1. Vercel automatically detects changes
2. Builds your project
3. Deploys to production
4. Sends email notifications

## 🎯 What You Get

✅ **Free Hosting**: No cost for personal projects
✅ **Custom Domain**: Add your own domain
✅ **SSL Certificate**: Automatic HTTPS
✅ **CDN**: Global content delivery
✅ **Analytics**: Built-in performance monitoring
✅ **99.9% Uptime**: Reliable hosting

## 🔍 Troubleshooting

### Build Fails?

1. Check build logs in Vercel dashboard
2. Test locally: `npm run build`
3. Ensure all dependencies are in `package.json`

### Environment Variables Not Working?

1. Make sure variables start with `VITE_`
2. Check Vercel dashboard settings
3. Redeploy after adding variables

### 404 Errors?

1. Vercel auto-configures SPA routing
2. Check `vercel.json` configuration
3. Ensure all routes point to `index.html`

## 📊 Post-Deployment Checklist

- [ ] Test user registration/login
- [ ] Test course search functionality
- [ ] Test AI recommendations
- [ ] Test responsive design on mobile
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)

## 🎉 Success!

Your UCSD Course Recommendation System will be live and accessible to users worldwide!

---

**Need help?** Check Vercel documentation or review build logs in the dashboard.
