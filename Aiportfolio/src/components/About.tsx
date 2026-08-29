"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Code2, Compass, Database, Layers3, Sparkles } from "lucide-react";
import { DeveloperCommandCenter } from "./DeveloperCommandCenter";

const ThreeAboutVisual = dynamic(
  () => import("./ThreeAboutVisual").then((module) => module.ThreeAboutVisual),
  { ssr: false },
);

gsap.registerPlugin(ScrollTrigger);



export function About() {
  const cacheBuster = "1";
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 42,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });

      // Temporary removal to debug if ScrollTrigger is keeping cards at opacity 0
      /*
      gsap.from(".about-card", {
        opacity: 0,
        y: 36,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.14,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".about-card-grid", start: "top 82%" },
      });
      */

      // The portrait is now handled by ThreeAboutVisual so we don't need GSAP for it.

      gsap.to(".about-orbit-label", {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-transparent py-28 text-zinc-100">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-red-950/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          <div className="about-reveal flex flex-col justify-between text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-red-400">01 / About the developer</p>
              <h2 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.07em] sm:text-7xl">
                Building ideas into <span className="text-red-500">useful</span> experiences.
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">
                I&apos;m Krishna Aggarwal, a BCA student and aspiring full-stack developer focused on building scalable web applications, robust backend systems, and AI-powered products.
              </p>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-y border-zinc-800 py-5">
              <div><p className="font-mono text-2xl font-bold text-zinc-100">MERN</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Core stack</p></div>
              <div><p className="font-mono text-2xl font-bold text-zinc-100">AI</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Exploring</p></div>
              <div><p className="font-mono text-2xl font-bold text-zinc-100">∞</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Learning</p></div>
            </div>
          </div>

          <div className="about-visual about-reveal relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-red-950/30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <ThreeAboutVisual />
            <div className="about-orbit-label absolute left-6 top-6 z-20 font-mono text-[10px] uppercase tracking-[0.24em] text-red-300">Interactive / developer.core</div>
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500"><span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> System online</div>
            <div className="absolute bottom-6 right-6 z-20 font-mono text-[10px] text-zinc-600">scroll to assemble</div>
          </div>
        </div>

        <div className="about-card-grid mt-24 grid gap-6 md:grid-cols-2">
          <div className="about-card group rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 transition-colors group-hover:bg-red-500/20">
                <Sparkles className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">What I enjoy building</h3>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {[{ icon: Code2, text: "MERN applications" }, { icon: Database, text: "Backend architecture" }, { icon: Layers3, text: "REST APIs & databases" }, { icon: Sparkles, text: "AI-powered tools" }].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                  <Icon className="h-4 w-4 text-zinc-600 group-hover:text-red-400/70 transition-colors" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-card group rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                <Compass className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Currently exploring</h3>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {["Data structures & algorithms", "Machine learning with Python", "Production-grade systems", "Open source contributions"].map((text) => (
                <li key={text} className="flex items-center gap-3 text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DeveloperCommandCenter />
      </div>
    </section>
  );
}
