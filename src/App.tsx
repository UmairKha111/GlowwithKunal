import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "motion/react";

// Layout elements
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

/**
 * ScrollToTop helper.
 * Automatically resets scroll positions upon standard router navigation jumps.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Outer Luxury layout wrapper */}
      <div className="flex flex-col min-h-screen bg-luxury-black text-warm-white selection:bg-gold/40 selection:text-warm-white">
        
        {/* Absolute dynamic tracking Navbar */}
        <Navbar />

        {/* Dynamic transition container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>

        {/* Global Footer element */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
