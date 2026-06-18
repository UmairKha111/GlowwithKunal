import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, MapPin, Sparkles } from "lucide-react";
import { PortfolioItem } from "../../types";

interface PortfolioCardProps {
  key?: string | number;
  item: PortfolioItem;
  onOpenLightbox: (imageUrl: string) => void;
}

export default function PortfolioCard({ item, onOpenLightbox }: PortfolioCardProps) {
  const [showBefore, setShowBefore] = useState(false);

  return (
    <motion.div
      layout
      className="group bg-charcoal border border-burgundy/10 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Photo Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-luxury-black cursor-pointer">
        <AnimatePresence mode="wait">
          <motion.img
            key={showBefore ? "before" : "after"}
            src={showBefore && item.beforeImageUrl ? item.beforeImageUrl : item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 z-10 bg-burgundy/95 text-gold text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 font-luxury border border-gold/20">
          {item.category}
        </span>

        {/* Before / After Switcher Overlay if before image is available */}
        {item.beforeImageUrl && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowBefore(!showBefore);
            }}
            className="absolute top-4 right-4 z-10 bg-gold text-luxury-black text-[10px] tracking-[0.15em] uppercase font-bold px-3.5 py-1.5 transition-colors hover:bg-gold-hover flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" />
            {showBefore ? "Show After" : "Show Before"}
          </button>
        )}

        {/* Dark Elegant Hover Overlay */}
        <div 
          onClick={() => onOpenLightbox(item.imageUrl)}
          className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
        >
          <div className="flex justify-center mb-4">
            <span className="p-3 rounded-full bg-gold/90 text-luxury-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="w-5 h-5" />
            </span>
          </div>
          
          <h3 className="font-luxury text-lg text-warm-white tracking-wide font-semibold">
            {item.title}
          </h3>
          
          <div className="flex items-center gap-1 text-gold text-xs mt-2">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium">{item.venue}</span>
          </div>

          <p className="text-xs text-soft-gray/90 mt-2 line-clamp-2 font-light">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-burgundy/20">
            {item.details.slice(0, 2).map((det, idx) => (
              <span key={idx} className="text-[10px] bg-burgundy/50 text-gold-muted px-2 py-0.5 rounded-none font-medium">
                {det}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Text Display underneath for mobile / clean lists */}
      <div className="p-4 border-t border-burgundy/10 md:hidden block">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-luxury text-sm font-semibold tracking-wide text-warm-white">
              {item.title}
            </h3>
            <span className="text-xs text-soft-gray inline-flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 text-gold" /> {item.venue}
            </span>
          </div>
          <span className="text-[10px] text-gold font-mono uppercase bg-rich-brown px-2 py-0.5 border border-burgundy/10">
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
