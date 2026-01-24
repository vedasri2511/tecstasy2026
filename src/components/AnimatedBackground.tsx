const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[60%] animate-wave opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(187 80% 45% / 0.6)" />
            <stop offset="50%" stopColor="hsl(200 85% 40% / 0.8)" />
            <stop offset="100%" stopColor="hsl(220 70% 35% / 0.6)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave1)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[50%] animate-wave-slow opacity-30"
        style={{ animationDelay: '-2s' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(200 85% 50% / 0.5)" />
            <stop offset="50%" stopColor="hsl(187 100% 50% / 0.7)" />
            <stop offset="100%" stopColor="hsl(200 85% 50% / 0.5)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave2)"
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,186.7C672,203,768,213,864,202.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[40%] animate-wave-fast opacity-50"
        style={{ animationDelay: '-4s' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(187 100% 50% / 0.4)" />
            <stop offset="50%" stopColor="hsl(180 100% 45% / 0.6)" />
            <stop offset="100%" stopColor="hsl(187 100% 50% / 0.4)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave3)"
          d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,234.7C672,235,768,213,864,197.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Floating particles/orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-glow-cyan/10 blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-glow-blue/10 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-glow-cyan/15 blur-2xl animate-float" style={{ animationDelay: '-4s' }} />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--glow-cyan) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--glow-cyan) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
