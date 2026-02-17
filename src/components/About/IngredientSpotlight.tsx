import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Brain, Sparkles, Beaker, ShieldCheck, ChevronRight } from 'lucide-react';

const ingredients = [
    {
        id: "dates",
        name: "Medjool Dates",
        title: "Sustained Energy",
        description: "The natural powerhouse for sustained energy without the crash.",
        science: "Dates are rich in natural sugars (fructose and glucose) and fiber, ensuring a slow release of energy. They contain potassium and magnesium which aid in muscle function and recovery.",
        icon: <Zap className="w-8 h-8 text-burnt-orange" />,
        color: "bg-[#FFF4E0]",
        accent: "text-burnt-orange",
        badge: "Natural Fuel"
    },
    {
        id: "nuts",
        name: "Cold-Pressed Nuts",
        title: "Brain & Heart Health",
        description: "For healthy brain fats and protein that keep you sharp and full.",
        science: "Rich in Omega-3 fatty acids and Vitamin E, our cold-pressing process preserves the healthy monounsaturated fats that support cognitive function and cardiovascular health.",
        icon: <Brain className="w-8 h-8 text-forest" />,
        color: "bg-[#E6EDEA]",
        accent: "text-forest",
        badge: "Cognitive Boost"
    },
    {
        id: "honey",
        name: "Raw Honey",
        title: "Antioxidant Rich",
        description: "Nature's antioxidant-rich sweetener that supports your immune system.",
        science: "Unlike processed sugar, raw honey contains polyphenols and flavonoids that act as natural antioxidants. It has antibacterial properties and a lower glycemic index.",
        icon: <Sparkles className="w-8 h-8 text-burnt-orange" />,
        color: "bg-[#FFF9E6]",
        accent: "text-burnt-orange",
        badge: "Immune Support"
    }
];

const IngredientSpotlight = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="py-16 bg-cream relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-forest/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-burnt-orange/5 rounded-full blur-2xl pointer-events-none" />

            <div className="container-narrow relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-widest mb-6">
                            <Beaker className="w-4 h-4" />
                            Nutritional Excellence
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6">
                            Ingredient <span className="text-accent italic">Spotlight</span>
                        </h2>
                        <p className="text-lg md:text-xl text-forest/70 leading-relaxed font-sans">
                            We don't just use natural ingredients; we select them for their biological benefits.
                            Explore the science that fuels every Nutri bite.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ingredients.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                            onMouseEnter={() => setActiveId(item.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                        >
                            <div className={`relative h-full p-8 rounded-[2rem] bg-white border border-forest/5 shadow-sm transition-all duration-500 overflow-hidden cursor-pointer ${activeId === item.id ? 'shadow-2xl border-forest/10 -translate-y-2' : ''}`}>

                                {/* Background Accent Animation */}
                                <motion.div
                                    className={`absolute top-0 right-0 w-32 h-32 ${item.color} rounded-bl-full -z-0`}
                                    animate={{
                                        scale: activeId === item.id ? 2 : 1,
                                        opacity: activeId === item.id ? 1 : 0.4
                                    }}
                                    transition={{ duration: 0.6 }}
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    <motion.div
                                        className={`inline-flex p-4 rounded-2xl ${item.color} mb-8 self-start`}
                                        animate={{ rotate: activeId === item.id ? 12 : 0 }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div className="mb-6">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${item.accent} mb-3 block`}>
                                            {item.badge}
                                        </span>
                                        <h3 className="font-serif text-3xl font-bold text-forest mb-2">{item.name}</h3>
                                        <p className="text-forest/80 font-medium">{item.title}</p>
                                    </div>

                                    <div className="relative flex-grow min-h-[100px]">
                                        <AnimatePresence mode="wait">
                                            {activeId === item.id ? (
                                                <motion.div
                                                    key="science"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="pt-4 border-t border-forest/10"
                                                >
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <ShieldCheck className={`w-4 h-4 ${item.accent}`} />
                                                        <span className="text-[10px] font-bold text-forest uppercase tracking-widest">Molecular Benefits</span>
                                                    </div>
                                                    <p className="text-sm text-forest/70 leading-relaxed italic">
                                                        "{item.science}"
                                                    </p>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="desc"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-forest/60 leading-relaxed mb-6">
                                                        {item.description}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-forest/40 uppercase tracking-widest group">
                                                        Reveal Science <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
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

export default IngredientSpotlight;
