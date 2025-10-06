#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGE_TYPES = {
  'hoodie': {
    searchTerms: ['hoodie', 'sweatshirt', 'pullover'],
    category: 'apparel',
    count: 5
  },
  'mug': {
    searchTerms: ['coffee mug', 'ceramic mug', 'drinkware'],
    category: 'accessories', 
    count: 5
  },
  't-shirt': {
    searchTerms: ['t-shirt', 'tshirt', 'cotton shirt'],
    category: 'apparel',
    count: 5
  },
  'coaster': {
    searchTerms: ['coaster', 'drink coaster', 'beer coaster'],
    category: 'accessories',
    count: 5
  },
  'art-print': {
    searchTerms: ['art print', 'poster', 'wall art'],
    category: 'home',
    count: 5
  },
  'baseball-cap': {
    searchTerms: ['baseball cap', 'hat', 'cap'],
    category: 'apparel',
    count: 5
  },
  'social-media-headshot': {
    searchTerms: ['professional headshot', 'portrait', 'business photo'],
    category: 'team',
    count: 3
  }
};

const OUTPUT_DIR = path.join(__dirname, '../../public/images');

// Curated high-quality image URLs from Unsplash
const CURATED_IMAGES = {
  'hoodie': [
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&crop=center'
  ],
  'mug': [
    'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=800&h=800&fit=crop&crop=center'
  ],
  't-shirt': [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1583743814966-8936f37f0c0e?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1583743814966-8936f37f0c0e?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&crop=center'
  ],
  'coaster': [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center'
  ],
  'art-print': [
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&crop=center'
  ],
  'baseball-cap': [
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&crop=center'
  ],
  'social-media-headshot': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=center'
  ]
};

class UnsplashDownloader {
  constructor() {
    this.results = {};
  }

  async downloadImage(url, filename, category) {
    try {
      console.log(`⬇️  Downloading: ${filename}`);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const buffer = await response.arrayBuffer();
      
      // Ensure directory exists
      const categoryDir = path.join(OUTPUT_DIR, category);
      await fs.mkdir(categoryDir, { recursive: true });
      
      // Save image
      const filepath = path.join(categoryDir, filename);
      await fs.writeFile(filepath, Buffer.from(buffer));
      
      console.log(`✅ Saved: ${filepath}`);
      return filepath;
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error.message);
      return null;
    }
  }

  async downloadAllImages() {
    console.log('🚀 Starting image download...');
    
    for (const [type, config] of Object.entries(IMAGE_TYPES)) {
      console.log(`\n🎯 Processing ${type}...`);
      this.results[type] = [];
      
      const imageUrls = CURATED_IMAGES[type] || [];
      
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const filename = `${type}-${i + 1}.jpg`;
        const filepath = await this.downloadImage(url, filename, config.category);
        
        if (filepath) {
          this.results[type].push({
            filename,
            filepath,
            url,
            category: config.category
          });
        }
        
        // Add delay between downloads
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    return this.results;
  }

  async generateImageManifest(results) {
    const manifest = {
      generatedAt: new Date().toISOString(),
      totalImages: Object.values(results).flat().length,
      categories: {}
    };

    for (const [type, images] of Object.entries(results)) {
      const category = IMAGE_TYPES[type].category;
      if (!manifest.categories[category]) {
        manifest.categories[category] = [];
      }
      
      manifest.categories[category].push({
        type,
        images: images.map(img => ({
          filename: img.filename,
          relativePath: `/images/${img.category}/${img.filename}`,
          originalUrl: img.url
        }))
      });
    }

    const manifestPath = path.join(OUTPUT_DIR, 'unsplash-images-manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`📋 Generated manifest: ${manifestPath}`);
    
    return manifest;
  }
}

// Main execution
async function main() {
  const downloader = new UnsplashDownloader();
  
  try {
    const results = await downloader.downloadAllImages();
    const manifest = await downloader.generateImageManifest(results);
    
    console.log('\n🎉 Download completed!');
    console.log(`📊 Total images downloaded: ${manifest.totalImages}`);
    console.log(`📁 Images saved to: ${OUTPUT_DIR}`);
    
    // Print summary
    for (const [category, items] of Object.entries(manifest.categories)) {
      console.log(`\n📂 ${category}:`);
      for (const item of items) {
        console.log(`  - ${item.type}: ${item.images.length} images`);
      }
    }
    
  } catch (error) {
    console.error('❌ Download failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default UnsplashDownloader;

