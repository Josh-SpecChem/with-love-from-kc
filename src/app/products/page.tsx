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

// Mock products data - expanded from featured products
const allProducts: Product[] = [
  {
    id: "kc-skyline-hoodie",
    name: "KC Skyline Hoodie",
    description: "Comfortable hoodie featuring the iconic Kansas City skyline. Perfect for showing your KC pride in style.",
    price: 45,
    originalPrice: 55,
    images: ["/images/apparel/hoodie-1.jpg", "/images/apparel/hoodie-2.jpg", "/images/apparel/hoodie-3.jpg"],
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
    images: ["/images/accessories/mug-2.jpg", "/images/accessories/mug-4.jpg"],
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
    images: ["/images/home/art-print-1.jpg", "/images/home/art-print-2.jpg", "/images/home/art-print-3.jpg"],
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
  },
  {
    id: "kc-chiefs-t-shirt",
    name: "KC Chiefs T-Shirt",
    description: "Comfortable cotton t-shirt celebrating the Kansas City Chiefs. Perfect for game day.",
    price: 28,
    images: ["/images/apparel/t-shirt-1.jpg", "/images/apparel/t-shirt-3.jpg", "/images/apparel/t-shirt-5.jpg"],
    category: "apparel",
    tags: ["Chiefs", "t-shirt", "sports", "game day"],
    availability: "available",
    rating: 4.6,
    reviewCount: 78,
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z"
  },
  {
    id: "kc-skyline-tote-bag",
    name: "KC Skyline Tote Bag",
    description: "Eco-friendly canvas tote bag featuring the KC skyline. Perfect for shopping or daily use.",
    price: 22,
    images: ["/images/products/accessories/new-arrivals-accessories.svg"],
    category: "accessories",
    tags: ["tote", "canvas", "eco-friendly", "skyline"],
    availability: "available",
    rating: 4.5,
    reviewCount: 45,
    createdAt: "2024-01-03T10:00:00Z",
    updatedAt: "2024-01-03T10:00:00Z"
  },
  {
    id: "kc-wall-clock",
    name: "KC Wall Clock",
    description: "Beautiful wall clock featuring Kansas City landmarks. Perfect for home or office.",
    price: 42,
    images: ["/images/placeholders/product-placeholder.svg"],
    category: "home",
    tags: ["clock", "wall decor", "landmarks", "home"],
    availability: "available",
    rating: 4.8,
    reviewCount: 32,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z"
  },
  {
    id: "custom-chiefs-jersey",
    name: "Custom Chiefs Jersey",
    description: "Personalized Kansas City Chiefs jersey with your name and number. Made to order.",
    price: 65,
    images: ["/images/products/apparel/kc-pride-tee.svg"],
    category: "custom",
    tags: ["Chiefs", "jersey", "custom", "personalized"],
    availability: "available",
    rating: 5.0,
    reviewCount: 18,
    custom: true,
    createdAt: "2023-12-28T10:00:00Z",
    updatedAt: "2023-12-28T10:00:00Z"
  },
  {
    id: "kc-brewery-coaster-set",
    name: "KC Brewery Coaster Set",
    description: "Set of 6 coasters featuring Kansas City's famous breweries. Perfect for beer enthusiasts.",
    price: 16,
    images: ["/images/accessories/coaster-1.jpg", "/images/accessories/coaster-2.jpg", "/images/accessories/coaster-3.jpg"],
    category: "accessories",
    tags: ["coasters", "brewery", "beer", "set"],
    availability: "available",
    rating: 4.4,
    reviewCount: 67,
    createdAt: "2023-12-25T10:00:00Z",
    updatedAt: "2023-12-25T10:00:00Z"
  },
  {
    id: "kc-skyline-pillow",
    name: "KC Skyline Throw Pillow",
    description: "Soft throw pillow featuring the KC skyline. Perfect for couch or bed decoration.",
    price: 38,
    images: ["/images/placeholders/product-placeholder.svg"],
    category: "home",
    tags: ["pillow", "throw pillow", "skyline", "home decor"],
    availability: "available",
    rating: 4.7,
    reviewCount: 41,
    createdAt: "2023-12-20T10:00:00Z",
    updatedAt: "2023-12-20T10:00:00Z"
  },
  {
    id: "custom-kc-wedding-favors",
    name: "Custom KC Wedding Favors",
    description: "Personalized wedding favors featuring Kansas City themes. Perfect for KC weddings.",
    price: 12,
    images: ["/images/placeholders/product-placeholder.svg"],
    category: "custom",
    tags: ["wedding", "favors", "custom", "personalized"],
    availability: "available",
    rating: 4.9,
    reviewCount: 23,
    custom: true,
    createdAt: "2023-12-15T10:00:00Z",
    updatedAt: "2023-12-15T10:00:00Z"
  },
  {
    id: "kc-royals-cap",
    name: "KC Royals Baseball Cap",
    description: "Classic baseball cap featuring the Kansas City Royals logo. Perfect for game day.",
    price: 32,
    images: ["/images/apparel/baseball-cap-1.jpg", "/images/apparel/baseball-cap-2.jpg", "/images/apparel/baseball-cap-3.jpg"],
    category: "apparel",
    tags: ["cap", "baseball", "Royals", "sports"],
    availability: "available",
    rating: 4.6,
    reviewCount: 52,
    createdAt: "2023-12-10T10:00:00Z",
    updatedAt: "2023-12-10T10:00:00Z"
  },
  {
    id: "premium-kc-art-print",
    name: "Premium KC Art Print",
    description: "High-quality art print featuring Kansas City landmarks. Perfect for home or office decor.",
    price: 35,
    images: ["/images/home/art-print-4.jpg", "/images/home/art-print-5.jpg"],
    category: "home",
    tags: ["art", "print", "premium", "home decor"],
    availability: "available",
    rating: 4.8,
    reviewCount: 43,
    createdAt: "2023-12-05T10:00:00Z",
    updatedAt: "2023-12-05T10:00:00Z"
  },
  {
    id: "additional-hoodie-variants",
    name: "KC Skyline Hoodie - Additional Variants",
    description: "More hoodie options featuring different KC skyline designs. Comfortable and stylish.",
    price: 45,
    images: ["/images/apparel/hoodie-4.jpg", "/images/apparel/hoodie-5.jpg"],
    category: "apparel",
    tags: ["hoodie", "skyline", "variants", "comfortable"],
    availability: "available",
    rating: 4.7,
    reviewCount: 89,
    createdAt: "2023-12-01T10:00:00Z",
    updatedAt: "2023-12-01T10:00:00Z"
  },
  {
    id: "additional-coaster-set",
    name: "KC Coaster Set - Additional Designs",
    description: "Additional coaster designs featuring Kansas City themes. Great for entertaining.",
    price: 18,
    images: ["/images/accessories/coaster-4.jpg", "/images/accessories/coaster-5.jpg"],
    category: "accessories",
    tags: ["coasters", "additional", "designs", "entertaining"],
    availability: "available",
    rating: 4.5,
    reviewCount: 34,
    createdAt: "2023-11-28T10:00:00Z",
    updatedAt: "2023-11-28T10:00:00Z"
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
