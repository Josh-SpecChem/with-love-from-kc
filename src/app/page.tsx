"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Star, Users, Award, Gift, MessageCircle } from 'lucide-react'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { InstagramFeed } from '@/components/sections/InstagramFeed'
import { CustomerTestimonials } from '@/components/sections/CustomerTestimonials'
import { EmailSubscriptionModal } from '@/components/ui/modal'
import { Product } from '@/types'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Show email modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      {/* Email Subscription Modal */}
      <EmailSubscriptionModal 
        open={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-pink">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero.webp" 
            alt="Kansas City Skyline - Made With Love KC" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute top-20 left-10 animate-bounce-gentle z-10">
          <Heart className="h-8 w-8 text-white/60 drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle delay-300 z-10">
          <Heart className="h-6 w-6 text-white/60 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce-gentle delay-500 z-10">
          <Heart className="h-10 w-10 text-white/60 drop-shadow-lg" />
        </div>
        
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-white mr-3 heart-pulse drop-shadow-lg" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg uppercase tracking-wide">
              Made With Love
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-script text-white/90 mb-6 drop-shadow-lg">
            Kansas City
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
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
            <Button size="lg" variant="white-outline" className="text-lg px-8 py-6 shadow-lg">
              <Link href="/products">
                Shop KC Love
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-lg px-8 py-6 text-white hover:text-primary-pink shadow-lg">
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-wide">
              Featured Collections
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Link href="/collections" className="text-sm text-black underline hover:text-primary-pink transition-colors font-sans">
                View More
              </Link>
            </div>
            
            {/* Collection Tabs */}
            <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
              <button className="text-xs sm:text-sm font-medium text-black border-b-2 border-black pb-2 uppercase tracking-wide font-sans hover:text-primary-pink transition-colors">
                KC Pride Collection
              </button>
              <button className="text-xs sm:text-sm font-medium text-gray-500 hover:text-black hover:border-b-2 hover:border-gray-500 pb-2 uppercase tracking-wide font-sans transition-colors">
                Comfort Classics Collection
              </button>
            </div>
          </div>
          
          {/* Product Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* KC Parking Cap & Hoodie */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-square bg-primary-pink rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/apparel/kc-parking-cap-hoodie.webp" 
                    alt="KC Parking Cap and Hoodie Set" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-black font-sans mb-1 group-hover:text-primary-pink transition-colors">KC Parking Cap & Hoodie</h3>
                <p className="text-xs text-gray-500 font-sans mb-1">Made With Love KC</p>
                <p className="text-sm font-bold text-black font-sans">$89.99</p>
              </div>

              {/* Matching Loungewear Set */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-square bg-primary-pink rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/apparel/matching-loungewear-set.webp" 
                    alt="Matching Loungewear Set" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-black font-sans mb-1 group-hover:text-primary-pink transition-colors">Matching Loungewear Set</h3>
                <p className="text-xs text-gray-500 font-sans mb-1">Made With Love KC</p>
                <p className="text-sm font-bold text-black font-sans">$79.99</p>
              </div>

              {/* Cityscape T-Shirt */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-square bg-primary-pink rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/apparel/cityscape-t-shirt.webp" 
                    alt="Kansas City Skyline T-Shirt" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-black font-sans mb-1 group-hover:text-primary-pink transition-colors">KC Skyline T-Shirt</h3>
                <p className="text-xs text-gray-500 font-sans mb-1">Made With Love KC</p>
                <p className="text-sm font-bold text-black font-sans">$34.99</p>
              </div>

              {/* KC Skyline Gradient Tee */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-square bg-primary-pink rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/apparel/kc-skyline-gradient-tee.webp" 
                    alt="KC Skyline Gradient T-Shirt" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-black font-sans mb-1 group-hover:text-primary-pink transition-colors">KC Skyline Gradient Tee</h3>
                <p className="text-xs text-gray-500 font-sans mb-1">Made With Love KC</p>
                <p className="text-sm font-bold text-black font-sans">$39.99</p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-end space-x-2 mt-4">
              <button className="p-2 rounded-full border border-gray-300 hover:border-primary-pink transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:border-primary-pink transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-wide">
              Made With Love in Kansas City
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
              We're passionate about Kansas City and love creating products that 
              celebrate our amazing city. Every item is thoughtfully designed and 
              handmade with attention to detail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-pink/20 transition-colors">
                <Heart className="h-8 w-8 text-primary-pink" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-black">KC Pride</h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                Every product celebrates the unique culture and spirit of Kansas City.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-pink/20 transition-colors">
                <Award className="h-8 w-8 text-primary-pink" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-black">Quality Design</h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                Thoughtfully designed products made with high-quality materials.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-pink/20 transition-colors">
                <Users className="h-8 w-8 text-primary-pink" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-black">Community First</h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                Supporting local artists and businesses throughout Kansas City.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="pink-outline" className="text-lg px-8 py-6">
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

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 uppercase tracking-wide">
              Hey Girl, Hey!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-sans">
              Never miss a thing + take <span className="font-bold">15% OFF</span> your{" "}
              <span className="font-bold">first order</span> by subscribing to emails!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-primary-pink transition-colors font-sans"
              />
              <Button size="lg" className="bg-primary-pink text-white hover:bg-primary-pink-dark text-lg px-8 py-3">
                Sign Up
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 font-sans">
              Drop your email here -- we promise not to spam ya!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-pink to-primary-pink-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-wide">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-sans">
              Have questions about our products or want to collaborate? 
              We'd love to hear from you!
            </p>
            <Button 
              size="lg" 
              variant="white-outline"
              className="text-lg px-8 py-6"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="relative">
          <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
            <Gift className="h-6 w-6" />
          </button>
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-red text-white text-xs rounded-full flex items-center justify-center font-bold">
            7
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-sans">Chat</span>
          </button>
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-red text-white text-xs rounded-full flex items-center justify-center font-bold">
            1
          </div>
        </div>
      </div>
    </div>
  )
}
