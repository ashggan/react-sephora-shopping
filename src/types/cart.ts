import { ReactNode } from "react";

export type shoppingCartProviderProps = {
  children: ReactNode;
};

export type shoppingCartContext = {
  cartItems: cartItem[];
  getItemsTotal: () => number;
  getTotal: () => number;
  getItemsQuantity: (id: string) => number;
  increaseQuantity: (id: string, price: number) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
};

export type cartItem = {
  id: string;
  quantity: number;
  price: number;
};
