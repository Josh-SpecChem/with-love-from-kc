"use client";

import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, Grid3X3, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/sections/ProductCard";
import { Product, ProductCategory, ProductFilters } from "@/types";

// Updated products data with our new optimized images
const allProducts: Product[] = [
  {
    id: "kc-parking-cap-hoodie",
    name: "KC Parking Cap & Hoodie Set",
    description: "Show your KC pride with this amazing parking cap and hoodie combo! Perfect for game day or everyday wear. Made with love in Kansas City!",
    price: 89.99,
    images: ["/images/apparel/kc-parking-cap-hoodie.webp"],
    category: "apparel",
    tags: ["kansascity", "kcpride", "hoodie", "baseballcap", "parkingcap", "madewithlovekc"],
    availability: "available",
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "matching-loungewear-set",
    name: "Matching Loungewear Set",
    description: "Cozy and comfortable matching loungewear set perfect for relaxing at home or running errands around KC! Soft, comfortable, and stylish.",
    price: 79.99,
    images: ["/images/apparel/matching-loungewear-set.webp"],
    category: "apparel",
    tags: ["loungewear", "matching", "comfortable", "kansascity", "madewithlovekc"],
    availability: "available",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    id: "kc-skyline-t-shirt",
    name: "KC Skyline T-Shirt",
    description: "Classic KC skyline design on a comfortable cotton tee! Perfect for showing your Kansas City pride wherever you go. Available in multiple sizes!",
    price: 34.99,
    images: ["/images/apparel/cityscape-t-shirt.webp"],
    category: "apparel",
    tags: ["kansascity", "skyline", "tshirt", "cotton", "madewithlovekc"],
    availability: "available",
    rating: 4.7,
    reviewCount: 56,
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z"
  },
  {
    id: "kc-love-pink-tee",
    name: "KC Love Pink Tee",
    description: "Spread the KC love with this vibrant pink tee! Soft cotton blend with our signature KC design. Perfect for summer days in the city!",
    price: 29.99,
    images: ["/images/apparel/pink-tee-jeans.webp"],
    category: "apparel",
    tags: ["kansascity", "pink", "love", "tshirt", "madewithlovekc"],
    availability: "available",
    rating: 4.6,
    reviewCount: 78,
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z"
  },
  {
    id: "kc-skyline-gradient-tee",
    name: "KC Skyline Gradient Tee",
    description: "Stunning gradient design featuring the KC skyline! From sky blue to hot pink, this tee is a work of art. Soft cotton blend for ultimate comfort!",
    price: 39.99,
    images: ["/images/apparel/kc-skyline-gradient-tee.webp"],
    category: "apparel",
    tags: ["kansascity", "gradient", "skyline", "artistic", "madewithlovekc"],
    availability: "available",
    rating: 4.8,
    reviewCount: 45,
    createdAt: "2024-01-03T10:00:00Z",
    updatedAt: "2024-01-03T10:00:00Z"
  },
  {
    id: "kc-skyline-cream-hoodie",
    name: "KC Skyline Cream Hoodie",
    description: "Elegant cream hoodie featuring our beautiful KC skyline design! Perfect for those cooler KC days. Soft, warm, and oh-so-comfortable!",
    price: 69.99,
    images: ["/images/apparel/kc-skyline-cream-hoodie.webp"],
    category: "apparel",
    tags: ["kansascity", "hoodie", "cream", "cozy", "madewithlovekc"],
    availability: "available",
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z"
  },
  {
    id: "kc-skyline-coasters",
    name: "KC Skyline Coasters Set",
    description: "Protect your surfaces in style with these beautiful KC skyline coasters! Set of 4 cork-backed coasters featuring different KC designs.",
    price: 24.99,
    images: ["/images/accessories/kc-skyline-coasters.webp"],
    category: "accessories",
    tags: ["kansascity", "coasters", "cork", "home", "madewithlovekc"],
    availability: "available",
    rating: 4.5,
    reviewCount: 67,
    createdAt: "2023-12-25T10:00:00Z",
    updatedAt: "2023-12-25T10:00:00Z"
  },
  {
    id: "kc-skyline-keychain",
    name: "KC Skyline Keychain",
    description: "Keep KC close to your heart with this beautiful acrylic keychain! Features the KC skyline with a cute pink heart charm.",
    price: 12.99,
    images: ["/images/accessories/kc-skyline-keychain.webp"],
    category: "accessories",
    tags: ["kansascity", "keychain", "acrylic", "heart", "madewithlovekc"],
    availability: "available",
    rating: 5.0,
    reviewCount: 34,
    createdAt: "2023-12-28T10:00:00Z",
    updatedAt: "2023-12-28T10:00:00Z"
  },
  {
    id: "kc-skyline-canvas-tote",
    name: "KC Skyline Canvas Tote",
    description: "Carry your KC pride everywhere with this stylish canvas tote bag! Features our beautiful skyline design and is perfect for shopping, beach trips, or everyday use!",
    price: 19.99,
    images: ["/images/accessories/kc-skyline-canvas-tote.webp"],
    category: "accessories",
    tags: ["kansascity", "tote", "canvas", "bag", "madewithlovekc"],
    availability: "available",
    rating: 4.7,
    reviewCount: 41,
    createdAt: "2023-12-20T10:00:00Z",
    updatedAt: "2023-12-20T10:00:00Z"
  },
  {
    id: "made-with-love-cityscape-sticker",
    name: "Made With Love Cityscape Sticker",
    description: "Spread the KC love with this adorable sticker pack! Features our signature 'Made with Love' design with the KC skyline.",
    price: 8.99,
    images: ["/images/stickers/made-with-love-cityscape-sticker.webp"],
    category: "accessories",
    tags: ["kansascity", "sticker", "love", "cityscape", "madewithlovekc"],
    availability: "available",
    rating: 4.9,
    reviewCount: 23,
    createdAt: "2023-12-15T10:00:00Z",
    updatedAt: "2023-12-15T10:00:00Z"
  },
  {
    id: "kc-cityscape-throw-pillow",
    name: "KC Cityscape Throw Pillow",
    description: "Add a touch of KC to your home decor with this beautiful throw pillow! Features a watercolor-style KC skyline design.",
    price: 45.99,
    images: ["/images/home/kc-cityscape-throw-pillow.webp"],
    category: "home",
    tags: ["kansascity", "pillow", "home decor", "watercolor", "madewithlovekc"],
    availability: "available",
    rating: 4.7,
    reviewCount: 56,
    featured: true,
    createdAt: "2023-12-10T10:00:00Z",
    updatedAt: "2023-12-10T10:00:00Z"
  },
  {
    id: "kc-skyline-art-print",
    name: "KC Skyline Art Print",
    description: "Transform your walls with this stunning KC skyline art print! Features a minimalist watercolor design that captures the beauty of Kansas City.",
    price: 35.99,
    images: ["/images/home/kc-skyline-art-print.webp"],
    category: "home",
    tags: ["kansascity", "art", "print", "watercolor", "minimalist", "madewithlovekc"],
    availability: "available",
    rating: 4.8,
    reviewCount: 43,
    createdAt: "2023-12-05T10:00:00Z",
    updatedAt: "2023-12-05T10:00:00Z"
  }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating" | "date" | "popularity">("popularity");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const categories: { value: ProductCategory; label: string; count: number }[] = [
    { value: "apparel", label: "Apparel", count: allProducts.filter(p => p.category === "apparel").length },
    { value: "accessories", label: "Accessories", count: allProducts.filter(p => p.category === "accessories").length },
    { value: "home", label: "Home Decor", count: allProducts.filter(p => p.category === "home").length },
    { value: "custom", label: "Custom Orders", count: allProducts.filter(p => p.category === "custom").length },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && 
            !product.description.toLowerCase().includes(query) &&
            !product.tags.some(tag => tag.toLowerCase().includes(query))) {
          return false;
        }
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Price range filter
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }

      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "price":
          comparison = a.price - b.price;
          break;
        case "rating":
          comparison = (a.rating || 0) - (b.rating || 0);
          break;
        case "date":
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case "popularity":
          comparison = (a.reviewCount || 0) - (b.reviewCount || 0);
          break;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [searchQuery, selectedCategories, priceRange, sortBy, sortOrder]);

  const handleCategoryToggle = (category: ProductCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 100 });
    setSortBy("popularity");
    setSortOrder("desc");
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                KC-Inspired Products
              </h1>
              <p className="text-muted-foreground">
                Discover unique handmade goods celebrating Kansas City
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge variant="secondary" className="text-sm">
                {filteredAndSortedProducts.length} products
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.value)}
                          onChange={() => handleCategoryToggle(category.value)}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm flex-1">{category.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Price Range</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="text-sm"
                      />
                      <span className="text-muted-foreground">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="text-sm"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ${priceRange.min} - ${priceRange.max}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [newSortBy, newSortOrder] = e.target.value.split('-');
                      setSortBy(newSortBy as any);
                      setSortOrder(newSortOrder as any);
                    }}
                    className="text-sm border rounded px-2 py-1"
                  >
                    <option value="popularity-desc">Most Popular</option>
                    <option value="rating-desc">Highest Rated</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                    <option value="date-desc">Newest First</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">View:</span>
                <div className="flex border rounded">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant={viewMode === "list" ? "compact" : "default"}
                    showQuickAdd={true}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More Button (for future pagination) */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
