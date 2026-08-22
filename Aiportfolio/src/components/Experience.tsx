"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Lumzy",
      companyFullName: "A brand of Mondtech IT Consultations LLP",
      location: "Noida, India (Remote/Hybrid)",
      duration: "15 June 2026 – 14 Aug 2026",
      focusAreas: ["React", "FastAPI", "PostgreSQL", "REST APIs", "Git"],
      description: [
        "Built and optimized user interfaces using React for high-performance features that went live for real users.",
        "Developed and documented robust backend services using FastAPI and PostgreSQL.",
        "Integrated complex REST APIs to connect frontend and backend systems.",
        "Shipped production-ready code through rigorous code reviews and Git-based workflows, taking ownership of assigned modules."
      ],
      certificateId: "LMZ-INT-2026-08-KR08",
      verifyLink: "https://www.lumzy.tech/verify/LMZ-INT-2026-08-KR08"
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-cyan-400">03 / Experience</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-50">
            Professional <span className="text-transparent [-webkit-text-stroke:1px_rgba(6,182,212,0.6)]">History.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline line */}
              <div className="absolute left-[27px] top-16 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent group-last:hidden" />
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                {/* Left Side: Icon & Date */}
                <div className="flex md:flex-col gap-6 md:w-56 shrink-0 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-cyan-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-all duration-500">
                    <Briefcase className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="flex flex-col pt-2 md:pt-4">
                    <span className="text-sm font-mono text-cyan-400 mb-2 font-medium">{exp.duration}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{exp.duration.includes("mos") ? exp.duration : "2 Months"}</span>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 relative group/card">
                  {/* Subtle hover gradient ring */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-[2rem] blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative rounded-3xl bg-zinc-950/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 shadow-2xl transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-zinc-400">
                          <span className="text-lg font-medium text-cyan-100">{exp.company}</span>
                          <span className="w-1 h-1 rounded-full bg-zinc-600" />
                          <span className="text-sm font-light text-zinc-400">{exp.companyFullName}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit shrink-0 backdrop-blur-md">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">India</span>
                      </div>
                    </div>

                    <div className="mb-10">
                      <div className="flex flex-wrap gap-3 mb-8">
                        {exp.focusAreas.map((skill) => (
                          <span key={skill} className="px-4 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-zinc-300 group/list">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/list:bg-cyan-400 group-hover/list:shadow-[0_0_10px_rgba(6,182,212,0.8)] shrink-0 transition-all duration-300" />
                            <span className="leading-relaxed text-sm md:text-base font-light text-zinc-400 group-hover/list:text-zinc-200 transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.certificateId && exp.verifyLink && (
                      <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Verified</span>
                            <span className="text-[10px] font-mono text-zinc-600">Completion Certificate</span>
                          </div>
                        </div>
                        
                        <a 
                          href={exp.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group/btn"
                        >
                          <span className="text-xs font-mono text-zinc-400 group-hover/btn:text-cyan-300 transition-colors">
                            ID: <span className="text-zinc-200 group-hover/btn:text-white font-medium">{exp.certificateId}</span>
                          </span>
                          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/btn:text-cyan-400 transition-colors" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
