"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InstagramPost } from "@/types";

// Mock Instagram posts data
const instagramPosts: InstagramPost[] = [
  {
    id: "kc-skyline-hoodie-post",
    caption: "Our KC Skyline Hoodie is flying off the shelves! 🏙️ Perfect for those chilly KC mornings. Made with love in Kansas City ❤️ #KansasCity #KCSkyline #HandmadeKC #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/kc-skyline-hoodie.svg"],
    hashtags: ["KansasCity", "KCSkyline", "HandmadeKC", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 156,
      comments: 23,
    },
    post_date: "2024-01-20T14:30:00Z",
    category: "product"
  },
  {
    id: "behind-scenes-workshop",
    caption: "Behind the scenes in our KC workshop! 🎨 Watch us create magic with every piece. This is where the love happens ❤️ #BehindTheScenes #KCWorkshop #Handmade #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/workshop-behind-scenes.svg"],
    hashtags: ["BehindTheScenes", "KCWorkshop", "Handmade", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 89,
      comments: 12,
    },
    post_date: "2024-01-18T10:15:00Z",
    category: "behind_scenes"
  },
  {
    id: "customer-testimonial-mug",
    caption: "Customer love! 💕 Sarah from Overland Park sent us this amazing photo with her KC Pride Mug. This is why we do what we do! #CustomerLove #KCPride #Testimonial #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/customer-mug.svg"],
    hashtags: ["CustomerLove", "KCPride", "Testimonial", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 67,
      comments: 8,
    },
    post_date: "2024-01-16T16:45:00Z",
    category: "testimonial"
  },
  {
    id: "kc-love-event-coverage",
    caption: "What a day at the KC Love Event! 🌟 Met so many amazing KC locals and showed off our latest creations. Thank you Kansas City for your incredible support! #KCLoveEvent #KansasCity #Community #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/kc-love-event.svg"],
    hashtags: ["KCLoveEvent", "KansasCity", "Community", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 134,
      comments: 19,
    },
    post_date: "2024-01-14T20:30:00Z",
    category: "event"
  },
  {
    id: "lifestyle-coffee-shop",
    caption: "Coffee shop vibes with our KC mug ☕️ Perfect morning routine for any KC local. Show us your KC coffee moments! #KCCoffee #Lifestyle #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/coffee-shop-lifestyle.svg"],
    hashtags: ["KCCoffee", "Lifestyle", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 92,
      comments: 15,
    },
    post_date: "2024-01-12T08:00:00Z",
    category: "lifestyle"
  },
  {
    id: "custom-royals-gear-showcase",
    caption: "Custom Royals gear ready for game day! ⚾️ Our personalized KC merchandise brings the team spirit to life. Go Royals! #Royals #CustomGear #GameDay #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/custom-royals-gear.svg"],
    hashtags: ["Royals", "CustomGear", "GameDay", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 78,
      comments: 11,
    },
    post_date: "2024-01-10T13:20:00Z",
    category: "product"
  }
];

interface InstagramFeedProps {
  showFilters?: boolean;
  maxPosts?: number;
}

export function InstagramFeed({ showFilters = false, maxPosts = 6 }: InstagramFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { value: "all", label: "All" },
    { value: "product", label: "Products" },
    { value: "behind_scenes", label: "Behind Scenes" },
    { value: "event", label: "Events" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "testimonial", label: "Testimonials" }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? instagramPosts.slice(0, maxPosts)
    : instagramPosts.filter(post => post.category === selectedCategory).slice(0, maxPosts);

  const formatEngagement = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-6 w-6 text-love-pink mr-2" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Follow Our KC Journey
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            See the latest from @made.withlovekc
          </p>
          
          {/* Instagram Follow Button */}
          <Button 
            variant="outline" 
            className="border-love-pink text-love-pink hover:bg-love-pink hover:text-white mb-8"
            asChild
          >
            <Link href="https://instagram.com/made.withlovekc" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4 mr-2" />
              Follow on Instagram
            </Link>
          </Button>

          {/* Category Filters */}
          {showFilters && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? "btn-love-pink" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={post.media_urls[0] || "/images/placeholders/instagram-placeholder.svg"}
                alt={post.caption.substring(0, 100)}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 fill-current" />
                      <span className="text-sm">{formatEngagement(post.engagement_metrics.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{formatEngagement(post.engagement_metrics.comments)}</span>
                    </div>
                  </div>
                  <p className="text-xs line-clamp-3 mb-2">
                    {post.caption}
                  </p>
                  <Button size="sm" variant="secondary" className="text-xs">
                    View on Instagram
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-2 left-2">
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-white/90 text-foreground"
                >
                  {post.category.replace('_', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              Join the KC Love Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on Instagram for behind-the-scenes content, new product launches, 
              and daily doses of Kansas City love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-love-pink"
                asChild
              >
                <Link href="https://instagram.com/made.withlovekc" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow @made.withlovekc
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-kc-blue text-kc-blue hover:bg-kc-blue hover:text-white"
                asChild
              >
                <Link href="/gallery">
                  View Full Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


