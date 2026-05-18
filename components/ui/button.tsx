import * as React from 'react';
import { cn } from '@/components/utils';

const variants = {
  default: 'bg-white/10 text-white hover:bg-white/15 border border-white/10',
  ghost: 'bg-transparent text-slate-300 hover:bg-white/5',
  accent: 'bg-accent text-surface hover:bg-white/95 border border-transparent'
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-60',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
