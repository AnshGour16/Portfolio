import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';
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
          Proven proficiency across the entire modern software lifecycle—from high-throughput microservices to sub-millisecond client interfaces.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
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
        <div className="mb-6 pb-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
            {getIcon(selectedTab)}
            {portfolioData.skills[selectedTab].name}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {portfolioData.skills[selectedTab].description}
          </p>
        </div>

        <div className="space-y-6">
          {portfolioData.skills[selectedTab].skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyber-cyan transition-colors">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                      {skill.highlight}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-cyber-cyan">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="h-2 w-full rounded-full bg-white/[0.05] overflow-hidden p-[1px] border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-violet relative shadow-glow-cyan"
                />
              </div>

              {/* Mobile highlight */}
              {skill.highlight && (
                <div className="sm:hidden text-[11px] font-mono text-slate-400 mt-1">
                  {skill.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
