import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '../lib/siteConfig';
import { BookingModal } from './BookingModal';

interface BookingButtonProps {
  id?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'compact';
  text?: string;
  className?: string;
  defaultTopic?: string;
  showIcon?: boolean;
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  id = 'booking-cta-btn',
  variant = 'primary',
  text = 'Book a Discovery Call',
  className = '',
  defaultTopic = 'Individual Coaching',
  showIcon = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // If user has supplied a real Calendly / booking URL (not the placeholder), open it directly
    if (siteConfig.coach.bookingUrl && siteConfig.coach.bookingUrl !== 'YOUR_BOOKING_LINK') {
      window.open(siteConfig.coach.bookingUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    // Otherwise open the friendly scheduling modal
    e.preventDefault();
    setIsModalOpen(true);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base shadow-sm shadow-indigo-200 dark:shadow-none hover:shadow-lg transition-all duration-200 active:scale-[0.98]';
      case 'secondary':
        return 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold px-8 py-4 rounded-xl text-base hover:shadow-lg transition-all duration-200 active:scale-[0.98]';
      case 'outline':
        return 'border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-900 dark:text-slate-100 bg-transparent font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800';
      case 'compact':
        return 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-5 py-2 rounded-full shadow-sm shadow-indigo-200 dark:shadow-none transition-all duration-200 active:scale-[0.98]';
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl';
    }
  };

  return (
    <>
      <button
        id={id}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-transform ${getVariantStyles()} ${className}`}
      >
        {showIcon && variant !== 'compact' && <Calendar className="w-4 h-4 text-indigo-200" />}
        <span>{text}</span>
        {variant === 'primary' && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultInterest={defaultTopic}
      />
    </>
  );
};
