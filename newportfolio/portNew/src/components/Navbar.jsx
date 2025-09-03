import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 w-full h-16 bg-black/10 text-orange-400 backdrop-blur-lg z-10">
      <div className="w-full h-full flex justify-between items-center px-4 md:px-16">
        <div className="font-bold text-lg animate-pulse">Krishna</div>
        {/* Hamburger trigger - always visible */}
        <div onClick={toggleMenu} className="cursor-pointer text-2xl">
          ☰
        </div>
        {/* Menu - toggled open/close on all screens */}
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={isMenuOpen ? { maxHeight: 999, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-16 left-0 w-full bg-black overflow-hidden shadow-md transition-all ease-in-out z-20"
        >
          <ul className="list-none flex flex-col gap-4 p-4 font-semibold text-orange-400">
            <a href="#about">
              <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>About</li>
            </a>
            <a href="#projects">
              <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Projects</li>
            </a>
            <a href="#skills">
              <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Skills</li>
            </a>
            <a href="#contact">
              <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Contact</li>
            </a>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
export default Navbar;
