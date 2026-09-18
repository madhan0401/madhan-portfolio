import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? SKILL_CATEGORIES.filter((cat) => cat.title === selectedCategory)
    : SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-28 relative z-10 bg-[#06020e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Technical Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="gradient-neon-violet text-glow-purple">Proficiencies</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Technical competencies acquired through B.Tech Information Technology coursework, software development internship, and project execution.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                : 'bg-purple-950/40 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-500/40'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all ${
                selectedCategory === category.title
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-purple-950/40 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Layers;
            return (
              <div
                key={category.title}
                className="glass-panel p-7 rounded-3xl border border-purple-500/25 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-purple-900/40">
                    <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wider font-mono-code">{category.title}</h3>
                      <p className="text-[11px] text-slate-400 font-mono-code">
                        {category.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills Matrix */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const isBeginner = skill.level === 'Beginner';
                      return (
                        <div
                          key={skill.name}
                          className={`group relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl transition-all cursor-default ${
                            isBeginner
                              ? 'bg-purple-950/30 border border-purple-900/40 hover:border-amber-500/40'
                              : 'bg-purple-950/50 border border-purple-500/20 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/20'
                          }`}
                        >
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                            {skill.name}
                          </span>

                          <span
                            className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-md border ${
                              isBeginner
                                ? 'bg-amber-950/40 border-amber-500/30 text-amber-300'
                                : 'bg-purple-900/40 border-purple-500/30 text-purple-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
