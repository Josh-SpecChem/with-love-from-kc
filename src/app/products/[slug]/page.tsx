"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Share2, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RotateCcw,
  ChevronLeft,
  ZoomIn,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/sections/ProductCard";
import { Product } from "@/types";

// Mock product data - this would normally come from an API
const mockProduct: Product = {
  id: "kc-skyline-hoodie",
  name: "KC Skyline Hoodie",
  description: "Comfortable hoodie featuring the iconic Kansas City skyline. Perfect for showing your KC pride in style. Made with premium cotton blend for ultimate comfort and durability. Features our signature KC skyline design on the front and 'Made With Love KC' branding on the back.",
  price: 45,
  originalPrice: 55,
  images: [
    "/images/products/apparel/kc-skyline-hoodie-1.svg",
    "/images/products/apparel/kc-skyline-hoodie-2.svg",
    "/images/products/apparel/kc-skyline-hoodie-3.svg",
    "/images/products/apparel/kc-skyline-hoodie-4.svg"
  ],
  category: "apparel",
  tags: ["hoodie", "skyline", "KC pride", "comfortable", "cotton", "unisex"],
  availability: "available",
  rating: 4.9,
  reviewCount: 127,
  featured: true,
  createdAt: "2024-01-15T10:00:00Z",
  updatedAt: "2024-01-15T10:00:00Z"
};

