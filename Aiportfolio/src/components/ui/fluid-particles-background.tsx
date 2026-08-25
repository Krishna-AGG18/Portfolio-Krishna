"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLoading } from "@/components/PageLoader";

interface CyberBackgroundProps {
  children?: React.ReactNode;
  particleCount?: number;
  noiseIntensity?: number;
  particleSize?: { min: number; max: number };
  className?: string;
}

// Helper function for Perlin Noise
function createNoise() {
  const permutation = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180,
  ];

  const p = new Array(512);
  for (let i = 0; i < 256; i++) p[256 + i] = p[i] = permutation[i];

  function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t: number, a: number, b: number) {
    return a + t * (b - a);
  }

  function grad(hash: number, x: number, y: number, z: number) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  return {
    simplex3: (x: number, y: number, z: number) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;

      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);

      const u = fade(x);
      const v = fade(y);
      const w = fade(z);

      const A = p[X] + Y;
      const AA = p[A] + Z;
      const AB = p[A + 1] + Z;
      const B = p[X + 1] + Y;
      const BA = p[B] + Z;
      const BB = p[B + 1] + Z;

      return lerp(
        w,
        lerp(
          v,
          lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
          lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z)),
        ),
        lerp(
          v,
          lerp(
            u,
            grad(p[AA + 1], x, y, z - 1),
            grad(p[BA + 1], x - 1, y, z - 1),
          ),
          lerp(
            u,
            grad(p[AB + 1], x, y - 1, z - 1),
            grad(p[BB + 1], x - 1, y - 1, z - 1),
          ),
        ),
      );
    },
  };
}

const COLOR_SCHEME = {
  light: {
    particle: {
      color: "rgba(0, 0, 0, 0.07)",
    },
    background: "rgba(255, 255, 255, 0.12)",
  },
  dark: {
    particle: {
      color: "rgba(255, 255, 255, 0.07)",
    },
    background: "rgba(0, 0, 0, 0.12)",
  },
} as const;

