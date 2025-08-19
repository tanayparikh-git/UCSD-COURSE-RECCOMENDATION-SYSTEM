# 🚀 Deploy to Vercel - Step by Step Guide

## 📋 Prerequisites

- GitHub account with your repository pushed
- Vercel account (free)

## 🔧 Deployment Steps

### Step 1: Prepare Your Repository

✅ Your repository is already ready with:

- React/TypeScript frontend
- Vite build configuration
- Environment variables configured
- Build script working

### Step 2: Deploy via Vercel Web Interface

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**: `UCSD-Course-Reccomendation`
5. **Configure project settings**:

#### Project Configuration:

- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (should auto-detect)
- **Output Directory**: `dist` (should auto-detect)
- **Install Command**: `npm install` (should auto-detect)

#### Environment Variables:

Add these in the Vercel dashboard:

```
VITE_SUPABASE_URL=https://snrkourgqlpkketqlgte.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0
```

6. **Click "Deploy"**

### Step 3: Post-Deployment

After deployment:

1. **Your app will be live** at: `https://your-project-name.vercel.app`
2. **Custom domain** (optional): Add your own domain in Vercel settings
3. **Auto-deployments**: Every push to main branch will auto-deploy

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails**:

   - Check if all dependencies are in `package.json`
   - Ensure build script works locally: `npm run build`

2. **Environment Variables**:

   - Make sure all `VITE_*` variables are set in Vercel dashboard
   - Variables must start with `VITE_` to be accessible in frontend

3. **404 Errors**:

   - Vercel should auto-configure SPA routing
   - Check `vercel.json` configuration

4. **Authentication Issues**:
   - Verify Supabase URL and keys are correct
   - Check Supabase project settings

## 🌐 Your Live URLs

After deployment, you'll have:

- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-branch.vercel.app` (for each branch)

## 📊 Monitoring

Vercel provides:

- **Analytics**: Page views, performance metrics
- **Logs**: Build and runtime logs
- **Performance**: Core Web Vitals monitoring
- **Uptime**: 99.9% uptime guarantee

## 🔄 Continuous Deployment

Every time you push to GitHub:

1. Vercel automatically detects changes
2. Builds your project
3. Deploys to production
4. Sends you email notifications

## 🎯 Next Steps

After deployment:

1. **Test all features**: Authentication, course search, AI recommendations
2. **Set up custom domain** (optional)
3. **Configure analytics** (optional)
4. **Set up monitoring** (optional)

## 📞 Support

If you encounter issues:

1. Check Vercel documentation
2. Review build logs in Vercel dashboard
3. Test locally first: `npm run build && npm run preview`

---

**Your UCSD Course Recommendation System will be live in minutes!** 🎉
