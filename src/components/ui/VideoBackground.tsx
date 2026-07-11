import React from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  overlayClassName?: string;
}

export function VideoBackground({
  src,
  poster,
  className,
  overlayClassName,
  ...props
}: VideoBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        className="h-full w-full object-cover"
        {...props}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={cn("absolute inset-0 bg-black/40", overlayClassName)} />
    </div>
  );
}
