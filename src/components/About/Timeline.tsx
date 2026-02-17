import { motion } from "framer-motion";

const milestones = [
    { year: "2020", text: "Started in a home kitchen with a passion for healthy snacking." },
    { year: "2021", text: "Launched our first 5 products at local farmers' markets." },
    { year: "2022", text: "Expanded to online delivery across 10 cities." },
    { year: "2023", text: "Reached 50,000+ happy customers nationwide." },
    { year: "2024", text: "Launched our premium energy bites range." },
];

const Timeline = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-center mb-10">Our Journey</h2>
            <div className="space-y-8">
                {milestones.map((m, i) => (
                    <motion.div
                        key={m.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                    >
                        <div className="flex flex-col items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-xs font-bold">{m.year}</span>
                            {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                        </div>
                        <p className="text-sm text-foreground/80 pt-2.5 leading-relaxed">{m.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Timeline;
