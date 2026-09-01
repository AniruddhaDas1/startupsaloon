import React from 'react';
import { Sparkles, Calendar, Coffee, Award, ChevronRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreLounge: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreLounge }) => {
  return (
    <section id="hero" className="pt-24 sm:pt-28 lg:pt-32 pb-12 bg-[#12100e] text-[#f4eee6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container matching reference image split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6 lg:mb-8">
          
          {/* Left Column: Typography and Call to Action */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-6 sm:py-10 pr-0 lg:pr-4">
            
            {/* Tagline Badge - Centered on mobile, left on desktop */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#251e18] border border-[#cba158]/30 text-[#cba158] text-[10.5px] sm:text-xs font-cinzel tracking-[0.14em] sm:tracking-[0.2em] uppercase mb-6 self-center lg:self-start whitespace-nowrap max-w-full">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-[#cba158]" />
              <span className="whitespace-nowrap">Rajarhat Shibtola • Unisex Salon</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#f7f2ea] leading-[1.12] mb-6">
              More Than Just A <span className="text-[#cba158] italic font-normal">Haircut</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-[#cec1b3] font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Premium grooming, handcrafted coffee, and modern social spaces combined into one experience.
            </p>

            {/* CTA Action Buttons matching reference image design */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-1 w-full max-w-md lg:max-w-none">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#cba158] hover:bg-[#dfb76c] active:scale-[0.98] text-[#14100c] text-sm font-semibold tracking-wider uppercase px-7 py-3.5 transition duration-200 shadow-xl cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#14100c]" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={onExploreLounge}
                className="inline-flex items-center justify-center gap-2 border border-[#cba158]/80 hover:border-[#cba158] hover:bg-[#251d16] text-[#e8ded1] hover:text-[#cba158] text-sm font-medium tracking-wider uppercase px-7 py-3.5 transition duration-200 cursor-pointer"
              >
                <span>Explore Lounge</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#2a221b]/80 w-full text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#cba158]">{SALON_INFO.rating} ★</div>
                <div className="text-xs text-[#a39485] font-sans mt-0.5">{SALON_INFO.totalReviews}+ Google Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#cba158]">100%</div>
                <div className="text-xs text-[#a39485] font-sans mt-0.5">Unisex & VIP Suites</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif text-[#cba158]">Free</div>
                <div className="text-xs text-[#a39485] font-sans mt-0.5">Espresso & Wi-Fi</div>
              </div>
            </div>

          </div>

          {/* Right Column: Barber/Stylist In Action (Matching reference hero top photo) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] rounded-none overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-transparent to-black/30 z-10"></div>
            <div className="absolute inset-0 border border-[#3b2f24]/50 z-20 pointer-events-none"></div>
            
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
              alt="Master Stylist grooming client in Start Up Unisex Salon"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />

            {/* Bottom Corner Subtle Floating Badge */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between bg-[#181411]/90 backdrop-blur-md border border-[#cba158]/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#cba158]/20 flex items-center justify-center text-[#cba158]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-serif text-[#f4eee6] font-medium">Bespoke Hairdressing & Color Artistry</div>
                  <div className="text-[11px] text-[#cba158] font-sans">L'Oreal & Moroccan Oil Certified Experts</div>
                </div>
              </div>
              <span className="text-[11px] text-[#a8998a] hidden sm:inline">Rajarhat, Kolkata</span>
            </div>
          </div>

        </div>

        {/* Panoramic Bottom Lounge Image (Exact Match to Reference Lower Half of Hero) */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[360px] overflow-hidden border border-[#3b2f24]/60 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#12100e]/80 via-transparent to-[#12100e]/80 z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
            alt="Chesterfield Leather Lounge and Espresso Bar at Start Up Unisex Salon"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Centered Mood Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#12100e]/90 via-transparent to-transparent">
            <div className="inline-flex items-center gap-2 text-[#cba158] text-xs font-cinzel tracking-[0.25em] uppercase mb-2">
              <Coffee className="w-4 h-4" />
              <span>Complimentary Hospitality</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f2ea] font-normal mb-2 max-w-xl">
              Relax in Our Curated Chesterfield Lounge
            </h3>
            <p className="text-xs sm:text-sm text-[#d4c5b6] max-w-md font-sans">
              Enjoy freshly brewed artisanal coffee and quiet luxury while you get styled or await your treatment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
