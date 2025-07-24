import React from 'react';
import TextType from '../TextType/TextType';

function Header() {
    return (
        <div className='p-2 overflow-x-auto bg-black w-full'>
            <div className='flex flex-row justify-between items-center min-w-[500px] w-full'>
                {/* Logo / Name */}
                <div className='p-2 font-extrabold text-[clamp(1rem, 3vw, 5rem)] text-white whitespace-nowrap'>
                    <TextType
                        text={["< KRISHNA", ""]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter=">"
                    />
                </div>

                {/* Nav Items */}
                <ul className='p-2 list-none text-white flex gap-[20px] whitespace-nowrap'>
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                        <a href={`#${item}`} key={index}>
                            <li className="relative group p-1 cursor-pointer text-[clamp(12px,1rem,5rem)]">
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
