"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Star, Users, Award } from 'lucide-react'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials'
import { Product } from '@/types'

export default function Home() {
  // Mock handlers for product interactions
  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product.name);
    // TODO: Implement cart functionality
  };

  const handleAddToWishlist = (product: Product) => {
    console.log('Adding to wishlist:', product.name);
    // TODO: Implement wishlist functionality
  };

  const handleQuickView = (product: Product) => {
    console.log('Quick view:', product.name);
    // TODO: Implement quick view modal
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero.webp" 
            alt="Kansas City Skyline - Made With Love KC" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute top-20 left-10 animate-bounce-gentle z-10">
          <Heart className="h-8 w-8 text-love-pink/60 drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle delay-300 z-10">
          <Heart className="h-6 w-6 text-kc-red/60 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce-gentle delay-500 z-10">
          <Heart className="h-10 w-10 text-kc-blue/60 drop-shadow-lg" />
        </div>
        
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-white mr-3 heart-pulse drop-shadow-lg" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-lg">
              Made With Love
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading text-white/90 mb-6 drop-shadow-lg">
            Kansas City
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Discover unique KC-inspired goods that celebrate our amazing city. 
            Every item is handmade with love and supports our local community.
          </p>
          
          {/* Trust Indicator */}
          <div className="flex items-center justify-center mb-8 text-sm text-white/80">
            <Users className="h-4 w-4 mr-2 drop-shadow-lg" />
            <span>2,847+ happy customers</span>
            <div className="flex items-center ml-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
              ))}
              <span className="ml-2">4.9/5 rating</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-kc-blue hover:bg-gray-100 text-lg px-8 py-6 shadow-lg" asChild>
              <Link href="/products">
                Shop KC Love
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-kc-blue border-white text-white hover:bg-white hover:text-kc-blue shadow-lg" asChild>
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Made With Love in Kansas City
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about Kansas City and love creating products that 
              celebrate our amazing city. Every item is thoughtfully designed and 
              handmade with attention to detail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-kc-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kc-blue/20 transition-colors">
                <Heart className="h-8 w-8 text-kc-blue" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">KC Pride</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product celebrates the unique culture and spirit of Kansas City.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-love-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-love-pink/20 transition-colors">
                <Award className="h-8 w-8 text-love-pink" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">Quality Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughtfully designed products made with high-quality materials.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-kc-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kc-red/20 transition-colors">
                <Users className="h-8 w-8 text-kc-red" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">Community First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Supporting local artists and businesses throughout Kansas City.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-kc-blue text-kc-blue hover:bg-kc-blue hover:text-white" asChild>
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        onQuickView={handleQuickView}
      />

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Customer Testimonials Section */}
      <CustomerTestimonials />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-kc-blue to-love-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Have questions about our products or want to collaborate? 
              We'd love to hear from you!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-kc-blue hover:bg-gray-100 text-lg px-8 py-6"
              asChild
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
