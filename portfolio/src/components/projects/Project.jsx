import React from 'react'
import Beams from '../Beams/Beams'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
function Project() {
    const projects = [
        {
            title: 'Blog App',
            description: 'A full-featured blog app with user auth, rich text editing, and responsive UI.',
            stack: ['React', 'Firebase', 'Tailwind'],
            live: 'https://blogg-app.vercel.app',
            github: 'https://github.com/yourname/blogg-app',
        },
        {
            title: 'Portfolio',
            description: 'My personal portfolio showcasing projects and skills with animation and effects.',
            stack: ['React', 'Tailwind CSS', 'Framer Motion'],
            live: 'https://krishna-portfolio.vercel.app',
            github: 'https://github.com/yourname/portfolio',
        },
        // Add more projects similarly
    ];

    return (
        <div className='w-full h-full '>
            <div className='w-full h-full relative'>
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

                <div className="absolute inset-0 overflow-y-auto custom-scrollbar px-4 py-10">
                    <h2 className="text-[clamp(20px,5vw,40px)] text-gray-100 font-bold border-b border-gray-700 pb-2 tracking-wide inline-block">
                        🛠️ <span className="text-white">Things I’ve Built</span>
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:grid-cols-4">
                        {projects.map((project, index) => (
                            <SpotlightCard
                                key={index}
                                className="custom-spotlight-card cursor-pointer p-4 bg-black border border-gray-800 rounded-xl text-white hover:shadow-lg transition-all duration-300"
                                spotlightColor="rgba(255, 255, 255, 0.2)"
                            >
                                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-400 mb-3">{project.description}</p>

                                <div className="flex flex-wrap gap-1 text-xs text-gray-300 mb-3">
                                    {project.stack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-800 px-2 py-0.5 rounded-full"
                                        >
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
                                            className="text-xs bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white"
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
    )
}

export default Project
