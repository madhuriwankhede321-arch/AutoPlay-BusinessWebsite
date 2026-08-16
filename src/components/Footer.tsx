import React from 'react';
import { ArrowUp, Sparkles, Linkedin, Instagram, Github, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasLinkedIn = siteConfig.coach.linkedInUrl && siteConfig.coach.linkedInUrl !== 'YOUR_LINKEDIN_URL';
  const hasInstagram = siteConfig.coach.instagramUrl && siteConfig.coach.instagramUrl !== 'YOUR_INSTAGRAM_URL';
  const hasGithub = siteConfig.coach.githubUrl && siteConfig.coach.githubUrl !== 'YOUR_GITHUB_URL';

  return (
    <footer id="main-footer" className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
      
      {/* Signature Geometric Balance 4-Cell Divided Grid */}
      <div className="border-b border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800 bg-slate-50/40 dark:bg-slate-900">
        {/* Service 01 */}
        <a
          href="#coaching"
          className="p-8 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors group flex flex-col justify-between"
        >
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 uppercase text-[10px] tracking-widest">
              Service 01
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base font-heading">
              AI Productivity
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Master prompts and tools for deep research, synthesis, and daily communications.
            </p>
          </div>
          <div className="mt-6 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform tracking-wider uppercase">
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>

        {/* Service 02 */}
        <a
          href="#coaching"
          className="p-8 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors group flex flex-col justify-between"
        >
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 uppercase text-[10px] tracking-widest">
              Service 02
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base font-heading">
              Workflow Automation
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Identify bottlenecks and build automated n8n & connected no-code pipelines.
            </p>
          </div>
          <div className="mt-6 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform tracking-wider uppercase">
            <span>Explore Automation</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>

        {/* Service 03 */}
        <a
          href="#coaching"
          className="p-8 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors group flex flex-col justify-between"
        >
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 uppercase text-[10px] tracking-widest">
              Service 03
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base font-heading">
              AI-Powered Testing
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Specialized coaching for QA professionals looking to level up with AI test design.
            </p>
          </div>
          <div className="mt-6 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform tracking-wider uppercase">
            <span>For QA Pros</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>

        {/* Service 04 / Get Started Block */}
        <div className="p-8 bg-slate-900 dark:bg-slate-950 flex flex-col justify-between items-start text-white">
          <div>
            <div className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest mb-2">
              Get Started
            </div>
            <h4 className="text-white font-bold text-lg leading-tight font-heading">
              Ready to transform <br />
              your workflow?
            </h4>
          </div>
          <div className="pt-6 space-y-1">
            <div className="text-xs text-slate-400 font-medium">Pune, IN (Global Online)</div>
            <a
              href={`mailto:${siteConfig.coach.email}`}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-mono underline decoration-indigo-800 underline-offset-4 block truncate"
            >
              {siteConfig.coach.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-lg font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                {siteConfig.brandName}
              </span>
              <span className="h-3.5 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2"></span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                by {siteConfig.coach.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              AutoPlay helps professionals and organizations turn repetitive work into practical AI-powered workflows.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              {hasLinkedIn && (
                <a
                  id="footer-linkedin-link"
                  href={siteConfig.coach.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}

              {hasInstagram && (
                <a
                  id="footer-instagram-link"
                  href={siteConfig.coach.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              )}

              {hasGithub && (
                <a
                  id="footer-github-link"
                  href={siteConfig.coach.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                id="footer-email-link"
                href={`mailto:${siteConfig.coach.email}`}
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Email Madhuri"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaching Tracks */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Coaching Tracks
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>AI Productivity Coaching</li>
              <li>Workflow Automation (n8n)</li>
              <li>AI for Software Testers & QA</li>
              <li>Team AI Workshops</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 {siteConfig.coach.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{siteConfig.coach.location}</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
