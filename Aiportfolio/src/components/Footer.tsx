"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center gap-16 mt-8">
          
          {/* Giant Outlined Text */}
          <div className="w-full flex justify-center relative cursor-default select-none">
            <h1 className="flex text-[18vw] font-black leading-none tracking-tighter">
              {"KRISHNA".split("").map((char, index) => (
                <span 
                  key={index} 
                  className="px-[0.2em] -mx-[0.2em] bg-[linear-gradient(to_right,#06b6d4_45%,rgba(6,182,212,0.7)_48%,rgba(6,182,212,0.3)_52%,transparent_55%)] bg-[length:400%_100%] bg-right bg-clip-text text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] transition-all duration-700 ease-out hover:bg-left hover:[-webkit-text-stroke:2px_rgba(6,182,212,0.8)] hover:drop-shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
                © {new Date().getFullYear()} KRISHNA STUDIO · DESIGNED IN INDIA
              </p>
              <a href="/game.html" target="_blank" rel="noopener noreferrer" className="mt-2 px-3 py-1.5 border border-zinc-800 hover:border-cyan-500 text-zinc-400 hover:text-cyan-400 text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 rounded bg-black/50 hover:bg-cyan-950/30 group">
                <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-cyan-500 group-hover:animate-pulse transition-colors"></span>
                Initialize Batcomputer
              </a>
            </div>
            
            <div className="flex items-center gap-6">
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
