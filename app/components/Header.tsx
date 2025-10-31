'use client'
import { Globe } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center font-montserrat sticky top-0 z-50'>
            <div className={`flex justify-between items-center absolute top-0 ${isMobileMenuOpen? 'bg-white' : 'bg-transparent'} md:bg-[#122530]/20 backdrop-blur-2xl z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-5`}>
                {/* <div className="absolute inset-0 bg-transparent md:bg-linear-to-r from-transparent via-[#f7fbff] to-transparent pointer-events-none"></div> */}
            
                {/* Logo */}
                <div className='w-24 sm:w-28 md:w-32 relative z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 35" fill={`${isMobileMenuOpen ? '#000000' : '#FFFFFF'}`}>
                        <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9V13.9h-31.2V7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"/>
                    </svg>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex relative z-10 text-sm text-white'>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">Vehicles</a>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">Energy</a>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">Charging</a>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">Discover</a>
                </div>

                {/* Desktop User Section */}
                <div className='hidden lg:flex items-center relative z-10 text-sm text-white'>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">
                        <Globe/>
                    </a>
                    <a href="#" className="mx-3 xl:mx-4 hover:opacity-70 transition">Account</a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='lg:hidden relative z-10 p-2 bg-white/10 rounded-md transition'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className='w-6 h-3 flex flex-col justify-between'>
                        <span className={`w-full h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-black' : ' bg-white'}`}></span>
                        {/* <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span> */}
                        <span className={`w-full h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : 'bg-white'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div 
                className={`lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 z-50 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-104 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className='flex flex-col px-4 py-2'>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm">Vehicles</a>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm">Energy</a>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm">Charging</a>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm">Discover</a>
                    <div className='border-t border-gray-200 my-2'></div>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm flex items-center">
                        <Image src="/globe.svg" alt="Language" width={18} height={18} className="mr-2" />
                        Language
                    </a>
                    <a href="#" className="py-3 px-4 hover:bg-gray-100 rounded-lg transition text-sm">Account</a>
                </div>
            </div>
        </div>
    )
}

export default Header