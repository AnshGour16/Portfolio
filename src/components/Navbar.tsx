import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo - Clean with Name only */}
        <a
          href="#"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center font-bold text-obsidian-950 font-mono text-sm shadow-glow-cyan group-hover:scale-105 transition-transform">
            AG
          </div>
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
            {portfolioData.name}
          </span>
        </a>

        {/* Desktop Nav Island */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-2xl glass-panel border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls Island - No Sound Button */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel border border-white/10 hover:border-cyber-cyan/40 text-xs font-mono text-slate-200 hover:text-white transition-all duration-300 group"
          >
            <span>Connect</span>
            <Send className="w-3.5 h-3.5 text-cyber-cyan transition-transform group-hover:translate-x-0.5" />
          </a>

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
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:bg-white/5 hover:text-cyber-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-bold transition-colors"
            >
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
