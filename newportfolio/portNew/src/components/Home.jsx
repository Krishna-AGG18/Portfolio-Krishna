import React from "react";
import Particles from "./Particles/Particles";
import Navbar from "./Navbar";
import First from "./First";
import About from "./About"
import Project from "./Project";
import Skill from "./Skill";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="w-full absolute top-0 bottom-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative top-0 text-white backdrop-blur-[1px] w-full h-full">
        <Navbar />
        <div className="z-10 w-full h-fit xs:min-h-screen">
          <First />
        </div>
        <div className="z-10  h-fit xs:min-h-screen flex items-center" id="about">
          <About />
        </div>

        <div className="w-full flex items-center h-fit xs:min-h-screen md:mt-4 z-10" id="projects">
            <Project />
        </div>

        <div className="w-full h-fit xs:min-h-screen pt-20" id="skills">
          <h1 className="border-b mx-4 border-b-gray-500 text-lg xs:text-4xl font-bold max-sm:text-center mb-4 ">✨My Tech Stack...</h1>
          <Skill />
        </div>

        <div className="w-full h-fit md:min-h-screen" id="contact">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Home;