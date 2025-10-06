# With Love from KC - Website Development

A comprehensive website for "With Love from KC", a Kansas City business that operates primarily through Instagram. This project implements a complete data acquisition strategy to transform their Instagram presence into a full-featured website.

## 🚀 Features

- **Instagram Data Scraping**: Automated scraping of Instagram posts, profile data, and media
- **Data Processing Pipeline**: Image optimization, content categorization, and database integration
- **Modern Web Stack**: Next.js 14, TypeScript, Tailwind CSS, Supabase
- **Admin Dashboard**: Content management and data synchronization tools
- **Responsive Design**: Mobile-first approach with modern UI components

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Instagram Business Account (for API access)

## 🛠️ Installation

1. **Clone and install dependencies**:
   ```bash
   cd with-love-from-kc
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   INSTAGRAM_ACCESS_TOKEN=your_instagram_token
   INSTAGRAM_USERNAME=withlovefromkc
   ```

3. **Set up Supabase database**:
   ```bash
   # Run the migration to create tables
   # Copy the SQL from supabase/migrations/001_initial_schema.sql
   # and run it in your Supabase SQL editor
   ```

## 🔧 Usage

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Data Scraping
```bash
# Scrape Instagram data
npm run scrape

# Process scraped data
npm run process
```

### Admin Dashboard
Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin dashboard for:
- Instagram data synchronization
- Content management
- Data processing

## 📊 Data Acquisition Strategy

### 1. Instagram Scraping
- **Profile Data**: Business name, bio, follower count, verification status
- **Posts**: Images, captions, hashtags, engagement metrics
- **Media**: High-resolution images and videos
- **Categorization**: Automatic content classification

### 2. Data Processing
- **Image Optimization**: WebP conversion, responsive sizing
- **Content Classification**: Product, lifestyle, behind-scenes, testimonials
- **Engagement Scoring**: Like/comment analysis for featured content
- **Database Integration**: Structured data storage in Supabase

### 3. Content Management
- **Admin Dashboard**: Manual content curation
- **Automated Sync**: Scheduled data updates
- **Quality Control**: Manual review and approval process

## 🗄️ Database Schema

The project uses Supabase (PostgreSQL) with the following tables:

- **profiles**: Business profile information
- **instagram_posts**: Scraped Instagram content
- **products**: Product listings and details
- **testimonials**: Customer reviews and feedback
- **media_library**: Optimized media assets

## 🎨 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Scraping**: Puppeteer, Playwright
- **Image Processing**: Sharp
- **Deployment**: Vercel

## 📁 Project Structure

```
with-love-from-kc/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/              # Admin dashboard
│   │   ├── api/                # API routes
│   │   └── page.tsx            # Home page
│   ├── lib/
│   │   └── supabase/          # Supabase client setup
│   └── components/             # React components
├── scripts/
│   ├── data-scraping/         # Instagram scraping tools
│   └── data-processing/       # Data processing pipeline
├── supabase/
│   └── migrations/            # Database schema
└── public/
    └── images/                # Optimized media assets
```

## 🔒 Security Considerations

- **Rate Limiting**: Respect Instagram's API limits
- **Data Privacy**: GDPR compliance for EU visitors
- **Authentication**: Secure admin access
- **Input Validation**: Sanitize all user inputs

## 📈 Performance Optimization

- **Image Optimization**: WebP format, responsive images
- **Caching**: API response caching
- **CDN**: Vercel's global CDN
- **Lazy Loading**: Progressive image loading

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
INSTAGRAM_ACCESS_TOKEN=your_instagram_token
```

## 📝 API Endpoints

- `GET /api/posts` - Fetch Instagram posts
- `GET /api/products` - Fetch product listings
- `POST /api/sync-instagram` - Trigger data synchronization

## 🔄 Data Synchronization

The system supports three sync modes:

1. **Scrape**: Extract new data from Instagram
2. **Process**: Optimize and categorize existing data
3. **Sync**: Complete scrape + process workflow

## 📊 Monitoring and Analytics

- **Performance**: Vercel Analytics
- **Errors**: Error tracking and logging
- **Usage**: User engagement metrics
- **Data Quality**: Content validation reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the documentation
2. Review the admin dashboard
3. Check Supabase logs
4. Contact the development team

---

**Note**: This project implements Instagram data scraping for legitimate business purposes. Ensure compliance with Instagram's Terms of Service and applicable data protection regulations.



