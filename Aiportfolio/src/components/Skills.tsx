"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "PHP"],
    color: "from-yellow-400/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Vite", "Shadcn/UI"],
    color: "from-blue-400/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Appwrite", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Socket.io", "Supabase"],
    color: "from-green-400/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "Data Science & Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Machine Learning", "Data Science"],
    color: "from-purple-400/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Sublime Text", "Figma", "Photoshop", "Linux", "Ubuntu", "Docker", "AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Postman"],
    color: "from-gray-400/20 to-slate-500/20",
    border: "group-hover:border-gray-500/50",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 rounded-2xl glass bg-card/40 border border-border transition-all duration-300 ${category.border} hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] hover:shadow-${category.color.split('-')[1]}-500/20`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
              
              <h3 className="text-xl font-semibold mb-6 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border group-hover:border-foreground/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
