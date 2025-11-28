# 🚀 Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional, for version control)

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd NTRO
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:

- Next.js 14+
- React 18+
- Tailwind CSS
- Framer Motion
- And more...

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page will auto-reload when you make changes.

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

### 2. Start Production Server

```bash
npm start
```

## Available Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start development server at `localhost:3000` |
| `npm run build` | Build for production                         |
| `npm start`     | Start production server                      |
| `npm run lint`  | Run ESLint to check code quality             |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout wrapper
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar with scroll tracking
│   ├── HeroSection.tsx     # Hero section with typewriter animation
│   ├── AboutSection.tsx    # About section with bio
│   ├── SkillsSection.tsx   # Skills grid with proficiency bars
│   ├── ProjectsSection.tsx # Projects showcase with cards
│   ├── TimelineSection.tsx # Experience timeline
│   ├── AchievementsSection.tsx # Certifications and awards
│   ├── ContactSection.tsx  # Contact form and social links
│   ├── Footer.tsx          # Footer with links
│   ├── LoadingScreen.tsx   # Initial loading animation
│   └── AnimatedText.tsx    # Typewriter text component
└── ...

public/               # Static assets (images, files)
tailwind.config.ts   # Tailwind CSS configuration
package.json         # Dependencies and scripts
next.config.js       # Next.js configuration
tsconfig.json        # TypeScript configuration
README.md            # Full documentation
```

## Customization

### Update Your Information

1. **Hero Section** - Edit `src/components/HeroSection.tsx`

   - Update headline and description
   - Modify resume link

2. **About Section** - Edit `src/components/AboutSection.tsx`

   - Update bio text
   - Modify achievements

3. **Skills** - Edit `src/components/SkillsSection.tsx`

   - Add/remove skills
   - Adjust proficiency levels

4. **Projects** - Edit `src/components/ProjectsSection.tsx`

   - Update project details
   - Add project images
   - Modify links

5. **Experience** - Edit `src/components/TimelineSection.tsx`

   - Add work experience
   - Add education

6. **Contact** - Edit `src/components/ContactSection.tsx`
   - Update email and location
   - Add social media links

### Change Colors

Edit `tailwind.config.ts`:

```typescript
neon: {
  cyan: '#00d9ff',
  pink: '#ff00ff',
  purple: '#9d4edd',
  blue: '#3a86ff',
}
```

### Modify Animations

Edit `src/app/globals.css` for global animations or component files for specific animations.

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click Deploy

### Deploy to Netlify

1. Run: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder

### Deploy to GitHub Pages

1. Add to `next.config.js`:

```javascript
const nextConfig = {
  output: "export",
};
```

2. Run: `npm run build`
3. Upload `out/` folder to GitHub Pages

## Environment Variables

Create `.env.local` file (optional for contact form):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
```

Copy `.env.example` as a template:

```bash
cp .env.example .env.local
```

## Troubleshooting

### Build Errors

**Clear cache and rebuild:**

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use

**Use different port:**

```bash
npm run dev -- -p 3001
```

### Styling Issues

**Rebuild Tailwind:**

```bash
npm run dev
```

### Module Not Found Errors

**Reinstall dependencies:**

```bash
rm package-lock.json
npm install
```

## Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Code Splitting**: Leverage Next.js automatic code splitting
3. **Lazy Loading**: Use dynamic imports for heavy components
4. **CSS Optimization**: Tailwind automatically purges unused CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Mobile Optimization

The portfolio is fully responsive:

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

Test on actual devices before deployment!

## SEO

The portfolio includes:

- Meta tags and descriptions
- Open Graph tags
- Structured markup ready
- Fast performance for good rankings

## Next Steps

1. Customize content with your information
2. Add your project images
3. Update resume PDF
4. Configure contact form
5. Test responsiveness
6. Deploy to Vercel

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

## License

MIT License - Feel free to use for your portfolio!

---

**Happy deploying! 🚀**
