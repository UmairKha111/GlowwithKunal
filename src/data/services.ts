/**
 * services.ts
 * Premium makeup services and pricing/package descriptions.
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

export const services: ServiceItem[] = [
  {
    id: "bridal-makeup",
    name: "Luxury Bridal Artistry",
    shortDescription: "Ultra-high definition signature bridal look designed with editorial excellence.",
    longDescription: "The ultimate bridal treatment meticulously handcrafted for your special day. Kunal provides standard custom color mapping and premium skin prep routines matching your skin tone, wedding attire, and jewelry parameters.",
    benefits: [
      "Custom 2-step hyper-hydration prep for a true lit-from-within glow",
      "Premium luxury long-wear formulation certified for up to 16 hours",
      "Signature high-definition lash design tailored to eye shape",
      "Sari draping, hair accessories positioning, and dupatta setting included"
    ],
    pricingPlaceholder: "Packages from ₹25,000 onwards",
    popular: true,
    idealFor: "Modern & Traditional Brides seeking perfect detailing",
    includes: [
      "Signature HD Makeup",
      "Premium Styling & Hairdo",
      "Dupatta / Veil Drape & Saree Setting",
      "Premium 3D Lash Extensions",
      "Luxury Nail Polishing"
    ]
  },
  {
    id: "airbrush-bridal",
    name: "Premium Airbrush Bridal",
    shortDescription: "Flawless, water-resistant silicon-based spraying for absolute perfection under cameras.",
    longDescription: "Utilizing professional-grade airbrush compressors, this high-end service offers an weightless, touch-matched canvas that looks incredibly natural while displaying unparalleled matte or dewy performance under high-flash studio setups.",
    benefits: [
      "100% transfer-resistant and sweat-proof, ideal for long summer functions",
      "Photorealistic seamlessness suitable for 8K video capture",
      "Extremely lightweight wear that lets your skin breathe naturally",
      "Complete chest, neck, and shoulder color synchronization"
    ],
    pricingPlaceholder: "Packages from ₹32,000 onwards",
    popular: false,
    idealFor: "Summer weddings, outdoor ceremonies, and close-up cinematic shoots",
    includes: [
      "Full Silicon Airbrush Base",
      "Luxury Hair Artistry",
      "Draping & Jewelry Placement",
      "Custom Highlight & Contour",
      "Studio Grade Eyelashes"
    ]
  },
  {
    id: "engagement-makeup",
    name: "Engagement / Sagan Radiance",
    shortDescription: "Sophisticated, balanced and luminous palettes tailored for the ring ceremony.",
    longDescription: "Designed for intermediate lightning settings typical of Sagan and Engagement soirées. Features soft glowing hues, custom under-eye luminosity, and subtle eye definitions matching contemporary pastel gagra or modern gown ensembles.",
    benefits: [
      "Decongested soft canvas with delicate blush balancing",
      "Semi-dramatic eye detailing optimized for candlelit rooms",
      "Premium contour modeling to highlight delicate jawline aesthetics",
      "Premium hair styling ranging from messy modern buns to soft royal waves"
    ],
    pricingPlaceholder: "Packages from ₹15,000 onwards",
    idealFor: "Pre-wedding announcement events, sagan, and ring ceremonies",
    includes: [
      "HD / Airbrush Prep Glow",
      "Luxury Hairstyling",
      "Draping & Outfit Setup",
      "Eyelash Styling"
    ]
  },
  {
    id: "reception-makeup",
    name: "Sheen Reception Elegance",
    shortDescription: "Glamorous, high-contrast evening styling made for the modern reception spotlight.",
    longDescription: "A sophisticated, high-drama, and luxury evening style featuring intense eye aesthetics (smokey gold, metallic bronze) combined with high-contrast lips and glowing highlight projections perfect for night-long celebration photography.",
    benefits: [
      "Signature spotlight eye contours including selective glitter pigments",
      "Deep contouring tailored for high ambient indoor stage lightning",
      "Intense smudge-resistant luxurious dynamic lips",
      "Crown jewelry framing and contemporary royal hairstyling"
    ],
    pricingPlaceholder: "Packages from ₹18,000 onwards",
    idealFor: "Grand indoor dinner receptions, champagne dinners, and gala stages",
    includes: [
      "Ultra HD Deep-Glow Finish",
      "High-Contrast Modern Hairstyling",
      "Veil/Gown draping and structure setting",
      "Glitter Cut-Crease Eye Artistry"
    ]
  },
  {
    id: "party-makeup",
    name: "Luxury Party Glam",
    shortDescription: "Bespoke, refined social makeover for family cocktails, mehendi, and sangeet parties.",
    longDescription: "Perfect social party makeup engineered to keep you standing out. Whether you desire a minimalist clean-girl glow or a rich, modern traditional vibe, Kunal customizes your look for optimal group-photo confidence.",
    benefits: [
      "Quick skin hydration reset with luxury hydrating primers",
      "Balanced makeup mapping that matches light or heavy traditional outfits",
      "Frizz-free signature salon blowout or soft-curl styling",
      "Fast application with highly stable material choice"
    ],
    pricingPlaceholder: "Packages from ₹10,000 onwards",
    idealFor: "Cocktail parties, premium sangeet events, and bridesmaids",
    includes: [
      "Premium HD Party Base",
      "Soft Glam Hair-styling",
      "Dupatta / Saree Setup",
      "Lash application"
    ]
  },
  {
    id: "editorial-fashion",
    name: "Fashion & Editorial Artistry",
    shortDescription: "Avant-garde, creative, and bold styling for runways, campaigns, and magazine covers.",
    longDescription: "Collaborative, conceptual beauty layout mapping built specifically for production lights, luxury catalogs, designers' lookbooks, and high-fashion runways. Kunal works alongside directors to implement high-impact looks.",
    benefits: [
      "High-concept creative color theory application",
      "Precision feature manipulation and graphical liner details",
      "Matte structural contouring suitable for high-speed strobe lights",
      "On-set touchup consulting and conceptual adaptability"
    ],
    pricingPlaceholder: "Bespoke pricing upon creative request",
    idealFor: "Fashion designers, magazine editors, and high-fashion modeling agencies",
    includes: [
      "High-Concept Runway Base",
      "Thematic / Sculpted Hair Setting",
      "Prosthetic / Accessory Integration Support",
      "Dual Matte/Gloss Creative Canvas"
    ]
  },
  {
    id: "groom-styling",
    name: "Modern Groom Grooming & Styling",
    shortDescription: "Subtle, camera-ready grooming designed to enhance features naturally without looking heavy.",
    longDescription: "A specialized, strictly minimal HD camera preparation designed for modern grooms. It addresses texture, neutralizes shine, and balances beard outlines for a unified aesthetic next to the elegant bride.",
    benefits: [
      "100% invisible natural-matte skin correction",
      "No-shine high-definition professional camera preparation",
      "Beard shaping, hair structuring, and temple fading optimization",
      "Collar-safe, completely dry formulation that will not rub off on outfits"
    ],
    pricingPlaceholder: "Packages from ₹7,000 onwards",
    idealFor: "Grooms who want to look effortlessly handsome under grand stage strobe units",
    includes: [
      "Invisible Anti-Shine Prep",
      "Precise Hair Grooming & Setting",
      "Hydration Booster & Texture Corrector",
      "Skin Tone Balancing"
    ]
  }
];
