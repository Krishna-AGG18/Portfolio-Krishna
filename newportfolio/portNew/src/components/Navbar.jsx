function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-16 bg-black/10 text-orange-400 backdrop-blur-lg z-10">
            <div className="w-full h-full flex justify-between items-center px-4 md:px-16">
                <div className="font-bold text-lg animate-pulse">Krishna</div>
                <div className="font-semibold">
                    <ul className="list-none flex gap-4 md:gap-8">
                        <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer">About</li>
                        <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer">Skills</li>
                        <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer">Projects</li>
                        <li className="duration-300 hover:text-orange-500 transition-colors cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;