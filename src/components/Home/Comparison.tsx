import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonData = [
    {
        feature: "The Sweetener",
        nutri: "Raw Dates & Forest Honey",
        market: "Refined Sugar & High Fructose Syrup",
    },
    {
        feature: "Quality of Fats",
        nutri: "Zero Oil / Cold Pressed",
        market: "Palm Oil & Hydrogenated Fats",
    },
    {
        feature: "Flavor & Color",
        nutri: "100% Fruits & Spices",
        market: "Artificial Flavors & Colors",
    },
    {
        feature: "Shelf Life",
        nutri: "Natural Dehydration",
        market: "Chemical Preservatives",
    },
];

const Comparison = () => {
    return (
        <section className="py-16 bg-secondary/30">
            <div className="container-narrow px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-black mb-4"
                    >
                        Why We Are <span className="italic text-accent">Different</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">
                        We believe in honest ingredients. Here is a simple look at how we compare
                        to conventional snacks you find on the shelf.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {comparisonData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6 border-b border-accent/10 pb-2">
                                {item.feature}
                            </h3>

                            <div className="space-y-6">
                                {/* Nutri Side */}
                                <div className="flex items-start gap-4">
                                    <div className="p-1.5 rounded-full bg-primary/10 text-primary mt-0.5">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-primary/60 block mb-0.5">It's Nutri Way</span>
                                        <p className="font-bold text-gray-900 leading-tight">{item.nutri}</p>
                                    </div>
                                </div>

                                {/* Market Side */}
                                <div className="flex items-start gap-4 border-t border-dashed border-border pt-4">
                                    <div className="p-1.5 rounded-full bg-red-50 text-red-300 mt-0.5">
                                        <XCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Standard Snacks</span>
                                        <p className="text-gray-500 line-through decoration-red-200">{item.market}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
