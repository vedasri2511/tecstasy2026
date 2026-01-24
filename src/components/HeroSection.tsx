import { useEffect, useState } from 'react';
import tecstasyLogo from '@/assets/tecstasy-logo.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Animated Logo */}
      <div 
        className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
          {/* Logo container (no circular background) */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={tecstasyLogo} 
              alt="TECSTASY 2026 Logo" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Brand Name */}
     
      {/* Main Title */}
      <div 
        className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <h1 className="script-heading text-2xl md:text-4xl lg:text-5xl text-glow-strong text-center leading-tight max-w-5xl mx-auto">
          SWADESIGN: <span className="block md:inline">Indigenous Minds &amp; Global Impact</span>
        </h1>
      </div>

      {/* Tagline */}
      <p 
        className={`text-lg md:text-2xl lg:text-3xl text-foreground/90 text-center max-w-4xl font-body italic transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Welcome to <span className="text-primary font-semibold">SUDHEE-TECSTACY</span>, where innovation meets celebration!
      </p>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
