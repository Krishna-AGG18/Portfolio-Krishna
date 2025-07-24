import React from 'react'
import LightRays from '../LightRays/LightRays'

function About() {
    return (
        <div className='relative w-full h-full'>
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="w-[100dvw]"
            />

            <div className="absolute inset-0 overflow-y-auto custom-scrollbar h-screen px-4 py-10">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
                    {/* About Text */}
                    <div className='space-y-6'>
                        <h2 className="text-2xl md:text-3xl max-md:text-center font-bold text-gray-100 border-b border-gray-700 pb-2">
                            ✨ About Me
                        </h2>
                        <p className="text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed mb-4">
                            👋 Hey! I’m <span className="text-indigo-400">Krishna</span>
                        </p>

                        <p className="text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed mb-4">
                            A passionate <span className="text-white font-medium">frontend developer</span> with a strong foundation in building modern, responsive, and user-centric web applications using <span className="text-white font-medium">React</span> and other cutting-edge technologies.
                        </p>

                        <p className="text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed mb-4">
                            I specialize in creating sleek, accessible, and intuitive interfaces that focus on performance and design. Beyond the frontend, I’m currently learning <span className="text-white font-medium">backend development using Java</span> and exploring the exciting domains of <span className="text-white font-medium">Artificial Intelligence</span> and <span className="text-white font-medium">Web3</span> to build full-stack expertise.
                        </p>

                        <p className="text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed mb-4">
                            My journey into tech has been self-driven, fueled by curiosity, creativity, and the joy of turning ideas into functional digital products. I love solving real-world problems through code—be it crafting dynamic UI components, crushing bugs, or learning new stacks.
                        </p>

                        <p className="text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
                            Outside of code, you’ll find me exploring new tech trends, building side projects, and occasionally contributing to open-source communities.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/krishna_resume.pdf" // <- Change this to your actual file path or Google Drive link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-md text-sm font-semibold"
                            >
                                📄 View Resume
                            </a>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl max-md:text-center md:text-3xl font-bold text-gray-100 border-b border-gray-700 pb-2">
                            🎓 Education
                        </h2>

                        <div>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                                Bachelor of Computer Applications (BCA - Hons.)
                            </h3>
                            <p className="text-sm text-gray-400">
                                Maharaja Surajmal Institute, GGSIP University, Delhi
                            </p>
                            <p className="text-sm text-gray-500 italic">Currently in 2nd Year (2024 – 2028)</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-200">Senior Secondary (Class 12th)</h3>
                            <p className="text-sm text-gray-400">Kendriya Vidyalaya No.1, Delhi Cantt - 10</p>
                            <p className="text-sm text-gray-500 italic">Science Stream (PCM)</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-200">Secondary (Class 10th)</h3>
                            <p className="text-sm text-gray-400">Kendriya Vidyalaya No.1, Delhi Cantt - 10</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-200">Self-Taught Frontend Developer</h3>
                            <p className="text-sm text-gray-400">
                                Gained hands-on experience in <span className="text-white font-medium">React</span>,{' '}
                                <span className="text-white font-medium">JavaScript</span>, and{' '}
                                <span className="text-white font-medium">UI/UX Design</span> by working on real-world projects.
                                Regularly learn through open-source documentation, YouTube tutorials, and developer communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
