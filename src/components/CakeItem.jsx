import React from 'react';
import '../Styles/CakeItem.css';
import useCart from '../hooks/useCart'; // Custom hook for cart management

const CakeItem = ({ cake }) => {
  const { addItemToCart } = useCart(); // Using addItemToCart from the custom hook

  // Convert the price to a number if it's a string (in case it's formatted with symbols like ₹)
  const price = parseFloat(cake.price.replace(/[^0-9.-]+/g, ''));

  return (
    <div className="cake-item">
      {/* Load image from assets folder directly */}
      <img src={`/assets/images/${cake.image}`} alt={cake.name} className="cake-item__image" />
      <div className="cake-item__details">
        <h3 className="cake-item__name">{cake.name}</h3>
        <p className="cake-item__price">₹{price.toFixed(2)}</p>
        <button onClick={() => addItemToCart(cake)} className="cake-item__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CakeItem;
