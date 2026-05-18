import * as React from 'react';
import { cn } from '@/components/utils';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300', className)} {...props} />
  );
}
