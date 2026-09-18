import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
          ? 'bg-[#060312]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-xl shadow-purple-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-lg font-extrabold text-white tracking-tight"
        >
          <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:border-purple-400 group-hover:scale-105 transition-all shadow-sm shadow-purple-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-sans">
            <span className="text-white group-hover:text-purple-300 transition-colors">{PERSONAL_INFO.name}</span>
          </span>
        </a>

        {/* Center/Right Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'text-purple-300 bg-purple-500/10 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/20'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-200 bg-gradient-to-r from-purple-900/80 to-purple-950 border border-purple-500/40 rounded-xl hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            Resume
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070314]/95 backdrop-blur-2xl border-b border-purple-500/30 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 border border-transparent hover:border-purple-500/20 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                )}
              </a>
            ))}
            <div className="pt-4 border-t border-purple-900/40 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-500/30 hover:opacity-90 transition-all"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