interface Particle {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

export const FluidParticlesBackground = ({
  children,
  particleCount = 300, // Reduced further for extreme optimization
  noiseIntensity = 0.003,
  particleSize = { min: 0.5, max: 2 },
  className,
}: CyberBackgroundProps) => { 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noise = useMemo(() => createNoise(), []);
  const isLoading = useLoading();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let logicalWidth = 0;
    let logicalHeight = 0;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      logicalWidth = rect?.width || window.innerWidth;
      logicalHeight = rect?.height || window.innerHeight;

      // Cap the backing resolution so high-DPI screens do not multiply the work.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(logicalWidth * dpr);
      canvas.height = Math.floor(logicalHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas(); // Initial resize

    // Dynamic particle count based on screen size (optimizes for ultrawide and mobile)
    const getTargetParticleCount = () => {
      const area = logicalWidth * logicalHeight;
      const baseArea = 1920 * 1080;
      const areaMultiplier = Math.min(Math.max(area / baseArea, 0.4), 2.5); 
      return Math.floor(particleCount * areaMultiplier);
    };

    const particles: Particle[] = Array.from({ length: getTargetParticleCount() }, () => ({
      x: Math.random() * logicalWidth,
      y: Math.random() * logicalHeight,
      size:
        Math.random() * (particleSize.max - particleSize.min) +
        particleSize.min,
      velocity: { x: 0, y: 0 },
      life: Math.random() * 100,
      maxLife: 100 + Math.random() * 50,
    }));

    let animationFrameId = 0;
    let isVisible = true;
    let lastFrameTime = 0;
    const frameInterval = 1000 / 36;

    const scheduleFrame = () => {
      if (!isVisible || document.hidden || animationFrameId || isLoading) return;
      animationFrameId = requestAnimationFrame(animate);
    };

    const animate = (now: number) => {
      animationFrameId = 0;
      if (!isVisible || document.hidden || isLoading) return;
      if (now - lastFrameTime < frameInterval) {
        scheduleFrame();
        return;
      }
      lastFrameTime = now;

      // Hardcode dark mode for portfolio consistency
      const isDark = true;
      const scheme = isDark ? COLOR_SCHEME.dark : COLOR_SCHEME.light;

      // Clear canvas with a semi-transparent background to create trails
      ctx.fillStyle = scheme.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pre-calculate time outside the loop
      const time = Date.now() * 0.0001;
      
      // Calculate scroll progress for multiple sections
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      let r = 255, g = 255, b = 255;
      
      // Stage 1: White to Red (Hero to About)
      // Clamps between 0 and 1 as we scroll the first viewport height
      const p1 = Math.max(0, Math.min(scrollY / (vh * 0.8), 1.0));
      
      // Stage 2: Red to Gold (About to Skills/Projects)
      // About is tall, so we start shifting to Gold after scrolling 1.8x viewport heights
      const p2 = Math.max(0, Math.min((scrollY - (vh * 1.8)) / vh, 1.0));

      // Stage 3: Gold to Cyan (Projects to Experience/Contact)
      // Start shifting to Cyan after 3.2x viewport heights
      const p3 = Math.max(0, Math.min((scrollY - (vh * 3.5)) / vh, 1.0));
      
      if (p3 > 0) {
        // Interpolate Gold (250, 204, 21) to Cyan (6, 182, 212)
        r = 250 - (p3 * (250 - 6));
        g = 204 - (p3 * (204 - 182));
        b = 21 + (p3 * (212 - 21));
      } else if (p2 > 0) {
        // Interpolate Red (239, 68, 68) to Gold (250, 204, 21)
        r = 239 + (p2 * (250 - 239));
        g = 68 + (p2 * (204 - 68));
        b = 68 - (p2 * (68 - 21));
      } else {
        // Interpolate White (255, 255, 255) to Red (239, 68, 68)
        r = 255 - (p1 * (255 - 239));
        g = 255 - (p1 * (255 - 68));
        b = 255 - (p1 * (255 - 68));
      }
      
      // OPTIMIZATION: Set fill style ONCE outside the loop.
      ctx.fillStyle = isDark ? `rgba(${r}, ${g}, ${b}, 0.15)` : `rgba(0, 0, 0, 0.15)`;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.life += 1;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * logicalWidth;
          particle.y = Math.random() * logicalHeight;
        }

        // Use noise for particle movement direction
        const n = noise.simplex3(
          particle.x * noiseIntensity,
          particle.y * noiseIntensity,
          time,
        );

        const angle = n * Math.PI * 4;
        particle.velocity.x = Math.cos(angle) * 2;
        particle.velocity.y = Math.sin(angle) * 2;

        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Wrap particles around the canvas edges
        if (particle.x < 0) particle.x = logicalWidth;
        else if (particle.x > logicalWidth) particle.x = 0;
        
        if (particle.y < 0) particle.y = logicalHeight;
        else if (particle.y > logicalHeight) particle.y = 0;

        // Draw particle (fillRect is exponentially faster than arc/beginPath)
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      }

      scheduleFrame();
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) scheduleFrame();
    }, { threshold: 0 });
    observer.observe(canvas);

    const handleResize = () => {
      resizeCanvas();
      const newTarget = getTargetParticleCount();
      
      // If window gets larger, add new particles to maintain density
      if (newTarget > particles.length) {
        for (let i = particles.length; i < newTarget; i++) {
          particles.push({
            x: Math.random() * logicalWidth,
            y: Math.random() * logicalHeight,
            size: Math.random() * (particleSize.max - particleSize.min) + particleSize.min,
            velocity: { x: 0, y: 0 },
            life: Math.random() * 100,
            maxLife: 100 + Math.random() * 50,
          });
        }
      } 
      // If window gets smaller, remove excess particles to save performance
      else if (newTarget < particles.length) {
        particles.splice(newTarget);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) scheduleFrame();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    scheduleFrame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [particleCount, noiseIntensity, particleSize.min, particleSize.max, noise, isLoading]);

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0", // Changed to absolute and z-0 for hero background
        className,
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {children && (
        <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};
