import React from 'react';
import { LightningCharge, ShieldCheck, Stars, Globe, Clock } from 'react-bootstrap-icons';
import { portfolioService } from '../../services/portfolioService';
import { useCurrentTime } from '../../hooks/useCurrentTime';

export const AboutSection: React.FC = () => {
  const data = portfolioService.getPortfolioData();
  const currentTime = useCurrentTime('Asia/Kolkata');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <LightningCharge className="w-5 h-5 text-cyber-cyan" aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />;
      default:
        return <Stars className="w-5 h-5 text-cyber-violet" aria-hidden="true" />;
    }
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-cyan">
              Engineering Mindset
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
              Beyond Just Code: <span className="gradient-accent">Systems That Endure</span>
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {data.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Timezone / Location status card */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <Globe className="w-4 h-4 text-cyber-cyan" aria-hidden="true" />
              <span>{data.location}</span>
            </div>
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>{currentTime ? `${currentTime} IST` : 'Synchronizing...'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Core Architectural Pillars */}
        <div className="lg:col-span-5 space-y-4">
          {data.about.coreValues.map((val, idx) => (
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

