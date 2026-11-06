import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Github, BoxArrowUpRight, ChevronRight } from 'react-bootstrap-icons';
import { Project } from '../../types';

interface ProjectCard3DProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <article
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.1 }}
        className="relative group rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between h-full border border-white/10 hover:border-cyber-cyan/40 transition-colors duration-300 overflow-hidden"
      >
        {/* Dynamic Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 240, 255, ${glarePos.opacity}), transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* Ambient Top Glow Border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

        <div>
          {/* Category Badge & Links */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-400/90 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyber-cyan" aria-hidden="true" />
              {project.category}
            </span>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <BoxArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-3 mb-5 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 mb-5 rounded-xl bg-white/[0.02] border border-white/5">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center overflow-hidden">
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mb-0.5 truncate">{metric.label}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-100 font-mono tracking-tight text-glow truncate">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          data-agent-action={`view-${project.id}`}
          className="w-full mt-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wide font-mono uppercase bg-white/[0.04] hover:bg-cyber-cyan/15 text-slate-200 hover:text-cyber-cyan border border-white/10 hover:border-cyber-cyan/40 transition-all flex items-center justify-center gap-2 group/btn focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
        >
          <span>System Architecture & Details</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
        </button>
      </motion.div>
    </article>
  );
};

