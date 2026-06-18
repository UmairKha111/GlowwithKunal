import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { ServiceItem } from "../../types";
import { generateWhatsAppLink } from "../../data/siteConfig";

interface ServiceCardProps {
  key?: string | number;
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Generate customized WhatsApp query link for this service
  const inquiryLink = generateWhatsAppLink({
    eventType: service.name,
    message: `I'm interested in booking the "${service.name}" package. Please share details regarding availability.`
  });

  return (
    <motion.div
      className={`relative bg-charcoal border ${
        service.popular ? "border-gold/50 shadow-gold/5" : "border-burgundy/15 hover:border-gold/30"
      } p-6 md:p-8 flex flex-col justify-between transition-all duration-300 luxury-glow`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Popular tag overlay */}
      {service.popular && (
        <span className="absolute -top-3.5 right-6 bg-gold text-luxury-black text-[9px] font-luxury font-bold tracking-[0.25em] uppercase px-4 py-1.5 border border-gold/40">
          Signature Service
        </span>
      )}

      <div>
        {/* Header name & brief */}
        <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-semibold font-luxury block mb-2">
          {service.idealFor}
        </span>
        <h3 className="text-xl md:text-2xl font-luxury font-bold text-warm-white tracking-wide mb-3">
          {service.name}
        </h3>
        <p className="text-xs md:text-sm text-soft-gray/95 font-light leading-relaxed mb-6">
          {service.longDescription}
        </p>

        {/* Dynamic inclusions list */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-luxury text-gold tracking-widest uppercase font-bold">
            Key Package Features
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-soft-gray">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing and Book Action footer */}
      <div className="pt-6 border-t border-burgundy/15 mt-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-soft-gray/70">
              ESTIMATED PACKAGE RETAINER
            </span>
            <span className="text-gold font-luxury text-sm font-semibold tracking-wider mt-1">
              {service.pricingPlaceholder}
            </span>
          </div>
        </div>

        <a
          href={inquiryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center tracking-widest text-xs uppercase bg-burgundy/90 text-warm-white hover:bg-burgundy-light border border-gold/30 hover:border-gold font-luxury font-bold py-3.5 px-6 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          Inquire Over WhatsApp
          <ArrowRight className="w-4 h-4 text-gold" />
        </a>
      </div>
    </motion.div>
  );
}
