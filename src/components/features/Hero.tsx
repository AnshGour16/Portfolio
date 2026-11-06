import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'react-bootstrap-icons';
import { portfolioService } from '../../services/portfolioService';

export const Hero: React.FC = () => {
  const data = portfolioService.getPortfolioData();

  return (
    <section aria-labelledby="hero-name" className="pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Name, Role & Statement */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Main Name & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h1 id="hero-name" className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
              {data.name}
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-accent mt-2.5 tracking-tight">
              {data.title}
            </div>
          </motion.div>

          {/* Up-to-the-point Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8"
          >
            {data.headline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              data-agent-action="explore-projects"
              className="px-6 py-3.5 rounded-2xl bg-white text-obsidian-950 font-bold text-sm tracking-wide font-sans hover:bg-slate-200 transition-all duration-300 shadow-glow-cyan flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              data-agent-action="contact-me"
              className="px-6 py-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-slate-200 hover:text-white text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
            >
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5 text-cyber-cyan transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Photograph Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Photograph Card */}
          <div className="relative w-full max-w-sm rounded-3xl p-2.5 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-obsidian-900">
              <img
                src={data.photoUrl || '/ansh-photo.jpg'}
                alt={data.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Edge Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-black/20 pointer-events-none" aria-hidden="true" />

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {data.name}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400/90">
                    {data.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Metrics Grid Strip */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10"
      >
        {data.stats.map((stat, i) => (
          <div key={i} className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/15 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-glow">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</div>
            <div className="text-[11px] font-mono text-slate-400">{stat.subtext}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
