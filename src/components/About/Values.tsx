import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Award } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Sourced from Nature",
        desc: "We handpick every ingredient from trusted farmers who share our commitment to organic quality and environmental sustainability.",
        highlight: "100% Organic Origins",
        color: "group-hover:text-emerald-500"
    },
    {
        icon: ShieldCheck,
        title: "Zero Preservatives",
        desc: "Our products have a short, readable ingredients list — nothing artificial, chemical, or synthetic ever makes it into our kitchen.",
        highlight: "Clean Label Certified",
        color: "group-hover:text-blue-500"
    },
    {
        icon: Heart,
        title: "Made with Love",
        desc: "Small-batch production ensures every snack meets our exacting standards. We prioritize nutritional integrity over mass production.",
        highlight: "Artisanal Batches",
        color: "group-hover:text-rose-500"
    },
    {
        icon: Award,
        title: "Quality First",
        desc: "Every single batch undergoes three layers of rigorous quality checks and lab testing before it is allowed to reach your hands.",
        highlight: "Lab-Tested Purity",
        color: "group-hover:text-amber-500"
    },
];

const Values = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        The Standards We <span className="text-accent italic">Live By</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Transparency isn't just a buzzword for us; it’s the core of how we craft every single bite.
                    </p>
                </div>

                {/* Staggered Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative p-10 rounded-[2.5rem] bg-[#FAF9F6] border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <v.icon className="absolute -right-8 -bottom-8 w-40 h-40 text-gray-200/40 rotate-12 group-hover:rotate-0 transition-transform duration-700" />

                            <div className="relative z-10">
                                {/* Icon Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <v.icon className={`h-7 w-7 text-gray-700 ${v.color} transition-colors duration-300`} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 group-hover:text-accent transition-colors">
                                        {v.highlight}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                                    {v.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                                    {v.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;