import SEO from "../components/common/SEO";
import SectionHeading from "../components/ui/SectionHeading";

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions - Glow With Kunal" />

      <section className="py-32 bg-luxury-black border-b border-burgundy/10 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 mt-8">
          
          <SectionHeading
            subtitle="Client SLA Agreement"
            title="Terms & Conditions"
            align="left"
          />

          <div className="space-y-6 text-xs md:text-sm text-soft-gray font-light leading-relaxed">
            <p>
              Welcome to the digital storefront of Glow With Kunal. Read our operational guidelines covering professional bridal makeup bookings inside Delhi NCR and global destination wedding schedules.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              1. Date Locking Deposit Fees
            </h3>
            <p>
              Due to exceptionally high demand (especially during Indian winter wedding periods), dates are reserved strictly on a first-deposit basis. A 30% non-refundable booking retainer is requested up-front. Dates are not held on verbal confirmations. Balance dues are payable on or before the session date.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              2. Timing Sync Requirements
            </h3>
            <p>
              Indian wedding days operates on tight schedules. The bride's styling takes between 2 to 3 hours based on package specifications. We request promptness matching our timing allocation plan to prevent spillages into the wedding ceremony timeframe.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              3. Travel & Accommodation
            </h3>
            <p>
              For destination wedding setups outside Delhi/Noida NCR, the client covers return flight arrangements (or AC cab transfers) and standard in-venue hotel lodging for Kunal and his elite hair assistants.
            </p>

            <h3 className="font-luxury text-sm font-bold text-gold uppercase tracking-widest mt-8">
              4. Skin Sensitivities & Allergic Actions
            </h3>
            <p>
              Our cosmetic choice features world-class premium brands (such as Huda Beauty, MAC, Charlotte Tilbury, Fenty, Estée Lauder). If you have exceptional skin allergies or prior histories with specific lash glues, please declare these during our luxury prep consultation stage.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
