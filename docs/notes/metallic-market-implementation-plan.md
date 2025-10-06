# Metallic Market Design Tokens & Implementation Plan
*CSS design tokens and implementation strategy for Made With Love KC*

## Design Tokens

### Color Palette
```css
:root {
  /* Primary Brand Colors */
  --color-primary-pink: #FF69B4;        /* Hot Pink - Primary brand accent */
  --color-primary-pink-light: #FFB3D9; /* Light Pink - Hover states */
  --color-primary-pink-dark: #E91E63;   /* Dark Pink - Active states */
  
  /* Neutral Colors */
  --color-white: #FFFFFF;               /* Pure White - Primary background */
  --color-black: #000000;               /* Pure Black - Primary text */
  --color-gray-50: #F8F8F8;            /* Light Gray - Header backgrounds */
  --color-gray-100: #F0F0F0;           /* Very Light Gray - Subtle backgrounds */
  --color-gray-200: #E0E0E0;           /* Light Gray - Borders */
  --color-gray-300: #CCCCCC;           /* Medium Gray - Input borders */
  --color-gray-400: #999999;            /* Medium Gray - Placeholder text */
  --color-gray-500: #666666;            /* Dark Gray - Secondary text */
  --color-gray-600: #333333;            /* Dark Gray - Primary text on light */
  --color-gray-700: #1A1A1A;           /* Very Dark Gray - Headers */
  
  /* Accent Colors */
  --color-red: #FF0000;                 /* Bright Red - Notifications, alerts */
  --color-red-dark: #CC0000;            /* Dark Red - SOLD OUT badges */
  --color-green: #00AA00;               /* Success Green - Positive states */
  --color-orange: #FF6600;              /* Warning Orange - Caution states */
  
  /* Semantic Colors */
  --color-success: var(--color-green);
  --color-warning: var(--color-orange);
  --color-error: var(--color-red);
  --color-info: #0066CC;                /* Info Blue */
}
```

### Typography System
```css
:root {
  /* Font Families */
  --font-family-sans: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;
  --font-family-serif: 'Playfair Display', 'Georgia', serif;
  --font-family-script: 'Dancing Script', cursive;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;      /* 12px - Badges, small text */
  --font-size-sm: 0.875rem;    /* 14px - Captions, disclaimers */
  --font-size-base: 1rem;       /* 16px - Body text */
  --font-size-lg: 1.125rem;    /* 18px - Large body text */
  --font-size-xl: 1.25rem;     /* 20px - Small headings */
  --font-size-2xl: 1.5rem;     /* 24px - Medium headings */
  --font-size-3xl: 1.875rem;   /* 30px - Large headings */
  --font-size-4xl: 2.25rem;    /* 36px - Hero headings */
  --font-size-5xl: 3rem;       /* 48px - Display headings */
  --font-size-6xl: 3.75rem;    /* 60px - Large display */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

### Spacing Scale
```css
:root {
  /* Spacing Scale (based on 4px grid) */
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-8: 2rem;        /* 32px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-32: 8rem;       /* 128px */
  --space-40: 10rem;      /* 160px */
  --space-48: 12rem;      /* 192px */
  --space-56: 14rem;      /* 224px */
  --space-64: 16rem;      /* 256px */
}
```

### Border Radius
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-base: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 0.75rem;     /* 12px */
  --radius-2xl: 1rem;       /* 16px */
  --radius-3xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;    /* Fully rounded */
}
```

