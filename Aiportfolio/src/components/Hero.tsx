"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useLoading } from "./PageLoader";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const isLoading = useLoading();

  useEffect(() => {
    // We will set up quickTo for parallax after the component mounts
    let ctx = gsap.context(() => {});

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate normalized mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Subtle parallax effect on elements using GSAP
      if (text1Ref.current && text2Ref.current && imgWrapperRef.current && !isLoading) {
        gsap.to([text1Ref.current, text2Ref.current], {
          x: x * 15,
          duration: 1,
          ease: "power2.out",
        });
        
        gsap.to(imgWrapperRef.current, {
          x: x * -25, // Moves opposite to text for depth
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return; // Wait for preloading to finish

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        text1Ref.current,
        { y: "120%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.2, delay: 0.1 } // Reduced delay since we are already waiting for preloader
      )
      .fromTo(
        text2Ref.current,
        { y: "120%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.2 },
        "-=1.0"
      )
      .fromTo(
        descRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        imgWrapperRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1.5"
      );

      gsap.to(imgWrapperRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent cursor-none pt-32 pb-16">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50 flex items-center justify-center text-[8px] font-bold text-black"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        {isHovering ? "VIEW" : ""}
      </motion.div>

      {/* Atmospheric Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-[90vw] mx-auto relative z-10 w-full h-full flex items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center space-y-4 w-full relative z-10 mix-blend-difference pointer-events-none">
          
          <div className="overflow-hidden pointer-events-auto">
            <p className="text-zinc-400 font-mono tracking-widest text-sm uppercase mb-4">
              Creative Developer
            </p>
          </div>

          <div className="overflow-hidden leading-none w-full flex justify-center md:justify-start">
            <h1
              ref={text1Ref}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-zinc-50 md:pr-4 translate-y-[120%] opacity-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              KRISHNA
            </h1>
          </div>

          <div className="overflow-hidden leading-none w-full flex justify-center md:justify-start">
            <h1
              ref={text2Ref}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-zinc-50 md:pr-4 translate-y-[120%] opacity-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              AGGARWAL.
            </h1>
          </div>

          <div className="overflow-hidden mt-8 max-w-xl">
            <p
              ref={descRef}
              className="text-base md:text-lg text-zinc-400 leading-relaxed translate-y-[50px] opacity-0"
            >
              Full Stack Developer specializing in building scalable web applications and robust backend systems. Passionate about transforming ideas into reliable code.
            </p>
          </div>

          <div className="overflow-hidden pt-8 pointer-events-auto">
            <div ref={linksRef} className="flex flex-col sm:flex-row items-center gap-6 translate-y-[30px] opacity-0">
              <a
                href="#projects"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group flex items-center gap-2 text-zinc-50 font-medium hover:text-zinc-300 transition-colors uppercase tracking-widest text-sm"
              >
                Selected Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="/krishna_resume.pdf"
                download
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group flex items-center gap-2 text-zinc-500 font-medium hover:text-zinc-300 transition-colors uppercase tracking-widest text-sm"
              >
                Resume
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Massive Cutout Hero Image (Absolute on Right) */}
        <div className="hidden md:block absolute bottom-0 right-0 lg:right-[5%] h-[75vh] z-0 pointer-events-none">
          <div ref={imgWrapperRef} className="h-full relative flex items-end translate-y-[150px] opacity-0">
            <img 
              ref={imgRef}
              src="/krishna-pic.png" 
              alt="Krishna Aggarwal" 
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
            />
            {/* Fade out at the bottom so it blends with the next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-zinc-800 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-zinc-400"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Smooth blend gradient at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
