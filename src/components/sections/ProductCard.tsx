"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Product, ProductCardProps } from "@/types";

export function ProductCard({ 
  product, 
  variant = "default", 
  showQuickAdd = true,
  onAddToCart,
  onAddToWishlist,
  onQuickView 
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (onAddToCart) {
      setIsLoading(true);
      try {
        await onAddToCart(product);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'apparel':
        return 'bg-kc-blue text-white';
      case 'accessories':
        return 'bg-love-pink text-white';
      case 'home':
        return 'bg-kc-red text-white';
      case 'custom':
        return 'bg-gradient-to-r from-kc-blue to-love-pink text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const isSoldOut = product.availability === 'out_of_stock';

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
      variant === "featured" && "card-kc-featured",
      variant === "compact" && "scale-95",
      variant === "compact" && "flex flex-row"
    )}>
      <div className={cn(
        "relative overflow-hidden",
        variant === "compact" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
      )}>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0] || "/images/placeholders/product-placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <Badge className={cn("text-xs", getCategoryColor(product.category))}>
            {product.category}
          </Badge>
        </div>
        
        {/* Sale badge */}
        {isOnSale && (
          <div className="absolute top-2 right-2">
            <Badge variant="destructive" className="text-xs">
              Sale
            </Badge>
          </div>
        )}
        
        {/* Sold out overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="text-sm">
              Sold Out
            </Badge>
          </div>
        )}
        
        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full transition-all duration-200",
            isWishlisted 
              ? "bg-red-500 text-white" 
              : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
          )}
        >
          <Heart 
            className={cn(
              "h-4 w-4",
              isWishlisted && "fill-current"
            )} 
          />
        </button>
        
        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onQuickView?.(product)}
            className="bg-white/90 hover:bg-white text-foreground"
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>
      
      <CardContent className={cn(
        "p-4",
        variant === "compact" && "flex-1 flex flex-col justify-between"
      )}>
        <div className={cn(
          "space-y-3",
          variant === "compact" && "space-y-2"
        )}>
          {/* Product name */}
          <Link href={`/products/${product.id}`}>
            <h3 className={cn(
              "font-heading font-semibold leading-tight hover:text-kc-blue transition-colors",
              variant === "compact" ? "text-base" : "text-lg"
            )}>
              {product.name}
            </h3>
          </Link>
          
          {/* Product description */}
          <p className={cn(
            "text-sm text-muted-foreground",
            variant === "compact" ? "line-clamp-1" : "line-clamp-2"
          )}>
            {product.description}
          </p>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "h-3 w-3",
                      star <= (product.rating || 0) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount || 0})
              </span>
            </div>
          )}
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-foreground">
              {formatPrice(product.price)}
            </span>
            {isOnSale && product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Add to cart button */}
          {showQuickAdd && !isSoldOut && (
            <Button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={cn(
                "btn-kc-primary",
                variant === "compact" ? "w-auto px-4" : "w-full"
              )}
              size="sm"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Adding...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </div>
              )}
            </Button>
          )}
          
          {/* Sold out message */}
          {isSoldOut && (
            <Button
              disabled
              className="w-full"
              variant="outline"
            >
              Sold Out
            </Button>
          )}
          
          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}


