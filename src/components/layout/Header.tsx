import { useState, useEffect } from 'react';
import { InteractiveHoverButton, MaterialIcon } from '../ui';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Trust', href: '#trust' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
        <div 
          className={`
            max-w-5xl mx-auto
            flex items-center justify-between
            px-4 md:px-6 py-3
            rounded-full
            transition-all duration-500 ease-out
            ${isScrolled 
              ? 'bg-cream/95 backdrop-blur-xl shadow-lg shadow-charcoal/5 border border-charcoal/10' 
              : 'bg-cream/60 backdrop-blur-md border border-transparent'
            }
          `}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.webp" 
              alt="Genefits logo" 
              className="w-9 h-9 rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
            />
            <span className="font-sans font-semibold text-xl text-charcoal tracking-tight">
              Genefits
            </span>
          </a>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  relative px-4 py-2 text-sm font-medium text-charcoal/70 
                  hover:text-charcoal transition-colors duration-200
                  rounded-full hover:bg-charcoal/5
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <InteractiveHoverButton variant="primary" icon="arrow-right" href="#waitlist">
                Join waitlist
              </InteractiveHoverButton>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-charcoal/5 transition-colors"
              aria-label="Toggle menu"
            >
              <MaterialIcon 
                name={isMobileMenuOpen ? "close" : "menu"} 
                size={24} 
                className="text-charcoal" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`
            absolute top-20 left-4 right-4
            bg-cream rounded-2xl p-6
            shadow-2xl shadow-charcoal/10
            border border-charcoal/10
            transition-all duration-300 ease-out
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  px-4 py-3 text-base font-medium text-charcoal/70 
                  hover:text-charcoal hover:bg-charcoal/5
                  transition-colors duration-200 rounded-xl
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <InteractiveHoverButton variant="primary" icon="arrow-right" className="w-full" href="#waitlist">
              Join waitlist
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </>
  );
}
