import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <footer className="bg-[#0e0c0a] text-[#f4eee6] border-t border-[#2a211a] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Center Section Matching Reference Bottom Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#241c16]">
          
          {/* Left Column: Brand Emblem & Socials */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#cba158]/60 bg-gradient-to-br from-[#241e1a] to-[#14110e] flex items-center justify-center p-1.5 shadow-md">
                <div className="w-full h-full rounded-full border border-[#cba158]/40 flex items-center justify-center text-[#cba158]">
                  <Sparkles className="w-5 h-5 text-[#cba158]" />
                </div>
              </div>
              <div>
                <span className="block font-cinzel text-lg font-bold tracking-[0.2em] text-[#f4eee6] uppercase">
                  Start Up
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#cba158] uppercase font-sans font-medium">
                  Unisex Salon
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9c8d7e] max-w-xs font-light">
              Rajarhat Shibtola's premier destination for bespoke haircuts, hair spa, aesthetic skin treatments, and bridal styling.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-[#cfc2b3] pt-1">
              <a 
                href={SALON_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#1c1713] border border-[#3b2f24] flex items-center justify-center hover:text-[#cba158] hover:border-[#cba158] transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={SALON_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#1c1713] border border-[#3b2f24] flex items-center justify-center hover:text-[#cba158] hover:border-[#cba158] transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1c1713] border border-[#3b2f24] flex items-center justify-center hover:text-[#cba158] hover:border-[#cba158] transition"
                aria-label="Google Maps Profile"
                title="Google Profile"
              >
                <MapPin className="w-4 h-4 text-[#cba158]" />
              </a>
            </div>
          </div>

          {/* Center Column: Slogan & Center Gold Button (Exact Reference Bottom Element) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f2ea] font-normal tracking-wide">
              Luxury & Craftsmanship
            </h3>
            <button
              onClick={onOpenBooking}
              className="bg-[#cba158] hover:bg-[#dfb76c] active:scale-95 text-[#14100c] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3 transition duration-200 shadow-xl cursor-pointer"
            >
              Explore Lounge & Book
            </button>
          </div>

          {/* Right Column: Contact info & Quick Booking Email */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right space-y-3">
            <a 
              href={`mailto:${SALON_INFO.email}`} 
              className="text-xs sm:text-sm text-[#e8ded1] hover:text-[#cba158] transition font-sans font-medium tracking-wide flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#cba158]" />
              <span>{SALON_INFO.email}</span>
            </a>
            
            <a 
              href={`tel:${SALON_INFO.phone}`} 
              className="text-sm font-serif text-[#cba158] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#cba158]" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <div className="text-xs text-[#8c7e71] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#cba158]" />
              <span>211 Rd, Khamar Shibtala, Rajarhat, Kolkata</span>
            </div>
          </div>

        </div>

        {/* Quick Nav Links */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#a8998a] border-b border-[#1c1611]">
          <button onClick={() => onNavigate('hero')} className="hover:text-[#cba158] transition cursor-pointer">Home</button>
          <button onClick={() => onNavigate('lounge')} className="hover:text-[#cba158] transition cursor-pointer">Lounge</button>
          <button onClick={() => onNavigate('services')} className="hover:text-[#cba158] transition cursor-pointer">Services & Prices</button>
          <button onClick={() => onNavigate('team')} className="hover:text-[#cba158] transition cursor-pointer">Stylists</button>
          <button onClick={() => onNavigate('gallery')} className="hover:text-[#cba158] transition cursor-pointer">Lookbook</button>
          <button onClick={() => onNavigate('reviews')} className="hover:text-[#cba158] transition cursor-pointer">Google Reviews (4.9★)</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#cba158] transition cursor-pointer">Location & Hours</button>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6b5f54] gap-3">
          <div>
            © {new Date().getFullYear()} Start Up Unisex Salon. All rights reserved. Rajarhat Shibtola, Kolkata.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for timeless elegance & grooming excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
