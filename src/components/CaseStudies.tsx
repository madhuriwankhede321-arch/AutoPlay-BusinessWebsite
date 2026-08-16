import React from 'react';
import { Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-700 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Practical Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            Automation Ideas & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Realistic examples showing how AI prompt chains and no-code connectors solve common bottlenecks.
          </p>
        </div>

        {/* 3 Illustrative Example Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.caseStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/60 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                    {study.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug">
                  {study.title}
                </h3>

                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                      The Challenge:
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                      Potential Solution:
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      {study.solution}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5 text-xs">
                      Target Benefit:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-xs">
                      {study.benefit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2">
                  Tools Utilized:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {study.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to discuss custom workflows */}
        <div className="mt-14 text-center">
          <BookingButton
            id="case-studies-cta"
            variant="outline"
            text="Discuss a Workflow for Your Team"
            defaultTopic="Custom Automation Architecture"
          />
        </div>

      </div>
    </section>
  );
};
