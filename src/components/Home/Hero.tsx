import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-snacks.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Natural healthy snacks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>
      <div className="relative container-narrow px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-accent-foreground text-xs font-medium tracking-wider uppercase mb-6"
          >
            <Leaf className="h-3.5 w-3.5" />
            100% Natural & Preservative Free
          </motion.span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Snack Smart,<br />
            <span className="text-accent">Live Healthy.</span>
          </h1>
          <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Discover handcrafted snacks made with love — no added sugar, 
            no preservatives, just pure natural goodness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/30 text-cream font-medium hover:bg-cream/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
