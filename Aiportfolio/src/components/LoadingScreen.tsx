"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordIndexRef = useRef(0);
  
  const bgTextRef = useRef<HTMLDivElement>(null);
  const smTextRef = useRef<HTMLDivElement>(null);

  const words = ["LEARN", "BUILD", "IMPROVE"];

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 1800; // 1.8 seconds loading animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate progress (0 to 100)
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Add an ease-out curve so it starts fast and slows down
      const easeOut = 1 - Math.pow(1 - rawProgress / 100, 3);
      const currentProgress = Math.floor(easeOut * 100);

      // Directly mutate DOM to bypass React re-renders for extreme performance
      if (bgTextRef.current) bgTextRef.current.textContent = currentProgress.toString();
      if (smTextRef.current) smTextRef.current.textContent = currentProgress.toString() + "%";

      // Only trigger a React re-render when the word actually needs to change (twice total)
      if (currentProgress > 66 && wordIndexRef.current !== 2) {
        wordIndexRef.current = 2;
        setCurrentWordIndex(2);
      } else if (currentProgress > 33 && currentProgress <= 66 && wordIndexRef.current !== 1) {
        wordIndexRef.current = 1;
        setCurrentWordIndex(1);
      }

      if (currentProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 800);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-zinc-950 text-zinc-50 p-8 md:p-12 overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full flex justify-between items-start font-mono text-xs md:text-sm text-zinc-400 uppercase tracking-widest relative z-20">
        <span>Krishna Aggarwal</span>
        <span>Portfolio &copy; {new Date().getFullYear()}</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWordIndex}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute text-5xl md:text-[10vw] font-black tracking-tighter leading-none z-20"
          >
            {words[currentWordIndex]}
          </motion.div>
        </AnimatePresence>

        <div 
          ref={bgTextRef}
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] font-bold text-[50vw] leading-none pointer-events-none z-0 tabular-nums tracking-tighter"
        >
           0
        </div>
      </div>

      <div className="w-full flex justify-between items-end font-mono text-lg md:text-3xl font-light relative z-20">
        <div className="overflow-hidden">
          <motion.div
             initial={{ y: "100%" }}
             animate={{ y: 0 }}
             transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            System Init
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
             initial={{ y: "100%" }}
             animate={{ y: 0 }}
             transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="text-right"
          >
            <span ref={smTextRef} className="tabular-nums">0%</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
