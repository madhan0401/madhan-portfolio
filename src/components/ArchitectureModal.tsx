import React from 'react';
import { X, ArrowDown, Layers, FileCode2, Cpu, Cloud, CheckCircle, Sparkles } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">API & SDK Pipeline Architecture</h3>
              <p className="text-xs text-slate-400 font-mono-code">Hydrozen.io & Nitrozen.io Engineering Flow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Diagram Canvas */}
        <div className="p-6 overflow-y-auto space-y-8 bg-slate-950/90">
          <p className="text-sm text-slate-300">
            Interactive breakdown of the API Standardization and Automated Infrastructure pipeline built during the software internship at A2 Ventures:
          </p>

          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Step 1: REST API */}
            <div className="glass-panel p-5 rounded-xl border border-blue-500/30 bg-blue-950/20 text-center relative group hover:border-blue-400 transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono-code mb-2">
                <Cloud className="w-3.5 h-3.5" />
                Input Layer
              </div>
              <h4 className="text-lg font-bold text-white">REST API Endpoints</h4>
              <p className="text-xs text-slate-400 mt-1">Hydrozen.io & Nitrozen.io Raw Service Endpoints</p>
            </div>

            <div className="flex justify-center">
              <div className="p-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>

            {/* Step 2: OpenAPI Spec */}
            <div className="glass-panel p-5 rounded-xl border border-cyan-500/40 bg-cyan-950/30 text-center relative group hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-2">
                <FileCode2 className="w-3.5 h-3.5" />
                Standardization Layer
              </div>
              <h4 className="text-xl font-bold text-cyan-300">OpenAPI Specification (OAS 3.0)</h4>
              <p className="text-xs text-slate-300 mt-1">Strict JSON/YAML Schema Contracts & Refactored Endpoints</p>
            </div>

            <div className="flex justify-center gap-12 sm:gap-24 relative py-2">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-cyan-500/40" />
                <ArrowDown className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-cyan-500/40" />
                <ArrowDown className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            {/* Step 3: Parallel Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-5 rounded-xl border border-purple-500/30 bg-purple-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono-code">
                  <Cpu className="w-3.5 h-3.5" />
                  Code Generator
                </div>
                <h5 className="text-base font-bold text-white">Multi-Language SDKs</h5>
                <div className="space-y-1.5 text-xs font-mono-code">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-purple-300">
                    <span>Go SDK</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-purple-300">
                    <span>Python SDK</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-purple-300">
                    <span>JavaScript SDK</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono-code">
                  <Sparkles className="w-3.5 h-3.5" />
                  IaC Integration
                </div>
                <h5 className="text-base font-bold text-white">Terraform Provider</h5>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <span className="text-emerald-400 font-mono-code block">Infrastructure as Code</span>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Enables automated cloud resource provisioning, state management & declarative deployments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono-code">
          <span>A2 Ventures Internship Deliverable</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
          >
            Close Diagram
          </button>
        </div>
      </div>
    </div>
  );
};
