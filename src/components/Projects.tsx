import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Star,
  Network,
  ShieldCheck,
  QrCode,
  Users,
  Layers
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ArchitectureModal } from './ArchitectureModal';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [architectureOpen, setArchitectureOpen] = useState(false);

  return (
    <section id="projects" className="py-28 relative z-10 bg-[#06020e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            Selected Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Software <span className="gradient-neon-violet text-glow-purple">Projects</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Full-stack web applications, REST API specifications, multi-language SDK automation, and database systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Asymmetric Alternating Project Showcase Stack */}
        <div className="space-y-16">
          
          {/* PROJECT 1: CampusCare Hub (FEATURED) - Content Left, Visual Right */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/40 card-tilt relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono-code font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    FEATURED PROJECT
                  </span>
                  <span className="text-xs font-mono-code text-purple-400 uppercase tracking-wider">
                    {PROJECTS[0].tagline}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {PROJECTS[0].title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {PROJECTS[0].description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PROJECTS[0].features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/15">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {PROJECTS[0].technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-purple-900/40">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-slate-300 text-xs font-mono-code hover:text-purple-300 hover:border-purple-400 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Code Repository
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs font-mono-code hover:opacity-90 transition-all shadow-md shadow-purple-600/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Right Abstract Dashboard UI Visual Representation */}
              <div className="lg:col-span-6">
                <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-[#070314]/90 space-y-4 shadow-xl">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 text-xs font-mono-code text-purple-300">
                    <span className="flex items-center gap-2 font-bold text-white">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      CampusCare Portal Pipeline
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30 text-emerald-400">
                      Active Analytics
                    </span>
                  </div>

                  {/* Grievance Flow Diagram */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono-code">
                    <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                        <Users className="w-3.5 h-3.5" /> Students / Staff
                      </div>
                      <p className="text-[11px] text-slate-400">QR-Based Grievance Submission</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
                        <QrCode className="w-3.5 h-3.5" /> Task Assignment
                      </div>
                      <p className="text-[11px] text-slate-400">Department Routing</p>
                    </div>
                  </div>

                  {/* Live Status Board Mockup */}
                  <div className="p-4 rounded-xl bg-[#0a051d] border border-purple-500/25 space-y-2 text-xs font-mono-code">
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Complaint #CC-2026-89</span>
                      <span className="text-purple-400">Supabase Auth Verified</span>
                    </div>
                    <div className="w-full bg-purple-950 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[85%] rounded-full shadow-[0_0_8px_#a855f7]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span>Status: In Resolution</span>
                      <span className="text-emerald-400 font-bold">85% Processed</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 2: API Standardization & SDK Development - Content Right, Visual Left */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 glass-panel-hover card-tilt">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Visual: Architecture Flow Diagram Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-[#070314]/90 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 text-xs font-mono-code text-purple-300">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Network className="w-4 h-4 text-purple-400" /> API &amp; SDK Architecture
                    </span>
                    <span className="text-purple-400">A2 Ventures Internship</span>
                  </div>

                  <div className="space-y-3 text-xs font-mono-code">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/20 text-center text-white font-bold">
                      REST API (Hydrozen.io &amp; Nitrozen.io)
                    </div>
                    <div className="flex justify-center text-purple-400">↓</div>
                    <div className="p-3 rounded-xl bg-purple-900/50 border border-purple-500/40 text-center text-purple-200 font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                      OpenAPI Specification (OAS 3.0)
                    </div>
                    <div className="flex justify-center gap-12 text-purple-400">
                      <span>↓</span>
                      <span>↓</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/20 text-center text-slate-300 text-[11px]">
                        SDKs: Go • Python • JS
                      </div>
                      <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/20 text-center text-emerald-300 text-[11px]">
                        Terraform Provider (IaC)
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setArchitectureOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-300 font-bold text-xs font-mono-code hover:bg-purple-900/50 transition-all"
                  >
                    <Layers className="w-4 h-4 text-purple-400" />
                    Open Interactive Architecture Visualizer
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-mono-code text-purple-400 uppercase tracking-wider">
                  {PROJECTS[1].tagline}
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {PROJECTS[1].title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {PROJECTS[1].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PROJECTS[1].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/15">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {PROJECTS[1].technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 3: Recipe Recommendation Website - Content Left, Visual Right */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 glass-panel-hover card-tilt">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono-code text-purple-400 uppercase tracking-wider">
                  {PROJECTS[2].tagline}
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {PROJECTS[2].title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {PROJECTS[2].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PROJECTS[2].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/15">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {PROJECTS[2].technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-purple-900/40">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-slate-300 text-xs font-mono-code hover:text-purple-300 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Code Repository
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs font-mono-code hover:opacity-90 transition-all shadow-md shadow-purple-600/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Right Culinary Preview Mockup */}
              <div className="lg:col-span-6">
                <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-[#070314]/90 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 text-xs font-mono-code text-purple-300">
                    <span className="font-bold text-white">Culinary Recommendation UI</span>
                    <span className="text-purple-400">Spoonacular API</span>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-2 text-xs font-mono-code">
                    <div className="text-purple-300 font-bold">&gt; GET /api/recipes/recommend</div>
                    <div className="text-slate-300">Params: ingredients=["tomato", "basil"], time&lt;30m</div>
                    <div className="text-emerald-400">&gt; Status 200 OK — 14 Recipes Matched</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Architecture Diagram Modal */}
      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />
    </section>
  );
};
