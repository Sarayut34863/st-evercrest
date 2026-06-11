import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, ScrollText, Lock } from 'lucide-react';

const LOGO_URL = 'https://lh3.googleusercontent.com/sitesv/AA5AbUADXCKaOskafsKh_PI6A_7XFonWBPzj24LHBuICezpu3EZu5QTWPj6xhKuuEx1zvWJesa0gr565wg9BTC136p5DwH-HDYmNmBNZWOrVv9AbPlVmVVj1ifdKiw4GHIKtq721bOfE5NhaxGoHkp_INRewQQrvX75F5hhC1eWJjYb_6gOjRxojL_3xmn9IGQs=w16383';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden font-kanit flex flex-col relative bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-background-dark/70 pointer-events-none z-0"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/40 to-background-dark/90 z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full"
        >
          <img src={LOGO_URL} alt="St. Evercrest Logo" className="w-32 h-32 md:w-40 md:h-40 mb-8 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-text-light mb-2 tracking-widest drop-shadow-2xl">
            ST. EVERCREST
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-text-light/90 mb-6 tracking-[0.3em] drop-shadow-xl uppercase">
            University
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-primary font-light tracking-wider mb-8 drop-shadow-md">
            เมืองแห่งคำสาบานเลือดและความสมดุลอันเปราะบาง
          </h2>
          
          <div className="w-24 h-1 bg-primary/50 mx-auto mb-8 rounded-full"></div>

          <p className="text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 drop-shadow-md px-2">
            ยินดีต้อนรับสู่ St. Evercrest University สัญลักษณ์ของยุคใหม่ สถานที่ซึ่งทุกคนสามารถใช้ชีวิตร่วมกันได้... 
            อย่างน้อยก็ในสายตาของสังคม แต่จงจำไว้ว่า เบื้องหลังภาพลักษณ์อันสวยงามนั้น ความขัดแย้งเก่าแก่ไม่เคยหายไป
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-3xl mx-auto">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/lore')}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg tracking-wide flex items-center justify-center gap-2 bg-text-light/5 border border-text-light/10 text-text-light/90 rounded-lg transition-colors backdrop-blur-md"
            >
              <BookOpen className="w-5 h-5 text-primary/80" /> ตำนานเมือง
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/rulebook')}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg tracking-wide flex items-center justify-center gap-2 bg-text-light/5 border border-text-light/10 text-text-light/90 rounded-lg transition-colors backdrop-blur-md"
            >
              <Shield className="w-5 h-5 text-primary/80" /> กฎเซิร์ฟเวอร์
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/terms-of-service')}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg tracking-wide flex items-center justify-center gap-2 bg-text-light/5 border border-text-light/10 text-text-light/90 rounded-lg transition-colors backdrop-blur-md"
            >
              <ScrollText className="w-5 h-5 text-primary/80" /> เงื่อนไขการให้บริการ
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/privacy-policy')}
              className="w-full px-4 py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg tracking-wide flex items-center justify-center gap-2 bg-text-light/5 border border-text-light/10 text-text-light/90 rounded-lg transition-colors backdrop-blur-md"
            >
              <Lock className="w-5 h-5 text-primary/80" /> นโยบายความเป็นส่วนตัว
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
