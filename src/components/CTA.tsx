import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface CTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
}

const CTA = ({
    title = "Ready to Snack Better?",
    description = "Join thousands who've made the switch to natural, guilt-free snacking.",
    buttonText = "Explore Collection",
    buttonLink = "/products",
    className = "",
}: CTAProps) => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section
            ref={containerRef}
            className={`relative py-12 md:py-16 overflow-hidden bg-white ${className}`}
        >
            {/* Refined Background Blobs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-20%] left-[10%] w-[30%] h-[100%] bg-accent/15 rounded-full blur-[100px] mix-blend-screen opacity-50"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-20%] right-[10%] w-[40%] h-[100%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Main Card with Glassmorphism */}
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-primary backdrop-blur-xl p-8 md:p-12 lg:p-16">

                        {/* Visual highlight line at the top */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                        <div className="grid lg:grid-cols-5 gap-10 items-center">

                            {/* Text Side */}
                            <div className="lg:col-span-3 text-left">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-2 text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Elevate Your Snacking
                                </motion.div>

                                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    {title.split(" ").map((word, i) => (
                                        <span key={i} className="inline-block mr-3">
                                            {word === "Better?" || word === "Nutri" ? (
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                                                    {word}
                                                </span>
                                            ) : word}
                                        </span>
                                    ))}
                                </h2>

                                <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* Action Side */}
                            <div className="lg:col-span-2 flex flex-col items-stretch lg:items-end gap-4">
                                <Button
                                    asChild
                                    className="relative group overflow-hidden rounded-2xl bg-accent text-primary-foreground hover:bg-accent/90 px-8 py-7 h-auto text-lg font-bold transition-all shadow-2xl shadow-accent/20 hover:shadow-accent/40"
                                >
                                    <Link to={buttonLink} className="inline-flex items-center justify-center gap-3">
                                        {buttonText}
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />

                                        {/* Shimmer line */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-7 h-auto text-lg font-semibold transition-all lg:w-full max-w-[280px]"
                                >
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </Button>

                                <Link
                                    to="/about"
                                    className="group flex items-center lg:justify-end gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mt-2"
                                >
                                    <span>Our health philosophy</span>
                                    <div className="w-6 h-px bg-gray-600 group-hover:w-10 group-hover:bg-accent transition-all duration-300" />
                                </Link>
                            </div>
                        </div>

                        {/* Decorative background leaf */}
                        <div className="absolute -bottom-10 -right-10 opacity-5 -rotate-12 pointer-events-none">
                            <Leaf size={240} className="text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default CTA;
