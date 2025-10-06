# Design Guidelines - Made With Love KC

## Executive Summary

This document establishes comprehensive design guidelines for Made With Love KC, a Kansas City-based handmade goods business transitioning from Instagram-centric to full e-commerce platform. The guidelines are based on brand analysis, user research, and e-commerce best practices.

## 1. Brand Analysis & Design Foundation

### 1.1 Brand Identity Discovery

**Business Profile Analysis:**
- **Business Name**: Made With Love KC
- **Instagram**: @made.withlovekc (2,847 followers)
- **Mission**: Kansas City handmade goods & custom creations supporting local artists
- **Values**: Community, craftsmanship, KC pride, authenticity
- **Target Audience**: KC locals, sports fans, handmade goods enthusiasts

**Visual Identity Elements:**
- **Logo**: Anatomical heart with "MADE WITH LOVE" text
- **Color Psychology**: Pink/red heart suggests passion, love, warmth
- **Brand Personality**: Authentic, community-focused, passionate, local

### 1.2 Competitive Analysis

**Kansas City E-commerce Landscape:**
- Local businesses emphasize KC pride and community connection
- Sports team merchandise (Chiefs, Royals, Sporting KC) is popular
- Handmade/custom goods market values authenticity and local connection
- Social proof and community testimonials drive conversions

**Design Opportunities:**
- Emphasize local KC connection and community stories
- Showcase handmade process and craftsmanship
- Create emotional connection through KC pride and local love
- Build trust through customer testimonials and behind-scenes content

### 1.3 User Experience Goals

**Primary Goals:**
1. **Trust Building**: Establish credibility for handmade goods
2. **Community Connection**: Foster KC pride and local identity
3. **Product Discovery**: Easy browsing of custom and handmade items
4. **Conversion Optimization**: Streamlined purchase process
5. **Mobile-First**: Instagram audience expects mobile-optimized experience

## 2. Design Token System

### 2.1 Color Palette

```css
/* Primary Brand Colors */
--color-primary: 220 38% 46%;        /* KC Blue (#3B82C4) */
--color-primary-foreground: 210 40% 98%; /* White */

--color-secondary: 0 84% 60%;        /* KC Red (#E53E3E) */
--color-secondary-foreground: 0 0% 100%; /* White */

--color-accent: 330 81% 60%;         /* Love Pink (#E91E63) */
--color-accent-foreground: 0 0% 100%; /* White */

/* Neutral Colors */
--color-background: 0 0% 100%;      /* Pure White */
--color-foreground: 222.2 84% 4.9%;  /* Dark Gray */
--color-muted: 210 40% 96%;          /* Light Gray */
--color-muted-foreground: 215.4 16.3% 46.9%; /* Medium Gray */
--color-border: 214.3 31.8% 91.4%;   /* Border Gray */

/* Semantic Colors */
--color-success: 142 76% 36%;        /* Success Green */
--color-warning: 38 92% 50%;         /* Warning Orange */
--color-destructive: 0 84% 60%;      /* Error Red */
--color-info: 199 89% 48%;           /* Info Blue */

/* KC Theme Colors */
--color-kc-blue: 220 38% 46%;        /* Kansas City Blue */
--color-kc-red: 0 84% 60%;           /* Kansas City Red */
--color-chiefs-red: 0 100% 50%;      /* Chiefs Red */
--color-royals-blue: 200 100% 30%;   /* Royals Blue */
```

### 2.2 Typography Scale

```css
/* Font Families */
--font-primary: 'Inter', system-ui, -apple-system, sans-serif;
--font-heading: 'Poppins', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### 2.3 Spacing System

```css
/* Spacing Scale (based on 4px grid) */
--space-0: 0;
--space-1: 0.25rem;      /* 4px */
--space-2: 0.5rem;       /* 8px */
--space-3: 0.75rem;      /* 12px */
--space-4: 1rem;         /* 16px */
--space-5: 1.25rem;      /* 20px */
--space-6: 1.5rem;       /* 24px */
--space-8: 2rem;         /* 32px */
--space-10: 2.5rem;      /* 40px */
--space-12: 3rem;        /* 48px */
--space-16: 4rem;        /* 64px */
--space-20: 5rem;        /* 80px */
--space-24: 6rem;        /* 96px */
--space-32: 8rem;        /* 128px */
--space-40: 10rem;        /* 160px */
--space-48: 12rem;        /* 192px */
--space-56: 14rem;        /* 224px */
--space-64: 16rem;        /* 256px */
```

### 2.4 Border Radius & Shadows

```css
/* Border Radius */
--radius-none: 0;
--radius-sm: 0.125rem;    /* 2px */
--radius-base: 0.25rem;   /* 4px */
--radius-md: 0.375rem;    /* 6px */
--radius-lg: 0.5rem;      /* 8px */
--radius-xl: 0.75rem;     /* 12px */
--radius-2xl: 1rem;       /* 16px */
--radius-3xl: 1.5rem;     /* 24px */
--radius-full: 9999px;

