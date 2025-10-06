# Frontend Development Prompt Plan - Made With Love KC

## Overview

This document provides step-by-step prompts for building the complete frontend of Made With Love KC's e-commerce website. Each prompt is designed to create production-ready components with intelligent mock copy based on our data analysis and e-commerce best practices.

## Phase 1: Foundation & Setup

### Prompt 1.1: Project Configuration & Dependencies

```
Set up the complete Next.js project configuration for Made With Love KC e-commerce website:

1. Install and configure Shadcn UI components:
   - Button, Card, Input, Label, Badge, Avatar, Separator
   - Dialog, Sheet, DropdownMenu, NavigationMenu
   - Tabs, Accordion, Alert, Toast
   - Form components with React Hook Form integration

2. Install additional dependencies:
   - @next/font for Inter and Poppins fonts
   - lucide-react for icons
   - clsx and tailwind-merge for className utilities
   - react-hook-form and @hookform/resolvers for forms
   - zod for validation
   - framer-motion for animations

3. Configure Tailwind CSS with our design tokens:
   - KC Blue (#3B82C4), KC Red (#E53E3E), Love Pink (#E91E63)
   - Custom spacing, typography, and animation scales
   - Responsive breakpoints and container sizes

4. Set up file structure:
   - components/ui/ for Shadcn components
   - components/layout/ for header, footer, navigation
   - components/sections/ for page sections
   - lib/utils.ts for utility functions
   - types/ for TypeScript definitions

Use the design guidelines from __docs/notes/design_guidelines.md for all configuration.
```

### Prompt 1.2: TypeScript Definitions & Data Models

```
Create comprehensive TypeScript definitions for Made With Love KC:

1. Define core data interfaces:
   - Product (name, description, price, images, category, tags, availability)
   - InstagramPost (id, caption, media_urls, hashtags, engagement metrics)
   - Customer (name, email, orders, testimonials)
   - Order (items, total, status, shipping, customer info)

2. Create component prop interfaces:
   - ProductCard, ProductGrid, InstagramGallery
   - NavigationItem, ButtonVariant, CardVariant
   - FormField, ValidationSchema

3. Define API response types:
   - ProductsResponse, PostsResponse, OrdersResponse
   - ErrorResponse, SuccessResponse

4. Create utility types:
   - Category, ProductStatus, OrderStatus
   - Theme, Breakpoint, AnimationType

Base these on the actual data structure from our Instagram scraping results and e-commerce best practices.
```

## Phase 2: Core Layout Components

### Prompt 2.1: Header & Navigation

```
Create a responsive header component for Made With Love KC:

1. Header structure:
   - Logo with "Made With Love KC" text and heart icon
   - Primary navigation: Home, Products, Gallery, About, Custom, Contact
   - Secondary navigation: Cart (with item count), Account, Search
   - Mobile hamburger menu with slide-out navigation

2. Navigation features:
   - Products dropdown with categories (Apparel, Accessories, Home, Custom)
   - Active state indicators
   - Smooth hover animations
   - Mobile-first responsive design

3. Brand elements:
   - Heart icon in KC Red (#E53E3E)
   - Typography: Poppins for logo, Inter for navigation
   - KC pride elements (subtle KC skyline or heart patterns)

4. Interactive elements:
   - Cart icon with badge showing item count
   - Search icon that expands to search bar
   - Account dropdown with login/profile options

Use Shadcn NavigationMenu and Sheet components. Include sticky positioning and backdrop blur effect.
```

### Prompt 2.2: Footer Component

```
Create a comprehensive footer for Made With Love KC:

1. Footer sections:
   - Company info: "Made With Love KC" with mission statement
   - Quick links: About, Products, Gallery, Contact
   - Product categories: Apparel, Accessories, Home Decor, Custom
   - Customer service: FAQ, Shipping, Returns, Size Guide
   - Social media links: Instagram, Facebook, Pinterest

2. Newsletter signup:
   - "Stay updated with KC love" heading
   - Email input with subscribe button
   - Privacy policy link
   - Success/error states

3. Trust indicators:
   - "Handmade in Kansas City" badge
   - "Supporting Local Artists" statement
   - Customer satisfaction guarantee

4. Legal links:
   - Privacy Policy, Terms of Service
   - Copyright notice with current year
   - "Made with ❤️ in Kansas City"

Use KC color scheme and maintain brand consistency. Include social media icons and proper spacing.
```

