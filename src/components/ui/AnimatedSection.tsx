'use client';

import React, { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'section' | 'div' | 'header' | 'footer' | 'main' | 'span' | 'article';
  options?: Parameters<typeof useGsapReveal>[1];
}

export function AnimatedSection({
  children,
  as = 'section',
  className,
  options,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const Component = as as any;
  
  useGsapReveal(ref, options);

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
}
