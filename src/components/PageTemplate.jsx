import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

export default function PageTemplate({ title, subtitle, content }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-dark font-kanit flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF0000]/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <main className="flex-1 relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="self-start flex items-center text-text-muted hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          กลับสู่หน้าหลัก
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center w-full max-w-4xl mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-light mb-4 tracking-wider drop-shadow-lg uppercase">
            {title}
          </h1>
          <h2 className="text-lg md:text-xl text-primary font-light tracking-wide">
            {subtitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-5xl bg-background/60 backdrop-blur-xl border border-text-muted/20 rounded-2xl p-6 md:p-12 shadow-2xl relative"
        >
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-text-muted text-base md:text-lg leading-relaxed font-light">
              {content}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
