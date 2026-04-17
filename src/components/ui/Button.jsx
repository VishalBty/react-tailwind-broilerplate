import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
  secondary: 'bg-muted text-foreground hover:bg-muted/80',
  ghost: 'hover:bg-muted text-foreground',
  destructive: 'bg-destructive text-white hover:bg-destructive/90 shadow-sm',
  outline: 'border border-border bg-transparent hover:bg-muted text-foreground',
}

const sizes = {
  sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
  md: 'h-9 px-4 text-sm rounded-lg gap-2',
  lg: 'h-11 px-6 text-base rounded-xl gap-2',
  icon: 'h-9 w-9 rounded-lg',
}

const Button = forwardRef(({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled || loading}
    className={cn(
      'inline-flex items-center justify-center font-medium transition-colors cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      className,
    )}
    {...props}
  >
    {loading && (
      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    )}
    {children}
  </button>
))
Button.displayName = 'Button'

export { Button }
