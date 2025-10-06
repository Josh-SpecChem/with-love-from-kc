import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const modalVariants = cva(
  "fixed inset-0 z-modal-backdrop flex items-center justify-center p-4",
  {
    variants: {
      variant: {
        default: "bg-black/50",
        light: "bg-white/80",
        dark: "bg-black/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const modalContentVariants = cva(
  "relative z-modal bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-full mx-4",
      },
      layout: {
        default: "",
        twoColumn: "max-w-4xl",
      },
    },
    defaultVariants: {
      size: "default",
      layout: "default",
    },
  }
)

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalContentVariants> {}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, variant, open, onClose, children, ...props }, ref) => {
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }

      if (open) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [open, onClose])

    if (!open) return null

    return (
      <div
        ref={ref}
        className={cn(modalVariants({ variant, className }))}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Modal.displayName = "Modal"

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, size, layout, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(modalContentVariants({ size, layout, className }))}
      {...props}
    />
  )
)
ModalContent.displayName = "ModalContent"

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight font-serif", className)}
    {...props}
  />
))
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500 font-sans", className)}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
ModalBody.displayName = "ModalBody"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-end space-x-2 p-6 pt-0", className)}
    {...props}
  />
))
ModalFooter.displayName = "ModalFooter"

const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    size="icon"
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </Button>
))
ModalClose.displayName = "ModalClose"

// Email Subscription Modal Component
interface EmailSubscriptionModalProps {
  open: boolean
  onClose: () => void
}

const EmailSubscriptionModal = React.forwardRef<
  HTMLDivElement,
  EmailSubscriptionModalProps
>(({ open, onClose }, ref) => {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Email subscribed:", email)
    setIsSubmitting(false)
    onClose()
    setEmail("")
  }

  return (
    <Modal ref={ref} open={open} onClose={onClose}>
      <ModalContent size="xl" layout="twoColumn" className="p-0">
        {/* Left Panel - Image */}
        <div className="hidden md:block md:w-2/5 bg-primary-pink relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-pink to-primary-pink-dark" />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-2xl font-bold font-serif mb-2">Hey KC, hey!</h3>
              <p className="text-primary-pink-light">
                Join our community of Kansas City lovers
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="md:w-3/5 p-8">
          <ModalHeader className="p-0 mb-6">
            <ModalTitle className="text-3xl font-bold text-black font-serif mb-2">
              HEY GIRL, HEY!
            </ModalTitle>
            <ModalDescription className="text-base text-black font-sans">
              Subscribe & get <span className="font-bold">15% OFF</span> your{" "}
              <span className="font-bold">first order</span> by subscribing to emails!
            </ModalDescription>
          </ModalHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-2 text-base border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:border-primary-pink transition-colors duration-200 font-sans"
                required
              />
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-pink text-white hover:bg-primary-pink-dark text-base font-semibold py-3"
              >
                {isSubmitting ? "Subscribing..." : "Continue"}
              </Button>

              <p className="text-xs text-gray-500 text-center font-sans">
                Sign up & stay in know with all the latest KC love! By signing up, you agree to our{" "}
                <a href="#" className="underline hover:text-primary-pink">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-primary-pink">
                  Privacy Policy
                </a>
                .
              </p>

              <button
                type="button"
                onClick={onClose}
                className="w-full text-sm text-gray-500 hover:text-primary-pink transition-colors duration-200 font-sans"
              >
                No, thank you!
              </button>
            </div>
          </form>
        </div>

        <ModalClose onClick={onClose} />
      </ModalContent>
    </Modal>
  )
})
EmailSubscriptionModal.displayName = "EmailSubscriptionModal"

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
  EmailSubscriptionModal,
  modalVariants,
  modalContentVariants,
}
