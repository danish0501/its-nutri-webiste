import { motion } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";

const ProductHero = () => {

    return (
        <section className="relative overflow-hidden pt-16 pb-20 px-4">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-forest rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="absolute top-[20%] -right-[10%] w-[50%] h-[70%] bg-accent rounded-full blur-[140px]"
                />
            </div>

            <div className="container-narrow relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6 border border-accent/20"
                    >
                        <Sparkles className="w-3 h-3" />
                        <span>Premium Collection 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight"
                    >
                        Nourish Your Body with{" "}
                        <span className="relative inline-block">
                            Nature's Best
                            <motion.svg
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="absolute -bottom-2 left-0 w-full h-2 text-accent/30"
                                viewBox="0 0 300 10"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,5 Q75,0 150,5 T300,5" fill="none" stroke="currentColor" strokeWidth="4" />
                            </motion.svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-muted-foreground mb-10 leading-relaxed"
                    >
                        Wholesome, preservative-free snacks crafted from the finest ingredients.
                        No hidden sugars, just pure nutrition for your everyday energy.
                    </motion.p>
                </div>
            </div>

            {/* Floating Elements Animation */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[10%] hidden lg:block opacity-20 text-forest"
            >
                <Leaf className="w-12 h-12" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[20%] right-[12%] hidden lg:block opacity-20 text-accent"
            >
                <Leaf className="w-10 h-10" />
            </motion.div>
        </section>
    );
};

export default ProductHero;

