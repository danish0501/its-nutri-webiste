import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingBag, User, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems: cartCount, setIsCartOpen } = useCart();
  const { totalItems: wishCount, setIsWishlistOpen } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-blur shadow-sm" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="h-7 w-7 text-accent transition-transform group-hover:rotate-12" />
          <span className="text-xl sm:text-2xl font-serif font-bold text-foreground">
            It's <span className="text-accent">Nutri</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-semibold tracking-wide transition-colors hover:text-accent ${location.pathname === link.path ? "text-accent" : "text-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-secondary transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="h-6 w-6 text-foreground" />
            {wishCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4.5 w-4.5 flex items-center justify-center text-[10px] font-bold rounded-full bg-accent text-accent-foreground min-w-[18px] h-[18px]">
                {wishCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-secondary transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-6 w-6 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center text-[10px] font-bold rounded-full bg-accent text-accent-foreground min-w-[18px] h-[18px]">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            to="/auth"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <User className="h-5 w-5" />
            Login
          </Link>
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden navbar-blur border-t border-border/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 transition-colors ${location.pathname === link.path ? "text-accent" : "text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/auth"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium mt-2"
              >
                <User className="h-4 w-4" />
                Login / Signup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
