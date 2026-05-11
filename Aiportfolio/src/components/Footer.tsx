"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MiniGame } from "./MiniGame";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
        
        {/* Game Section */}
        <div className="w-full flex justify-center">
          <MiniGame />
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Krishna Aggarwal. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/krishna-agg18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/krishnawd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/Krishna2909782" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all">
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
