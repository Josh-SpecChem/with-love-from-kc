#!/usr/bin/env node

import { scrapeInstagramData } from './mock-data-generator.js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

async function main() {
  const username = process.env.INSTAGRAM_USERNAME || 'madewithlovekc'
  const maxPosts = parseInt(process.env.MAX_POSTS_PER_RUN || '50')
  
  console.log(`Starting Instagram data scraping for @${username}`)
  console.log(`Maximum posts to scrape: ${maxPosts}`)
  
  try {
    const result = await scrapeInstagramData(username, maxPosts)
    
    console.log('Scraping Summary:')
    console.log(`- Profile data: ${result.profile ? 'Success' : 'Failed'}`)
    console.log(`- Posts scraped: ${result.posts.length}`)
    
    if (result.profile) {
      console.log(`- Followers: ${result.profile.follower_count}`)
      console.log(`- Following: ${result.profile.following_count}`)
      console.log(`- Verified: ${result.profile.verification_status}`)
    }
    
    console.log('Scraping completed successfully!')
  } catch (error) {
    console.error('Scraping failed:', error)
    process.exit(1)
  }
}

// Run the scraper
main().catch(console.error)
