# Quick Start Guide

## Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm 7+ installed
- Git installed

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/React_assignment.git
cd React_assignment
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Navigate to http://localhost:5173 in your browser. Hot module reloading is enabled!

### Step 4: Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Project Structure Overview

```
src/
  ├── components/          # Reusable components
  │   ├── common/         # Header, Footer
  │   └── sections/       # Page sections
  ├── pages/              # Full page components
  ├── hooks/              # Custom React hooks
  ├── utils/              # Utility functions
  ├── data/               # Static content data
  ├── App.jsx             # Main app with routing
  └── index.css           # Global styles
```

## Common Commands

```bash
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build
npm run lint             # Check code quality
npm run lint:fix         # Auto-fix issues
npm run format           # Format code
```

## Key Features Explained

### 1. Routing
- React Router v7 handles all page navigation
- Routes defined in `src/App.jsx`
- Add new pages in `src/pages/` directory

### 2. Styling
- Tailwind CSS utility classes
- Mobile-first responsive design
- Custom colors in `tailwind.config.js`

### 3. Animations
- Framer Motion for smooth animations
- Pre-built animation patterns in components
- Scroll visibility animations

### 4. Components
All components use consistent patterns:
```jsx
import { motion } from 'framer-motion';

export default function Component() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

## Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: "#your-color",
  secondary: "#your-color",
}
```

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `Header.jsx`

### Update Content
Edit `src/data/content.js` to update:
- Blog posts
- Team members
- Testimonials
- Statistics

### Modify Contact Information
Update in multiple places:
- `src/components/common/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/data/content.js`

## Troubleshooting

### Dev server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails
```bash
npm run lint:fix
npm run build
```

### Changes not reflecting
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh page (Ctrl+F5 or Cmd+Shift+R)
- Restart dev server

## Deploy to Production

### Vercel (30 seconds)
1. Push to GitHub
2. Go to vercel.com/new
3. Select repository
4. Click "Deploy"

### Netlify (1 minute)
1. Go to netlify.com
2. Drag and drop `dist/` folder, OR
3. Connect GitHub and auto-deploy

See `DEPLOYMENT.md` for detailed instructions.

## Tips & Best Practices

- Use `className` instead of inline styles
- Keep components small and focused
- Export components as default exports
- Use semantic HTML elements
- Test on mobile devices
- Use `npm run format` before committing

## Environment Variables

Create `.env.local` from `.env.example`:
```
VITE_ENVIRONMENT=development
VITE_CONTACT_EMAIL=your@email.com
```

Access in code:
```jsx
import.meta.env.VITE_CONTACT_EMAIL
```

## Performance Optimization

Current scores:
- Production JS: 397KB (gzip: 124KB)
- CSS: 4.18KB (gzip: 1.64KB)
- Fully optimized for mobile and desktop

## Next Steps

1. **Customize Content**
   - Update company info
   - Add real images
   - Modify colors and branding

2. **Test Thoroughly**
   - All pages on mobile/tablet/desktop
   - All links work
   - Forms validate
   - No console errors

3. **Setup Analytics**
   - Add Google Analytics
   - Setup error tracking
   - Monitor performance

4. **Deploy**
   - Choose Vercel or Netlify
   - Setup custom domain
   - Enable SSL
   - Monitor live site

## Getting Help

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment help
- Read `CONTRIBUTING.md` for development guidelines
- Visit `PROJECT_SUMMARY.md` for project overview

## Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- React Router: https://reactrouter.com
- Framer Motion: https://www.framer.com/motion

---

**Start building!** Your production-ready React website is ready to customize and deploy.
