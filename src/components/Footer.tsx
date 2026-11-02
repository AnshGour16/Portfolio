import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400">
            All Systems Operational • Latency 14ms
          </span>
        </div>

        <div className="text-xs font-mono text-slate-400 text-center">
          © {new Date().getFullYear()} {portfolioData.name}. Engineered with React, TypeScript & Tailwind.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white transition-all group"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
