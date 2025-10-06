import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg bg-white text-black transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-gray-200 shadow-sm hover:shadow-md",
        product: "border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden",
        featured: "border-2 border-primary-pink shadow-md hover:shadow-xl hover:-translate-y-1",
        elevated: "shadow-lg hover:shadow-xl hover:-translate-y-1",
        flat: "border border-gray-200",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight font-serif",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500 font-sans", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Product-specific card components
const ProductCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <Card
      ref={ref}
      variant="product"
      className={cn("group cursor-pointer", className)}
      {...props}
    />
  )
)
ProductCard.displayName = "ProductCard"

const ProductImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden bg-primary-pink aspect-square",
      className
    )}
    {...props}
  />
))
ProductImage.displayName = "ProductImage"

const ProductInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 space-y-2", className)}
    {...props}
  />
))
ProductInfo.displayName = "ProductInfo"

const ProductName = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-medium text-black font-sans", className)}
    {...props}
  />
))
ProductName.displayName = "ProductName"

const ProductBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs text-gray-500 font-sans", className)}
    {...props}
  />
))
ProductBrand.displayName = "ProductBrand"

const ProductPrice = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-bold text-black font-sans", className)}
    {...props}
  />
))
ProductPrice.displayName = "ProductPrice"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  cardVariants
}
