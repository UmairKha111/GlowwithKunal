import { services } from "../data/services";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";

export default function Services() {
  return (
    <>
      <SEO title="Signature Makeup services - Bridal, Airbrush, HD" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Makeup Palettes Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
            Pure Luxury Suit
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Signature Services
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             Explore our tailored high-end packages
          </p>
        </div>
      </section>

      {/* Services Grid Showcase */}
      <section className="py-20 md:py-28 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Artisan Selection"
            title="Our Bespoke Packages"
            description="Every treatment is crafted to display perfectly both under high-end digital SLR camera sensors and in natural daylight settings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Special notes block */}
          <div className="mt-16 bg-charcoal border border-burgundy/15 p-8 max-w-3xl mx-auto text-center relative luxury-glow">
            <h3 className="font-luxury text-gold uppercase tracking-widest text-sm font-bold mb-3">
              Looking for a custom package?
            </h3>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mb-6">
              We specialize in custom destination packages that span over multiple pre-wedding, wedding, and post-wedding festivities (Mehendi, Sangeet, Haldi, Cocktail, Wedding & Reception).
            </p>
            <a
              href="https://wa.me/919811122233?text=Hello%20Kunal%2C%20I%20would%20love%20to%20get%20a%20customized%20multi-event%20bridal%20makeup%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-luxury-black uppercase tracking-widest font-luxury text-xs font-bold transition-colors hover:bg-gold-hover inline-block"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
