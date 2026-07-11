import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
}

export function PrimaryButton({ children, className, icon = true, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}
