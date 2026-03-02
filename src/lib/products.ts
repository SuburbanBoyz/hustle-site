export type Product = {
  id: string;
  name: string;
  priceCents: number;
  description: string;
};

export const products: Product[] = [
  {
    id: "hoodie",
    name: "Hustle Hoodie",
    priceCents: 6500,
    description: "Premium heavyweight hoodie. Clean fit. Everyday wear.",
  },
];