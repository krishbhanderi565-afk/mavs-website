import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Wordmark } from './Wordmark';
import { Menu, X, Download, Sparkles, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/explore', label: 'Explore MAVS' },
    { to: '/about', label: 'About' },
    { to: '/features', label: 'Features' },
    { to: '/script-enhancer', label: 'Script Enhancer', highlight: true },
    { to: '/download', label: 'Downloads' },
    { to: '/open-source', label: 'Open Source' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAEEDE]/90 backdrop-blur-md shadow-sm border-b border-[#2C1030]/10 py-3'
          : 'bg-[#FAEEDE] border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex-shrink-0">
            <Wordmark size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/40 px-3 py-1.5 rounded-full border border-[#2C1030]/5 backdrop-blur-xs shadow-2xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#2C1030] bg-[#F9DDE2] font-semibold shadow-2xs'
                      : 'text-[#806C80] hover:text-[#2C1030] hover:bg-[#FAEEDE]'
                  } ${
                    link.highlight
                      ? 'flex items-center gap-1.5'
                      : ''
                  }`
                }
              >
                {link.highlight && (
                  <Sparkles className="w-3.5 h-3.5 text-[#EC5478]" aria-hidden="true" />
                )}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Download CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-[#FAEEDE] text-sm font-semibold px-4 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478]"
            >
              <Download className="w-4 h-4 text-[#FF9B36]" aria-hidden="true" />
              <span>Download for Windows</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/download"
              className="inline-flex items-center gap-1 bg-[#2C1030] text-[#FAEEDE] text-xs font-semibold px-3 py-1.5 rounded-full"
              aria-label="Download MAVS for Windows"
            >
              <Download className="w-3.5 h-3.5 text-[#FF9B36]" />
              <span>Get MAVS</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2C1030] hover:bg-[#F9DDE2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2C1030]/10 bg-[#FAEEDE] px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F9DDE2] text-[#2C1030] font-semibold'
                      : 'text-[#806C80] hover:text-[#2C1030] hover:bg-white/50'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  {link.highlight && <Sparkles className="w-4 h-4 text-[#EC5478]" />}
                  <span>{link.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#806C80]/50" />
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-[#2C1030]/10 flex flex-col gap-2">
              <Link
                to="/download"
                className="w-full flex items-center justify-center gap-2 bg-[#2C1030] text-[#FAEEDE] font-semibold py-3 px-4 rounded-xl shadow-xs"
              >
                <Download className="w-4 h-4 text-[#FF9B36]" />
                <span>Download for Windows (x64)</span>
              </Link>
              <div className="text-center text-xs text-[#806C80] pt-1">
                macOS & Mobile builds coming soon
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
