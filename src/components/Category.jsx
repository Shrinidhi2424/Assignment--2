import React from 'react';
import '../Styles/Category.css';

// Hardcoded category data based on the cakes provided in HomePage
const hardcodedCategories = [
  {
    id: 1,
    name: 'Almond Pistachio Layered Cake',
    image: 'APLCake.jpg',
    category: 'Layered cakes',
  },
  {
    id: 2,
    name: 'Black Forrest',
    image: 'BForrest.jpg',
    category: 'Chocolate',
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    image: 'RVelvet.jpg',
    category: 'Velvet Specialty',
  },
  {
    id: 4,
    name: 'ButterScotch Cake',
    image: 'BCake.jpg',
    category: 'Scotch',
  },
  {
    id: 5,
    name: 'Tiramisu Cake',
    image: 'TCake.jpg',
    category: 'Speciality',
  },
  {
    id: 6,
    name: 'Caramel Crunch Cake',
    image: 'CCCake.jpg',
    category: 'Caramel',
  },
  {
    id: 7,
    name: 'Ferroe Rocher',
    image: 'FRCake.jpg',
    category: 'Speciality',
  },
  {
    id: 8,
    name: 'Pineapple',
    image: 'PCake.jpg',
    category: 'Fruit',
  },
  {
    id: 9,
    name: 'Lavender Infused Cake',
    image: 'LICake.jpg',
    category: 'Infused',
  },
  {
    id: 10,
    name: 'Chocolate Truffle Cake',
    image: 'CTruffle.jpg',
    category: 'Chocolate',
  },
  // Add more categories if needed
];

const Category = ({ categories = hardcodedCategories }) => { 
  // Default to hardcodedCategories if no categories are passed

  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <img
            src={`/assets/images/${category.image}`}  // Reference images directly in the assets folder
            alt={category.name}
            className="category__image"
          />
          <h3 className="category__name">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
