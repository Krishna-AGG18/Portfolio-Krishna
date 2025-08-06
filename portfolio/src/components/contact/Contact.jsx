import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Particles from '../Particles/Particles'

function Contact() {
  return (
    <div className="relative w-full min-h-screen px-4 py-16 bg-gradient-to-br from-black via-[#1a103d] to-[#3c1a5b] text-white overflow-hidden">
      {/* Background Orb */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Main Content */}
      <div className=" min-h-screen py-16 px-4 text-white">
        <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-[4px]">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">📩 Get in Touch</h2>
          <p className="text-center max-w-xl mx-auto text-gray-400 mb-10">
            Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
          </p>

          {/* Contact Form */}
          <form
            className="max-w-xl mx-auto grid gap-4"
            action="https://formsubmit.co/krishna.2006.work24@gmail.com"
            method="POST"
          >
            {/* Anti-bot */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://krishnaaggarwal.netlify.app/thank-you" />

            {/* Fields */}
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-3 bg-zinc-800/60 text-white rounded-lg border border-zinc-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-zinc-600"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-3 bg-zinc-800/60 text-white rounded-lg border border-zinc-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-zinc-600"
            />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 bg-zinc-800/60 text-white rounded-lg border border-zinc-700 outline-none placeholder-gray-400 focus:ring-2 focus:ring-zinc-600"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Email line */}
          <p className="text-center mt-8 text-gray-400">
            Or just drop an email at{' '}
            <a href="mailto:krishna.2006.work24@gmail.com" className="text-blue-400 underline">
              krishna.2006.work24@gmail.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="mt-12 p-8 rounded-2xl max-w-md mx-auto bg-zinc-800/60 backdrop-blur-md shadow-xl border border-zinc-700">
            <h3 className="text-xl font-semibold text-center text-white mb-6">Connect with me</h3>
            <div className="flex justify-center gap-6">
              <SocialIcon
                href="https://www.linkedin.com/in/krishnawd"
                icon={<FaLinkedin className="text-blue-600" />}
                shadow="shadow-blue-500/50"
              />
              <SocialIcon
                href="https://github.com/krishna-agg18"
                icon={<FaGithub className="text-white" />}  // Use white instead of black to blend
                shadow="shadow-gray-500/50"
              />
              <SocialIcon
                href="https://leetcode.com/krishna_2909"
                icon={<SiLeetcode className="text-orange-500" />}
                shadow="shadow-orange-500/60"
              />
              <SocialIcon
                href="https://www.instagram.com/krishna_339l"
                icon={<FaInstagram className="text-pink-500" />}
                shadow="shadow-pink-500/60"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// Reusable social icon component
function SocialIcon({ href, icon, shadow }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full p-4 bg-white/20 backdrop-blur-lg shadow-md hover:${shadow} hover:scale-110 transition-all duration-300`}
    >
      <div className="text-2xl">{icon}</div>
    </a>
  )
}

export default Contact
