'use client';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    title: 'Powerwall',
    description: 'Keep Your Lights On During Outages',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Powerwall-2-Desktop.jpg',
    accent: '#3b82f6'
  },
  {
    id: 2,
    title: 'Megapack',
    description: 'Massive Batteries for Massive Energy Support',
    image: 'https://digitalcontent.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Megapack-Desktop.jpg',
    accent: '#f59e0b'
  },
  {
    id: 3,
    title: 'Solar Roof',
    description: 'Beautiful Solar Without Compromise',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    accent: '#10b981'
  }
];

export default function ModernTeslaCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((current) => (current + 1) % products.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveSlide((current) => (current + 1) % products.length);
      setProgress(0);
    }
    if (isRightSwipe) {
      setActiveSlide((current) => (current - 1 + products.length) % products.length);
      setProgress(0);
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Active Slide Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${products[activeSlide].image})`,
            transform: hoveredCard !== null ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* Desktop/Tablet: Slide Cards Preview */}
        <div className="hidden md:flex gap-4 lg:gap-6 mb-8 lg:mb-12 overflow-x-auto scrollbar-hide">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => goToSlide(index)}
              className="relative cursor-pointer transition-all duration-500 flex-shrink-0"
              style={{
                width: index === activeSlide 
                  ? window.innerWidth >= 1024 ? '480px' : '360px'
                  : window.innerWidth >= 1024 ? '280px' : '220px',
                height: window.innerWidth >= 1024 ? '320px' : '240px',
                opacity: index === activeSlide ? 1 : 0.6,
              }}
            >
              {/* Card Background */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index 
                    ? `0 24px 48px ${product.accent}40` 
                    : '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Accent Border */}
                  {index === activeSlide && (
                    <div 
                      className="absolute inset-0 rounded-xl lg:rounded-2xl"
                      style={{
                        border: `2px solid ${product.accent}`,
                        boxShadow: `inset 0 0 40px ${product.accent}30`,
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-10">
                <h3 
                  className="text-white font-semibold mb-1 lg:mb-2 font-montserrat transition-all duration-300"
                  style={{
                    fontSize: index === activeSlide 
                      ? (window.innerWidth >= 1024 ? '32px' : '24px')
                      : (window.innerWidth >= 1024 ? '24px' : '18px'),
                  }}
                >
                  {product.title}
                </h3>
                <p 
                  className="text-white/80 transition-all font-montserrat duration-300 text-sm lg:text-base"
                  style={{
                    opacity: index === activeSlide ? 1 : 0.7,
                  }}
                >
                  {product.description}
                </p>

                {/* Button - Only on Active */}
                {index === activeSlide && (
                  <button
                    onMouseEnter={() => setHoveredButton(product.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="mt-4 lg:mt-6 px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg overflow-hidden transition-all duration-300 text-sm lg:text-base"
                    style={{
                      background: hoveredButton === product.id 
                        ? product.accent
                        : `${product.accent}dd`,
                      backdropFilter: 'blur(10px)',
                      boxShadow: hoveredButton === product.id
                        ? `0 8px 32px ${product.accent}60`
                        : `0 4px 16px ${product.accent}40`,
                      transform: hoveredButton === product.id ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    <div 
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
                        opacity: hoveredButton === product.id ? 1 : 0,
                      }}
                    />
                    <span className="relative z-10 text-white font-medium tracking-wide">
                      Learn More
                    </span>
                  </button>
                )}

                {/* Progress Bar */}
                {index === activeSlide && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-100 ease-linear"
                      style={{
                        width: `${progress}%`,
                        background: product.accent,
                        boxShadow: `0 0 10px ${product.accent}`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Single Card View */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden"
              style={{
                height: '400px',
                boxShadow: `0 24px 48px ${products[activeSlide].accent}40`,
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${products[activeSlide].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Accent Border */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: `2px solid ${products[activeSlide].accent}`,
                    boxShadow: `inset 0 0 40px ${products[activeSlide].accent}30`,
                  }}
                />
              </div>

              {/* Mobile Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-white font-semibold text-3xl mb-2 font-montserrat">
                  {products[activeSlide].title}
                </h3>
                <p className="text-white/80 font-montserrat text-base mb-6">
                  {products[activeSlide].description}
                </p>

                <button
                  className="w-full px-8 py-3.5 rounded-lg overflow-hidden transition-all duration-300 text-base font-medium"
                  style={{
                    background: products[activeSlide].accent,
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 8px 32px ${products[activeSlide].accent}60`,
                  }}
                >
                  <span className="text-white font-medium tracking-wide">
                    Learn More
                  </span>
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-100 ease-linear"
                    style={{
                      width: `${progress}%`,
                      background: products[activeSlide].accent,
                      boxShadow: `0 0 10px ${products[activeSlide].accent}`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-xs flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Swipe to explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2 sm:gap-3 items-center justify-center md:justify-start">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === activeSlide ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: index === activeSlide 
                  ? product.accent
                  : 'rgba(255, 255, 255, 0.3)',
                boxShadow: index === activeSlide 
                  ? `0 0 20px ${product.accent}80`
                  : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse at bottom, ${products[activeSlide].accent}15 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Desktop Arrow Navigation */}
      <button
        onClick={() => goToSlide((activeSlide - 1 + products.length) % products.length)}
        className="hidden lg:flex absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={() => goToSlide((activeSlide + 1) % products.length)}
        className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}