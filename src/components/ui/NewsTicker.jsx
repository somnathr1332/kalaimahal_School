import React from 'react';
import { Bell } from 'lucide-react';

const NewsTicker = () => {
  const announcements = [
    "Admissions Open for Academic Year 2024-25. Apply Now!",
    "Annual Sports Meet scheduled for next month.",
    "Parent-Teacher Meeting for all grades this Saturday.",
    "Kalaimahal School recognized for academic excellence!"
  ];

  return (
    <div className="bg-primary text-white text-sm py-2 overflow-hidden w-full relative z-[60]">
      <div className="section-container flex items-center">
        <div className="flex items-center gap-2 font-bold whitespace-nowrap mr-6 bg-primary z-10 px-2 border-r border-white/20">
          <Bell size={16} className="animate-pulse" />
          <span className="hidden sm:inline">LATEST UPDATES</span>
        </div>
        
        {/* Ticker Animation Container */}
        <div className="relative flex-grow overflow-hidden">
          <div className="animate-ticker whitespace-nowrap flex gap-16">
            {[...announcements, ...announcements].map((text, i) => (
              <span key={i} className="inline-block font-medium tracking-wide">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
