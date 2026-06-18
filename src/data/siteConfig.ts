/**
 * siteConfig.ts
 * Centralized configuration for the Glow With Kunal brand.
 * Any high-level changes (social handles, contact, logo updates) should be made here.
 */
import logoImage from "../assets/images/logo-kunal.jpg";
import heroBanner from "../assets/images/kunals-bridal.jpg";

export const siteConfig = {
  // Brand Information
  brandName: "Glow With Kunal",
  ownerName: "Kunal",
  category: "Professional Makeup Artist",

  instagram: "@glowwithkunal_",
  instagramUrl: "https://www.instagram.com/glowwithkunal_/",

  // Contact Information
  contact: {
    phone: "+918287267350",
    displayPhone: "+91 8287267350",
    email: "bookings@glowwithkunal.com",

    address:
      "Luxury Studio, Sector 15, Noida, Delhi NCR - 201301",

    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112117.8465080517!2d77.26620950334816!3d28.58071871231652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a431281e0f%3A0x3cdf6a635848bb3f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin",

    areasServed: [
      "Delhi",
      "Noida",
      "Gurugram",
      "All India (Destination Weddings)",
    ],
  },

  // Brand Assets
  logo: logoImage,
  heroImage: heroBanner,

  // About Section
  about: {
    tagline: "Unveiling Your Most Luminous Self",

    storyTitle: "The Artist Behind The Glow",

    storyParagraphs: [
      "Kunal is an award-winning celebrity and luxury bridal makeup artist based in Delhi and Noida, traveling globally to craft breathtaking transformations.",

      "Recognized as the Emerging Makeup Artist of the Year East Delhi, Kunal elevates makeup beyond simple cosmetics. His signature style blends editorial precision with timeless bridal beauty.",

      "Whether creating a classic red bridal look, a modern destination wedding aesthetic, or a high-fashion editorial transformation, Kunal ensures every client receives a luxury and personalized experience."
    ],

    experience: "7+ Years of Elite Beauty Crafting",

    certifications: [
      "Emerging Makeup Artist of the Year — East Delhi",
      "Certified in Advanced HD & Airbrush Techniques",
      "Master Class with International Celebrity Stylists",
      "Global Bridal Artistry & Hair Design Certified"
    ],

    mission:
      "To create unforgettable beauty experiences that celebrate confidence, elegance, and individuality."
  },

  // SEO Settings
  seo: {
    defaultTitle:
      "Glow With Kunal | Premium Bridal & Luxury Makeup Artist",

    defaultDescription:
      "Luxury Bridal Makeup Artist in Delhi & Noida specializing in HD Makeup, Airbrush Makeup, Engagement, Reception, Fashion Editorial and Destination Weddings.",

    openGraph: {
      url: "https://glowwithkunal.com",
      type: "website",
      image: heroBanner
    }
  }
};

/**
 * Generates WhatsApp booking URL
 */
export function generateWhatsAppLink(details?: {
  name?: string;
  eventType?: string;
  date?: string;
  location?: string;
  message?: string;
}): string {
  const phone = siteConfig.contact.phone.replace(/\D/g, "");

  let text =
    "Hello Kunal,%0A%0AI am visiting your website and would like to inquire about makeup bookings.";

  if (details) {
    if (details.name)
      text += `%0A%0AName: ${details.name}`;

    if (details.eventType)
      text += `%0AEvent Type: ${details.eventType}`;

    if (details.date)
      text += `%0AEvent Date: ${details.date}`;

    if (details.location)
      text += `%0ALocation: ${details.location}`;

    if (details.message)
      text += `%0AMessage: ${details.message}`;
  }

  text +=
    "%0A%0APlease let me know your availability and package details.%0A%0AThank you.";

  return `https://wa.me/${phone}?text=${text}`;
}