import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";
import heroImage from "@/assets/hero-snacks.jpg";

const Hero = () => {
  // Simple parallax effect on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f6]">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Natural healthy snacks"
          className="w-full h-full object-cover scale-110"
        />
        {/* Advanced Overlay: Darker on left for text readability, clearer on right for the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <div className="container relative mx-auto px-6 lg:px-12 pt-32 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent backdrop-blur-md border border-accent text-primary-foreground text-sm font-semibold tracking-wide mb-8"
          >
            <Leaf className="h-4 w-4" />
            FRESH FROM NATURE • NO PRESERVATIVES
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8">
            Fuel Your Body <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-lime-300">
              With Pure Nature.
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            "It's Nutri" brings you premium, handcrafted snacks that prove healthy doesn't have to be boring. No refined sugar, just 100% nutrient-dense joy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-primary-foreground font-bold overflow-hidden transition-all hover:pr-10"
            >
              <span className="relative z-10">Explore Our Menu</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Watch Our Story
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Floating UI Cards (Visual Interest) */}
        <div className="hidden lg:block relative h-[500px]">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-[200px]"
          >
            <ShieldCheck className="text-emerald-400 h-8 w-8 mb-3" />
            <h3 className="text-white font-bold text-lg leading-tight">100% Sugar Free</h3>
            <p className="text-gray-400 text-xs mt-2">Naturally sweetened with premium dates & honey.</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-[200px]"
          >
            <Zap className="text-yellow-400 h-8 w-8 mb-3" />
            <h3 className="text-white font-bold text-lg leading-tight">Energy Boost</h3>
            <p className="text-gray-400 text-xs mt-2">Perfect pre-workout or mid-day office snack.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;