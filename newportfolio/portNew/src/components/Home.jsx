import React from "react";
import Particles from "./Particles/Particles";
import Navbar from "./Navbar";
import First from "./First";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="w-full min-h-screen absolute top-0 z-0">
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
        <div className="z-10 w-full h-full">
          <First />
        </div>
        <div className="z-10 h-full">
          {/* <First /> */}
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;