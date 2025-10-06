import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-pink text-white hover:bg-primary-pink-dark hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        destructive:
          "bg-red text-white hover:bg-red-dark hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        outline:
          "border border-gray-300 bg-transparent text-black hover:bg-gray-50 hover:border-gray-400 transition-all duration-200",
        secondary:
          "bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200",
        ghost: "text-black hover:text-primary-pink underline-offset-4 hover:underline transition-colors duration-200",
        link: "text-primary-pink underline-offset-4 hover:underline transition-colors duration-200",
        "pink-outline": "border border-primary-pink bg-transparent text-primary-pink hover:bg-primary-pink hover:text-white transition-all duration-200",
        "white-outline": "border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
