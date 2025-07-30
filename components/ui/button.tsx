import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-accent text-white hover:bg-primary-accentHover hover:shadow-glow hover:scale-105",
        destructive:
          "bg-primary-error text-white hover:bg-primary-error/90 hover:shadow-lg",
        outline:
          "border border-primary-border bg-primary-surface text-primary-text hover:bg-primary-surfaceHover hover:border-primary-accent",
        secondary:
          "bg-primary-surface text-primary-text border border-primary-border hover:bg-primary-surfaceHover hover:border-primary-accent",
        ghost: "text-primary-textSecondary hover:text-primary-text hover:bg-primary-surfaceHover",
        link: "text-primary-accent underline-offset-4 hover:underline",
        success: "bg-primary-success text-white hover:bg-primary-success/90 hover:shadow-lg",
        warning: "bg-primary-warning text-white hover:bg-primary-warning/90 hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
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
