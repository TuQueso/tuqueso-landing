export type ProductSize = {
  name: "Pequeño" | "Mediano" | "Grande";
  weight: string;
  price: string;
  color: string;
  popular?: boolean;
};

export const PRODUCT_SIZES: ProductSize[] = [
  {
    name: "Pequeño",
    weight: "500–650g",
    price: "$6.500 – $8.450",
    color: "bg-[#FFC93C]",
  },
  {
    name: "Mediano",
    weight: "651–900g",
    price: "$8.463 – $11.700",
    color: "bg-[#7CB342]",
    popular: true,
  },
  {
    name: "Grande",
    weight: "901g – 1.2kg",
    price: "$11.713 – $15.600",
    color: "bg-[#FF6B35]",
  },
];

export type Subscription = {
  name: "Quincenal" | "Semanal";
  desc: string;
  off: string;
  price: string;
  best: boolean;
};

export const SUBSCRIPTIONS: Subscription[] = [
  {
    name: "Quincenal",
    desc: "2 quesos al mes",
    off: "5%",
    price: "Desde $16.000/mes",
    best: false,
  },
  {
    name: "Semanal",
    desc: "4 quesos al mes",
    off: "7,5%",
    price: "Desde $30.000/mes",
    best: true,
  },
];
