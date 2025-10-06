import fs from 'fs/promises';
import path from 'path';

// Extract all image references from the codebase
async function extractImageReferences() {
  const imageReferences = new Set();
  
  // Files to check for image references
  const filesToCheck = [
    'src/app/about/page.tsx',
    'src/app/products/[slug]/page.tsx',
    'src/app/products/page.tsx',
    'src/app/gallery/page.tsx',
    'src/components/sections/FeaturedProducts.tsx',
    'src/components/sections/InstagramFeed.tsx',
    'src/components/sections/ProductCard.tsx',
    'data/products-madewithlovekc.json',
    'data/profile-madewithlovekc.json'
  ];
  
  for (const file of filesToCheck) {
    try {
      const content = await fs.readFile(file, 'utf8');
      
      // Find all image references
      const imageMatches = content.match(/["']\/images\/[^"']+["']/g);
      if (imageMatches) {
        imageMatches.forEach(match => {
          // Remove quotes
          const cleanPath = match.replace(/["']/g, '');
          imageReferences.add(cleanPath);
        });
      }
    } catch (error) {
      console.log(`⚠️  Could not read ${file}: ${error.message}`);
    }
  }
  
  return Array.from(imageReferences);
}

async function verifyImageExists(imagePath) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  try {
    await fs.access(fullPath);
    return { exists: true, path: imagePath };
  } catch {
    return { exists: false, path: imagePath };
  }
}

async function verifyAllImages() {
  console.log('🔍 Verifying all image references...\n');
  
  const imageReferences = await extractImageReferences();
  console.log(`Found ${imageReferences.length} image references in codebase\n`);
  
  const results = [];
  for (const imagePath of imageReferences) {
    const result = await verifyImageExists(imagePath);
    results.push(result);
    
    if (result.exists) {
      console.log(`✅ ${imagePath}`);
    } else {
      console.log(`❌ ${imagePath} - MISSING`);
    }
  }
  
  const missingImages = results.filter(r => !r.exists);
  const existingImages = results.filter(r => r.exists);
  
  console.log(`\n📊 Verification Summary:`);
  console.log(`✅ Existing images: ${existingImages.length}`);
  console.log(`❌ Missing images: ${missingImages.length}`);
  
  if (missingImages.length > 0) {
    console.log('\n🚨 Missing Images:');
    missingImages.forEach(img => {
      console.log(`   - ${img.path}`);
    });
  } else {
    console.log('\n🎉 All images are present! No missing images found.');
  }
  
  // List all actual image files
  console.log('\n📁 All image files in public/images:');
  const allImages = await getAllImageFiles();
  allImages.forEach(img => {
    console.log(`   - ${img}`);
  });
}

async function getAllImageFiles() {
  const imageFiles = [];
  
  async function scanDirectory(dir, relativePath = '') {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativeFilePath = path.join(relativePath, entry.name);
        
        if (entry.isDirectory()) {
          await scanDirectory(fullPath, relativeFilePath);
        } else if (entry.name.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)) {
          imageFiles.push(`/images/${relativeFilePath}`);
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }
  }
  
  await scanDirectory(path.join(process.cwd(), 'public/images'));
  return imageFiles.sort();
}

// Run verification
verifyAllImages().catch(console.error);
