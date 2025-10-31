'use client';
import React, { useState } from 'react';

export default function TeslaFooter() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { text: 'Tesla © 2025', href: '#' },
    { text: 'Privacy & Legal', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'News', href: '#' },
    { text: 'Engage', href: '#' },
    { text: 'Locations', href: '#' },
  ];

  return (
    <footer className="w-full py-8 px-8 h-[250px] flex items-center relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.text)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-xs font-montserrat font-semibold tracking-wide transition-all duration-300"
              style={{
                color: hoveredLink === link.text ? '#a0a0a0' : '#1E1F24',
              }}
            >
              {link.text}
              
              {/* Underline effect */}
              <span 
                className="absolute bottom-0 left-0 h-px bg-white transition-all duration-300"
                style={{
                  width: hoveredLink === link.text ? '100%' : '0%',
                  opacity: hoveredLink === link.text ? 1 : 0,
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}