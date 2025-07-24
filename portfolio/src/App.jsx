import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Project from './components/projects/Project'

function App() {
  return (
    <>
      <Header />
      <div className="relative">
        {/* Desktop: Parallax using sticky, Mobile: Normal flow using Tailwind responsive classes */}
        <div className="md:sticky md:top-0 min-h-screen flex flex-row items-center overflow-hidden bg-black" id='Home'>
          <Home />
        </div>
        <div className="md:sticky md:top-0 min-h-screen flex flex-col items-center bg-black text-white" id='About'>
          <About />
        </div>
        <div className="md:sticky md:top-0 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white" id='Projects'>
          <Project />
        </div>
        <div className="md:sticky md:top-0 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black" id='Skills'>
          <h2 className="text-4xl font-bold">The Fourth slide</h2>
        </div>
      </div>
    </>
  )
}

export default App
