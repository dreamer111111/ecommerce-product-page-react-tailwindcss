import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product, quantity) => {
    if (quantity === 0) return;
    setCartItems([{ ...product, quantity }]);
  };

  const deleteItem = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);