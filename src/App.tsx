import React, { useState } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ProblemSolving } from './components/ProblemSolving';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background visual canvas & ambient grids */}
      <BackgroundParticles />

      {/* Main Sticky Header Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <ProblemSolving />
        <Education />
        <Interests />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
