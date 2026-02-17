import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Award } from "lucide-react";

const milestones = [
  { year: "2020", text: "Started in a home kitchen with a passion for healthy snacking." },
  { year: "2021", text: "Launched our first 5 products at local farmers' markets." },
  { year: "2022", text: "Expanded to online delivery across 10 cities." },
  { year: "2023", text: "Reached 50,000+ happy customers nationwide." },
  { year: "2024", text: "Launched our premium energy bites range." },
];

const About = () => (
  <div className="min-h-screen pt-24">
    {/* Hero */}
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

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            { icon: Leaf, title: "Sourced from Nature", desc: "We handpick every ingredient from trusted farmers who share our commitment to quality and sustainability." },
            { icon: ShieldCheck, title: "Zero Preservatives", desc: "Our products have a short, readable ingredients list — nothing artificial ever makes it in." },
            { icon: Heart, title: "Made with Love", desc: "Small-batch production ensures every snack meets our exacting standards for taste and nutrition." },
            { icon: Award, title: "Quality First", desc: "Every batch undergoes rigorous quality checks before reaching your hands." },
          ].map((v, i) => (
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

        {/* Timeline */}
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
      </div>
    </section>
  </div>
);

export default About;