### Prompt 2.3: Layout Wrapper & Page Structure

```
Create the main layout wrapper and page structure:

1. Root layout (app/layout.tsx):
   - Metadata for SEO (title, description, keywords)
   - Open Graph tags for social sharing
   - Font loading (Inter, Poppins)
   - Global CSS imports
   - Analytics setup placeholder

2. Page layout wrapper:
   - Header component
   - Main content area with proper spacing
   - Footer component
   - Loading states and error boundaries

3. Page-specific layouts:
   - Home page: Full-width hero, grid sections
   - Product pages: Sidebar + main content
   - Gallery: Masonry grid layout
   - About: Centered content with sections

4. Responsive behavior:
   - Mobile: Single column, stacked layout
   - Tablet: Two-column grid where appropriate
   - Desktop: Multi-column layouts

Include proper semantic HTML structure and accessibility attributes.
```

## Phase 3: Homepage Components

### Prompt 3.1: Hero Section

```
Create a compelling hero section for Made With Love KC homepage:

1. Hero content:
   - Main headline: "Handmade with Love in Kansas City"
   - Subheading: "Discover unique KC-inspired goods that celebrate our amazing city"
   - Primary CTA: "Shop KC Love" button
   - Secondary CTA: "View Gallery" button
   - Trust indicator: "2,847+ happy customers"

2. Visual elements:
   - Background: Gradient from KC Blue to Love Pink
   - Hero image: KC skyline or handmade process photo
   - Floating elements: Heart icons, KC landmarks
   - Animated text reveal on scroll

3. Mobile optimization:
   - Stacked layout on mobile
   - Touch-friendly button sizes
   - Optimized image loading
   - Reduced text for mobile screens

4. Performance features:
   - Lazy loading for images
   - Optimized animations
   - Fast loading times

Use framer-motion for smooth animations and ensure mobile-first responsive design.
```

### Prompt 3.2: Featured Products Section

```
Create a featured products showcase section:

1. Section header:
   - "Featured KC Creations" title
   - "Handpicked favorites from our Kansas City collection" subtitle
   - "View All Products" link

2. Product grid:
   - 3-4 featured products in responsive grid
   - Product cards with image, name, price, quick add
   - Hover effects with product details overlay
   - "Sold Out" badges for unavailable items

3. Product data (mock):
   - "KC Skyline Hoodie" - $45 (Apparel)
   - "KC Pride Mug" - $18 (Accessories)
   - "Handmade KC Art Print" - $25 (Home Decor)
   - "Custom Royals Gear" - $35 (Custom)

4. Interactive features:
   - Quick view modal on hover
   - Add to cart animation
   - Wishlist heart icon
   - Product category badges

Use Shadcn Card components with proper spacing and hover states. Include loading skeletons.
```

### Prompt 3.3: Instagram Feed Preview

```
Create an Instagram feed preview section:

1. Section header:
   - "Follow Our KC Journey" title
   - "See the latest from @made.withlovekc" subtitle
   - Instagram follow button with external link

2. Feed grid:
   - 4-6 Instagram posts in responsive grid
   - Post images with overlay showing likes/comments
   - Hover effects revealing post captions
   - "View on Instagram" links

3. Mock Instagram data:
   - KC skyline hoodie post (156 likes, 23 comments)
   - Behind-the-scenes workshop (89 likes, 12 comments)
   - Customer testimonial mug (67 likes, 8 comments)
   - KC Love Event coverage (134 likes, 19 comments)

4. Visual design:
   - Instagram-style square aspect ratio
   - Subtle border radius and shadows
   - KC color accents on hover
   - Loading states for images

Include proper alt text and accessibility features. Use Next.js Image component for optimization.
```

### Prompt 3.4: Customer Testimonials

