import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { Mail, PhoneOutgoing } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <section id='hero' className="relative overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
                <div className="max-w-7xl mx-auto px-7">
                    <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                        <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                            <div>
                                <div className="flex items-center gap-4 md:gap-8">
                                    <h1>I'm Srinath</h1>
                                    <div className="wave">
                                        <img src="images/wave-icon.svg" alt="" />
                                    </div>
                                </div>
                                <h1>React JS Developer</h1>
                            </div>
                            <p className="max-w-md xl:max-w-xl text-gray-500 text-base md:text-lg">
                                React.js Developer with <strong className="text-orange-600">2 years</strong> of professional experience building scalable, responsive web applications using React.js, Redux, JavaScript (ES6+), HTML, CSS, and REST APIs.
                            </p>
                        </div>
                        <img lazy={true} src="images/hero-img.jpg" alt="" className="block lg:hidden" width={685} height={650} />
                    </div>
                </div>
                <div className="absolute z-999 right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:w-187.5 2xl:h-171.5">
                    <img lazy={true} className="absolute top-0 right-0 z-1" width={685} height={650} src="images/hero-img.jpg" alt="" />
                </div>
            </section>
            <section>
                <div className="border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-7">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-5 lg:gap-11">
                                <Link to="mailto:myselfsrinathgopal@gmail.com" className="flex items-center gap-2 lg:gap-4 text-sm md:text-base">
                                    <Mail className='w-5 sm:w-8 text-orange-600' />
                                    <h6 className="hover:text-orange-600">myselfsrinathgopal@gmail.com</h6>
                                </Link>
                                <Link to="tel:+919791465400" className="flex items-center gap-2 lg:gap-4 text-sm md:text-base">
                                    <PhoneOutgoing className='w-5 sm:w-8 text-orange-600' />
                                    <h6 className="hover:text-orange-600">+91 9791465400</h6>
                                </Link>
                                <Link to={"https://github.com/myself-srinath-gopal"} className="flex items-center gap-2 lg:gap-4 text-sm md:text-base">
                                    <FiGithub className='w-5 h-6 sm:w-8 text-orange-600' />
                                    <h6 className="hover:text-orange-600">@myself-srinath-gopal</h6>
                                </Link>
                            </div>
                            <div className="flex items-center justify-start md:justify-end gap-4 md:gap-2.5">
                                <Link to="https://www.linkedin.com/in/srinath-g0203">
                                    <IoLogoLinkedin className='w-6 h-6 sm:w-8' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero