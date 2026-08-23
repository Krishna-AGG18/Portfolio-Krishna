"use client";

import { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "./LoadingScreen";

export const LoadingContext = createContext(true);
export const useLoading = () => useContext(LoadingContext);

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
        Cinematic Reveal:
        The site fades in, scales up slightly, and unblurs to complement
        the loader's "fly-through" exit animation.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        <LoadingContext.Provider value={isLoading}>
          {children}
        </LoadingContext.Provider>
      </motion.div>
    </>
  );
}
