import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Award } from "lucide-react";

const values = [
    { icon: Leaf, title: "Sourced from Nature", desc: "We handpick every ingredient from trusted farmers who share our commitment to quality and sustainability." },
    { icon: ShieldCheck, title: "Zero Preservatives", desc: "Our products have a short, readable ingredients list — nothing artificial ever makes it in." },
    { icon: Heart, title: "Made with Love", desc: "Small-batch production ensures every snack meets our exacting standards for taste and nutrition." },
    { icon: Award, title: "Quality First", desc: "Every batch undergoes rigorous quality checks before reaching your hands." },
];

const Values = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {values.map((v, i) => (
                <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl bg-card border border-border/50"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                        <v.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Values;
