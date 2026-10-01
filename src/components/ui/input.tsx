import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-border-subtle dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary dark:placeholder:text-[#9aa0a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary dark:focus-visible:ring-[#8ab4f8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
