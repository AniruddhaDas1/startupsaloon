import React from 'react';
import { REVIEWS, SALON_INFO } from '../data/salonData';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#161310] text-[#f4eee6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Rating Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#2b221b]">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-[#cba158] font-cinzel mb-2 whitespace-nowrap">
              <Star className="w-4 h-4 fill-[#cba158] flex-shrink-0" />
              <span className="whitespace-nowrap">Verified Google Reviews</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f2ea] font-normal">
              Loved by Rajarhat & Kolkata
            </h2>
          </div>

            {/* Rating Badge */}
            <div className="flex items-center gap-4 bg-[#1e1915] border border-[#3b2f24] px-5 py-3.5">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#cba158]">
                {SALON_INFO.rating}
              </div>
              <div className="border-l border-[#3a2e24] pl-4">
                <div className="flex text-amber-400 gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-[#a8998a]">Based on {SALON_INFO.totalReviews}+ Google Business Reviews</div>
              </div>
              <a
                href={SALON_INFO.gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-2 text-[#cba158] hover:text-white bg-[#282019] hover:bg-[#382c22] transition rounded"
                title="Open Google Maps Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map(review => (
            <div
              key={review.id}
              className="bg-[#1b1714] border border-[#332920] hover:border-[#cba158]/50 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-md"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#cba158]/40"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#f7f2ea] flex items-center gap-1.5">
                        {review.author}
                      </h4>
                      <span className="text-[11px] text-[#8c7d70]">{review.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 bg-[#251e18] border border-[#3d3025] text-[10px] text-[#cba158] font-medium mb-3">
                  Service: {review.service}
                </div>

                {/* Comment Text */}
                <p className="font-sans text-xs sm:text-sm text-[#b8a99a] leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-[#261f18] flex items-center justify-between text-[11px] text-[#8c7d70]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Google Verified Client
                </span>
                <span className="text-[#a39485]">Rajarhat</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SALON_INFO.gmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#cba158] hover:text-[#dfb76c] border border-[#cba158]/40 hover:border-[#dfb76c] px-6 py-2.5 bg-[#1a1613] transition"
          >
            <span>Read all reviews on Google Business Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
