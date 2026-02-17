import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="section-padding pt-8">
            <div className="container-narrow">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Our Story</span>
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6">
                        Born From a Love of<br /><span className="text-accent">Real Food</span>
                    </h1>
                    <p className="text-muted-foreground leading-relaxed">
                        It's Nutri was born from a simple belief: snacking shouldn't mean compromising on health.
                        We craft every product with 100% natural ingredients — no preservatives, no added sugar,
                        no artificial anything. Just honest, wholesome food that tastes incredible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
