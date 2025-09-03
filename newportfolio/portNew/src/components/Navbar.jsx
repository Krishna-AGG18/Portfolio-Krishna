import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-16 bg-black/10 text-orange-400 backdrop-blur-lg z-10">
      <div className="w-full h-full flex justify-between items-center px-4 md:px-16">
        <div className="font-bold text-lg animate-pulse">Krishna</div>

        {/* Hamburger trigger - visible on mobile, hidden on md+ */}
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-2xl"
        >
          ☰
        </div>

        {/* Menu - hidden on mobile, flex on md+, with toggle animation on mobile */}
        <div
          className={`${
            isMenuOpen ? 'max-h-[999px] opacity-100' : 'max-h-0 opacity-0'
          } md:max-h-none md:opacity-100 absolute md:relative md:top-0 top-16 left-0 w-full md:w-auto bg-black md:bg-transparent overflow-hidden transition-all duration-300 ease-in-out md:transition-none z-20 md:z-auto shadow-md md:shadow-none`}
        >
          <ul className="list-none flex  max-md:justify-between md:flex-row gap-4 md:gap-8 p-4 md:p-0 font-semibold text-orange-400 md:text-orange-400">
            <a href="#about"><li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>About</li> </a>
            <a href="#projects"><li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Projects</li> </a>
            <a href="#skills"><li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Skills</li> </a>
            <a href="#contact"><li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer" onClick={toggleMenu}>Contact</li> </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
