import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "gold" | "burgundy" | "outline" | "dark";
  fullWidth?: boolean;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

export default function Button({
  id,
  onClick,
  children,
  variant = "gold",
  fullWidth = false,
  icon = false,
  type = "button",
  className = "",
  href
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-widest uppercase font-luxury font-medium transition-all duration-300 rounded-none cursor-pointer select-none focus:outline-none";
  
  const variants = {
    gold: "bg-gold text-luxury-black hover:bg-gold-hover border border-gold shadow-md shadow-gold/10",
    burgundy: "bg-burgundy text-warm-white hover:bg-burgundy-light border border-burgundy",
    outline: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-luxury-black",
    dark: "bg-charcoal text-warm-white border border-burgundy/30 hover:border-gold/50 hover:bg-rich-brown"
  };

  const finalClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    if (href.startsWith("http")) {
      return (
        <motion.a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={finalClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4" />}
        </motion.a>
      );
    }
    
    // Fallback normal link style
    return (
      <motion.a
        id={id}
        href={href}
        className={finalClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      className={finalClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4 text-current" />}
    </motion.button>
  );
}
