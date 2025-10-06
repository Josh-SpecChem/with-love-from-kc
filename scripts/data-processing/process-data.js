import fs from 'fs/promises'
import path from 'path'

export class DataProcessor {
  constructor() {
    this.dataDir = path.join(process.cwd(), 'data')
    this.imagesDir = path.join(process.cwd(), 'public', 'images')
  }

  async processInstagramData() {
    try {
      // Load scraped data
      const profileData = await this.loadJsonFile('profile-madewithlovekc.json')
      const postsData = await this.loadJsonFile('posts-madewithlovekc.json')

      if (!profileData || !postsData) {
        throw new Error('No scraped data found. Run the scraper first.')
      }

      console.log('Processing Instagram data...')

      // Process profile data
      await this.processProfile(profileData)

      // Process posts data
      await this.processPosts(postsData)

      console.log('Data processing completed!')
    } catch (error) {
      console.error('Data processing failed:', error)
      throw error
    }
  }

  async processProfile(profileData) {
    try {
      console.log('✅ Processing profile data...')
      console.log(`   Business: ${profileData.business_name}`)
      console.log(`   Instagram: @${profileData.username}`)
      console.log(`   Followers: ${profileData.follower_count}`)
      console.log(`   Bio: ${profileData.bio}`)
      
      // In a real implementation, this would save to Supabase
      console.log('✅ Profile data processed successfully')
    } catch (error) {
      console.error('Error processing profile:', error)
    }
  }

  async processPosts(postsData) {
    console.log(`✅ Processing ${postsData.length} posts...`)
    
    const processedPosts = []

    for (const post of postsData) {
      try {
        // Calculate engagement score
        const engagementScore = this.calculateEngagementScore(post.like_count, post.comment_count)

        // Determine if post should be featured
        const isFeatured = this.shouldFeaturePost(post, engagementScore)

        const processedPost = {
          id: post.id,
          caption: post.caption,
          media_type: post.media_type,
          category: post.category || 'lifestyle',
          tags: [...post.hashtags, ...post.mentions],
          engagement_score: engagementScore,
          is_featured: isFeatured,
          instagram_post_id: post.id,
          media_urls: post.media_urls,
          hashtags: post.hashtags,
          mentions: post.mentions,
          like_count: post.like_count,
          comment_count: post.comment_count,
          post_date: post.post_date
        }

        processedPosts.push(processedPost)
        
        console.log(`   ✅ Processed post ${post.id}: ${post.category} (${engagementScore} engagement)`)
      } catch (error) {
        console.error(`Error processing post ${post.id}:`, error)
      }
    }

    // Save processed posts
    await this.saveProcessedPosts(processedPosts)
  }

  calculateEngagementScore(likes, comments) {
    // Simple engagement score calculation
    // Weight comments more heavily than likes
    return (likes * 1) + (comments * 3)
  }

  shouldFeaturePost(post, engagementScore) {
    // Feature posts with high engagement or specific categories
    const highEngagement = engagementScore > 100
    const isProduct = post.category === 'product'
    const hasKansasCityTags = post.hashtags.some((tag) => 
      tag.toLowerCase().includes('kc') || 
      tag.toLowerCase().includes('kansascity') ||
      tag.toLowerCase().includes('kansas')
    )

    return highEngagement || isProduct || hasKansasCityTags
  }

  async saveProcessedPosts(posts) {
    try {
      const processedData = {
        processed_at: new Date().toISOString(),
        total_posts: posts.length,
        featured_posts: posts.filter(p => p.is_featured).length,
        posts_by_category: this.groupPostsByCategory(posts),
        posts: posts
      }

      await fs.writeFile(
        path.join(this.dataDir, 'processed-posts-madewithlovekc.json'),
        JSON.stringify(processedData, null, 2)
      )

      console.log(`✅ Saved ${posts.length} processed posts to database`)
      console.log(`   Featured posts: ${processedData.featured_posts}`)
      console.log(`   Categories: ${Object.keys(processedData.posts_by_category).join(', ')}`)
    } catch (error) {
      console.error('Error saving processed posts:', error)
    }
  }

  groupPostsByCategory(posts) {
    const categories = {}
    posts.forEach(post => {
      if (!categories[post.category]) {
        categories[post.category] = 0
      }
      categories[post.category]++
    })
    return categories
  }

  async generateProductData() {
    try {
      console.log('✅ Generating product data from posts...')
      
      // Load processed posts
      const processedData = await this.loadJsonFile('processed-posts-madewithlovekc.json')
      if (!processedData) return

      // Extract product information from posts
      const productPosts = processedData.posts.filter(post => post.category === 'product')
      
      const products = productPosts.map(post => ({
        name: this.extractProductName(post.caption),
        description: post.caption,
        category: this.extractProductCategory(post.hashtags),
        tags: post.hashtags,
        images: post.media_urls,
        instagram_post_id: post.id,
        is_available: true
      }))

      // Save products
      await fs.writeFile(
        path.join(this.dataDir, 'products-madewithlovekc.json'),
        JSON.stringify(products, null, 2)
      )

      console.log(`✅ Generated ${products.length} product entries`)
      products.forEach(product => {
        console.log(`   📦 ${product.name} (${product.category})`)
      })
    } catch (error) {
      console.error('Error generating product data:', error)
    }
  }

  extractProductName(caption) {
    // Simple product name extraction
    const lines = caption.split('\n')
    const firstLine = lines[0]?.trim()
    
    if (firstLine && firstLine.length < 50) {
      return firstLine
    }
    
    return 'Product'
  }

  extractProductCategory(hashtags) {
    const categories = {
      'apparel': ['shirt', 'hoodie', 'sweater', 'jacket', 'clothing'],
      'accessories': ['hat', 'cap', 'bag', 'mug', 'sticker'],
      'home': ['decor', 'art', 'print', 'poster'],
      'gift': ['gift', 'present', 'holiday']
    }

    for (const [category, keywords] of Object.entries(categories)) {
      if (hashtags.some(tag => keywords.some(keyword => tag.toLowerCase().includes(keyword)))) {
        return category
      }
    }

    return 'general'
  }

  async loadJsonFile(filename) {
    try {
      const filepath = path.join(this.dataDir, filename)
      const data = await fs.readFile(filepath, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      console.error(`Error loading ${filename}:`, error)
      return null
    }
  }
}

// Main execution function
export async function processData() {
  const processor = new DataProcessor()
  
  try {
    console.log('Starting data processing...')
    await processor.processInstagramData()
    await processor.generateProductData()
    console.log('Data processing completed successfully!')
  } catch (error) {
    console.error('Data processing failed:', error)
    throw error
  }
}


