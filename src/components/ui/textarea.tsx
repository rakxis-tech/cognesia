import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border border-border-subtle dark:border-[#3c4043] bg-canvas dark:bg-[#282a2c] px-3 py-2 text-base sm:text-sm text-text-primary dark:text-[#e3e3e3] placeholder:text-text-secondary dark:placeholder:text-[#9aa0a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary dark:focus-visible:ring-[#8ab4f8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
