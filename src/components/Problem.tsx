import React, { useState } from 'react';
import { ClockAlert, Layers, Compass, ZapOff, CheckCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const Problem: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClockAlert':
        return <ClockAlert className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-violet-500" />;
      case 'ZapOff':
        return <ZapOff className="w-5 h-5 text-indigo-500" />;
      default:
        return <ClockAlert className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="problem" className="py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            The Daily Friction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Is repetitive work slowing you down?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Most professionals spend up to 40% of their work week on manual data re-entry, disconnected updates, and copy-pasting.
          </p>
        </div>

        {/* 4 Geometric Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.problems.map((problem, index) => {
            const isSelected = hoveredCard === problem.id;
            return (
              <div
                key={problem.id}
                id={`problem-card-${problem.id}`}
                onMouseEnter={() => setHoveredCard(problem.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-200 cursor-default flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-400 dark:border-indigo-500 shadow-md -translate-y-1'
                    : 'border-slate-100 dark:border-slate-800 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 flex items-center justify-center">
                      {getIcon(problem.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Targeted in Coaching</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="mt-12 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed font-heading">
            "{siteConfig.problemTransition}"
          </p>
          <div className="flex justify-center">
            <a
              id="problem-solution-link"
              href="#solution"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>See the 3-step practical solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
