import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="Your name"
                />
            </div>
            <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="you@email.com"
                />
            </div>
            <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                    placeholder="Tell us what's on your mind..."
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
                <Send className="h-4 w-4" />
                Send Message
            </button>
        </motion.form>
    );
};

export default ContactForm;
