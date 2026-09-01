import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LoungeFeatures } from './components/LoungeFeatures';
import { ServiceMenu } from './components/ServiceMenu';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingBar } from './components/FloatingBar';
import { ServiceItem } from './types';
import { SALON_SERVICES } from './data/salonData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setPreselectedService(null);
    setBookingModalOpen(true);
  };

  const handleBookSpecificService = (service: ServiceItem) => {
    setPreselectedService(service);
    setBookingModalOpen(true);
  };

  const handleBookByServiceName = (name: string) => {
    const matched = SALON_SERVICES.find(s => s.name.toLowerCase().includes(name.toLowerCase())) || SALON_SERVICES[0];
    setPreselectedService(matched);
    setBookingModalOpen(true);
  };

  const handleBookWithStylist = (stylistId: string) => {
    setBookingModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#12100e] text-[#f4eee6] font-sans selection:bg-[#cba158] selection:text-[#12100e]">
      
      {/* Top Navigation */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onNavigate={scrollToSection} 
      />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section matching reference image */}
        <HeroSection 
          onOpenBooking={handleOpenBooking} 
          onExploreLounge={() => scrollToSection('lounge')} 
        />

        {/* 2. 3-Card Lounge Features matching reference image */}
        <LoungeFeatures 
          onSelectCategory={(cat) => {
            scrollToSection('services');
          }}
          onOpenBookingWithService={handleBookByServiceName}
        />

        {/* 3. Comprehensive Price & Service Catalog */}
        <ServiceMenu 
          onBookService={handleBookSpecificService} 
        />

        {/* 4. Certified Stylists & Master Team */}
        <TeamSection 
          onBookWithStylist={handleBookWithStylist} 
        />

        {/* 5. Lookbook & Photo Gallery */}
        <GallerySection />

        {/* 6. Google 4.8★ Reviews */}
        <GoogleReviewsSection />

        {/* 7. Location (Rajarhat Shibtola), Map & Operating Hours */}
        <LocationHoursSection />
      </main>

      {/* 8. Footer matching reference bottom layout */}
      <Footer 
        onOpenBooking={handleOpenBooking} 
        onNavigate={scrollToSection} 
      />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        initialService={preselectedService} 
      />

      {/* Floating CTA bar on mobile/desktop */}
      <FloatingBar 
        onOpenBooking={handleOpenBooking} 
      />

    </div>
  );
}
