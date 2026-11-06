import React, { useState } from 'react';
import { List, X } from 'react-bootstrap-icons';
import { portfolioService } from '../../services/portfolioService';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = portfolioService.getPortfolioData();

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Link (Text only, no logo badge) */}
        <a
          href="#"
          aria-label={`${data.name} Home`}
          data-agent-action="home"
          className="px-4 py-2 rounded-2xl glass-panel border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] flex items-center group"
        >
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
            {data.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-2xl glass-panel border border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          className="md:hidden p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <List className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-white/15 shadow-2xl pointer-events-auto space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-mono text-slate-200 hover:bg-white/5 hover:text-cyber-cyan transition-colors focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none min-h-[44px]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
