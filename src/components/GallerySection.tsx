import React, { useState } from 'react';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';
import { Sparkles, Eye, X, Camera, ExternalLink, Phone } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Ambiance', 'Haircuts', 'Color', 'Hair Spa', 'Beard'];

  const filteredItems = activeFilter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#14110e] text-[#f4eee6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#241d17] border border-[#cba158]/30 text-[#cba158] text-[11px] sm:text-xs font-cinzel tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 whitespace-nowrap">
            <Camera className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">Salon Lookbook & Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f2ea] tracking-tight mb-4">
            Visual Craftsmanship
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b0a091] leading-relaxed font-light">
            Take a glance inside our Rajarhat salon space, relaxing leather lounge, and signature client styling results straight from our Google Business profile.
          </p>
        </div>

        {/* Category Pills & Google Photos Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#241c16]">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#cba158] text-[#14100c] border-[#cba158] font-bold shadow-md'
                    : 'bg-[#1b1714] text-[#cfc1b2] border-[#382c22] hover:border-[#cba158]/50 hover:text-[#f4eee6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <a
            href={SALON_INFO.gmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#cba158] hover:text-[#dfb76c] uppercase tracking-wider border border-[#cba158]/40 hover:border-[#dfb76c] px-4 py-2 bg-[#1b1714] transition"
          >
            <span>View All Photos on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative overflow-hidden bg-[#1a1613] border border-[#362b21] cursor-pointer aspect-[4/3] transform hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Content on Image */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="self-end">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#12100e]/80 text-[#cba158] border border-[#cba158]/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-[#f7f2ea] group-hover:text-[#cba158] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b0a091] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#cba158] font-semibold mt-2 uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#181411] border border-[#cba158]/50 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 text-[#e8ded1] hover:text-[#cba158] p-2 bg-[#12100e]/80 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="md:col-span-4 p-6 flex flex-col justify-between bg-[#1a1613]">
                <div>
                  <span className="text-xs font-bold text-[#cba158] tracking-widest uppercase mb-2 block">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#f7f2ea] mb-3">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-[#b5a596] leading-relaxed mb-6 font-light">
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#31271f] space-y-2">
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="w-full py-3 bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call To Reserve Style</span>
                  </a>
                  <a
                    href={SALON_INFO.gmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#251e18] hover:bg-[#332a22] text-[#e8ded1] text-xs font-medium uppercase tracking-wider text-center block transition border border-[#3b2f24]"
                  >
                    View on Google Business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
