# Image Sourcing and Organization Plan for "With Love from KC"

## Executive Summary

This document outlines a comprehensive strategy for sourcing, organizing, and managing all images required for the "With Love from KC" website. The plan ensures no missing images, proper branding alignment, and efficient organization within the `public/images` directory structure.

## 1. Image Requirements Analysis

### 1.1 Core Business Images
Based on the website components and data files, the following images are required:

#### 1.1.1 Branding & Logos
- **Current**: `logo-1.jpg`, `logo-2.jpg`
- **Additional Needed**:
  - High-resolution logo variations (PNG with transparency)
  - Logo mark only (for social media)
  - Favicon variations (16x16, 32x32, 192x192, 512x512)

#### 1.1.2 Product Images
From `products-madewithlovekc.json`:
- **KC Skyline Hoodies**: `kc-hoodie-1.jpg`, `kc-hoodie-2.jpg`
- **Accessories Collection**: `new-arrivals-accessories.jpg`
- **Custom Royals Gear**: `custom-royals-gear.jpg`

#### 1.1.3 Instagram Feed Images
From component references:
- **Product Posts**: `kc-skyline-hoodie.jpg`
- **Behind the Scenes**: `workshop-behind-scenes.jpg`
- **Customer Testimonials**: `customer-mug.jpg`
- **Event Coverage**: Various event images

#### 1.1.4 About Page Images
- **Kansas City Skyline**: `kc-skyline.jpg`
- **Workshop/Studio**: `workshop.jpg`
- **Community Events**: `community-event.jpg`
- **Team Photos**: Individual team member photos

#### 1.1.5 Product Detail Images
From product detail pages:
- **KC Skyline Hoodie Variations**: 4+ angles/sizes
- **Related Products**: Multiple product categories

### 1.2 Image Categories by Source

#### 1.2.1 Kansas City Specific (Primary Source: Unsplash + Local Photography)
- KC skyline (day/night views)
- Kansas City landmarks (Liberty Memorial, Union Station, etc.)
- KC sports venues (Arrowhead, Kauffman Stadium)
- Local neighborhoods and street scenes
- BBQ and food culture imagery

#### 1.2.2 Product Photography (Custom/Stock)
- Hoodies and apparel on models
- Accessories and merchandise flat lays
- Workshop/studio environment shots
- Product detail shots (fabric, stitching, quality)

#### 1.2.3 Lifestyle & Community (Unsplash + User Generated)
- People wearing KC gear
- Community events and gatherings
- Behind-the-scenes workshop content
- Customer testimonials and user photos

## 2. Image Sourcing Strategy

### 2.1 Primary Sources

#### 2.1.1 Unsplash API Integration
```javascript
// Image sourcing categories for Unsplash
const unsplashCategories = {
  kcSkyline: {
    query: "Kansas City skyline",
    orientation: "landscape",
    count: 10,
    keywords: ["kansas city", "skyline", "downtown", "missouri"]
  },
  kcLandmarks: {
    query: "Kansas City landmarks",
    orientation: "landscape", 
    count: 15,
    keywords: ["liberty memorial", "union station", "power and light", "crossroads"]
  },
  apparel: {
    query: "hoodie fashion",
    orientation: "portrait",
    count: 20,
    keywords: ["hoodie", "sweatshirt", "casual wear", "street style"]
  },
  workshop: {
    query: "craft workshop",
    orientation: "landscape",
    count: 12,
    keywords: ["workshop", "craft", "handmade", "studio", "artisan"]
  },
  community: {
    query: "community gathering",
    orientation: "landscape",
    count: 8,
    keywords: ["community", "local", "gathering", "event"]
  }
};
```

#### 2.1.2 Additional Sources
- **Pexels**: Backup source for lifestyle and product images
- **Local KC Photographers**: Custom photography for authentic KC content
- **User-Generated Content**: Customer photos and testimonials
- **Stock Photography**: Professional product shots and lifestyle imagery

### 2.2 Image Quality Standards

#### 2.2.1 Technical Specifications
- **Resolution**: Minimum 1920x1080 for hero images, 800x600 for thumbnails
- **Format**: WebP for web optimization, JPEG for compatibility
- **Compression**: 85% quality for photos, 95% for graphics
- **Aspect Ratios**:
  - Hero images: 16:9 or 3:2
  - Product images: 1:1 (square)
  - Instagram posts: 1:1 or 4:5
  - Gallery thumbnails: 4:3