```
Create a customer testimonials section:

1. Section header:
   - "KC Love Stories" title
   - "What our customers say about their handmade treasures" subtitle

2. Testimonial cards:
   - Customer photo/avatar
   - Testimonial text with quote marks
   - Customer name and location
   - Star rating (5 stars)
   - Product mentioned

3. Mock testimonials:
   - Sarah M. from Overland Park: "Absolutely obsessed with my KC mug! Perfect for morning coffee and shows KC pride everywhere."
   - Mike R. from Kansas City: "The custom Royals gear is incredible quality. True KC craftsmanship!"
   - Jessica L. from Lenexa: "Love supporting local artists. These pieces are conversation starters!"

4. Interactive features:
   - Carousel/slider for multiple testimonials
   - Smooth transitions between cards
   - Click to view full testimonial
   - Social proof indicators

Use Shadcn Card and Carousel components. Include proper typography hierarchy and spacing.
```

### Prompt 3.5: About Preview Section

```
Create an about preview section for the homepage:

1. Section content:
   - "Made With Love in Kansas City" heading
   - Mission statement: "We're passionate about Kansas City and love creating products that celebrate our amazing city"
   - Key values: KC Pride, Quality Design, Community First
   - "Learn More About Us" CTA button

2. Value propositions:
   - KC Pride: "Every product celebrates the unique culture and spirit of Kansas City"
   - Quality Design: "Thoughtfully designed products made with high-quality materials"
   - Community First: "Supporting local artists and businesses throughout Kansas City"

3. Visual elements:
   - Icon for each value proposition
   - KC-themed illustrations or photos
   - Subtle animations on scroll
   - Consistent spacing and typography

4. Call-to-action:
   - Link to full About page
   - Contact information
   - Social media links

Use proper semantic HTML and ensure accessibility compliance.
```

## Phase 4: Product Pages

### Prompt 4.1: Product Listing Page

```
Create a comprehensive product listing page:

1. Page header:
   - "KC-Inspired Products" title
   - Breadcrumb navigation
   - Product count and sorting options
   - Filter sidebar (category, price, availability)

2. Product grid:
   - Responsive grid layout (1-4 columns based on screen size)
   - Product cards with image, name, price, rating
   - Quick add to cart functionality
   - Wishlist heart icon
   - "Sold Out" badges

3. Filtering system:
   - Category filters: Apparel, Accessories, Home, Custom
   - Price range slider
   - Availability toggle
   - Clear all filters option

4. Sorting options:
   - Price: Low to High, High to Low
   - Popularity: Most Liked, Most Recent
   - Name: A-Z, Z-A
   - Relevance: Best Match

5. Pagination:
   - Page numbers with ellipsis
   - Previous/Next buttons
   - Items per page selector
   - Jump to page input

Use Shadcn components for filters, pagination, and product cards. Include loading states and empty states.
```

### Prompt 4.2: Product Detail Page

```
Create a detailed product page with e-commerce best practices:

1. Product gallery:
   - Main product image with zoom functionality
   - Thumbnail gallery with 3-4 additional images
   - Image zoom modal
   - Loading states for images

2. Product information:
   - Product name and category badge
   - Price with currency formatting
   - Star rating and review count
   - Product description with formatting
   - Key features list
   - Size guide link (if applicable)

3. Purchase options:
   - Size selector (if applicable)
   - Color/variant selector
   - Quantity selector with +/- buttons
   - Add to cart button with loading state
   - Buy now button
   - Wishlist heart icon

4. Product details tabs:
   - Description: Detailed product info
   - Specifications: Materials, dimensions, care instructions
   - Reviews: Customer reviews and ratings
   - Shipping: Delivery information and policies

5. Related products:
   - "You might also love" section
   - 4 related products in horizontal scroll
   - Similar category products

6. Trust indicators:
   - "Handmade in Kansas City" badge
   - "Free shipping on orders over $50"
   - "30-day return policy"
   - Customer service contact

Include proper SEO meta tags, structured data, and social sharing buttons.
```

### Prompt 4.3: Product Card Component

