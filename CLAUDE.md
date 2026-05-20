# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Instructions for Opus (Third Round: UI/UX Overhaul)

**Model:** Claude Opus 4.7 (required for this task)  
**Task Type:** Complete UI/UX redesign with typography, color, dynamics, performance, and responsiveness  
**Status:** Ready for implementation  

### Third Round Scope (Opus Implementation)

This round transforms the portfolio from functional to premium through comprehensive UI/UX overhaul. Use Claude Code global skills: `/ui-ux-pro-max`, `/frontend-design`, `/web-design-guidelines` for guidance.

---

## Project Overview

**Unified Platform for Kevin Galeano's Professional Activities** - A dual-purpose website serving two distinct lines of business:

1. **Personal Portfolio** - Showcases Kevin Alexander Galeano Barbosa's experience as a specialized rescue firefighter, instructor, and humanitarian worker (15+ years). Includes professional history timeline, photo gallery of rescue operations and expeditions.

2. **Colombia Vertical** - A recreational and professional arborism organization. Features integrated YouTube videos (documentary and trailer), adventure/climbing gallery section, and team information.

**Client Details:**
- **Name**: Kevin Alexander Galeano Barbosa
- **Primary Role**: Rescatista (rescue specialist), Bombero (firefighter), Instructor
- **Secondary Line**: Colombia Vertical (arborism activities - Note: "arborismo" in Spanish, not "arbolismo")
- **Media Assets**: 
  - Colombia Vertical Logo: `/public/fundacionColombiaVertical.jpg`
  - YouTube Documentary: https://youtu.be/m4rjfOJspfs?si=99No4DYrvHDtDBPZ
  - YouTube Trailer: https://youtu.be/iMnyO3NEhEY?feature=shared
  - Cloudinary Folder: `kgb` (organized internally for both lines of business)

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
- `/` - Home page: Hero section with video background, contact info, scroll-reveal video section with pulsing scroll icon, Colombia Vertical button
- `/colombia-vertical` - Landing page for Colombia Vertical (single-view microsite with hero, mission, services, videos, contact)
- `/gallery` - Photo gallery with masonry layout (Cloudinary images + new Videos section)
- `/experience` - Timeline of professional experience and humanitarian work
- `/p/[photoId]` - Individual photo detail view with modal

### Core Components

**Layout Components:**
- `NavBar` (JSX) - Fixed navigation with icon links (experience, home, gallery) + WhatsApp button
- `Footer` (JSX + CSS Module) - Fixed footer showing at bottom of scroll
- `Social` (JSX + CSS Module) - Social media icons with improved visual styling for better interactivity

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

## Second Round Work (Colombia Vertical Integration)

### Scope & Requirements

**New Features for Home (/)**
- Add pulsing scroll-down icon in hero to invite scrolling
- Implement scroll-reveal video section below hero (smooth entrance animations)
- Embed YouTube videos: Documentary (main) + Trailer (secondary) with responsive aspect ratio
- Add button with Colombia Vertical logo in hero (top-left or accessible location) linking to `/colombia-vertical`
- Add WhatsApp button in hero (links to +57 3003485579)

**New Page: Colombia Vertical (/colombia-vertical)**
- Single-view landing page (no pagination)
- Hero section with Colombia Vertical branding
- Mission/Description section about arborism activities
- Services/Activities overview
- Embedded YouTube videos section (same as portfolio home but organized differently)
- Photo gallery section (using Cloudinary images)
- Team/Contact section with WhatsApp CTA
- Footer matching main site styling

**Gallery Page Enhancements (/gallery)**
- Add "Videos" tab/section alongside existing photo gallery
- Display YouTube videos in embeddable format within gallery context
- Maintain same responsiveness and styling as photo gallery

**Navigation Updates**
- Add WhatsApp button to NavBar (floating icon or nav element)
- Ensure nav works seamlessly across both portfolio and Colombia Vertical pages

**UI/Visual Improvements**
- Enhance social media icons with better hover effects, animations, and visual distinction
- Ensure color consistency: indigo/orange palette across all new sections
- Test on mobile, tablet, and desktop viewports

**Cloudinary Organization**
- Maintain `kgb` folder structure with internal organization:
  - `kgb/portfolio/` - Portfolio photos (rescue operations, experience)
  - `kgb/colombia-vertical/` - Colombia Vertical photos and adventure content

**Optional Enhancement**
- Create hidden API endpoint or private upload link for Kevin to add images to Colombia Vertical folder via API

