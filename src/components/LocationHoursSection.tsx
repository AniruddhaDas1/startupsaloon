import React, { useState } from 'react';
import { SALON_INFO, FAQ_ITEMS } from '../data/salonData';
import { MapPin, Navigation, Phone, Clock, MessageSquare, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const LocationHoursSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#12100e] text-[#f4eee6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#241d17] border border-[#cba158]/30 text-[#cba158] text-[11px] sm:text-xs font-cinzel tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Visit Us in Rajarhat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f2ea] tracking-tight mb-4">
            Location & Salon Hours
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b0a091] leading-relaxed font-light">
            Conveniently situated on Rajarhat Main Road near the Shibtola junction, welcoming you with seamless hospitality.
          </p>
        </div>

        {/* 2-Column Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Address, Hours, Contact Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#181411] border border-[#332921] p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#cba158]/15 border border-[#cba158]/40 flex items-center justify-center flex-shrink-0 text-[#cba158]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#f7f2ea] font-medium">Start Up Unisex Salon</h3>
                  <p className="text-xs sm:text-sm text-[#b8a99a] mt-1 leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#cba158] mt-1">
                    Landmark: {SALON_INFO.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#292019] flex gap-3">
                <a
                  href={SALON_INFO.gmapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-semibold py-2.5 px-3 flex items-center justify-center gap-1.5 transition uppercase tracking-wider text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="bg-[#241e1a] hover:bg-[#332a24] text-[#f4eee6] border border-[#423328] text-xs font-semibold py-2.5 px-4 flex items-center justify-center gap-1.5 transition uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-[#cba158]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#181411] border border-[#332921] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#cba158]/15 border border-[#cba158]/40 flex items-center justify-center text-[#cba158]">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#f7f2ea]">Opening Hours</h3>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {SALON_INFO.hours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#292019] last:border-none">
                    <span className="text-[#a8998a]">{schedule.day}</span>
                    <span className="text-[#f7f2ea] font-medium font-sans">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#25D366]">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Open 7 Days a Week • Walk-ins & Bookings Welcome</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Embed / Direct View */}
          <div className="lg:col-span-7 bg-[#181411] border border-[#332921] overflow-hidden min-h-[380px] relative flex flex-col">
            <div className="p-4 bg-[#1e1915] border-b border-[#332921] flex items-center justify-between text-xs">
              <span className="font-serif text-[#f7f2ea] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cba158]"></span>
                Live Map: Rajarhat Shibtola (22.6231° N, 88.4989° E)
              </span>
              <a
                href={SALON_INFO.gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cba158] hover:underline flex items-center gap-1"
              >
                Open Full Screen Google Maps
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="w-full flex-1 min-h-[320px] relative bg-[#14110e]">
              <iframe
                title="Start Up Unisex Salon Rajarhat Google Map"
                src="https://maps.google.com/maps?q=22.623129,88.4989959&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px]"
              ></iframe>

              {/* Floating salon badge over map */}
              <div className="absolute top-4 left-4 z-10 bg-[#161310]/90 backdrop-blur-md p-3 border border-[#cba158]/50 shadow-xl max-w-xs pointer-events-none">
                <div className="font-serif font-bold text-xs text-[#cba158] uppercase">Start Up Unisex Salon</div>
                <div className="text-[11px] text-[#ded3c5]">Khamar Shibtala, Rajarhat, Kolkata</div>
                <div className="text-[10px] text-amber-400 mt-0.5">★ {SALON_INFO.rating} Rating ({SALON_INFO.totalReviews}+ Google Reviews)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Salon FAQs Section */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-[#292019]">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-[#f7f2ea] flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#cba158]" />
              <span>Frequently Asked Questions</span>
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="bg-[#181411] border border-[#2e241c] overflow-hidden transition">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:text-[#cba158] transition"
                  >
                    <span className="font-serif text-sm sm:text-base text-[#f7f2ea]">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#cba158] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8c7d70] flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#b8a99a] leading-relaxed border-t border-[#261e18] font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
