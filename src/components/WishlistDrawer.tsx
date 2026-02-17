import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const WishlistDrawer = () => {
  const { items, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm" onClick={() => setIsWishlistOpen(false)} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                <h2 className="font-serif text-xl font-bold">Wishlist ({items.length})</h2>
              </div>
              <button onClick={() => setIsWishlistOpen(false)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <Heart className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="font-serif text-lg text-foreground mb-2">Your wishlist is empty</p>
                <p className="text-sm text-muted-foreground mb-6">Save items you love!</p>
                <Link to="/products" onClick={() => setIsWishlistOpen(false)} className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.map((product) => (
                  <motion.div key={product.id} layout className="flex gap-4 p-3 rounded-xl bg-card">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-semibold text-sm text-foreground truncate">{product.name}</h4>
                      <p className="text-xs text-muted-foreground">{product.ingredients}</p>
                      <p className="font-bold text-foreground mt-1">₹{product.price}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => { addToCart(product); toast.success(`${product.name} added to cart!`); }}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                        >
                          <ShoppingBag className="h-3 w-3" /> Add to Cart
                        </button>
                        <button onClick={() => removeFromWishlist(product.id)} className="p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
