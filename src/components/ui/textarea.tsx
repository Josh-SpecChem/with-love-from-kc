import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 font-sans resize-vertical",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-primary-pink",
        error: "border-red focus:border-red",
        success: "border-green focus:border-green",
      },
      size: {
        default: "min-h-[80px]",
        sm: "min-h-[60px] text-xs",
        lg: "min-h-[120px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }

