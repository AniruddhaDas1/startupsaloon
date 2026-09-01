import { ServiceItem, Stylist, Review, GalleryItem } from '../types';

export const SALON_INFO = {
  name: 'Start Up Unisex Salon',
  tagline: 'More Than Just A Haircut',
  subtitle: 'Premium unisex grooming, handcrafted hair styling, and modern social relaxation spaces combined into one elevated experience.',
  address: '211 Road, Near DRR Studio, Khamar Shibtala, Rajarhat, Kolkata, West Bengal 700135',
  landmark: 'Near DRR Studio & Shibtola Bus Stop, Rajarhat Main Road',
  phone: '+91 98301 45290',
  email: 'contact@startupsalon.in',
  coordinates: {
    lat: 22.623129,
    lng: 88.4989959,
  },
  gmapUrl: 'https://www.google.com/maps/place/Start+Up+Unisex+Salon/@22.6231495,88.4989913,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBiSuXjGIqFcPJ_h41T6v2z!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWm34gP8wPeyEo9qqYfyQ_RpT6OFsH2ujmt56H4Mmgd9TPqyQY-Z-dMmDzaxX4WZGaNkMUPamlscwSJP6_tNLlBKtlG1eFX0cnBexlfMeoo1N0ECKHD7bqa_iS9nHbdflhYu02y6SSlXMGM%3Dw86-h152-k-no!7i1000!8i1778!4m11!1m2!2m1!1sunisex+salon+rajarhat+shibtola!3m7!1s0x39f8a199e41a0b47:0x6d61f8d022c32f77!8m2!3d22.623129!4d88.4989959!10e5!15sCh51bmlzZXggc2Fsb24gcmFqYXJoYXQgc2hpYnRvbGGSAQpoYWlyX3NhbG9u4AEA!16s%2Fg%2F11l2v214sk?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
  rating: 4.9,
  totalReviews: 17,
  hours: [
    { day: 'Monday - Friday', time: '9:30 AM - 9:30 PM' },
    { day: 'Saturday', time: '9:30 AM - 10:00 PM' },
    { day: 'Sunday', time: '9:30 AM - 10:00 PM' },
  ],
  socials: {
    instagram: 'https://instagram.com/startupunisexsalon',
    facebook: 'https://facebook.com/startupunisexsalon',
  }
};

