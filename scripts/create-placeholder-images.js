import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create placeholder images for all required image paths
const imageRequirements = {
  // About page images
  about: [
    'kc-skyline.jpg',
    'workshop.jpg', 
    'community-event.jpg'
  ],
  
  // Team images
  team: [
    'sarah-johnson.jpg',
    'mike-rodriguez.jpg',
    'jessica-chen.jpg'
  ],
  
  // Product images
  'products/apparel': [
    'kc-skyline-hoodie-1.jpg',
    'kc-skyline-hoodie-2.jpg', 
    'kc-skyline-hoodie-3.jpg',
    'kc-skyline-hoodie-4.jpg',
    'kc-skyline-hoodie.jpg',
    'kc-pride-tee.jpg'
  ],
  
  'products/accessories': [
    'kc-pride-mug.jpg',
    'kc-art-print.jpg'
  ],
  
  'products/custom': [
    'custom-royals-gear.jpg'
  ],
  
  // Instagram images
  'instagram/posts': [
    'kc-skyline-hoodie.jpg',
    'workshop-behind-scenes.jpg',
    'customer-mug.jpg',
    'kc-love-event.jpg',
    'coffee-shop-lifestyle.jpg',
    'custom-royals-gear.jpg'
  ],
  
  // Kansas City images
  'kansas-city/skyline': [
    'kc-skyline-day.jpg',
    'kc-skyline-night.jpg',
    'kc-skyline-sunset.jpg'
  ],
  
  'kansas-city/landmarks': [
    'liberty-memorial.jpg',
    'union-station.jpg',
    'power-and-light.jpg',
    'crossroads-arts.jpg'
  ],
  
  'kansas-city/culture': [
    'bbq-culture.jpg',
    'jazz-district.jpg',
    'sports-pride.jpg'
  ],
  
  // Placeholder images
  placeholders: [
    'product-placeholder.jpg',
    'profile-placeholder.jpg',
    'loading-placeholder.jpg',
    'instagram-placeholder.jpg'
  ]
};

async function createPlaceholderImage(filename, category, dimensions = { width: 800, height: 600 }) {
  const dir = path.join(process.cwd(), 'public/images', category);
  const filepath = path.join(dir, filename);
  
  // Create SVG placeholder
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${dimensions.width}" height="${dimensions.height}" viewBox="0 0 ${dimensions.width} ${dimensions.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#DC2626;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)" />
  <text x="50%" y="40%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">Made With Love KC</text>
  <text x="50%" y="50%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16">${filename.replace('.jpg', '').replace('-', ' ').toUpperCase()}</text>
  <text x="50%" y="60%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12">${category}</text>
</svg>`;
  
  // Ensure directory exists
  await fs.mkdir(dir, { recursive: true });
  
  // Write SVG file
  await fs.writeFile(filepath.replace('.jpg', '.svg'), svgContent);
  
  console.log(`Created placeholder: ${category}/${filename.replace('.jpg', '.svg')}`);
}

async function createAllPlaceholders() {
  console.log('Creating placeholder images...');
  
  for (const [category, files] of Object.entries(imageRequirements)) {
    for (const file of files) {
      // Different dimensions for different categories
      let dimensions = { width: 800, height: 600 };
      
      if (category.includes('team')) {
        dimensions = { width: 400, height: 400 }; // Square for team photos
      } else if (category.includes('products')) {
        dimensions = { width: 600, height: 600 }; // Square for products
      } else if (category.includes('instagram')) {
        dimensions = { width: 600, height: 600 }; // Square for Instagram
      } else if (category.includes('skyline') || category.includes('landmarks')) {
        dimensions = { width: 1200, height: 800 }; // Landscape for city photos
      }
      
      await createPlaceholderImage(file, category, dimensions);
    }
  }
  
  console.log('✅ All placeholder images created!');
}

// Run the script
createAllPlaceholders().catch(console.error);
