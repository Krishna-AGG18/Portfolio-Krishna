import React from 'react'
import FuzzyText from '../FuzzyText/FuzzyText'
import ShinyText from '../ShinyText/ShinyText'
import Particles from '../Particles/Particles'
import TiltedCard from '../TiltedCard/TiltedCard'
function Home() {
  return (
    <div className="relative w-full min-h-screen max-md:py-8 py-4 text-white">
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
      <div className="relative z-10 px-4 max-md:py-10 py-2 flex justify-center items-center max-md:flex-col-reverse max-md:justify-evenly gap-8 md:gap-16 min-h-screen">
        <div className="flex flex-col px-2 text-white max-w-xl backdrop-blur-sm max-xs:py-4">
          <FuzzyText baseIntensity={0.01} hoverIntensity={0.5} enableHover={true}>
            Hey there! I’m Krishna
          </FuzzyText>

          <p className="mt-2 px-4 py-2 font-semibold">
            Frontend Developer | React Enthusiast | Exploring Java, AI & Web3
          </p>

          <ShinyText speed={4} className="mt-1 max-md:aos text-sm md:text-base px-4 pt-2 pb-5">
            I craft responsive, user-friendly web applications with React and modern frontend tools, solving real-world challenges through clean UI/UX and efficient code. My portfolio spans AI-powered chatbots, voice-enabled applications, full-stack blogging platforms, and interactive browser games. <br /> <br />

            Currently, I’m deepening my expertise in backend development with Java Spring Boot, exploring AI technologies, and experimenting with Web3 to build innovative, scalable digital solutions. Driven by curiosity and a passion for learning, I aim to create projects that are both functional and impactful. <br /> <br />

            Notable Projects: ThoughtHaven (Full-Stack Blog), ASKIO (AI Chatbot), Echosait (TTS App), Redux To-Do App, Spendence (Expense Tracker), ScribeSpace NoteVault.
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
