import React from 'react'
import Orb from '../Orb/Orb'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Contact() {

    return (
        <div className="relative w-full min-h-screen px-4 py-16 overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Orb
                    hoverIntensity={2}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-4 text-center">📩 Get in Touch</h2>
                <p className="text-center max-w-xl mx-auto text-gray-300 mb-10">
                    Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
                </p>
                <form className="max-w-xl mx-auto grid gap-4"
                    action="https://formsubmit.co/krishna.2006.work24@gmail.com"
                    method="POST">
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    {/* Disable CAPTCHA */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Redirect after submission */}
                    <input
                        type="hidden"
                        name="_next"
                        value="https://krishnaaggarwal.netlify.app/"
                    />
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 backdrop-blur-md bg-white/10 text-white rounded-lg outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 backdrop-blur-md bg-white/10 text-white rounded-lg outline-none"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="p-3 backdrop-blur-md bg-white/10 text-white rounded-lg outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-bold"
                    >
                        Send Message
                    </button>
                </form>
                <div className="text-center mt-8 text-gray-400">
                    Or just drop an email at <a href="mailto:your@email.com" className="text-blue-400 underline">krishna.2006.work24@gmail.com</a>
                </div>

                <div>
                    <div className=" p-8 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
                        <h2 className="text-2xl font-bold text-center text-white mb-6">Connect with me</h2>

                        <div className="flex justify-center gap-6 text-white">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/krishnawd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-4 bg-white/20 backdrop-blur-lg shadow-md hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
                            >
                                <FaLinkedin className="text-2xl text-blue-700" />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/krishna-agg18"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-4 bg-white/20 backdrop-blur-lg shadow-md hover:shadow-black/50 hover:scale-110 transition-all duration-300"
                            >
                                <FaGithub className="text-2xl text-black" />
                            </a>

                            {/* LeetCode */}
                            <a
                                href="https://leetcode.com/krishna_2909"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-4 bg-white/20 backdrop-blur-lg shadow-md hover:shadow-orange-500/60 hover:scale-110 transition-all duration-300"
                            >
                                <SiLeetcode className="text-2xl text-orange-500" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/krishna_339l"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-4 bg-white/20 backdrop-blur-lg shadow-md hover:shadow-pink-500/60 hover:scale-110 transition-all duration-300"
                            >
                                <FaInstagram className="text-2xl text-pink-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;