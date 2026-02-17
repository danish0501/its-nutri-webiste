import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";

const brandValues = [
    { icon: Leaf, title: "100% Natural", description: "Made from the finest natural ingredients, handpicked for quality." },
    { icon: ShieldCheck, title: "No Preservatives", description: "We never use artificial preservatives or chemicals." },
    { icon: Heart, title: "No Added Sugar", description: "Sweetened naturally with dates, jaggery, and honey." },
    { icon: Sparkles, title: "Handcrafted", description: "Every batch is lovingly made in small batches." },
];

const BrandValues = () => {
    return (
        <section className="section-padding bg-secondary">
            <div className="container-narrow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {brandValues.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                                <v.icon className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandValues;
