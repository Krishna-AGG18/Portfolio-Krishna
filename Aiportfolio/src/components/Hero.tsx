"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const taglines = [
  "Full Stack Developer",
  "MERN Stack Learner",
  "Building Modern Web Experiences",
  "Learning • Building • Improving",
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-medium mb-4"
          >
            Hi, I'm Krishna Aggarwal 👋
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl"
          >
            Crafting Digital Experiences as a <br className="hidden md:block" />
            <span className="text-gradient">
              {taglines[taglineIndex]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            BCA student and aspiring Full-Stack Developer focused on MERN stack, backend engineering, and AI-powered applications. Passionate about scalable web apps and clean UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors group"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/krishna_resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
