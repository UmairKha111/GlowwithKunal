import { Star, Quote, Calendar } from "lucide-react";
import { TestimonialItem } from "../../types";

interface TestimonialCardProps {
  key?: string | number;
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Render golden star list helper
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${idx < rating ? "text-gold fill-gold" : "text-soft-gray/30"}`}
      />
    ));
  };

  return (
    <div 
      className="bg-charcoal border border-burgundy/10 p-6 md:p-8 relative hover:border-gold/35 transition-all duration-300 flex flex-col justify-between luxury-glow"
    >
      {/* Decorative Elegant Quote Icon background */}
      <div className="absolute top-6 right-6 text-burgundy/10 pointer-events-none">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      <div>
        {/* Rating and Dates */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-[10px] text-soft-gray/70 font-mono inline-flex items-center gap-1 uppercase">
            <Calendar className="w-3 h-3 text-gold/60" />
            {testimonial.reviewDate}
          </span>
        </div>

        {/* Short Quote */}
        <p className="text-gold font-luxury italic text-sm md:text-md mb-4 leading-relaxed font-medium">
          "{testimonial.quote}"
        </p>

        {/* Detailed Review */}
        <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mb-6">
          {testimonial.fullReview}
        </p>
      </div>

      {/* Client details bottom */}
      <div className="pt-4 border-t border-burgundy/10 mt-auto">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-luxury text-sm font-bold tracking-wide text-warm-white">
              {testimonial.clientName}
            </h4>
            <span className="text-[11px] text-soft-gray font-medium mt-0.5 block">
              {testimonial.location} &bull; <span className="text-gold">{testimonial.eventType}</span>
            </span>
          </div>
        </div>

        {/* Quick Review Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {testimonial.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[9px] uppercase tracking-wider bg-burgundy/40 text-gold-muted px-2 py-0.5 border border-burgundy/10 font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
