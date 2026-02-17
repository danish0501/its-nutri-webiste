import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sparkles, Sprout, ShieldCheck, Globe, Heart } from "lucide-react";
import { useRef } from "react";

const AboutHero = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects for different elements
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden section-padding py-16 bg-gradient-to-b from-white via-accent/5 to-transparent"
        >
            {/* Interactive Background Blurs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-60"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-120px] right-[-100px] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] opacity-40"
            />

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-[10%] text-accent/20 hidden lg:block"
            >
                <Leaf size={120} />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 25, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-40 right-[15%] text-emerald-500/10 hidden lg:block"
            >
                <Sprout size={160} />
            </motion.div>

            <div className="relative z-10 container-narrow">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Small Tag */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest mb-8 border border-accent/20"
                    >
                        <Sparkles size={14} />
                        Our Story
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="font-serif text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight text-gray-900"
                    >
                        Born From a Love of {" "}
                        <span className="relative bg-gradient-to-r from-accent via-orange-500 to-emerald-600 bg-clip-text text-transparent italic">
                            Real Food
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-2 bg-accent/20 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-gray-600 text-xl mt-10 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        At It’s Nutri, we ripped up the rulebook on snacking.
                        No chemicals, no compromises—just pure nature, crafted
                        into high-performance fuel for your everyday adventures.
                    </motion.p>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.8 }
                            }
                        }}
                        className="mt-16 flex flex-wrap justify-center gap-6"
                    >
                        {[
                            { text: "100% Natural", icon: <Leaf className="w-4 h-4" /> },
                            { text: "Preservative Free", icon: <ShieldCheck className="w-4 h-4" /> },
                            { text: "Eco-Friendly", icon: <Globe className="w-4 h-4" /> },
                            { text: "Ethically Sourced", icon: <Heart className="w-4 h-4" /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -5, backgroundColor: "rgba(24, 80, 50, 0.05)" }}
                                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-primary/10 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-300 group cursor-default"
                            >
                                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-700">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;

