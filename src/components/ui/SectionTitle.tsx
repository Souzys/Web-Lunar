import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  highlight?: string;
  highlightColor?: string;
}

export function SectionTitle({
  children,
  as: Component = 'h2',
  className,
  highlight,
  highlightColor = 'text-blue-600',
  ...props
}: SectionTitleProps) {
  
  const renderContent = () => {
    if (typeof children !== 'string' || !highlight) return children;

    const parts = children.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className={highlightColor}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <Component
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase",
        className
      )}
      {...props}
    >
      {renderContent()}
    </Component>
  );
}
