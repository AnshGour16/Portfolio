import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BoxArrowUpRight, Github, CheckCircle, Layers, Cpu, Award } from 'react-bootstrap-icons';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium uppercase px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                {project.category}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 mt-1 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-3 p-4 mb-6 rounded-2xl bg-white/[0.03] border border-white/10">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-mono text-slate-400 mb-1">{m.label}</div>
                <div className="text-base sm:text-xl font-bold font-mono text-cyber-cyan">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Narrative */}
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyber-violet" aria-hidden="true" />
                System Overview
              </h3>
              <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5 text-slate-300">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Key Technical Architecture
              </h3>
              <div className="space-y-2.5">
                {project.architectureDetails.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-200 text-xs sm:text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Tools Deployed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>View Source</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-cyber-cyan/15 hover:bg-cyber-cyan/25 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono flex items-center gap-2 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
                >
                  <BoxArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  <span>Open System</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none px-2 py-1 rounded"
            >
              Close Window (Esc)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

