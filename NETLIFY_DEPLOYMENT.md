# Netlify Deployment Guide for Aravind GM Portfolio

## Quick Start - Deploy to Netlify

### Option 1: Connect via Netlify UI (Recommended)

1. **Push to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to Netlify**
   - Visit [https://netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository
   - Build settings will be auto-detected from `netlify.toml`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**

   ```bash
   netlify login
   ```

3. **Deploy**

   ```bash
   netlify deploy
   ```

4. **Deploy to Production**
   ```bash
   netlify deploy --prod
   ```

## Build Configuration

The `netlify.toml` file contains:

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Next.js**: Auto-optimized for Netlify

## Environment Variables (if needed)

If your project uses environment variables:

1. Go to Site Settings → Build & Deploy → Environment
2. Add your environment variables
3. Redeploy the site

## Features Included

✅ Animated Hero with Particles Background
✅ Interactive Skill Stack Component
✅ Target Cursor with GSAP
✅ Responsive Design
✅ CV Download/View
✅ Dark Theme with Cyan Accents
✅ Smooth Animations
✅ Mobile Optimized

## Performance Tips

- Images are optimized via Next.js Image component
- Particles use WebGL for smooth rendering
- Framer Motion animations are GPU-accelerated
- CSS is minified and tree-shaken

## Custom Domain (Optional)

1. Purchase domain from registrar (Godaddy, Namecheap, etc.)
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. Update DNS records as per Netlify instructions

## Troubleshooting

**Build fails?**

- Check that all dependencies are installed: `npm install`
- Verify Node.js version matches: `node --version` (should be 18+)
- Clear cache: `npm cache clean --force`

**Site shows 404 errors?**

- Ensure `netlify.toml` redirects are configured
- Clear browser cache (Ctrl+Shift+Delete)

**Performance issues?**

- Check Netlify Analytics
- Optimize images if added
- Reduce particle count in HeroSection if needed

## Support

- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment
- Contact Netlify Support: https://support.netlify.com

---

**Your portfolio is production-ready! 🚀**
