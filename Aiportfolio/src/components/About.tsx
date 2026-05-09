"use client";

import { motion } from "framer-motion";
import { Code2, Compass, Cpu, Database, Layout, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function About() {
  const [cacheBuster, setCacheBuster] = useState("");

  useEffect(() => {
    setCacheBuster(new Date().getTime().toString());
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="font-semibold text-foreground">Krishna Aggarwal</span>.
            I'm a BCA student passionate about building scalable web applications, backend systems, and AI-powered projects. I love transforming ideas into real-world projects while continuously learning modern technologies and improving problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Enjoy Working With */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl glass bg-card/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Things I enjoy working with</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: Code2, text: "MERN Stack Development" },
                { icon: Database, text: "Backend Architecture & Authentication" },
                { icon: Cpu, text: "REST APIs & Database Design" },
                { icon: Sparkles, text: "Data Science & Machine Learning" },
                { icon: Layout, text: "Modern UI/UX Development" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <item.icon className="w-5 h-5 mt-0.5 text-foreground/50 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl glass bg-card/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold">Currently Exploring</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Data Structures & Algorithms",
                "Machine Learning with Python",
                "Production-grade Backend Systems",
                "Open Source Contributions",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-2xl glass bg-card/50 md:col-span-2 flex flex-col items-center justify-center overflow-hidden"
          >
            <h3 className="text-xl font-semibold mb-8">GitHub Contributions</h3>
            <div className="flex flex-col gap-8 w-full items-center">
              <img 
                src={`https://streak-stats.demolab.com/?user=Krishna-AGG18&theme=transparent&hide_border=true&title_color=3b82f6&text_color=a1a1aa&icon_color=3b82f6&background=transparent&v=${cacheBuster}`} 
                alt="Krishna Aggarwal's GitHub Stats" 
                className="max-w-full"
                loading="lazy"
                suppressHydrationWarning
              />
              <img 
                src={`https://github-readme-activity-graph.vercel.app/graph?username=Krishna-AGG18&theme=react-dark&bg_color=transparent&hide_border=true&color=3b82f6&line=3b82f6&point=fafafa&v=${cacheBuster}`} 
                alt="Krishna Aggarwal's GitHub Activity Graph" 
                className="max-w-full w-full"
                loading="lazy"
                suppressHydrationWarning
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
