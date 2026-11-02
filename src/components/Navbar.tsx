import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, Command } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(sound.getIsEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleSoundToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      setIsSoundEnabled(customEvent.detail.enabled);
    };
    window.addEventListener('sound-toggle', handleSoundToggle);
    return () => window.removeEventListener('sound-toggle', handleSoundToggle);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center font-bold text-obsidian-950 font-mono text-sm shadow-glow-cyan group-hover:scale-105 transition-transform">
            AG
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
              {portfolioData.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {portfolioData.handle}
            </span>
          </div>
        </a>

        {/* Desktop Nav Island */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-2xl glass-panel border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick()}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls Island */}
        <div className="flex items-center gap-2">
          {/* Cmd+K Trigger Pill */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-400 hover:text-white hover:border-cyber-cyan/40 transition-colors"
            title="Open Command Palette (Ctrl+K or Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-400 border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors flex items-center gap-1.5"
            title="Open Interactive Shell"
          >
            <Terminal className="w-4 h-4 text-cyber-cyan" />
            <span className="hidden sm:inline">Shell</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              sound.toggleMute();
            }}
            className={`p-2 rounded-xl glass-panel border transition-colors ${
              isSoundEnabled
                ? 'border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan'
                : 'border-white/10 text-slate-500 hover:text-slate-300'
            }`}
            title={isSoundEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
          >
            {isSoundEnabled ? (
              <div className="flex items-center gap-1">
                <Volume2 className="w-4 h-4" />
                <span className="flex gap-0.5 h-3 items-end">
                  <span className="w-0.5 h-2 bg-cyber-cyan animate-pulse" />
                  <span className="w-0.5 h-3 bg-cyber-cyan animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 h-1.5 bg-cyber-cyan animate-pulse" style={{ animationDelay: '0.4s' }} />
                </span>
              </div>
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-white/15 shadow-2xl pointer-events-auto space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:bg-white/5 hover:text-cyber-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 p-2"
            >
              <Command className="w-4 h-4 text-cyber-cyan" />
              Command Palette
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 p-2"
            >
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              Terminal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
