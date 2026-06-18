import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  id?: string;
  subtitle?: string;
  title: string;
  align?: "center" | "left";
  description?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  id,
  subtitle,
  title,
  align = "center",
  description,
  className = ""
}: SectionHeadingProps) {
  const isCenter = align === "center";
  
  return (
    <div 
      id={id}
      className={`relative mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left"} ${className}`}
    >
      {subtitle && (
        <motion.span
          className="block text-xs md:text-sm tracking-[0.3em] text-gold uppercase font-luxury font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        className="text-2xl md:text-4xl lg:text-5xl font-luxury font-bold text-warm-white tracking-wider leading-tight mb-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h2>

      {/* Luxury Thin Line Separator */}
      <motion.div 
        className={`flex items-center gap-3 my-4 ${isCenter ? "justify-center" : "justify-start"}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="h-[1px] w-12 bg-burgundy-light"></span>
        <span className="w-1.5 h-1.5 bg-gold rotate-45"></span>
        <span className="h-[1px] w-12 bg-burgundy-light"></span>
      </motion.div>

      {description && (
        <motion.p
          className="text-sm md:text-base text-soft-gray font-light leading-relaxed mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
