import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "sonner";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-background rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-muted transition-colors">
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                {product.bestseller && (
                  <span className="inline-flex w-fit px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground mb-3">
                    Bestseller
                  </span>
                )}
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{product.category}</p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">{product.name}</h2>
                <p className="text-sm text-muted-foreground mb-1">{product.ingredients}</p>
                <p className="text-xs text-muted-foreground mb-4">{product.weight}</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">{product.description}</p>
                <p className="text-2xl font-bold text-foreground mb-5">₹{product.price}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => { addToCart(product); toast.success(`${product.name} added to cart!`); }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => { addToWishlist(product); toast.success("Added to wishlist!"); }}
                    className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-accent text-accent" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
