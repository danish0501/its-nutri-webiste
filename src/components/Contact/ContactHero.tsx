import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <section className="relative pt-12 pb-20 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto px-4"
            >
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
                    Get in Touch
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                    We'd love to hear <br /> <span className="text-accent italic">from you</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Have questions about our products, want to discuss bulk orders, or just want to say hi?
                    Our team is here to help you on your wellness journey.
                </p>
            </motion.div>
        </section>
    );
};

export default ContactHero;