### Shadows
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-none: 0 0 #0000;
}
```

### Z-Index Scale
```css
:root {
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  --z-index-toast: 1080;
}
```

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Animation & Transitions
```css
:root {
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
  
  /* Custom Easing */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

## Component-Specific Tokens

### Button Tokens
```css
:root {
  /* Button Sizes */
  --btn-height-sm: 2rem;        /* 32px */
  --btn-height-md: 2.5rem;      /* 40px */
  --btn-height-lg: 3rem;        /* 48px */
  --btn-height-xl: 3.5rem;      /* 56px */
  
  /* Button Padding */
  --btn-padding-x-sm: var(--space-3);
  --btn-padding-x-md: var(--space-4);
  --btn-padding-x-lg: var(--space-6);
  --btn-padding-x-xl: var(--space-8);
  
  /* Button Border Radius */
  --btn-radius-sm: var(--radius-sm);
  --btn-radius-md: var(--radius-md);
  --btn-radius-lg: var(--radius-lg);
}
```

### Form Tokens
```css
:root {
  /* Input Heights */
  --input-height-sm: 2rem;
  --input-height-md: 2.5rem;
  --input-height-lg: 3rem;
  
  /* Input Padding */
  --input-padding-x: var(--space-3);
  --input-padding-y: var(--space-2);
  
  /* Input Border */
  --input-border-width: 1px;
  --input-border-color: var(--color-gray-300);
  --input-border-color-focus: var(--color-primary-pink);
  --input-border-radius: var(--radius-md);
}
```

### Card Tokens
```css
:root {
  /* Card Padding */
  --card-padding-sm: var(--space-4);
  --card-padding-md: var(--space-6);
  --card-padding-lg: var(--space-8);
  
  /* Card Border Radius */
  --card-radius-sm: var(--radius-md);
  --card-radius-md: var(--radius-lg);
  --card-radius-lg: var(--radius-xl);
  
  /* Card Shadow */
  --card-shadow-sm: var(--shadow-sm);
  --card-shadow-md: var(--shadow-md);
  --card-shadow-lg: var(--shadow-lg);
}
```

## Implementation Plan for Made With Love KC

### Phase 1: Foundation Setup (Week 1)

#### 1.1 Update Global CSS Variables
- **File**: `src/app/globals.css`
- **Action**: Replace existing CSS variables with Metallic Market-inspired tokens
- **Focus**: Color palette, typography, spacing, and basic component tokens

#### 1.2 Font Integration
- **Action**: Add Google Fonts imports for Inter, Playfair Display, and Dancing Script
- **Implementation**: Update font-family variables in CSS
- **Testing**: Verify font loading and fallbacks

#### 1.3 Color System Integration
- **Action**: Update Tailwind config to use new color tokens
- **Implementation**: Map new colors to existing KC brand colors where appropriate
- **Migration**: Gradually replace existing color usage

### Phase 2: Component Updates (Week 2)

#### 2.1 Button Component Redesign
- **File**: `src/components/ui/button.tsx`
- **Updates**:
  - Add new button variants (pink primary, ghost, outline)
  - Implement new sizing system
  - Add hover and focus states
  - Update color schemes

#### 2.2 Card Component Enhancement
- **File**: `src/components/ui/card.tsx`
- **Updates**:
  - Implement new shadow system
  - Add product card specific variants
  - Update border radius and padding
  - Add hover animations

#### 2.3 Form Components
- **Files**: `src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`
- **Updates**:
  - Implement new input styling
  - Add focus states with pink accent
  - Update placeholder styling
  - Implement validation states

### Phase 3: Layout & Navigation (Week 3)

#### 3.1 Header Component
- **File**: `src/components/layout/Header.tsx`
- **Updates**:
  - Implement light gray header background
  - Add top promotional bar
  - Update navigation styling
  - Add utility icons (search, account, cart)
  - Implement notification badges

#### 3.2 Footer Component
- **File**: `src/components/layout/Footer.tsx`
- **Updates**:
  - Implement three-column layout
  - Add social media integration
  - Update typography hierarchy
  - Add newsletter signup section

#### 3.3 Responsive Navigation
- **Implementation**: Mobile hamburger menu
- **Testing**: Cross-device navigation functionality
- **Accessibility**: Keyboard navigation and screen reader support

### Phase 4: Product Display System (Week 4)

#### 4.1 Product Card Component
- **File**: `src/components/sections/ProductCard.tsx`
- **Updates**:
  - Implement pink background product images
  - Add "SOLD OUT" badge system
  - Update typography hierarchy
  - Add hover animations
  - Implement consistent aspect ratios

#### 4.2 Product Grid Layout
- **File**: `src/components/sections/FeaturedProducts.tsx`
- **Updates**:
  - Implement 4-column responsive grid
  - Add filter and sort functionality
  - Update spacing and layout
  - Add loading states

#### 4.3 Product Page Layout
- **File**: `src/app/products/[slug]/page.tsx`
- **Updates**:
  - Implement large product images
  - Add size guide integration
  - Update pricing display
  - Add social proof elements

### Phase 5: Interactive Elements (Week 5)

#### 5.1 Modal System
- **New Component**: `src/components/ui/modal.tsx`
- **Features**:
  - Email subscription modal
  - Product quick view
  - Image gallery modal
  - Accessibility features

#### 5.2 Notification System
- **Implementation**: Toast notifications
- **Features**: Cart updates, form validation, success messages
- **Styling**: Consistent with brand colors

#### 5.3 Loading States
- **Implementation**: Skeleton screens for products
- **Features**: Smooth loading animations
- **Performance**: Optimized for perceived performance

### Phase 6: E-commerce Features (Week 6)

#### 6.1 Shopping Cart
- **Updates**: Persistent cart icon with badge
- **Features**: Slide-out cart panel, item management
- **Styling**: Consistent with new design system

#### 6.2 Checkout Flow
- **Implementation**: Streamlined checkout process
- **Features**: Form validation, payment integration
- **Styling**: Clean, minimal design

#### 6.3 User Account
- **Features**: Registration, login, order history
- **Styling**: Consistent with overall design

### Phase 7: Content & Messaging (Week 7)

#### 7.1 Brand Voice Implementation
- **Updates**: Update copy throughout the site
- **Features**: Friendly, conversational tone
- **Examples**: "Hey KC, hey!", playful product descriptions

#### 7.2 Social Proof Integration
- **Features**: Customer reviews, testimonials
- **Implementation**: Star ratings, customer photos
- **Styling**: Consistent with brand aesthetic

#### 7.3 Newsletter Integration
- **Features**: Email signup with 15% discount
- **Implementation**: Modal and footer signup
- **Styling**: Pink accent, friendly messaging

### Phase 8: Performance & Optimization (Week 8)

#### 8.1 Image Optimization
- **Implementation**: WebP format with JPEG fallbacks
- **Features**: Lazy loading, responsive images
- **Performance**: Optimized loading times

#### 8.2 CSS Optimization
- **Implementation**: Critical CSS inlining
- **Features**: Unused CSS removal
- **Performance**: Faster initial page loads

#### 8.3 JavaScript Optimization
- **Implementation**: Code splitting
- **Features**: Lazy loading of components
- **Performance**: Reduced bundle sizes

### Phase 9: Testing & Refinement (Week 9)

#### 9.1 Cross-Browser Testing
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Features**: Visual consistency, functionality
- **Issues**: Bug fixes and adjustments

#### 9.2 Accessibility Audit
- **Tools**: Lighthouse, Axe DevTools
- **Features**: Screen reader compatibility, keyboard navigation
- **Compliance**: WCAG 2.1 AA standards

#### 9.3 Performance Testing
- **Tools**: Lighthouse, WebPageTest
- **Metrics**: Core Web Vitals, loading times
- **Optimization**: Performance improvements

### Phase 10: Launch Preparation (Week 10)

#### 10.1 Content Migration
- **Features**: Product data, images, copy
- **Testing**: Content accuracy and formatting
- **Backup**: Original content preservation

#### 10.2 SEO Optimization
- **Features**: Meta tags, structured data
- **Implementation**: Search engine optimization
- **Testing**: SEO audit and validation

#### 10.3 Analytics Integration
- **Features**: Google Analytics, conversion tracking
- **Implementation**: Event tracking setup
- **Testing**: Data accuracy verification

## Specific Implementation Details

### CSS Custom Properties Integration
```css
/* Update globals.css with new tokens */
@layer base {
  :root {
    /* Import new color system */
    --kc-primary-pink: var(--color-primary-pink);
    --kc-primary-pink-light: var(--color-primary-pink-light);
    --kc-primary-pink-dark: var(--color-primary-pink-dark);
    
    /* Update existing KC colors to match new system */
    --kc-blue: #0066CC;        /* Keep existing KC blue */
    --kc-red: #CC0000;         /* Update to match new red */
    --love-pink: var(--color-primary-pink); /* Map to new pink */
    
    /* Typography updates */
    --font-primary: var(--font-family-sans);
    --font-heading: var(--font-family-serif);
    --font-script: var(--font-family-script);
  }
}
```

### Tailwind Config Updates
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-pink': 'var(--color-primary-pink)',
        'primary-pink-light': 'var(--color-primary-pink-light)',
        'primary-pink-dark': 'var(--color-primary-pink-dark)',
        // ... other color mappings
      },
      fontFamily: {
        'sans': ['var(--font-family-sans)'],
        'serif': ['var(--font-family-serif)'],
        'script': ['var(--font-family-script)'],
      },
      spacing: {
        // Map to new spacing scale
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        // ... etc
      }
    }
  }
}
```

### Component Migration Strategy
1. **Start with foundational components** (buttons, inputs, cards)
2. **Update layout components** (header, footer, navigation)
3. **Enhance product components** (product cards, grids, pages)
4. **Add interactive elements** (modals, notifications, animations)
5. **Implement e-commerce features** (cart, checkout, account)
6. **Optimize and test** (performance, accessibility, cross-browser)

This implementation plan provides a structured approach to adopting the Metallic Market design system while maintaining the unique Kansas City branding and ensuring a smooth transition for existing users.
