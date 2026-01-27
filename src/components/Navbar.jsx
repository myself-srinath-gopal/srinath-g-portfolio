import React from 'react'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {

    const toggleSidebar = () => {
        document.querySelector('.sidebar').classList.toggle('active')
    }
    return (
        <>
            <div className='sidebar fixed top-0 left-0 w-13 sm:w-16 h-full flex flex-col items-center justify-around bg-orange-600/95 z-9999'>
                <button onClick={toggleSidebar} className="absolute top-4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl text-white cursor-pointer">
                    <RiCloseFill />
                </button>
                <nav className='w-full h-fit'>
                    <ul className='flex flex-col items-center gap-18 sm:gap-20 xl:gap-22'>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='hero' smooth={true} duration={600} className='cursor-pointer'>
                                Home
                            </ScrollLink>
                        </li>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='about' smooth={true} duration={600} className='cursor-pointer'>
                                About
                            </ScrollLink>
                        </li>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='education' smooth={true} duration={600} className='cursor-pointer'>
                                Education
                            </ScrollLink>
                        </li>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='skills' smooth={true} duration={600} className='cursor-pointer'>
                                Skills
                            </ScrollLink>
                        </li>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='projects' smooth={true} duration={600} className='cursor-pointer'>
                                Projects
                            </ScrollLink>
                        </li>
                        <li className='transform -rotate-90 text-white text-lg xl:text-xl'>
                            <ScrollLink to='contact' smooth={true} duration={600} className='cursor-pointer'>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <header className="w-full z-99 fixed top-0 left-0 bg-white/95 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-7">
                    <div className="py-4">
                        <div className="flex items-center gap-4 sm:gap-8">
                            <button onClick={toggleSidebar} className="w-fit text-2xl sm:text-4xl text-orange-600 cursor-pointer">
                                <RiMenu4Fill />
                            </button>
                            <ScrollLink to='hero' smooth={true} duration={600} className="bg-orange-600 p-4 w-10 h-10 text-xl sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-semibold sm:text-4xl cursor-pointer">S</ScrollLink>
                            <a href="/Srinath_Resume.pdf" download className="cta relative overflow-hidden cursor-pointer rounded-full w-fit py-2 sm:py-3 md:py-5 px-3 sm:px-5 md:px-7 border border-orange-600 group">
                                <span className="relative z-10 text-base sm:text-xl sm:font-medium group-hover:text-white transition-colors duration-300">Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar