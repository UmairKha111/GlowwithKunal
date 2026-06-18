import { motion } from "motion/react";
import { Sparkles, Trophy, Award, Heart, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";

export default function About() {
  return (
    <>
      <SEO title="About Kunal - The Luxury Beauty Experience" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200"
          alt="Premium Studio Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
            Elite Artistry
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            {siteConfig.about.storyTitle}
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
            {siteConfig.about.tagline}
          </p>
        </div>
      </section>

      {/* Main Bio Story & Journey */}
      <section className="py-20 md:py-28 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Column */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-burgundy/20 blur-3xl rounded-full z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gold/15 blur-3xl rounded-full z-0"></div>
              
              <div className="border border-gold/20 p-3 bg-charcoal relative">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
                  alt="Kunal fine detailing photo"
                  className="w-full h-auto object-cover border border-burgundy/15"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating summary badge */}
                <div className="absolute bottom-6 right-6 lg:-right-6 bg-burgundy px-10 py-6 border border-gold/30 shadow-2xl">
                  <span className="font-luxury text-gold text-4xl font-extrabold block leading-none">GK</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-white mt-2 block">Premium Craftsman</span>
                </div>
              </div>
            </div>

            {/* Typography Content Column */}
            <div className="flex flex-col gap-6">
              <span className="text-xs tracking-[0.3em] font-luxury text-gold uppercase font-bold">
                The Legacy
              </span>
              <h2 className="text-2xl md:text-4xl font-luxury font-bold text-warm-white tracking-wide">
                Meet Kunal
              </h2>
              <div className="h-[1px] w-16 bg-gold" />

              <div className="space-y-6 text-sm md:text-base text-soft-gray font-light leading-relaxed mt-4">
                {siteConfig.about.storyParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Certifications Grid */}
      <section className="py-20 bg-charcoal border-y border-burgundy/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Mission column */}
            <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
              <span className="text-xs tracking-[0.3em] font-luxury text-gold uppercase font-bold inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold fill-gold" /> core creed
              </span>
              <h3 className="text-2xl font-luxury font-bold text-warm-white tracking-widest uppercase">
                Artistic Mission
              </h3>
              <div className="h-[1px] w-12 bg-gold" />
              <p className="text-sm md:text-base text-soft-gray italic leading-relaxed font-light mt-2">
                "{siteConfig.about.mission}"
              </p>
              <div className="mt-4 p-5 bg-luxury-black border border-burgundy/15 text-xs text-soft-gray">
                 Currently taking customized bridal bookings for Delhi NCR, Lucknow, Amritsar, Dehradun, and Rajasthan.
              </div>
            </div>

            {/* Certifications column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="text-xs tracking-[0.3em] font-luxury text-gold uppercase font-bold inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" /> Credential Excellence
              </span>
              <h3 className="text-2xl font-luxury font-bold text-warm-white tracking-widest uppercase">
                Certifications & Achievements
              </h3>
              <div className="h-[1px] w-12 bg-gold" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {siteConfig.about.certifications.map((cert, idx) => (
                  <div key={idx} className="bg-luxury-black p-5 border border-burgundy/15 flex gap-4 items-start group hover:border-gold/30 transition-all duration-300">
                    <div className="p-3 bg-burgundy/40 text-gold border border-gold/15 shrink-0 mt-0.5">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-luxury text-xs text-gold tracking-widest uppercase font-bold mb-1">
                        Accertained Craft
                      </h4>
                      <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
                        {cert}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Clients Trust Kunal - trust metrics */}
      <section className="py-20 md:py-28 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="The Aesthetic Code"
            title="Why Clients Trust Kunal"
            description="Our customer loyalty is built on transparency, pristine scheduling, and an absolute commitment to sanitation and beauty quality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Sanitation Guarantee",
                desc: "100% sterilized premium brush sets, disposable sponges, and brand-authentic products (such as MAC, Charlotte Tilbury, Huda Beauty). We strictly prioritize skincare safety."
              },
              {
                title: "Custom Anatomy Study",
                desc: "We mapping facial symmetry, eye curvatures, and dynamic lines. We make your styling fit you harmoniously, without looking cakey or changing your beautiful natural self."
              },
              {
                title: "Comprehensive Styling Execution",
                desc: "We look after everything: sari setting, complex dupatta pin-up placements, veil layering, flower positioning, and crown jewelry framing with absolute perfection."
              }
            ].map((trust, idx) => (
              <div key={idx} className="bg-charcoal border border-burgundy/10 p-8 flex flex-col gap-4 hover:border-gold/30 transition-colors luxury-glow">
                <div className="p-3 rounded-full bg-burgundy/40 text-gold w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-luxury text-sm font-bold text-warm-white tracking-widest uppercase">
                  {trust.title}
                </h3>
                <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
                  {trust.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
