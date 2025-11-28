# 🚀 Premium AI/ML Portfolio Website

A modern, fully responsive personal portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Featuring stunning animations, glassmorphism effects, neon accents, and a premium dark theme.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-38b2ac?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178c6?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10+-0055ff?style=flat-square&logo=framer)

## ✨ Features

### 🎨 Design & Animation
- **Dark Theme** with neon/glassmorphism accents
- **Smooth Animations**: Framer Motion transitions, fade, slide, parallax, stagger effects
- **Interactive Elements**: Hover animations, magnetic buttons, animated borders, gradient text
- **Premium Navbar** with smooth scroll and active section highlighting
- **Floating Navigation Bubble** on mobile
- **Loading Screen** with animated logo
- **Dark/Light Mode Toggle**
- **Fully Responsive** for mobile, tablet, and desktop

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interactions
- Adaptive layouts

### 🏠 Sections Included

1. **Hero Section**
   - Bold headline with dynamic text animation
   - Short description
   - Call-to-action buttons (Download Resume, Hire Me)
   - Animated background shapes
   - Scroll indicator

2. **About Section**
   - Professional bio
   - Why work with me highlights
   - Tech stack display
   - Experience & project stats

3. **Skills Section**
   - Organized by categories (Frontend, Backend, AI/ML, DevOps)
   - Animated skill bars with proficiency levels
   - Icon indicators
   - Hover effects

4. **Projects Section**
   - 6 featured projects showcase
   - Project cards with:
     - Thumbnail images
     - Tech stack badges
     - Short descriptions
     - Live Demo & GitHub buttons
     - Lift-up animation on hover
     - Glass blur effect

5. **Experience & Timeline Section**
   - Vertical timeline animation
   - Experience and education cards
   - Slide-in animation on scroll
   - Responsive layout

6. **Achievements Section**
   - Badges and certificates display
   - Achievement cards with icons
   - Statistics showcase
   - Award categories

7. **Contact Section**
   - Contact form with validation
   - Email, location, and social links
   - Working form submission
   - Success/error feedback
   - Social media links

8. **Footer**
   - Social media links
   - Copyright information
   - Scroll to top button
   - Tech stack attribution

## 🛠️ Tech Stack

### Frontend
- **Next.js** 14+ - React framework with App Router
- **React** 18+ - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Advanced animations
- **React Icons** - Icon library
- **Lucide React** - Modern icons

### Development
- **ESLint** - Code linting
- **npm** - Package manager

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step 1: Clone or Download Project
```bash
cd NTRO
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- `framer-motion` - Animation library
- `three` & `@react-three/fiber` - 3D graphics
- `@react-three/drei` - Three.js utilities
- `lottie-react` - Lottie animations
- `react-icons` - Icon library
- `lucide-react` - Modern icon set
- `clsx` - Utility for className combinations
- `tailwind-merge` - Tailwind merge utility

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory (optional for contact form):

```bash
# Optional: For EmailJS contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-reload as you make changes.

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
NTRO/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── HeroSection.tsx    # Hero section
│   │   ├── AboutSection.tsx   # About section
│   │   ├── SkillsSection.tsx  # Skills grid
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── TimelineSection.tsx # Experience timeline
│   │   ├── AchievementsSection.tsx # Achievements
│   │   ├── ContactSection.tsx # Contact form
│   │   ├── Footer.tsx         # Footer
│   │   └── AnimatedText.tsx   # Typewriter animation
│   └── ...
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
├── package.json               # Dependencies
└── README.md
```

## 🎨 Customization Guide

### 1. Update Personal Information
Edit the following files to add your information:

**Hero Section** (`src/components/HeroSection.tsx`):
- Update headline and description
- Modify resume/download link

**About Section** (`src/components/AboutSection.tsx`):
- Update bio and achievements
- Change tech stack

**Skills** (`src/components/SkillsSection.tsx`):
- Add/remove/modify skills
- Adjust proficiency levels

**Projects** (`src/components/ProjectsSection.tsx`):
- Update project details
- Add project images
- Modify links

**Experience** (`src/components/TimelineSection.tsx`):
- Update work experience
- Add education details

**Contact** (`src/components/ContactSection.tsx`):
- Update email and location
- Configure contact form
- Add social media links

### 2. Modify Colors
Edit `tailwind.config.ts` to change the neon colors:

```typescript
colors: {
  neon: {
    cyan: '#00d9ff',      // Change cyan color
    pink: '#ff00ff',      // Change pink color
    purple: '#9d4edd',    // Change purple color
    blue: '#3a86ff',      // Change blue color
  },
}
```

### 3. Adjust Animations
Modify animation speeds and effects in:
- `src/app/globals.css` - Global animations
- Component-specific Framer Motion props
- `tailwind.config.ts` - Keyframes

### 4. Add Resume PDF
Place your resume PDF in the `public` folder:
```
public/
└── resume.pdf
```

Update the link in `src/components/HeroSection.tsx`.

### 5. Update Metadata
Edit `src/app/layout.tsx` to update:
- Page title
- Meta description
- Keywords
- Open Graph tags

### 6. Add Project Images
Replace placeholder images in `ProjectsSection.tsx` with your actual project screenshots.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Drag and drop the .next folder to Netlify
```

#### Manual Deployment
1. Build: `npm run build`
2. Export: `npm run export` (if static)
3. Upload to your hosting

## 🔧 Advanced Configuration

### Add Contact Form Integration

For working contact form, use **Formspree**:
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `ContactSection.tsx`

Or use **EmailJS**:
1. Sign up at [EmailJS](https://www.emailjs.com)
2. Add credentials to `.env.local`
3. Implement in the contact form

### Add 3D Elements

The project includes Three.js support. To add 3D models:

```typescript
import { Canvas } from '@react-three/fiber'
import { Model } from './YourModel'

export default function ThreeDViewer() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  )
}
```

### Enable Dark/Light Mode

The Navbar already has a theme toggle. To fully implement:
1. Use `next-themes` package
2. Wrap app with ThemeProvider
3. Add theme switching logic

## 📊 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ CSS-in-JS with Tailwind (minimal CSS)
- ✅ Lazy loading for images and components
- ✅ Responsive images for different devices

## 🐛 Troubleshooting

### Issue: Animations not playing
**Solution**: Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

### Issue: Styles not applying
**Solution**: Rebuild Tailwind CSS:
```bash
npm run dev
```

### Issue: Responsive design not working
**Solution**: Check viewport meta tag in `layout.tsx`

### Issue: Build fails
**Solution**: Clear cache and reinstall:
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📝 SEO Optimization

The portfolio includes:
- ✅ Meta tags and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Sitemap generation (optional)
- ✅ Structured data markup ready
- ✅ Fast performance for better rankings

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

1. Customize content with your information
2. Replace placeholder images
3. Add your actual projects
4. Configure contact form
5. Test responsiveness on all devices
6. Deploy to Vercel or your hosting
7. Set up custom domain
8. Submit to search engines

## 💡 Tips for Best Results

- Use high-quality project screenshots (1200x800px recommended)
- Keep descriptions concise and impactful
- Update skills and projects regularly
- Test on actual devices before deployment
- Use relative paths for all links
- Keep animations smooth by testing performance

## 🆘 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review component documentation
3. Check official Next.js and Framer Motion docs
4. Open an issue on GitHub

---

**Made with ❤️ by an AI/ML Engineer**

Happy coding! 🚀
