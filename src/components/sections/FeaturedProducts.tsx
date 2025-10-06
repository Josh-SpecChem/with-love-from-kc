"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types";

// Featured products data using our new optimized images
const featuredProducts: Product[] = [
  {
    id: "kc-skyline-cream-hoodie",
    name: "KC Skyline Cream Hoodie",
    description: "Elegant cream hoodie featuring our beautiful KC skyline design! Perfect for those cooler KC days. Soft, warm, and oh-so-comfortable!",
    price: 69.99,
    originalPrice: 79.99,
    images: ["/images/apparel/kc-skyline-cream-hoodie.webp"],
    category: "apparel",
    tags: ["hoodie", "skyline", "cream", "KC pride", "comfortable"],
    availability: "available",
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "kc-skyline-coasters",
    name: "KC Skyline Coasters Set",
    description: "Protect your surfaces in style with these beautiful KC skyline coasters! Set of 4 cork-backed coasters featuring different KC designs.",
    price: 24.99,
    images: ["/images/accessories/kc-skyline-coasters.webp"],
    category: "accessories",
    tags: ["coasters", "cork", "KC pride", "home"],
    availability: "available",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    id: "kc-cityscape-throw-pillow",
    name: "KC Cityscape Throw Pillow",
    description: "Add a touch of KC to your home decor with this beautiful throw pillow! Features a watercolor-style KC skyline design.",
    price: 45.99,
    images: ["/images/home/kc-cityscape-throw-pillow.webp"],
    category: "home",
    tags: ["pillow", "home decor", "watercolor", "skyline"],
    availability: "available",
    rating: 4.7,
    reviewCount: 56,
    featured: true,
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z"
  },
  {
    id: "kc-skyline-keychain",
    name: "KC Skyline Keychain",
    description: "Keep KC close to your heart with this beautiful acrylic keychain! Features the KC skyline with a cute pink heart charm.",
    price: 12.99,
    images: ["/images/accessories/kc-skyline-keychain.webp"],
    category: "accessories",
    tags: ["keychain", "acrylic", "heart", "KC pride"],
    availability: "available",
    rating: 5.0,
    reviewCount: 34,
    featured: true,
    createdAt: "2024-01-08T10:00:00Z",
    updatedAt: "2024-01-08T10:00:00Z"
  }
];

interface FeaturedProductsProps {
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function FeaturedProducts({ 
  onAddToCart, 
  onAddToWishlist, 
  onQuickView 
}: FeaturedProductsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-love-pink mr-2" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Featured KC Creations
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Handpicked favorites from our Kansas City collection. Each item is crafted with love and attention to detail.
          </p>
          <Button 
            variant="outline" 
            className="border-kc-blue text-kc-blue hover:bg-kc-blue hover:text-white"
            asChild
          >
            <Link href="/products" className="inline-flex items-center">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                product={product}
                variant={index === 0 ? "featured" : "default"}
                showQuickAdd={true}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                onQuickView={onQuickView}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-kc-blue/5 to-love-pink/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer custom orders for personalized Kansas City merchandise. 
              Bring your KC vision to life with our custom design service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-kc-primary"
                asChild
              >
                <Link href="/products">
                  Browse All Products
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-love-pink text-love-pink hover:bg-love-pink hover:text-white"
                asChild
              >
                <Link href="/custom">
                  Request Custom Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


