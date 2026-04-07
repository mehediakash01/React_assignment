# LuminaStudio - Digital Growth Solutions Website

A full-stack React website built with Vite, Tailwind CSS, and modern web technologies. This professional service-oriented website showcases digital solutions including web development, SEO optimization, online advertising, and booking management systems.

## Features

✓ Responsive Design - Mobile-first approach for all devices
✓ Modern UI/UX - Clean, professional interface with custom gradient styling
✓ Smooth Animations - Framer Motion integration for engaging interactions
✓ Full-Stack Routing - React Router v7 for seamless navigation
✓ Component-Based Architecture - Reusable, maintainable component structure
✓ Tailwind CSS - Utility-first CSS framework for rapid UI development
✓ SEO Optimized - Meta tags and semantic HTML structure
✓ Performance Optimized - Optimized build size and fast load times

## Pages

- **Home** - Hero section, service overview, benefits, client logos, testimonials, CTA
- **Services** - Detailed service descriptions, pricing packages, feature comparison
- **About** - Company vision, team profiles, achievements, success metrics, statistics
- **Blog** - Article listing with categories, authors, publication dates
- **Contact** - Contact form, location information, business hours, response time info

## Tech Stack

- React 19.2.4 - UI library
- Vite 8.0.4 - Build tool and development server
- Tailwind CSS 3.3.0 - Utility-first CSS framework
- Framer Motion - Animation library
- Lucide React - Icon library
- React Router DOM 7.14.0 - Client-side routing
- PostCSS - CSS processing

## Project Structure

```
react_assignment/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ServiceOverview.jsx
│   │       ├── Benefits.jsx
│   │       ├── ClientLogos.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Pricing.jsx
│   │       └── ContactCTA.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── index.html
└── package.json
```

## Getting Started

### Prerequisites

Node.js 16+ and npm 7+ installed

### Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/React_assignment.git
cd React_assignment
```

Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:
```bash
npm run dev
```

Navigate to http://localhost:5173/ in your browser.

### Building for Production

Build the optimized production bundle:
```bash
npm run build
```

The build output will be in the dist/ directory.

Preview the production build locally:
```bash
npm run preview
```

## Deployment

This project can be deployed to:

- **Vercel** - Recommended for React/Vite projects
- **Netlify** - Simple drag-and-drop or GitHub integration
- **GitHub Pages** - Static hosting option

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Choose the project and framework as "React"
3. Vercel automatically detects Vite configuration
4. Deployment triggers automatically on push to main branch

### Netlify Deployment

1. Open https://app.netlify.com/
2. Drag and drop the dist/ folder, or
3. Connect your GitHub repository for automatic deployments

## Key Components

### Header/Navigation
- Responsive mobile menu
- Smooth link transitions
- Brand logo with gradient styling

### Footer
- Company info and social links
- Service and company link sections
- Contact information with icons

### Hero Section
- Eye-catching headline and subheading
- Call-to-action buttons
- Gradient background with SVG graphics

### Service Sections
- Icon-based service cards
- Service details pages with features
- Pricing comparison tiers

### Blog Section
- Article cards with images
- Category badges
- Read more links with icons

### Contact Section
- Responsive contact form
- Business hours and contact info
- Embedded location map

## Design Philosophy

### Color Palette
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Dark: #0f172a
- Light: #f8fafc

### Typography
- Clean, modern sans-serif fonts
- Responsive font scaling
- Proper hierarchy and contrast

### Animation
- Subtle scroll animations
- Smooth hover effects
- Framer Motion transitions
- Performance optimized

## Performance Optimization

- Code Splitting - Automatic with Vite
- Tree Shaking - Unused code removal
- Lazy Loading - Image and component optimization
- Minification - Production build compression
- Responsive Images - Mobile-first approach

## ESLint Configuration

The project includes ESLint for code quality:
```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create feature branch (git checkout -b feature/amazing-feature)
3. Commit changes (git commit -m 'Add amazing feature')
4. Push to branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes

## Contact

For inquiries about this project:
- Email: hello@luminastudio.com
- Phone: +1 (555) 123-4567
- Location: 123 Innovation Street, Tech City, TC 12345

## Version

v1.0.0 - Core website with all functionality

## Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Animated with Framer Motion
- Icons from Lucide React
- Design inspired by modern SaaS websites

## Future Enhancements

- Blog search and filtering
- Client testimonial carousel
- Advanced form validation
- Multi-language support
- Dark mode toggle
- Email newsletter subscription integration
- Payment gateway integration for services
- Admin dashboard for content management

---

**Last Updated:** April 6, 2026


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
