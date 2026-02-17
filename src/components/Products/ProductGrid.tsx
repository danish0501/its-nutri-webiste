import { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductGridProps {
    onQuickView: (product: Product) => void;
}

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const ProductGrid = ({ onQuickView }: ProductGridProps) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-muted"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} onQuickView={onQuickView} />
                ))}
            </motion.div>
        </>
    );
};

export default ProductGrid;
