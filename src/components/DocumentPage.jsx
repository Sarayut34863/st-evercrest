import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash } from 'lucide-react';

export default function DocumentPage({ title, subtitle, content, bgImage, sectionImages = {}, variant = 'default' }) {
  const [activeSection, setActiveSection] = useState('');

  const blocks = [];
  const lines = content.split('\n');
  let currentRule = null;

  lines.forEach((line) => {
    const t = line.trim();
    if (!t || t === '---') return;
    
    if (t === title || t === 'LORE & STORY' || t === 'ROLEPLAY RULEBOOK') return;

    if (t.startsWith('Version') || t.startsWith('อัปเดตล่าสุด:')) {
      blocks.push({ type: 'meta', text: t });
      return;
    }

    const ruleMatch = t.match(/^(\d+)\.\s+(.*)/);
    if (ruleMatch) {
      if (currentRule) blocks.push(currentRule);
      currentRule = { type: 'rule', id: ruleMatch[1], title: ruleMatch[2], body: [] };
      return;
    }

    if (!currentRule && t.length > 0 && t.length < 50 && !t.endsWith('ๆ') && !t.includes(' ') && !t.startsWith('"') && t !== 'ST. EVERCREST' && t !== 'เมืองแห่งคำสาบานเลือดและความสมดุลอันเปราะบาง') {
       blocks.push({ type: 'heading', id: t, text: t });
       return;
    }
    if (!currentRule && (t === 'ST. EVERCREST' || t === 'สนธิสัญญาเอเวอร์เครสต์' || t === 'ยุคฟื้นฟู' || t === 'ยุคแห่งสงครามสามเผ่า' || t === 'ยุคก่อตั้ง' || t === 'จุดแตกหัก' || t === 'ปี 2026')) {
       blocks.push({ type: 'heading', id: t, text: t });
       return;
    }

    if (t.startsWith('"') && t.endsWith('"')) {
      if (currentRule) currentRule.body.push({ type: 'quote', text: t });
      else blocks.push({ type: 'quote', text: t });
      return;
    }

    if (currentRule) {
      currentRule.body.push({ type: 'paragraph', text: t });
    } else {
      blocks.push({ type: 'paragraph', text: t });
    }
  });

  if (currentRule) blocks.push(currentRule);

  const navItems = blocks.filter(b => b.type === 'rule' || b.type === 'heading');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      let currentActiveId = '';
      const offset = 200; 
      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentActiveId = el.id;
        }
      }
      if (!currentActiveId && sectionElements.length > 0 && window.scrollY < 100) {
        currentActiveId = sectionElements[0].id;
      }
      if (currentActiveId) {
        setActiveSection(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const currentBgImage = sectionImages[activeSection] || bgImage;

  return (
    <div className="w-full min-h-screen relative font-kanit pb-32">
      {currentBgImage && (
        <div className="fixed inset-0 z-0 pointer-events-none bg-background-dark/50">
          <AnimatePresence>
            <motion.div 
              key={currentBgImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center opacity-80 md:opacity-100"
              style={{ backgroundImage: `url('${currentBgImage}')` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-background-dark/50 md:bg-background-dark/50 backdrop-blur-[8px] md:backdrop-blur-[12px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/70 to-background-dark/95" />
        </div>
      )}

      <div className="w-full max-w-[120rem] mx-auto px-4 md:px-8 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-20 relative z-10 pt-16 lg:pt-32">
        
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 custom-scrollbar">
            <h3 className="text-xs font-bold text-text-muted tracking-[0.2em] uppercase mb-8">Table of Contents</h3>
            <nav className="flex flex-col gap-3">
              {navItems.map((item, i) => (
                <a 
                  key={i}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm tracking-wide transition-all duration-300 border-l-2 pl-4 py-1 ${
                    activeSection === item.id 
                      ? 'border-primary text-primary font-medium' 
                      : 'border-white/5 text-text-light/50 hover:text-text-light hover:border-white/30'
                  }`}
                >
                  {item.type === 'rule' ? `${item.id}. ${item.title}` : item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 max-w-5xl">
          <header className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-light tracking-tight mb-2 md:mb-4 drop-shadow-sm">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-light tracking-wide">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-2">
              {blocks.filter(b => b.type === 'meta').map((m, i) => (
                <span key={i} className="text-sm font-mono text-text-muted bg-white/5 w-fit px-3 py-1 rounded-md">
                  {m.text}
                </span>
              ))}
            </div>
          </header>

          <div className="space-y-8 md:space-y-16">
            {blocks.map((block, index) => {
              if (block.type === 'meta') return null;

              if (block.type === 'heading') {
                return (
                  <h2 id={block.id} key={index} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-light pt-10 md:pt-14 border-t border-white/10 tracking-wide scroll-mt-32">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="pl-4 md:pl-6 border-l-4 border-primary/60 text-lg sm:text-xl md:text-2xl italic text-text-light/90 font-light leading-relaxed my-6 md:my-12 bg-gradient-to-r from-primary/10 to-transparent py-4 pr-4 md:pr-6 rounded-r-lg">
                    {block.text}
                  </blockquote>
                );
              }

              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-base sm:text-lg md:text-xl text-text-muted leading-[1.8] font-light">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'rule') {
                if (variant === 'legal') {
                  return (
                    <section 
                      id={block.id}
                      key={index}
                      className="scroll-mt-32 pt-8 md:pt-12 mt-8 md:mt-12 border-t border-white/10 first:border-t-0 first:pt-0 first:mt-0"
                    >
                      <h3 className="text-xl md:text-2xl font-medium text-text-light mb-4 md:mb-6 tracking-wide text-primary/90">
                        {block.id}. {block.title}
                      </h3>
                      <div className="space-y-4">
                        {block.body.map((p, i) => (
                          <p key={i} className="text-base sm:text-lg md:text-xl text-text-muted leading-[1.8] font-light">{p.text}</p>
                        ))}
                      </div>
                    </section>
                  );
                }

                return (
                  <motion.section 
                    id={block.id}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group scroll-mt-32"
                  >
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                      <div className="absolute -top-6 -right-6 text-[120px] font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none">
                        {block.id}
                      </div>

                      <div className="flex items-start gap-4 relative z-10">
                        <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary border border-primary/30">
                          <Hash className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-text-light mb-4 tracking-wide group-hover:text-primary transition-colors">
                            {block.id}. {block.title}
                          </h3>
                          <div className="space-y-4">
                            {block.body.map((p, i) => (
                              p.type === 'quote' 
                                ? <blockquote key={i} className="pl-4 border-l-2 border-primary/50 text-lg italic text-text-light/80 my-4">{p.text}</blockquote>
                                : <p key={i} className="text-lg text-text-muted leading-relaxed font-light">{p.text}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              }
              return null;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
