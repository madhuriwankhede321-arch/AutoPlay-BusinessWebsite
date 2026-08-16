import React from 'react';
import { Briefcase, CheckCircle2, Terminal, Building2, Network, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingButton } from './BookingButton';

export const Audience: React.FC = () => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="audience" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Tailored Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Who I Coach
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Whether you want to optimize your individual daily workflow or upskill an entire QA or IT team.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.audiences.map((aud, index) => (
            <div
              key={aud.id}
              id={`audience-card-${aud.id}`}
              className={`p-7 rounded-3xl bg-slate-50/60 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 flex flex-col justify-between ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xs">
                    {getAudienceIcon(aud.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {aud.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {aud.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Customized curriculum available
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
