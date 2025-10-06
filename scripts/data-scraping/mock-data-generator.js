import fs from 'fs/promises'
import path from 'path'

// Mock data generator for Made With Love KC based on their actual Instagram presence
export async function generateMockData() {
  const dataDir = path.join(process.cwd(), 'data')
  await fs.mkdir(dataDir, { recursive: true })

  // Generate realistic profile data for Made With Love KC
  const profileData = {
    username: 'made.withlovekc',
    business_name: 'Made With Love KC',
    bio: 'Kansas City handmade goods & custom creations 💕 Supporting local artists & spreading KC love ✨',
    profile_image_url: '/images/logo-1.jpg',
    follower_count: 2847,
    following_count: 892,
    verification_status: false,
    contact_email: 'hello@madewithlovekc.com',
    website_url: 'https://madewithlovekc.com'
  }

  // Generate realistic Instagram posts data
  const postsData = [
    {
      id: 'post_001',
      caption: 'New KC skyline hoodies just dropped! 🏙️✨ Perfect for showing your KC pride. Available in multiple colors and sizes. DM to order! #KansasCity #KCpride #localbusiness #madewithlovekc',
      media_type: 'carousel',
      media_urls: ['/images/kc-hoodie-1.jpg', '/images/kc-hoodie-2.jpg'],
      hashtags: ['kansascity', 'kcpride', 'localbusiness', 'madewithlovekc', 'hoodie', 'skyline'],
      mentions: [],
      like_count: 156,
      comment_count: 23,
      post_date: '2024-01-15T14:30:00Z',
      category: 'product'
    },
    {
      id: 'post_002',
      caption: 'Behind the scenes of our latest custom order! 🎨 Creating personalized KC-themed gifts is our passion. Each piece is handcrafted with love right here in Kansas City. #customorders #handmade #kansascity #localart #madewithlovekc',
      media_type: 'image',
      media_urls: ['/images/workshop-behind-scenes.jpg'],
      hashtags: ['customorders', 'handmade', 'kansascity', 'localart', 'madewithlovekc', 'behindthescenes'],
      mentions: [],
      like_count: 89,
      comment_count: 12,
      post_date: '2024-01-12T10:15:00Z',
      category: 'behind_scenes'
    },
    {
      id: 'post_003',
      caption: 'Customer love! 💕 "Absolutely obsessed with my new KC mug! Perfect for my morning coffee and shows my KC pride everywhere I go." - Sarah M. Thank you for the amazing review! #customerlove #testimonial #kansascity #madewithlovekc',
      media_type: 'image',
      media_urls: ['/images/customer-testimonial-mug.jpg'],
      hashtags: ['customerlove', 'testimonial', 'kansascity', 'madewithlovekc', 'review'],
      mentions: [],
      like_count: 67,
      comment_count: 8,
      post_date: '2024-01-10T16:45:00Z',
      category: 'testimonial'
    },
    {
      id: 'post_004',
      caption: 'KC Love Event was amazing! 🎉 Met so many amazing local artists and customers. Thank you to everyone who stopped by our booth! The KC community never fails to amaze us. #kcloveevent #kansascity #community #localartists #madewithlovekc',
      media_type: 'carousel',
      media_urls: ['/images/kc-love-event-1.jpg', '/images/kc-love-event-2.jpg', '/images/kc-love-event-3.jpg'],
      hashtags: ['kcloveevent', 'kansascity', 'community', 'localartists', 'madewithlovekc', 'event'],
      mentions: [],
      like_count: 134,
      comment_count: 19,
      post_date: '2024-01-08T20:30:00Z',
      category: 'event'
    },
    {
      id: 'post_005',
      caption: 'New arrivals! 🌟 KC-themed stickers, magnets, and keychains now available! Perfect for adding a little KC love to your everyday items. Shop link in bio! #newarrivals #kansascity #stickers #magnets #keychains #madewithlovekc',
      media_type: 'image',
      media_urls: ['/images/new-arrivals-accessories.jpg'],
      hashtags: ['newarrivals', 'kansascity', 'stickers', 'magnets', 'keychains', 'madewithlovekc'],
      mentions: [],
      like_count: 98,
      comment_count: 15,
      post_date: '2024-01-05T11:20:00Z',
      category: 'product'
    },
    {
      id: 'post_006',
      caption: 'Coffee shop vibes ☕️ Working on some new designs while enjoying the best coffee in KC! The creative process never stops. What KC spots should we feature next? #coffeeshop #kansascity #creativeprocess #localcoffee #madewithlovekc',
      media_type: 'image',
      media_urls: ['/images/coffee-shop-creative.jpg'],
      hashtags: ['coffeeshop', 'kansascity', 'creativeprocess', 'localcoffee', 'madewithlovekc', 'lifestyle'],
      mentions: [],
      like_count: 76,
      comment_count: 11,
      post_date: '2024-01-03T09:45:00Z',
      category: 'lifestyle'
    },
    {
      id: 'post_007',
      caption: 'Custom KC Royals gear! ⚾️ Just finished this custom Royals-themed design for a customer. Nothing beats KC sports pride! Available for Chiefs, Sporting KC, and Royals fans. #kcroyals #kansascity #customdesign #sports #madewithlovekc',
      media_type: 'image',
      media_urls: ['/images/custom-royals-gear.jpg'],
      hashtags: ['kcroyals', 'kansascity', 'customdesign', 'sports', 'madewithlovekc', 'chiefs'],
      mentions: [],
      like_count: 145,
      comment_count: 28,
      post_date: '2024-01-01T15:10:00Z',
      category: 'product'
    },
    {
      id: 'post_008',
      caption: 'Thank you KC! 🙏 Another amazing year of creating handmade goods for our amazing community. Your support means everything to us. Here\'s to more KC love in 2024! #thankyou #kansascity #community #grateful #madewithlovekc #2024',
      media_type: 'image',
      media_urls: ['/images/thank-you-kc.jpg'],
      hashtags: ['thankyou', 'kansascity', 'community', 'grateful', 'madewithlovekc', '2024'],
      mentions: [],
      like_count: 203,
      comment_count: 34,
      post_date: '2023-12-31T23:59:00Z',
      category: 'lifestyle'
    }
  ]

  // Save profile data
  await fs.writeFile(
    path.join(dataDir, 'profile-madewithlovekc.json'),
    JSON.stringify(profileData, null, 2)
  )

  // Save posts data
  await fs.writeFile(
    path.join(dataDir, 'posts-madewithlovekc.json'),
    JSON.stringify(postsData, null, 2)
  )

  console.log('✅ Mock data generated successfully!')
  console.log(`📊 Generated ${postsData.length} posts for Made With Love KC`)
  console.log(`👤 Profile: ${profileData.business_name} (@${profileData.username})`)
  console.log(`📈 Followers: ${profileData.follower_count}`)

  return { profile: profileData, posts: postsData }
}

// Update the scraper to use mock data
export async function scrapeInstagramData(username = 'madewithlovekc', maxPosts = 50) {
  console.log(`🔍 Generating mock Instagram data for @${username}...`)
  
  const result = await generateMockData()
  
  console.log('✅ Mock data generation completed!')
  return result
}


