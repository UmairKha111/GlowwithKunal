import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy - Glow With Kunal" />

      <section className="py-32 bg-luxury-black border-b border-burgundy/10 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          
          <SectionHeading
            subtitle="Fine Print"
            title="Privacy Policy"
            align="left"
          />

          <div className="space-y-6 text-xs md:text-sm text-soft-gray font-light leading-relaxed">
            <p>
              At Glow With Kunal (the "Studio", "We", "Our"), we respect the sanctity of our clients' and models' personal information, visual portraits, and correspondence databases. This Privacy Policy documents how we collect, store, and utilize details provided through our main digital website.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              1. Information We Collect
            </h3>
            <p>
              When navigating or placing appointment inquiries on our website, we collect your name, email, target wedding location venue, call hotlines, and specific event styling notes. These parameters are used solely to draft booking calendars and calculate custom price package estimations.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              2. Photography & Visual Portrait Clearance
            </h3>
            <p>
              We pride ourselves on our fine-art portfolio representations. In-studio or on-venue "Before / After" photo sessions or wedding event clips are featured online only upon obtaining prior written consent from the beautiful bride or model. We do not transmit or sell model assets to third-party advertising brokers.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              3. Custom Redirection Protocols (WhatsApp)
            </h3>
            <p>
              Our booking mechanism leverages instant click-to-chat redirections via WhatsApp. Information typed inside our bookings module compiles strictly as temporary client-side parameters and transmits directly to Whatsapp under their secure messaging encryption protocol policies.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              4. Contact Administration
            </h3>
            <p>
              For inquiries regarding database removals, portrait updates, or further privacy clearance questions, contact or call Noida/Delhi headquarters: Email: <span className="text-gold">bookings@glowwithkunal.com</span>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
