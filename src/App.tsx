import React from 'react';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/features/Hero';
import { AboutSection } from './components/features/AboutSection';
import { ProjectsSection } from './components/features/ProjectsSection';
import { SkillsSection } from './components/features/SkillsSection';
import { ExperienceSection } from './components/features/ExperienceSection';
import { ContactSection } from './components/features/ContactSection';

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
