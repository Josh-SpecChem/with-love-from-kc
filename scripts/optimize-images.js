#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

class ImageOptimizer {
  constructor() {
    this.stats = {
      processed: 0,
      totalSize: 0,
      originalSize: 0,
      saved: 0
    };
  }

  async optimizeImage(inputPath, outputPath, options = {}) {
    try {
      const originalStats = await fs.stat(inputPath);
      const originalSize = originalStats.size;
      
      console.log(`🖼️  Optimizing: ${path.basename(inputPath)}`);
      
      let sharpInstance = sharp(inputPath);
      
      // Apply optimizations based on file type and options
      if (path.extname(inputPath).toLowerCase() === '.png') {
        // For PNG files, convert to WebP for better compression
        sharpInstance = sharpInstance.webp({ 
          quality: 85,
          effort: 6 
        });
        outputPath = outputPath.replace(/\.png$/, '.webp');
      } else if (path.extname(inputPath).toLowerCase() === '.jpg' || path.extname(inputPath).toLowerCase() === '.jpeg') {
        // For JPG files, optimize and resize if needed
        sharpInstance = sharpInstance
          .jpeg({ 
            quality: 85,
            progressive: true,
            mozjpeg: true
          });
      }
      
      // Resize images based on their purpose
      if (options.maxWidth) {
        sharpInstance = sharpInstance.resize(options.maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }
      
      await sharpInstance.toFile(outputPath);
      
      const newStats = await fs.stat(outputPath);
      const newSize = newStats.size;
      const saved = originalSize - newSize;
      const savedPercent = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`✅ Optimized: ${path.basename(inputPath)} (${this.formatBytes(originalSize)} → ${this.formatBytes(newSize)}, saved ${savedPercent}%)`);
      
      this.stats.processed++;
      this.stats.originalSize += originalSize;
      this.stats.totalSize += newSize;
      this.stats.saved += saved;
      
      return {
        originalSize,
        newSize,
        saved,
        savedPercent
      };
    } catch (error) {
      console.error(`❌ Error optimizing ${inputPath}:`, error.message);
      return null;
    }
  }

  async optimizeDirectory(dirPath, options = {}) {
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item.name);
      
      if (item.isDirectory()) {
        await this.optimizeDirectory(itemPath, options);
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          await this.optimizeImage(itemPath, itemPath, options);
        }
      }
    }
  }

  async optimizeAllImages() {
    console.log('🚀 Starting image optimization...\n');
    
    // Optimize different types of images with different settings
    console.log('\n🎯 Optimizing images by category...\n');
    
    // Hero images - keep high quality but optimize
    const heroPath = path.join(IMAGES_DIR, 'hero.png');
    if (await this.fileExists(heroPath)) {
      await this.optimizeImage(heroPath, heroPath, { maxWidth: 1920 });
    }
    
    // Product images - optimize for web display
    const productDirs = ['apparel', 'accessories', 'home', 'team'];
    for (const dir of productDirs) {
      const dirPath = path.join(IMAGES_DIR, dir);
      if (await this.directoryExists(dirPath)) {
        console.log(`\n📁 Optimizing ${dir} images...`);
        await this.optimizeDirectory(dirPath, { maxWidth: 800 });
      }
    }
    
    // Logo images - keep smaller but optimize
    const logoDir = path.join(IMAGES_DIR, 'branding', 'logos');
    if (await this.directoryExists(logoDir)) {
      console.log('\n📁 Optimizing logo images...');
      await this.optimizeDirectory(logoDir, { maxWidth: 400 });
    }
    
    // Root logo images
    const rootLogos = ['logo-1.jpg', 'logo-2.jpg'];
    for (const logo of rootLogos) {
      const logoPath = path.join(IMAGES_DIR, logo);
      if (await this.fileExists(logoPath)) {
        await this.optimizeImage(logoPath, logoPath, { maxWidth: 400 });
      }
    }
    
    this.printSummary();
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async directoryExists(dirPath) {
    try {
      const stats = await fs.stat(dirPath);
      return stats.isDirectory();
    } catch {
      return false;
    }
  }

  async copyDirectory(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const items = await fs.readdir(src, { withFileTypes: true });
    
    for (const item of items) {
      const srcPath = path.join(src, item.name);
      const destPath = path.join(dest, item.name);
      
      if (item.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  printSummary() {
    console.log('\n🎉 Image optimization complete!');
    console.log('='.repeat(50));
    console.log(`📊 Images processed: ${this.stats.processed}`);
    console.log(`📦 Original size: ${this.formatBytes(this.stats.originalSize)}`);
    console.log(`📦 Optimized size: ${this.formatBytes(this.stats.totalSize)}`);
    console.log(`💾 Space saved: ${this.formatBytes(this.stats.saved)}`);
    console.log(`📈 Compression: ${((this.stats.saved / this.stats.originalSize) * 100).toFixed(1)}%`);
    console.log('='.repeat(50));
    
    if (this.stats.saved > 0) {
      console.log('✨ All images have been optimized for web!');
    }
  }
}

// Main execution
async function main() {
  const optimizer = new ImageOptimizer();
  
  try {
    await optimizer.optimizeAllImages();
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default ImageOptimizer;
