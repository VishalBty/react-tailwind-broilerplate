import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-primary/10 text-primary',
  secondary: 'bg-muted text-muted-foreground',
  destructive: 'bg-destructive/10 text-destructive',
  success: 'bg-success/10 text-success',
  outline: 'border border-border text-foreground',
}

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}
      {...props}
    />
  )
}
