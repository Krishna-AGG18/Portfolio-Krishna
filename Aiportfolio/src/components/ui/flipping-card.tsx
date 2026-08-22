import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
}: FlippingCardProps) {
  return (
    <div
      className={cn("group/flipping-card [perspective:1000px] h-[var(--height)] w-[var(--width)]", className)}
      style={
        {
          "--height": typeof height === 'number' ? `${height}px` : height,
          "--width": typeof width === 'number' ? `${width}px` : width,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-zinc-950 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="h-full w-full [transform:translateZ(70px)_scale(.93)] [transform-style:preserve-3d]">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-zinc-950 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full w-full [transform:translateZ(70px)_scale(.93)] [transform-style:preserve-3d]">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
