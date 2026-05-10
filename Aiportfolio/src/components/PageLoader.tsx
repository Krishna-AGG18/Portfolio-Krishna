"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "./LoadingScreen";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loading-screen" 
            onComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>
      
      {/* 
        Wrap children in a motion.div to fade them in once loading is done.
        We keep them mounted but hidden/invisible until loading is complete
        so the browser can paint them in the background.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        {children}
      </motion.div>
    </>
  );
}
