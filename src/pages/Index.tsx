import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/products";
import heroImage from "@/assets/hero-snacks.jpg";

const brandValues = [
  { icon: Leaf, title: "100% Natural", description: "Made from the finest natural ingredients, handpicked for quality." },
  { icon: ShieldCheck, title: "No Preservatives", description: "We never use artificial preservatives or chemicals." },
  { icon: Heart, title: "No Added Sugar", description: "Sweetened naturally with dates, jaggery, and honey." },
  { icon: Sparkles, title: "Handcrafted", description: "Every batch is lovingly made in small batches." },
];

const Index = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div className="min-h-screen">
      {/* Hero */}
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

      {/* Brand Values */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Fan Favorites</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">Our Bestsellers</h2>
            <p className="text-muted-foreground max-w-md mx-auto">The snacks our customers can't get enough of — try them and see why.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bestsellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onQuickView={setQuickView} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Snack Better?
            </h2>
            <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">
              Join thousands who've made the switch to natural, guilt-free snacking.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Our Range <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
};

export default Index;
