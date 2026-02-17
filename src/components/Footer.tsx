import { Link } from "react-router-dom";
import {
  Leaf,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Youtube
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-narrow px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <Leaf className="h-7 w-7 text-accent group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-serif font-bold tracking-tight">It's Nutri</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Crafting wholesome, preservative-free snacks from nature's finest ingredients.
              We believe healthy eating should be effortless and delicious.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" }
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, backgroundColor: "hsl(var(--accent))" }}
                  className="p-2.5 rounded-full bg-primary-foreground/10 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              Explore
              <div className="h-1 w-8 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Contact Us", "/contact"],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              Categories
              <div className="h-1 w-8 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                ["Energy Bites", "/products"],
                ["Bars", "/products"],
                ["Savory Snacks", "/products"],
                ["Traditional", "/products"],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 group transition-colors"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              Contact
              <div className="h-1 w-8 bg-accent rounded-full" />
            </h4>
            <div className="space-y-4 text-primary-foreground/70">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <p>123 Healthy Street, Bandra West, Mumbai, MH 400050</p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <p>hello@itsnutri.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <div className="w-full flex justify-between items-center gap-4 md:gap-8">
            <p>© {new Date().getFullYear()} It's Nutri. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

