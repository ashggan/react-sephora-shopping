import { createContext, useContext, useState } from "react";
import {
  cartItem,
  shoppingCartProviderProps,
  shoppingCartContext,
} from "../types/cart";
// import { getPrice } from "../utils/helpers";

const ShoppingCartContext = createContext({} as shoppingCartContext);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: shoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const getItemsTotal = () => cartItems.length;

  const getTotal = () => {
    let total = 0;
    cartItems.length !== 0
      ? cartItems.forEach((h) => (total += h.quantity * h.price))
      : 0;
    return total;
  };

  const getItemsQuantity = (id: string) =>
    cartItems.find((i) => i.id === id)?.quantity || 0;

  const increaseQuantity = (id: string, price: number) => {
    setCartItems((currItems) => {
      if (cartItems.find((i) => i.id === id)) {
        return currItems.map((h) =>
          h.id === id ? { ...h, quantity: h.quantity++ } : h
        );
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
    console.log(cartItems);
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((currItems) => {
      if (cartItems.find((i) => i.id === id)?.quantity === 1) {
        return currItems.filter((h) => h.id != id);
      } else {
        return currItems.map((h) =>
          h.id === id ? { ...h, quantity: h.quantity-- } : h
        );
      }
    });
  };

  const removeItem = (id: string) => {
    setCartItems((currItems) => {
      return currItems.filter((h) => h.id != id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getTotal,
        getItemsTotal,
        getItemsQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

//
