import { Star, MessageCircle, Quote, Sparkles, Video, Play } from "lucide-react";
import { testimonials, videoReviews } from "../data/testimonials";
import { siteConfig, generateWhatsAppLink } from "../data/siteConfig";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialCard from "../components/ui/TestimonialCard";

export default function Testimonials() {
  const aggregateRating = {
    stars: 5.0,
    totalReviews: 124,
    platform: "Google Verified"
  };

  return (
    <>
      <SEO title="Client Stories & Reviews - Glow With Kunal" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1610444583731-9e1e09940735?auto=format&fit=crop&q=80&w=1200"
          alt="Glowing Bride smiling"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
             Luminous Diaries
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Client Testimonials
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             Priceless feedback from our glowing brides
          </p>
        </div>
      </section>

      {/* Aggregated platform ratings bar */}
      <section className="bg-charcoal border-b border-burgundy/15 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <div className="flex items-center gap-1">
            <span className="font-luxury text-gold text-2xl font-black">{aggregateRating.stars.toFixed(1)}</span>
            <div className="flex gap-0.5 ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
          </div>
          <p className="text-xs tracking-wider uppercase text-soft-gray text-center sm:text-left font-medium">
            Over <span className="text-gold font-bold">{aggregateRating.totalReviews}+ Verified 5-Star Reviews</span> on {aggregateRating.platform} & WedMeGood
          </p>
        </div>
      </section>

      {/* Video Reviews segment */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle="Motion Diaries"
            title="Video Transformations"
            description="Watch real-time dynamic looks capturing how light bouncing behaves with our signature luminous dewy skin finishes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videoReviews.map((video) => (
              <div 
                key={video.id}
                className="bg-charcoal border border-burgundy/15 p-4 flex flex-col relative group overflow-hidden"
              >
                {/* Simulated Player Block */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-burgundy/10 bg-luxury-black">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.clientName}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-luxury-black/30 flex items-center justify-center">
                    <span className="p-4 px-6 rounded-none bg-gold text-luxury-black font-luxury font-black text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer shadow-md shadow-gold/10 hover:bg-gold-hover transition-colors">
                      <Play className="w-4 h-4 fill-luxury-black" /> Play Look Reel
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-luxury-black/85 text-[10px] text-gold px-2.5 py-1 tracking-widest uppercase font-mono border border-burgundy/15">
                    {video.duration}
                  </span>
                </div>

                <div className="pt-4 flex justify-between items-center text-xs">
                  <div>
                    <h3 className="font-luxury font-bold text-warm-white tracking-wide">
                      {video.clientName}
                    </h3>
                    <span className="text-soft-gray text-[11px] mt-0.5 block">{video.weddingLocation}</span>
                  </div>
                  <span className="text-[10px] text-gold uppercase tracking-widest inline-flex items-center gap-1.5 font-bold">
                    <Video className="w-3.5 h-3.5" /> High-Contrast HD
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews Suite */}
      <section className="py-20 bg-charcoal border-t border-burgundy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle="Verified Testimonies"
            title="What Our Brides Say"
            description="Read detailed verified client experiences. Sourced directly from our real makeup journals and client guestbooks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>

          {/* Social review CTA banner */}
          <div className="mt-16 bg-luxury-black border border-burgundy/20 p-8 max-w-2xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
            <h3 className="font-luxury text-gold uppercase tracking-widest text-sm font-bold mb-3">
              Are you an existing Glow Bride?
            </h3>
            <p className="text-xs text-soft-gray font-light leading-relaxed mb-4">
              We look forward to saving your review on Google. Your feedback matters immensely to our small signature glam squad.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-bold"
            >
              DM Kunal feedback on Instagram &rarr;
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
