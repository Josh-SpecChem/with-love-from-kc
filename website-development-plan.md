# Website Development Plan for "With Love from KC"

## Executive Summary

This document outlines a comprehensive plan for transitioning "With Love from KC" from an Instagram-centric business to a full-featured website using modern web technologies. The plan covers data acquisition, organization, and integration into a Next.js application with Tailwind CSS, Shadcn UI components, Supabase backend, and Vercel deployment.

## 1. Data Acquisition Strategy

### 1.1 Instagram Data Scraping

**Objective**: Extract all available data from the company's Instagram account to populate the website with authentic content.

#### 1.1.1 Instagram Graph API Implementation
- **Setup Requirements**:
  - Register application with Facebook Developer Console
  - Obtain Instagram Business Account access
  - Generate access tokens for API authentication
  - Implement rate limiting and error handling

- **Data to Extract**:
  - **Profile Information**:
    - Business name and bio
    - Profile picture and cover photo
    - Contact information (email, phone, website)
    - Follower/following counts
    - Verification status

  - **Content Data**:
    - All posts (images, videos, carousels)
    - Post captions and hashtags
    - Timestamps and engagement metrics
    - Comments and user interactions
    - Stories and highlights
    - IGTV and Reels content

#### 1.1.2 Alternative Scraping Methods
- **Instaloader (Python)**:
  ```python
  # Example implementation
  import instaloader
  
  L = instaloader.Instaloader()
  profile = instaloader.Profile.from_username(L.context, "withlovefromkc")
  
  # Download all posts
  for post in profile.get_posts():
      L.download_post(post, target=profile.username)
  ```

- **Instagram Web Scraping**:
  - Use Puppeteer or Playwright for browser automation
  - Implement anti-detection measures
  - Handle dynamic content loading
  - Respect robots.txt and rate limits

#### 1.1.3 Data Processing Pipeline
- **Image Optimization**:
  - Convert images to WebP format
  - Implement responsive image sizing
  - Add lazy loading capabilities
  - Compress without quality loss

- **Content Categorization**:
  - Product showcases
  - Behind-the-scenes content
  - Customer testimonials
  - Event coverage
  - Educational content

### 1.2 Additional Data Sources

#### 1.2.1 Direct Business Collaboration
- **Content Request**:
  - High-resolution product images
  - Detailed product descriptions
  - Company history and mission
  - Team member profiles
  - Behind-the-scenes content
  - Brand guidelines and assets

#### 1.2.2 User-Generated Content
- **Customer Testimonials**:
  - Instagram story highlights
  - Customer review screenshots
  - User-submitted photos
  - Video testimonials

#### 1.2.3 Local Kansas City Integration
- **Partnership Opportunities**:
  - KC Love Event participation
  - Local business collaborations
  - Community event coverage
  - Kansas City culture content

## 2. Data Organization Structure

### 2.1 Database Schema Design (Supabase)

#### 2.1.1 Core Tables
```sql
-- Business Profile
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  bio TEXT,
  profile_image_url TEXT,
  cover_image_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website_url TEXT,
  instagram_handle TEXT UNIQUE,
  follower_count INTEGER,
  following_count INTEGER,
  verification_status BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Instagram Posts
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instagram_post_id TEXT UNIQUE NOT NULL,
  caption TEXT,
  media_type TEXT NOT NULL, -- 'image', 'video', 'carousel'
  media_urls TEXT[] NOT NULL,
  thumbnail_url TEXT,
  hashtags TEXT[],
  mentions TEXT[],
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  post_date TIMESTAMP WITH TIME ZONE NOT NULL,
  scraped_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT FALSE,
  category TEXT, -- 'product', 'lifestyle', 'behind_scenes', 'testimonial'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  category TEXT,
  tags TEXT[],
  images TEXT[] NOT NULL,
  instagram_post_id UUID REFERENCES instagram_posts(id),
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Testimonials
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT,
  customer_instagram TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  instagram_post_id UUID REFERENCES instagram_posts(id),
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media Library
CREATE TABLE media_library (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  original_url TEXT,
  optimized_url TEXT,
  file_type TEXT NOT NULL, -- 'image', 'video'
  file_size INTEGER,
  dimensions JSONB, -- {width: 1920, height: 1080}
  alt_text TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 2.1.2 Indexes and Relationships
```sql
-- Performance indexes
CREATE INDEX idx_instagram_posts_date ON instagram_posts(post_date DESC);
CREATE INDEX idx_instagram_posts_category ON instagram_posts(category);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_available ON products(is_available);

