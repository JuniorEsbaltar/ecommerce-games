import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const setItems = (product) => {
    if(!cartItems.find(item => item.id === product.id)){
      changeCart([...cartItems, product]);
    } 
  };

  const changeCart = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
  }

  const removeItem = (id) => {
    const filtredItems = cartItems.filter(item => item.id !== id);
    changeCart(filtredItems);
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if(!cart) return;
    
    setCartItems(JSON.parse(cart))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setItems,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  const { cartItems, setItems, removeItem } = context;
  return { cartItems, setItems, removeItem };
}