import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Message sent! We'll get back to you soon.");
        setIsSuccess(true);
        setIsSubmitting(false);
        setForm({ name: "", email: "", subject: "", message: "" });

        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Your Name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Email Address</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none"
                >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bulk Order">Bulk Order & Corporate</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-accent text-accent-foreground font-bold hover:bg-burnt-orange-light disabled:opacity-70 transition-all shadow-lg shadow-accent/20"
            >
                {isSubmitting ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                ) : isSuccess ? (
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Sent Successfully
                    </div>
                ) : (
                    <>
                        <Send className="h-5 w-5" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