-- Full-text search
CREATE INDEX idx_posts_search ON instagram_posts USING gin(to_tsvector('english', caption));
CREATE INDEX idx_products_search ON products USING gin(to_tsvector('english', name || ' ' || description));
```

### 2.2 Data Processing Pipeline

#### 2.2.1 ETL Process
```typescript
// Data transformation pipeline
interface InstagramPostData {
  id: string;
  caption: string;
  media_type: 'image' | 'video' | 'carousel';
  media_urls: string[];
  timestamp: string;
  like_count: number;
  comment_count: number;
  hashtags: string[];
}

interface ProcessedPost {
  id: string;
  caption: string;
  media_type: string;
  optimized_images: string[];
  category: string;
  tags: string[];
  engagement_score: number;
  is_featured: boolean;
}
```

#### 2.2.2 Content Classification
- **Machine Learning Approach**:
  - Use image recognition for product identification
  - Implement text classification for content categorization
  - Sentiment analysis for customer testimonials

- **Rule-Based Classification**:
  - Hashtag-based categorization
  - Keyword matching for product identification
  - Manual tagging for quality control

## 3. Next.js Application Architecture

### 3.1 Project Structure
```
with-love-from-kc/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── (auth)/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── products/
│   │   ├── gallery/
│   │   ├── about/
│   │   └── contact/
│   ├── components/
│   │   ├── ui/                 # Shadcn components
│   │   ├── layout/
│   │   ├── gallery/
│   │   ├── products/
│   │   └── forms/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── utils/
│   │   └── validations/
│   ├── hooks/
│   ├── types/
│   └── styles/
├── public/
│   ├── images/
│   └── icons/
├── supabase/
│   ├── migrations/
│   └── functions/
└── scripts/
    ├── data-scraping/
    └── data-processing/
```

### 3.2 Key Components

#### 3.2.1 Layout Components
```typescript
// src/components/layout/Header.tsx
import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              With Love from KC
            </span>
          </a>
          <NavigationMenu>
            {/* Navigation items */}
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
```

#### 3.2.2 Gallery Components
```typescript
// src/components/gallery/InstagramGallery.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface InstagramPost {
  id: string
  caption: string
  media_urls: string[]
  hashtags: string[]
  like_count: number
  post_date: string
}

export function InstagramGallery({ posts }: { posts: InstagramPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={post.media_urls[0]}
                alt={post.caption}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-2">
                {post.caption}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {post.hashtags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.like_count} likes</span>
                <span>{new Date(post.post_date).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

#### 3.2.3 Product Components
```typescript
// src/components/products/ProductCard.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  is_available: boolean
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
          {!product.is_available && (
            <Badge className="absolute top-2 right-2" variant="destructive">
              Sold Out
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold">${product.price}</span>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full" 
          disabled={!product.is_available}
        >
          {product.is_available ? 'Contact for Purchase' : 'Sold Out'}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### 3.3 API Routes

#### 3.3.1 Instagram Data Sync
```typescript
// src/app/api/sync-instagram/route.ts
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    
    // Fetch latest Instagram data
    const instagramData = await fetchInstagramData()
    
    // Process and store data
    const { data, error } = await supabase
      .from('instagram_posts')
      .upsert(instagramData, { 
        onConflict: 'instagram_post_id' 
      })
    
    if (error) throw error
    
    return NextResponse.json({ 
      success: true, 
      synced: instagramData.length 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to sync Instagram data' },
      { status: 500 }
    )
  }
}
```

#### 3.3.2 Product Management
```typescript
// src/app/api/products/route.ts
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = createClient()
  
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_available', true)
    .order('created_at', { ascending: false })
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json(products)
}
```

## 4. Supabase Integration

### 4.1 Database Setup
```sql
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Row Level Security policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access for website visitors
CREATE POLICY "Public read access" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public read access" ON instagram_posts FOR SELECT USING (true);
CREATE POLICY "Public read access" ON products FOR SELECT USING (is_available = true);
```

### 4.2 Authentication Setup
```typescript
// src/lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createClientComponentClient()

// Admin authentication
export async function authenticateAdmin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}
```

### 4.3 Real-time Subscriptions
```typescript
// src/hooks/useRealtimePosts.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export function useRealtimePosts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const channel = supabase
      .channel('instagram_posts')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'instagram_posts' },
        (payload) => {
          setPosts(prev => [payload.new, ...prev])
        }
      )
      .subscribe()
    
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])
  
  return posts
}
```

## 5. Deployment and DevOps

### 5.1 Vercel Configuration
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase-anon-key",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase-service-role-key",
    "INSTAGRAM_ACCESS_TOKEN": "@instagram-access-token"
  },
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### 5.2 Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
INSTAGRAM_ACCESS_TOKEN=your_instagram_token
NEXT_PUBLIC_SITE_URL=https://withlovefromkc.vercel.app
```

