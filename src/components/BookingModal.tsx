import React, { useState } from 'react';
import { Calendar, Mail, X, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'Individual Coaching',
}) => {
  const [copied, setCopied] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(defaultInterest);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const isConfigured = siteConfig.coach.bookingUrl && siteConfig.coach.bookingUrl !== 'YOUR_BOOKING_LINK';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.coach.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Discovery Call Request: ${selectedTopic} - ${userName || 'Professional'}`);
    const body = encodeURIComponent(
      `Hi Madhuri,\n\nI would like to schedule a Discovery Call regarding ${selectedTopic}.\n\nName: ${userName}\nEmail: ${userEmail}\nTopic of Interest: ${selectedTopic}\nWhat I want to automate / Notes: ${notes}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:${siteConfig.coach.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-900 dark:text-slate-100 transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading">Book a Discovery Call</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              30-min conversation with {siteConfig.coach.name}
            </p>
          </div>
        </div>

        {isConfigured ? (
          <div className="space-y-4 my-6">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Ready to map out your automation roadmap? Click below to pick a date & time on the calendar:
            </p>
            <a
              id="external-calendly-btn"
              href={siteConfig.coach.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all"
            >
              <span>Open Booking Calendar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs text-indigo-950 dark:text-indigo-200">
              <span className="font-semibold text-indigo-700 dark:text-indigo-300">Fast-Track Scheduling: </span>
              Fill in your details below to open a pre-filled discovery call inquiry, or copy the direct email.
            </div>

            <form onSubmit={handleDirectEmailSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  id="booking-input-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Work Email
                </label>
                <input
                  id="booking-input-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Topic of Interest
                </label>
                <select
                  id="booking-select-topic"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                >
                  <option value="Individual Coaching">Individual AI & Productivity Coaching</option>
                  <option value="Workflow Automation">Workflow Automation (n8n / No-Code)</option>
                  <option value="AI-Powered QA Testing">AI for QA & Software Testing</option>
                  <option value="Team Workshop">Team / Organization AI Workshop</option>
                  <option value="Custom Project Consultation">Custom Project Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  What task or bottleneck would you like to discuss? (Optional)
                </label>
                <textarea
                  id="booking-input-notes"
                  rows={2}
                  placeholder="e.g. I spend 2 hours a day manually moving test results and writing release notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              <button
                id="booking-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all text-sm group"
              >
                <span>Request Discovery Call via Email</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Direct Email:</span>
              <button
                id="booking-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 font-mono text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.coach.email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : null}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
