# Design Guidelines: Software Engineer Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear (typography and spacing), Stripe (minimal elegance), and Vercel (developer-focused aesthetics). The design prioritizes tactile interactions, whitespace, and readability with performance-minded minimalism.

## Core Design Principles
- **Minimal & Elegant**: Prioritize whitespace and readable typography
- **Tactile & Interactive**: Microinteractions that feel responsive and deliberate
- **Performance-First**: GPU-optimized animations, respect reduced motion preferences
- **Accessibility-Driven**: WCAG 2.1 AA compliance throughout

---

## Typography System

**Font Stack**:
- Headings: Inter (700, 600, 500 weights)
- Body: Inter (400, 500 weights)
- Code: JetBrains Mono (monospace for code snippets)

**Hierarchy**:
- Hero Heading: 4xl (mobile) → 6xl (desktop), font-bold, tracking-tight
- Section Headings: 2xl (mobile) → 4xl (desktop), font-semibold
- Subheadings: xl → 2xl, font-medium
- Body Text: base → lg, font-normal, leading-relaxed
- Captions/Meta: sm → base, font-medium, tracking-wide

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of 4, 8, 12, 16, 20, 24 consistently
- Component padding: p-8 (mobile) → p-16 (desktop)
- Section vertical spacing: py-16 (mobile) → py-24 (desktop)
- Card spacing: p-6 → p-8
- Grid gaps: gap-6 → gap-8

**Container Strategy**:
- Max-width: max-w-7xl for content sections
- Full-bleed: w-full for hero and feature sections
- Prose: max-w-prose for blog content (optimal reading width)

**Responsive Grid**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3 columns for projects/skills (lg:grid-cols-3)

---

## Component Library

### Navigation
- Sticky header with backdrop blur (backdrop-blur-md)
- Desktop: Horizontal nav with smooth scroll anchors
- Mobile: Hamburger → Full-screen overlay with staggered nav item animations
- Active section indicator: Thin progress bar at top (h-1, animated width)
- Focus states: 2px offset ring with primary accent

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Animated typing effect for role description: "Hi — I'm Somto, I build web apps."
- Subheadline with concise value proposition
- CTA button group: "View Work" (primary), "Download CV" (secondary), "Contact" (outline)
- Buttons on hero background: Blurred background (backdrop-blur-lg, bg-white/10), no hover state changes
- Subtle animated background (particle system or gradient mesh) with reduced motion variant

### About/Story Section
- Two-column layout (desktop): Bio text + Skills visualization
- Interactive career timeline: Vertical line with milestone nodes, hover/click reveals details
- Timeline nodes: Rounded markers with connecting lines, animated reveal on scroll
- Skill bars: Radial progress indicators showing proficiency (0-100%), animated on viewport entry

