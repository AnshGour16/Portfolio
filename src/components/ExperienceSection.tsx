import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, GraduationCap, Award, Users, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'leadership'>('experience');

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
          Career, Education & Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          Experience & <span className="gradient-accent">Milestones</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
          Proven track record in production software engineering, campus leadership, and computational problem-solving.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-12">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('experience');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono border transition-all ${
            activeTab === 'experience'
              ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <Briefcase className="w-4 h-4 text-cyber-cyan" />
          <span>Work Experience</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('education');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono border transition-all ${
            activeTab === 'education'
              ? 'bg-cyber-violet/15 border-cyber-violet text-white shadow-glow-violet'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-cyber-violet" />
          <span>Education</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('leadership');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono border transition-all ${
            activeTab === 'leadership'
              ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-glow-cyan'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4 text-emerald-400" />
          <span>Leadership & Honors</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* WORK EXPERIENCE */}
        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10"
          >
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-cyber-cyan group-hover:scale-125 group-hover:bg-cyber-cyan transition-all duration-300 shadow-glow-cyan" />

                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-cyber-cyan/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-cyber-violet" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 hidden sm:flex">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 font-normal leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* EDUCATION */}
        {activeTab === 'education' && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyber-violet/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyber-violet/15 text-cyber-violet border border-cyber-violet/30 flex items-center gap-1.5 font-bold">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyber-violet transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm text-slate-300 font-medium mt-1">
                  {edu.institution}
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed border-t border-white/5 pt-3">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* LEADERSHIP & HONORS */}
        {activeTab === 'leadership' && (
          <motion.div
            key="leadership"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {portfolioData.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{resp.role}</h4>
                  <div className="text-xs font-mono text-emerald-400 mb-3">{resp.organization}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{resp.description}</p>
                </div>
              ))}
            </div>

            {/* Extracurricular & Cricket Achievements */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 mt-6">
              <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4 font-bold">
                <Trophy className="w-4 h-4" />
                Key Achievements & Extracurriculars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-200"
                  >
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
