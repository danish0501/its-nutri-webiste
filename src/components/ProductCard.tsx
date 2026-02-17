import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye } from "lucide-react";
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
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
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
        <Heart className={`h-4 w-4 transition-colors ${inWishlist ? "fill-accent text-accent" : "text-foreground"}`} />
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
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{product.ingredients}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">₹{product.price}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
