import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import FuzzyText from '../FuzzyText/FuzzyText'
import ShinyText from '../ShinyText/ShinyText'
import Particles from '../Particles/Particles'
function Home() {
    return (
        <>
            <div style={{ width: '100dvw',height:'600px' , position: 'relative' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={true}
                />
            </div>
            <div className='flex z-10 absolute inset-0 overflow-y-auto  px-4 py-10 justify-center max-md:justify-evenly max-md:flex-col-reverse items-center h-[100dvh] gap-[32px] w-[100dvw] '>
                <div className='flex flex-col px-2 '>
                    {/* <h2 className=" font-bold"> */}
                    <FuzzyText
                        baseIntensity={0.01}
                        hoverIntensity={0.5}
                        enableHover={false}
                    >
                        Hey there! I’m Krishna
                    </FuzzyText>
                    {/* </h2> */}
                    <p className="mt-2 text-white px-4 py-2 font-semibold">Frontend Developer | React Enthusiast | Exploring Java, AI & Web3</p>
                    {/* <p className='text-wrap text-white'>
                        I craft responsive, user-friendly web interfaces with React and modern frontend tools. Currently leveling up my skills in backend development with Java and diving into the worlds of Artificial Intelligence and Web3.
                        Let’s build something amazing together.
                    </p> */}
                    <ShinyText speed={4} className="mt-1 max-w-md text-sm md:text-base px-4 py-2">
                        I craft responsive, user-friendly web interfaces with React and modern frontend tools.

                        Currently leveling up my skills in backend development with Java and diving into the worlds of Artificial Intelligence and Web3.
                    </ShinyText>
                    <ShinyText speed={4} className="mt-1 max-w-md text-sm md:text-base px-4 py-2">
                        Let’s build something amazing together.
                    </ShinyText>
                </div>
                <ProfileCard
                    name="Krishna"
                    title="Software Engineer"
                    handle="Krishna."
                    status="Online"
                    contactText="Contact"
                    avatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                    showUserInfo={true}
                    miniAvatarUrl="https://i.pinimg.com/736x/3c/6c/62/3c6c6282e676e6565600cc004c7a1b90.jpg"
                    enableTilt={true}
                    grainUrl="https://i.pinimg.com/736x/ba/16/3b/ba163b33fa05dd0f72cbd1aae89a0892.jpg"
                    enableMobileTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                    className='max-h-[700px]'
                />
            </div>
        </>
    )
}

export default Home