/* Box Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

### 2.5 Animation & Transitions

```css
/* Transition Durations */
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;

/* Transition Timing Functions */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Animation Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
```

## 3. Layout System

### 3.1 Breakpoint System

```css
/* Responsive Breakpoints */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */

/* Container Max Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### 3.2 Grid System

```css
/* CSS Grid Layouts */
--grid-cols-1: repeat(1, minmax(0, 1fr));
--grid-cols-2: repeat(2, minmax(0, 1fr));
--grid-cols-3: repeat(3, minmax(0, 1fr));
--grid-cols-4: repeat(4, minmax(0, 1fr));
--grid-cols-6: repeat(6, minmax(0, 1fr));
--grid-cols-12: repeat(12, minmax(0, 1fr));

/* Gap Sizes */
--gap-0: 0;
--gap-1: 0.25rem;
--gap-2: 0.5rem;
--gap-3: 0.75rem;
--gap-4: 1rem;
--gap-6: 1.5rem;
--gap-8: 2rem;
--gap-12: 3rem;
--gap-16: 4rem;
```

### 3.3 Component Spacing

```css
/* Component-Specific Spacing */
--header-height: 4rem;           /* 64px */
--footer-height: 8rem;           /* 128px */
--sidebar-width: 16rem;          /* 256px */
--sidebar-width-collapsed: 4rem; /* 64px */

/* Content Areas */
--content-padding-x: 1rem;       /* 16px */
--content-padding-y: 2rem;       /* 32px */
--section-padding-y: 5rem;       /* 80px */

/* Card Spacing */
--card-padding: 1.5rem;          /* 24px */
--card-gap: 1rem;                /* 16px */
```

## 4. Component Design Patterns

### 4.1 Button System

```css
/* Button Variants */
.btn-primary {
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-foreground));
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: var(--font-medium);
  transition: all var(--duration-200) var(--ease-in-out);
}

.btn-secondary {
  background-color: hsl(var(--color-secondary));
  color: hsl(var(--color-secondary-foreground));
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: var(--font-medium);
  transition: all var(--duration-200) var(--ease-in-out);
}

.btn-outline {
  background-color: transparent;
  color: hsl(var(--color-primary));
  border: 2px solid hsl(var(--color-primary));
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-weight: var(--font-medium);
  transition: all var(--duration-200) var(--ease-in-out);
}

/* Button Sizes */
.btn-sm { padding: 0.5rem 1rem; font-size: var(--text-sm); }
.btn-lg { padding: 1rem 2rem; font-size: var(--text-lg); }
.btn-xl { padding: 1.25rem 2.5rem; font-size: var(--text-xl); }
```

### 4.2 Card System

```css
/* Card Base */
.card {
  background-color: hsl(var(--color-background));
  border: 1px solid hsl(var(--color-border));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--card-padding);
  transition: all var(--duration-300) var(--ease-in-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* Card Variants */
.card-product {
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.card-testimonial {
  background-color: hsl(var(--color-muted));
  border: none;
}

.card-featured {
  border: 2px solid hsl(var(--color-accent));
  box-shadow: var(--shadow-lg);
}
```

### 4.3 Form Elements

```css
/* Input Fields */
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid hsl(var(--color-border));
  border-radius: var(--radius-md);
  background-color: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
  font-size: var(--text-base);
  transition: all var(--duration-200) var(--ease-in-out);
}

.input:focus {
  outline: none;
  border-color: hsl(var(--color-primary));
  box-shadow: 0 0 0 3px hsl(var(--color-primary) / 0.1);
}

/* Labels */
.label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: hsl(var(--color-foreground));
  margin-bottom: 0.5rem;
}
```

## 5. Site Architecture & Navigation

### 5.1 Site Map Structure

```
Made With Love KC Website
├── Home (/)
│   ├── Hero Section
│   ├── Featured Products
│   ├── Instagram Feed
│   ├── About Preview
│   └── Customer Testimonials
│
├── Products (/products)
│   ├── Product Categories
│   │   ├── Apparel (/products/apparel)
│   │   ├── Accessories (/products/accessories)
│   │   ├── Home Decor (/products/home)
│   │   └── Custom Orders (/products/custom)
│   ├── Product Detail Pages (/products/[slug])
│   └── Product Search & Filters
│
├── Gallery (/gallery)
│   ├── Instagram Posts Feed
│   ├── Behind the Scenes
│   ├── Customer Photos
│   └── Event Coverage
│
├── About (/about)
│   ├── Our Story
│   ├── KC Community Impact
│   ├── Handmade Process
│   └── Meet the Team
│
├── Custom Orders (/custom)
│   ├── Custom Design Process
│   ├── Request Form
│   ├── Portfolio Examples
│   └── Pricing Guide
│
├── Events (/events)
│   ├── KC Love Event
│   ├── Local Markets
│   ├── Pop-up Shops
│   └── Community Events
│
├── Contact (/contact)
│   ├── Contact Form
│   ├── Location & Hours
│   ├── Social Media Links
│   └── FAQ
│
├── Cart (/cart)
│   ├── Cart Items
│   ├── Quantity Adjustments
│   ├── Shipping Calculator
│   └── Checkout Button
│
├── Checkout (/checkout)
│   ├── Customer Information
│   ├── Shipping Details
│   ├── Payment Method
│   └── Order Summary
│
├── Account (/account)
│   ├── Order History
│   ├── Wishlist
│   ├── Address Book
│   └── Account Settings
│
└── Admin (/admin)
    ├── Dashboard
    ├── Product Management
    ├── Order Management
    ├── Instagram Sync
    ├── Analytics
    └── Content Management
