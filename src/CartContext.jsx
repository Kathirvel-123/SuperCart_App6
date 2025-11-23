import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);
    if (!exist) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9; 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, discountedPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
