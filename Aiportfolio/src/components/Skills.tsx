"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "PHP"],
    shapeBg: "bg-gradient-to-br from-red-500 to-orange-500",
    shapeClass: "absolute -left-4 -bottom-4 w-3/4 h-full rounded-2xl opacity-80 transition-transform duration-500 group-hover:scale-105",
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Vite", "Shadcn/UI"],
    shapeBg: "bg-gradient-to-br from-pink-500 to-blue-500",
    shapeClass: "absolute right-0 -bottom-8 w-2/3 h-[120%] skew-x-[-15deg] rounded-3xl opacity-80 transition-transform duration-500 group-hover:skew-x-[-10deg]",
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Appwrite", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Socket.io", "Supabase"],
    shapeBg: "bg-gradient-to-br from-teal-400 to-emerald-600",
    shapeClass: "absolute left-1/4 -bottom-10 w-3/4 h-3/4 rounded-full opacity-70 blur-[10px] transition-transform duration-500 group-hover:scale-110",
  },
  {
    title: "Data Science & Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Machine Learning", "Data Science"],
    shapeBg: "bg-gradient-to-br from-purple-600 to-fuchsia-500",
    shapeClass: "absolute -right-4 -top-4 w-2/3 h-full rounded-3xl rotate-12 opacity-80 transition-transform duration-500 group-hover:rotate-6",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Sublime Text", "Figma", "Photoshop", "Linux", "Ubuntu", "Docker", "AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Postman"],
    shapeBg: "bg-gradient-to-br from-amber-400 to-orange-600",
    shapeClass: "absolute left-0 top-1/4 w-full h-1/2 -skew-y-6 opacity-70 blur-[5px] transition-transform duration-500 group-hover:-skew-y-3",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-amber-500">02 / Technical Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-50">
            Tools of the <span className="text-amber-500">trade.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A comprehensive list of technologies, frameworks, and architecture patterns I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "backOut" }}
              className="group relative flex flex-col h-full min-h-[300px]"
            >
              {/* Vibrant Geometric Shape Behind Card */}
              <div className={`${category.shapeClass} ${category.shapeBg} z-0`} />
              
              {/* Dark Frosted Glass Card */}
              <div className="relative z-10 flex-1 p-8 rounded-2xl bg-zinc-950/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-500 group-hover:bg-zinc-950/40">
                <h3 className="text-xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded border border-white/20 bg-white/5 text-zinc-100 drop-shadow-sm transition-all duration-300 group-hover:border-white/40 hover:!bg-white/20 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
