"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FlippingCard } from "@/components/ui/flipping-card";

const projects = [
  {
    title: "WorkLoom",
    description: "A full-stack, Jira-style project management platform. Features secure JWT authentication, Mongoose data validation, drag-and-drop boards, and animated UI.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18",
    live: "https://work-loom-liart.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop"
  },
  {
    title: "Resumind",
    description: "An AI-powered resume analyzer built to accelerate evaluations. Architected with React Router v7, integrating AI analysis and reliable cloud storage.",
    tech: ["React", "TypeScript", "Tailwind", "Puter.js"],
    category: "AI Apps",
    github: "https://github.com/Krishna-AGG18/AIResume",
    live: "https://ai-resume-navy.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
  },
  {
    title: "ThoughtHaven",
    description: "A comprehensive blogging platform supporting rich-text authoring, complete with robust backend authentication and media storage.",
    tech: ["React 19", "Appwrite", "Tailwind", "TinyMCE"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/ThoughtHaven",
    live: "https://thoughthaven.netlify.app",
    imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
  },
  {
    title: "ASKIO & Echosait",
    description: "Dual applications featuring an AI-powered chatbot leveraging the Google Gemini API, alongside a real-time text-to-speech engine.",
    tech: ["React", "Gemini API", "Tailwind", "Speech API"],
    category: "AI Apps",
    github: "https://github.com/Krishna-AGG18/APIchatbot",
    live: "https://askio.netlify.app",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
  },
  {
    title: "Note Nostre",
    description: "A full-stack notes application featuring real-time data sync, secure user authentication, and automatic time-based categorization.",
    tech: ["React", "Firebase", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/NoteNostre",
    live: "https://fire-base-notes-app.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Full Stack", "AI Apps"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-cyan-400">03 / Featured Projects</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-50">
            Engineered for <span className="text-cyan-500">impact.</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                filter === category
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "backOut" }}
                className="w-full h-[400px]"
              >
                <FlippingCard
                  width="100%"
                  height="100%"
                  frontContent={
                    <div className="flex flex-col h-full w-full p-4 relative overflow-hidden group/front">
                      {/* Gradient Overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-2xl pointer-events-none" />
                      
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-70 transition-transform duration-700 group-hover/front:scale-105"
                      />
                      
                      <div className="relative z-20 flex flex-col justify-end h-full p-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">{project.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest rounded bg-white/10 text-white backdrop-blur-sm border border-white/20">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest rounded bg-white/10 text-white backdrop-blur-sm border border-white/20">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center relative overflow-hidden group/back">
                      {/* Background Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none transition-transform duration-1000 group-hover/back:scale-110" />
                      <div className="absolute inset-0 bg-zinc-950/40 pointer-events-none backdrop-blur-[2px]" />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center h-full w-full">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover/back:scale-110 transition-transform duration-500">
                          <Folder className="w-8 h-8 text-cyan-400" />
                        </div>
                        
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-zinc-300 mb-8 max-w-[95%]">
                          {project.description}
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex gap-4 mt-auto w-full">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
                          >
                            <FaGithub className="w-5 h-5" /> Code
                          </a>
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-sm font-bold text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5" /> Live
                          </a>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