export const SALON_SERVICES: ServiceItem[] = [
  // Haircuts & Styling
  {
    id: 'h1',
    name: "Gentleman's Signature Scissor Cut & Styling",
    category: 'hair',
    gender: 'men',
    price: 350,
    duration: '35 mins',
    description: 'Custom scissor consultation, neck taper, precision fading, invigorating scalp wash, and premium matte clay styling.',
    popular: true,
  },
  {
    id: 'h2',
    name: "Women's Creative Layered Cut & Blowout",
    category: 'hair',
    gender: 'women',
    price: 650,
    duration: '45 mins',
    description: 'Detailed face-framing texture, split-end removal, deep cleanse shampoo, nourishing conditioning, and velvet blowout.',
    popular: true,
  },
  {
    id: 'h3',
    name: "Classic Unisex Trim & Finish",
    category: 'hair',
    gender: 'unisex',
    price: 250,
    duration: '25 mins',
    description: 'Quick maintenance cut to restore clean edges and healthy length.',
  },
  {
    id: 'h4',
    name: 'Balayage & Global Hair Highlights',
    category: 'hair',
    gender: 'unisex',
    price: 3499,
    duration: '120 mins',
    description: 'Bespoke hand-painted sun-kissed tones using ammonia-free L\'Oreal Professional color with bond protector.',
    popular: true,
  },

  // Hair Spa & Treatments
  {
    id: 's1',
    name: 'Luxury Moroccan Argan Oil Hair Spa',
    category: 'spa',
    gender: 'unisex',
    price: 1200,
    duration: '50 mins',
    description: 'Intense hydration therapy for dull, frizzy hair with restorative steam, deep massage, and serum infusion.',
    popular: true,
  },
  {
    id: 's2',
    name: 'Nanoplastia & Hair Botox Treatment',
    category: 'spa',
    gender: 'unisex',
    price: 3999,
    duration: '150 mins',
    description: 'Formaldehyde-free rejuvenation treatment delivering smooth, glass-like shine for up to 5 months.',
    popular: true,
  },
  {
    id: 's3',
    name: 'L\'Oreal Keratin Protein Smoothening',
    category: 'spa',
    gender: 'unisex',
    price: 3199,
    duration: '140 mins',
    description: 'Tames untamable frizz and adds silky elasticity to straight or wavy hair texture.',
  },
  {
    id: 's4',
    name: 'Anti-Dandruff Scalp Detox Therapy',
    category: 'spa',
    gender: 'unisex',
    price: 950,
    duration: '40 mins',
    description: 'Purifies scalp congestion, balances natural sebum, and soothes itchiness with tea tree botanical extracts.',
  },

  // Skin Care & Facials
  {
    id: 'sk1',
    name: 'O3+ Diamond Glow Bridal Facial',
    category: 'skin',
    gender: 'unisex',
    price: 1850,
    duration: '60 mins',
    description: 'Deep micro-exfoliation, radiance boosting serum, tightening peel-off mask, and rejuvenating lymphatic drainage massage.',
    popular: true,
  },
  {
    id: 'sk2',
    name: 'Charcoal Deep Cleansing & D-Tan Therapy',
    category: 'skin',
    gender: 'unisex',
    price: 850,
    duration: '40 mins',
    description: 'Removes deep pollution residues, sun tan, blackheads, and restores uniform luminous skin tone.',
  },
  {
    id: 'sk3',
    name: 'Hydra-Infusion Medi-Facial',
    category: 'skin',
    gender: 'unisex',
    price: 2499,
    duration: '70 mins',
    description: '9-step clinical hydra-dermabrasion infusing hyaluronic acid, peptides, and antioxidant cold hammer seal.',
    popular: true,
  },

  // Beard & Grooming
  {
    id: 'b1',
    name: 'Royal Hot Towel Beard Sculpting & Razor Lineup',
    category: 'beard',
    gender: 'men',
    price: 250,
    duration: '25 mins',
    description: 'Steamed hot towel wrap, essential beard oils, precision straight-razor cheek lines, and cooling aftershave balm.',
    popular: true,
  },
  {
    id: 'b2',
    name: 'Beard Spa & Grey Camouflage Tinting',
    category: 'beard',
    gender: 'men',
    price: 450,
    duration: '35 mins',
    description: 'Deep conditioning softening mask paired with natural-looking subtle grey blending.',
  },

  // Bridal & VIP Packages
  {
    id: 'br1',
    name: 'Royal Bride Complete Transformation',
    category: 'bridal',
    gender: 'women',
    price: 8999,
    duration: '240 mins',
    description: 'HD Airbrush makeup, bridal hair couture styling, drape setting, luxury manicure & pedicure, and pre-event glow prep.',
    popular: true,
  },
  {
    id: 'br2',
    name: 'Groom Royalty Pre-Wedding Grooming',
    category: 'bridal',
    gender: 'men',
    price: 4499,
    duration: '180 mins',
    description: 'Signature haircut, beard sculpting, O3+ gold facial, full D-Tan, mani-pedi spa, and subtle hair styling.',
  },

  // Hands & Feet
  {
    id: 'hf1',
    name: 'Aroma Candle Manicure & Pedicure Spa',
    category: 'hands_feet',
    gender: 'unisex',
    price: 999,
    duration: '60 mins',
    description: 'Exfoliating botanical scrub, warm candle wax massage, cuticle care, callus softening, and nail buffing.',
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Master Rahul Debnath',
    role: 'Senior Creative Director & Barber',
    experience: '9+ Years',
    specialty: 'Precision Fades, Texture Crops & Beard Sculpting',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'st2',
    name: 'Priyanka Mukherjee',
    role: 'Master Hairdresser & Colorist',
    experience: '8+ Years',
    specialty: 'Balayage, Keratin Treatments & Women’s Styling',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'st3',
    name: 'Subham Roy',
    role: 'Skin Aesthetics & Spa Specialist',
    experience: '6+ Years',
    specialty: 'Hydra Facials, D-Tan & Relaxing Hair Spa',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Debanjan Chatterjee',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Undoubtedly the best unisex salon in Rajarhat Shibtola area! Rahul gave me a clean textured fade that lasted weeks. The coffee lounge vibe and hospitality are on another level compared to other local parlours.',
    service: "Gentleman's Signature Scissor Cut",
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    googleVerified: true,
  },
  {
    id: 'r2',
    author: 'Sneha Sengupta',
    rating: 5,
    date: '1 month ago',
    comment: 'Got my Nanoplastia & Hair Botox done here. My frizzy hair is now completely silky and manageable! Priyanka explained every step patiently. Clean, air-conditioned luxury setup with warm golden aesthetics.',
    service: 'Nanoplastia & Hair Botox',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    googleVerified: true,
  },
  {
    id: 'r3',
    author: 'Amitava Banerjee',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Super convenient location right at Shibtola Rajarhat main road. The hot towel beard styling and charcoal facial was super refreshing after a long work week. Highly recommended!',
    service: 'Royal Hot Towel Beard Sculpting',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    googleVerified: true,
  },
  {
    id: 'r4',
    author: 'Riya Das',
    rating: 5,
    date: 'Recently',
    comment: 'Booked their bridal pre-glow package before my sister\'s reception. The O3+ facial and hair blowout were stunning. Transparent pricing and no hidden costs.',
    service: 'O3+ Diamond Glow Bridal Facial',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    googleVerified: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Google Profile: Salon Styling & Hair Station',
    category: 'Ambiance',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm34gP8wPeyEo9qqYfyQ_RpT6OFsH2ujmt56H4Mmgd9TPqyQY-Z-dMmDzaxX4WZGaNkMUPamlscwSJP6_tNLlBKtlG1eFX0cnBexlfMeoo1N0ECKHD7bqa_iS9nHbdflhYu02y6SSlXMGM=w800-h600-k-no',
    description: 'Actual interior view from Google Business Profile showing modern ergonomic styling stations and mirrors.',
  },
  {
    id: 'g2',
    title: 'Master Scissor Styling & Barber Stations',
    category: 'Haircuts',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Precision scissor fades, beard trims, and signature styling using premium tools.',
  },
  {
    id: 'g3',
    title: 'Women’s Balayage & Global Highlights',
    category: 'Color',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    description: 'Seamless dimensional highlights and vibrant gloss finishes using ammonia-free colors.',
  },
  {
    id: 'g4',
    title: 'Rejuvenating Hair Spa & Wash Basin',
    category: 'Hair Spa',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    description: 'Ergonomic wash stations with soothing scalp acupressure massage and restorative steam.',
  },
  {
    id: 'g5',
    title: 'Chesterfield Hospitality Lounge',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    description: 'Warm leather seating and fresh espresso bar for a comfortable relaxing visit.',
  },
  {
    id: 'g6',
    title: 'Straight Razor Hot Towel Grooming',
    category: 'Beard',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional straight razor shave with essential oil hot towel wraps and beard oils.',
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Where is Start Up Unisex Salon located in Rajarhat?',
    a: 'We are situated at 211 Road, near DRR Studio at Khamar Shibtala, close to the Shibtola Bus Stop in Rajarhat, Kolkata 700135. Ample two-wheeler and vehicle parking is available.',
  },
  {
    q: 'Do I need an appointment or do you accept walk-ins?',
    a: 'Walk-ins are warmly welcome! However, to avoid waiting time during peak evening hours (5:00 PM – 9:00 PM) and weekends, we recommend reserving your slot online or by giving us a call at +91 98301 45290.',
  },
  {
    q: 'What brand of hair and skin products do you use?',
    a: 'We strictly use dermatologically tested, premium international brands including L\'Oréal Professionnel, Schwarzkopf, Matrix, O3+, Lotus Professional, and Moroccan Oil.',
  },
  {
    q: 'Is there a separate bridal or VIP grooming section?',
    a: 'Yes, we provide dedicated private grooming sections and personalized bridal makeover spaces for utmost privacy and comfort.',
  },
];