// Mock related products
const relatedProducts: Product[] = [
  {
    id: "kc-chiefs-t-shirt",
    name: "KC Chiefs T-Shirt",
    description: "Comfortable cotton t-shirt celebrating the Kansas City Chiefs.",
    price: 28,
    images: ["/images/products/apparel/kc-pride-tee.svg"],
    category: "apparel",
    tags: ["Chiefs", "t-shirt", "sports"],
    availability: "available",
    rating: 4.6,
    reviewCount: 78,
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z"
  },
  {
    id: "kc-royals-cap",
    name: "KC Royals Baseball Cap",
    description: "Classic baseball cap featuring the Kansas City Royals logo.",
    price: 32,
    images: ["/images/products/custom/custom-royals-gear.svg"],
    category: "apparel",
    tags: ["cap", "baseball", "Royals"],
    availability: "available",
    rating: 4.6,
    reviewCount: 52,
    createdAt: "2023-12-10T10:00:00Z",
    updatedAt: "2023-12-10T10:00:00Z"
  },
  {
    id: "kc-skyline-tote-bag",
    name: "KC Skyline Tote Bag",
    description: "Eco-friendly canvas tote bag featuring the KC skyline.",
    price: 22,
    images: ["/images/products/accessories/new-arrivals-accessories.svg"],
    category: "accessories",
    tags: ["tote", "canvas", "skyline"],
    availability: "available",
    rating: 4.5,
    reviewCount: 45,
    createdAt: "2024-01-03T10:00:00Z",
    updatedAt: "2024-01-03T10:00:00Z"
  },
  {
    id: "custom-royals-gear",
    name: "Custom Royals Gear",
    description: "Personalized Kansas City Royals merchandise.",
    price: 35,
    images: ["/images/products/custom/custom-royals-gear.svg"],
    category: "custom",
    tags: ["Royals", "custom", "sports"],
    availability: "available",
    rating: 5.0,
    reviewCount: 34,
    custom: true,
    createdAt: "2024-01-08T10:00:00Z",
    updatedAt: "2024-01-08T10:00:00Z"
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Navy");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);

  // Mock sizes and colors for apparel
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Navy", value: "#1e3a8a", image: mockProduct.images[0] },
    { name: "Charcoal", value: "#374151", image: mockProduct.images[1] },
    { name: "Cream", value: "#fef3c7", image: mockProduct.images[2] }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Added to cart:', {
        product: mockProduct.name,
        quantity,
        size: selectedSize,
        color: selectedColor
      });
      // TODO: Implement actual cart functionality
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    console.log('Wishlist toggled:', mockProduct.name);
    // TODO: Implement wishlist functionality
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: mockProduct.name,
        text: mockProduct.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // TODO: Show toast notification
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-kc-blue">
              Home
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground rotate-180" />
            <Link href="/products" className="text-muted-foreground hover:text-kc-blue">
              Products
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground rotate-180" />
            <span className="text-foreground font-medium">{mockProduct.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white border">
              <Image
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                fill
                className="object-cover cursor-zoom-in"
                onClick={() => setShowImageZoom(true)}
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4"
                onClick={() => setShowImageZoom(true)}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              
              {/* Sale Badge */}
              {mockProduct.originalPrice && mockProduct.originalPrice > mockProduct.price && (
                <Badge variant="destructive" className="absolute top-4 left-4">
                  Sale
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? 'border-kc-blue' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${mockProduct.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-kc-blue text-white">
                  {mockProduct.category}
                </Badge>
                {mockProduct.featured && (
                  <Badge variant="outline" className="border-love-pink text-love-pink">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
                {mockProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= (mockProduct.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {mockProduct.rating} ({mockProduct.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(mockProduct.price)}
                </span>
                {mockProduct.originalPrice && mockProduct.originalPrice > mockProduct.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(mockProduct.originalPrice)}
                    </span>
                    <Badge variant="destructive" className="text-sm">
                      Save {formatPrice(mockProduct.originalPrice - mockProduct.price)}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {mockProduct.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "btn-kc-primary" : ""}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Link href="/size-guide" className="text-sm text-kc-blue hover:underline mt-2 inline-block">
                Size Guide
              </Link>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? 'border-kc-blue scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.name && (
                      <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full btn-kc-primary text-lg py-6"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Adding to Cart...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart - {formatPrice(mockProduct.price * quantity)}</span>
                  </div>
                )}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-kc-blue text-kc-blue hover:bg-kc-blue hover:text-white"
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWishlistToggle}
                  className={isWishlisted ? "bg-red-50 border-red-200 text-red-600" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                  {isWishlisted ? "Wishlisted" : "Wishlist"}
                </Button>
              </div>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleShare}
                className="w-full"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-kc-blue" />
                <span>Free shipping on orders $50+</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-kc-blue" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="h-4 w-4 text-kc-blue" />
                <span>Handmade in Kansas City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <h3>About This Product</h3>
                    <p>
                      Our KC Skyline Hoodie is more than just apparel - it's a celebration of Kansas City's 
                      unique character and skyline. Each hoodie is carefully crafted with attention to detail, 
                      featuring our signature KC skyline design that captures the essence of our beautiful city.
                    </p>
                    
                    <h4>Features</h4>
                    <ul>
                      <li>Premium cotton blend for comfort and durability</li>
                      <li>Kansas City skyline design on front</li>
                      <li>"Made With Love KC" branding on back</li>
                      <li>Unisex sizing for everyone</li>
                      <li>Machine washable</li>
                      <li>Available in multiple colors</li>
                    </ul>

                    <h4>Care Instructions</h4>
                    <p>
                      Machine wash cold, tumble dry low. Do not bleach. Iron on low heat if needed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Product Details</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Material:</dt>
                          <dd>80% Cotton, 20% Polyester</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Weight:</dt>
                          <dd>12 oz</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Origin:</dt>
                          <dd>Made in Kansas City, USA</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Care:</dt>
                          <dd>Machine Wash Cold</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Dimensions</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Length:</dt>
                          <dd>28 inches (Size M)</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Chest:</dt>
                          <dd>42 inches (Size M)</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Sleeve:</dt>
                          <dd>25 inches (Size M)</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Customer Reviews</h3>
                      <Button variant="outline">Write a Review</Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold mb-2">{mockProduct.rating}</div>
                        <div className="flex items-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= (mockProduct.rating || 0)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Based on {mockProduct.reviewCount} reviews
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <span className="text-sm w-6">{rating}</span>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ 
                                  width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 8 : rating === 2 ? 1 : 1}%` 
                                }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground w-8">
                              {rating === 5 ? 89 : rating === 4 ? 25 : rating === 3 ? 10 : rating === 2 ? 2 : 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Sample Reviews */}
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="font-semibold">Sarah M.</div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">Verified Purchase</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Love this hoodie! The quality is amazing and the KC skyline design is perfect. 
                          It's become my go-to hoodie for showing KC pride."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Shipping Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Shipping Options</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <div className="font-medium">Standard Shipping</div>
                              <div className="text-sm text-muted-foreground">5-7 business days</div>
                            </div>
                            <div className="font-semibold">FREE</div>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <div className="font-medium">Express Shipping</div>
                              <div className="text-sm text-muted-foreground">2-3 business days</div>
                            </div>
                            <div className="font-semibold">$9.99</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Return Policy</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 30-day return window</li>
                          <li>• Items must be in original condition</li>
                          <li>• Free return shipping</li>
                          <li>• Refund processed within 5-7 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold mb-8">You might also love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="default"
                showQuickAdd={true}
                onAddToCart={() => console.log('Add to cart:', product.name)}
                onAddToWishlist={() => console.log('Add to wishlist:', product.name)}
                onQuickView={() => console.log('Quick view:', product.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
