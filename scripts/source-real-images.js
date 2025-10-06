import fs from 'fs/promises';
import path from 'path';

// Image sourcing configuration
const imageSources = {
  // Kansas City skyline images
  'kansas-city/skyline': {
    queries: [
      'Kansas City skyline',
      'Kansas City downtown',
      'KC skyline sunset',
      'Kansas City skyline night'
    ],
    count: 3,
    orientation: 'landscape'
  },
  
  // Kansas City landmarks
  'kansas-city/landmarks': {
    queries: [
      'Liberty Memorial Kansas City',
      'Union Station Kansas City',
      'Power and Light District Kansas City',
      'Crossroads Arts District Kansas City'
    ],
    count: 4,
    orientation: 'landscape'
  },
  
  // Workshop and behind-the-scenes
  'about': {
    queries: [
      'handmade craft workshop',
      'artisan workshop',
      'community gathering',
      'local business workshop'
    ],
    count: 3,
    orientation: 'landscape'
  },
  
  // Product lifestyle images
  'products/apparel': {
    queries: [
      'hoodie fashion street style',
      'comfortable hoodie lifestyle',
      'casual wear street style',
      'urban fashion hoodie'
    ],
    count: 6,
    orientation: 'portrait'
  },
  
  // Instagram-style content
  'instagram/posts': {
    queries: [
      'coffee shop lifestyle',
      'handmade products',
      'community event',
      'local business showcase'
    ],
    count: 6,
    orientation: 'square'
  }
};

// Fallback image URLs (using Unsplash source URLs)
const fallbackImages = {
  'about/kc-skyline.svg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
  'about/workshop.svg': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=800&fit=crop',
  'about/community-event.svg': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop',
  
  'kansas-city/skyline/kc-skyline-day.svg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
  'kansas-city/skyline/kc-skyline-night.svg': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
  'kansas-city/skyline/kc-skyline-sunset.svg': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
  
  'kansas-city/landmarks/liberty-memorial.svg': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
  'kansas-city/landmarks/union-station.svg': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop',
  'kansas-city/landmarks/power-and-light.svg': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
  'kansas-city/landmarks/crossroads-arts.svg': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
  
  'products/apparel/kc-skyline-hoodie-1.svg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
  'products/apparel/kc-skyline-hoodie-2.svg': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
  'products/apparel/kc-skyline-hoodie-3.svg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
  'products/apparel/kc-skyline-hoodie-4.svg': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
  'products/apparel/kc-skyline-hoodie.svg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
  
  'products/accessories/kc-pride-mug.svg': 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=600&h=600&fit=crop',
  'products/accessories/kc-art-print.svg': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
  'products/accessories/new-arrivals-accessories.svg': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop',
  
  'products/custom/custom-royals-gear.svg': 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&h=600&fit=crop',
  
  'instagram/posts/kc-skyline-hoodie.svg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
  'instagram/posts/workshop-behind-scenes.svg': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop',
  'instagram/posts/customer-mug.svg': 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=600&h=600&fit=crop',
  'instagram/posts/kc-love-event.svg': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop',
  'instagram/posts/coffee-shop-lifestyle.svg': 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop',
  'instagram/posts/custom-royals-gear.svg': 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&h=600&fit=crop',
  
  'team/sarah-johnson.svg': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
  'team/mike-rodriguez.svg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'team/jessica-chen.svg': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
};

async function downloadImage(url, filepath) {
  try {
    console.log(`Downloading: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Ensure directory exists
    await fs.mkdir(path.dirname(filepath), { recursive: true });
    
    // Write the image file
    await fs.writeFile(filepath, buffer);
    
    console.log(`✅ Downloaded: ${path.basename(filepath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to download ${url}:`, error.message);
    return false;
  }
}

async function replacePlaceholderImages() {
  console.log('🔄 Replacing placeholder images with real photos...\n');
  
  let successCount = 0;
  let totalCount = Object.keys(fallbackImages).length;
  
  for (const [relativePath, imageUrl] of Object.entries(fallbackImages)) {
    const filepath = path.join(process.cwd(), 'public/images', relativePath);
    
    // Skip if file doesn't exist (placeholder wasn't created)
    try {
      await fs.access(filepath);
    } catch {
      console.log(`⏭️  Skipping ${relativePath} (placeholder not found)`);
      continue;
    }
    
    const success = await downloadImage(imageUrl, filepath);
    if (success) {
      successCount++;
    }
    
    // Add small delay to be respectful to image servers
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n📊 Download Summary:`);
  console.log(`✅ Successfully downloaded: ${successCount}/${totalCount} images`);
  console.log(`❌ Failed downloads: ${totalCount - successCount}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Images have been updated! The website now has real photos.');
  }
}

// Run the script
replacePlaceholderImages().catch(console.error);

