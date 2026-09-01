import React from 'react';
import { Scissors, Coffee, Crown, ArrowUpRight } from 'lucide-react';

interface LoungeFeaturesProps {
  onSelectCategory: (category: string) => void;
  onOpenBookingWithService?: (serviceName: string) => void;
}

export const LoungeFeatures: React.FC<LoungeFeaturesProps> = ({ onSelectCategory, onOpenBookingWithService }) => {
  return (
    <section id="lounge" className="py-16 sm:py-20 bg-[#161310] text-[#f4eee6] relative">
      {/* Subtle border separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#cba158]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f2ea] tracking-tight mb-4">
            Lounge Features
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b8a99a] leading-relaxed font-light">
            Handcrafted grooming, relaxing hospitality, and modern social spaces combined into one experience.
          </p>
        </div>

        {/* 3 Column Feature Cards Grid - Exact Recreation of Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Signature Cuts (The Distinctive Golden Ochre Highlight Card) */}
          <div 
            onClick={() => onOpenBookingWithService ? onOpenBookingWithService("Gentleman's Signature Scissor Cut & Styling") : onSelectCategory('hair')}
            className="group cursor-pointer flex flex-col bg-[#cba158] text-[#14100c] overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(203,161,88,0.35)]"
          >
            {/* Upper Photo */}
            <div className="h-56 sm:h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80"
                alt="Signature Haircut Consultation at Start Up Unisex Salon"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#14100c]/80 text-[#cba158] p-1.5 rounded-full backdrop-blur-sm">
                <Scissors className="w-4 h-4" />
              </div>
            </div>

            {/* Lower Gold Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#14100c]">
                    Signature Cuts
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#14100c] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#2b221a] leading-relaxed font-normal">
                  Precision scissor craft, customized face-shape styling, wash & blowout tailored for modern men and women.
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#14100c]/15 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#14100c]">
                <span>Explore Haircuts</span>
                <span>From ₹250</span>
              </div>
            </div>
          </div>

          {/* Card 2: Espresso Lounge (Dark Luxury Card) */}
          <div 
            onClick={() => onSelectCategory('spa')}
            className="group cursor-pointer flex flex-col bg-[#1c1815] border border-[#382d24] text-[#f4eee6] overflow-hidden shadow-xl hover:border-[#cba158]/60 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            {/* Upper Photo */}
            <div className="h-56 sm:h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=80"
                alt="Client relaxing in Espresso Lounge at Start Up Unisex Salon"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#14100c]/80 text-[#cba158] p-1.5 rounded-full backdrop-blur-sm border border-[#cba158]/20">
                <Coffee className="w-4 h-4" />
              </div>
            </div>

            {/* Lower Dark Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#f7f2ea] group-hover:text-[#cba158] transition-colors">
                    Espresso Lounge
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#cba158] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#b5a596] leading-relaxed font-light">
                  Complimentary handcrafted brews, ambient acoustic sounds, and relaxing lounge seating while you wait or unwind.
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#2e241c] flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#cba158]">
                <span>Hospitality Bar</span>
                <span>Complimentary</span>
              </div>
            </div>
          </div>

          {/* Card 3: VIP Grooming (Dark Luxury Card) */}
          <div 
            onClick={() => onSelectCategory('bridal')}
            className="group cursor-pointer flex flex-col bg-[#1c1815] border border-[#382d24] text-[#f4eee6] overflow-hidden shadow-xl hover:border-[#cba158]/60 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            {/* Upper Photo */}
            <div className="h-56 sm:h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                alt="VIP Grooming and Spa Client at Start Up Unisex Salon"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#14100c]/80 text-[#cba158] p-1.5 rounded-full backdrop-blur-sm border border-[#cba158]/20">
                <Crown className="w-4 h-4" />
              </div>
            </div>

            {/* Lower Dark Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#f7f2ea] group-hover:text-[#cba158] transition-colors">
                    VIP Grooming
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#cba158] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#b5a596] leading-relaxed font-light">
                  Private styling suites, luxury deep conditioning hair spa, charcoal facials, beard sculpting, and bridal makeovers.
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#2e241c] flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#cba158]">
                <span>VIP Suites</span>
                <span>Custom Packages</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
