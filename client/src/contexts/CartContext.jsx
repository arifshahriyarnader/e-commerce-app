import { createContext } from "react";
import { useCart } from "../hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addProductToCart, productRemoveFromCart } = useCart();
  return (
    <CartContext.Provider
    value={{
      cart,
      addProductToCart,
      productRemoveFromCart
    }}
  >
    {children}
  </CartContext.Provider>
  )
};
