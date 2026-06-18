/**
 * types.ts
 * Global typescript types shared across the Glow With Kunal application.
 */

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  pricingPlaceholder: string;
  popular?: boolean;
  idealFor: string;
  includes: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  eventType: string;
  rating: number;
  reviewDate: string;
  avatarUrl?: string;
  quote: string;
  fullReview: string;
  featured: boolean;
  tags: string[];
}

export interface VideoReviewItem {
  id: string;
  clientName: string;
  thumbnailUrl: string;
  duration: string;
  weddingLocation: string;
  embedUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal" | "Engagement" | "Reception" | "Party" | "Fashion" | "Editorial";
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  venue: string;
  year: string;
  highlighted: boolean;
  clientName?: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Bridal" | "Eyes" | "Hair" | "Editorial" | "Behind The Scenes";
  imageUrl: string;
  aspectRatio: "tall" | "square" | "wide";
  alt: string;
  description?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Bookings" | "Artistry & Techniques" | "Logistics & Travel";
}
