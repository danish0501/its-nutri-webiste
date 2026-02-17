import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const subjects = [
        "General Inquiry",
        "Bulk Order & Corporate",
        "Feedback",
        "Partnership"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.subject) {
            toast.error("Please select a subject");
            return;
        }

        setIsSubmitting(true);
        // ... rest of the logic
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Message sent! We'll get back to you soon.");
        setIsSuccess(true);
        setIsSubmitting(false);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });

        // Reset success state after 4 seconds to show the form again
        setTimeout(() => setIsSuccess(false), 4000);
    };

    return (
        <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <motion.form
                        key="contact-form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSubmit}
                        className="w-full space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/80 ml-1">Your Name *</label>
                                <input
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/80 ml-1">Mobile Number *</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    required
                                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground/80 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-sm font-bold text-foreground/80 ml-1">Subject *</label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground flex items-center justify-between transition-all hover:border-accent/50"
                                >
                                    <span className={form.subject ? "text-foreground" : "text-muted-foreground"}>
                                        {form.subject || "Select a subject"}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsDropdownOpen(false)}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                className="absolute left-0 right-0 top-full mt-2 bg-card border border-border rounded-2xl shadow-xl z-50 overflow-hidden"
                                            >
                                                {subjects.map((subject) => (
                                                    <button
                                                        key={subject}
                                                        type="button"
                                                        onClick={() => {
                                                            setForm({ ...form, subject });
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className="w-full px-5 py-3 text-left hover:bg-accent hover:text-accent-foreground transition-colors first:pt-4 last:pb-4"
                                                    >
                                                        {subject}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={() => { }}
                                    required
                                    tabIndex={-1}
                                    className="absolute opacity-0 pointer-events-none w-1 h-1 bottom-0 left-1/2"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                rows={6}
                                className="w-full px-5 py-4 rounded-2xl border border-border bg-background focus:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold hover:bg-burnt-orange-light disabled:opacity-70 transition-all shadow-lg shadow-accent/20"
                        >
                            {isSubmitting ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                    />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12 px-6 rounded-[2.5rem] bg-accent/5 border border-accent/20"
                    >
                        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/30">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                        <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                            Thank you for reaching out. We've received your message and will get back to you shortly.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
