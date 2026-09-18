import React from 'react';
import { X, ArrowDown, Layers, FileCode2, Cpu, Cloud, CheckCircle, Sparkles } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030108]/85 backdrop-blur-xl animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#070314] p-6 border-b border-purple-900/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">API &amp; SDK Pipeline Architecture</h3>
              <p className="text-xs text-purple-300 font-mono-code">Hydrozen.io &amp; Nitrozen.io Engineering Flow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#05020c]/95">
          <p className="text-sm text-slate-300 font-mono-code">
            Detailed architecture pipeline developed during the 4-month Software Development Internship at A2 Ventures:
          </p>

          <div className="space-y-6 max-w-2xl mx-auto">
            
            {/* Step 1: REST API */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 text-center relative group hover:border-purple-400 transition-all card-tilt">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-mono-code mb-2 border border-purple-500/30">
                <Cloud className="w-3.5 h-3.5" />
                Input Layer
              </div>
              <h4 className="text-lg font-bold text-white">REST API Endpoints</h4>
              <p className="text-xs text-slate-400 mt-1">Hydrozen.io &amp; Nitrozen.io Microservices</p>
            </div>

            <div className="flex justify-center">
              <div className="p-2 rounded-full bg-purple-950 border border-purple-500/40 text-purple-400 animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>

            {/* Step 2: OpenAPI Spec */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/50 bg-purple-950/40 text-center relative group shadow-lg shadow-purple-600/20 card-tilt">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 text-xs font-mono-code mb-2 border border-purple-400/40">
                <FileCode2 className="w-3.5 h-3.5" />
                Standardization Layer
              </div>
              <h4 className="text-xl font-extrabold text-purple-300">OpenAPI Specification (OAS 3.0)</h4>
              <p className="text-xs text-slate-300 mt-1">Strict JSON/YAML Schema Contracts &amp; Refactored Documentation</p>
            </div>

            <div className="flex justify-center gap-16 sm:gap-32 relative py-2">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-purple-500/50" />
                <ArrowDown className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-purple-500/50" />
                <ArrowDown className="w-5 h-5 text-indigo-400" />
              </div>
            </div>

            {/* Step 3: Parallel Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 text-xs font-mono-code">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  Code Generator
                </div>
                <h5 className="text-base font-bold text-white">Multi-Language SDKs</h5>
                <div className="space-y-1.5 text-xs font-mono-code">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-300">
                    <span>Go SDK</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-300">
                    <span>Python SDK</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/20 text-purple-300">
                    <span>JavaScript SDK</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 text-indigo-300 text-xs font-mono-code">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  IaC Integration
                </div>
                <h5 className="text-base font-bold text-white">Terraform Provider</h5>
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/20 space-y-2 text-xs font-mono-code">
                  <span className="text-indigo-300 font-bold block">Infrastructure as Code</span>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Enables automated cloud resource provisioning, state management &amp; declarative deployments.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070314] p-4 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-400 font-mono-code">
          <span>A2 Ventures Deliverable</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:opacity-90 transition-all shadow-md shadow-purple-600/30"
          >
            Close Diagram
          </button>
        </div>
      </div>
    </div>
  );
};
