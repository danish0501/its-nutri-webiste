import { motion, useScroll, useSpring } from "framer-motion";
import { Home, ShoppingBag, Globe, Users, Trophy } from "lucide-react";
import { useRef } from "react";

const milestones = [
    {
        year: "2020",
        title: "The Kitchen Experiment",
        text: "It's Nutri began in a home kitchen. Frustrated by 'fake' healthy snacks, our founder started hand-pressing dates and nuts for family and friends.",
        icon: Home,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        year: "2021",
        title: "Market Validation",
        text: "Launched at local farmers' markets. We sold out in 2 hours on our first day, proving that people were craving honest, sugar-free nutrition.",
        icon: ShoppingBag,
        color: "bg-blue-100 text-blue-600",
    },
    {
        year: "2022",
        title: "Going Digital",
        text: "Built our first D2C platform. We expanded shipping to 10 major cities, bringing cold-pressed energy bites to office desks and gym bags nationwide.",
        icon: Globe,
        color: "bg-purple-100 text-purple-600",
    },
    {
        year: "2023",
        title: "Community Growth",
        text: "Reached the milestone of 50,000+ happy snackers. Our 'I Love Nutri' community became the heart of our product innovation process.",
        icon: Users,
        color: "bg-rose-100 text-rose-600",
    },
    {
        year: "2024",
        title: "The Premium Era",
        text: "Launched the Signature Energy Range. New packaging, optimized nutrient profiles, and carbon-neutral shipping practices introduced.",
        icon: Trophy,
        color: "bg-amber-100 text-amber-600",
    },
];

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="py-16 bg-[#FAF9F6] relative overflow-hidden">
            {/* Large Background Decorative Year */}
            <div className="absolute top-10 left-10 text-[20vw] font-serif font-black text-gray-200/20 pointer-events-none select-none">
                EST. 2020
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Evolution</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                            A Journey of <span className="italic text-primary">Pure Purpose</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Animated Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 hidden md:block"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } items-center gap-8 md:gap-0`}
                            >
                                {/* Year Marker */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-[#FAF9F6] shadow-xl flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-accent" />
                                    </div>
                                    <span className={`absolute ${i % 2 === 0 ? "md:left-16" : "md:right-16"} font-black text-3xl text-gray-300 hidden md:block`}>
                                        {m.year}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${m.color}`}>
                                            <m.icon className="w-6 h-6" />
                                        </div>
                                        <span className="block text-accent font-bold text-sm mb-2 md:hidden">{m.year}</span>
                                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{m.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {m.text}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;