"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4 transition-all duration-500">
      <div className={`flex items-center justify-between px-4 py-3 mx-auto transition-all duration-500 ${
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full" 
          : "bg-zinc-950/40 backdrop-blur-md border border-white/5 shadow-lg rounded-full"
      }`}>
        
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "body")}
          className="text-xl font-black tracking-tighter text-white pl-4"
        >
          KRISHNA<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4 pr-1">
          <div className="flex items-center gap-3 pr-4 border-r border-white/10">
            <a href="https://github.com/krishna-agg18" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/krishnawd/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white hover:scale-110 transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2.5 rounded-full bg-cyan-500 text-black text-sm font-bold tracking-wide hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-4 p-6 bg-zinc-950/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex gap-4">
                <a href="https://github.com/krishna-agg18" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/krishnawd/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="px-6 py-2.5 rounded-full bg-cyan-500 text-black text-sm font-bold tracking-wide hover:bg-cyan-400 transition-all"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
