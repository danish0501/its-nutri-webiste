import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Eye, Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, index, onQuickView }: ProductCardProps) => {
  const { items, addToCart, updateQuantity } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const cartItem = items.find((i) => i.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(product.id, quantity - 1);
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info(`Removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`Added to wishlist!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300"
    >
      {product.bestseller && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground">
          Bestseller
        </span>
      )}

      <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
      >
        <Heart className={`h-5 w-5 transition-colors ${inWishlist ? "fill-[#F4320B] text-[#F4320B]" : "text-foreground"}`} />
      </button>

      <div className="relative overflow-hidden aspect-square">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => onQuickView(product)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium text-foreground"
          >
            <Eye className="h-4 w-4" />
            Quick View
          </motion.button>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-base uppercase tracking-wider text-accent mb-1">{product.category}</p>
        <h3 className="font-serif text-xl font-semibold text-primary mb-1">{product.name}</h3>
        <p className="text-base mb-3">{product.ingredients}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-black">₹{product.price}</span>

          <div className="flex-1 flex justify-end">
            <AnimatePresence mode="wait">
              {quantity > 0 ? (
                <motion.div
                  key="quantity-counter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1 border border-border"
                >
                  <button
                    onClick={handleDecrement}
                    className="p-1 rounded-full hover:bg-accent/10 text-accent transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-bold text-sm min-w-[1.2rem] text-center">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="p-1 rounded-full hover:bg-accent/10 text-accent transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  key="add-to-cart"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

