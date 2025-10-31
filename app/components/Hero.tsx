'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Hero() {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className='relative'>
            {/* Hero Image Section */}
            <div className="relative w-full h-[600px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promotional-Carousel-Model-Y-Desktop-RHD.png"
                    alt="Tesla Model Y"
                    fill
                    className="object-cover object-center sm:object-bottom"
                    priority
                    style={{
                        objectPosition: 'center'
                    }}
                />
            </div>

            {/* Hero Content Overlay */}
            <div className='absolute top-36 flex flex-col justify-center right-0 left-0 mx-auto space-y-4 sm:space-y-5 md:space-y-6 px-4'>
                {/* Title Card */}
                <div className='flex flex-col justify-center right-0 left-0 mx-auto px-6 sm:px-8 md:px-10 overflow-hidden'>
                    <h1 className="w-full text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-poppins font-bold text-white drop-shadow-2xl">
                        Experience the Future of Driving
                    </h1>
                    <p className="w-full text-center text-sm sm:text-lg mt-2 sm:mt-3 md:mt-4 text-white drop-shadow-2xl px-2">
                        Unmatched Performance, Cutting-Edge Technology, and Sustainable Energy Solutions.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className='grid grid-cols-2 max-w-[350px] md:max-w-[400px] right-0 left-0 mx-auto gap-3 sm:gap-4 font-montserrat text-sm sm:text-lg '>
                    {/* Explore Models Button */}
                    <button
                        onMouseEnter={() => setHoveredButton('explore')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="relative group px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{
                            background: '#E82127',
                            boxShadow: hoveredButton === 'explore'
                                ? '0 8px 24px rgba(232, 33, 39, 0.35)'
                                : '0 2px 8px rgba(0, 0, 0, 0.1)',
                            transform: hoveredButton === 'explore' ? 'translateY(-1px)' : 'translateY(0)',
                        }}
                    >
                        <div 
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
                                opacity: hoveredButton === 'explore' ? 1 : 0,
                            }}
                        />
                        <span className="relative z-10 text-white font-medium tracking-wide">
                            Explore Models
                        </span>
                    </button>

                    {/* Learn More Button */}
                    <button
                        onMouseEnter={() => setHoveredButton('learn')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="relative group px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                        style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: hoveredButton === 'learn'
                                ? '0 8px 24px rgba(255, 255, 255, 0.2)'
                                : '0 2px 8px rgba(255, 255, 255, 0.1)',
                            transform: hoveredButton === 'learn' ? 'translateY(-1px)' : 'translateY(0)',
                        }}
                    >
                        <div 
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(232, 33, 39, 0.03) 0%, transparent 100%)',
                                opacity: hoveredButton === 'learn' ? 1 : 0,
                            }}
                        />
                        <span className="relative z-10 text-black font-medium tracking-wide">
                            Learn More
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Grid Section */}
            <div className='pb-12 md:pb-0 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 relative -mt-16 sm:-mt-10 md:bottom-10'>
                {/* Test Drive Card */}
                <div className='bg-[#f4f4f4]/80 backdrop-blur-lg border border-white/20 flex flex-col sm:flex-row justify-between items-center overflow-hidden rounded-2xl'>
                    <div className='w-full sm:w-auto h-48 sm:h-auto relative sm:relative lg:hidden block'>
                        <Image
                            src="/Homepage-Grid-Test-Drive-Global.avif"
                            alt="Test Drive"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full sm:w-auto sm:h-auto sm:rounded-l-2xl"
                        />
                    </div>
                    <div className='p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-4 sm:gap-6 h-full w-full sm:w-auto'>
                        <span>
                            <h1 className='text-xl sm:text-2xl font-bold font-montserrat'>Experience Tesla</h1>
                            <p className='font-poppins text-sm sm:text-base mt-1'>Schedule a test drive today.</p>
                        </span>
                        <span>
                            <a href="#" className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 font-montserrat text-sm sm:text-base bg-[#A9A9A9] text-white rounded-lg hover:bg-[#1E1F24] transition">
                                Schedule a Test Drive
                            </a>
                        </span>
                    </div>
                    <div className='w-full sm:w-auto h-48 sm:h-auto relative sm:relative hidden lg:block'>
                        <Image
                            src="/Homepage-Grid-Test-Drive-Global.avif"
                            alt="Test Drive"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full sm:w-auto sm:h-auto sm:rounded-l-2xl"
                        />
                    </div>
                </div>

                {/* Charging Card */}
                <div className='bg-[#f4f4f4]/80 backdrop-blur-lg border border-white/20 flex flex-col sm:flex-row justify-between items-center rounded-2xl overflow-hidden'>
                    <div className='w-full sm:w-auto h-48 sm:h-auto relative sm:relative lg:hidden block'>
                        <Image
                            src="/Homepage-Grid-Charging.avif"
                            alt="Charging"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full sm:w-auto sm:h-auto sm:rounded-l-2xl"
                        />
                    </div>
                    <div className='p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-4 sm:gap-6 h-full w-full sm:w-auto'>
                        <span>
                            <h1 className='text-xl sm:text-2xl font-bold font-montserrat'>Charging</h1>
                            <p className='font-poppins text-sm sm:text-base mt-1'>Find the perfect charging solution.</p>
                        </span>
                        <span>
                            <a href="#" className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 font-montserrat text-sm sm:text-base bg-[#A9A9A9] text-white rounded-lg hover:bg-[#1E1F24] transition">
                                Explore Charging
                            </a>
                        </span>
                    </div>
                    <div className='w-full sm:w-auto h-48 sm:h-auto relative sm:relative hidden lg:block'>
                        <Image
                            src="/Homepage-Grid-Charging.avif"
                            alt="Charging"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full sm:w-auto sm:h-auto sm:rounded-l-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero