import React from 'react'
import Particles from '../Particles/Particles'
import SpotlightCard from '../SpotlightCard/SpotlightCard'

const skills = [
    { name: 'React JS', link: 'https://i.pinimg.com/736x/8b/5c/ea/8b5cea6a92fb63b2f73962e358e91cd4.jpg' },
    { name: 'JavaScript', link: 'https://i.pinimg.com/736x/f8/5b/8f/f85b8fbae36a23c52a33504d9f8fc5ab.jpg' },
    { name: 'Tailwind CSS', link: 'https://i.pinimg.com/736x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg' },
    { name: 'BootStrap', link: 'https://i.pinimg.com/1200x/e7/98/95/e798952cb6b75707a2a955eb9687efc9.jpg' },
    { name: 'CSS', link: 'https://i.pinimg.com/1200x/05/0d/23/050d237bb2c8c6b4bf58e67a6f7842b1.jpg' },
    { name: 'HTML', link: 'https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg' },
    { name: 'Python', link: 'https://i.pinimg.com/736x/e9/97/b2/e997b2d4d5c2d794109d1ca3ffc36257.jpg' },
    { name: 'Java', link: 'https://i.pinimg.com/736x/fd/48/58/fd48583ec31127e991546475ecece550.jpg' },
    { name: 'C', link: 'https://i.pinimg.com/736x/71/5b/59/715b59c8c7545d9dafb1a04111edde40.jpg' },
    { name: 'My SQL', link: 'https://i.pinimg.com/736x/30/a7/31/30a731488758fdc1536f185612646c0d.jpg' },
    { name: 'Redux', link: 'https://i.pinimg.com/1200x/a3/02/10/a302105c53a9506950a5cbd2959ad553.jpg' },
    { name: 'Git', link: 'https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg' },
    { name: 'Node JS', link: 'https://i.pinimg.com/736x/a3/6d/01/a36d0141a8c1a3f8532b825bfe6aff57.jpg' },
    { name: 'NPM', link: 'https://i.pinimg.com/736x/21/4c/1a/214c1a4cc0c2197d4c99470a79446e77.jpg' },
    { name: 'Vite', link: 'https://i.pinimg.com/1200x/cb/4b/12/cb4b1262a8f1621628d0c229d672ba56.jpg' },
    { name: 'Figma', link: 'https://i.pinimg.com/736x/81/69/58/816958f25ee044182464ee5b3ec64c7c.jpg' },
    { name: 'Canva', link: 'https://i.pinimg.com/736x/fe/a0/9d/fea09d47b90e285ea188398003ba8f6a.jpg' },
    { name: 'Power BI', link: 'https://i.pinimg.com/736x/7a/f2/1e/7af21eaf89a449831a1e12d640b54fae.jpg' },
    { name: 'MS Office', link: 'https://i.pinimg.com/1200x/94/36/98/9436986c22be9cbb2b5a5ddfbc972d83.jpg' },
]

function Skill() {
    return (
        <div className="relative w-full min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-br from-black via-[#2a0a0a] to-[#7b1e1e]  text-white">
           <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={300}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={true}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-xl md:text-4xl font-bold text-center mb-12 border-b border-white pb-2 inline-block">
                    🧠 Technologies I Work With
                </h2>
               <div className="h-auto md:h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-2 overflow-y-auto md:grid-cols-4  px-2 py-8 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
                    {skills.map((skill, index) => (
                        <SpotlightCard
                            className="custom-spotlight-card cursor-pointer flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm border border-gray-800 rounded-xl text-white hover:shadow-lg transition-all duration-300"
                            spotlightColor="rgba(255, 255, 255, 0.3)"
                            key={index}
                        >
                            <img
                                src={skill.link}
                                alt={skill.name}
                                className="w-20 h-20 object-contain rounded-xl mb-3"
                            />
                            <p className="font-bold text-sm md:text-base text-center">{skill.name}</p>
                        </SpotlightCard>
                    ))}
                </div>
               </div>
            </div>
        </div>
    )
}

export default Skill
