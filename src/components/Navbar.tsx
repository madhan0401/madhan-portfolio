import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Problem Solving', href: '#dsa' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold font-mono-code text-white tracking-tight"
        >
          <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
            <Code2 className="w-5 h-5" />
          </span>
          <span>
            <span className="text-cyan-400">&lt;</span>
            <span className="group-hover:text-cyan-300 transition-colors">Madhan.M</span>
            <span className="text-cyan-400"> /&gt;</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-gradient-to-r from-cyan-950/80 to-slate-900 border border-cyan-500/40 rounded-lg hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Resume
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
              >
                <FileText className="w-5 h-5" />
                View / Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