```
Create a reusable product card component:

1. Card structure:
   - Product image with hover overlay
   - Product name and category
   - Price with strikethrough for sales
   - Star rating and review count
   - Quick add to cart button
   - Wishlist heart icon

2. Interactive features:
   - Hover effects with image zoom
   - Quick view modal trigger
   - Add to cart animation
   - Wishlist toggle with feedback
   - Click to navigate to product page

3. States and variants:
   - Default state
   - Hover state with overlay
   - Loading state with skeleton
   - Sold out state with disabled interactions
   - Sale state with discount badge

4. Responsive behavior:
   - Mobile: Single column, larger touch targets
   - Tablet: Two columns, medium spacing
   - Desktop: Multiple columns, compact layout

5. Accessibility:
   - Proper alt text for images
   - Keyboard navigation support
   - Screen reader friendly
   - Focus indicators

Use Shadcn Card component as base with custom styling. Include proper TypeScript props interface.
```

## Phase 5: Gallery & Content Pages

### Prompt 5.1: Instagram Gallery Page

```
Create a comprehensive Instagram gallery page:

1. Page header:
   - "Our KC Journey" title
   - "Follow @made.withlovekc for the latest" subtitle
   - Instagram follow button
   - Filter options: All, Products, Behind Scenes, Events, Lifestyle

2. Gallery grid:
   - Masonry layout for varied image sizes
   - Instagram post cards with captions
   - Like and comment counts
   - Post date and hashtags
   - Click to view full post

3. Post categories:
   - Products: KC hoodies, mugs, accessories
   - Behind Scenes: Workshop photos, making process
   - Events: KC Love Event, local markets
   - Lifestyle: Coffee shop work, community moments

4. Interactive features:
   - Infinite scroll or pagination
   - Lightbox modal for full-size images
   - Share buttons for individual posts
   - Filter by category or hashtag

5. Mock Instagram data:
   - Use the 8 posts from our data scraping
   - Include realistic engagement metrics
   - Add relevant hashtags and captions
   - Include behind-scenes content

Use CSS Grid or Masonry layout. Include proper image optimization and lazy loading.
```

### Prompt 5.2: About Page

```
Create a comprehensive about page:

1. Hero section:
   - "Our Story" heading
   - Mission statement with KC pride
   - Team photo or workshop image
   - Call-to-action buttons

2. Our story section:
   - "How it all began" with founder story
   - "Why Kansas City" with local connection
   - "Our mission" with community focus
   - Timeline of key milestones

3. Values section:
   - KC Pride: Celebrating local culture
   - Quality Craftsmanship: Handmade excellence
   - Community Support: Local artist partnerships
   - Customer Love: Satisfaction guarantee

4. Meet the team:
   - Founder/owner bio with photo
   - Team member profiles
   - Local artist partnerships
   - Community involvement

5. KC community impact:
   - Local partnerships and collaborations
   - Community events participation
   - Supporting local artists
   - KC Love Event involvement

6. Contact information:
   - Location and hours
   - Contact form
   - Social media links
   - Newsletter signup

Include proper imagery, testimonials, and call-to-action elements throughout.
```

### Prompt 5.3: Custom Orders Page

```
Create a custom orders page for personalized products:

1. Page header:
   - "Custom KC Creations" title
   - "Bring your KC vision to life" subtitle
   - Process overview with steps

2. Custom process steps:
   - Step 1: "Share Your Vision" - Describe your idea
   - Step 2: "Design Consultation" - We'll create mockups
   - Step 3: "Approval & Production" - Handmade with love
   - Step 4: "Delivery" - Your custom KC creation

3. Custom order form:
   - Project type selector (apparel, accessories, home decor)
   - Description textarea with character count
   - Quantity and timeline requirements
   - Budget range selector
   - File upload for inspiration images
   - Contact information fields

4. Portfolio examples:
   - Custom Royals gear showcase
   - Personalized KC skyline designs
   - Custom wedding/birthday items
   - Corporate custom orders

5. Pricing guide:
   - Base pricing by product type
   - Customization complexity factors
   - Rush order pricing
   - Bulk order discounts

6. FAQ section:
   - Common custom order questions
   - Timeline expectations
   - Revision policy
   - Payment terms

Include proper form validation, file upload handling, and success/error states.
```

## Phase 6: E-commerce Functionality

### Prompt 6.1: Shopping Cart

