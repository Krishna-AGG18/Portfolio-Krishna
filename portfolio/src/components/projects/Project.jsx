import React from 'react'
import Beams from '../Beams/Beams'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
function Project() {
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

                    <SpotlightCard className="custom-spotlight-card w-fit" spotlightColor="rgba(255, 255, 255, 0.2)">
                        Blogg App
                    </SpotlightCard>
                </div>
            </div>
        </div>
    )
}

export default Project
