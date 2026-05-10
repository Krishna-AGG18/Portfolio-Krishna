"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  // Full Stack
  {
    title: "ResuMind",
    description: "An AI-powered full-stack resume analyzer with authentication, smart evaluation, and cloud storage integration.",
    tech: ["React", "TypeScript", "Tailwind", "Puter.js"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/AIResume",
    live: "https://ai-resume-navy.vercel.app/"
  },
  {
    title: "ThoughtHaven",
    description: "A comprehensive blog application featuring robust authentication, full CRUD capabilities, a rich text editor, and a highly responsive UI.",
    tech: ["React", "Appwrite", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/ThoughtHaven",
    live: "https://thoughthaven.netlify.app"
  },
  {
    title: "ASKIO",
    description: "An intelligent AI chatbot leveraging the Gemini API to provide conversational chat, writing assistance, coding help, and real-time translation.",
    tech: ["React", "Google Gemini API", "Tailwind CSS"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/APIchatbot",
    live: "https://askio.netlify.app"
  },
  {
    title: "Note Nostre",
    description: "A full-stack notes application powered by Firebase, featuring secure user authentication and seamless real-time data synchronization.",
    tech: ["React", "Firebase", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Krishna-AGG18/NoteNostre",
    live: "https://note-nostre.netlify.app"
  },

  // Frontend
  {
    title: "Kuch Toh Naam",
    description: "A feature-rich e-commerce frontend complete with a dynamic shopping cart, product filtering, search functionality, loading states, and a smooth checkout flow.",
    tech: ["React", "Tailwind CSS", "Vite", "React Router"],
    category: "Frontend",
    github: "https://github.com/Krishna-AGG18/MyEcommerce",
    live: "https://kuchhtohnaam.netlify.app/"
  },
  {
    title: "CurrencyXchange",
    description: "A dynamic currency converter offering real-time exchange rates, currency swapping functionality, and implemented using custom React hooks.",
    tech: ["React", "Custom Hooks", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/Krishna-AGG18/React-learning/tree/main/06-currencyExchange",
    live: "https://currency-exchnge-react.netlify.app"
  },
  {
    title: "Redux To-Do App",
    description: "A robust task management application utilizing Redux Toolkit to handle complex global state for creating, updating, and deleting to-dos.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/Krishna-AGG18/React-learning/tree/main/reduxToolkitTodo",
    live: "https://react-redux-todoapp-krishna.netlify.app/"
  },

  // Browser Games
  {
    title: "Classic Snake Game",
    description: "A responsive recreation of the classic Snake game, built entirely from scratch using pure JavaScript, HTML, and CSS.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "Browser Games",
    github: "https://github.com/Krishna-AGG18/Snake-Game",
    live: "https://snakegame-sait.netlify.app"
  },
  {
    title: "Hangman Challenge",
    description: "An interactive hangman game complete with word clues, progressive canvas drawings, and a strict 6-attempt limit.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "Browser Games",
    github: "https://github.com/Krishna-AGG18/Hangman_game",
    live: "https://hangman-sait.netlify.app"
  },
  {
    title: "Tic Tac Toe",
    description: "A classic two-player Tic Tac Toe game featuring a responsive grid layout and win/draw detection logic.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "Browser Games",
    github: "https://github.com/Krishna-AGG18/Tic-tac-toe",
    live: "https://tictactoe-sait.netlify.app"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Browser Games"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between p-6 rounded-2xl glass bg-card/50 border border-border hover:border-foreground/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="w-10 h-10 text-blue-500" />
                    <div className="flex gap-3">
                      <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
