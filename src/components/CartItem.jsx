// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={`assets/images/${item.image}`} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => addToCart(item)}>Add More</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
