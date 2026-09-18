import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Check, 
  Copy,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile.ts' | 'skills.json' | 'status.sh'>('profile.ts');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono-code text-slate-300">
                Available for Software Engineering Roles
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 font-mono-code tracking-wide">
                Software Engineer | Full-Stack Developer
              </h2>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Key Meta Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>PSG College of Technology</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Salem / Coimbatore, TN, India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-semibold text-sm hover:bg-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-semibold transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                Contact Me
              </a>
            </div>

            {/* Social Icons & Email Quick Copy */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-400 font-mono-code uppercase tracking-wider">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-md"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
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

          {/* Right Column: Developer Code Editor Visualizer */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-cyan-950/30">
              
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>madhan-dev-workspace</span>
                </div>
                <div className="w-12" />
              </div>

              {/* IDE Tabs */}
              <div className="flex bg-slate-900/90 border-b border-slate-800/80 font-mono-code text-xs overflow-x-auto">
                <button
                  onClick={() => setActiveTab('profile.ts')}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-slate-800 transition-colors ${
                    activeTab === 'profile.ts'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  profile.ts
                </button>
                <button
                  onClick={() => setActiveTab('skills.json')}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-slate-800 transition-colors ${
                    activeTab === 'skills.json'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  skills.json
                </button>
                <button
                  onClick={() => setActiveTab('status.sh')}
                  className={`px-4 py-2 flex items-center gap-2 transition-colors ${
                    activeTab === 'status.sh'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  status.sh
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 font-mono-code text-xs sm:text-sm bg-slate-950/90 text-slate-200 leading-relaxed overflow-x-auto min-h-[310px]">
                {activeTab === 'profile.ts' && (
                  <div>
                    <div className="text-slate-500">// Software Engineer Specification</div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">engineer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">name</span>: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">role</span>: <span className="text-emerald-300">"Software Engineer | Full-Stack"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">education</span>: &#123;
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-300">degree</span>: <span className="text-emerald-300">"B.Tech Information Technology"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-300">college</span>: <span className="text-emerald-300">"PSG College of Technology"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-300">year</span>: <span className="text-amber-300">"Final Year (2026)"</span>
                    </div>
                    <div className="pl-4">&#125;,</div>
                    <div className="pl-4">
                      <span className="text-blue-300">internship</span>: <span className="text-emerald-300">"A2 Ventures (Dec 2025 – Apr 2026)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">passions</span>: [<span className="text-emerald-300">"Full-Stack Web"</span>, <span className="text-emerald-300">"API Dev"</span>, <span className="text-emerald-300">"DSA"</span>]
                    </div>
                    <div>&#125;;</div>
                    <div className="mt-3 text-slate-400">
                      <span className="text-purple-400">console</span>.<span className="text-yellow-300">log</span>(engineer.<span className="text-blue-300">role</span> + <span className="text-emerald-300">" Ready for Opportunities!"</span>);
                    </div>
                  </div>
                )}

                {activeTab === 'skills.json' && (
                  <div>
                    <div className="text-slate-500">// Technical Stack Snapshot</div>
                    <div>&#123;</div>
                    <div className="pl-4"><span className="text-purple-300">"languages"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"SQL"</span>],</div>
                    <div className="pl-4"><span className="text-purple-300">"frontend"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>],</div>
                    <div className="pl-4"><span className="text-purple-300">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"REST APIs"</span>, <span className="text-emerald-300">"OpenAPI"</span>],</div>
                    <div className="pl-4"><span className="text-purple-300">"databases"</span>: [<span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"Supabase"</span>],</div>
                    <div className="pl-4"><span className="text-purple-300">"tools"</span>: [<span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"GitHub"</span>, <span className="text-emerald-300">"Postman"</span>, <span className="text-emerald-300">"Terraform"</span>],</div>
                    <div className="pl-4"><span className="text-purple-300">"dsaSolved"</span>: <span className="text-amber-400">"250+ Problems"</span></div>
                    <div>&#125;</div>
                  </div>
                )}

                {activeTab === 'status.sh' && (
                  <div className="space-y-1.5">
                    <div className="text-slate-500"># System Status Check</div>
                    <div className="text-slate-300">$ ./check_status.sh --candidate="Madhan M"</div>
                    <div className="text-emerald-400">[OK] B.Tech IT Degree: PSG College of Technology</div>
                    <div className="text-emerald-400">[OK] Internship: Software Dev Intern @ A2 Ventures</div>
                    <div className="text-emerald-400">[OK] Key Projects: CampusCare Hub, API & SDK Automation</div>
                    <div className="text-cyan-400">[OK] LeetCode: 200+ Problems Solved</div>
                    <div className="text-cyan-400">[OK] GeeksforGeeks: 50+ Problems Solved</div>
                    <div className="text-amber-400 mt-2">&gt; Status: Open for Software Engineering Opportunities 🚀</div>
                  </div>
                )}
              </div>

              {/* Window Footer Status */}
              <div className="bg-slate-950 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  UTF-8
                </span>
                <span>TypeScript 5.0 • React 18</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
