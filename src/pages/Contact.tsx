import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <ContactHero />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

