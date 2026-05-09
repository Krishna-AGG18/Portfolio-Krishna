"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Wait a tiny bit after hitting 100% before triggering complete
      const timeout = setTimeout(() => {
        onComplete();
      }, 400); // 400ms delay so "Ready" is readable
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Background Glow */}
        <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full animate-pulse" />

        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 text-4xl md:text-6xl font-bold tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            K
          </span>
          <span className="text-foreground">RISHNA</span>
        </motion.div>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 w-48 md:w-64 h-1.5 bg-muted rounded-full overflow-hidden relative z-10"
        >
          {/* Progress Bar Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </motion.div>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 text-sm text-muted-foreground font-mono relative z-10"
        >
          {progress >= 100 ? "Ready" : `Loading... ${Math.min(progress, 100)}%`}
        </motion.div>
      </div>
    </motion.div>
  );
}
