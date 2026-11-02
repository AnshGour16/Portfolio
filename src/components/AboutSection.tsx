import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Sparkles, Clock, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST or standard local format
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyber-cyan" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyber-violet" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-cyan">
              Engineering Mindset
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
              Beyond Just Code: <span className="gradient-accent">Systems That Endure</span>
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {portfolioData.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Timezone / Location status card */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <Globe className="w-4 h-4 text-cyber-cyan" />
              <span>{portfolioData.location}</span>
            </div>
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{currentTime ? `${currentTime} IST` : 'Synchronizing...'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Core Architectural Pillars */}
        <div className="lg:col-span-5 space-y-4">
          {portfolioData.about.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {val.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

