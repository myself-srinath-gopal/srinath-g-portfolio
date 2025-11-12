import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs'
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <section id='contact'>
            <div className="max-w-7xl mx-auto px-7">
                <div className="pt-16 md:pt-32 pb-20">
                    <div class="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Get In Touch</h2>
                        <p className="text-xl text-orange-500">( 05 )</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        <Link to="mailto:myselfsrinathgopal@gmail.com" className="bg-transparent rounded-lg p-6 flex items-center border border-gray-400 hover:border-orange-600 transition-colors duration-200">
                            <div class="text-orange-600 mr-4">
                                <FaEnvelope className='w-6 h-6' />
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-semibold text-gray-500 mb-1">Email</h3>
                                <p class="text-black">myselfsrinathgopal@gmail.com</p>
                            </div>
                        </Link>
                        <Link to="tel:+919791465400" className="bg-transparent rounded-lg p-6 flex items-center border border-gray-400 hover:border-orange-600 transition-colors duration-200">
                            <div class="text-orange-600 mr-4">
                                <FaPhoneAlt className='w-6 h-6' />
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-semibold text-gray-500 mb-1">Phone</h3>
                                <p class="text-black">+91 9791465400</p>
                            </div>
                        </Link>
                        <Link to="https://github.com/myself-srinath-gopal" className="bg-transparent rounded-lg p-6 flex items-center border border-gray-400 hover:border-orange-600 transition-colors duration-200">
                            <div class="text-orange-600 mr-4">
                                <BsGithub className='w-6 h-6' />
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-semibold text-gray-500 mb-1">GitHub</h3>
                                <p class="text-black">github.com/myself-srinath-gopal</p>
                            </div>
                        </Link>
                        <Link to="www.linkedin.com/in/srinath-g0203" className="bg-transparent rounded-lg p-6 flex items-center border border-gray-400 hover:border-orange-600 transition-colors duration-200">
                            <div class="text-orange-600 mr-4">
                                <BsLinkedin className='w-6 h-6' />
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-semibold text-gray-500 mb-1">LinkedIn</h3>
                                <p class="text-black">linkedin.com/in/srinath-g0203</p>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center">
                        <button className="cta relative overflow-hidden cursor-pointer rounded-full w-fit py-2 sm:py-3 md:py-5 px-3 sm:px-5 md:px-7 border border-orange-600 group">
                            <span className="relative z-10 text-base sm:text-xl sm:font-medium group-hover:text-white transition-colors duration-300">Send an Email</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact