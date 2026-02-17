import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Get in Touch</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">Contact Us</h1>
            <p className="text-muted-foreground">Have questions or want to place a bulk order? We'd love to hear from you.</p>
        </motion.div>
    );
};

export default ContactHero;
