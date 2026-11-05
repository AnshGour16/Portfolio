import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyber-cyan/30 selection:text-cyber-cyan font-sans bg-obsidian-950 text-slate-100">
      {/* Interactive 60fps Star & Dust Canvas */}
      <BackgroundCanvas />

      {/* Magnetic Cursor Ring */}
      <CustomCursor />

      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col gap-8">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
