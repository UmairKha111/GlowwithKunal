/**
 * faq.ts
 * Curated, premium Frequently Asked Questions about luxury markup services.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Bookings" | "Artistry & Techniques" | "Logistics & Travel";
}

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you travel to venues in Delhi NCR or other states in India?",
    answer: "Yes, Kunal and his elite hair/drape technicians travel globally for bridal bookings. Whether your wedding is of a destination nature in Rajasthan, Goa, or localized in Delhi, Noida, or Gurugram, we coordinate premium travel logistics to deliver seamless service at your hotel suite or venue.",
    category: "Logistics & Travel"
  },
  {
    id: "faq-2",
    question: "What is the difference between Ultra HD and Airbrush Makeup?",
    answer: "Ultra HD makeup utilizes customized liquid or cream formulations applied by manual specialized high-blend stippling brushes. It offers unparalleled warmth, natural texture, and perfect control. Airbrush makeup uses a specialized compressor nozzle spraying a fine mist of silicon-based micro-droplets. It creates an extremely lightweight, transferproof, 100% waterproof layer, making it highly recommended for summer events or high-moisture layouts.",
    category: "Artistry & Techniques"
  },
  {
    id: "faq-3",
    question: "Do you offer makeup trials before confirming the booking?",
    answer: "Yes, we offer fully premium, customized bridal makeup trials. Trials are held at our central studio base in Noida/Delhi. Due to the high demand for prime wedding calendar dates, trials are chargeable but can be partially adjusted against the final booking retainer upon immediate package finalization.",
    category: "Bookings"
  },
  {
    id: "faq-4",
    question: "How far in advance should I book Glow With Kunal for my bridal look?",
    answer: "For premium winter wedding months (typically November through February in India), our schedules are frequently reserved 6 to 9 months in advance. We highly recommend blocking your date immediately upon finalization of your wedding venue and outfit aesthetics.",
    category: "Bookings"
  },
  {
    id: "faq-5",
    question: "Are hair styling, dress draping, and luxury false eyelashes included in the packages?",
    answer: "Absolutely. All of our custom luxury signature bridal and modern reception packages are completely holistic. They include professional hairstyling, standard bridal hair extensions, sari or dupatta draping, jewelry setting, and hand-selected mink or 3D silk eyelashes.",
    category: "Artistry & Techniques"
  },
  {
    id: "faq-6",
    question: "Can you accommodate makeup bookings for large family groups or bridesmaids?",
    answer: "Yes. Along with Kunal, we have a hand-trained squad of premium junior artists and professional hair-stylists who excel at creating social glam looks. This guarantees your extended wedding family and bridesmaids are styled concurrently within the target timing window under Kunal's creative oversight.",
    category: "Logistics & Travel"
  }
];
