import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { faqs } from "../data/faq";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";

type FaqCategory = "All" | "Bookings" | "Artistry & Techniques" | "Logistics & Travel";

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>("All");
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const categories: FaqCategory[] = [
    "All", "Bookings", "Artistry & Techniques", "Logistics & Travel"
  ];

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <SEO title="Support FAQ - Glow With Kunal" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Lip details"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
             Support Hub
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Frequently Asked Questions
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             Clear, professional transparency under one view
          </p>
        </div>
      </section>

      {/* Main FAQ Selector Suit */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-4">
          
          <SectionHeading
            subtitle="The Information Center"
            title="Schedules & Formulations"
            description="Find answers to bridal trials, traveling logistics for destination marriages, material formulations, and deposit locking guidelines."
          />

          {/* Filtering tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 border-b border-burgundy/10 pb-6">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveFaq(null); // Reset open states
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-luxury font-bold transition-colors relative cursor-pointer ${
                    active ? "text-gold font-bold" : "text-soft-gray hover:text-warm-white"
                  }`}
                >
                  {cat}
                  {active && (
                    <motion.span
                      layoutId="faqActiveCategoryIndicator"
                      className="absolute -bottom-6 left-0 w-full h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* FAQ list */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-burgundy/15 bg-charcoal p-5 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left flex justify-between items-center text-sm md:text-md font-luxury text-warm-white font-semibold tracking-wide"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                      {faq.question}
                    </span>
                    <span className="text-gold text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-burgundy/10 text-xs md:text-sm text-soft-gray leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Help Banner */}
          <div className="mt-16 bg-charcoal border border-burgundy/15 p-8 max-w-2xl mx-auto text-center relative luxury-glow">
            <h3 className="font-luxury text-gold uppercase tracking-widest text-sm font-bold mb-3">
              Still have questions?
            </h3>
            <p className="text-xs text-soft-gray font-light leading-relaxed mb-6">
              Our professional liaison team is available on WhatsApp to coordinate customized guidelines, timings, overnight travel logistics, or hair extensions matching.
            </p>
            <a
              href="https://wa.me/919811122233?text=Hello%20Kunal%2C%20I%20have%20specific%20questions%20regarding%20bridal/event%20schedules."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-burgundy hover:bg-burgundy-light border border-gold/30 text-warm-white uppercase tracking-widest font-luxury text-xs font-bold inline-flex items-center gap-2 transition-colors"
            >
              Ask on WhatsApp <MessageCircle className="w-4 h-4 text-gold" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
