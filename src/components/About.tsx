import React from 'react';
import { Compass, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    { metric: "250+", label: "Coding Problems", sub: "LeetCode & GeeksforGeeks", color: "text-purple-400" },
    { metric: "3+", label: "Full-Stack Applications", sub: "Production Web Projects", color: "text-indigo-400" },
    { metric: "4 Months", label: "Software Internship", sub: "A2 Ventures Remote", color: "text-emerald-400" },
    { metric: "97.5%", label: "Diploma Score", sub: "Muthayammal Polytech", color: "text-amber-400" }
  ];

  return (
    <section id="about" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            Background &amp; Profile
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-neon-violet text-glow-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Asymmetric Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 relative overflow-hidden card-tilt">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-purple-400" />
                Software Engineering Journey
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {PERSONAL_INFO.bioDetailed}
              </p>

              <div className="space-y-4 pt-6 border-t border-purple-900/40">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-purple-950/30 border border-purple-500/15">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-snug">
                    <strong className="text-white">B.Tech IT at PSG Tech:</strong> Final-year student focusing on software architecture, API design, and Data Structures &amp; Algorithms.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-purple-950/30 border border-purple-500/15">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-snug">
                    <strong className="text-white">Software Internship:</strong> Standardized REST APIs using OpenAPI, generated multi-language SDKs (Go, Python, JS), and developed Terraform IaC providers.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-purple-950/30 border border-purple-500/15">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-snug">
                    <strong className="text-white">Continuous Growth:</strong> Problem-solving practice with 250+ solved algorithmic problems on LeetCode and GeeksforGeeks.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Floating Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-purple-500/25 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className={`text-4xl font-extrabold font-mono-code ${stat.color} tracking-tight block`}>
                    {stat.metric}
                  </span>
                  <h4 className="text-base font-bold text-white">{stat.label}</h4>
                </div>
                <p className="text-xs text-slate-400 font-mono-code pt-2 border-t border-purple-900/30">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
