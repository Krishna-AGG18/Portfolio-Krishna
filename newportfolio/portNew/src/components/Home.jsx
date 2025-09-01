import React from "react";
import Particles from "./Particles/Particles";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="w-full min-h-screen">
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
      <div className="absolute top-0 text-white backdrop-blur-[1px] w-full h-full">
        <Navbar />
        <h1 className="mt-16 text-center text-2xl z-0">helo</h1>
      </div>
    </div>
  );
}

export default Home;