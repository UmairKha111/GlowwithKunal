import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          className="fixed inset-0 z-50 bg-luxury-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-burgundy/60 text-gold hover:bg-burgundy hover:text-warm-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Frame content */}
          <motion.div
            className="relative max-w-4xl w-full max-h-[85vh] flex justify-center items-center overflow-hidden border border-burgundy/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()} // Stop closing on image click
          >
            <img
              src={imageUrl}
              alt="Expanded view portfolio"
              className="w-full h-auto max-h-[80vh] object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Elegant tiny branding foot on modal */}
            <div className="absolute bottom-0 left-0 w-full bg-luxury-black/80 py-2.5 px-4 text-center border-t border-burgundy/10">
              <span className="font-luxury uppercase text-[10px] tracking-[0.25em] text-gold font-bold">
                 Glow With Kunal — Fine Bridal Artistry
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
