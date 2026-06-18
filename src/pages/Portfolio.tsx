import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, Grid, Eye } from "lucide-react";
import { portfolioItems } from "../data/portfolio";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import PortfolioCard from "../components/ui/PortfolioCard";
import Lightbox from "../components/common/Lightbox";

type CategoryFilter = "All" | "Bridal" | "Engagement" | "Reception" | "Party" | "Fashion" | "Editorial";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories: CategoryFilter[] = [
    "All", "Bridal", "Engagement", "Reception", "Party", "Fashion", "Editorial"
  ];

  const filteredItems = selectedFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <>
      <SEO title="Bridal Portfolio - Glow With Kunal" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Bride Portrait"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
            Pure Canvas Art
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Signature Portfolio
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             Refined transformations matching real bridal visions
          </p>
        </div>
      </section>

      {/* Main Filter Section */}
      <section className="py-20 md:py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle="The Gallery of Elegance"
            title="Symmetry & Radiance"
            description="Explore our filter catalog. Each look has been meticulously recorded without heavy artificial filters, preserving the true high-contrast luxury skin texture and color."
          />

          {/* Filtering tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 border-b border-burgundy/10 pb-6">
            {categories.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest font-luxury font-bold font-medium transition-colors relative cursor-pointer ${
                    active ? "text-gold" : "text-soft-gray hover:text-warm-white"
                  }`}
                >
                  {cat}
                  {active && (
                    <motion.span
                      layoutId="portfolioActiveTabIndicator"
                      className="absolute -bottom-6 left-0 w-full h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Portfolio grid display */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onOpenLightbox={(img) => setLightboxImage(img)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty fallback state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-charcoal border border-burgundy/10 p-8 max-w-md mx-auto">
              <span className="text-gold uppercase tracking-wider font-luxury h3 text-sm font-bold block mb-2">No looks recorded yet</span>
              <p className="text-xs text-soft-gray leading-relaxed font-light">More looks in this category will be uploaded shortly. Connect directly with Kunal to view intermediate offline drafts.</p>
            </div>
          )}

        </div>
      </section>

      {/* Reusable Zoom lightbox */}
      <Lightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
