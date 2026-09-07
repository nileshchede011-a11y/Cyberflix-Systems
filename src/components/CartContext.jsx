import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const KEY = "cyberflixCart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem(KEY) || "[]"));
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(cart)), [cart]);

  const addToCart = (product) => setCart(current => {
    const existing = current.find(item => item.id === product.id);
    return existing ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const removeFromCart = id => setCart(current => current.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => setCart(current => quantity < 1 ? current : current.map(item => item.id === id ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((t,i)=>t+i.quantity,0);
  const cartTotal = cart.reduce((t,i)=>t+i.price*i.quantity,0);
  return <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity,clearCart,cartCount,cartTotal}}>{children}</CartContext.Provider>;
}
export function useCart(){ return useContext(CartContext); }
