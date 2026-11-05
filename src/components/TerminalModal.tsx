import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [historyCommands, setHistoryCommands] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with Neofetch on first open
  useEffect(() => {
    if (isOpen && history.length === 0) {
      handleCommand('neofetch');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (!cmd) return;

    sound.playTerminal();
    setHistoryCommands((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyber-cyan font-bold mb-2">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono">
              <div><span className="text-yellow-400 font-bold">neofetch</span> - System specs & summary</div>
              <div><span className="text-yellow-400 font-bold">about</span> - Background & engineering philosophy</div>
              <div><span className="text-yellow-400 font-bold">projects</span> - View production architectures</div>
              <div><span className="text-yellow-400 font-bold">skills</span> - Breakdown of technical stack</div>
              <div><span className="text-yellow-400 font-bold">contact</span> - Direct channels & communication</div>
              <div><span className="text-yellow-400 font-bold">clear</span> - Flush terminal screen</div>
              <div><span className="text-yellow-400 font-bold">sudo</span> - Elevated root execution test</div>
              <div><span className="text-yellow-400 font-bold">matrix</span> - Enter the stream</div>
            </div>
          </div>
        );
        break;

      case 'neofetch':
      case 'fetch':
        output = (
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <pre className="text-cyber-cyan font-bold select-none leading-none">
{`   _____             .__     
  /  _  \\   ____   __|  |__  
 /  /_\\  \\ /    \\ / __  |  | 
/    |    \\   |  \\ /_/  |  |_
\\____|__  /___|  /\\_____|____/
        \\/     \\/            `}
            </pre>
            <div className="space-y-1 text-slate-300">
              <div className="text-cyber-violet font-bold pb-1 border-b border-white/10">
                ansh@chitkara-workstation
              </div>
              <div><span className="text-cyber-cyan">Education:</span> B.E. Computer Science • Chitkara University</div>
              <div><span className="text-cyber-cyan">LeetCode:</span> 225+ Problems Solved</div>
              <div><span className="text-cyber-cyan">Experience:</span> Full Stack Intern @ ESSMEY Pvt Ltd</div>
              <div><span className="text-cyber-cyan">Stack:</span> MERN • Next.js • Gemini API • C++</div>
              <div><span className="text-cyber-cyan">Shell:</span> Zsh 5.9 (x86_64-linux-gnu)</div>
              <div><span className="text-cyber-cyan">Leadership:</span> IEEE Student Chapter Executive</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-slate-300 font-mono text-xs leading-relaxed">
            <p className="text-cyber-cyan font-bold">{portfolioData.headline}</p>
            <p>{portfolioData.about.paragraphs[0]}</p>
            <p>{portfolioData.about.paragraphs[1]}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 font-mono text-xs">
            <p className="text-cyber-cyan font-bold">Featured Production Systems:</p>
            {portfolioData.projects.map((p, i) => (
              <div key={i} className="pl-2 border-l border-cyber-cyan/30">
                <span className="text-white font-bold">{p.title}</span> ({p.category})
                <div className="text-slate-400">{p.tagline}</div>
                <div className="text-emerald-400 text-[11px]">Stack: {p.technologies.slice(0, 4).join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 font-mono text-xs">
            <p className="text-cyber-cyan font-bold">Primary Engineering Proficiencies:</p>
            {portfolioData.skills.map((c, i) => (
              <div key={i}>
                <span className="text-cyber-violet font-bold">{c.name}:</span>{' '}
                <span className="text-slate-300">{c.skills.map(s => s.name).join(' • ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-cyber-cyan font-bold">Direct Communication Channels:</p>
            <div>Email: <a href={`mailto:${portfolioData.email}`} className="text-yellow-400 underline">{portfolioData.email}</a></div>
            <div>Phone: <span className="text-emerald-400">{portfolioData.phone}</span></div>
            <div>GitHub: <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.github}</a></div>
            <div>LinkedIn: <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
      case 'sudo rm -rf /':
        output = (
          <div className="text-rose-400 font-mono text-xs">
            Permission denied: User does not belong to wheel/root group. Nice try, hacker! 😉
          </div>
        );
        break;

      case 'matrix':
        output = (
          <div className="text-emerald-400 font-mono text-xs animate-pulse">
            Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇
          </div>
        );
        break;

      default:
        output = (
          <div className="text-rose-400 font-mono text-xs">
            command not found: {rawCmd}. Type <span className="text-yellow-300 font-bold">help</span> to list available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCmd,
        output,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyCommands.length > 0) {
        const nextIdx = historyIndex + 1 < historyCommands.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(historyCommands[historyCommands.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(historyCommands[historyCommands.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full ${
            isExpanded ? 'max-w-5xl h-[85vh]' : 'max-w-3xl h-[560px]'
          } rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col overflow-hidden z-10 transition-all duration-300 font-mono`}
        >
          {/* Terminal Title Bar */}
          <div className="h-10 px-4 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer" onClick={() => handleCommand('clear')} />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
              <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
                ansh@macbook-pro: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                title={isExpanded ? 'Minimize' : 'Maximize'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-obsidian-950/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-500 shrink-0">Quick run:</span>
            {['neofetch', 'about', 'projects', 'skills', 'contact', 'clear'].map((c) => (
              <button
                key={c}
                onClick={() => handleCommand(c)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyber-cyan/15 hover:text-cyber-cyan text-slate-400 transition-colors shrink-0"
              >
                ${c}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs font-mono select-text"
          >
            {history.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyber-cyan font-bold">➜</span>
                  <span className="text-cyber-violet">~</span>
                  <span className="text-slate-200 font-bold">{log.command}</span>
                </div>
                <div className="pl-4">{log.output}</div>
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyber-cyan font-bold">➜</span>
              <span className="text-cyber-violet">~</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs caret-cyber-cyan"
                placeholder="type a command (e.g. 'help', 'skills', 'about')..."
                autoFocus
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1 rounded text-slate-500 hover:text-cyber-cyan"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

