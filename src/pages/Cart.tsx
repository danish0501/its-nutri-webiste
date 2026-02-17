import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
    const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

    return (
        <div className="min-h-screen py-24 bg-background">
            <div className="container px-4 mx-auto">

                <header className="mb-12 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Shopping Cart</h1>
                            <p className="text-muted-foreground mt-2">
                                {items.length === 0
                                    ? "Your snack basket is waiting to be filled!"
                                    : `You have ${totalItems} items in your cart.`}
                            </p>
                        </div>
                    </motion.div>
                </header>

                {items.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card rounded-3xl p-12 md:p-24 text-center border border-dashed border-border flex flex-col items-center"
                    >
                        <div className="relative mb-8">
                            <ShoppingBag className="h-24 w-24 text-muted-foreground/20" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Your Cart is Empty</h2>
                        <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
                            Looks like you haven't added any of our delicious and nutritious snacks to your cart yet.
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-accent/20"
                        >
                            <ShoppingBag className="h-5 w-5" />
                            Browse Products
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.product.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
                                >
                                    <div className="relative w-full sm:w-32 aspect-square overflow-hidden rounded-2xl">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1 inline-block">
                                                    {item.product.category}
                                                </span>
                                                <h3 className="text-xl font-serif font-bold text-foreground">
                                                    {item.product.name}
                                                </h3>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    removeFromCart(item.product.id);
                                                    toast.success(`${item.product.name} removed from cart`);
                                                }}
                                                className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4">
                                            {item.product.weight} • {item.product.ingredients}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                                            <div className="flex items-center gap-4 bg-secondary/50 rounded-full px-4 py-2">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    className="p-1 rounded-full hover:bg-white transition-colors disabled:opacity-50"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="font-bold text-lg min-w-[1.5rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    className="p-1 rounded-full hover:bg-white transition-colors"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <span className="text-xl font-bold text-foreground">
                                                ₹{item.product.price * item.quantity}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="pt-8">
                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium group"
                                >
                                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="sticky top-28 bg-card rounded-3xl p-8 border border-border shadow-xl shadow-foreground/5"
                            >
                                <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-foreground">₹{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-medium">Calculated at next step</span>
                                    </div>
                                    <div className="pt-4 border-t border-border flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-accent">₹{totalPrice}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => toast.info("Checkout functionality coming soon!")}
                                    className="w-full flex items-center justify-center gap-3 py-5 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
                                >
                                    <CreditCard className="h-5 w-5" />
                                    Proceed to Checkout
                                </button>

                                <p className="text-center text-xs text-muted-foreground mt-6 leading-relaxed">
                                    Secure and encrypted checkout. <br />
                                    By proceeding, you agree to our Terms of Service.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
