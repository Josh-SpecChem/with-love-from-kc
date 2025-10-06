#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

async function optimizeNewImages() {
  console.log('🚀 Optimizing new product images...\n');
  
  const images = [
    {
      input: '/apparel/hoodie-new.png',
      output: '/apparel/hoodie-new.webp',
      maxWidth: 800
    },
    {
      input: '/accessories/coaster-new.png',
      output: '/accessories/coaster-new.webp',
      maxWidth: 600
    },
    {
      input: '/accessories/mug-new.png',
      output: '/accessories/mug-new.webp',
      maxWidth: 600
    }
  ];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const image of images) {
    const inputPath = path.join(IMAGES_DIR, image.input);
    const outputPath = path.join(IMAGES_DIR, image.output);
    
    try {
      const originalStats = await fs.stat(inputPath);
      const originalSize = originalStats.size;
      
      console.log(`🖼️  Optimizing: ${path.basename(inputPath)}`);
      
      await sharp(inputPath)
        .resize(image.maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: 85,
          effort: 6 
        })
        .toFile(outputPath);
      
      const newStats = await fs.stat(outputPath);
      const newSize = newStats.size;
      const saved = originalSize - newSize;
      const savedPercent = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`✅ Optimized: ${path.basename(inputPath)} (${formatBytes(originalSize)} → ${formatBytes(newSize)}, saved ${savedPercent}%)`);
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += newSize;
      
      // Replace original with optimized version
      await fs.copyFile(outputPath, inputPath.replace('.png', '.webp'));
      await fs.unlink(inputPath); // Remove original PNG
      await fs.unlink(outputPath); // Remove temp file
      
    } catch (error) {
      console.error(`❌ Error optimizing ${image.input}:`, error.message);
    }
  }
  
  console.log('\n🎉 New image optimization complete!');
  console.log('='.repeat(50));
  console.log(`📦 Original size: ${formatBytes(totalOriginalSize)}`);
  console.log(`📦 Optimized size: ${formatBytes(totalOptimizedSize)}`);
  console.log(`💾 Space saved: ${formatBytes(totalOriginalSize - totalOptimizedSize)}`);
  console.log(`📈 Compression: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run optimization
optimizeNewImages().catch(console.error);
