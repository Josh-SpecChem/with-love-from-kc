-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Business Profile Table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  bio TEXT,
  profile_image_url TEXT,
  cover_image_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website_url TEXT,
  instagram_handle TEXT UNIQUE,
  follower_count INTEGER DEFAULT 0,
  following_count INTEGER DEFAULT 0,
  verification_status BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Instagram Posts Table
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instagram_post_id TEXT UNIQUE NOT NULL,
  caption TEXT,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video', 'carousel')),
  media_urls TEXT[] NOT NULL,
  thumbnail_url TEXT,
  hashtags TEXT[],
  mentions TEXT[],
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  post_date TIMESTAMP WITH TIME ZONE NOT NULL,
  scraped_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT FALSE,
  category TEXT CHECK (category IN ('product', 'lifestyle', 'behind_scenes', 'testimonial', 'event')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  category TEXT,
  tags TEXT[],
  images TEXT[] NOT NULL,
  instagram_post_id UUID REFERENCES instagram_posts(id),
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Testimonials Table
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT,
  customer_instagram TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  instagram_post_id UUID REFERENCES instagram_posts(id),
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media Library Table
CREATE TABLE media_library (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  original_url TEXT,
  optimized_url TEXT,
  file_type TEXT NOT NULL CHECK (file_type IN ('image', 'video')),
  file_size INTEGER,
  dimensions JSONB, -- {width: 1920, height: 1080}
  alt_text TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_instagram_posts_date ON instagram_posts(post_date DESC);
CREATE INDEX idx_instagram_posts_category ON instagram_posts(category);
CREATE INDEX idx_instagram_posts_featured ON instagram_posts(is_featured);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_available ON products(is_available);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured);

-- Full-text search indexes
CREATE INDEX idx_posts_search ON instagram_posts USING gin(to_tsvector('english', caption));
CREATE INDEX idx_products_search ON products USING gin(to_tsvector('english', name || ' ' || COALESCE(description, '')));

-- Row Level Security policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;

-- Public read access for website visitors
CREATE POLICY "Public read access profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public read access posts" ON instagram_posts FOR SELECT USING (true);
CREATE POLICY "Public read access products" ON products FOR SELECT USING (is_available = true);
CREATE POLICY "Public read access testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access media" ON media_library FOR SELECT USING (true);

-- Admin write access (requires authentication)
CREATE POLICY "Admin write access profiles" ON profiles FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin write access posts" ON instagram_posts FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin write access products" ON products FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin write access testimonials" ON testimonials FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Admin write access media" ON media_library FOR ALL USING (auth.role() = 'service_role');

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert initial profile data
INSERT INTO profiles (business_name, instagram_handle, bio) 
VALUES ('With Love from KC', 'withlovefromkc', 'Kansas City inspired products and merchandise')
ON CONFLICT (instagram_handle) DO NOTHING;


