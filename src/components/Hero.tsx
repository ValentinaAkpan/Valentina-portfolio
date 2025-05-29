import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation and movement based on scroll
  const robotRotation = scrollY * 0.2;
  const robotBounce = Math.sin(scrollY * 0.01) * 10;
  const eyeGlow = Math.abs(Math.sin(scrollY * 0.02)) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Scroll-Interactive Robot */}
      <div 
        className="absolute right-4 md:right-12 top-1/2 z-20 transition-all duration-300"
        style={{
          transform: `translateY(calc(-50% + ${robotBounce}px)) rotate(${robotRotation}deg)`,
        }}
      >
        <div className="relative">
          {/* Robot Body with scroll-based scaling */}
          <div 
            className="relative scale-150 md:scale-125 transition-transform duration-500"
            style={{
              transform: `scale(${1.2 + Math.sin(scrollY * 0.005) * 0.2})`,
            }}
          >
            {/* Head */}
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mx-auto mb-3 relative shadow-2xl border border-gray-600">
              {/* Eyes with scroll-reactive glow */}
              <div 
                className="absolute top-5 left-4 w-3 h-3 bg-blue-400 rounded-full shadow-lg transition-all duration-300"
                style={{
                  boxShadow: `0 0 ${10 + eyeGlow}px rgba(59, 130, 246, 0.8)`,
                  transform: `translateX(${Math.sin(scrollY * 0.01) * 2}px)`,
                }}
              ></div>
              <div 
                className="absolute top-5 right-4 w-3 h-3 bg-blue-400 rounded-full shadow-lg transition-all duration-300"
                style={{
                  boxShadow: `0 0 ${10 + eyeGlow}px rgba(59, 130, 246, 0.8)`,
                  transform: `translateX(${Math.sin(scrollY * 0.01 + Math.PI) * 2}px)`,
                }}
              ></div>
              {/* Antenna with scroll movement */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-6 bg-gray-600 rounded-full"></div>
              <div 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg transition-all duration-300"
                style={{
                  transform: `translateX(-50%) scale(${1 + Math.sin(scrollY * 0.02) * 0.3})`,
                  boxShadow: `0 0 ${5 + Math.abs(Math.sin(scrollY * 0.02)) * 15}px rgba(239, 68, 68, 0.6)`,
                }}
              ></div>
              {/* Mouth */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* Body */}
            <div className="w-24 h-28 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl mx-auto relative shadow-2xl border border-gray-600">
              {/* Chest Panel with scroll-reactive elements */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-700 rounded-lg border border-gray-500 shadow-inner">
                <div 
                  className="w-3 h-3 bg-green-400 rounded-full mx-auto mt-2 shadow-lg transition-all duration-300"
                  style={{
                    boxShadow: `0 0 ${5 + Math.abs(Math.sin(scrollY * 0.03)) * 15}px rgba(34, 197, 94, 0.6)`,
                  }}
                ></div>
                <div className="flex justify-center space-x-1 mt-2">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-sm transition-all duration-300"
                      style={{
                        opacity: Math.abs(Math.sin(scrollY * 0.02 + i * Math.PI / 3)) * 0.5 + 0.5,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Arms with scroll-based movement */}
            <div 
              className="absolute top-20 -left-8 w-5 h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg border border-gray-600 transition-all duration-500"
              style={{
                transform: `rotate(${12 + Math.sin(scrollY * 0.015) * 20}deg)`,
                transformOrigin: 'top center',
              }}
            ></div>
            <div 
              className="absolute top-20 -right-8 w-5 h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg border border-gray-600 transition-all duration-500"
              style={{
                transform: `rotate(${-12 + Math.sin(scrollY * 0.015 + Math.PI) * 20}deg)`,
                transformOrigin: 'top center',
              }}
            ></div>
            
            {/* Legs */}
            <div className="flex justify-center space-x-3 mt-3">
              <div className="w-5 h-24 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg border border-gray-600"></div>
              <div className="w-5 h-24 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-lg border border-gray-600"></div>
            </div>
            
            {/* Feet */}
            <div className="flex justify-center space-x-3 -mt-1">
              <div className="w-8 h-4 bg-gray-700 rounded-full shadow-lg border border-gray-600"></div>
              <div className="w-8 h-4 bg-gray-700 rounded-full shadow-lg border border-gray-600"></div>
            </div>
          </div>
          
          {/* Floating Animation Effect with scroll enhancement */}
          <div 
            className="absolute inset-0 opacity-30 transition-all duration-1000"
            style={{
              transform: `rotate(${scrollY * 0.5}deg)`,
            }}
          >
            {[
              { position: 'top-2 left-2', color: 'blue-400', delay: 0 },
              { position: 'top-2 right-2', color: 'purple-400', delay: Math.PI / 2 },
              { position: 'bottom-2 left-2', color: 'green-400', delay: Math.PI },
              { position: 'bottom-2 right-2', color: 'red-400', delay: 3 * Math.PI / 2 },
            ].map((particle, i) => (
              <div 
                key={i}
                className={`absolute -${particle.position} w-3 h-3 bg-${particle.color} rounded-full shadow-lg transition-all duration-300`}
                style={{
                  transform: `scale(${1 + Math.sin(scrollY * 0.02 + particle.delay) * 0.5})`,
                  opacity: Math.abs(Math.sin(scrollY * 0.015 + particle.delay)) * 0.8 + 0.2,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="text-white">Professional</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Technical Support Specialist & Data Analyst with expertise in 
            <br className="hidden sm:block" />
            network operations, system troubleshooting, and data-driven insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#experience"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-600 rounded-lg text-white font-semibold hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
