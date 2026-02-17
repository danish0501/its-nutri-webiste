import { useState } from "react";
import Hero from "@/components/Home/Hero";
import BrandValues from "@/components/Home/BrandValues";
import IngredientsStory from "@/components/Home/IngredientsStory";
import Bestsellers from "@/components/Home/Bestsellers";
import CTA from "@/components/CTA";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/data/products";
import Comparison from "@/components/Home/Comparison";

const Index = () => {

  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      <Hero />
      <BrandValues />
      <Bestsellers onQuickView={setQuickView} />
      <IngredientsStory />
      <Comparison />
      <CTA />
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
};

export default Index;

