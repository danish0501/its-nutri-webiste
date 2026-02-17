import chocolateBerries from "@/assets/products/chocolate-berries.jpg";
import hazelnutBlast from "@/assets/products/hazelnut-blast.jpg";
import foxtailNuts from "@/assets/products/foxtail-nuts.jpg";
import chatpataMakhana from "@/assets/products/chatpata-makhana.jpg";
import methiLadoos from "@/assets/products/methi-ladoos.jpg";
import oatsStrawberry from "@/assets/products/oats-strawberry.jpg";
import bakedPoha from "@/assets/products/baked-poha.jpg";

export interface Product {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  bestseller: boolean;
  category: string;
  description: string;
  weight: string;
}

export const products: Product[] = [
  {
    id: "chocolate-berries",
    name: "Chocolate Berries",
    ingredients: "Dates, Cocoa, Ragi, Berries & Nuts",
    price: 349,
    image: chocolateBerries,
    bestseller: true,
    category: "Energy Bites",
    description: "A rich, chocolatey treat packed with the goodness of dates, cocoa, ragi, and mixed berries. No added sugar, just pure indulgence.",
    weight: "200g",
  },
  {
    id: "hazelnut-nutella-blast",
    name: "Hazelnut Nutella Blast",
    ingredients: "Pure Hazelnut, Almonds, Dates, Jaggery",
    price: 399,
    image: hazelnutBlast,
    bestseller: true,
    category: "Energy Bites",
    description: "Creamy hazelnut bliss made with pure hazelnuts, almonds, and dates sweetened with jaggery. A guilt-free Nutella experience.",
    weight: "200g",
  },
  {
    id: "foxtail-nuts-seeds",
    name: "Foxtail Nuts & Seeds",
    ingredients: "Foxtail Millet, Dates, Nuts & Seeds",
    price: 299,
    image: foxtailNuts,
    bestseller: false,
    category: "Bars",
    description: "Crunchy millet bars loaded with nuts and seeds, naturally sweetened with dates. Perfect for on-the-go nutrition.",
    weight: "180g",
  },
  {
    id: "chatpata-makhana",
    name: "Chatpata Makhana",
    ingredients: "Roasted Makhana, Spices, Rock Salt",
    price: 249,
    image: chatpataMakhana,
    bestseller: false,
    category: "Savory Snacks",
    description: "Crispy roasted fox nuts with a tangy, spicy twist. Light, crunchy, and absolutely addictive.",
    weight: "100g",
  },
  {
    id: "methi-ladoos",
    name: "Methi Ladoos",
    ingredients: "Fenugreek, Pure Ghee, Jaggery, Dry Fruits",
    price: 379,
    image: methiLadoos,
    bestseller: false,
    category: "Traditional",
    description: "Handcrafted traditional methi ladoos made with pure ghee and jaggery. A wholesome winter delicacy.",
    weight: "250g",
  },
  {
    id: "oats-strawberry",
    name: "Oats Strawberry",
    ingredients: "Rolled Oats, Dried Strawberry, Honey, Seeds",
    price: 279,
    image: oatsStrawberry,
    bestseller: true,
    category: "Bars",
    description: "Wholesome oat bars studded with real dried strawberries and crunchy seeds. A delicious breakfast or snack option.",
    weight: "180g",
  },
  {
    id: "baked-poha-chiwda",
    name: "Baked Poha Chiwda",
    ingredients: "Flattened Rice, Peanuts, Curry Leaves, Spices",
    price: 199,
    image: bakedPoha,
    bestseller: false,
    category: "Savory Snacks",
    description: "Light and crispy baked chiwda made from flattened rice with peanuts and aromatic curry leaves. Zero oil, full flavor.",
    weight: "150g",
  },
];