### Priority Order
1. Colombia Vertical landing page (`/colombia-vertical`) - foundational new page
2. YouTube video integration in home (scroll-reveal section + pulsing icon)
3. Gallery Videos section
4. NavBar/Hero WhatsApp button
5. Social icons visual improvements
6. Cloudinary folder reorganization

### Terminology Note
- Use **"arborismo"** (not "arbolismo") for all references to tree climbing / recreational arborism activities

---

## Third Round: UI/UX Premium Redesign (OPUS TASK)

### Overview
Transform portfolio from functional to premium. Comprehensive redesign touching typography, color palette, component dynamics, navigation performance, responsive breakpoints, and visual polish. This is NOT incremental refinement — it is a complete visual transformation while preserving functionality.

### Phase 1 — Typography & Global Styling

**Typography Overhaul:**
- Audit current font stacks (currently using system defaults)
- Implement premium font pairing: consider Google Fonts or system fonts with better hierarchy
- Establish clear type scale: H1, H2, H3, body, caption with consistent line-height and letter-spacing
- Apply typography across ALL pages (pages/index.tsx, pages/colombia-vertical/index.tsx, pages/gallery/index.tsx, pages/experience/index.tsx)
- Ensure WCAG AA contrast on all text + backgrounds
- Mobile typography must be readable at all breakpoints (test at 320px, 375px, 768px, 1024px, 1280px)

