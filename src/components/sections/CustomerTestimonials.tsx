"use client";

import { useState, useEffect } from "react";
import { Star, Quote, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Testimonial, Customer, Product } from "@/types";

// Mock testimonials data
const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    customer_id: "customer-1",
    customer: {
      id: "customer-1",
      name: "Sarah M.",
      email: "sarah@example.com",
      avatar: "/images/customers/sarah.jpg",
      orders: [],
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    product_id: "kc-pride-mug",
    product: {
      id: "kc-pride-mug",
      name: "KC Pride Mug",
      description: "Handcrafted ceramic mug with beautiful Kansas City design.",
      price: 18,
      images: ["/images/products/accessories/kc-pride-mug.svg"],
      category: "accessories",
      tags: ["mug", "ceramic", "KC pride"],
      availability: "available",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    rating: 5,
    comment: "Absolutely obsessed with my KC mug! Perfect for morning coffee and shows KC pride everywhere. The quality is amazing and it's become my favorite mug. Highly recommend to any KC local!",
    verified_purchase: true,
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: "testimonial-2",
    customer_id: "customer-2",
    customer: {
      id: "customer-2",
      name: "Mike R.",
      email: "mike@example.com",
      avatar: "/images/customers/mike.jpg",
      orders: [],
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    product_id: "custom-royals-gear",
    product: {
      id: "custom-royals-gear",
      name: "Custom Royals Gear",
      description: "Personalized Kansas City Royals merchandise.",
      price: 35,
      images: ["/images/products/custom/custom-royals-gear.svg"],
      category: "custom",
      tags: ["Royals", "custom", "sports"],
      availability: "available",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    rating: 5,
    comment: "The custom Royals gear is incredible quality! True KC craftsmanship. They worked with me to create exactly what I envisioned and the final product exceeded my expectations. Will definitely order again!",
    verified_purchase: true,
    created_at: "2024-01-12T14:30:00Z"
  },
  {
    id: "testimonial-3",
    customer_id: "customer-3",
    customer: {
      id: "customer-3",
      name: "Jessica L.",
      email: "jessica@example.com",
      avatar: "/images/customers/jessica.jpg",
      orders: [],
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    product_id: "kc-skyline-hoodie",
    product: {
      id: "kc-skyline-hoodie",
      name: "KC Skyline Hoodie",
      description: "Comfortable hoodie featuring the iconic Kansas City skyline.",
      price: 45,
      images: ["/images/products/apparel/kc-skyline-hoodie.svg"],
      category: "apparel",
      tags: ["hoodie", "skyline", "KC pride"],
      availability: "available",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    rating: 5,
    comment: "Love supporting local artists! These pieces are conversation starters wherever I go. The hoodie is so comfortable and the KC skyline design is perfect. Great quality and even better customer service.",
    verified_purchase: true,
    created_at: "2024-01-10T09:15:00Z"
  },
  {
    id: "testimonial-4",
    customer_id: "customer-4",
    customer: {
      id: "customer-4",
      name: "David K.",
      email: "david@example.com",
      avatar: "/images/customers/david.jpg",
      orders: [],
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    product_id: "handmade-kc-art-print",
    product: {
      id: "handmade-kc-art-print",
      name: "Handmade KC Art Print",
      description: "Beautiful hand-drawn art print celebrating Kansas City landmarks.",
      price: 25,
      images: ["/images/products/accessories/kc-art-print.svg"],
      category: "home",
      tags: ["art", "print", "landmarks"],
      availability: "available",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    rating: 5,
    comment: "The art print looks amazing in my home office! The attention to detail is incredible and it's a perfect reminder of why I love Kansas City. Fast shipping and excellent packaging too.",
    verified_purchase: true,
    created_at: "2024-01-08T16:45:00Z"
  },
  {
    id: "testimonial-5",
    customer_id: "customer-5",
    customer: {
      id: "customer-5",
      name: "Amanda T.",
      email: "amanda@example.com",
      avatar: "/images/customers/amanda.jpg",
      orders: [],
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    rating: 5,
    comment: "Made With Love KC has become my go-to for unique KC gifts! Every item I've purchased has been beautifully crafted and the customer service is outstanding. You can really feel the love and care put into each piece.",
    verified_purchase: true,
    created_at: "2024-01-05T11:20:00Z"
  }
];

interface CustomerTestimonialsProps {
  maxTestimonials?: number;
  showCarousel?: boolean;
}

export function CustomerTestimonials({ 
  maxTestimonials = 3, 
  showCarousel = true 
}: CustomerTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>(
    testimonials.slice(0, maxTestimonials)
  );

  useEffect(() => {
    if (showCarousel && displayedTestimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % displayedTestimonials.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayedTestimonials.length, showCarousel]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getLocationFromName = (name: string) => {
    // Mock location data based on customer names
    const locations: { [key: string]: string } = {
      "Sarah M.": "Overland Park",
      "Mike R.": "Kansas City",
      "Jessica L.": "Lenexa",
      "David K.": "Leawood",
      "Amanda T.": "Prairie Village"
    };
    return locations[name] || "Kansas City";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-kc-blue/5 to-love-pink/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-love-pink mr-2" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              KC Love Stories
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our customers say about their handmade treasures
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative max-w-6xl mx-auto">
          {showCarousel ? (
            // Carousel View
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {displayedTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="text-center">
                          {/* Quote Icon */}
                          <Quote className="h-8 w-8 text-love-pink mx-auto mb-6" />
                          
                          {/* Testimonial Text */}
                          <blockquote className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                            "{testimonial.comment}"
                          </blockquote>
                          
                          {/* Customer Info */}
                          <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4">
                              <Avatar className="h-16 w-16">
                                <AvatarImage 
                                  src={testimonial.customer.avatar} 
                                  alt={testimonial.customer.name}
                                />
                                <AvatarFallback className="bg-kc-blue text-white font-semibold">
                                  {getInitials(testimonial.customer.name)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="text-left">
                                <h4 className="font-heading font-semibold text-lg text-foreground">
                                  {testimonial.customer.name}
                                </h4>
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {getLocationFromName(testimonial.customer.name)}
                                </div>
                                <div className="flex items-center mt-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            {/* Product Badge */}
                            {testimonial.product && (
                              <Badge variant="outline" className="bg-kc-blue/10 text-kc-blue border-kc-blue">
                                Purchased: {testimonial.product.name}
                              </Badge>
                            )}
                            
                            {/* Verified Purchase */}
                            {testimonial.verified_purchase && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                ✓ Verified Purchase
                              </Badge>
                            )}
                            
                            {/* Date */}
                            <p className="text-xs text-muted-foreground">
                              {formatDate(testimonial.created_at)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center space-x-2 mt-8">
                {displayedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-love-pink' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Grid View
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <Quote className="h-6 w-6 text-love-pink mb-3" />
                    <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                      "{testimonial.comment}"
                    </blockquote>
                    
                    {/* Customer Info */}
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage 
                          src={testimonial.customer.avatar} 
                          alt={testimonial.customer.name}
                        />
                        <AvatarFallback className="bg-kc-blue text-white text-sm font-semibold">
                          {getInitials(testimonial.customer.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h5 className="font-semibold text-foreground text-sm">
                          {testimonial.customer.name}
                        </h5>
                        <div className="flex items-center text-muted-foreground text-xs">
                          <MapPin className="h-3 w-3 mr-1" />
                          {getLocationFromName(testimonial.customer.name)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Badge */}
                    {testimonial.product && (
                      <Badge 
                        variant="outline" 
                        className="mt-3 bg-kc-blue/10 text-kc-blue border-kc-blue text-xs"
                      >
                        {testimonial.product.name}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Join Thousands of Happy KC Customers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-kc-blue mb-2">2,847+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-love-pink mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kc-red mb-2">98%</div>
                <div className="text-muted-foreground">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


