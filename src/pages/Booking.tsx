import { useState, FormEvent } from "react";
import { Send, Sparkles, MessageSquare, ShieldAlert, Heart, Calendar } from "lucide-react";
import { siteConfig, generateWhatsAppLink } from "../data/siteConfig";
import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Bespoke Bridal Artistry",
    date: "",
    location: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const eventOptions = [
    "Bespoke Bridal Artistry",
    "Premium Airbrush Bridal Look",
    "Engagement / Sagan Radiance",
    "Sheen Reception Elegance",
    "Luxury Party Glam",
    "Editorial / Fashion Campaign",
    "Model Portfolio Setup",
    "Modern Groom Care"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Generate WhatsApp link using our customizable site utility
    const clickLink = generateWhatsAppLink({
      name: formData.name,
      eventType: formData.eventType,
      date: formData.date,
      location: formData.location,
      message: formData.message
    });

    // Automatically trigger redirect in new window
    window.open(clickLink, "_blank");
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO title="Luxury Consultation Booking - Glow With Kunal" />

      {/* Decorative Header banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-luxury-black overflow-hidden border-b border-burgundy/10 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-luxury-black/80 to-luxury-black z-1"></div>
        <img
          src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200"
          alt="Glowing Indian Wedding Details Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase font-luxury font-bold block mb-3">
             Reserve Calendars
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-luxury font-bold text-warm-white tracking-widest uppercase">
            Book Consultation
          </h1>
          <div className="h-[1.5px] w-16 bg-gold mx-auto my-4" />
          <p className="text-xs md:text-sm text-soft-gray uppercase tracking-widest max-w-lg mx-auto font-light">
             Seamless date block registering via WhatsApp redirections
          </p>
        </div>
      </section>

      {/* Main Form container space */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            subtitle="The Glam Schedule Request"
            title="Calendar Reservations"
            description="Submit your event specifications directly below. This aggregates your schedule data and opens WhatsApp with pre-filled items so Kunal can confirm price quotes instantly."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <form 
              onSubmit={handleSubmit}
              className="lg:col-span-8 bg-charcoal border border-burgundy/15 p-6 md:p-10 space-y-6 luxury-glow"
            >
              <div className="border-l-2 border-gold pl-4 py-1 mb-2">
                <span className="text-[10px] tracking-widest uppercase text-soft-gray/70">Aesthetic Registry parameters</span>
                <p className="text-xs text-soft-gray">All inputs are encoded securely into standard parameters.</p>
              </div>

              {/* Input Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanjali Roy"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-luxury-black text-warm-white text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full"
                />
              </div>

              {/* Grid block phone & event type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                    Primary Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 99999 88888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-luxury-black text-warm-white text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                    Styling Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="bg-luxury-black text-warm-white text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full appearance-items h-[46px]"
                  >
                    {eventOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal text-warm-white font-semibold">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Grid block date & physical location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                    Target Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-luxury-black text-soft-gray text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                    Venue / City Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Leela Palace Delhi NCR"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="bg-luxury-black text-warm-white text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full"
                  />
                </div>

              </div>

              {/* Text message details */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-luxury tracking-widest uppercase text-gold font-bold">
                  Additional Styling Specifications / Hair Needs
                </label>
                <textarea
                  placeholder="Please state if you need styling/hairstyling for additional family members, or if you require specific jewelry placement setting advice."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-luxury-black text-warm-white text-xs md:text-sm p-3.5 border border-burgundy/15 focus:border-gold outline-none w-full resize-none"
                />
              </div>

              {/* Booking safety declaration */}
              <div className="flex gap-2 text-[11px] text-soft-gray/80 font-light bg-luxury-black border border-burgundy/5 p-4">
                <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p>
                  Note: Calendar dates are only locked permanently upon receipt of 30% booking retainer. We process booking requests concurrently in Delhi.
                </p>
              </div>

              {/* Submission click */}
              <Button
                variant="gold"
                fullWidth
                type="submit"
                className="py-4 font-bold"
              >
                Send Request over WhatsApp
              </Button>

              {formSubmitted && (
                <div className="text-center p-3.5 bg-burgundy/40 text-gold border border-gold/15 text-xs font-medium">
                  WhatsApp query initiated successfully in a new tab!
                </div>
              )}

            </form>

            {/* Support Rules sidebar */}
            <div className="lg:col-span-4 bg-charcoal border border-burgundy/10 p-6 flex flex-col gap-6">
              <span className="text-[10px] tracking-widest uppercase text-gold font-bold inline-flex items-center gap-1.5 font-luxury">
                <Heart className="w-3 h-3 fill-gold text-gold" style={{ display: "inline" }} /> Studio Support
              </span>
              
              <div>
                <h4 className="font-luxury text-xs text-warm-white uppercase tracking-widest font-bold mb-2">Pristine Quality SLA</h4>
                <p className="text-xs text-soft-gray font-light leading-relaxed">
                  Every booking comes with high-end MAC cosmetics, skin pre-boosters, draping pins, safety lash glues, and matching crown braids support automatically.
                </p>
              </div>

              <div className="h-[1px] bg-burgundy/10"></div>

              <div>
                <h4 className="font-luxury text-xs text-warm-white uppercase tracking-widest font-bold mb-2">Need Guest Styling?</h4>
                <p className="text-xs text-soft-gray font-light leading-relaxed">
                  We have executive junior styling teams available to dress bridesmaids, mother, and extended guests on-location matching the bride.
                </p>
              </div>

              <div className="h-[1px] bg-burgundy/10"></div>

              <div className="space-y-3">
                <h4 className="font-luxury text-xs text-warm-white uppercase tracking-widest font-bold">Have Urgent Queries?</h4>
                <p className="text-xs text-soft-gray font-light">Call Noida Hotlines:</p>
                <span className="text-sm font-bold text-gold cursor-all select-all block h-5 font-luxury">
                  {siteConfig.contact.displayPhone}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
