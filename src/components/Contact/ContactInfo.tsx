import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit Us",
        text: "Mumbai, Maharashtra, India",
        description: "Our main distribution center and office."
    },
    {
        icon: Mail,
        title: "Email Us",
        text: "hello@itsnutri.com",
        description: "For support and general inquiries."
    },
    {
        icon: Phone,
        title: "Call Us",
        text: "+91 98765 43210",
        description: "Mon-Sat, 9am to 6pm IST."
    },
];

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div className="grid gap-6">
                {contactDetails.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
                    >
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-foreground font-medium mb-1">{item.text}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-forest text-white overflow-hidden relative">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
                {/* Decorative circle */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
            </div>

        </div>
    );
};

export default ContactInfo;
