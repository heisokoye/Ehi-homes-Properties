import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', targetId: 'home', path: '/#home' },
    { name: 'About Us', targetId: 'about', path: '/#about' },
    { name: 'Why Us', targetId: 'why-us', path: '/#why-us' },
    { name: 'Contact Us', targetId: 'contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    } else {
      scrollToElement(targetId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/40 backdrop-blur-xs py-5 sm:py-6'
      }`}
    >
      <div className="w-[96%] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="EHI HOMES AND PROPERTIES LTD" 
            className="h-12 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden flex-col font-bold leading-tight cursor-pointer">
            <div className="flex items-center gap-1.5 text-[#2F4324] text-lg sm:text-xl tracking-tight">
              <svg className="w-5 h-5 text-[#2F4324]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
              <span>EHI HOMES</span>
            </div>
            <span className="text-[#B88A3E] text-xs font-semibold tracking-wider uppercase">AND PROPERTIES LTD</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.targetId;
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-sm lg:text-[15px] font-medium transition-all duration-200 hover:text-[#2F4324] relative py-1 cursor-pointer ${
                  isActive 
                    ? 'text-[#2F4324] font-bold border-b-2 border-[#2F4324]' 
                    : 'text-gray-800 hover:text-[#2F4324]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Get In Touch Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#2F4324] text-white text-sm font-medium transition-all duration-300 hover:bg-[#223219] hover:shadow-md active:scale-95 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-gray-800 hover:text-[#2F4324] hover:bg-gray-100/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                activeSection === link.targetId 
                  ? 'text-[#2F4324] bg-gray-100/80 font-semibold' 
                  : 'text-gray-800 hover:text-[#2F4324] hover:bg-gray-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full text-center px-6 py-3 rounded-2xl bg-[#2F4324] text-white font-medium hover:bg-[#223219] transition-colors cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;