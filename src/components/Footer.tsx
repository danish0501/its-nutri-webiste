import { Link } from "react-router-dom";
import { Leaf, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="text-xl font-serif font-bold">It's Nutri</span>
          </Link>
          <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
            Crafting wholesome, preservative-free snacks from nature's finest ingredients. 
            Every bite is a step towards healthier living.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {[["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]].map(([name, path]) => (
              <Link key={path} to={path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
            <p>hello@itsnutri.com</p>
            <p>+91 98765 43210</p>
            <p>Mumbai, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} It's Nutri. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
