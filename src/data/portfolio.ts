/**
 * portfolio.ts
 * Luxury portfolio items representing various makeup transformations.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal" | "Engagement" | "Reception" | "Party" | "Fashion" | "Editorial";
  description: string;
  imageUrl: string;
  beforeImageUrl?: string; // Optional showcase for Before/After toggle list
  venue: string;
  year: string;
  highlighted: boolean;
  clientName?: string;
  details: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-bridal-1",
    title: "The Royal Rajasthani Bride",
    category: "Bridal",
    description: "Traditional vibrant red bridal makeup featuring structured gold-flecked lids, flawless high-definition glass skin base, and deep crimson velvety lips.",
    imageUrl: "https://i.ibb.co/mCBqBbkN/f682ac83-2287-4f73-b103-e10b7ae3962e.png",
    beforeImageUrl: "https://i.ibb.co/rKJy1xWs/3c8575ea-b8e5-44ee-9490-68a812f490be.png", // Soft minimal face before styling
    venue: "The Leela Palace, Delhi",
    year: "2025",
    highlighted: true,
    clientName: "Priyanka Malhotra",
    details: ["2-Step Hydration Base", "Gold dust cut-crease eyes", "Traditional high-bun setting", "Gota jewelry placement"]
  },
  {
    id: "port-bridal-2",
    title: "Ethereal Pastel Reception Glow",
    category: "Reception",
    description: "A breathtaking contemporary setup using rose gold highlights, dewy blush contours, and matching dusty-rose lipstick to fit a beautiful floral lehenga.",
    imageUrl: "https://i.ibb.co/CC33Md6/Screenshot-2026-06-22-225347.png",
    beforeImageUrl: "https://i.ibb.co/nN7mZYPF/Screenshot-2026-06-22-225332.png",
    venue: "DLF Golf Club, Gurugram",
    year: "2025",
    highlighted: true,
    clientName: "Neera Jindal",
    details: ["Airbrush silicon flawless cover", "Rose gold highlighter glow", "Hollywood soft-waves hairdo", "Mink eyelash integration"]
  },
  {
    id: "port-engage-1",
    title: "Sagan Lilac Champagne Eyes",
    category: "Engagement",
    description: "A modern glow emphasizing beautiful amethyst eye detailing, paired with sharp contours and crisp, satiny nude outlines.",
    imageUrl: "https://i.ibb.co/PzzJvLXn/fc1d44d1-07b4-411d-8922-a98ce5b27434.png",
    beforeImageUrl: "https://i.ibb.co/wF48xncb/7e4fee40-7100-47ad-8486-ad3ca489a586.png",
    venue: "Taj Mansingh, New Delhi",
    year: "2025",
    highlighted: false,
    clientName: "Riya Oberoi",
    details: ["High-Definition Glow Canvas", "Dusty lilac eyeshadow shading", "Glass-lips coating", "Floral braid setting"]
  },
  {
    id: "port-fashion-1",
    title: "Editorial Neon-Graphic Vogue",
    category: "Fashion",
    description: "High-fashion graphic conceptual eye painting with razor-sharp facial angles and wet-look hair, prepared specifically for a luxury cover.",
    imageUrl: "https://i.ibb.co/VWD2QFDR/f71d533d-dfd8-4676-bacd-f7ffbc980103.png",
    beforeImageUrl: "https://i.ibb.co/gZWpn0mb/069be1a1-5547-4f15-be41-d1a198d5fddb.png",
    venue: "Vogue India Campaign Location",
    year: "2026",
    highlighted: true,
    clientName: "Aditi Rao (Model)",
    details: ["Runway-matte control base", "Graphic technical high-precision crease line", "Extreme glow-sculpting outline", "Conceptual wet hairdo setting"]
  },
  {
    id: "port-editorial-1",
    title: "Sultry Noir & Chrome Bronze",
    category: "Editorial",
    description: "Rich metallic bronzed lids accented by velvet-finish matte skin and deep coffee outlines for a striking, mysterious high-contrast photoshoot.",
    imageUrl: "https://i.ibb.co/xqJBswN6/90ee83f1-5120-47b0-ae61-726e167ac230.png",
    beforeImageUrl: "https://i.ibb.co/rRrWLx3N/197a6213-d16b-4b2c-9982-b154b3bb7465.png",
    venue: "Aesthetic Studio, Noida",
    year: "2026",
    highlighted: false,
    clientName: "Tanya Sen (Model)",
    details: ["Chrome bronze shadow dusting", "Velvet finish skin prep", "Matte coffee-nude lips", "Sleek low-ponytail flow"]
  },
  {
    id: "port-party-1",
    title: "Cocktail Gold Glitter Glamour",
    category: "Party",
    description: "Glamorous party makeup blending shimmering golden under-eye hues and clean wing-liners, finished off with a playful pop of peach blush.",
    imageUrl: "https://i.ibb.co/Y7sV5Vvd/32574478-1567-426c-b070-607e0260271a.png",
     beforeImageUrl: "https://i.ibb.co/zVRNgJ9p/6999dbc7-8d87-44ef-93a6-8c9ce3d4eb93.png",
    venue: "The Oberoi, New Delhi",
    year: "2025",
    highlighted: false,
    clientName: "Megha Malhotra",
    details: ["Glow cocktail base", "Waterproof shimmer lids", "Peachy-dewy blush cheeks", "Elegant messy bun styling"]
  }
];
