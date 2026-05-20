# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Kevin Galeano Portfolio** - A personal portfolio website for Kevin Alexander Galeano Barbosa, a specialized rescue firefighter and instructor. The site showcases his experience, professional history, and photo gallery.

**Tech Stack:**
- **Framework**: Next.js 13+ (Pages Router) with React 18
- **Styling**: Tailwind CSS 3 + CSS Modules for specific components
- **Images**: Cloudinary for storage/transformation + Next.js Image component
- **Animations**: Framer Motion 7
- **Icons**: FontAwesome 6 + Heroicons
- **Language**: Mixed TypeScript (.tsx) and JavaScript (.jsx) - migrate to full TypeScript

**Live URL**: `rescatista.vercel.app`

## Common Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build           # Build for production
npm start              # Start production server

# Code Quality
npm run lint           # Run ESLint
```

## Architecture & Project Structure

### Pages Structure
- `/` - Home page: Hero section with video background, name, title, and contact info
- `/gallery` - Photo gallery with masonry layout (Cloudinary images)
- `/experience` - Timeline of professional experience and humanitarian work
- `/p/[photoId]` - Individual photo detail view with modal

### Core Components

**Layout Components:**
- `NavBar` (JSX) - Fixed navigation with icon links (experience, home, gallery)
- `Footer` (JSX + CSS Module) - Fixed footer showing at bottom of scroll
- `Social` (JSX + CSS Module) - Social media icons with hover effects

**Feature Components:**
- `ExperienceCard` - Responsive card for timeline entries (⚠️ uses `typeof window` for mobile detection - should use CSS media queries)
- `Modal` & `SharedModal` - Photo detail modal with navigation
- `Carousel` - Image carousel component
- `ExperienceCard/experiences.ts` - Data file with 8 professional/humanitarian entries

**Icons:**
- Custom SVG icons in `/components/Icons/` (Bridge, Logo, Twitter)

### Data Flow

**Static Generation:**
- Gallery page uses `getStaticProps()` to fetch all images from Cloudinary at build time
- Generates blur placeholder data URLs for each image using `generateBlurPlaceholder.ts`
- Experience data is hardcoded in `components/experienceCard/experiences.ts`

**Client-Side:**
- Modal navigation through URL query params (`?photoId=X`)
- LastViewedPhoto hook maintains scroll position on back navigation
- NavBar scroll event listener for styling changes

### Styling Architecture

- **Tailwind**: Primary utility-first styling in JSX/TSX components
- **CSS Modules**: Footer and Social components use module CSS for scoped styles
- **Inline Styles**: Some components use inline style objects (e.g., video `objectFit`)
- **Global CSS**: Minimal in `styles/index.css` (just Tailwind directives)

### Key Utilities

- `cloudinary.ts` - Cloudinary SDK initialization and helper
- `generateBlurPlaceholder.ts` - Creates base64 blur placeholder for Image components
- `useLastViewedPhoto.ts` - Global state hook for maintaining last viewed photo
- `types.ts` - TypeScript interfaces (ImageProps, etc.)
- `downloadPhoto.ts` - Photo download functionality
- `animationVariants.ts` - Framer Motion animation presets
- `range.ts` - Array utility function

### Environment Variables Required

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>
CLOUDINARY_FOLDER=<folder-path>
```

## Known Issues & Technical Debt

1. **Mobile Detection Antipattern**: `ExperienceCard.tsx` uses `typeof window !== 'undefined' && window.innerWidth < window.innerHeight` instead of CSS media queries
2. **Mixed TypeScript/JavaScript**: Components are a mix of .tsx and .jsx files
3. **Fixed Positioning Conflicts**: NavBar, Footer, and Social components all use `fixed` positioning which can cause layout issues and z-index stacking problems
4. **Image Fallback**: No image error handling or fallback images when Cloudinary fails
5. **TypeScript Strict Mode Disabled**: `tsconfig.json` has `"strict": false` - consider enabling for type safety
6. **Background Videos**: Full-page video backgrounds not optimized for mobile (bandwidth, performance)
7. **Color Scheme**: Predominantly indigo/orange with some inconsistency in secondary colors

## Optimization Priorities

### Performance
- Optimize Cloudinary image transformations for different screen sizes
- Implement responsive video backgrounds or static alternatives for mobile
- Consider lazy loading for Experience page images
- Reduce unused FontAwesome/Heroicons imports (tree-shake)

### Responsiveness & Mobile
- Replace mobile detection logic with CSS media queries
- Test thoroughly on iOS (iPhone, iPad) and Android devices
- Ensure fixed positioned elements don't overlap content on small screens
- Verify touch interactions work smoothly (swipe, scroll)

### SEO/Meta
- Currently minimal meta tags - add Open Graph, Twitter Card, structured data
- Add `canonical` tags if needed
- Image alt text should be more descriptive
- Add `robots.txt` and `sitemap.xml`

### Accessibility
- Ensure color contrast meets WCAG AA standards
- Add proper ARIA labels to icon buttons
- Verify keyboard navigation works throughout site
- Test with screen readers

### Code Quality
- Migrate all JSX components to TSX with strict TypeScript
- Consolidate styling approach (choose between Tailwind only or Tailwind + CSS Modules)
- Unify fixed positioned component behavior or use better layout strategy
- Add fallback images for all external Cloudinary URLs

## Skills Relevant to Future Work

When working on optimization tasks, leverage these Claude Code skills:
- `/nextjs-app-router-patterns` - Next.js best practices and Server Components
- `/vercel-react-best-practices` - React/Next.js performance optimization  
- `/ui-ux-pro-max` - UI/UX design, responsive design, color palettes
- `/web-design-guidelines` - Accessibility and Web Guidelines compliance
- `/seo-audit` - SEO diagnosis and optimization
- `/frontend-design` - High-quality frontend interface design
- `/typescript-advanced-types` - Type safety improvements

## Notes for Future Development

- Always test gallery pagination and modal navigation on actual mobile devices, not just browser dev tools
- When modifying Cloudinary transformations, rebuild to regenerate blur placeholders
- The experience timeline data is currently English descriptions - consider i18n if expanding
- Social media links are hardcoded; consider externalizing to a config file
- Consider adding a CMS or headless backend if content management becomes complex
