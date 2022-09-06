export type IDrinksContext = IDrink;

interface sizes {
  size: string;
  price: number;
}

interface sweets {
  sweet: string;
  price: number;
}

export interface IDrink {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  sizes: sizes[];
  roast: string[];
  sweets: sweets[];
  serving: string[];
}
