import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Phone, Clock, Calendar, Menu, X, MapPin, Sparkles, Instagram, Facebook } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if salon is open currently (10 AM to 9:30 PM)
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    if (currentHour >= 10 && currentHour <= 21.5) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#12100e]/95 backdrop-blur-md border-b border-[#362b22] py-2.5 shadow-2xl' : 'bg-gradient-to-b from-[#12100e] via-[#12100e]/85 to-transparent py-3.5'
    }`}>
      {/* Top micro bar on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-[#b8a99a] border-b border-[#2a221b]/60 pb-2">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#cba158]" />
            <span>Rajarhat Main Rd, Near Shibtola, Kolkata</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#cba158]" />
            <span className="flex items-center gap-1.5">
              <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`}></span>
              {isOpenNow ? 'Open Now: 10:00 AM – 9:30 PM' : 'Opens Today at 10:00 AM'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <a 
            href={`tel:${SALON_INFO.phone}`} 
            className="hover:text-[#cba158] transition flex items-center gap-1.5 text-xs text-[#d6c7b7]"
          >
            <Phone className="w-3 h-3 text-[#cba158]" />
            <span>{SALON_INFO.phone}</span>
          </a>
          <div className="flex items-center space-x-3 text-[#d8ccbe]">
            <a href={SALON_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#cba158] transition" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href={SALON_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#cba158] transition" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Brand Logo matching the reference luxury crest */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-none flex-shrink min-w-0"
        >
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-[#cba158]/60 bg-gradient-to-br from-[#241e1a] to-[#14110e] flex items-center justify-center p-1 shadow-md group-hover:border-[#cba158] transition flex-shrink-0">
            <div className="w-full h-full rounded-full border border-[#cba158]/30 flex items-center justify-center text-[#cba158]">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#cba158]" />
            </div>
          </div>
          <div className="min-w-0">
            <span className="block font-cinzel text-sm sm:text-lg font-bold tracking-[0.15em] sm:tracking-[0.18em] text-[#f4eee6] uppercase group-hover:text-[#cba158] transition leading-none truncate">
              Start Up
            </span>
            <span className="block text-[7.5px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] text-[#cba158] uppercase font-sans font-medium mt-0.5 sm:mt-1 truncate">
              Unisex Salon & Lounge
            </span>
          </div>
        </button>

        {/* Desktop Nav Links - Single Line, Clean Spacing, No Word Wrapping */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-sm font-sans tracking-wider text-[#d6c7b7]">
          <button 
            onClick={() => handleNavClick('lounge')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Lounge
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('team')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Stylists
          </button>
          <button 
            onClick={() => handleNavClick('gallery')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Lookbook
          </button>
          <button 
            onClick={() => handleNavClick('reviews')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Reviews
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="whitespace-nowrap hover:text-[#cba158] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#cba158] after:scale-x-0 hover:after:scale-x-100 after:transition-transform cursor-pointer"
          >
            Contact & Hours
          </button>
        </nav>

        {/* Right CTA Button matching Reference Design */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#cba158] hover:bg-[#dfb76c] active:scale-95 text-[#14100c] text-[11px] sm:text-sm font-semibold px-2.5 sm:px-5 py-2 sm:py-2.5 transition duration-200 shadow-md font-sans tracking-wider uppercase whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#14100c] flex-shrink-0" />
            <span>
              Book <span className="hidden sm:inline">Appointment</span>
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-[#d6c7b7] hover:text-[#cba158] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#cba158]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161310] border-b border-[#362b22] px-6 py-6 mt-3 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1 font-sans text-sm text-[#e5dacb]">
            <button 
              onClick={() => handleNavClick('lounge')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Lounge & Hospitality</span>
              <span className="text-xs text-[#cba158] font-mono">01</span>
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Services & Treatments</span>
              <span className="text-xs text-[#cba158] font-mono">02</span>
            </button>
            <button 
              onClick={() => handleNavClick('team')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Master Stylists</span>
              <span className="text-xs text-[#cba158] font-mono">03</span>
            </button>
            <button 
              onClick={() => handleNavClick('gallery')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Lookbook & Gallery</span>
              <span className="text-xs text-[#cba158] font-mono">04</span>
            </button>
            <button 
              onClick={() => handleNavClick('reviews')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Google Reviews ({SALON_INFO.rating}★)</span>
              <span className="text-xs text-[#cba158] font-mono">05</span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-left py-3 border-b border-[#251e18] hover:text-[#cba158] transition flex items-center justify-between"
            >
              <span>Location & Hours (Rajarhat)</span>
              <span className="text-xs text-[#cba158] font-mono">06</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3.5 bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment</span>
            </button>
            <div className="flex items-center justify-between text-xs text-[#a8998a] pt-1">
              <a href={`tel:${SALON_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#cba158] text-[#d6c7b7]">
                <Phone className="w-3.5 h-3.5 text-[#cba158]" />
                <span>{SALON_INFO.phone}</span>
              </a>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                Open: 10AM – 9:30PM
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
