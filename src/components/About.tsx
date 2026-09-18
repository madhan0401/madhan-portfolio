import React from 'react';
import { GraduationCap, Briefcase, Code, Cpu, Compass, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech IT Student",
      subtitle: "PSG College of Technology",
      description: "Final-year Information Technology student with solid theoretical & practical computer science foundation.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: Briefcase,
      title: "Software Dev Intern",
      subtitle: "A2 Ventures (Hydrozen & Nitrozen)",
      description: "Hands-on experience standardizing REST APIs, generating multi-language SDKs, and developing Terraform providers.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      subtitle: "React, Node.js, Express & Databases",
      description: "Building responsive web platforms with clean architectural patterns, RESTful APIs, and database models.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20"
    },
    {
      icon: Cpu,
      title: "Algorithmic Problem Solving",
      subtitle: "250+ Solved (LeetCode & GFG)",
      description: "Continuous practice in data structures, algorithms, system concepts, and complexity optimization.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="bg-gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Engineering Philosophy & Focus
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {PERSONAL_INFO.bioDetailed}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">API Engineering & Infrastructure:</strong> Experienced in OpenAPI spec standardization, multi-language SDK automation (Go, Python, JS), and Terraform IaC providers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Practical Web Solutions:</strong> Developed CampusCare Hub (Campus Grievance Portal with QR tracking and Supabase auth) and Recipe Recommendation system.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Growth & Adaptability:</strong> Passionate about learning modern software patterns, backend system architecture, and delivering high quality, reliable code.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} border flex items-center justify-center`}>
                      <IconComp className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <p className={`text-xs font-mono-code ${item.color} mt-0.5`}>{item.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
