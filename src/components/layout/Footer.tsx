import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="luxury-footer"
      className="bg-charcoal border-t border-burgundy/20 pt-16 pb-8 text-warm-white flex-shrink-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Section 1: Brand & Logo Intro */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 overflow-hidden rounded-full border border-gold/40">
                <img
                  src={siteConfig.logo}
                  alt={siteConfig.brandName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-luxury uppercase tracking-widest text-gold font-bold text-sm">
                Glow With Kunal
              </span>
            </Link>
            <p className="text-xs text-soft-gray font-light leading-relaxed mt-2">
              Bespoke luxury bridal and high-fashion editorial makeup artist crafting luminous glass skin transformations inside Delhi, Noida NCR, and globally for destination wedding events.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-burgundy/60 hover:border-gold hover:text-gold transition-all bg-luxury-black/50 text-soft-gray"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="font-luxury text-gold tracking-widest uppercase text-xs font-semibold mb-6 pb-2 border-b border-burgundy/20">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Story", path: "/about" },
                { name: "Signature Services", path: "/services" },
                { name: "Bridal Portfolio", path: "/portfolio" },
                { name: "Fine Art Gallery", path: "/gallery" },
                { name: "Client Testimonials", path: "/testimonials" },
                { name: "Support FAQs", path: "/faq" },
                { name: "Book Consultation", path: "/booking" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-soft-gray hover:text-gold transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-burgundy-light group-hover:text-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Premium Services */}
          <div>
            <h4 className="font-luxury text-gold tracking-widest uppercase text-xs font-semibold mb-6 pb-2 border-b border-burgundy/20">
              Signature Services
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-soft-gray font-medium">
              <li>Luxury Bridal Artistry</li>
              <li>Premium Airbrush Bridal</li>
              <li>Engagement & Sagan Radiance</li>
              <li>Sheen Reception Elegance</li>
              <li>Bespoke Party Glam</li>
              <li>Editorial & Fashion Creative</li>
              <li>Modern Groom Care</li>
            </ul>
          </div>

          {/* Section 4: Contact & Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-luxury text-gold tracking-widest uppercase text-xs font-semibold mb-6 pb-2 border-b border-burgundy/20">
              Aesthetic Studio
            </h4>
            <div className="flex flex-col gap-3 text-xs font-medium text-soft-gray">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>{siteConfig.contact.displayPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 mt-2 pt-2 border-t border-burgundy/10">
                <Clock className="w-4 h-4 text-gold" />
                <span>10:00 AM - 08:00 PM (Everyday)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & fine print links */}
        <div className="border-t border-burgundy/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-soft-gray/70">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved. Crafted with absolute elegance.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors font-semibold">
              Privacy Policy
            </Link>
            <span className="text-burgundy/30">|</span>
            <Link to="/terms-conditions" className="hover:text-gold transition-colors font-semibold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
