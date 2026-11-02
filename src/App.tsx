import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { CommandPalette } from './components/CommandPalette';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCmdPalette = () => {
      setCommandPaletteOpen(true);
    };
    window.addEventListener('open-command-palette', handleOpenCmdPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenCmdPalette);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyber-cyan/30 selection:text-cyber-cyan font-sans bg-obsidian-950 text-slate-100">
      {/* Interactive 60fps Star & Dust Canvas */}
      <BackgroundCanvas />

      {/* Magnetic Cursor Ring */}
      <CustomCursor />

      {/* Floating Island Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col gap-8">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Shell Terminal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />
    </div>
  );
};

export default App;
