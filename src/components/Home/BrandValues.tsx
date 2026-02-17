import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";

const brandValues = [
    {
        icon: Leaf,
        title: "100% Natural",
        description: "Premium ingredients, handpicked from organic sources for peak quality.",
        color: "from-emerald-400 to-green-600"
    },
    {
        icon: ShieldCheck,
        title: "No Preservatives",
        description: "Pure goodness without hidden chemicals or artificial shelf-life extenders.",
        color: "from-blue-400 to-indigo-600"
    },
    {
        icon: Heart,
        title: "No Added Sugar",
        description: "Naturally sweetened with high-quality dates, jaggery, and raw honey.",
        color: "from-rose-400 to-red-600"
    },
    {
        icon: Sparkles,
        title: "Handcrafted",
        description: "Made in small, artisanal batches to ensure perfection in every bite.",
        color: "from-amber-400 to-orange-600"
    },
];

const BrandValues = () => {
    return (
        <section className="py-16 bg-primary-foreground relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
                    >
                        Why Choose <span className="text-accent">It's Nutri?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-primary text-lg md:text-xl"
                    >
                        We believe that snacking should be a guilt-free celebration of health and taste.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {brandValues.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative bg-white p-8 rounded-3xl transition-all border border-gray-100"
                        >
                            {/* Animated Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                {/* Icon Container with Gradient Glow */}
                                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className={`absolute inset-0 opacity-20 blur-lg rounded-full bg-gradient-to-br ${v.color}`} />
                                    <v.icon className="h-7 w-7 text-gray-800 relative z-10 group-hover:text-emerald-600 transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-emerald-700 transition-colors">
                                    {v.title}
                                </h3>

                                <p className="text-gray-700 text-base">
                                    {v.description}
                                </p>

                                {/* Subtle bottom accent line */}
                                <div className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${v.color} mt-6 rounded-full transition-all duration-300`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandValues;