/**
 * siteConfig.ts
 * Centralized configuration for the Glow With Kunal brand.
 * Any high-level changes (social handles, contact, logo updates) should be made here.
 */

export const siteConfig = {
  brandName: "Glow With Kunal",
  ownerName: "Kunal",
  category: "Professional Makeup Artist",
  instagram: "@glowwithkunal_",
  instagramUrl: "https://www.instagram.com/glowwithkunal_/",
  
  // High-End Contact Details
  contact: {
    phone: "+918287267350", // Delhi/Noida premium professional phone format (Replace with actual phone)
    displayPhone: "+91 8287267350",
    email: "bookings@glowwithkunal.com",
    address: "Luxury Studio, Sector 15, Noida, Delhi NCR - 201301",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112117.8465080517!2d77.26620950334816!3d28.58071871231652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a431281e0f%3A0x3cdf6a635848bb3f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin",
    areasServed: ["Delhi", "Noida", "Gurugram", "All India (Destination Weddings)"],
  },

  // Premium Logo & Asset paths
  logo: "/src/assets/images/logo.kunal.jpg",
  heroImage: "/src/assets/images/kunals-bridal.jpg",
  
  // About Page story blocks
  about: {
    tagline: "Unveiling Your Most Luminous Self",
    storyTitle: "The Artist Behind The Glow",
    storyParagraphs: [
      "Kunal is an award-winning celebrity and luxury bridal makeup artist base in Delhi and Noida, traveling globally to craft breathtaking transformations. Over years of high-fashion and bridal industry experience, Kunal has refined a signature styling concept: editorial precision blended with modern, radiant luxury canvas work.",
      "Recognized as the 'Emerging MUA of the year East Delhi', Kunal elevates makeup beyond simple cosmetics. Under his signature methodology, skin is treated as a master canvas where deep hydration, color-correction, and sculpting produce an ethereal glass-skin radiance that looks timeless both in-person and under ultra-definition cameras.",
      "Whether design-crafting a classic traditional Indian red bridal structure, a sleek modern destination pastel look, or a bold high-fashion avant-garde aesthetic, Kunal ensures each client experiences a highly customized, luxury preparation journey that emphasizes their unique, intrinsic features."
    ],
    experience: "7+ Years of Elite Beauty Crafting",
    certifications: [
      "Emerging Makeup Artist of the year — East Delhi",
      "Certified in Advanced HD & Airbrush Techniques",
      "Master Class with International Celebrity Stylists",
      "Global Bridal Artistry & Hair Design Certified"
    ],
    mission: "To co-create an atmosphere of profound confidence, celebrating heritage and modernity through flawless, high-contrast, luminous beauty."
  },

  // SEO Configurations
  seo: {
    defaultTitle: "Glow With Kunal - Premium Bridal & Luxury Makeup Artist",
    defaultDescription: "Premium makeup artist based in Delhi/Noida specializing in Luxury Bridal, HD, Airbrush, and Fashion Editorial Makeup. Emerging MUA of the Year East Delhi.",
    openGraph: {
      url: "https://glowwithkunal.com",
      type: "website",
      image: "/src/assets/images/bridal_hero_1781762221603.jpg",
    }
  }
};

/**
 * Generates a pre-filled WhatsApp click-to-chat URL based on site config.
 */
export function generateWhatsAppLink(details?: {
  name?: string;
  eventType?: string;
  date?: string;
  location?: string;
  message?: string;
}): string {
  const basePhone = siteConfig.contact.phone.replace(/[^0-9+]/g, ""); // Clean formatting
  
  let text = `Hello Kunal,\n\nI am visiting your website and would love to inquire about professional makeup bookings.\n`;
  if (details) {
    if (details.name) text += `\n*Name:* ${details.name}`;
    if (details.eventType) text += `\n*Event Type:* ${details.eventType}`;
    if (details.date) text += `\n*Event Date:* ${details.date}`;
    if (details.location) text += `\n*Location:* ${details.location}`;
    if (details.message) text += `\n*Message:* ${details.message}`;
  } else {
    text += `\nPlease let me know your availability and customized packages for upcoming events.`;
  }
  
  text += `\n\nThank you!`;
  
  return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
}
