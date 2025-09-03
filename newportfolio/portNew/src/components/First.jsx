function First() {
    return (
        <div className="px-4 md:px-8 py-12 h-full flex md:flex-row flex-col-reverse justify-center items-center w-[95%] lg:w-[75%] mx-auto text-white">
            <div className="flex-1 md:flex-1/2 p-2">
                <div className="max-md:mt-2">
                    <p className="text-wrap text-[16px] xsm:text-xl xs:text-3xl sm:text-4xl font-semibold py-1">Hey, I'm <span className="font-bold text-orange-400">Krishna Aggarwal </span></p>
                    <p className="text-wrap text-[14px] xs:text-xl py-1">a frontend developer from India, learning backend and exploring AI.</p>
                </div>

                <div>
                    <p className="text-green-400 text-wrap max-xsm:text-[13px]">#️ Trying to cause a positive impact through technology.</p>
                </div>
                <div>
                    <p className="text-gray-400 text-wrap max-xsm:text-[13px]">I am expanding my skills into AI, Web3, and backend development to create innovative and scalable solutions. Constantly learning, my goal is to deliver exceptional user experiences that push technological boundaries.</p>
                </div>

                <div className="mt-8 flex md:gap-6 max-md:justify-between items-center w-full">
                    <button className="cursor-pointer inline-block px-6 py-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-md text-sm font-semibold">Contact Me</button>
                    <button className="cursor-pointer inline-block px-6 py-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-md text-sm font-semibold">Resume</button>
                </div>
            </div>
            <div className="flex-1 md:flex-1/2 p-2" >
                <img src="/krishna.png" alt="Krishna's pic" className="aspect-1/1 object-cover object-center rounded-lg" />
            </div>

        </div>
    )
}

export default First;