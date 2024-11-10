import React, { useState } from 'react';
import Category from '../components/Category';
import '../Styles/HomePage.css';

const HomePage = () => {
  // Hardcoded data for cakes
  const hardcodedCakes = [
    {
      id: 1,
      name: 'Almond Pistachio Layered Cake',
      image: 'APLCake.jpg',
      price: '1,500',
      category: 'Layered cakes',
    },
    {
      id: 2,
      name: 'Black Forrest',
      image: 'BForrest.jpg',
      price: '1,200',
      category: 'Chocolate',
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      image: 'RVelvet.jpg',
      price: '1,800',
      category: 'Velvet Specialty',
    },
    {
      id: 4,
      name: 'ButterScotch Cake',
      image: 'BCake.jpg',
      price: '1,100',
      category: 'Scotch',
    },
    {
      id: 5,
      name: 'Tiramisu Cake',
      image: 'TCake.jpg',
      price: '2,100',
      category: 'Speciality',
    },
    {
      id: 6,
      name: 'Caramel Crunch Cake',
      image: 'CCCake.jpg',
      price: '2,300',
      category: 'Caramel',
    },
    {
      id: 7,
      name: 'Ferroe Rocher',
      image: 'FRCake.jpg',
      price: '1,500',
      category: 'Speciality',
    },
    {
      id: 8,
      name: 'Pineapple Cake',
      image: 'PCake.jpg',
      price: '1,700',
      category: 'Fruit',
    },
    {
      id: 9,
      name: 'Lavender Infused Cake',
      image: 'LICake.jpg',
      price: '1,200',
      category: 'Infused',
    },
    {
      id: 10,
      name: 'Chocolate Truffle Cake',
      image: 'CTruffle.jpg',
      price: '1,800',
      category: 'Chocolate',
    },
    // Add more cakes here if needed
  ];

  const [featuredCakes] = useState(hardcodedCakes); // Use hardcoded cakes as initial state

  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Our Cake Shop!</h1>
        <p>Indulge in the finest cakes made with love and the best ingredients.</p>
      </section>

      {/* Featured Cakes Section */}
      <section className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cake-gallery">
          {featuredCakes.length > 0 ? (
            featuredCakes.map((cake) => (
              <div key={cake.id} className="cake-item">
                 <img src={require(`../assets/images/${cake.image}`)} alt={cake.name} />
                <h3>{cake.name}</h3>
                <p>{cake.price}</p>
              </div>
            ))
          ) : (
            <p>No cakes available at the moment</p>
          )}
        </div>
      </section>

      {/* Cake Categories Section */}
      <Category categories={featuredCakes} />
    </div>
  );
};

export default HomePage;
