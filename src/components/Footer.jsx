import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, BookOpen, ScrollText } from 'lucide-react';

const LOGO_URL = 'https://lh3.googleusercontent.com/sitesv/AA5AbUADXCKaOskafsKh_PI6A_7XFonWBPzj24LHBuICezpu3EZu5QTWPj6xhKuuEx1zvWJesa0gr565wg9BTC136p5DwH-HDYmNmBNZWOrVv9AbPlVmVVj1ifdKiw4GHIKtq721bOfE5NhaxGoHkp_INRewQQrvX75F5hhC1eWJjYb_6gOjRxojL_3xmn9IGQs=w16383';

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative z-20 bg-background-dark border-t border-text-muted/10 pt-10 md:pt-16 font-kanit">
      <div className="max-w-[120rem] mx-auto px-6 md:px-8 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-24 mb-8 md:mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={LOGO_URL} alt="St. Evercrest Logo" className="w-12 h-12 drop-shadow-[0_0_10px_rgba(63,81,181,0.5)]" />
              <h3 className="text-xl font-bold text-text-light tracking-wide">ST. EVERCREST</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              เมืองแห่งคำสาบานเลือดและความสมดุลอันเปราะบาง ที่ซึ่งมนุษย์ แวมไพร์ มนุษย์หมาป่า และแม่มด 
              ต้องใช้ชีวิตอยู่ร่วมกันภายใต้กฎเหล็กแห่งสภา Evercrest
            </p>
          </div>

          <div>
            <h4 className="text-text-light font-semibold mb-6 uppercase tracking-wider text-sm">Citizen Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/lore" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4" /> Official Lore
                </Link>
              </li>
              <li>
                <Link to="/rulebook" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <ScrollText className="w-4 h-4" /> City Rulebook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-light font-semibold mb-6 uppercase tracking-wider text-sm">Connect with Us</h4>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://discord.com/invite/3J6vyAjpC9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-text-muted/5 border border-text-muted/10 flex items-center justify-center text-text-muted hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-colors">
                <DiscordIcon />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.facebook.com/people/StEvercrest-University/61590526053485/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-text-muted/5 border border-text-muted/10 flex items-center justify-center text-text-muted hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-colors">
                <FacebookIcon />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.tiktok.com/@evercrest.officia1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-text-muted/5 border border-text-muted/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white/50 hover:bg-white/10 transition-colors">
                <TiktokIcon />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-text-muted/5 border border-text-muted/10 flex items-center justify-center text-text-muted hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 transition-colors">
                <YoutubeIcon />
              </motion.a>
            </div>
            <p className="text-text-muted/60 text-xs mt-6">
              Follow our official channels for server updates, event announcements, and community highlights.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-text-muted/10 w-full">
        <div className="max-w-[120rem] mx-auto px-6 md:px-8 lg:px-24 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} St. Evercrest University. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-text-muted/60">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
