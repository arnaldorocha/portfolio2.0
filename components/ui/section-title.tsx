import * as React from 'react';
import { cn } from '@/components/utils';

export function SectionTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-3', className)} {...props} />
  );
}

export function SectionHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('text-3xl font-semibold tracking-tight text-white sm:text-4xl', className)} {...props} />;
}

export function SectionSubheading({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('max-w-2xl text-sm leading-7 text-slate-300 sm:text-base', className)} {...props} />;
}