#### 2.2.2 Brand Alignment
- **Color Palette**: Warm tones, KC blue (#1E3A8A), love pink (#EC4899)
- **Style**: Authentic, community-focused, handmade aesthetic
- **Mood**: Welcoming, proud, local, artistic

## 3. Directory Structure Organization

### 3.1 Proposed `public/images` Structure
```
public/images/
├── branding/
│   ├── logos/
│   │   ├── logo-primary.png
│   │   ├── logo-mark.png
│   │   ├── logo-horizontal.png
│   │   └── favicon/
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── favicon-192x192.png
│   │       └── favicon-512x512.png
│   └── social/
│       ├── og-image.jpg
│       ├── twitter-card.jpg
│       └── banner-1200x630.jpg
├── products/
│   ├── apparel/
│   │   ├── kc-skyline-hoodie/
│   │   │   ├── kc-skyline-hoodie-1.jpg
│   │   │   ├── kc-skyline-hoodie-2.jpg
│   │   │   ├── kc-skyline-hoodie-3.jpg
│   │   │   └── kc-skyline-hoodie-4.jpg
│   │   ├── kc-pride-tee/
│   │   └── kc-royals-gear/
│   ├── accessories/
│   │   ├── stickers/
│   │   ├── magnets/
│   │   └── keychains/
│   └── custom/
├── instagram/
│   ├── posts/
│   │   ├── kc-skyline-hoodie-post.jpg
│   │   ├── workshop-behind-scenes.jpg
│   │   ├── customer-mug.jpg
│   │   └── kc-love-event.jpg
│   ├── stories/
│   └── highlights/
├── about/
│   ├── kc-skyline.jpg
│   ├── workshop.jpg
│   ├── community-event.jpg
│   └── team/
│       ├── founder.jpg
│       ├── team-group.jpg
│       └── individual-photos/
├── gallery/
│   ├── hero/
│   ├── lifestyle/
│   └── behind-scenes/
├── kansas-city/
│   ├── skyline/
│   │   ├── kc-skyline-day.jpg
│   │   ├── kc-skyline-night.jpg
│   │   └── kc-skyline-sunset.jpg
│   ├── landmarks/
│   │   ├── liberty-memorial.jpg
│   │   ├── union-station.jpg
│   │   ├── power-and-light.jpg
│   │   └── crossroads-arts.jpg
│   └── culture/
│       ├── bbq-culture.jpg
│       ├── jazz-district.jpg
│       └── sports-pride.jpg
├── placeholders/
│   ├── product-placeholder.jpg
│   ├── profile-placeholder.jpg
│   └── loading-placeholder.jpg
└── temp/
    └── processing/
```

### 3.2 Naming Conventions

#### 3.2.1 File Naming Rules
- **Format**: `category-description-variant.ext`
- **Examples**:
  - `kc-skyline-hoodie-front.jpg`
  - `workshop-behind-scenes-1.jpg`
  - `customer-testimonial-mug.jpg`
  - `liberty-memorial-sunset.jpg`

#### 3.2.2 Alt Text Standards
```javascript
const altTextTemplates = {
  product: "KC Skyline Hoodie - [description] - Made With Love KC",
  landmark: "[Landmark Name] - Kansas City landmark - Made With Love KC",
  lifestyle: "[Description] - Kansas City community - Made With Love KC",
  team: "[Name] - Made With Love KC team member",
  workshop: "Behind the scenes at Made With Love KC workshop"
};
```

## 4. Automated Image Sourcing Scripts

### 4.1 Unsplash API Integration Script

#### 4.1.1 Setup and Configuration
```javascript
// scripts/image-sourcing/unsplash-scraper.js
const Unsplash = require('unsplash-js').default;
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

class UnsplashImageScraper {
  constructor() {
    this.unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });
    this.basePath = path.join(__dirname, '../../public/images');
  }

  async scrapeCategory(category) {
    const { query, orientation, count, keywords } = category;
    
    try {
      const response = await this.unsplash.search.photos(query, 1, count, {
        orientation,
        content_filter: 'high'
      });
      
      const photos = await response.json();
      
      for (const photo of photos.results) {
        await this.downloadAndProcess(photo, category);
      }
    } catch (error) {
      console.error(`Error scraping ${query}:`, error);
    }
  }

  async downloadAndProcess(photo, category) {
    const filename = this.generateFilename(photo, category);
    const filepath = path.join(this.basePath, category.directory, filename);
    
    // Download image
    const imageResponse = await fetch(photo.urls.full);
    const imageBuffer = await imageResponse.arrayBuffer();
    
    // Process with Sharp
    const processedBuffer = await sharp(Buffer.from(imageBuffer))
      .webp({ quality: 85 })
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .toBuffer();
    
    // Save to file
    await fs.writeFile(filepath, processedBuffer);
    
    // Save metadata
    await this.saveMetadata(photo, filename, category);
  }

  generateFilename(photo, category) {
    const sanitized = photo.alt_description 
      ? photo.alt_description.toLowerCase().replace(/[^a-z0-9]/g, '-')
      : 'unsplash-image';
    return `${category.prefix}-${sanitized}-${photo.id}.webp`;
  }
}
```

#### 4.1.2 Batch Processing Script
```javascript
// scripts/image-sourcing/batch-processor.js
const UnsplashScraper = require('./unsplash-scraper');

const categories = [
  {
    query: "Kansas City skyline",
    directory: "kansas-city/skyline",
    prefix: "kc-skyline",
    orientation: "landscape",
    count: 5
  },
  {
    query: "Kansas City landmarks",
    directory: "kansas-city/landmarks", 
    prefix: "kc-landmark",
    orientation: "landscape",
    count: 8
  },
  {
    query: "hoodie fashion street style",
    directory: "products/apparel/lifestyle",
    prefix: "hoodie-lifestyle",
    orientation: "portrait",
    count: 10
  },
  {
    query: "craft workshop handmade",
    directory: "about",
    prefix: "workshop",
    orientation: "landscape",
    count: 6
  }
];

async function processAllCategories() {
  const scraper = new UnsplashScraper();
  
  for (const category of categories) {
    console.log(`Processing ${category.query}...`);
    await scraper.scrapeCategory(category);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
  }
}

processAllCategories();
```

### 4.2 Image Organization and Optimization Script

#### 4.2.1 File Organization Script
```javascript
// scripts/image-sourcing/organize-images.js
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

class ImageOrganizer {
  constructor() {
    this.basePath = path.join(__dirname, '../../public/images');
    this.tempPath = path.join(this.basePath, 'temp');
  }

  async organizeImages() {
    const tempFiles = await this.getTempFiles();
    
    for (const file of tempFiles) {
      const category = this.categorizeImage(file);
      const newPath = await this.moveAndOptimize(file, category);
      await this.generateThumbnails(newPath);
    }
  }

  categorizeImage(filename) {
    const name = filename.toLowerCase();
    
    if (name.includes('skyline')) return 'kansas-city/skyline';
    if (name.includes('landmark')) return 'kansas-city/landmarks';
    if (name.includes('hoodie') || name.includes('apparel')) return 'products/apparel';
    if (name.includes('workshop')) return 'about';
    if (name.includes('community')) return 'gallery/lifestyle';
    
    return 'gallery/unsorted';
  }

  async moveAndOptimize(file, category) {
    const filename = path.basename(file);
    const newPath = path.join(this.basePath, category, filename);
    
    // Ensure directory exists
    await fs.mkdir(path.dirname(newPath), { recursive: true });
    
    // Optimize and move
    await sharp(file)
      .webp({ quality: 85 })
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .toFile(newPath);
    
    // Remove temp file
    await fs.unlink(file);
    
    return newPath;
  }

  async generateThumbnails(imagePath) {
    const dir = path.dirname(imagePath);
    const name = path.basename(imagePath, path.extname(imagePath));
    
    // Generate thumbnail (400x300)
    await sharp(imagePath)
      .resize(400, 300, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(dir, `${name}-thumb.webp`));
    
    // Generate mobile version (800x600)
    await sharp(imagePath)
      .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(dir, `${name}-mobile.webp`));
  }
}
```

### 4.3 Metadata Management Script

#### 4.3.1 Image Metadata Generator
```javascript
// scripts/image-sourcing/metadata-generator.js
const fs = require('fs').promises;
const path = require('path');

class MetadataGenerator {
  constructor() {
    this.metadataPath = path.join(__dirname, '../../data/image-metadata.json');
  }

  async generateMetadata() {
    const images = await this.scanImages();
    const metadata = {
      generated: new Date().toISOString(),
      images: images
    };
    
    await fs.writeFile(this.metadataPath, JSON.stringify(metadata, null, 2));
  }

  async scanImages() {
    const imagesDir = path.join(__dirname, '../../public/images');
    const images = [];
    
    await this.scanDirectory(imagesDir, images);
    return images;
  }

  async scanDirectory(dir, images, relativePath = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativeFilePath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath, images, relativeFilePath);
      } else if (this.isImageFile(entry.name)) {
        const metadata = await this.generateImageMetadata(fullPath, relativeFilePath);
        images.push(metadata);
      }
    }
  }

  generateImageMetadata(filePath, relativePath) {
    const filename = path.basename(filePath);
    const altText = this.generateAltText(filename);
    const category = this.categorizeByPath(relativePath);
    
    return {
      filename,
      path: relativePath,
      altText,
      category,
      tags: this.generateTags(filename, category),
      lastModified: new Date().toISOString()
    };
  }

  generateAltText(filename) {
    const name = filename.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    
    if (name.includes('skyline')) {
      return "Kansas City skyline - Made With Love KC";
    } else if (name.includes('hoodie')) {
      return "KC Skyline Hoodie - Made With Love KC";
    } else if (name.includes('workshop')) {
      return "Behind the scenes at Made With Love KC workshop";
    }
    
    return `${name} - Made With Love KC`;
  }

  categorizeByPath(relativePath) {
    if (relativePath.includes('products/')) return 'product';
    if (relativePath.includes('kansas-city/')) return 'kansas-city';
    if (relativePath.includes('about/')) return 'about';
    if (relativePath.includes('instagram/')) return 'instagram';
    return 'gallery';
  }
}
```

## 5. Implementation Timeline

### 5.1 Phase 1: Setup and Core Images (Week 1)
- [ ] Set up Unsplash API access and credentials
- [ ] Create directory structure in `public/images`
- [ ] Implement basic image scraper for KC skyline images
- [ ] Source and optimize 5-10 core Kansas City images

### 5.2 Phase 2: Product Images (Week 2)
- [ ] Source hoodie and apparel lifestyle images
- [ ] Create product placeholder system
- [ ] Implement image optimization pipeline
- [ ] Generate thumbnails for all product categories

### 5.3 Phase 3: Content and Gallery (Week 3)
- [ ] Source workshop and behind-the-scenes imagery
- [ ] Add community and lifestyle photos
- [ ] Implement metadata generation system
- [ ] Create image organization automation

### 5.4 Phase 4: Optimization and Integration (Week 4)
- [ ] Implement responsive image loading
- [ ] Add lazy loading and performance optimization
- [ ] Create fallback image system
- [ ] Test all image references and fix broken links

## 6. Quality Assurance

### 6.1 Image Quality Checklist
- [ ] All images are high resolution (minimum 1920x1080)
- [ ] Proper WebP optimization implemented
- [ ] Alt text provided for all images
- [ ] Consistent naming convention followed
- [ ] Brand alignment verified (colors, style, mood)
- [ ] No broken image links in components

### 6.2 Performance Optimization
- [ ] Images optimized for web (85% quality)
- [ ] Multiple sizes generated (desktop, mobile, thumbnail)
- [ ] Lazy loading implemented
- [ ] CDN-ready file structure
- [ ] Metadata properly structured for SEO

### 6.3 Brand Consistency
- [ ] All images align with KC pride theme
- [ ] Consistent warm, welcoming aesthetic
- [ ] Proper representation of Kansas City culture
- [ ] Authentic, handmade feel maintained
- [ ] Community-focused imagery prioritized

## 7. Maintenance and Updates

### 7.1 Regular Updates
- **Monthly**: Review and update Instagram feed images
- **Quarterly**: Refresh product lifestyle images
- **Annually**: Update Kansas City landmark photos

### 7.2 Automation
- **Weekly**: Automated Instagram post image sync
- **Daily**: New product image processing
- **On-demand**: Custom image requests processing

### 7.3 Backup Strategy
- **Primary**: Vercel deployment with image optimization
- **Secondary**: Local backup of all source images
- **Archive**: Quarterly backup of processed images

---

This comprehensive plan ensures that "With Love from KC" has a complete, well-organized, and brand-aligned image library that supports the website's goals of celebrating Kansas City culture and showcasing handmade products with authentic local pride.
