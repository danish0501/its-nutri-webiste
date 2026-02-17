import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface BestsellersProps {
    onQuickView: (product: Product) => void;
}

const Bestsellers = ({ onQuickView }: BestsellersProps) => {
    // Logic to get the top 3 bestsellers for a clean hero grid
    const bestsellers = products.filter((p) => p.bestseller).slice(0, 3);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Subtle Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="flex items-center gap-2 text-accent font-bold tracking-widest uppercase text-sm mb-3">
                            <TrendingUp className="h-4 w-4" />
                            <span>Most Loved by Community</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                            The <span className="italic text-primary">Bestseller</span> Collection
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link 
                            to="/products" 
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-primary-foreground font-bold overflow-hidden transition-all hover:pr-10"
                        >
                            <span className="relative z-10">Explore Full Menu</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                             <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
                        </Link>
                    </motion.div>
                </div>

                {/* Main Product Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {bestsellers.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="relative"
                        >
                            <ProductCard 
                                product={p} 
                                index={i} 
                                onQuickView={onQuickView} 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bestsellers;