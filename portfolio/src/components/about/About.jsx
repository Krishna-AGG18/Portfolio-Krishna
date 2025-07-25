import React from 'react';
import LightRays from '../LightRays/LightRays';

function About() {
  return (
    <div className="relative w-full min-h-screen px-4 py-16 overflow-hidden bg-black text-white">
      {/* Background LightRays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
          className="w-[100dvw] h-full"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Text */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold border-b border-gray-700 pb-2 max-md:text-center">
            ✨ About Me
          </h2>
          <p className="max-md:aos text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
            👋 Hey! I’m <span className="text-indigo-400">Krishna</span>
          </p>
          <p className="max-md:aos text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
            A passionate <span className="text-white font-medium">frontend developer</span> with a strong foundation in building modern, responsive, and user-centric web applications using <span className="text-white font-medium">React</span> and other cutting-edge technologies.
          </p>
          <p className="max-md:aos text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
            I specialize in creating sleek, accessible, and intuitive interfaces that focus on performance and design. Currently learning <span className="text-white font-medium">backend development using Java</span> and exploring <span className="text-white font-medium">AI</span> and <span className="text-white font-medium">Web3</span>.
          </p>
          <p className="max-md:aos text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
            My journey into tech has been self-driven, fueled by curiosity and the joy of turning ideas into digital products. I love solving real-world problems through code.
          </p>
          <p className="max-md:aos text-[clamp(12px,1.1vw,18px)] text-gray-400 leading-relaxed">
            Outside of code, you’ll find me exploring tech trends, building side projects, and contributing to open-source communities.
          </p>
          <div className="mt-6">
            <a
              href="/krishna_resume.pdf"
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
          <h2 className="text-2xl md:text-3xl font-bold border-b border-gray-700 pb-2 max-md:text-center">
            🎓 Education
          </h2>

          <div>
            <h3 className="max-md:aos text-lg md:text-xl font-semibold text-gray-200">
              Bachelor of Computer Applications (BCA - Hons.)
            </h3>
            <p className="max-md:aos text-sm text-gray-400">
              Maharaja Surajmal Institute, GGSIP University, Delhi
            </p>
            <p className="max-md:aos text-sm text-gray-500 italic">
              Currently in 2nd Year (2024 – 2028)
            </p>
          </div>

          <div>
            <h3 className="max-md:aos text-lg font-semibold text-gray-200">Senior Secondary (Class 12th)</h3>
            <p className="max-md:aos text-sm text-gray-400">Kendriya Vidyalaya No.1, Delhi Cantt - 10</p>
            <p className="max-md:aos text-sm text-gray-500 italic">Science Stream (PCM)</p>
          </div>

          <div>
            <h3 className="max-md:aos text-lg font-semibold text-gray-200">Secondary (Class 10th)</h3>
            <p className="max-md:aos text-sm text-gray-400">Kendriya Vidyalaya No.1, Delhi Cantt - 10</p>
          </div>

          <div>
            <h3 className="max-md:aos text-lg font-semibold text-gray-200">Self-Taught Frontend Developer</h3>
            <p className="max-md:aos text-sm text-gray-400">
              Gained hands-on experience in <span className="text-white font-medium">React</span>, <span className="text-white font-medium">JavaScript</span>, and <span className="text-white font-medium">UI/UX Design</span> through real-world projects. I continuously learn via open-source docs, YouTube, and dev communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
