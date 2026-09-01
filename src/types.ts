export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'spa' | 'skin' | 'beard' | 'bridal' | 'hands_feet';
  gender: 'unisex' | 'men' | 'women';
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  avatar: string;
  googleVerified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface BookingDetails {
  serviceIds: string[];
  stylistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
