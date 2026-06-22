import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, Phone, ArrowRight, Instagram, MessageCircle, Star, Sparkles, AlertCircle, Heart } from "lucide-react";
import { siteConfig, generateWhatsAppLink } from "../data/siteConfig";
import { services } from "../data/services";
import { portfolioItems } from "../data/portfolio";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faq";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import PortfolioCard from "../components/ui/PortfolioCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import Lightbox from "../components/common/Lightbox";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"Bridal" | "Fashion">("Bridal");

  const featuredPortfolio = portfolioItems.filter(item => item.highlighted);
  const featuredTestimonials = testimonials.filter(item => item.featured);
  const topServices = services.slice(0, 3);
  const homeFaqs = faqs.slice(0, 4);

  // Before After comparison demo on home page
  const transformationDemo = {
    before: "https://i.ibb.co/TMf0wx67/Chat-GPT-Image-Jun-18-2026-12-43-55-PM.png",
    after: "https://i.ibb.co/v6fbTG2X/4b8309e2-8dcf-4540-8302-46b356048bc8.png",
    client: "bhoomi bishnoi",
    metric: "Glass Skin Bridal Transformation"
  };

  const [showDemoBefore, setShowDemoBefore] = useState(false);

  const steps = [
    { num: "01", title: "Luxury Consultation", desc: "Co-creating your beauty vision based on your wedding outfit parameters, venue lighting, and face mapping." },
    { num: "02", title: "Premium Skin Prep", desc: "The crucial base: complete micro-hydration, pore neutralization, and custom sculpting to guarantee absolute base durability." },
    { num: "03", title: "Intricate Transformation", desc: "Fine-art manual airbrushing or HD styling combining selective pigments and luxurious mink lashes." },
    { num: "04", title: "Draping & Final Polish", desc: "Precise jewelry alignment, dupatta securing, sari pleating, and setting locks for the grand spotlight." }
  ];

  return (
    <>
      <SEO title="Luxury Bridal & High-End Makeup Artist" />

      {/* 1. LUXURY HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        {/* Dark overlay backdrop */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-luxury-black/30 via-luxury-black/60 to-luxury-black"></div>
        <img
          src={siteConfig.heroImage}
          alt="Bride Portrait Banner"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-45"
          referrerPolicy="no-referrer"
        />

        {/* Floating elements & content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 overflow-hidden rounded-full border border-gold/30 p-1 bg-luxury-black/55 backdrop-blur-sm shadow-xl">
              <img
                src={siteConfig.logo}
                alt="Brand Monogram Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Micro Brand Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase font-luxury font-bold mb-4"
          >
            KUNAL &bull; Celebrity Makeup Artist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl font-luxury font-bold tracking-wider leading-tight text-warm-white"
          >
            GLOW WITH KUNAL
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-[1.5px] bg-gold mx-auto my-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm md:text-xl font-light text-soft-gray uppercase tracking-widest max-w-2xl mx-auto mb-10"
          >
            Bridal, HD & Airbrush Excellence <br className="hidden md:inline" />
            <span className="text-gold">Delhi & Noida NCR</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5"
          >
            <Button variant="gold" href={generateWhatsAppLink()} icon className="px-8 py-4">
              Book Bridal Look
            </Button>
            <Link
              to="/portfolio"
              className="text-xs uppercase tracking-[0.2em] font-bold text-warm-white border border-warm-white/20 hover:border-gold hover:text-gold px-8 py-4 transition-all bg-luxury-black/45 backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Dynamic lower bar badge */}
        <div className="absolute bottom-6 left-0 w-full z-10 px-4 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-soft-gray/60 max-w-7xl mx-auto left-1/2 -translate-x-1/2 hidden md:flex border-t border-burgundy/10 pt-4">
          <span>Delhi &bull; Noida &bull; Destination Wedding Artist</span>
          <span className="animate-pulse flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-gold" /> Emerging MUA Of The Year NCR</span>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-20 md:py-28 px-4 bg-luxury-black overflow-hidden border-t border-burgundy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Bio Cover Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-burgundy/30 blur-3xl rounded-full z-0 pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 blur-3xl rounded-full z-0 pointer-events-none"></div>
              
              <div className="relative border border-gold/20 p-2.5 bg-rich-brown/50">
                <img
                  src="https://i.ibb.co/99k86KNw/5ef787c2-a3f2-4651-ad40-0f4fa5557933.png"
                  alt="Kunal Makeup Session Work"
                  className="w-full h-auto object-cover border border-burgundy/20"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-6 -right-6 bg-burgundy py-4 px-6 border border-gold/30 shadow-2xl block">
                  <span className="font-luxury text-gold text-2xl font-bold block leading-none">GK</span>
                  <span className="text-[10px] uppercase tracking-widest text-warm-white mt-1 block">Luxury Class</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-luxury font-bold">
                Luxury Personal Branding
              </span>
              <h2 className="text-3xl md:text-5xl font-luxury font-bold text-warm-white tracking-wide">
                Glow With Kunal
              </h2>
              <div className="h-[1px] w-20 bg-gold mt-2"></div>

              <div className="space-y-4 text-sm md:text-base text-soft-gray font-light leading-relaxed mt-4">
                {siteConfig.about.storyParagraphs.slice(0, 2).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 pt-6 border-t border-burgundy/10">
                <div className="flex flex-col">
                  <span className="font-luxury text-gold text-3xl font-bold leading-none">7+ Years</span>
                  <span className="text-[10px] tracking-widest uppercase text-soft-gray/85 mt-2">Professional Legacy</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-luxury text-gold text-3xl font-bold leading-none">NCR Elite</span>
                  <span className="text-[10px] tracking-widest uppercase text-soft-gray/85 mt-2">Emerging MUA winner</span>
                </div>
                <Link
                  to="/about"
                  className="sm:ml-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-bold font-luxury"
                >
                  Read Kunal's Story <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE GLOW WITH KUNAL */}
      <section className="py-20 bg-charcoal relative border-y border-burgundy/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Exceptional Standards"
            title="Why Choose Glow With Kunal"
            description="Our makeup methodology isn't template based. It is completely customized around individual anatomy, premium skincare products, and photography angles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Skincare Prep Focus",
                desc: "We prioritize extensive 2-step collagen micro-hydration before any pigment touches skin, which ensures the base never oxidizes or settles."
              },
              {
                title: "Celebrity HD Makeup",
                desc: "Certified with 8K cinema and flash lens protection. Looks extremely flawless in person, keeping a clean-skin feel for 16 hours."
              },
              {
                title: "Luxury Airbrush Suite",
                desc: "Using original silicon solutions sprayed for water-proof, highly transfer-resistant durability through emotional and active wedding moments."
              },
              {
                title: "Absolute Punctuality",
                desc: "We understand that Indian wedding calendars require high precision. Our elite team arrives before time, maintaining scheduling peace."
              }
            ].map((col, idx) => (
              <div key={idx} className="bg-luxury-black p-6 border border-burgundy/10 flex flex-col gap-3 relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
                <span className="text-gold font-luxury text-3xl font-bold opacity-30 group-hover:opacity-60 transition-opacity">0{idx+1}</span>
                <h3 className="font-luxury text-md font-bold text-warm-white tracking-widest uppercase mt-2">
                  {col.title}
                </h3>
                <p className="text-xs text-soft-gray leading-relaxed font-light mt-1">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE SERVICES */}
      <section className="py-20 md:py-28 px-4 bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-luxury font-bold">
                Bespoke Offerings
              </span>
              <h2 className="text-3xl md:text-5xl font-luxury font-bold text-warm-white tracking-wide mt-2">
                Signature Services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-xs tracking-widest text-gold hover:text-gold-hover uppercase font-bold inline-flex items-center gap-1.5 border-b border-gold/20 pb-1"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-charcoal border ${
                  service.popular ? "border-gold/30" : "border-burgundy/10"
                } p-8 flex flex-col justify-between relative`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 bg-gold text-luxury-black text-[9px] font-luxury font-bold tracking-[0.2em] px-3 py-1 uppercase">
                    Signature
                  </span>
                )}
                <div>
                  <span className="text-[10px] tracking-widest text-gold uppercase font-semibold font-luxury block mb-2">
                    {service.idealFor}
                  </span>
                  <h3 className="text-xl font-luxury font-medium text-warm-white uppercase tracking-wider mb-4">
                    {service.name}
                  </h3>
                  <p className="text-xs text-soft-gray font-light leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  
                  <ul className="space-y-2 mb-6 text-xs text-soft-gray/85">
                    {service.benefits.slice(0, 3).map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-burgundy/10 mt-6 flex flex-col gap-4">
                  <span className="text-xs text-gold font-semibold tracking-wider font-luxury h-6">
                    {service.pricingPlaceholder}
                  </span>
                  <a
                    href={generateWhatsAppLink({ eventType: service.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-[10px] tracking-[0.15em] font-luxury font-bold py-3 bg-burgundy/90 hover:bg-burgundy text-warm-white uppercase border border-gold/10 inline-flex items-center justify-center gap-2"
                  >
                    Inquire over WhatsApp <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRIDAL TRANSFORMATION SHOWCASE */}
      <section className="py-20 bg-charcoal border-y border-burgundy/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 ">
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-luxury font-bold inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold" /> Natural Contrast Magic
              </span>
              <h2 className="text-3xl md:text-5xl font-luxury font-bold text-warm-white tracking-wide">
                Bridal Transformation
              </h2>
              <div className="h-[1.5px] w-20 bg-gold my-2"></div>
              <p className="text-sm text-soft-gray font-light leading-relaxed">
                See the visual difference. We believe makeup should highlight your core features, maintaining hydration, proper tone neutralizing, and elegant contouring.
              </p>
              
              <div className="bg-luxury-black p-5 border border-burgundy/15 mt-4">
                <span className="font-luxury text-gold uppercase text-xs tracking-wider font-bold block mb-1">
                  {transformationDemo.metric}
                </span>
                <span className="text-xs text-soft-gray font-medium">
                  Client: {transformationDemo.client} &bull; Bridal Look NCR
                </span>
              </div>

              {/* Toggle controls */}
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setShowDemoBefore(true)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest font-mono font-semibold border ${
                    showDemoBefore 
                      ? "bg-gold text-luxury-black border-gold" 
                      : "bg-transparent text-soft-gray/50 border-burgundy/20"
                  }`}
                >
                  Client Face Prep (Before)
                </button>
                <button
                  onClick={() => setShowDemoBefore(false)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest font-mono font-semibold border ${
                    !showDemoBefore 
                      ? "bg-gold text-luxury-black border-gold" 
                      : "bg-transparent text-soft-gray/50 border-burgundy/20"
                  }`}
                >
                  Finished Glow (After)
                </button>
              </div>
            </div>

            {/* Right Comparison Box Column */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden border border-gold/20 p-2 bg-rich-brown/40 shadow-2xl">
                <img
                  src={showDemoBefore ? transformationDemo.before : transformationDemo.after}
                  alt="Transformation comparison display"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <span className="absolute bottom-6 left-6 bg-burgundy/95 text-gold text-[10px] tracking-[0.25em] font-luxury font-bold uppercase py-1.5 px-4 border border-gold/15">
                  {showDemoBefore ? "Initial Prep Status" : "Polished Artistry View"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FEATURED PORTFOLIO */}
      <section className="py-20 md:py-28 px-4 bg-luxury-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Elite Selection"
            title="Featured Portfolio"
            description="A premium showcase of real, breathtaking bridal makeups, engagements, and haute fashion editorially verified looks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.slice(0, 3).map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onOpenLightbox={(img) => setLightboxImage(img)}
              />
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 tracking-[0.2em] text-xs uppercase font-luxury font-bold border border-gold/40 text-gold hover:bg-gold hover:text-luxury-black px-8 py-3.5 transition-all"
            >
              Browse Complete Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-charcoal border-t border-burgundy/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/10 blur-3xl pointer-events-none rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Luminous Praise"
            title="Client Testimonials"
            description="Read the genuine reviews of our beautiful brides and clients in Delhi NCR expressing their transformation memories."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.slice(0, 3).map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-bold font-luxury inline-flex items-center gap-2"
            >
              Read All Stories & Reviews <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section className="py-20 md:py-28 px-4 bg-luxury-black relative border-y border-burgundy/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Precision Framework"
            title="The Transformation Process"
            description="Our step-by-step beauty protocol curated to guarantee pristine execution excellence and peace of mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-6 bg-charcoal/50 border border-burgundy/5 group hover:border-gold/30 transition-all duration-300">
                <span className="font-luxury text-gold-muted text-5xl font-extrabold tracking-widest opacity-25 mb-4 group-hover:opacity-60 transition-opacity">
                  {step.num}
                </span>
                <h3 className="font-luxury text-gold text-sm tracking-widest uppercase font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-soft-gray leading-relaxed font-light">
                  {step.desc}
                </p>
                
                {/* Visual connectors */}
                {idx < 3 && (
                  <span className="hidden lg:block absolute top-[25%] -right-4 w-8 h-[1px] bg-burgundy/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM PREVIEW GRID */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] text-gold uppercase font-luxury font-bold">
                Social Diaries
              </span>
              <h2 className="text-3xl md:text-5xl font-luxury font-bold text-warm-white tracking-wide mt-2">
                @glowwithkunal_
              </h2>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 text-xs tracking-widest text-gold hover:text-gold-hover uppercase font-bold inline-flex items-center gap-1.5 border-b border-gold/20 pb-1"
            >
              Follow On Instagram <Instagram className="w-4 h-4 text-gold" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1610444583731-9e1e09940735?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400"
            ].map((imgUrl, i) => (
              <a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden border border-burgundy/15 block bg-luxury-black"
              >
                <img
                  src={imgUrl}
                  alt={`Instagram Preview ${i+1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-burgundy/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-gold" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ PREVIEW */}
      <section className="py-20 bg-charcoal border-t border-burgundy/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            subtitle="Curated Answers"
            title="General FAQ"
            align="center"
          />

          <div className="space-y-4">
            {homeFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-burgundy/15 bg-luxury-black p-5 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left flex justify-between items-center text-sm md:text-base font-luxury text-warm-white font-semibold tracking-wide"
                  >
                    <span>{faq.question}</span>
                    <span className="text-gold text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-burgundy/10 text-xs md:text-sm text-soft-gray leading-relaxed font-light"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="text-xs tracking-[0.2em] font-luxury font-bold text-gold hover:text-gold-hover uppercase inline-flex items-center gap-1.5"
            >
              Browse Expanded FAQ Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. BOOKING CTA */}
      <section className="py-24 bg-gradient-to-r from-burgundy-dark via-burgundy-light to-burgundy-dark text-center relative overflow-hidden">
        {/* Decorative backdrop elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/15 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-luxury-black/40 blur-3xl pointer-events-none rounded-full"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-xs tracking-[0.35em] text-gold uppercase font-luxury font-bold inline-flex items-center gap-1.5 mb-4">
            <Heart className="w-4 h-4 fill-gold text-gold" /> Secure Your Glow Memory
          </span>
          <h2 className="text-3xl md:text-5xl font-luxury font-bold text-warm-white tracking-wider mb-6">
            Calendar Bookings Are Open
          </h2>
          <p className="text-sm md:text-base text-soft-gray/90 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Available for bridal alignments inside Delhi, Noida, Gurgaon, and global destination ceremonies. Speak directly with Kunal to tailor customized styling packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="gold" href={generateWhatsAppLink()} icon className="px-8 py-4">
              Connect on WhatsApp
            </Button>
            <Link
              to="/booking"
              className="text-xs uppercase tracking-widest font-luxury font-bold text-warm-white hover:text-gold border border-gold/40 hover:border-gold px-8 py-4 transition-all bg-luxury-black bg-opacity-70"
            >
              Custom Inquire Form
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for full rendering preview */}
      <Lightbox
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
