function First() {
    return (
        <div className="px-4 md:px-8 py-12 h-full flex md:flex-row flex-col-reverse justify-center items-center w-[90%] lg:w-[75%] mx-auto text-white">
            <div className="flex-1 md:flex-1/2 p-2">
                <div className="max-md:mt-2">
                    <p className="text-wrap text-xl xsm:text-2xl xs:text-3xl sm:text-4xl font-semibold py-1">Hey, I'm <span className="font-bold text-orange-400">Krishna Aggarwal </span></p>
                    <p className="text-wrap text-lg xsm:text-xl py-1">a frontend developer from India</p>
                    <p className="text-wrap text-sm sm:text-md py-1"> learning backend and exploring AI.</p>
                </div>

                <div>
                    <p className="text-green-400 text-wrap">#️ Trying to cause a positive impact through technology.</p>
                </div>

                <div className="mt-8 flex md:gap-6 max-md:justify-between items-center w-full px-4">
                    <button className="bg-white text-black font-bold px-4 py-1 rounded-lg">Contact Me</button>
                    <button className="bg-white text-black font-bold px-4 py-1 rounded-lg">Resume</button>
                </div>
            </div>
            <div className="flex-1 md:flex-1/2 p-2" >
                <img src="/krishna.png" alt="Krishna's pic" className="aspect-1/1 object-cover object-center rounded-lg" />
            </div>

        </div>
    )
}

export default First;