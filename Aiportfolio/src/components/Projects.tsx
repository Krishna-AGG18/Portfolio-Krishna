"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "WorkLoom",
    description: "A full-stack, Jira-style project management platform. Features secure JWT authentication, Mongoose data validation, drag-and-drop boards, and animated UI.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18",
    live: "https://work-loom-liart.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1600&h=900&fit=crop"
  },
  {
    title: "Resumind",
    description: "An AI-powered resume analyzer built to accelerate evaluations. Architected with React Router v7, integrating AI analysis and reliable cloud storage.",
    tech: ["React", "TypeScript", "Tailwind", "Puter.js"],
    category: "AI Apps",
    github: "https://github.com/Krishna-AGG18/AIResume",
    live: "https://ai-resume-navy.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop"
  },
  {
    title: "ThoughtHaven",
    description: "A comprehensive blogging platform supporting rich-text authoring, complete with robust backend authentication and media storage.",
    tech: ["React 19", "Appwrite", "Tailwind", "TinyMCE"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/ThoughtHaven",
    live: "https://thoughthaven.netlify.app",
    imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop"
  },
  {
    title: "ASKIO & Echosait",
    description: "Dual applications featuring an AI-powered chatbot leveraging the Google Gemini API, alongside a real-time text-to-speech engine.",
    tech: ["React", "Gemini API", "Tailwind", "Speech API"],
    category: "AI Apps",
    github: "https://github.com/Krishna-AGG18/APIchatbot",
    live: "https://askio.netlify.app",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop"
  },
  {
    title: "Note Nostre",
    description: "A full-stack notes application featuring real-time data sync, secure user authentication, and automatic time-based categorization.",
    tech: ["React", "Firebase", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/NoteNostre",
    live: "https://fire-base-notes-app.vercel.app",
    imageSrc: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1600&h=900&fit=crop"
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".horizontal-panel");
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power1.inOut"
          },
          end: () => "+=" + scrollWrapperRef.current!.offsetWidth,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative bg-zinc-950 pt-32 pb-20 border-t border-zinc-800">
      
      {/* Standard Section Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-cyan-400">03 / Featured Projects</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-50">
            Engineered for <span className="text-cyan-500">impact.</span>
          </h2>
        </motion.div>
      </div>

      <div ref={containerRef} className="h-screen w-full overflow-hidden flex flex-col justify-center relative">
        {/* Title pinned in background during scroll */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-0">
          <h2 className="text-[15vw] font-black tracking-tighter whitespace-nowrap">PROJECTS</h2>
        </div>

        <div 
          ref={scrollWrapperRef} 
          className="flex h-full"
          style={{ width: `${projects.length * 100}vw` }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="horizontal-panel w-screen h-full flex-shrink-0 flex items-center justify-center p-8 md:p-24 relative overflow-hidden group z-10">
              {/* Background Image with Parallax */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-100 opacity-20"
                />
              </div>

              {/* Content Box */}
              <div className="relative z-10 flex flex-col md:flex-row gap-12 max-w-7xl w-full">
                <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[40vh] md:h-[60vh] group-hover:border-cyan-500/30 transition-colors duration-500">
                   <img 
                    src={project.imageSrc} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 pointer-events-none">
                     <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">
                        {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                     </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10">
                       {project.category}
                     </span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">{project.title}</h3>
                  <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded bg-white/5 text-zinc-300 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-8">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-3 px-6 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform text-sm uppercase tracking-wider">
                      <FaGithub className="w-5 h-5" /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-3 px-6 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold hover:bg-cyan-500/20 transition-colors text-sm uppercase tracking-wider">
                      <ExternalLink className="w-5 h-5" /> View Live
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
