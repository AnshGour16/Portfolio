import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-4 h-4 text-cyber-cyan" />;
      case 1:
        return <Cpu className="w-4 h-4 text-cyber-violet" />;
      case 2:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      default:
        return <Shield className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-violet">
          Capabilities & Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          Engineering <span className="gradient-accent">Competencies</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Proven proficiency across modern web frameworks, distributed architectures, algorithms, and cloud services.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {portfolioData.skills.map((category, idx) => (
          <button
            key={idx}
            onClick={() => {
              sound.playClick();
              setSelectedTab(idx);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border transition-all duration-200 ${
              selectedTab === idx
                ? 'bg-white/10 border-cyber-cyan text-white shadow-glow-cyan'
                : 'glass-panel border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {getIcon(idx)}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Panel */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto"
      >
        <div className="mb-6 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              {getIcon(selectedTab)}
              {portfolioData.skills[selectedTab].name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {portfolioData.skills[selectedTab].description}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            {portfolioData.skills[selectedTab].skills.length} Technologies
          </span>
        </div>

        {/* Clean Tech Cards Grid - No Percentages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {portfolioData.skills[selectedTab].skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyber-cyan/40 hover:bg-white/[0.04] transition-all duration-300 group flex items-start justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan group-hover:scale-125 transition-transform" />
                  {skill.name}
                </div>
                {skill.highlight && (
                  <p className="text-xs font-mono text-slate-400 pl-3.5">
                    {skill.highlight}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
