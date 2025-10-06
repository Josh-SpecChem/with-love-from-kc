#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

console.log('🧪 Testing With Love from KC Setup...\n')

// Test 1: Check if all required files exist
const requiredFiles = [
  'package.json',
  'tailwind.config.ts',
  'tsconfig.json',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/lib/supabase/client.ts',
  'scripts/data-scraping/instagram-scraper.ts',
  'scripts/data-processing/process-data.ts',
  'supabase/migrations/001_initial_schema.sql'
]

console.log('📁 Checking required files...')
let allFilesExist = true

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`)
  } else {
    console.log(`❌ ${file} - MISSING`)
    allFilesExist = false
  }
})

// Test 2: Check package.json scripts
console.log('\n📦 Checking package.json scripts...')
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  const requiredScripts = ['dev', 'build', 'scrape', 'process', 'sync']
  
  requiredScripts.forEach(script => {
    if (packageJson.scripts[script]) {
      console.log(`✅ ${script}: ${packageJson.scripts[script]}`)
    } else {
      console.log(`❌ ${script} - MISSING`)
      allFilesExist = false
    }
  })
} catch (error) {
  console.log('❌ Error reading package.json')
  allFilesExist = false
}

// Test 3: Check environment file
console.log('\n🔧 Checking environment configuration...')
if (fs.existsSync('env.example')) {
  console.log('✅ env.example exists')
} else {
  console.log('❌ env.example - MISSING')
  allFilesExist = false
}

// Test 4: Check directory structure
console.log('\n📂 Checking directory structure...')
const requiredDirs = [
  'src/app',
  'src/lib',
  'src/components',
  'scripts/data-scraping',
  'scripts/data-processing',
  'supabase/migrations',
  'public/images'
]

requiredDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir)
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/`)
  } else {
    console.log(`❌ ${dir}/ - MISSING`)
    allFilesExist = false
  }
})

// Summary
console.log('\n' + '='.repeat(50))
if (allFilesExist) {
  console.log('🎉 All tests passed! Setup is complete.')
  console.log('\n📋 Next steps:')
  console.log('1. Copy env.example to .env.local')
  console.log('2. Fill in your Supabase credentials')
  console.log('3. Run: npm run dev')
  console.log('4. Visit: http://localhost:3000')
  console.log('5. Admin dashboard: http://localhost:3000/admin')
} else {
  console.log('❌ Some tests failed. Please check the missing files.')
  process.exit(1)
}


