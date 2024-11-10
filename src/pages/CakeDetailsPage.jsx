import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Styles/CakeDetailsPage.css'; // Styles specific to this page
import { useParams } from 'react-router-dom'; // To get dynamic URL parameters (cake ID)
import useCart from '../hooks/useCart';

// Hardcoded cakes data
const hardcodedCakes = [
  {
    id: '1',
    name: 'Almond Pistachio Layered Cake',
    image: 'APLCake.jpg',
    description: 'A delightful cake with almond and pistachio layers, perfect for special occasions.',
    price: 1500, // Change to a number
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: '2',
    name: 'Black Forrest',
    image: 'BForrest.jpg',
    description: 'A classic chocolate cake with layers of whipped cream and cherries.',
    price: 1200, // Change to a number
    sizes: ['Medium', 'Large'],
  },
  {
    id: '3',
    name: 'Red Velvet Cake',
    image: 'RVelvet.jpg',
    description: 'Velvety smooth texture with a rich cream cheese frosting.',
    price: 1800, // Change to a number
    sizes: ['Small', 'Medium', 'Large'],
  },
  {
    id: '4',
    name: 'ButterScotch Cake',
    image: 'BCake.jpg',
    description: 'A buttery, caramel-flavored cake with a crunchy topping.',
    price: 1100, // Change to a number
    sizes: ['Small', 'Medium'],
  },
  {
    id: '5',
    name: 'Tiramisu Cake',
    image: 'TCake.jpg',
    description: 'A rich and creamy Italian-inspired cake with coffee-soaked layers.',
    price: 2100, // Change to a number
    sizes: ['Medium', 'Large'],
  },
  {
    id: '6',
    name: 'Caramel Crunch Cake',
    image: 'CCCake.jpg',
    description: 'Caramel-flavored cake with a crunchy caramel topping.',
    price: 2300, // Change to a number
    sizes: ['Small', 'Medium'],
  },
  {
    id: '7',
    name: 'Ferroe Rocher',
    image: 'FRCake.jpg',
    description: 'A luxurious cake with layers of chocolate and Ferrero Rocher chocolates.',
    price: 1500, // Change to a number
    sizes: ['Medium', 'Large'],
  },
  {
    id: '8',
    name: 'Pineapple',
    image: 'PCake.jpg',
    description: 'A refreshing pineapple cake, light and fluffy.',
    price: 1700, // Change to a number
    sizes: ['Small', 'Medium'],
  },
  {
    id: '9',
    name: 'Lavender Infused Cake',
    image: 'LICake.jpg',
    description: 'A subtly sweet cake with a hint of lavender and a creamy frosting.',
    price: 1200, // Change to a number
    sizes: ['Medium', 'Large'],
  },
  {
    id: '10',
    name: 'Chocolate Truffle Cake',
    image: 'CTruffle.jpg',
    description: 'Decadent chocolate truffle cake made with dark chocolate ganache.',
    price: 1800, // Change to a number
    sizes: ['Small', 'Medium'],
  },
];

const CakeDetailsPage = () => {
  // State to store the cake details
  const [cake, setCake] = useState(null);

  // Get the cake ID from the URL
  const { cakeId } = useParams();

  const { addItemToCart } = useCart();

  // Set cake details based on hardcoded data
  useEffect(() => {
    const foundCake = hardcodedCakes.find((cake) => cake.id === cakeId);
    setCake(foundCake);
  }, [cakeId]);

  if (!cake) {
    return <p>Cake not found.</p>;
  }

  const handleAddToCart = () => {
    addItemToCart(cake); // Add the cake to the cart
  };

  return (
    <div>
      <Header /> {/* Include the Header component */}
      
      {/* Cake Details Section */}
      <section className="cake-details-section">
        <div className="cake-details">
          {/* Updated the image path */}
          <img src={`src/assets/images/${cake.image}`} alt={cake.name} className="cake-image" />
          <div className="cake-info">
            <h1>{cake.name}</h1>
            <p>{cake.description}</p>
            {/* Displaying price correctly */}
            <p>Price: ₹{cake.price.toFixed(2)}</p>
            <p>Available Sizes: {cake.sizes.join(', ')}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
      
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default CakeDetailsPage;
