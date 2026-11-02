import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
          Career Trajectory
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          Experience & <span className="gradient-accent">Milestones</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
          A track record of shipping robust production code and leading infrastructure modernization.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Glowing Node */}
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

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
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
      </div>
    </section>
  );
};
