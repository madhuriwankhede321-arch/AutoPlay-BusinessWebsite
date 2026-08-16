import React, { useState } from 'react';
import { Target, Hammer, Feather, BrainCircuit } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Philosophy: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Target className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Core Beliefs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            My Coaching Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Four guiding principles that shape every coaching session and client engagement.
          </p>
        </div>

        {/* 4 Principle Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.philosophy.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                id={`philosophy-card-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-50 dark:bg-slate-900 border-indigo-400 dark:border-indigo-500 shadow-md -translate-y-1'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    {getPhilosophyIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400">
                  Principle 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
