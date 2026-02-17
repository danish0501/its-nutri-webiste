import { useState } from "react";
import Hero from "@/components/Home/Hero";
import BrandValues from "@/components/Home/BrandValues";
import Bestsellers from "@/components/Home/Bestsellers";
import CTA from "@/components/CTA";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/products";

const Index = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      <Hero />
      <BrandValues />
      <Bestsellers onQuickView={setQuickView} />
      <CTA />
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
};

export default Index;

