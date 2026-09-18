import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            Academic Education
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-neon-violet text-glow-purple">Background</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Formal education in Information Technology and Computer Engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Vertical Elegant Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-purple-500/25 glass-panel-hover flex flex-col justify-between space-y-6 card-tilt"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono-code font-bold">
                    {edu.duration}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-purple-950/60 border border-purple-500/20 text-purple-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-base font-semibold text-purple-300">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-purple-900/40 text-xs font-mono-code">
                <div className="flex items-center gap-1.5 font-bold text-amber-300 bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-500/30">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{edu.grade}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
