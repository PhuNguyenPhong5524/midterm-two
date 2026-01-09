

const Header = () => {
    return (
        <header
            className="
                max-w-[1180px] mx-auto py-[20px] flex justify-between items-center 
            "    
        >
            {/* Logo */}
                <div>
                    <a 
                        href="#" 
                        className="
                            text-[40px] font-bold
                        "
                    >
                        <div className="flex">
                            <img src="/images/logo-midterm.png" className="w-[50px] h-[50px]" alt="" />
                            <span className="text-[#868686]">nonime</span>
                        </div>
                    </a>
                </div>
            {/* Nav */}
                <div className="flex justify-center">
                    <nav className="w-[300px]">
                        <ul
                            className="
                                flex justify-between items-center 
                            "
                        >
                            <li
                                className="
                                    cursor-pointer transition-all ease-in-out 
                                    duration-300 hover:underline hover:scale-105
                                "
                            >
                                <a 
                                    href="#" 
                                    className="
                                        text-[18px] text-[#868686] font-normal
                                    "
                                >
                                    Home
                                </a>
                            </li>
                            <li
                                className="
                                    cursor-pointer transition-all ease-in-out 
                                    duration-300 hover:underline hover:scale-105
                                "
                            >
                                <a 
                                    href="#" 
                                    className="
                                        text-[18px] text-[#868686] font-normal
                                    "
                                >
                                    List anime
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            {/* Search */}
                <div>
                    <input 
                        type="text" 
                        placeholder="Search anime or movie..."
                        className="
                            w-[300px] h-[48px] rounded-full px-[20px] py-[10px] bg-[#374151] outline-none
                            placeholder:text-[#868686]
                        "
                    />
                </div>
        </header>
    )
}

export default Header;