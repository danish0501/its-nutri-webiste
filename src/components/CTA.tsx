import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    buttonText = "Explore Our Range",
    buttonLink = "/products",
    className = "",
}: CTAProps) => {
    return (
        <section className={`section-padding bg-primary ${className} relative overflow-hidden`}>
            {/* Decorative background elements for premium feel */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container-narrow text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                        {description}
                    </p>
                    <Button
                        asChild
                        className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 h-auto text-lg font-bold transition-all group shadow-xl hover:shadow-accent/20"
                    >
                        <Link to={buttonLink} className="inline-flex items-center gap-2">
                            {buttonText}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
