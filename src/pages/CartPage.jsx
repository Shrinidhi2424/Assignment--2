import React from 'react';
import CartItem from '../components/CartItem'; // CartItem component to display each item
import useCart from '../hooks/useCart'; // Custom hook for managing the cart
import '../Styles/CartPage.css'; // Specific styles for Cart page

const CartPage = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart(); // Using the custom hook

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      
      {/* Cart Section */}
      <section className="cart-section">
        <h1>Your Cart</h1>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                addToCart={addItemToCart} 
                removeFromCart={removeItemFromCart} 
              />
            ))
          )}
        </div>
        <div className="cart-total">
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          <button>Proceed to Checkout</button>
        </div>
      </section>
      
    </div>
  );
};

export default CartPage;