```
Create a comprehensive shopping cart page:

1. Cart header:
   - "Your KC Love Cart" title
   - Item count and total
   - Continue shopping link
   - Clear cart option

2. Cart items:
   - Product image thumbnail
   - Product name and options (size, color)
   - Price per item
   - Quantity selector with +/- buttons
   - Remove item button
   - Subtotal per item

3. Cart summary:
   - Subtotal calculation
   - Shipping calculator
   - Tax estimation
   - Discount code input
   - Total with breakdown

4. Promotional elements:
   - "Free shipping on orders over $50" banner
   - "Add $15 more for free shipping" progress bar
   - Related products suggestions
   - Recently viewed items

5. Checkout flow:
   - "Proceed to Checkout" button
   - Guest checkout option
   - Save for later functionality
   - Wishlist transfer option

6. Empty cart state:
   - "Your cart is empty" message
   - "Start shopping" CTA button
   - Featured products suggestions
   - Instagram gallery link

Include proper state management, local storage persistence, and mobile optimization.
```

### Prompt 6.2: Checkout Process

```
Create a streamlined checkout process:

1. Checkout steps:
   - Step 1: Customer Information
   - Step 2: Shipping Details
   - Step 3: Payment Method
   - Step 4: Order Review

2. Customer information:
   - Email address with validation
   - First and last name
   - Phone number
   - Create account option
   - Guest checkout toggle

3. Shipping details:
   - Address form with autocomplete
   - Shipping method selection
   - Delivery date preferences
   - Special instructions
   - Billing address toggle

4. Payment method:
   - Credit card form with validation
   - PayPal integration option
   - Apple Pay/Google Pay buttons
   - Security badges and trust indicators

5. Order review:
   - Final item list with quantities
   - Shipping and tax breakdown
   - Total amount
   - Terms and conditions checkbox
   - Place order button

6. Order confirmation:
   - Order number and confirmation
   - Estimated delivery date
   - Email confirmation sent
   - Track order link
   - Continue shopping button

Include proper form validation, error handling, and mobile optimization.
```

### Prompt 6.3: User Account Pages

```
Create user account management pages:

1. Account dashboard:
   - Welcome message with user name
   - Order history summary
   - Wishlist preview
   - Account settings quick access
   - Recent activity feed

2. Order history:
   - Order list with status indicators
   - Order details modal
   - Reorder functionality
   - Track shipment links
   - Return/exchange options

3. Wishlist:
   - Saved items grid
   - Move to cart functionality
   - Remove from wishlist
   - Share wishlist option
   - Price drop notifications

4. Account settings:
   - Personal information form
   - Password change form
   - Email preferences
   - Address book management
   - Notification settings

5. Address book:
   - Saved addresses list
   - Add new address form
   - Edit/delete addresses
   - Default address selection
   - Address validation

Include proper authentication, data persistence, and responsive design.
```

## Phase 7: Admin Dashboard

### Prompt 7.1: Admin Dashboard Overview

```
Create an admin dashboard for Made With Love KC:

1. Dashboard overview:
   - Sales summary with charts
   - Recent orders list
   - Instagram sync status
   - Inventory alerts
   - Customer feedback summary

2. Navigation sidebar:
   - Dashboard overview
   - Product management
   - Order management
   - Instagram sync
   - Analytics
   - Content management

3. Key metrics:
   - Total sales and revenue
   - Order count and average order value
   - Instagram engagement metrics
   - Customer satisfaction scores
   - Inventory levels

4. Quick actions:
   - Add new product
   - Process pending orders
   - Sync Instagram data
   - View customer messages
   - Update inventory

5. Recent activity:
   - New orders notifications
   - Customer reviews
   - Instagram post engagement
   - Inventory alerts
   - System updates

Include proper authentication, role-based access, and responsive design.
```

### Prompt 7.2: Instagram Sync Interface

```
Create Instagram data synchronization interface:

1. Sync dashboard:
   - Last sync time and status
   - Posts synced count
   - New posts detected
   - Sync progress indicator
   - Manual sync trigger button

2. Sync controls:
   - "Scrape Instagram" button
   - "Process Data" button
   - "Full Sync" button
   - Sync frequency settings
   - Error log viewer

3. Data preview:
   - Recent Instagram posts
   - Engagement metrics
   - Content categorization
   - Product extraction results
   - Manual review options

4. Sync settings:
   - Instagram account configuration
   - Sync frequency options
   - Content filtering rules
   - Auto-categorization settings
   - Notification preferences

5. Sync history:
   - Sync log with timestamps
   - Success/failure status
   - Data processing results
   - Error messages and solutions
   - Performance metrics

Include proper error handling, progress indicators, and data validation.
```

