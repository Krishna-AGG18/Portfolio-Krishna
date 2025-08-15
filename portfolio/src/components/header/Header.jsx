import React from 'react';
import TextType from '../TextType/TextType';

function Header() {
    return (
        <div className="p-2 bg-black w-full">
            <div className="flex flex-wrap md:flex-nowrap max-sm:flex-col xs:justify-between items-center w-full">
                
                {/* Logo / Name */}
                <div className="p-2 font-extrabold text-[clamp(1rem, 3vw, 5rem)] max-sm:hidden text-white">
                    <TextType
                        text={["KRISHNA", ""]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={false}
                        cursorCharacter=">"
                    />
                </div>
                <div className="p-2 font-extrabold text-[clamp(1rem, 3vw, 5rem)] sm:hidden text-white">
                    <p>KRISHNA AGGARWAL</p>
                </div>

                {/* Nav Items */}
                <ul className="p-2 list-none text-white flex flex-wrap md:flex-nowrap gap-1.5 xs:gap-3 md:gap-5">
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                        <a href={`#${item}`} key={index}>
                            <li className="relative group p-1 cursor-pointer text-[clamp(10px,1rem,5rem)]">
                                <span className="duration-200 text-center font-semibold">{item}</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
