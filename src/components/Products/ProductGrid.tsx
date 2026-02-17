import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductGridProps {
    onQuickView: (product: Product) => void;
    searchQuery?: string;
    onClearFilters?: () => void;
}

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const ProductGrid = ({ onQuickView, searchQuery = "", onClearFilters }: ProductGridProps) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = products.filter((p) => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;

                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group ${isActive
                                ? "text-accent-foreground"
                                : "text-muted-foreground hover:text-primary bg-secondary/50 hover:bg-secondary"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-lg shadow-accent/25"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    );
                })}
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
                {filtered.length > 0 ? (
                    filtered.map((p, i) => (
                        <ProductCard key={p.id} product={p} index={i} onQuickView={onQuickView} />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-muted-foreground opacity-50" />
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-primary mb-2">No products found</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            Try adjusting your search or category filter to find what you're looking for.
                        </p>
                        <button
                            onClick={() => {
                                setActiveCategory("All");
                                if (onClearFilters) onClearFilters();
                            }}
                            className="mt-6 text-accent font-semibold hover:underline"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default ProductGrid;
