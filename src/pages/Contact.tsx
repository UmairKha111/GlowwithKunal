import { Phone, Mail, MapPin, Clock, Instagram, Send, Map } from "lucide-react";
import { siteConfig, generateWhatsAppLink } from "../data/siteConfig";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";

export default function Contact() {
  return (
    <>
      <SEO title="Contact Glow Studio - Delhi Noida NCR" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Studio Makeup Area"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
             Reach Out
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Contact Us
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             We look forward to styling your beautiful milestones
          </p>
        </div>
      </section>

      {/* Main Studio Addresses section */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Essential details catalog */}
            <div className="lg:col-span-5 flex flex-col gap-6 ">
              <span className="text-xs tracking-[0.3em] font-luxury text-gold uppercase font-bold">
                 Studio Information
              </span>
              <h2 className="text-2xl md:text-4xl font-luxury font-bold text-warm-white tracking-wide leading-tight">
                 Connect With Glow Studio
              </h2>
              <div className="h-[1px] w-12 bg-gold mt-1" />
              
              <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mb-6">
                Whether you wish to reserve a bridal booking slots, inquire about groom grooming configurations, or confirm pricing list particulars, choose any modern routing channel below for instantaneous help.
              </p>

              {/* Detail cards list */}
              <div className="space-y-4">
                
                <div className="bg-charcoal border border-burgundy/15 p-5 flex gap-4 items-start">
                  <div className="p-3 bg-burgundy/30 text-gold border border-gold/15">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-luxury text-xs text-gold tracking-widest uppercase font-bold mb-1">
                      Physical Location
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="bg-charcoal border border-burgundy/15 p-5 flex gap-4 items-start">
                  <div className="p-3 bg-burgundy/30 text-gold border border-gold/15">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-luxury text-xs text-gold tracking-widest uppercase font-bold mb-1">
                      Direct WhatsApp Hotlines
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray select-all">
                      {siteConfig.contact.displayPhone}
                    </p>
                  </div>
                </div>

                <div className="bg-charcoal border border-burgundy/15 p-5 flex gap-4 items-start">
                  <div className="p-3 bg-burgundy/30 text-gold border border-gold/15">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-luxury text-xs text-gold tracking-widest uppercase font-bold mb-1">
                      Corporate Correspondence
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray select-all">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>

                <div className="bg-charcoal border border-burgundy/15 p-5 flex gap-4 items-start">
                  <div className="p-3 bg-burgundy/30 text-gold border border-gold/15">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-luxury text-xs text-gold tracking-widest uppercase font-bold mb-1">
                      Business Hours
                    </h4>
                    <p className="text-xs md:text-sm text-soft-gray">
                      Everyday: 10:00 AM - 08:00 PM (Prior appointment requested)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Google Maps and direct inquiry link */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs tracking-[0.3em] font-luxury text-gold uppercase font-bold flex items-center gap-1.5">
                <Map className="w-3.5 h-3.5" /> Interactive Studio Map
              </span>
              <h3 className="text-2xl font-luxury font-bold text-warm-white tracking-widest uppercase">
                Find Our Studio Location
              </h3>
              <div className="h-[1px] w-12 bg-gold mt-1" />

              {/* Fully responsive Map container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border border-gold/20 p-1.5 bg-rich-brown/50">
                <iframe
                  title="Glow Studio Map Noida Delhi"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0 grayscale opacity-85"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Direct Booking CTA */}
              <div className="bg-charcoal border border-burgundy/10 p-6 text-center mt-2 luxury-glow">
                <h4 className="font-luxury text-gold text-xs tracking-widest uppercase font-bold mb-2">Ready to secure block your dates?</h4>
                <p className="text-[11px] md:text-xs text-soft-gray leading-relaxed mb-4 font-light">Select any customized booking forms to register parameters dynamically on WhatsApp.</p>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gold hover:bg-gold-hover text-luxury-black text-xs font-luxury font-bold tracking-widest uppercase inline-block"
                >
                  Direct Register over WhatsApp &rarr;
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
