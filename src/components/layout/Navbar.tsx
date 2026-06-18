import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig, generateWhatsAppLink } from "../../data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route update
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-luxury-black/95 border-burgundy/20 py-3 shadow-lg backdrop-blur-md"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo left */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-full border border-gold/40 group-hover:border-gold">
                <img
                  src={siteConfig.logo}
                  alt={siteConfig.brandName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-luxury uppercase text-sm md:text-base tracking-[0.2em] text-gold group-hover:text-gold-hover transition-colors leading-none font-semibold">
                  Glow With Kunal
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-soft-gray leading-none mt-1 font-sans">
                  PRO ARTISTRY
                </span>
              </div>
            </Link>

            {/* Middle Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-xs tracking-widest uppercase font-semibold transition-colors duration-300 ${
                      isActive 
                        ? "text-gold font-bold" 
                        : "text-warm-white/80 hover:text-gold"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-luxury font-bold tracking-[0.15em] uppercase px-5 py-2.5 bg-burgundy/90 text-warm-white border border-gold/30 hover:border-gold hover:bg-burgundy-light transition-all rounded-none"
              >
                <Phone className="w-3.5 h-3.5 text-gold animate-pulse" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/30 gold rounded-full bg-burgundy/30 text-gold"
                aria-label="Direct WhatsApp Link"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gold focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Right Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-luxury-black/98 flex flex-col pt-24 pb-8 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-6 flex-grow justify-center items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm tracking-[0.3em] font-luxury uppercase font-medium ${
                      isActive ? "text-gold text-lg font-bold border-b border-gold/30 pb-1" : "text-warm-white/70 hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto flex flex-col gap-4 text-center items-center">
              <div className="h-[1.5px] w-20 bg-burgundy/40 my-2"></div>
              <p className="text-[10px] tracking-[0.25em] text-soft-gray uppercase text-center">
                DELHI / NOIDA NCR ARTISTRY
              </p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center tracking-widest text-xs uppercase bg-gold text-luxury-black font-luxury font-bold py-3 px-6 shadow-sm hover:bg-gold-hover transition-colors"
              >
                Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
