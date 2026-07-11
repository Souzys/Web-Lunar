import React from 'react';
import { cn } from '@/lib/utils';

export function SectionTag({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block uppercase tracking-widest text-xs font-semibold mb-4 text-neutral-500",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
