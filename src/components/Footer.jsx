import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    return (
        <footer class="py-6 sm:py-14">
            <div class="max-w-7xl mx-auto px-7">
                <div class="flex flex-col gap-1.5 items-center sm:items-start">
                    <div class="relative flex items-center w-full">
                        <div class="grow h-px bg-gray-600"></div>
                        <div class="mx-4">
                            <ScrollLink to='hero' smooth={true} duration={600} className="bg-orange-600 p-4 w-10 h-10 text-xl sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-semibold sm:text-4xl cursor-pointer">S</ScrollLink>
                        </div>
                        <div class="grow h-px bg-gray-600"></div>
                    </div>
                    <p class="text-gray-500">
                        &copy; 2025 <span className="text-orange-600">Srinath.</span> All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer