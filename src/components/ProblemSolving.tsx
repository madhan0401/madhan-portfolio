import React, { useState } from 'react';
import { Terminal, ExternalLink, Code2, CheckCircle2, Flame } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'binary_search.py' | 'lru_cache.py' | 'two_pointers.java'>('binary_search.py');

  return (
    <section id="dsa" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            Algorithmic Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Problem <span className="bg-gradient-text">Solving</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            I regularly practice Data Structures and Algorithms to strengthen my algorithmic thinking and problem-solving skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Top Grid: Metrics & Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 space-y-6">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Algorithmic Track Record
              </h3>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono-code">250+</div>
                  <div className="text-[11px] text-slate-400 font-mono-code mt-1">Total Solved</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono-code">200+</div>
                  <div className="text-[11px] text-slate-400 font-mono-code mt-1">LeetCode</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono-code">50+</div>
                  <div className="text-[11px] text-slate-400 font-mono-code mt-1">GeeksforGeeks</div>
                </div>
              </div>

              {/* Topics Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                  Core Topics Practiced:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Arrays & Hashing', 'Two Pointers', 'Binary Search', 'Trees & BST', 'Dynamic Programming', 'Graphs', 'SQL Optimization'].map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono-code"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platform Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                <a
                  href="https://leetcode.com/madhan0401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono-code font-bold hover:bg-amber-500/20 transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  View LeetCode Profile
                </a>
                <a
                  href="https://geeksforgeeks.org/user/madhan0401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono-code font-bold hover:bg-emerald-500/20 transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  View GeeksforGeeks
                </a>
              </div>

            </div>
          </div>

          {/* Right Code Visualizer Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl">
              
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>algorithmic-patterns</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Tabs */}
              <div className="flex bg-slate-900/90 border-b border-slate-800 text-xs font-mono-code">
                <button
                  onClick={() => setActiveTab('binary_search.py')}
                  className={`px-4 py-2 border-r border-slate-800 transition-colors ${
                    activeTab === 'binary_search.py'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  binary_search.py
                </button>
                <button
                  onClick={() => setActiveTab('lru_cache.py')}
                  className={`px-4 py-2 border-r border-slate-800 transition-colors ${
                    activeTab === 'lru_cache.py'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  lru_cache.py
                </button>
                <button
                  onClick={() => setActiveTab('two_pointers.java')}
                  className={`px-4 py-2 border-r border-slate-800 transition-colors ${
                    activeTab === 'two_pointers.java'
                      ? 'bg-slate-950 text-cyan-400 border-t-2 border-t-cyan-400 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  two_pointers.java
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-5 bg-slate-950 font-mono-code text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto min-h-[260px]">
                {activeTab === 'binary_search.py' && (
                  <div>
                    <div className="text-slate-500"># Optimal Binary Search Implementation - O(log N) Time</div>
                    <div><span className="text-purple-400">def</span> <span className="text-blue-300">search</span>(nums: <span className="text-cyan-300">list[int]</span>, target: <span className="text-cyan-300">int</span>) -&gt; <span className="text-cyan-300">int</span>:</div>
                    <div className="pl-4">left, right = <span className="text-amber-300">0</span>, <span className="text-yellow-300">len</span>(nums) - <span className="text-amber-300">1</span></div>
                    <div className="pl-4"><span className="text-purple-400">while</span> left &lt;= right:</div>
                    <div className="pl-8">mid = left + (right - left) // <span className="text-amber-300">2</span></div>
                    <div className="pl-8"><span className="text-purple-400">if</span> nums[mid] == target:</div>
                    <div className="pl-12"><span className="text-purple-400">return</span> mid</div>
                    <div className="pl-8"><span className="text-purple-400">elif</span> nums[mid] &lt; target:</div>
                    <div className="pl-12">left = mid + <span className="text-amber-300">1</span></div>
                    <div className="pl-8"><span className="text-purple-400">else</span>:</div>
                    <div className="pl-12">right = mid - <span className="text-amber-300">1</span></div>
                    <div className="pl-4"><span className="text-purple-400">return</span> -<span className="text-amber-300">1</span></div>
                  </div>
                )}

                {activeTab === 'lru_cache.py' && (
                  <div>
                    <div className="text-slate-500"># LRU Cache Design with Hash Map & Doubly Linked List</div>
                    <div><span className="text-purple-400">class</span> <span className="text-yellow-300">LRUCache</span>:</div>
                    <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self, capacity: <span className="text-cyan-300">int</span>):</div>
                    <div className="pl-8">self.cap = capacity</div>
                    <div className="pl-8">self.cache = &#123;&#125; <span className="text-slate-500"># key -&gt; Node</span></div>
                    <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">get</span>(self, key: <span className="text-cyan-300">int</span>) -&gt; <span className="text-cyan-300">int</span>:</div>
                    <div className="pl-8"><span className="text-purple-400">if</span> key <span className="text-purple-400">in</span> self.cache:</div>
                    <div className="pl-12">self._move_to_head(self.cache[key])</div>
                    <div className="pl-12"><span className="text-purple-400">return</span> self.cache[key].val</div>
                    <div className="pl-8"><span className="text-purple-400">return</span> -<span className="text-amber-300">1</span></div>
                  </div>
                )}

                {activeTab === 'two_pointers.java' && (
                  <div>
                    <div className="text-slate-500">// Two Pointers - Container With Most Water</div>
                    <div><span className="text-purple-400">public int</span> <span className="text-blue-300">maxArea</span>(<span className="text-purple-400">int</span>[] height) &#123;</div>
                    <div className="pl-4"><span className="text-purple-400">int</span> left = <span className="text-amber-300">0</span>, right = height.length - <span className="text-amber-300">1</span>;</div>
                    <div className="pl-4"><span className="text-purple-400">int</span> maxArea = <span className="text-amber-300">0</span>;</div>
                    <div className="pl-4"><span className="text-purple-400">while</span> (left &lt; right) &#123;</div>
                    <div className="pl-8"><span className="text-purple-400">int</span> currentArea = Math.min(height[left], height[right]) * (right - left);</div>
                    <div className="pl-8">maxArea = Math.max(maxArea, currentArea);</div>
                    <div className="pl-8"><span className="text-purple-400">if</span> (height[left] &lt; height[right]) left++;</div>
                    <div className="pl-8"><span className="text-purple-400">else</span> right--;</div>
                    <div className="pl-4">&#125;</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> maxArea;</div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono-code">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Time: O(N) / O(log N)
                </span>
                <span>Space Complexity: O(1)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
