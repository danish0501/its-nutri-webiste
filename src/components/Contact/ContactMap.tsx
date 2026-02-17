import { motion } from "framer-motion";

const ContactMap = () => {
    return (
        <section className="w-full h-[450px] relative mt-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.441433291!2d72.8893922!3d19.1415053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7389f4f4949%3A0xf63503f1917f654b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713456789012!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                    className="w-full h-full"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default ContactMap;
