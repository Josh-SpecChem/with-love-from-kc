"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types";

// Mock featured products data
const featuredProducts: Product[] = [
  {
    id: "kc-skyline-hoodie",
    name: "KC Skyline Hoodie",
    description: "Comfortable hoodie featuring the iconic Kansas City skyline. Perfect for showing your KC pride in style.",
    price: 45,
    originalPrice: 55,
    images: ["/images/products/apparel/kc-skyline-hoodie.svg"],
    category: "apparel",
    tags: ["hoodie", "skyline", "KC pride", "comfortable"],
    availability: "available",
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "kc-pride-mug",
    name: "KC Pride Mug",
    description: "Handcrafted ceramic mug with beautiful Kansas City design. Perfect for your morning coffee.",
    price: 18,
    images: ["/images/products/accessories/kc-pride-mug.svg"],
    category: "accessories",
    tags: ["mug", "ceramic", "KC pride", "coffee"],
    availability: "available",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    id: "handmade-kc-art-print",
    name: "Handmade KC Art Print",
    description: "Beautiful hand-drawn art print celebrating Kansas City landmarks. Perfect for home decor.",
    price: 25,
    images: ["/images/products/accessories/kc-art-print.svg"],
    category: "home",
    tags: ["art", "print", "landmarks", "home decor"],
    availability: "available",
    rating: 4.7,
    reviewCount: 56,
    featured: true,
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z"
  },
  {
    id: "custom-royals-gear",
    name: "Custom Royals Gear",
    description: "Personalized Kansas City Royals merchandise. Show your team spirit with custom designs.",
    price: 35,
    images: ["/images/products/custom/custom-royals-gear.svg"],
    category: "custom",
    tags: ["Royals", "custom", "sports", "personalized"],
    availability: "available",
    rating: 5.0,
    reviewCount: 34,
    featured: true,
    custom: true,
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


