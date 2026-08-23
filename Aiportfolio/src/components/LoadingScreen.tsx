"use client";

import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordIndexRef = useRef(0);
  
  const bgTextRef = useRef<HTMLDivElement>(null);
  const smTextRef = useRef<HTMLDivElement>(null);

  const words = ["LEARN", "BUILD", "IMPROVE"];

  useEffect(() => {
    // Use Framer Motion's animate function for perfectly fluid number interpolation
    const controls = animate(0, 100, {
      duration: 2.4, // Slightly longer, more dramatic load time
      ease: [0.76, 0, 0.24, 1], // Cinematic ease-in-out
      onUpdate: (latest) => {
        const val = Math.floor(latest);
        
        // Direct DOM mutation for extreme performance
        if (bgTextRef.current) bgTextRef.current.textContent = val.toString();
        if (smTextRef.current) smTextRef.current.textContent = val.toString() + "%";

        // Trigger word changes based on progress milestones
        if (val > 66 && wordIndexRef.current !== 2) {
          wordIndexRef.current = 2;
          setCurrentWordIndex(2);
        } else if (val > 33 && val <= 66 && wordIndexRef.current !== 1) {
          wordIndexRef.current = 1;
          setCurrentWordIndex(1);
        }
      },
      onComplete: () => {
        // Hold at 100% for a beat before triggering the reveal
        setTimeout(onComplete, 400);
      }
    });

    return () => controls.stop();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-zinc-950 text-zinc-50 p-8 md:p-12 overflow-hidden"
      initial={{ opacity: 1 }}
      // Cinematic scale-through reveal (Hardware Accelerated)
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
      }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Wrapper to fade out content slightly before the background scales away */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-between p-8 md:p-12 w-full h-full"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
    </motion.div>
  );
}
