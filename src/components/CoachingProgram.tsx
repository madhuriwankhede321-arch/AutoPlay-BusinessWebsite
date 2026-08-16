import React, { useState } from 'react';
import { CalendarDays, CheckCircle, ArrowRight, Compass, Sparkles, Wrench, RefreshCw } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const CoachingProgram: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const { programFramework } = siteConfig;

  const getWeekIcon = (week: number) => {
    switch (week) {
      case 1:
        return <Compass className="w-5 h-5 text-indigo-500" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 3:
        return <Wrench className="w-5 h-5 text-cyan-500" />;
      case 4:
        return <RefreshCw className="w-5 h-5 text-emerald-500" />;
      default:
        return <CalendarDays className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>{programFramework.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            {programFramework.title}
          </h2>
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 font-heading">
            {programFramework.subheading}
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A sample 4-week progression illustrating how we guide you from manual bottlenecks to a live, functioning automated system.
          </p>
        </div>

        {/* 4-Week Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programFramework.weeks.map((w) => {
            const isActive = activeWeek === w.week;
            return (
              <div
                key={w.week}
                id={`coaching-week-card-${w.week}`}
                onClick={() => setActiveWeek(w.week)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-400 dark:border-indigo-500 shadow-md ring-1 ring-indigo-400/20'
                    : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {w.phase}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      {getWeekIcon(w.week)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {w.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {w.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Key Outcomes:
                  </span>
                  <div className="space-y-1.5">
                    {w.keyOutcomes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Framework CTA */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Have a unique workflow or timeframe in mind? Every coaching track is tailored.
          </p>
          <div>
            <BookingButton
              id="coaching-program-cta"
              variant="primary"
              text="Discuss Your Goals"
              defaultTopic="4-Week Coaching Framework"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
