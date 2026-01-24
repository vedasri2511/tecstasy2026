import { useState } from 'react';
import { Menu, X, Instagram, Github } from 'lucide-react';
import sevaLogo from '@/assets/seva-logo.jpeg';
import scrsLogo from '@/assets/scrs-logo.jpeg';
import csiLogo from '@/assets/csi-logo.png';
import tecstasyLogo from '@/assets/tecstasy-logo.png';

const navItems = [
  { label: 'TECSTASY', href: '#home' },
  { label: 'CLUBS', href: '#clubs' },
  { label: 'COORDS', href: '#coords' },
  { label: 'EVENTS', href: '#events' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Sponsor Logos - Left Side (CSI prominent) */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <img
              src={csiLogo}
              alt="CSI Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover bg-white border border-border box-glow"
            />
            <img
              src={scrsLogo}
              alt="SCRS Logo"
              className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover bg-white border border-border box-glow"
            />
            <img
              src={sevaLogo}
              alt="SEVA Logo"
              className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover bg-white border border-border box-glow"
            />
          </div>

          {/* Center Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg box-glow bg-background/70 border border-border/60 flex items-center justify-center overflow-hidden">
              <img
                src={tecstasyLogo}
                alt="TECSTASY Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-base md:text-xl tracking-wider text-glow">
              TECSTASY 2K26
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-muted/50 rounded-full px-2 py-1 border border-border/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-foreground/80 hover:text-foreground font-display text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links - Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/tecstasy2k26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-glow-cyan transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/vedasri2511/tecstasy2k26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-glow-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-foreground/80 hover:text-foreground font-display text-lg py-3"
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-2">
                <a
                  href="https://www.instagram.com/tecstasy2k26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-glow-cyan transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://github.com/vedasri2511/tecstasy2k26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-glow-cyan transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
