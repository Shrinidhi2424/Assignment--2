// src/hooks/useCart.js
import { useState } from 'react';

// Custom hook to manage cart operations
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // If item exists, update the quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it to the cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Update the quantity of an item in the cart
  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Calculate the total cost of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    calculateTotal,
    clearCart,
  };
};

export default useCart;
