import React from 'react';
import Beams from '../Beams/Beams';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

function Project() {
  const projects = [
        {
            title: 'ThoughtHaven',
            description: 'A full-featured blog app with user auth, basic CRUD operations, rich text editing, and responsive UI.',
            stack: ['React', 'Appwrite', 'Tailwind'],
            live: 'https://thoughthaven.netlify.app',
            github: 'https://github.com/Krishna-AGG18/ThoughtHaven',
        },
        {
            title: 'EchoSait',
            description: 'A dynamic text-to-speech web app featuring custom voice selection, real-time speech synthesis, and a sleek, responsive UI.',
            stack: ['React', 'Web Speech API', 'Tailwind'],
            live: 'https://echosait.netlify.app',
            github: 'https://github.com/Krishna-AGG18/jsSpeechTest',
        },
        {
            title: 'React Dice Duel',
            description: 'A fun dice game built with React to practice state and conditional rendering.',
            stack: ['React', 'Tailwind'],
            live: 'https://revdicegame.netlify.app', // Replace with your actual deployed link
            github: 'https://github.com/Krishna-AGG18/React-learning/tree/main/DiceGame', // Replace with actual repo link
        },
        {
            title: 'Personal Portfolio',
            description: 'A modern portfolio website built for my brother, featuring responsive design and contact form integration with direct email submission.',
            stack: ['React', 'Tailwind', 'EmailJS'],
            live: 'https://karanaggarwal.netlify.app', // Replace with actual link
            github: 'https://github.com/Krishna-AGG18/React-learning/tree/main/portfolioCA', // Replace with actual repo
        },
        {
            title: 'Redux To-Do App',
            description: 'A simple to-do app built with Redux Toolkit to practice create, update, complete, and delete operations.',
            stack: ['React', 'Redux Toolkit', 'Tailwind'],
            live: 'https://react-redux-todoapp-krishna.netlify.app/', // Replace with actual deployed link
            github: 'https://github.com/Krishna-AGG18/React-learning/tree/main/reduxToolkitTodo', // Replace with actual repo link
        },
        {
            title: 'CurrencyXchange',
            description: 'A currency converter app built with React and custom hooks, featuring real-time rates and currency swap functionality.',
            stack: ['React', 'Custom Hooks', 'Tailwind'],
            live: 'https://currency-exchnge-react.netlify.app', // Replace with actual live link
            github: 'https://https://github.com/Krishna-AGG18/React-learning/tree/main/06-currencyExchange', // Replace with actual repo
        },
        {
            title: 'Classic Snake Game',
            description: 'A fully responsive snake game built with JavaScript and CSS, playable across devices.',
            stack: ['JavaScript', 'HTML', 'CSS'],
            live: 'https://snakegame-sait.netlify.app', // Replace with actual live link
            github: 'https://github.com/Krishna-AGG18/Snake-Game', // Replace with actual repo
        },
        {
            title: 'Hangman Challenge',
            description: 'A classic Hangman game with clue-based guessing, progressive drawing, and a 6-attempt limit.',
            stack: ['JavaScript', 'HTML', 'CSS'],
            live: 'https://hangman-sait.netlify.app', // Replace with actual deployed link
            github: 'https://github.com/Krishna-AGG18/Hangman_game', // Replace with actual repo
        },
        {
            title: 'Rock Paper Scissors',
            description: 'A responsive Rock Paper Scissors game built in JavaScript, showing real-time computer choices and game outcomes.',
            stack: ['JavaScript', 'HTML', 'CSS'],
            live: 'https://rockpaperscissor-sait.netlify.app', // Replace with actual deployed link
            github: 'https://github.com/Krishna-AGG18/rock-paper-scissors', // Replace with actual repo
        },
        {
            title: 'Tic Tac Toe',
            description: 'A classic Tic Tac Toe game built in JavaScript with responsive UI and turn-based logic for two players.',
            stack: ['JavaScript', 'HTML', 'CSS'],
            live: 'https://tictactoe-sait.netlify.app', // Replace with your actual live link
            github: 'https://github.com/Krishna-AGG18/Tic-tac-toe', // Replace with actual repo
        },
        {
            title: 'ScribeSpace',
            description: 'A simple note-taking app to create, edit, and delete notes with a clean, responsive UI.',
            stack: ['React', 'Bootstrap', 'Tailwind'],
            live: 'https://scribespace.netlify.app', // Replace with actual live link
            github: 'https://github.com/Krishna-AGG18/ScribeSpace-notes', // Replace with actual repo
        },
        {
            title: 'Spendence',
            description: 'An expense tracking app built with vanilla JavaScript and Bootstrap to record, view, and manage daily spending.',
            stack: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
            live: 'https://spendence.netlify.app', // Replace with your actual live link
            github: 'https://github.com/Krishna-AGG18/Spendence', // Replace with your actual repo
        },
        {
            title: "Today's Triumph",
            description: 'A clean and responsive to-do app built with pure JavaScript and Bootstrap to add, complete, and remove tasks.',
            stack: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
            live: 'https://todaystriumph.netlify.app', // Replace with your actual live link
            github: 'https://github.com/Krishna-AGG18/todolistweb', // Replace with actual repo
        },
        {
            title: 'Weave The Web',
            description: 'A responsive e-commerce frontend website built with modern UI components to showcase products, categories, and cart layout — without backend integration.',
            stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            live: 'https://weavetheweb.netlify.app', // Replace with your actual live link
            github: 'https://github.com/Krishna-AGG18/Weave-The-Web', // Replace with actual repo
        },
        // Add more projects similarly
    ];

  return (
    <div className="relative w-full min-h-screen px-4 py-20 bg-black text-white">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 border-b border-gray-700 pb-2 inline-block">
          🛠️ Projects I've Built
        </h2>

        {/* Scrollable vertical grid only for md and up */}
        <div className="h-auto md:h-[70vh] overflow-y-auto pr-2 customs-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="bg-zinc-900 border border-gray-800 p-4 rounded-xl text-white hover:shadow-lg transition-all duration-300"
                spotlightColor="rgba(255, 255, 255, 0.1)"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 text-xs text-gray-300 mb-3">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-800 px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs border border-indigo-500 px-3 py-1 rounded text-indigo-400 hover:bg-indigo-600 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
