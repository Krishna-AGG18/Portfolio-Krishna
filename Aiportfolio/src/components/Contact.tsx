"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-zinc-950 text-zinc-50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Massive Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-[16vw] md:text-[8vw] font-black leading-none tracking-tighter uppercase">
            Let's <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Talk.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Left Column: Info */}
          <div className="md:col-span-5 flex flex-col justify-between items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg md:text-xl font-light text-zinc-400 mb-16 max-w-md">
                I'm currently available for freelance work and full-time opportunities. If you're looking for a developer who cares about the details, drop me a line.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-3">Email</h4>
                  <a href="mailto:kraggr2909@gmail.com" className="text-xl md:text-2xl font-medium hover:text-cyan-400 transition-colors">
                    kraggr2909@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-4">Socials</h4>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/krishna-agg18" target="_blank" rel="noreferrer" className="text-lg text-zinc-400 hover:text-white transition-colors w-max flex items-center gap-1 group">
                      Github <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                    </a>
                    <a href="https://www.linkedin.com/in/krishnawd/" target="_blank" rel="noreferrer" className="text-lg text-zinc-400 hover:text-white transition-colors w-max flex items-center gap-1 group">
                      LinkedIn <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                    </a>
                    <a href="https://x.com/Krishna2909782" target="_blank" rel="noreferrer" className="text-lg text-zinc-400 hover:text-white transition-colors w-max flex items-center gap-1 group">
                      Twitter <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 md:pl-16">
            <form action="https://formsubmit.co/kraggr2909@gmail.com" method="POST" className="flex flex-col gap-12">
              <input type="hidden" name="_next" value="http://localhost:3000/#contact" />
              <input type="hidden" name="_subject" value="New Inquiry from Portfolio" />
              
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="What's your name?"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl font-light text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email address?"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl font-light text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={3}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl font-light text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-6 mt-4 text-lg font-medium group"
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Send Message</span>
                  <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full text-cyan-400">Send Message</span>
                </span>
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
