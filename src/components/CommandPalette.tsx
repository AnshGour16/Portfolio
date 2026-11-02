import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Volume2, VolumeX, Mail, Github, Linkedin, FileText, ArrowRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(sound.getIsEnabled());

  useEffect(() => {
    const handleSoundToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      setIsSoundEnabled(customEvent.detail.enabled);
    };
    window.addEventListener('sound-toggle', handleSoundToggle);
    return () => window.removeEventListener('sound-toggle', handleSoundToggle);
  }, []);

  const actions = [
    {
      id: 'projects',
      title: 'Navigate to Projects',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-cyber-cyan" />,
      perform: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'Navigate to Skills & Tech Stack',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-cyber-violet" />,
      perform: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Navigate to Experience & Timeline',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Navigate to Contact Section',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-amber-400" />,
      perform: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'terminal',
      title: 'Open Interactive Shell Terminal',
      category: 'Interactive Tools',
      icon: <Terminal className="w-4 h-4 text-cyber-cyan" />,
      perform: () => {
        onClose();
        setTimeout(onOpenTerminal, 150);
      },
    },
    {
      id: 'toggle-sound',
      title: isSoundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects',
      category: 'Preferences',
      icon: isSoundEnabled ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        sound.toggleMute();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${portfolioData.email})`,
      category: 'Quick Actions',
      icon: <Mail className="w-4 h-4 text-cyber-cyan" />,
      perform: () => {
        navigator.clipboard.writeText(portfolioData.email);
        sound.playSuccess();
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
        onClose();
      },
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${portfolioData.phone})`,
      category: 'Quick Actions',
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        navigator.clipboard.writeText(portfolioData.phone);
        sound.playSuccess();
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
        onClose();
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      perform: () => {
        window.open(portfolioData.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      perform: () => {
        window.open(portfolioData.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          sound.playClick();
          // Trigger open
          const evt = new CustomEvent('open-command-palette');
          window.dispatchEvent(evt);
        }
        return;
      }

      if (e.key === 'Escape') {
        sound.playClick();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          sound.playClick();
          filtered[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose, onOpenTerminal]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-2xl rounded-2xl glass-panel border border-white/15 shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-cyber-cyan" />
            <input
              type="text"
              placeholder="Type a command or jump to section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 text-sm font-sans"
              autoFocus
            />
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-400 border border-white/10">
              ESC
            </span>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-sm text-slate-500 font-mono">
                No matching actions found for "{query}"
              </div>
            ) : (
              filtered.map((action, idx) => (
                <div
                  key={action.id}
                  onClick={() => {
                    sound.playClick();
                    action.perform();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer text-sm font-sans transition-all ${selectedIndex === idx
                      ? 'bg-cyber-cyan/15 text-white border border-cyber-cyan/30'
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                      {action.icon}
                    </div>
                    <div>
                      <div className="font-medium text-slate-100">{action.title}</div>
                      <div className="text-[11px] font-mono text-slate-500">{action.category}</div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${selectedIndex === idx ? 'text-cyber-cyan translate-x-1' : 'text-slate-600'}`} />
                </div>
              ))
            )}
          </div>

          {/* Footer Shortcuts hint */}
          <div className="px-4 py-2 bg-obsidian-950/70 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to execute</span>
            </div>
            <span>Antigravity Fast Command Engine</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
