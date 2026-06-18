/**
 * gallery.ts
 * Fine-art photo gallery data with Pinterest-style masonry styling in mind.
 * Featuring various aspect ratios to create elegant, dynamic pacing.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "Bridal" | "Eyes" | "Hair" | "Editorial" | "Behind The Scenes";
  imageUrl: string;
  aspectRatio: "tall" | "square" | "wide"; // Powers structural sizing in CSS
  alt: string;
  description?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Signature Traditional Kundan Bridal Look",
    category: "Bridal",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "tall",
    alt: "High definition Indian bridal look by Kunal with Kundan jewelry",
    description: "Deep red bridal finish with traditional golden eye shadow."
  },
  {
    id: "g-2",
    title: "Luxury Rose Gold Glitter Cut-Crease",
    category: "Eyes",
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "square",
    alt: "Luxury rose gold glitter cut crease makeup close up",
    description: "Intricate eye detailing highlighting custom lash mapping."
  },
  {
    id: "g-3",
    title: "Beads & Royal Braid Artistry",
    category: "Hair",
    imageUrl: "https://images.unsplash.com/photo-1605497746444-ac9bda532dfc?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "tall",
    alt: "Elenagt traditional wedding hair braid with flowers and gold accessories",
    description: "Royal jasmine braid styling customized for South Indian wedding looks."
  },
  {
    id: "g-4",
    title: "Modern Minimalist Glass Skin Base",
    category: "Editorial",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "tall",
    alt: "Model displaying high end glass skin glow makeup",
    description: "Editorial cover look demonstrating satin base hydration."
  },
  {
    id: "g-5",
    title: "Luxury Bridal Prep on Studio Set",
    category: "Behind The Scenes",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "wide",
    alt: "Behind the scenes makeup application view by Kunal",
    description: "Kunal fine-tuning the signature lip shape before spotlight capture."
  },
  {
    id: "g-6",
    title: "Smokey Kohl Eye Artistry",
    category: "Eyes",
    imageUrl: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "square",
    alt: "Deep dramatic smokey eye shadow makeup close up",
    description: "Intense black kohl smoked with dark bronze pigments."
  },
  {
    id: "g-7",
    title: "The Regal Red Veil Elegance",
    category: "Bridal",
    imageUrl: "https://images.unsplash.com/photo-1610444583731-9e1e09940735?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "tall",
    alt: "Indian bride under red dupatta veil smiling",
    description: "Timeless traditional reception beauty, captured in HD."
  },
  {
    id: "g-8",
    title: "Sleek Hollywood Glam Waves",
    category: "Hair",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "square",
    alt: "Model with shiny thick Hollywood curls",
    description: "Sculpted side-sweep waves featuring intense gloss locks."
  },
  {
    id: "g-9",
    title: "Intricate Diamond Choker Look",
    category: "Bridal",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800",
    aspectRatio: "wide",
    alt: "Bride in premium silver diamond choker and pastel pink outfit",
    description: "Perfect pastel fusion bridal makeup for daytime ceremonies."
  }
];
