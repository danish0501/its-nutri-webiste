import { useState } from "react";
import ProductHero from "@/components/Products/ProductHero";
import ProductGrid from "@/components/Products/ProductGrid";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/products";

const Products = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <ProductHero />
          <ProductGrid onQuickView={setQuickView} />
        </div>
      </section>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
};

export default Products;

