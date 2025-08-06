import React from 'react'
import FuzzyText from '../FuzzyText/FuzzyText'
import ShinyText from '../ShinyText/ShinyText'
import Particles from '../Particles/Particles'
import TiltedCard from '../TiltedCard/TiltedCard'
function Home() {
  return (
    <div className="relative w-full min-h-screen py-16 text-white">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
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

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 px-4 py-10 flex justify-center items-center max-md:flex-col-reverse max-md:justify-evenly gap-8 overflow-y-auto min-h-screen">
        <div className="flex flex-col px-2 text-white max-w-xl backdrop-blur-sm">
          <FuzzyText baseIntensity={0.01} hoverIntensity={0.5} enableHover={true}>
            Hey there! I’m Krishna
          </FuzzyText>

          <p className="mt-2 px-4 py-2 font-semibold">
            Frontend Developer | React Enthusiast | Exploring Java, AI & Web3
          </p>

          <ShinyText speed={4} className="mt-1 max-md:aos text-sm md:text-base px-4 py-2">
            I craft responsive, user-friendly web interfaces with React and modern frontend tools.
            Currently leveling up my skills in backend development with Java and diving into the worlds of Artificial Intelligence and Web3.
          </ShinyText>

          <ShinyText speed={4} className="mt-1 max-md:aos text-sm md:text-base px-4 py-2">
            Let’s build something amazing together.
          </ShinyText>
        </div>

        <TiltedCard
  imageSrc="/krishna.jpg"
  altText="Krishna Aggarwal"
  captionText="Krishna Aggarwal"
  containerHeight="400px"
  containerWidth="300px"
  imageHeight="400px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Krishna Aggarwal
    </p>
  }
/>
      </div>
    </div>
  )
}

export default Home
