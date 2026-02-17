import { motion } from "framer-motion";
import { Heart, Sparkles, Quote } from "lucide-react";
import aboutImg from "@/assets/hero-snacks.jpg";

const OurStory = () => {
    return (
        <section className="relative py-12 lg:py-20 overflow-hidden bg-[#FAF9F6]">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image with decorative border */}
                        <div className="relative rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl aspect-square">
                            <img
                                src={aboutImg}
                                alt="Handcrafting snacks"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Floating Stat Card 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 md:right-0 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-accent/10"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Heart className="w-6 h-6 fill-current" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900 leading-none">100%</p>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Authentic Care</p>
                            </div>
                        </motion.div>

                        {/* Floating Stat Card 2 */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-6 md:left-10 z-20 bg-primary p-6 rounded-2xl shadow-xl text-white max-w-[200px]"
                        >
                            <Quote className="w-5 h-5 text-accent mb-2" />
                            <p className="text-sm font-medium leading-relaxed italic">
                                "We don't just make snacks; we nourish lifestyles."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                            <Sparkles className="w-3 h-3" />
                            Our Philosophy
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                            Born From a Love <br />
                            <span className="text-accent italic">Of Real Food.</span>
                        </h1>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <strong className="text-gray-900 font-bold">It's Nutri</strong> didn't start in a corporate boardroom. It started in a home kitchen with a simple frustration: why are "healthy" snacks either boring or full of hidden chemicals?
                            </p>
                            <p>
                                We spent months sourcing the perfect <span className="text-primary font-semibold">Deglet Noor dates</span>, raw forest honey, and organic nuts to prove that you don't need refined sugar to satisfy a craving.
                            </p>
                        </div>
                        <div className="mt-10 pt-10 border-t border-gray-200">
                            <p className="text-gray-600 text-lg leading-relaxed">We spent months obsessing over raw ingredients sourcing the finest dates, cold pressed nuts, and organic seeds. Our philosophy is simple: if nature didn't make it, we don't use it. No hidden sugars, no chemical fillers, just pure energy.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;