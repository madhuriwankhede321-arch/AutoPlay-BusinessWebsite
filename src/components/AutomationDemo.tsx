import React, { useState } from 'react';
import { Play, ArrowRight, CheckCircle, Info, Sparkles, Inbox, Cpu, GitBranch, Bell } from 'lucide-react';
import { siteConfig, InteractiveWorkflowNode } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const AutomationDemo: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState(siteConfig.workflowPresets[0].id);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedActiveIndex, setSimulatedActiveIndex] = useState<number | null>(null);

  const currentPreset =
    siteConfig.workflowPresets.find((p) => p.id === selectedPresetId) || siteConfig.workflowPresets[0];
  const activeNode: InteractiveWorkflowNode = currentPreset.nodes[selectedNodeIndex] || currentPreset.nodes[0];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulatedActiveIndex(0);
    setSelectedNodeIndex(0);

    const runStep = (idx: number) => {
      if (idx < currentPreset.nodes.length) {
        setSimulatedActiveIndex(idx);
        setSelectedNodeIndex(idx);
        setTimeout(() => {
          runStep(idx + 1);
        }, 1200);
      } else {
        setSimulatedActiveIndex(null);
        setIsSimulating(false);
      }
    };

    setTimeout(() => {
      runStep(1);
    }, 1200);
  };

  const getNodeCategoryIcon = (category: string) => {
    switch (category) {
      case 'input':
        return <Inbox className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'automation':
        return <GitBranch className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'output':
        return <Bell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'input':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-900';
      case 'ai':
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900';
      case 'automation':
        return 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900';
      case 'output':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200';
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Interactive Simulator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            See What Can Be Automated
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Explore live workflow architectures built with AI prompts and no-code automation nodes. Click any step to inspect how it functions.
          </p>
        </div>

        {/* Workflow Presets Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {siteConfig.workflowPresets.map((preset) => (
            <button
              key={preset.id}
              id={`preset-btn-${preset.id}`}
              onClick={() => {
                setSelectedPresetId(preset.id);
                setSelectedNodeIndex(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedPresetId === preset.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Demo Container */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          
          {/* Demo Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                {currentPreset.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {currentPreset.description}
              </p>
            </div>

            <button
              id="simulate-workflow-btn"
              onClick={handleSimulate}
              disabled={isSimulating}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all disabled:opacity-50 cursor-pointer shrink-0 shadow-xs"
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Simulating Pipeline...' : 'Simulate Workflow'}</span>
            </button>
          </div>

          {/* Workflow Pipeline Nodes Display */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative">
            {currentPreset.nodes.map((node, index) => {
              const isSelected = selectedNodeIndex === index;
              const isSimActive = simulatedActiveIndex === index;
              return (
                <div key={node.id} className="relative">
                  <button
                    id={`demo-node-${node.id}`}
                    onClick={() => setSelectedNodeIndex(index)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
                      isSimActive
                        ? 'ring-2 ring-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 border-emerald-400 scale-[1.02]'
                        : isSelected
                        ? 'border-indigo-400 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 shadow-xs'
                        : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800 hover:border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${getCategoryBadgeClass(
                            node.category
                          )}`}
                        >
                          0{index + 1} • {node.category}
                        </span>
                        <div className="p-1 rounded-md bg-white dark:bg-slate-900 shadow-2xs">
                          {getNodeCategoryIcon(node.category)}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white mb-1">
                        {node.label}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                        {node.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                      {node.toolHint}
                    </div>
                  </button>

                  {/* Desktop connector arrow */}
                  {index < currentPreset.nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xs">
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Detail Deep Dive Box */}
          <div
            id="demo-node-detail-panel"
            className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-3"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Info className="w-3.5 h-3.5 text-indigo-500" />
              <span>Node Architecture & Logic</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                {activeNode.label} ({activeNode.category.toUpperCase()})
              </h4>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                Connected: {activeNode.toolHint}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeNode.detail}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coaching covers building and configuring this exact node in n8n / AI tools.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
