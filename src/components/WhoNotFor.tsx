import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const WhoNotFor: React.FC = () => {
  return (
    <section id="who-not-for" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Clear Expectations
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              This coaching may not be for you if...
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {siteConfig.notFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Promise */}
          <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{siteConfig.notForPromise}</span>
            </div>
            <a
              id="who-not-for-discovery-link"
              href="#contact"
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>See if you're a match</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
