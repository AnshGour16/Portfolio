import React from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import { portfolioService } from '../../services/portfolioService';

export const Footer: React.FC = () => {
  const data = portfolioService.getPortfolioData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs font-mono text-slate-400">
            Systems Operational • High Performance
          </span>
        </div>

        <div className="text-xs font-mono text-slate-400 text-center">
          Copyright {new Date().getFullYear()} {data.name}. Engineered with React, TypeScript & Tailwind.
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          data-agent-action="scroll-top"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-300 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] group"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

