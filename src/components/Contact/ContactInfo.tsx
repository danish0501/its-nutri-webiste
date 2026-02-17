import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const contactDetails = [
    { icon: MapPin, text: "Mumbai, Maharashtra, India" },
    { icon: Mail, text: "hello@itsnutri.com" },
    { icon: Phone, text: "+91 98765 43210" },
];

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
        >
            <div className="rounded-2xl overflow-hidden aspect-video bg-muted">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location"
                />
            </div>
            <div className="space-y-4">
                {contactDetails.map((c) => (
                    <div key={c.text} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10">
                            <c.icon className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{c.text}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactInfo;
