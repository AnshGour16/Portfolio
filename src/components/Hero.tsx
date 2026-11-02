import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono self-start mb-6 shadow-glow-cyan"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>{portfolioData.status}</span>
      </motion.div>

      {/* Main Headline */}
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
        >
          Architecting <span className="gradient-accent">fault-tolerant</span> systems & modern web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 mt-6 max-w-2xl font-normal leading-relaxed"
        >
          {portfolioData.subheadline}
        </motion.p>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 mt-8"
      >
        {/* Primary CTA */}
        <a
          href="#projects"
          onClick={() => sound.playClick()}
          className="px-6 py-3.5 rounded-2xl bg-white text-obsidian-950 font-bold text-sm tracking-wide font-sans hover:bg-slate-200 transition-all duration-300 shadow-glow-cyan flex items-center gap-2 group"
        >
          <span>Explore Architectures</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </a>

        {/* Terminal Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenTerminal();
          }}
          className="px-6 py-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-slate-200 hover:text-white font-mono text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
        >
          <Terminal className="w-4 h-4 text-cyber-cyan" />
          <span>Launch Shell</span>
        </button>

        {/* Contact CTA */}
        <a
          href="#contact"
          onClick={() => sound.playClick()}
          className="px-5 py-3.5 rounded-2xl text-slate-400 hover:text-white text-sm font-sans transition-colors flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <Send className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* Live Metrics Grid Strip */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
      >
        {portfolioData.stats.map((stat, i) => (
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
