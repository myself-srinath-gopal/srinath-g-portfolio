import React from 'react'

const Projects = () => {
    return (
        <section id='projects'>
            <div className="bg-[#f0f0f0]">
                <div className="max-w-7xl mx-auto px-7">
                    <div className="py-16 xl:py-32">
                        <div class="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Projects</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-y-12">
                            <div className="flex flex-col gap-3 xl:gap-6 cursor-pointer">
                                <div>
                                    <img src="images/proj-1.webp" alt="" className="rounded-lg w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-0 xl:gap-2">
                                    <div className="flex items-center justify-between">
                                        <h5 className='font-normal'>E-Commerce Website</h5>
                                        <img src="images/arrow-right.svg" alt="" width={30} height={30} />
                                    </div>
                                    <p className="text-gray-500">Client: <span className="text-orange-600">Foodmart</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 xl:gap-6 cursor-pointer">
                                <div>
                                    <img src="images/proj-2.webp" alt="" className="rounded-lg w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-0 xl:gap-2">
                                    <div className="flex items-center justify-between">
                                        <h5 className='font-normal'>Admin Dashboard</h5>
                                        <img src="images/arrow-right.svg" alt="" width={30} height={30} />
                                    </div>
                                    <p className="text-gray-500">Client: <span className="text-orange-600">Berry</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 xl:gap-6 cursor-pointer">
                                <div>
                                    <img src="images/proj-3.png" alt="" className="rounded-lg w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-0 xl:gap-2">
                                    <div className="flex items-center justify-between">
                                        <h5 className='font-normal'>Blogging Website</h5>
                                        <img src="images/arrow-right.svg" alt="" width={30} height={30} />
                                    </div>
                                    <p className="text-gray-500">Client: <span className="text-orange-600">Lifestyle Mag</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects