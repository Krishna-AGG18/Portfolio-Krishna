import React from 'react';
import TextType from '../TextType/TextType'

function Header() {

    return (
        <>
            <div className='p-2 bg-black flex justify-between items-center'>
                <div className='bg-black p-2 font-extrabold text-4xl'>
                    <TextType
                        text={["< KRISHNA", ""]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter=">"
                    />
                </div>
                <div>
                    <ul className='p-2 list-none text-white flex gap-[20px] justify-center items-center'>
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                            <li
                                key={index}
                                className='relative group p-1 cursor-pointer'
                            >
                                <span className='duration-200 text-center font-semibold'>{item}</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header;