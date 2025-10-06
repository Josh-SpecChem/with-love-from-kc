"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Instagram, 
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InstagramPost } from "@/types";

// Mock Instagram posts data - expanded from the homepage
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
  },
  {
    id: "kc-skyline-sunset",
    caption: "KC skyline at sunset 🌅 Nothing beats this view! This beauty inspired our latest hoodie design. #KCSkyline #Sunset #KansasCity #Inspiration #MadeWithLoveKC",
    media_urls: ["/images/kansas-city/skyline/kc-skyline-sunset.svg"],
    hashtags: ["KCSkyline", "Sunset", "KansasCity", "Inspiration", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 145,
      comments: 28,
    },
    post_date: "2024-01-08T19:45:00Z",
    category: "lifestyle"
  },
  {
    id: "workshop-friday-vibes",
    caption: "Friday workshop vibes! 🎨 Creating some amazing KC pieces for the weekend. Happy Friday from our KC family to yours! #FridayVibes #Workshop #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/instagram/posts/workshop-behind-scenes.svg"],
    hashtags: ["FridayVibes", "Workshop", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 76,
      comments: 14,
    },
    post_date: "2024-01-05T16:30:00Z",
    category: "behind_scenes"
  },
  {
    id: "kc-brewery-tour",
    caption: "KC brewery tour featuring our new brewery coaster set! 🍺 Perfect for any KC beer enthusiast. Available now on our website! #KCBrewery #Coasters #Beer #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/kansas-city/culture/bbq-culture.svg"],
    hashtags: ["KCBrewery", "Coasters", "Beer", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 98,
      comments: 16,
    },
    post_date: "2024-01-03T12:00:00Z",
    category: "product"
  },
  {
    id: "customer-wedding-favors",
    caption: "Custom KC wedding favors for the perfect Kansas City wedding! 💒 These personalized favors were a hit at Sarah & Mike's KC wedding. #KCWedding #WeddingFavors #Custom #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/placeholders/product-placeholder.svg"],
    hashtags: ["KCWedding", "WeddingFavors", "Custom", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 112,
      comments: 22,
    },
    post_date: "2024-01-01T15:20:00Z",
    category: "testimonial"
  },
  {
    id: "kc-artist-collaboration",
    caption: "Amazing collaboration with local KC artist @kclocalartist! 🎨 This custom piece combines our love for KC with incredible local talent. #KCCollaboration #LocalArtist #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/kansas-city/culture/jazz-district.svg"],
    hashtags: ["KCCollaboration", "LocalArtist", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 89,
      comments: 18,
    },
    post_date: "2023-12-28T11:15:00Z",
    category: "event"
  },
  {
    id: "holiday-kc-decor",
    caption: "Holiday KC decor is here! 🎄 Our KC-themed holiday collection brings Kansas City spirit to your celebrations. Perfect gifts for any KC lover! #KCHoliday #HolidayDecor #KansasCity #MadeWithLoveKC",
    media_urls: ["/images/placeholders/product-placeholder.svg"],
    hashtags: ["KCHoliday", "HolidayDecor", "KansasCity", "MadeWithLoveKC"],
    engagement_metrics: {
      likes: 156,
      comments: 31,
    },
    post_date: "2023-12-25T09:30:00Z",
    category: "product"
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { value: "all", label: "All", count: instagramPosts.length },
    { value: "product", label: "Products", count: instagramPosts.filter(p => p.category === "product").length },
    { value: "behind_scenes", label: "Behind Scenes", count: instagramPosts.filter(p => p.category === "behind_scenes").length },
    { value: "event", label: "Events", count: instagramPosts.filter(p => p.category === "event").length },
    { value: "lifestyle", label: "Lifestyle", count: instagramPosts.filter(p => p.category === "lifestyle").length },
    { value: "testimonial", label: "Testimonials", count: instagramPosts.filter(p => p.category === "testimonial").length }
  ];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return instagramPosts.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());
    }
    return instagramPosts
      .filter(post => post.category === selectedCategory)
      .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());
  }, [selectedCategory]);

  const formatEngagement = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handlePostClick = (post: InstagramPost) => {
    setSelectedPost(post);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedPost) {
      setCurrentImageIndex((prev) => 
        prev < selectedPost.media_urls.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedPost) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedPost.media_urls.length - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our KC Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Follow @made.withlovekc for the latest
            </p>
            <Button 
              variant="outline" 
              className="border-love-pink text-love-pink hover:bg-love-pink hover:text-white"
              asChild
            >
              <Link href="https://instagram.com/made.withlovekc" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-2" />
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filters */}
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
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => handlePostClick(post)}
            >
              <div className="relative aspect-square">
                <Image
                  src={post.media_urls[0] || "/images/placeholders/instagram-placeholder.svg"}
                  alt={post.caption.substring(0, 100)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Overlay */}
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

                {/* Date */}
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-black/70 text-white border-0"
                  >
                    {formatDate(post.post_date)}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </div>

      {/* Post Detail Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          {selectedPost && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={selectedPost.media_urls[currentImageIndex]}
                  alt={selectedPost.caption}
                  fill
                  className="object-cover"
                />
                
                {/* Image navigation */}
                {selectedPost.media_urls.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Image indicators */}
                {selectedPost.media_urls.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {selectedPost.media_urls.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Post Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-kc-blue to-love-pink rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">made.withlovekc</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(selectedPost.post_date)}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://instagram.com/made.withlovekc" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Instagram
                    </Link>
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="font-medium">{formatEngagement(selectedPost.engagement_metrics.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{formatEngagement(selectedPost.engagement_metrics.comments)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedPost.caption}
                  </p>
                  
                  {selectedPost.hashtags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {selectedPost.hashtags.map((hashtag) => (
                        <Badge key={hashtag} variant="outline" className="text-xs">
                          #{hashtag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
