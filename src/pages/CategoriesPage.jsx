import React from 'react';
import Category from '../components/Category'; // Component to display individual categories
import '../Styles/CategoriesPage.css'; // Styles specific to the Categories page

const CategoriesPage = () => {
  // Hardcoded categories data (no need for useState here, directly use it)
  const hardcodedCategories = [
    { id: 1, name: 'Layered Cakes', image: 'APLCake.jpg' },
    { id: 2, name: 'Chocolate Cakes', image: 'BForrest.jpg' },
    { id: 3, name: 'Velvet Specialty Cakes', image: 'RVelvet.jpg' },
    { id: 4, name: 'Scotch Cakes', image: 'BCake.jpg' },
    { id: 5, name: 'Speciality Cakes', image: 'TCake.jpg' },
    { id: 6, name: 'Caramel Cakes', image: 'CCCake.jpg' },
    { id: 7, name: 'Speciality Cakes', image: 'FRCake.jpg' },
    { id: 8, name: 'Fruit Cakes', image: 'PCake.jpg' },
    { id: 9, name: 'Infused Cakes', image: 'LICake.jpg' },
    { id: 10, name: 'Chocolate Cakes', image: 'CTruffle.jpg' },
  ];

  return (
    <div>
      {/* Categories Section */}
      <section className="categories-section">
        <h1>Our Cake Categories</h1>
        <p>Select a category to explore our delicious cakes!</p>

        <div className="categories-gallery">
          {hardcodedCategories.map((category) => (
            <Category key={category.id} name={category.name} image={category.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