**Color Palette Expansion:**
- Current: indigo (#4F46E5) + orange (#EA580C) + black/transparent
- Expand to include:
  - Accent neutrals: zinc-200, zinc-300, zinc-600, zinc-700, zinc-800, zinc-900
  - Accent colors: purple-500, teal-500, amber-500 (optional, use sparingly)
  - Gradient possibilities: indigo→purple, orange→amber (for backgrounds, buttons, hover states)
  - Dark mode consideration: all text on black must be white or zinc-100 minimum
- Document final palette in `tailwind.config.js` as custom theme colors
- Apply consistently across all pages and components

### Phase 2 — Component Dynamics & Interactions

**Button Redesign (CRITICAL):**
- Current buttons are "presets of Tailwind" — too generic
- Design original, innovative button styles:
  - Primary action buttons: indigo/orange gradient backgrounds, smooth transitions
  - Secondary buttons: bordered with gradient text or border animation
  - Tertiary buttons: minimal, text-only with underline or slide animation
  - Hover states: scale, glow, color shift, shadow expansion (use Framer Motion or CSS)
  - Active/pressed states: visual feedback (inset shadow, opacity shift)
  - Disabled states: muted, pointer-events-none
- Apply to ALL buttons: contact CTA buttons, tab switches, navigation, modals, forms
- Ensure 44px minimum touch target on mobile

**Micro-interactions & Dynamics:**
- Use Framer Motion (already installed) for:
  - Page transitions (fade + slide on route change)
  - Scroll-reveal animations (already on home, enhance across all pages)
  - Button hover states (not just scale, add depth/shadow)
  - Icon animations (spinning, pulsing, morphing)
  - Staggered list animations
- Add smooth transitions to all color/background changes (300ms-500ms)
- Parallax or depth effects on scroll (optional, if performance allows)
- Test animations at 60fps on mobile devices

**Modal & Overlay Polish:**
- Modal backdrop should have slight blur + dark tint
- Modal entrance: smooth scale + fade (not sudden appearance)
- Close button should be visible and accessible
- Keyboard navigation (ESC to close, Tab through elements)

### Phase 3 — Navigation & Performance

**Navigation Speed:**
- Measure current Core Web Vitals (LCP, FID, CLS) using Lighthouse
- Optimize image delivery: ensure all images use Next.js Image component with proper sizing
- Code splitting: ensure Modal and other dynamic imports are properly cached
- Lazy load off-screen content (gallery images, bottom-of-page sections)
- Service worker for offline support (optional, if time allows)
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Navigation Flow:**
- Smooth page transitions (no jarring hard reloads)
- Loading states on navigation (skeleton screens or spinners)
- Breadcrumb or progress indicator on multi-step flows (if applicable)
- Quick access menu or search (optional enhancement)

### Phase 4 — Responsive Design (Mobile-First)

**Breakpoints & Testing:**
- Test at: 320px (iPhone SE), 375px (iPhone 12), 768px (iPad), 1024px (iPad Pro), 1280px (desktop)
- Ensure NO horizontal scrolling at any breakpoint
- Touch targets: minimum 44x44px (all buttons, links, interactive elements)
- Text size: minimum 16px on mobile (avoid zoom requirement)
- Spacing: consistent gutters (16px mobile, 24px tablet, 32px desktop)

**Mobile-Specific Enhancements:**
- Hamburger menu or mobile nav if navbar gets crowded (currently OK with 5 icons)
- Optimize images for mobile (use responsive srcSet in Image components)
- Ensure forms are mobile-friendly (large inputs, mobile keyboard support)
- Swipe gestures for gallery (already supported via modal)

**Tablet Optimization:**
- Leverage extra screen space (use 2-column layouts where appropriate)
- Ensure touch-friendly navigation
- Test on landscape orientation

### Phase 5 — Home Page Hero Redesign

**Current State Issues:**
- White logo in card is visually heavy and breaks design intent
- NavBar icons for Colombia Vertical and WhatsApp should not be global nav (contextual placement better)

**New Hero Layout:**
```
Hero Section (full viewport, BackgroundVideo):
  - Main content: Kevin's name + title (centered or left-aligned, your choice)
  - Bottom Right: Custom WhatsApp SVG icon button (floating, animated on hover)
  - Bottom Left: Colombia Vertical SVG logo/button (floating, animated on hover)
  - Pulsing scroll-down chevron (already exists, enhance animation)
  - Remove the white background card with Colombia Vertical logo
  - NO white logos on hero — use floating SVG icons instead
```

**WhatsApp SVG Icon:**
- Create original WhatsApp icon SVG faithful to brand (green circle, white phone icon)
- Colors: #25D366 (WhatsApp green) for background, white for icon
- Size: 60-80px diameter
- Position: `fixed` or `absolute` bottom-right corner of hero (with 24px margin from edges on mobile)
- Hover state: scale up, add glow/shadow, slight rotation
- Click action: opens `https://wa.me/573003485579`
- On scroll down: fades out or becomes sticky floating button (your preference based on design)

**Colombia Vertical SVG Icon:**
- Convert `/public/fundacionColombiaVertical.jpg` to SVG (hand-trace or use auto-vectorizer)
- Remove white background (transparent or use only the logo mark)
- Size: 60-80px
- Position: `absolute` bottom-left corner of hero (with 24px margin from edges)
- Hover state: scale, rotate, glow effect
- Click action: scrolls to videos section OR navigates to `/colombia-vertical`
- On scroll down: fades out (unless you want sticky behavior)

**Hero Content:**
- Typography: Large, premium font for Kevin's name (H1 equivalent)
- Subtitle: "Bombero • Rescatista • Instructor" with custom styling
- Remove contact buttons from hero (move to separate section or keep if design allows)
- Keep Social icons if they fit, otherwise move to footer
- Ensure readable on all devices (test text wrapping at 375px)

### Phase 6 — Home Page Scroll Section Redesign

**Current Issue:**
- "Colombia Vertical en Acción" section has too much text/info mixed with videos
- Should be video-focused, minimal text

**New Design:**
```
[User scrolls down past hero]
Section Header: "Colombia Vertical en Acción" (minimal, large typography)
Video Grid: Documentary + Trailer side-by-side (desktop), stacked (mobile)
CTA Button: "Conoce más de Colombia Vertical" (redesigned original button style)
[No other Colombia Vertical text/info in this section]
```

- Animations: Videos slide in on scroll reveal (enhance current Framer Motion setup)
- Button: Use new button design from Phase 2
- Remove duplicate info — videos + minimal text only

### Phase 7 — Colombia Vertical Page Analysis & Images

**Transcription Review:**
- Review Kevin's original audio transcriptions about Colombia Vertical
- Extract key themes: mission, activities, target audience, USP
- Incorporate these into page copy naturally
- Ensure terminology is "arborismo" throughout

**Image Strategy:**
- Home hero: KEEP current BackgroundVideo (Cloudinary video)
- Experience page: KEEP current images
- Colombia Vertical hero: New image (Cloudinary or public) showing arborism activity
- Colombia Vertical about: Different image (forest canopy, climber, equipment)
- Colombia Vertical services: Grid of 3-4 images (one per service category)
- Colombia Vertical videos: Section as-is
- Colombia Vertical contact: Closing image (team, activity, or landscape)
- Gallery: Mix of portfolio images + Colombia Vertical images (organized by folder in Cloudinary)

**Image Sources:**
- Cloudinary folder: `kgb/` (ask user if new images have been uploaded)
- Public folder: `/public/` (fallback for placeholder images)
- Ensure all images use Next.js `<Image>` component with proper `width`, `height`, `priority`, `loading="lazy"`
- Optimize for different screen sizes using `sizes` prop

### Phase 8 — NavBar Simplification

**Changes:**
- Remove `/experience`, `/gallery`, `/colombia-vertical` text-based navigation from icon bar (currently using icons)
- KEEP icon navigation BUT remove the leaf icon (Colombia Vertical) and WhatsApp icon from NavBar
- Reasoning: These are now in hero buttons (WhatsApp + Colombia Vertical SVG), no need for global nav redundancy
- NavBar should have: Experience icon, Home icon, Gallery icon (3 items max)
- Consider adding a theme toggle or other utility if space allows

### Phase 9 — Gallery Enhancements

**Tab Switcher:**
- Current: Basic indigo button styling
- New: Use redesigned button styles from Phase 2
- Ensure "Fotos" tab shows photo grid, "Videos" tab shows YouTube embeds
- Mobile: Ensure tab switcher is finger-friendly (44px height)

**Photo Grid:**
- Enhance loading states (skeleton screens or blur-up effect already with blur placeholder)
- Add image filters/effects on hover (slight brightness increase, subtle scale)
- Ensure responsive columns: 1 (mobile), 2 (tablet), 3-4 (desktop)

### Phase 10 — Experience Page Enhancement

**Current State:**
- Timeline with images is functional
- KEEP existing images and layout structure

**Enhancements:**
- Apply new typography hierarchy
- Ensure timeline animation works smoothly on mobile
- Add subtle background images or textures (optional, if it enhances not clutters)
- Ensure color contrast on timeline elements (circles, borders, text)

### Phase 11 — Global Accessibility & Performance Checklist

**Accessibility:**
- Run Lighthouse audit on all pages
- Ensure WCAG AA contrast on all text (use WebAIM contrast checker)
- Add `aria-label` to all icon buttons
- Ensure keyboard navigation works on all pages (Tab, Enter, ESC)
- Test with screen reader (nvda or JAWS simulation)
- Form inputs: proper labels, error messages, focus states

**Performance:**
- Audit bundle size (check Next.js build output)
- Ensure no unused CSS/Tailwind classes
- Test on slow 4G network (Chrome DevTools throttling)
- Measure and improve LCP, FID, CLS
- Target: Lighthouse score >= 90 on all pages

**Browser Compatibility:**
- Test on Chrome, Firefox, Safari, Edge
- Ensure no console errors or warnings
- Polyfill any ES6+ features if targeting older browsers

---

## Implementation Strategy for Opus

**Approach:**
1. Start with Phase 1 (typography + colors) — this is foundational
2. Build component library in Phase 2 (buttons, animations)
3. Apply globally to all pages (Phase 3-10)
4. Test end-to-end (Phase 11)

**Tools & Resources:**
- `/ui-ux-pro-max` skill: Use for color palette suggestions, typography pairings, button design inspiration
- `/frontend-design` skill: Use for layout decisions, responsive grid, whitespace
- `/web-design-guidelines` skill: Use for accessibility compliance, performance optimization
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS: Extend config with custom colors/theme
- Next.js Image: Use throughout for optimization
- Lighthouse: Run frequently to measure performance

**Deliverables:**
- All pages visually transformed with premium typography and colors
- Original button designs used throughout (not Tailwind presets)
- WhatsApp + Colombia Vertical SVG icons in hero
- Scroll section with videos only (minimal text)
- Images on all pages (distinct per view)
- NavBar simplified (3 icons only)
- Mobile-first responsive design (tested at 320px, 375px, 768px, 1280px)
- Performance metrics: Lighthouse >= 90
- Accessibility: WCAG AA contrast + keyboard navigation

**Final Verification:**
- `npm run build` — no errors
- `npm run dev` — all pages load smoothly
- Manual testing on actual mobile devices (iPhone, Android)
- Lighthouse audit on each page
- Cross-browser testing

## Notes for Future Development

- Always test gallery pagination and modal navigation on actual mobile devices, not just browser dev tools
- When modifying Cloudinary transformations, rebuild to regenerate blur placeholders
- The experience timeline data is currently English descriptions - consider i18n if expanding
- Social media links are hardcoded; consider externalizing to a config file
- Consider adding a CMS or headless backend if content management becomes complex
- Colombia Vertical page should handle YouTube video embeds responsively (use iframe with aspect ratio containers)
- Ensure all new WhatsApp links use proper formatting: `https://wa.me/573003485579` or similar
- Test YouTube embed responsiveness on mobile - ensure videos don't overflow container
