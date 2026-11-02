import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Project } from '../types';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Distributed Systems', 'Full-Stack', 'AI & APIs', 'Cloud & DevOps'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-cyan flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Engineering Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-accent">Systems & Architectures</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
            Production-grade systems built with high concurrency, resilient fallbacks, and microsecond performance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 relative ${
                activeCategory === cat
                  ? 'text-obsidian-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-cyber-cyan rounded-xl z-0"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard3D
                project={project}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* System Architecture Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
