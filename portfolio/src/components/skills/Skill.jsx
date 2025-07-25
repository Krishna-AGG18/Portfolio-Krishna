import React from 'react'
import Galaxy from '../Galaxy/Galaxy'
function Skill() {
    return (
        <div className="relative w-full min-h-screen px-4 py-16 overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={1}
                    glowIntensity={0.3}
                    saturation={0}
                    hueShift={140}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 border-b border-gray-700 pb-2 inline-block">
                    🧠 Technologies I Work With
                </h2>
                <div className='flex flex-wrap p-4 '>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Skill
