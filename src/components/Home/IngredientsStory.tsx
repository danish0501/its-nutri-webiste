import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Beaker, Sparkles, CheckCircle2 } from "lucide-react";
import ingredientsImg from "@/assets/hero-snacks.jpg"; 

const features = [
    {
        icon: Leaf,
        title: "Sourced from the Heart",
        tag: "100% Organic",
        description: "Every nut, seed, and fruit is hand picked from certified organic farms that prioritize soil health and biodiversity.",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: ShieldCheck,
        title: "Zero Compromise",
        tag: "Preservative Free",
        description: "We use traditional dehydration techniques instead of chemical preservatives to keep our snacks fresh and nutrient-dense.",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: Beaker,
        title: "Nutrient Locked",
        tag: "Lab Tested",
        description: "Our proprietary process ensures that essential vitamins and minerals are preserved, giving you the energy you need.",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        icon: Sparkles,
        title: "Natural Sweetness",
        tag: "Superfood",
        description: "Sweetened only with premium Deglet Noor dates and raw forest honey. No refined sugar or artificial sweeteners, ever.",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
];

const IngredientsStory = () => {
    return (
        <section className="py-16 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase mb-4">
                                The Ingredients Story
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                                Nature's Finest,<br />
                                <span className="text-primary italic">Crafted for You.</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                                We believe that the best snacks come from simple, honest ingredients.
                                Our journey starts at the farm and ends in your hand—with nothing
                                artificial in between.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="group flex gap-6 p-6 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                >
                                    <div className={`shrink-0 w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center transition-transform group-hover:rotate-6`}>
                                        <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
                                                {feature.tag}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image Section */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Main Image Container */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5]"
                            >
                                <img
                                    src={ingredientsImg}
                                    alt="Premium Natural Ingredients"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </motion.div>

                            {/* Decorative Glassmorphism Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -right-8 top-20 z-20 backdrop-blur-md bg-white/70 p-6 rounded-2xl border border-white/40 shadow-xl max-w-[180px]"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                                </div>
                                <h4 className="font-bold text-gray-900 leading-tight mb-1">100% Transparency</h4>
                                <p className="text-[10px] text-gray-600 font-medium tracking-wide">Every batch lab-tested for purity and nutrient density.</p>
                            </motion.div>

                            {/* Subtle background glow */}
                            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-0" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IngredientsStory;
