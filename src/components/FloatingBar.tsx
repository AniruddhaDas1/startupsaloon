import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingBarProps {
  onOpenBooking: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Desktop Compact Card */}
      <div className="hidden sm:flex items-center gap-3 bg-[#181411]/95 backdrop-blur-md border border-[#cba158]/50 p-2 shadow-2xl">
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-2.5 bg-[#251e18] hover:bg-[#382c22] text-[#cba158] hover:text-white transition flex items-center gap-2 text-xs"
          title="Direct Call"
        >
          <Phone className="w-4 h-4" />
          <span className="font-sans font-medium">{SALON_INFO.phone}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-bold uppercase tracking-wider px-5 py-2.5 flex items-center gap-2 shadow-md transition cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="sm:hidden grid grid-cols-2 gap-2 bg-[#181411]/95 backdrop-blur-md border border-[#cba158]/50 p-2 shadow-2xl">
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="bg-[#241e1a] text-[#f7f2ea] py-2.5 text-center text-xs font-medium flex items-center justify-center gap-1.5 border border-[#3b2f24]"
        >
          <Phone className="w-3.5 h-3.5 text-[#cba158]" />
          <span>Call Salon</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="bg-[#cba158] text-[#14100c] py-2.5 text-center text-xs font-bold uppercase flex items-center justify-center gap-1.5 shadow cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>
      </div>

    </div>
  );
};
