import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Robot from './robot';
import Navbar from './Navbar';

const HeroPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isRobotLoaded, setIsRobotLoaded] = useState(false);
  const [showRobot, setShowRobot] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleSplineViewer = () => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer?.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector("#logo");
        logo?.remove();
      }
      setIsRobotLoaded(true);
    };

    handleSplineViewer();
    
    const timeoutId = setTimeout(() => {
      handleSplineViewer();
      if (isRobotLoaded) {
        setShowRobot(true);
      }
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [isRobotLoaded]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <Navbar/>
      <h1 
        className="font-['righteous'] text-white text-center 
          fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-7xl sm:text-2xl md:text-7xl lg:text-[100px]
          w-100
          opacity-30 select-none z-0
          whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px rgba(248, 243, 243, 0.92)',
            letterSpacing: '0.05em'
          }}
      >
        Welcome to Radius
      </h1>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        {!isMobile && (
          <div 
            className="transition-opacity duration-1000 ease-in-out"
            style={{ 
              opacity: showRobot ? 1 : 0,
            }}
          >
            <Robot />
          </div>
        )}
      </div>

      <div className="absolute bottom-16 z-20 w-full px-4 flex justify-center">
        <Link 
          to="/chat"
          className="w-full max-w-xs sm:max-w-sm"
        >
          <button 
            className="w-full font-['sen'] text-lg sm:text-xl
              bg-blue-300 hover:bg-blue-400
              text-blue-900 font-semibold
              py-3 sm:py-4 px-6 sm:px-8
              rounded-full
              border-0
              transition-all duration-300
              hover:shadow-[0_0_15px_rgba(74,158,255,0.5)]
              transform hover:-translate-y-1 active:translate-y-0
              focus:outline-none
              hover:text-bg-blue-900 hover:brightness-125
              hover:shadow-lg"
            style={{
              textShadow: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.textShadow = `
                0 0 10px rgba(255,255,255,0.8),
                0 0 20px rgba(255,255,255,0.5),
                0 0 30px rgba(255,255,255,0.3)
              `;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            Start Chatting
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;