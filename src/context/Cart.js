import { Children, createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const setItems = (product) => {
    console.log(product)
    if(!cartItems.find(item => item.id === product.id)){
      localStorage.setItem('cart', JSON.stringify([...cartItems, product]));
      
      setCartItems([...cartItems, product])
      alert('Item inserido com sucesso')
    } else {
      alert('Item já está no carrinho')
    }
  };

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if(!cart) return;
    
    setCartItems(JSON.parse(cart))
    console.log(JSON.parse(cart))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  const { cartItems, setItems } = context;
  return { cartItems, setItems };
}