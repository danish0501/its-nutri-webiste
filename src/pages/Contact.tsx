import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 overflow-hidden">
      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">Reach out to us through any of these channels. We're always here to assist you.</p>
            </div>
            <ContactInfo />
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-card border border-border/50 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-accent/5 relative overflow-hidden"
          >
            {/* Decorative background for the form container */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
