import React, { useState } from 'react';
import { ExternalLink, Code2, Flame } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProblemSolving: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const pipelineSteps = [
    { title: "Array / Hash Map", desc: "Data Structuring & Lookup - O(1)" },
    { title: "Two Pointer", desc: "Space Optimization - O(N)" },
    { title: "Sliding Window", desc: "Subarray Traversal Logic" },
    { title: "Binary Search", desc: "Logarithmic Search Space - O(log N)" },
    { title: "Optimization", desc: "Time & Space Complexity Tuning" }
  ];

  return (
    <section id="dsa" className="py-28 relative z-10 bg-[#06020e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-purple-400" />
            Algorithmic Thinking
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Problem <span className="gradient-neon-violet text-glow-purple">Solving</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            I regularly practice Data Structures and Algorithms to strengthen my algorithmic thinking and problem-solving skills.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_#a855f7]" />
        </div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto">
          <div className="glass-panel p-6 rounded-2xl border border-purple-500/25 text-center space-y-1 card-tilt">
            <div className="text-3xl font-extrabold text-purple-400 font-mono-code">250+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Problems Solved</div>
            <div className="text-[11px] text-slate-400 font-mono-code">Total Across Platforms</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-purple-500/25 text-center space-y-1 card-tilt">
            <div className="text-3xl font-extrabold text-indigo-400 font-mono-code">200+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">LeetCode</div>
            <div className="text-[11px] text-slate-400 font-mono-code">Arrays, Trees, DP &amp; Graphs</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-purple-500/25 text-center space-y-1 card-tilt">
            <div className="text-3xl font-extrabold text-amber-400 font-mono-code">50+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">GeeksforGeeks</div>
            <div className="text-[11px] text-slate-400 font-mono-code">CS Fundamentals &amp; Core DSA</div>
          </div>
        </div>

        {/* Coding-Inspired Algorithmic Visual Pipeline */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 max-w-5xl mx-auto space-y-8 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-purple-900/40 pb-4 text-xs font-mono-code">
            <span className="flex items-center gap-2 font-bold text-white">
              <Code2 className="w-4 h-4 text-purple-400" />
              Algorithmic Problem-Solving Pipeline
            </span>
            <span className="text-purple-400">Pattern-Driven Approach</span>
          </div>

          {/* Visual Step Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-center space-y-2 ${
                  activeStep === idx
                    ? 'bg-purple-900/40 border-purple-400 shadow-[0_0_15px_#a855f7] scale-105'
                    : 'bg-purple-950/30 border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <div className="text-[10px] font-mono-code text-purple-400 font-bold uppercase">
                  Step 0{idx + 1}
                </div>
                <div className="text-xs font-bold text-white">
                  {step.title}
                </div>
                <div className="text-[10px] text-slate-400 font-mono-code leading-tight">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons for Profiles (Using Placeholders as Required) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-purple-900/40">
            <a
              href={PERSONAL_INFO.leetcode}
              onClick={(e) => { if (PERSONAL_INFO.leetcode === '#') e.preventDefault(); }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-mono-code font-bold hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4 text-purple-400" />
              View LeetCode
            </a>

            <a
              href={PERSONAL_INFO.geeksforgeeks}
              onClick={(e) => { if (PERSONAL_INFO.geeksforgeeks === '#') e.preventDefault(); }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-mono-code font-bold hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4 text-purple-400" />
              View GeeksforGeeks
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
