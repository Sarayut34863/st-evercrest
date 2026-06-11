import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lore & Story', path: '/lore' },
    { name: 'Rulebook', path: '/rulebook' },
    { name: 'Terms of Service', path: '/terms-of-service', mobileOnly: true },
    { name: 'Privacy Policy', path: '/privacy-policy', mobileOnly: true },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[120rem] mx-auto px-6 md:px-8 lg:px-24 flex items-center justify-between">
          
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-black tracking-widest text-white uppercase drop-shadow-md hover:text-primary transition-colors flex items-center gap-2 md:gap-3"
          >
            <img src="https://lh3.googleusercontent.com/sitesv/AA5AbUADXCKaOskafsKh_PI6A_7XFonWBPzj24LHBuICezpu3EZu5QTWPj6xhKuuEx1zvWJesa0gr565wg9BTC136p5DwH-HDYmNmBNZWOrVv9AbPlVmVVj1ifdKiw4GHIKtq721bOfE5NhaxGoHkp_INRewQQrvX75F5hhC1eWJjYb_6gOjRxojL_3xmn9IGQs=w16383" alt="St. Evercrest" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span>ST. EVERCREST</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => !link.mobileOnly).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide transition-all ${
                    isActive 
                      ? 'text-primary font-medium' 
                      : 'text-text-light/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button 
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 text-center w-full px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl tracking-widest transition-all ${
                    location.pathname === link.path 
                      ? 'text-primary font-medium' 
                      : 'text-text-light/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
