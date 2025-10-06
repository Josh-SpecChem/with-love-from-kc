"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard as Card, ProductImage, ProductInfo, ProductName, ProductBrand, ProductPrice } from "@/components/ui/card";
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

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const isSoldOut = product.availability === 'out_of_stock';

  return (
    <Card className={cn(
      "group relative",
      variant === "featured" && "card-featured",
      variant === "compact" && "scale-95",
      variant === "compact" && "flex flex-row"
    )}>
      <ProductImage className={cn(
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
        
        {/* Sold out badge */}
        {isSoldOut && (
          <div className="badge-sold-out">
            SOLD OUT
          </div>
        )}
        
        {/* Sale badge */}
        {isOnSale && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-red text-white text-xs font-bold">
              SALE
            </Badge>
          </div>
        )}
        
        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full transition-all duration-200 z-10",
            isWishlisted 
              ? "bg-red text-white" 
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
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onQuickView?.(product)}
            className="bg-white/90 hover:bg-white text-black"
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </ProductImage>
      
      <ProductInfo className={cn(
        variant === "compact" && "flex-1 flex flex-col justify-between"
      )}>
        <div className={cn(
          "space-y-2",
          variant === "compact" && "space-y-1"
        )}>
          {/* Product name */}
          <Link href={`/products/${product.id}`}>
            <ProductName className={cn(
              "hover:text-primary-pink transition-colors cursor-pointer",
              variant === "compact" ? "text-sm" : "text-base"
            )}>
              {product.name}
            </ProductName>
          </Link>
          
          {/* Brand */}
          <ProductBrand>
            Made With Love KC
          </ProductBrand>
          
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
              <span className="text-xs text-gray-500">
                ({product.reviewCount || 0})
              </span>
            </div>
          )}
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <ProductPrice>
              {formatPrice(product.price)}
            </ProductPrice>
            {isOnSale && product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Size info */}
          <div className="text-xs text-gray-500">
            {product.sizes?.length ? `${product.sizes.length} sizes` : 'One size'}
          </div>
          
          {/* Add to cart button */}
          {showQuickAdd && !isSoldOut && (
            <Button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={cn(
                "w-full",
                variant === "compact" ? "px-4 py-2" : "py-3"
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
        </div>
      </ProductInfo>
    </Card>
  );
}


