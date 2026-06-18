import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye } from "lucide-react";
import { galleryItems } from "../data/gallery";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import Lightbox from "../components/common/Lightbox";

type GalleryCategory = "All" | "Bridal" | "Eyes" | "Hair" | "Editorial" | "Behind The Scenes";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories: GalleryCategory[] = [
    "All", "Bridal", "Eyes", "Hair", "Editorial", "Behind The Scenes"
  ];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Height multiplier representation helper for masonry heights
  const heightClasses = {
    tall: "aspect-[3/4.5]",
    square: "aspect-square",
    wide: "aspect-[16/10]"
  };

  return (
    <>
      <SEO title="Fine Art Gallery - Glow With Kunal" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Lip Gloss Palette Detail"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
             Premium Snapshots
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Fine Art Gallery
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             A highly detailed mosaic representation of fine beauty captures
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle="The Beauty Mosaic"
            title="The Details That Glow"
            description="A Pinterest-style fine selection of macro eye outlines, custom hair braids, and high-fashion backstage layouts."
          />

          {/* Filtering tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 border-b border-burgundy/10 pb-6">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest font-luxury font-bold transition-colors relative cursor-pointer ${
                    active ? "text-gold" : "text-soft-gray hover:text-warm-white"
                  }`}
                >
                  {cat}
                  {active && (
                    <motion.span
                      layoutId="galleryActiveCategoryIndicator"
                      className="absolute -bottom-6 left-0 w-full h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pinterest-style masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  className="break-inside-avoid bg-charcoal border border-burgundy/15 overflow-hidden group relative cursor-pointer-parent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxImage(item.imageUrl)}
                >
                  <div className={`relative ${heightClasses[item.aspectRatio]} overflow-hidden`}>
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Label overlay */}
                    <span className="absolute top-4 left-4 z-10 bg-burgundy/90 text-gold text-[9px] tracking-[0.2em] font-bold uppercase py-1 px-2 border border-gold/15">
                      {item.category}
                    </span>

                    {/* Elegant overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="p-2.5 rounded-full bg-gold/90 text-luxury-black w-fit mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                      </span>
                      <h3 className="font-luxury text-sm font-bold tracking-wide text-warm-white uppercase">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-[11px] text-soft-gray/90 mt-1 font-light">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Lighbox zoom */}
      <Lightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
