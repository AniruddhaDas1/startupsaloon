import React from 'react';
import { STYLISTS } from '../data/salonData';
import { Award, Scissors, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onBookWithStylist: (stylistId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onBookWithStylist }) => {
  return (
    <section id="team" className="py-16 sm:py-20 bg-[#161310] text-[#f4eee6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#241d17] border border-[#cba158]/30 text-[#cba158] text-[11px] sm:text-xs font-cinzel tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 whitespace-nowrap">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Certified Master Stylists</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f2ea] tracking-tight mb-4">
            Meet the Artisans
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b0a091] leading-relaxed font-light">
            Trained under leading academies with extensive experience in precision hair architecture, skin aesthetics, and bespoke styling.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STYLISTS.map(stylist => (
            <div
              key={stylist.id}
              className="bg-[#1c1815] border border-[#362b21] hover:border-[#cba158]/60 overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1815] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 bg-[#14100c]/80 backdrop-blur-sm border border-[#cba158]/30 px-2.5 py-1 text-[11px] text-[#cba158] font-medium">
                  {stylist.experience} Experience
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-[#f7f2ea] group-hover:text-[#cba158] transition-colors">
                  {stylist.name}
                </h3>
                <div className="text-xs text-[#cba158] font-sans font-medium uppercase tracking-wider mt-1 mb-3">
                  {stylist.role}
                </div>
                <p className="text-xs text-[#a8998a] leading-relaxed font-light mb-5">
                  <strong className="text-[#ded3c5]">Specialty:</strong> {stylist.specialty}
                </p>

                <button
                  onClick={() => onBookWithStylist(stylist.id)}
                  className="w-full py-2.5 bg-[#251e18] hover:bg-[#cba158] hover:text-[#14100c] text-[#e5dacb] text-xs font-semibold uppercase tracking-wider border border-[#3d3025] hover:border-[#cba158] transition flex items-center justify-center gap-1.5"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
