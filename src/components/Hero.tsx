import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic movements based on scroll
  const robotFloat = Math.sin(scrollY * 0.01) * 15;
  const robotTilt = scrollY * 0.1;
  const glowIntensity = Math.abs(Math.sin(scrollY * 0.02)) * 50;
  const pulseScale = 1 + Math.sin(scrollY * 0.03) * 0.1;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Modern Tech Robot */}
      <div 
        className="absolute right-8 md:right-16 top-1/2 z-20 transition-all duration-300"
        style={{
          transform: `translateY(calc(-50% + ${robotFloat}px)) rotate(${robotTilt * 0.2}deg) scale(${pulseScale})`,
        }}
      >
        <div className="relative">
          {/* Main Robot Body */}
          <div className="relative scale-125 md:scale-100">
            
            {/* Head - Hexagonal Design */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              {/* Main Head Frame */}
              <div 
                className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 transform rotate-45 rounded-lg border-2 border-cyan-400/50 shadow-2xl relative"
                style={{
                  boxShadow: `0 0 ${20 + glowIntensity}px rgba(6, 182, 212, 0.4)`,
                }}
              >
                {/* Inner Head Panel */}
                <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-black rounded transform -rotate-45 border border-cyan-300/30">
                  
                  {/* Eyes - LED Style */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    <div 
                      className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg transition-all duration-300"
                      style={{
                        boxShadow: `0 0 ${15 + glowIntensity}px rgba(6, 182, 212, 0.8)`,
                        transform: `translateX(${Math.sin(scrollY * 0.02) * 2}px)`,
                      }}
                    ></div>
                    <div 
                      className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg transition-all duration-300"
                      style={{
                        boxShadow: `0 0 ${15 + glowIntensity}px rgba(6, 182, 212, 0.8)`,
                        transform: `translateX(${Math.sin(scrollY * 0.02 + Math.PI) * 2}px)`,
                      }}
                    ></div>
                  </div>
                  
                  {/* Center Processor */}
                  <div 
                    className="absolute top-7 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                    style={{
                      boxShadow: `0 0 ${10 + Math.abs(Math.sin(scrollY * 0.025)) * 20}px rgba(168, 85, 247, 0.6)`,
                    }}
                  ></div>
                  
                  {/* Status Indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-green-400 rounded-full transition-all duration-300"
                        style={{
                          opacity: Math.abs(Math.sin(scrollY * 0.03 + i * Math.PI / 3)) * 0.7 + 0.3,
                          boxShadow: `0 0 ${5 + Math.abs(Math.sin(scrollY * 0.03 + i * Math.PI / 3)) * 10}px rgba(34, 197, 94, 0.5)`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Antenna Array */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-0.5 h-8 bg-gradient-to-t from-slate-600 to-cyan-400 rounded-full"></div>
                <div 
                  className="w-0.5 h-6 bg-gradient-to-t from-slate-600 to-purple-400 rounded-full transition-all duration-500"
                  style={{
                    transform: `scaleY(${1 + Math.sin(scrollY * 0.02) * 0.3})`,
                  }}
                ></div>
                <div className="w-0.5 h-8 bg-gradient-to-t from-slate-600 to-cyan-400 rounded-full"></div>
              </div>
              
              {/* Signal Tip */}
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full transition-all duration-300"
                style={{
                  boxShadow: `0 0 ${10 + Math.abs(Math.sin(scrollY * 0.025)) * 20}px rgba(239, 68, 68, 0.7)`,
                  transform: `translateX(-50%) scale(${1 + Math.sin(scrollY * 0.025) * 0.4})`,
                }}
              ></div>
            </div>
            
            {/* Chest/Torso - Tech Panel */}
            <div className="w-28 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mx-auto relative border-2 border-cyan-400/30 shadow-2xl">
              
              {/* Main Display Panel */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-br from-slate-800 to-black rounded-xl border border-cyan-300/50 shadow-inner">
                
                {/* Central Core */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                  style={{
                    boxShadow: `0 0 ${15 + glowIntensity}px rgba(6, 182, 212, 0.6)`,
                    transform: `translate(-50%, -50%) rotate(${scrollY * 0.5}deg)`,
                  }}
                >
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                
                {/* Data Streams */}
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-3 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full transition-all duration-300"
                      style={{
                        opacity: Math.abs(Math.sin(scrollY * 0.04 + i * Math.PI / 2)) * 0.8 + 0.2,
                        transform: `scaleX(${0.5 + Math.abs(Math.sin(scrollY * 0.04 + i * Math.PI / 2)) * 0.5})`,
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Right Side Indicators */}
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-1 h-1 bg-orange-400 rounded-full transition-all duration-300"
                      style={{
                        opacity: Math.abs(Math.sin(scrollY * 0.05 + i * Math.PI / 3)) * 0.9 + 0.1,
                        boxShadow: `0 0 ${3 + Math.abs(Math.sin(scrollY * 0.05 + i * Math.PI / 3)) * 8}px rgba(251, 146, 60, 0.5)`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Lower Control Panel */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-slate-800 rounded-lg border border-slate-600 flex items-center justify-center space-x-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-1 h-3 bg-blue-400 rounded-full transition-all duration-200"
                    style={{
                      height: `${8 + Math.abs(Math.sin(scrollY * 0.06 + i * Math.PI / 4)) * 8}px`,
                      opacity: 0.4 + Math.abs(Math.sin(scrollY * 0.06 + i * Math.PI / 4)) * 0.6,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Arms - Articulated Design */}
            <div 
              className="absolute top-24 -left-10 w-6 h-24 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full shadow-lg border border-slate-500 transition-all duration-500"
              style={{
                transform: `rotate(${15 + Math.sin(scrollY * 0.02) * 25}deg)`,
                transformOrigin: 'top center',
              }}
            >
              {/* Shoulder Joint */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
              {/* Elbow Joint */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
            
            <div 
              className="absolute top-24 -right-10 w-6 h-24 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full shadow-lg border border-slate-500 transition-all duration-500"
              style={{
                transform: `rotate(${-15 + Math.sin(scrollY * 0.02 + Math.PI) * 25}deg)`,
                transformOrigin: 'top center',
              }}
            >
              {/* Shoulder Joint */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
              {/* Elbow Joint */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
            
            {/* Legs - Mechanical Design */}
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-6 h-28 bg-gradient-to-b from-slate-600 to-slate-900 rounded-full shadow-lg border border-slate-500 relative">
                {/* Knee Joint */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div>
              <div className="w-6 h-28 bg-gradient-to-b from-slate-600 to-slate-900 rounded-full shadow-lg border border-slate-500 relative">
                {/* Knee Joint */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Feet - Tech Boots */}
            <div className="flex justify-center space-x-4 -mt-1">
              <div className="w-10 h-5 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full shadow-lg border border-cyan-400/30 relative">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
              </div>
              <div className="w-10 h-5 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full shadow-lg border border-cyan-400/30 relative">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Energy Field Effect */}
          <div 
            className="absolute inset-0 opacity-20 transition-all duration-1000"
            style={{
              transform: `rotate(${scrollY * 0.3}deg)`,
            }}
          >
            {[
              { position: 'top-4 left-4', color: 'cyan-400', delay: 0 },
              { position: 'top-4 right-4', color: 'blue-400', delay: Math.PI / 2 },
              { position: 'bottom-4 left-4', color: 'purple-400', delay: Math.PI },
              { position: 'bottom-4 right-4', color: 'pink-400', delay: 3 * Math.PI / 2 },
            ].map((particle, i) => (
              <div 
                key={i}
                className={`absolute ${particle.position} w-4 h-4 bg-${particle.color} rounded-full shadow-lg transition-all duration-300`}
                style={{
                  transform: `scale(${0.5 + Math.sin(scrollY * 0.03 + particle.delay) * 0.5})`,
                  opacity: Math.abs(Math.sin(scrollY * 0.02 + particle.delay)) * 0.8 + 0.2,
                  boxShadow: `0 0 ${10 + Math.abs(Math.sin(scrollY * 0.02 + particle.delay)) * 20}px rgba(6, 182, 212, 0.4)`,
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