### 5.3 CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 6. Performance Optimization

### 6.1 Image Optimization
```typescript
// src/lib/image-optimization.ts
import sharp from 'sharp'

export async function optimizeImage(
  buffer: Buffer,
  width: number,
  height: number,
  quality: number = 80
) {
  return await sharp(buffer)
    .resize(width, height, { fit: 'cover' })
    .webp({ quality })
    .toBuffer()
}
```

### 6.2 Caching Strategy
```typescript
// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const response = NextResponse.json(posts)
  
  // Cache for 1 hour
  response.headers.set('Cache-Control', 'public, s-maxage=3600')
  
  return response
}
```

### 6.3 SEO Optimization
```typescript
// src/app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'With Love from KC - Kansas City Inspired Products',
  description: 'Discover unique Kansas City inspired products and merchandise. Follow our journey celebrating KC culture and community.',
  keywords: ['Kansas City', 'KC', 'local business', 'Kansas City products', 'KC merchandise'],
  openGraph: {
    title: 'With Love from KC',
    description: 'Kansas City inspired products and merchandise',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'With Love from KC',
    description: 'Kansas City inspired products and merchandise',
  },
}
```

## 7. Monitoring and Analytics

### 7.1 Performance Monitoring
```typescript
// src/lib/analytics.ts
import { Analytics } from '@vercel/analytics/react'

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  Analytics.track(eventName, properties)
}

// Usage in components
export function ProductCard({ product }: { product: Product }) {
  const handleClick = () => {
    trackEvent('product_viewed', { product_id: product.id })
  }
  
  return (
    <div onClick={handleClick}>
      {/* Component content */}
    </div>
  )
}
```

### 7.2 Error Tracking
```typescript
// src/lib/error-tracking.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})

export { Sentry }
```

## 8. Security Considerations

### 8.1 Data Protection
- Implement GDPR compliance for EU visitors
- Secure API endpoints with rate limiting
- Validate all user inputs
- Use HTTPS everywhere
- Implement CSRF protection

### 8.2 Instagram API Compliance
- Respect rate limits (200 calls per hour per user)
- Implement proper error handling
- Store access tokens securely
- Refresh tokens before expiration
- Follow Instagram's Platform Policy

## 9. Timeline and Milestones

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Next.js project with Tailwind and Shadcn
- [ ] Configure Supabase database and authentication
- [ ] Implement basic Instagram API integration
- [ ] Create initial data scraping scripts

### Phase 2: Core Features (Weeks 3-4)
- [ ] Build gallery and product display components
- [ ] Implement admin dashboard for content management
- [ ] Set up automated data synchronization
- [ ] Create responsive layouts and navigation

### Phase 3: Enhancement (Weeks 5-6)
- [ ] Add search and filtering functionality
- [ ] Implement SEO optimization
- [ ] Set up analytics and monitoring
- [ ] Create contact forms and user interactions

### Phase 4: Deployment (Week 7)
- [ ] Deploy to Vercel with proper configuration
- [ ] Set up CI/CD pipeline
- [ ] Implement error tracking and monitoring
- [ ] Performance optimization and testing

### Phase 5: Launch and Maintenance (Week 8+)
- [ ] Launch website with initial content
- [ ] Monitor performance and user feedback
- [ ] Implement improvements based on analytics
- [ ] Regular content updates and maintenance

## 10. Success Metrics

### 10.1 Technical Metrics
- Page load speed < 3 seconds
- Lighthouse score > 90
- 99.9% uptime
- Mobile responsiveness score > 95

### 10.2 Business Metrics
- Instagram follower growth
- Website traffic and engagement
- Product inquiry conversion rate
- Customer satisfaction scores

## 11. Risk Mitigation

### 11.1 Instagram API Risks
- **Risk**: API access revocation
- **Mitigation**: Diversify data sources, implement fallback scraping methods

### 11.2 Data Quality Risks
- **Risk**: Inconsistent or incomplete data
- **Mitigation**: Implement data validation, manual review processes

### 11.3 Performance Risks
- **Risk**: Slow loading times with large media files
- **Mitigation**: Implement progressive loading, CDN integration

## 12. Future Enhancements

### 12.1 Advanced Features
- E-commerce integration with Stripe
- Customer account system
- Advanced analytics dashboard
- Mobile app development
- Social media integration beyond Instagram

### 12.2 Scalability Considerations
- Microservices architecture
- Database sharding for large datasets
- CDN implementation for global reach
- Automated content moderation
- AI-powered product recommendations

---

This comprehensive plan provides a roadmap for transforming "With Love from KC" from an Instagram-focused business into a full-featured web platform. The modular approach allows for iterative development and continuous improvement based on user feedback and business needs.
