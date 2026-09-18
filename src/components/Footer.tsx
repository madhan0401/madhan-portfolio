import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold font-mono-code text-white">
              <span className="text-cyan-400">&lt;</span>
              <span>Madhan.M</span>
              <span className="text-cyan-400"> /&gt;</span>
            </a>
            <p className="text-sm font-mono-code text-slate-400">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-500">
              {PERSONAL_INFO.institution}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
              title="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono-code text-slate-500">
          <p>© 2026 Madhan M. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
