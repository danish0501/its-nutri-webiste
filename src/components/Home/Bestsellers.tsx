import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface BestsellersProps {
    onQuickView: (product: Product) => void;
}

const Bestsellers = ({ onQuickView }: BestsellersProps) => {
    const bestsellers = products.filter((p) => p.bestseller);

    return (
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
                        <ProductCard key={p.id} product={p} index={i} onQuickView={onQuickView} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link to="/products" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
                        View All Products <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Bestsellers;
