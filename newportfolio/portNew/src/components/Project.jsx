import InfiniteCards from "./InfiniteCards";
const cards = [
  { id: 1, title: "Card 1", content: "Description for card 1" },
  { id: 2, title: "Card 2", content: "Description for card 2" },
  { id: 3, title: "Card 3", content: "Description for card 3" },
];

// ================= React Full-Stack & Major Projects =================
const fullstackProjects = [
  {
    title: "ResuMind",
    description:
      "An AI-powered full-stack resume analyzer with authentication, smart evaluation, and cloud storage integration.",
    stack: ["React", "TypeScript", "Tailwind", "Puter.js"],
    live: "https://ai-resume-navy.vercel.app/",
    github: "https://github.com/Krishna-AGG18/AIResume",
  },
  {
    title: "ThoughtHaven",
    description:
      "A blog app with auth, CRUD, rich text editor, and responsive UI.",
    stack: ["React", "Appwrite", "Tailwind"],
    live: "https://thoughthaven.netlify.app",
    github: "https://github.com/Krishna-AGG18/ThoughtHaven",
  },
  {
    title: "ASKIO",
    description:
      "An AI chatbot using Gemini API for chat, writing, coding help, and translation.",
    stack: ["React", "Google Gemini API", "Tailwind CSS"],
    live: "https://askio.netlify.app",
    github: "https://github.com/Krishna-AGG18/APIchatbot",
  },
  {
    title: "Kuch Toh Naam",
    description:
      "E-commerce frontend with cart, filters, search, loaders, and checkout.",
    stack: ["React", "Tailwind CSS", "Vite", "React Router"],
    live: "https://kuchhtohnaam.netlify.app/",
    github: "https://github.com/Krishna-AGG18/MyEcommerce",
  },
  {
    title: "Note Nostre",
    description:
      "Full-stack notes app with Firebase, featuring auth and real-time sync.",
    stack: ["React", "Firebase", "Tailwind"],
    live: "https://note-nostre.netlify.app",
    github: "https://github.com/Krishna-AGG18/NoteNostre",
  },
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio site with contact form via EmailJS.",
    stack: ["React", "Tailwind", "EmailJS"],
    live: "https://karanaggarwal.netlify.app",
    github:
      "https://github.com/Krishna-AGG18/React-learning/tree/main/portfolioCA",
  },
];

// ================= React Practice & Mid-size Apps =================
const reactPracticeProjects = [
  {
    title: "EchoSait",
    description: "A text-to-speech app with custom voices and responsive UI.",
    stack: ["React", "Web Speech API", "Tailwind"],
    live: "https://echosait.netlify.app",
    github: "https://github.com/Krishna-AGG18/jsSpeechTest",
  },
  {
    title: "React Dice Duel",
    description:
      "A fun dice game built to practice state and rendering in React.",
    stack: ["React", "Tailwind"],
    live: "https://revdicegame.netlify.app",
    github:
      "https://github.com/Krishna-AGG18/React-learning/tree/main/DiceGame",
  },
  {
    title: "Redux To-Do App",
    description:
      "A to-do app using Redux Toolkit with create, update, and delete.",
    stack: ["React", "Redux Toolkit", "Tailwind"],
    live: "https://react-redux-todoapp-krishna.netlify.app/",
    github:
      "https://github.com/Krishna-AGG18/React-learning/tree/main/reduxToolkitTodo",
  },
  {
    title: "CurrencyXchange",
    description:
      "Currency converter with real-time rates, swap, and custom hooks.",
    stack: ["React", "Custom Hooks", "Tailwind"],
    live: "https://currency-exchnge-react.netlify.app",
    github:
      "https://github.com/Krishna-AGG18/React-learning/tree/main/06-currencyExchange",
  },
  {
    title: "ScribeSpace",
    description:
      "A simple notes app to create, edit, and delete with clean UI.",
    stack: ["React", "Bootstrap", "Tailwind"],
    live: "https://scribespace.netlify.app",
    github: "https://github.com/Krishna-AGG18/ScribeSpace-notes",
  },
];

// ================= Vanilla JS / HTML / CSS Projects =================
const vanillaProjects = [
  {
    title: "Classic Snake Game",
    description: "A responsive snake game built with JavaScript and CSS.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://snakegame-sait.netlify.app",
    github: "https://github.com/Krishna-AGG18/Snake-Game",
  },
  {
    title: "Hangman Challenge",
    description: "A hangman game with clues, drawings, and 6-attempt limit.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://hangman-sait.netlify.app",
    github: "https://github.com/Krishna-AGG18/Hangman_game",
  },
  {
    title: "Rock Paper Scissors",
    description: "Responsive RPS game showing choices and outcomes.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://rockpaperscissor-sait.netlify.app",
    github: "https://github.com/Krishna-AGG18/rock-paper-scissors",
  },
  {
    title: "Tic Tac Toe",
    description: "A two-player tic tac toe game with responsive UI.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://tictactoe-sait.netlify.app",
    github: "https://github.com/Krishna-AGG18/Tic-tac-toe",
  },
  {
    title: "Spendence",
    description: "An expense tracker to manage and view daily spending.",
    stack: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://spendence.netlify.app",
    github: "https://github.com/Krishna-AGG18/Spendence",
  },
  {
    title: "Today's Triumph",
    description: "A simple to-do app with add, complete, and remove tasks.",
    stack: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    live: "https://todaystriumph.netlify.app",
    github: "https://github.com/Krishna-AGG18/todolistweb",
  },
  {
    title: "Weave The Web",
    description: "An e-commerce frontend to showcase products and cart layout.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://weavetheweb.netlify.app",
    github: "https://github.com/Krishna-AGG18/Weave-The-Web",
  },
  {
    title: "Netlify UI Clone",
    description: "A frontend clone of Netlify dashboard using HTML and CSS.",
    stack: ["HTML", "CSS", "Responsive Layout"],
    live: "https://res-clone-netfkris.netlify.app",
    github: "https://github.com/Krishna-AGG18/Project_Netflix_clone",
  },
];

function Project() {
  return (
    <div className="max-w-7xl h-full px-4 md:px-8 py-8 pt-20 mx-auto overflow-x-hidden">
      <h1 className="border-b border-b-gray-500 text-lg xs:text-4xl font-bold max-sm:text-center mb-4">
        ✨Projects I have worked on...
      </h1>
      <div className="w-full xs:mt-4 ">
        <div className=" flex  justify-center bg-transparent">
          <InfiniteCards cards={fullstackProjects} />
        </div>
        <div className="flex  justify-center bg-transparent">
          <InfiniteCards cards={reactPracticeProjects} />
        </div>
        <div className=" flex  justify-center bg-transparent">
          <InfiniteCards cards={vanillaProjects} />
        </div>
      </div>
    </div>
  );
}

export default Project;
