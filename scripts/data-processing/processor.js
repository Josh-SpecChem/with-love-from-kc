#!/usr/bin/env node

import { processData } from './process-data.js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

async function main() {
  console.log('Starting data processing...')
  
  try {
    await processData()
    console.log('Data processing completed successfully!')
  } catch (error) {
    console.error('Data processing failed:', error)
    process.exit(1)
  }
}

// Run the processor
main().catch(console.error)
