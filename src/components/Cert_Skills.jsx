import React from 'react'

const Cert_Skills = () => {
    return (
        <section id='skills'>
            <div className="border-t border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-7 relative z-10">
                    <svg className="absolute top-0 left-0 transform -translate-y-1/2" width="260" height="170" viewBox="0 0 259 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M176 85.5C176 132.72 136.601 171 88 171C39.3989 171 0 132.72 0 85.5C0 38.2797 39.3989 0 88 0C136.601 0 176 38.2797 176 85.5ZM32.9967 85.5C32.9967 115.014 57.6225 138.941 88 138.941C118.377 138.941 143.003 115.014 143.003 85.5C143.003 55.9855 118.377 32.0593 88 32.0593C57.6225 32.0593 32.9967 55.9855 32.9967 85.5Z" fill="#FE4300" />
                        <path opacity="0.1" d="M259 85.5C259 131.063 221.84 168 176 168C130.16 168 93 131.063 93 85.5C93 39.9365 130.16 3 176 3C221.84 3 259 39.9365 259 85.5ZM124.122 85.5C124.122 113.979 147.348 137.066 176 137.066C204.652 137.066 227.878 113.979 227.878 85.5C227.878 57.0211 204.652 33.9344 176 33.9344C147.348 33.9344 124.122 57.0211 124.122 85.5Z" fill="#FE4300" />
                    </svg>
                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Certifications &amp; Skills</h2>
                            <p className="text-xl text-orange-600">(03)</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
                            <div className="w-full lg:max-w-md flex flex-col gap-4 xl:gap-8">
                                <div className="flex items-start gap-6">
                                    <div className="mt-2.5 w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-black">
                                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h5 className='font-normal'>Modern JS Botcamp Course - <span className="text-orange-600">UDEMY (2023)</span></h5>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, commodi. Dolorem sed modi in minima deserunt voluptatibus</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div class="mt-2.5 w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-black">
                                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h5 className='font-normal'>Advanced CSS and Saas - <span className="text-orange-600">UDEMY (2024)</span></h5>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, commodi. Dolorem sed modi in minima deserunt voluptatibus</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="mt-2.5 w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-black">
                                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h5 className='font-normal'>Modern React with Redux - <span className="text-orange-600">UDEMY (2023)</span></h5>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, commodi. Dolorem sed modi in minima deserunt voluptatibus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 xl:gap-7 w-full">
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/react.svg" alt="" width={70} height={70} />
                                        <p>React</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/js.svg" alt="" width={70} height={70} />
                                        <p>Javascript</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/redux.svg" alt="" width={70} height={70} />
                                        <p>Redux</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/node.svg" alt="" width={70} height={70} />
                                        <p>Node JS</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/express.svg" alt="" width={70} height={70} />
                                        <p>Express JS</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:p-6 border border-gray-200 rounded-lg flex flex-col items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <img src="images/vitest.svg" alt="" width={70} height={70} />
                                        <p>Vitest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cert_Skills