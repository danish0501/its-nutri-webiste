import { motion } from "framer-motion";

const ProductHero = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Our Collection</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">All Products</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Wholesome, preservative-free snacks crafted from nature's finest.</p>
        </motion.div>
    );
};

export default ProductHero;
