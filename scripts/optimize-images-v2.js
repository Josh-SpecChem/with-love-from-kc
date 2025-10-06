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

  async optimizeAllImages() {
    console.log('🚀 Starting image optimization...\n');
    
    // Create optimized directory
    const optimizedDir = path.join(IMAGES_DIR, 'optimized');
    await fs.mkdir(optimizedDir, { recursive: true });
    
    // Find all image files
    const imageFiles = await this.findAllImages(IMAGES_DIR);
    
    console.log(`📊 Found ${imageFiles.length} images to optimize\n`);
    
    for (const imagePath of imageFiles) {
      const relativePath = path.relative(IMAGES_DIR, imagePath);
      const outputPath = path.join(optimizedDir, relativePath);
      
      // Create output directory if needed
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      
      // Determine optimization settings based on file type and location
      let options = {};
      
      if (relativePath.includes('hero')) {
        options = { maxWidth: 1920 }; // Hero images - keep high quality
      } else if (relativePath.includes('logo')) {
        options = { maxWidth: 400 }; // Logo images - smaller
      } else {
        options = { maxWidth: 800 }; // Product images - web optimized
      }
      
      await this.optimizeImage(imagePath, outputPath, options);
    }
    
    this.printSummary();
    
    console.log('\n🔄 Replacing original images with optimized versions...');
    await this.replaceOriginals(optimizedDir, IMAGES_DIR);
    
    console.log('\n✨ Image optimization complete!');
  }

  async findAllImages(dir) {
    const images = [];
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const itemPath = path.join(dir, item.name);
      
      if (item.isDirectory() && item.name !== 'optimized') {
        const subImages = await this.findAllImages(itemPath);
        images.push(...subImages);
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          images.push(itemPath);
        }
      }
    }
    
    return images;
  }

  async replaceOriginals(sourceDir, targetDir) {
    const items = await fs.readdir(sourceDir, { withFileTypes: true });
    
    for (const item of items) {
      const sourcePath = path.join(sourceDir, item.name);
      const targetPath = path.join(targetDir, item.name);
      
      if (item.isDirectory()) {
        await fs.mkdir(targetPath, { recursive: true });
        await this.replaceOriginals(sourcePath, targetPath);
      } else {
        // Copy optimized file to replace original
        await fs.copyFile(sourcePath, targetPath);
      }
    }
    
    // Clean up optimized directory
    await fs.rm(sourceDir, { recursive: true, force: true });
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
