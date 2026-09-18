import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Check, 
  Copy,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Orbital Line Visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/15 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 shadow-lg shadow-purple-950/50 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono-code text-purple-300 tracking-wide font-medium">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            {/* Huge Editorial Heading */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-none">
                {PERSONAL_INFO.title}
              </h1>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold gradient-neon-violet tracking-tight text-glow-purple">
                {PERSONAL_INFO.subtitle}
              </h2>
            </div>

            {/* Short Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Meta Info Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/20">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>PSG College of Technology</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/20">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Salem / Coimbatore, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-purple-200 font-semibold text-sm hover:bg-purple-900/60 hover:border-purple-400 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-purple-400" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 text-sm font-semibold transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-purple-900/40 w-full">
              <span className="text-xs text-slate-400 font-mono-code uppercase tracking-wider">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:scale-110 transition-all shadow-md"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:scale-110 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono-code text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-purple-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Abstract Developer Terminal Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              
              {/* Neon Glow Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              {/* Floating Glass Terminal Window */}
              <div className="relative glass-panel rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/60 card-tilt">
                
                {/* Terminal Header */}
                <div className="bg-[#080414] px-4 py-3 border-b border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-purple-300">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>madhan@portfolio:~</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Shell Interface Content */}
                <div className="p-6 font-mono-code text-xs sm:text-sm bg-[#06020e]/95 text-slate-200 leading-relaxed overflow-x-auto min-h-[300px] space-y-2">
                  <div className="text-purple-400">&gt; madhan@portfolio:~ $ npm run build</div>
                  <div className="text-slate-400">[info] compiling full-stack modules...</div>
                  <div className="text-slate-400">[info] indexing React, TypeScript, Node.js &amp; APIs...</div>
                  <div className="text-emerald-400 font-bold">&gt; deployment successful</div>
                  
                  <div className="pt-3 border-t border-purple-900/40 text-xs space-y-1">
                    <div><span className="text-purple-400">developer</span>: <span className="text-white">Madhan M</span></div>
                    <div><span className="text-purple-400">college</span>: <span className="text-slate-300">PSG College of Technology</span></div>
                    <div><span className="text-purple-400">stack</span>: <span className="text-slate-300">Python, React, Node.js, SQL, OpenAPI</span></div>
                    <div><span className="text-purple-400">dsaSolved</span>: <span className="text-amber-400">250+ Problems</span></div>
                    <div><span className="text-purple-400">status</span>: <span className="text-emerald-400 font-bold">Available for Hiring 🚀</span></div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-purple-300">
                    <Cpu className="w-4 h-4 text-purple-400 animate-spin-slow" />
                    <span className="animate-pulse">_</span>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="bg-[#080414] px-4 py-2 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_#34d399]" />
                    Node v20.x • Production
                  </span>
                  <span className="text-purple-400 font-mono-code">Full-Stack Stack</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
