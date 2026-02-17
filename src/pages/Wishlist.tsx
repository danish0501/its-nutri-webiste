import { motion } from "framer-motion";
import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const { items, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

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
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">My Wishlist</h1>
                            <p className="text-muted-foreground mt-2">
                                {items.length === 0
                                    ? "You haven't saved any products yet."
                                    : `You have ${items.length} ${items.length === 1 ? 'item' : 'items'} saved in your wishlist.`}
                            </p>
                        </div>
                    </motion.div>
                </header>

                {items.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card rounded-3xl p-12 md:p-20 text-center border border-dashed border-border flex flex-col items-center"
                    >
                        <div className="relative mb-6">
                            <Heart className="h-24 w-24 text-muted-foreground/20" />
                            <Heart className="h-12 w-12 text-muted-foreground/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold mb-4">Your Wishlist is Empty</h2>
                        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
                            Explore our collection and save your favorite products to find them easily later.
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
                        >
                            <ShoppingBag className="h-5 w-5" />
                            Start Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {items.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <button
                                        onClick={() => {
                                            removeFromWishlist(product.id);
                                            toast.success(`${product.name} removed from wishlist`);
                                        }}
                                        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-destructive shadow-lg hover:bg-destructive hover:text-white transition-all transform hover:rotate-90"
                                        title="Remove from wishlist"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="mb-2">
                                        <span className="text-xs font-medium uppercase tracking-wider text-accent">
                                            {product.category || 'Premium'}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                                        {product.ingredients}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                        <span className="text-xl font-bold text-foreground">
                                            ₹{product.price}
                                        </span>
                                        <button
                                            onClick={() => {
                                                addToCart(product);
                                                toast.success(`${product.name} added to cart!`);
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all active:scale-95"
                                        >
                                            <ShoppingBag className="h-4 w-4" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to all products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