### Skills/Tech Stack Panel
- Grid of tech cards (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Each card: Icon, tech name, proficiency bar, years of experience
- Hover microinteraction: Subtle 3D tilt (rotateX/Y), elevation shadow increase
- Proficiency visualization: Linear gradient progress bar with percentage label

### Projects/Portfolio Grid
- Filter bar: Chip-style buttons (frontend, backend, full-stack, open source, freelance)
- Active filter: Filled background with primary accent, inactive: outline style
- Animated filter transition: Staggered card reveal with spring physics
- Project cards: Cover image, tech tags (small pills), title, short description
- Card hover: 3D transform tilt + elevation (translateZ, shadow-2xl)
- Card aspect ratio: 16:9 for cover images with object-cover

### Project Modal/Case Study
- Full-screen overlay with backdrop blur (backdrop-blur-sm, bg-black/50)
- Modal container: Max-width container with rounded corners, shadow-2xl
- Entrance animation: Scale up (0.95 → 1) + fade in with spring physics
- Structure: Problem → Approach → Solution sections with clear visual separation
- Screenshot gallery: Horizontal scroll on mobile, grid on desktop
- Code snippets: Syntax-highlighted blocks with copy button, rounded borders
- Metrics display: Stats grid with large numbers, descriptive labels below
- Action buttons: "View Live Demo", "View Repository" with external link icons
- Close button: Top-right X with focus ring, returns focus to triggering card

### Blog/Notes (if applicable)
- Index page: Card grid with featured image, title, excerpt, tags, date
- Article page: Single column with max-w-prose, larger typography for readability
- Tag system: Clickable pills with filter functionality
- Code blocks: Dark theme with line numbers, copy functionality

### Testimonials
- Horizontal carousel with navigation arrows
- Each testimonial: Quote text, author name/title, company logo
- Animated scroll reveal: Fade up with stagger delay
- Logo strip: Grayscale on default, color on hover

### Contact Section
- Two-column layout (desktop): Form + Contact information/map
- Form fields: Name, Email, Subject, Message (textarea)
- Field styling: Rounded borders, focus state with accent ring, floating labels
- Submit button: Full-width on mobile, auto-width on desktop with loading state
- Validation: Inline error messages below fields, red border on invalid
- Success state: Replace form with confirmation message and checkmark icon
- Contact info sidebar: Email, phone, social links (LinkedIn, GitHub), Calendly embed
- "Download CV" button: Secondary style with download icon

### Footer
- Minimal height (py-12)
- Three-column layout (desktop): Navigation links, social icons, tech stack badge
- Mobile: Stacked single column
- Copyright notice: Small text, muted color
- Links to sitemap and privacy policy

---

## Animation Guidelines

**Framer Motion Implementation**:
- Route transitions: Fade (opacity: 0 → 1) with slight vertical slide (y: 20 → 0)
- Modal entrance: Scale (0.95 → 1) + fade with spring physics (stiffness: 300, damping: 30)
- Scroll reveals: Intersection Observer triggers with stagger children animations
- Card hovers: 3D transform with subtle rotation based on mouse position
- Skill bars: Animate width from 0% to target percentage with easeOut timing
- Filter transitions: Exit (scale down + fade) → Animate layout → Enter (scale up + fade)

**Performance Rules**:
- Only animate transform and opacity (GPU-accelerated)
- Use will-change sparingly on animated elements
- Provide prefers-reduced-motion variant (instant transitions, no decorative animations)

**Reduced Motion Variant**:
- Disable particle background
- Remove 3D transforms and tilts
- Instant transitions (duration: 0)
- Keep essential feedback (focus states, form validation)

---

## Accessibility Requirements

- Semantic HTML structure: header, nav, main, section, article, footer
- Skip-to-content link (visually hidden, appears on focus)
- Keyboard navigation: All interactive elements reachable via Tab, logical focus order
- Focus visible: 2px offset ring with high contrast (ring-2 ring-offset-2)
- Color contrast: 4.5:1 minimum for body text, 3:1 for large text
- Alt text: Descriptive for content images, empty for decorative
- ARIA labels: For icon-only buttons, form fields, carousel controls
- Form validation: aria-invalid and aria-describedby for error messages
- Motion toggle: Accessible preference switch in header or footer

---

## Images

**Hero Section**:
- Large hero background: Abstract gradient mesh or subtle particle system (can be CSS-generated)
- No photographic hero image unless profile photo is included (subtle, top-right or left position)

**Project Cards**:
- Cover images: 1200x675px (16:9 aspect ratio), WebP/AVIF optimized
- Screenshots in modals: Multiple device mockups showing responsive design
- Example images: Application interface, code editor views, deployment dashboards

**About Section**:
- Optional profile photo: Circular crop, 400x400px minimum, positioned beside bio text
- Timeline illustrations: Simple iconography for milestone markers (education, career moves)

**Tech Stack**:
- Technology logos: SVG format, 48x48px icons in consistent style (outlined or filled)

**Testimonials**:
- Company logos: Grayscale by default, 150px width, maintain aspect ratio
- Optional client headshots: Small circular images, 80x80px

**Image Treatment**:
- All images: Lazy loading, srcset for responsive sizes
- Rounded corners: rounded-lg for cards, rounded-full for profile images
- Hover effects: Subtle scale (1 → 1.05) with smooth transition

---

## Visual Hierarchy & Balance

**Section Structure**:
- Clear visual separation between sections (border-t or background color alternation)
- Consistent vertical rhythm: py-16 (mobile) → py-24 (desktop)
- Section headings: Left-aligned with bottom border accent or centered with decorative element

**Content Density**:
- Hero: Minimal, focused on primary message
- Projects: Medium density with breathing room between cards
- Skills: High density grid, organized by categories
- Contact: Low density, emphasis on form clarity

**Call-to-Action Hierarchy**:
- Primary CTA: Filled button with accent color, shadow on hover
- Secondary CTA: Outlined button with accent border
- Tertiary actions: Text links with underline on hover

This comprehensive design system ensures a cohesive, accessible, and performant portfolio website that showcases technical expertise through thoughtful interactions and elegant visual design.