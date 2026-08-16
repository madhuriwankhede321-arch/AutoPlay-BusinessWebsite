import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  const { beforeItems, afterItems } = siteConfig.beforeAfter;

  return (
    <section id="before-after" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Workday Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            From Manual to Automated
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Compare the friction of traditional manual routines with streamlined, AI-assisted workflows.
          </p>
        </div>

        {/* View mode toggle (Mobile friendly & interactive) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold">
            <button
              id="before-after-tab-both"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Side-by-Side
            </button>
            <button
              id="before-after-tab-before"
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'
              }`}
            >
              Before (Manual)
            </button>
            <button
              id="before-after-tab-after"
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
              }`}
            >
              After (Automated)
            </button>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Before Card */}
          {(activeTab === 'both' || activeTab === 'before') && (
            <div
              id="before-comparison-panel"
              className={`p-7 sm:p-8 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/60 shadow-sm flex flex-col justify-between ${
                activeTab === 'before' ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-rose-200/60 dark:border-rose-900/40">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-rose-950 dark:text-rose-200">
                      Before Coaching
                    </h3>
                    <span className="text-xs text-rose-700/80 dark:text-rose-400">
                      Manual, friction-heavy routines
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {beforeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-200/60 dark:border-rose-900/40 text-xs font-semibold text-rose-800 dark:text-rose-400">
                Outcome: Lost hours, mental fatigue, higher error rate.
              </div>
            </div>
          )}

          {/* After Card */}
          {(activeTab === 'both' || activeTab === 'after') && (
            <div
              id="after-comparison-panel"
              className={`p-7 sm:p-8 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 shadow-sm flex flex-col justify-between ${
                activeTab === 'after' ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-emerald-950 dark:text-emerald-200">
                      After Coaching
                    </h3>
                    <span className="text-xs text-emerald-700/80 dark:text-emerald-400">
                      Automated, hands-off execution
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {afterItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                Outcome: Predictable workflows, reclaimed hours, scalable output.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
