import React, { useState } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';
import { Sparkles, Clock, Check, Plus, Scissors, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';

interface ServiceMenuProps {
  onBookService: (service: ServiceItem) => void;
  selectedCategory?: string;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ onBookService, selectedCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
  const [genderFilter, setGenderFilter] = useState<'all' | 'men' | 'women' | 'unisex'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Haircuts & Styling' },
    { id: 'spa', label: 'Hair Spa & Botox' },
    { id: 'skin', label: 'Facials & Skin' },
    { id: 'beard', label: 'Beard Sculpting' },
    { id: 'bridal', label: 'Bridal & Groom' },
    { id: 'hands_feet', label: 'Mani & Pedi' },
  ];

  const filteredServices = SALON_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesGender = genderFilter === 'all' || service.gender === genderFilter || service.gender === 'unisex';
    return matchesCategory && matchesGender;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#12100e] text-[#f4eee6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#241d17] border border-[#cba158]/30 text-[#cba158] text-[11px] sm:text-xs font-cinzel tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 whitespace-nowrap">
            <Scissors className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Curated Service Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f2ea] tracking-tight mb-4">
            Artisanal Hair, Skin & Spa Treatments
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b0a091] leading-relaxed font-light">
            Every service at Start Up Unisex Salon is executed by certified master stylists using authentic L'Oréal Professionnel, Moroccan Oil, and O3+ products.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#292019]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-[#cba158] text-[#14100c] border-[#cba158] shadow-md font-semibold'
                    : 'bg-[#1a1613] text-[#cfc1b2] border-[#362b22] hover:border-[#cba158]/50 hover:text-[#f4eee6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gender Filter Pills */}
          <div className="flex items-center gap-1 bg-[#1a1613] p-1 border border-[#362b22] self-start md:self-auto text-xs">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-3 py-1.5 transition ${genderFilter === 'all' ? 'bg-[#cba158] text-[#14100c] font-semibold' : 'text-[#a8998a] hover:text-white'}`}
            >
              All
            </button>
            <button
              onClick={() => setGenderFilter('men')}
              className={`px-3 py-1.5 transition ${genderFilter === 'men' ? 'bg-[#cba158] text-[#14100c] font-semibold' : 'text-[#a8998a] hover:text-white'}`}
            >
              Men
            </button>
            <button
              onClick={() => setGenderFilter('women')}
              className={`px-3 py-1.5 transition ${genderFilter === 'women' ? 'bg-[#cba158] text-[#14100c] font-semibold' : 'text-[#a8998a] hover:text-white'}`}
            >
              Women
            </button>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-[#181411] border border-[#332921] hover:border-[#cba158]/60 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8)] relative"
            >
              {service.popular && (
                <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-[#cba158] to-[#dfb76c] text-[#14100c] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 shadow flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-[#14100c]" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#f7f2ea] group-hover:text-[#cba158] transition-colors leading-snug">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#a69687] mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#cba158]" />
                    {service.duration}
                  </span>
                  <span>•</span>
                  <span className="uppercase tracking-wider text-[10px] px-2 py-0.5 bg-[#251e18] border border-[#3d3025] text-[#d6c7b7]">
                    {service.gender}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#aba094] leading-relaxed font-light mb-5">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#261f18] flex items-center justify-between mt-2">
                <div>
                  <span className="text-xs text-[#8c7d70] block">Price</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#cba158]">
                    ₹{service.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => onBookService(service)}
                  className="inline-flex items-center gap-1.5 bg-[#241e1a] hover:bg-[#cba158] hover:text-[#14100c] text-[#e8ded1] text-xs font-semibold px-4 py-2.5 border border-[#45362a] hover:border-[#cba158] transition-all uppercase tracking-wider active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#1e1915] via-[#241e19] to-[#1e1915] border border-[#cba158]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#cba158]/15 border border-[#cba158]/40 flex items-center justify-center flex-shrink-0 text-[#cba158]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#f7f2ea] font-medium">100% Genuine Certified Products</h4>
              <p className="text-xs sm:text-sm text-[#b5a596]">
                Single-use disposable towels, sterilized scissors and razors, dermatologically approved skin formulas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/919830145290?text=Hi%2C%20I%20want%20to%20inquire%20about%20salon%20packages%20and%20rates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-5 py-2.5 border border-[#cba158] text-[#cba158] hover:bg-[#cba158] hover:text-[#14100c] text-xs font-semibold uppercase tracking-wider transition"
            >
              Inquire Custom Package
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