## Phase 8: Performance & Optimization

### Prompt 8.1: Performance Optimization

```
Optimize the Made With Love KC website for performance:

1. Image optimization:
   - Next.js Image component implementation
   - WebP format with JPEG fallback
   - Responsive image sizing
   - Lazy loading for below-fold content
   - Image compression and optimization

2. Code splitting:
   - Dynamic imports for heavy components
   - Route-based code splitting
   - Component-level lazy loading
   - Bundle analysis and optimization

3. Caching strategy:
   - Static generation for product pages
   - ISR for dynamic content
   - API response caching
   - CDN configuration
   - Browser caching headers

4. Core Web Vitals:
   - LCP optimization (hero images, fonts)
   - FID improvement (interactive elements)
   - CLS prevention (layout stability)
   - Performance monitoring setup

5. Mobile optimization:
   - Touch-friendly interactions
   - Reduced bundle size for mobile
   - Optimized images for mobile
   - Progressive web app features

Include performance monitoring, Lighthouse optimization, and mobile-first approach.
```

### Prompt 8.2: SEO & Accessibility

```
Implement comprehensive SEO and accessibility:

1. SEO optimization:
   - Meta tags for all pages
   - Open Graph and Twitter cards
   - Structured data markup
   - Sitemap generation
   - Robots.txt configuration

2. Accessibility compliance:
   - WCAG 2.1 AA standards
   - Keyboard navigation support
   - Screen reader compatibility
   - Color contrast compliance
   - Focus indicators

3. Content optimization:
   - Semantic HTML structure
   - Proper heading hierarchy
   - Alt text for all images
   - Descriptive link text
   - Form labels and instructions

4. Performance monitoring:
   - Google Analytics setup
   - Search Console integration
   - Error tracking
   - User experience metrics
   - Conversion tracking

5. Testing and validation:
   - Accessibility testing tools
   - SEO audit tools
   - Cross-browser testing
   - Mobile device testing
   - Performance testing

Include proper testing procedures and validation tools.
```

## Phase 9: Final Integration & Testing

### Prompt 9.1: Complete Integration

```
Integrate all components and features:

1. Component integration:
   - Connect all pages and components
   - Implement proper routing
   - Add error boundaries
   - Set up loading states
   - Configure environment variables

2. Data integration:
   - Connect to Supabase database
   - Implement API routes
   - Add data fetching hooks
   - Set up real-time updates
   - Configure authentication

3. State management:
   - Shopping cart state
   - User authentication state
   - Product data state
   - Form state management
   - Error state handling

4. Testing implementation:
   - Unit tests for components
   - Integration tests for pages
   - E2E tests for user flows
   - Performance tests
   - Accessibility tests

5. Deployment preparation:
   - Environment configuration
   - Build optimization
   - Vercel deployment setup
   - Domain configuration
   - SSL certificate setup

Include comprehensive testing and deployment procedures.
```

### Prompt 9.2: Launch Preparation

```
Prepare for production launch:

1. Content finalization:
   - Review all copy and content
   - Optimize images and media
   - Test all forms and interactions
   - Verify all links and navigation
   - Check mobile responsiveness

2. Performance optimization:
   - Final performance audit
   - Image optimization
   - Bundle size optimization
   - Caching configuration
   - CDN setup

3. SEO implementation:
   - Final SEO audit
   - Meta tag optimization
   - Structured data validation
   - Sitemap submission
   - Analytics configuration

4. Launch checklist:
   - All pages functional
   - Forms working correctly
   - Payment processing tested
   - Email notifications working
   - Admin dashboard functional

5. Post-launch monitoring:
   - Performance monitoring
   - Error tracking
   - User feedback collection
   - Analytics review
   - Continuous improvement

Include comprehensive launch procedures and monitoring setup.
```

---

This prompt plan provides a complete roadmap for building the Made With Love KC website frontend, incorporating all the data we've gathered, design guidelines, and e-commerce best practices. Each prompt is designed to create production-ready components with intelligent mock copy that reflects the brand's authentic Kansas City identity.


