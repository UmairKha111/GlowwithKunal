/**
 * testimonials.ts
 * Premium client reviews, ratings, and video review placeholders.
 */

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

export const testimonials: TestimonialItem[] = [
  {
    id: "review-1",
    clientName: "Aishwarya Sharma",
    location: "Chanakyapuri, Delhi",
    eventType: "Bridal Makeup",
    rating: 5,
    reviewDate: "November 2025",
    avatarUrl: "",
    quote: "Kunal made me look like an absolute royal queen. The under-eye makeup was air-flawless, and my base didn't move an inch through high emotional moments!",
    fullReview: "Booking Kunal for my destination wedding was the best decision I made. He was incredibly punctual, commencing skin prep at 3:00 AM. His sense of aesthetics is incredible — he listened to exactly what I wanted, keeping my traditional red saree balanced, with an ultra-glowing, non-cakey finish. Every photo had an ethereal glow. Complete genius!",
    featured: true,
    tags: ["Luminous Base", "Highly Punctual", "Saree Draping"]
  },
  {
    id: "review-2",
    clientName: "Dr. Riddhima Gupta",
    location: "Sector 44, Noida",
    eventType: "Engagement Radiance",
    rating: 5,
    reviewDate: "December 2025",
    avatarUrl: "",
    quote: "The airbrush makeup felt completely weightless! I received hundreds of compliments on how seamless and natural the glow looked.",
    fullReview: "Kunal did my makeup for both my Sagan and engagement night. Since both events had extremely bright professional photography setups, I was worried about looking too bright. But Kunal engineered a gorgeous, soft-contour look that accentuated my features without looking overdone. Highly recommended for any Delhi NCR bride!",
    featured: true,
    tags: ["Airbrush", "Soft Contour", "Natural Glow"]
  },
  {
    id: "review-3",
    clientName: "Meghna Oberoi",
    location: "DLF Phase 5, Gurugram",
    eventType: "Reception Elegance",
    rating: 5,
    reviewDate: "January 2026",
    avatarUrl: "",
    quote: "His attention to grooming detail and hairdo formulation is spectacular. My reception waves stayed perfect until dawn.",
    fullReview: "Kunal created a super elegant smokey-bronze aesthetic combined with a glossy nude lip for my reception. Not only was the makeup flawless, but his team designed a hair bun concept that was incredibly secure and gorgeous. He checks in on you continuously and is sweet, making sure you feel relaxed during stressful preparation hours.",
    featured: true,
    tags: ["Smokey Eyes", "Luxury Hairdo", "Patient & Calm"]
  },
  {
    id: "review-4",
    clientName: "Sanya Kochhar",
    location: "Greater Kailash, Delhi",
    eventType: "Party Makeup (Mehendi / Sangeet)",
    rating: 5,
    reviewDate: "February 2026",
    avatarUrl: "",
    quote: "Simply the best makeup artist in Delhi! Clean-girl makeup meets traditional sparkle.",
    fullReview: "I booked Kunal for my sister's Sangeet ceremony, and he did my makeup along with our mother's. He handled my mother's mature skin beautifully, using hydrating products that didn't settle into fine lines. For me, he created a beautiful, fresh lavender-tinged glow to match my outfit. We both looked spectacular!",
    featured: false,
    tags: ["Mature Skin Styling", "Social Glam", "Fresh Glow"]
  }
];

// Premium Luxury Video review placeholders
export interface VideoReviewItem {
  id: string;
  clientName: string;
  thumbnailUrl: string;
  duration: string;
  weddingLocation: string;
  embedUrl?: string; // YouTube or Instagram Reels URL placeholder
}

export const videoReviews: VideoReviewItem[] = [
  {
    id: "video-1",
    clientName: "Aishwarya & Nakul",
    thumbnailUrl: "/src/assets/images/bridal_hero_1781762221603.jpg",
    duration: "2:45 mins",
    weddingLocation: "Leela Palace, Delhi"
  },
  {
    id: "video-2",
    clientName: "Shefali & Kabir",
    thumbnailUrl: "https://picsum.photos/seed/bridal2/600/400",
    duration: "1:30 mins",
    weddingLocation: "Taj Mahal Palace, Noida Destination"
  }
];