```

### 5.2 Navigation Structure

**Primary Navigation:**
- Home
- Products (dropdown)
- Gallery
- About
- Custom Orders
- Contact

**Secondary Navigation:**
- Cart (with item count)
- Account/Login
- Search

**Footer Navigation:**
- Quick Links
- Product Categories
- Customer Service
- Social Media
- Newsletter Signup

### 5.3 Page Hierarchy

**Level 1 - Main Pages:**
- Home, Products, Gallery, About, Custom, Contact

**Level 2 - Category Pages:**
- Products/Apparel, Products/Accessories, Products/Home, Products/Custom

**Level 3 - Detail Pages:**
- Individual Product Pages, Blog Posts, Event Details

**Level 4 - Utility Pages:**
- Cart, Checkout, Account, Search Results

## 6. Responsive Design Strategy

### 6.1 Mobile-First Approach

**Breakpoint Strategy:**
1. **Mobile (320px - 639px)**: Single column, stacked layout
2. **Tablet (640px - 1023px)**: Two-column grid, expanded navigation
3. **Desktop (1024px+)**: Multi-column layout, full navigation

**Mobile Considerations:**
- Touch-friendly button sizes (minimum 44px)
- Thumb-friendly navigation placement
- Optimized image loading and compression
- Simplified checkout process
- Instagram-style product browsing

### 6.2 Content Prioritization

**Above the Fold (Mobile):**
- Hero image with clear value proposition
- Primary CTA button
- Featured product showcase
- Trust indicators (testimonials, reviews)

**Progressive Disclosure:**
- Collapsible navigation menus
- Expandable product details
- Lazy-loaded content sections
- Progressive image enhancement

## 7. Performance & Accessibility

### 7.1 Performance Targets

**Core Web Vitals:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

**Image Optimization:**
- WebP format with JPEG fallback
- Responsive images with srcset
- Lazy loading for below-fold content
- Progressive enhancement

### 7.2 Accessibility Standards

**WCAG 2.1 AA Compliance:**
- Color contrast ratio minimum 4.5:1
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Alt text for all images
- Semantic HTML structure

**Inclusive Design:**
- Multiple ways to access content
- Clear error messages
- Consistent navigation patterns
- Readable typography
- Touch target sizing

## 8. Implementation Guidelines

### 8.1 Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        // ... other colors
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Custom spacing values
      },
      borderRadius: {
        // Custom border radius values
      },
      boxShadow: {
        // Custom shadow values
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### 8.2 Component Development Standards

**Atomic Design Methodology:**
- **Atoms**: Buttons, inputs, labels, icons
- **Molecules**: Search bars, product cards, navigation items
- **Organisms**: Headers, product grids, forms
- **Templates**: Page layouts, content structures
- **Pages**: Complete page implementations

**Naming Conventions:**
- PascalCase for React components
- kebab-case for CSS classes
- camelCase for JavaScript variables
- SCREAMING_SNAKE_CASE for constants

### 8.3 Quality Assurance

**Design Review Checklist:**
- [ ] Brand consistency across all pages
- [ ] Responsive behavior at all breakpoints
- [ ] Accessibility compliance
- [ ] Performance optimization
- [ ] Cross-browser compatibility
- [ ] Content accuracy and completeness

**Testing Strategy:**
- Visual regression testing
- Accessibility testing with screen readers
- Performance testing with Lighthouse
- Cross-browser testing
- Mobile device testing
- User acceptance testing

---

This design system provides a comprehensive foundation for building a professional, accessible, and conversion-optimized e-commerce website for Made With Love KC. The guidelines ensure consistency, maintainability, and scalability while reflecting the brand's authentic Kansas City identity and community-focused values.


