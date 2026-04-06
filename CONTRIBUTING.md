# Contributing to Kodawave

Thank you for your interest in contributing to the Kodawave project! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 18+ (use `nvm install` with `.nvmrc`)
- npm 7+
- Git

### Setup Development Environment

```bash
git clone https://github.com/yourusername/React_assignment.git
cd React_assignment
npm install
npm run dev
```

Navigate to `http://localhost:5173` to see your changes live.

## Code Style

### Naming Conventions

- Components: PascalCase (`Header.jsx`, `ServiceCard.jsx`)
- Hooks: camelCase with `use` prefix (`useScrollVisibility`)
- Utilities: camelCase (`formatDate`, `validateEmail`)
- Constants: UPPER_SNAKE_CASE (`API_TIMEOUT`, `MAX_RETRY_ATTEMPTS`)

### Code Quality

```bash
npm run lint
npm run lint:fix
npm run format
```

We use ESLint for code linting and Prettier for code formatting.

## Commit Message Guidelines

Follow conventional commits format:

```
type(scope): subject

body

footer
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Dependencies, configuration, build scripts
- `ci`: CI/CD configuration changes

Examples:
```
feat(contact): add email validation
fix(routing): prevent unnecessary re-renders
docs(readme): update installation instructions
perf(hero): optimize image loading
```

## Branch Naming Convention

```
type/feature-description
```

Examples:
```
feature/dark-mode-toggle
bugfix/mobile-navigation-issue
docs/deployment-guide
```

## Pull Request Process

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat(component): add new functionality"
```

3. Push to your fork:
```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request with:
   - Clear title describing the changes
   - Description of what was changed and why
   - Link to related issues
   - Screenshot or demo if UI changes

5. Address review comments
6. Ensure CI/CD checks pass

## Development Workflow

### Creating a New Component

1. Create component file in appropriate directory:
```bash
src/components/sections/NewComponent.jsx
```

2. Use component template:
```jsx
import { motion } from 'framer-motion';

export default function NewComponent({ prop1, prop2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

3. Export from component index if needed
4. Update related pages/components
5. Test responsive design

### Adding a New Page

1. Create page file in `src/pages/`:
```bash
src/pages/NewPage.jsx
```

2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Header.jsx`
4. Test all page links

### Styling Guidelines

- Use Tailwind CSS utility classes
- Avoid inline styles
- Use component-level CSS classes when necessary
- Follow mobile-first design approach
- Test on multiple screen sizes

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Content */}
</div>
```

## Testing

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] Props validate correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] All links work correctly
- [ ] Form validation works
- [ ] Animations are smooth
- [ ] No console errors/warnings
- [ ] Accessibility standards met

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Guidelines

- Keep components small and focused
- Memoize expensive computations
- Use dynamic imports for large components
- Optimize images before adding to project
- Monitor bundle size: `npm run build:analyze`

## Documentation

Update documentation for:
- New components (in component files)
- New utilities (in utility functions)
- API changes (in README.md)
- Configuration changes (in DEPLOYMENT.md)

## Accessibility

Ensure all contributions meet accessibility standards:

- [ ] Semantic HTML used
- [ ] ARIA labels where appropriate
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Form inputs labeled
- [ ] Images have alt text

## Common Tasks

### Adding a New Icon

Icons from Lucide React:
```jsx
import { IconName } from 'lucide-react';

<IconName size={24} className="text-primary" />
```

Check available icons: https://lucide.dev/

### Adding a New Color

1. Update `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      newColor: "#hexcode",
    },
  },
}
```

2. Use in components:
```jsx
className="bg-newColor text-newColor border-newColor"
```

### Adding Environment Variables

1. Add to `.env.example`:
```
VITE_NEW_VARIABLE=value
```

2. Use in code:
```jsx
import.meta.env.VITE_NEW_VARIABLE
```

## Reporting Issues

When reporting bugs, include:
- Browser and OS information
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos
- Console errors

## Questions or Need Help?

- Open a GitHub Issue for questions
- Start a Discussion for feature suggestions
- Check existing issues before creating new ones

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Kodawave!
