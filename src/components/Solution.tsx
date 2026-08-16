import React from 'react';
import { Search, Cpu, Workflow, ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Solution: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Workflow className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="solution" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            The Implementation Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            From AI Curiosity to Practical Automation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Coaching is engineered around your real work. We replace abstract theory with a structured 3-step action plan to build lasting workflows.
          </p>
        </div>

        {/* 3 Step Geometric Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {siteConfig.solutionSteps.map((item) => (
            <div
              key={item.step}
              id={`solution-step-${item.step}`}
              className="relative p-8 rounded-3xl bg-slate-50/60 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-100 dark:border-indigo-900/60">
                    Phase {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    {getStepIcon(item.icon)}
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Hands-on coaching outcome</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action */}
        <div className="mt-12 text-center">
          <a
            id="see-coaching-works-btn"
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold text-sm transition-all shadow-xs active:scale-[0.98]"
          >
            <span>See How Coaching Works</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
