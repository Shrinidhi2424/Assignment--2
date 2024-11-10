import React from 'react';
import './App.css';
import './Styles/Header.css';
import './Styles/Footer.css';
import './Styles/Category.css';
import './Styles/CakeItem.css';
import './Styles/CartItem.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import pages
import CategoriesPage from './pages/CategoriesPage';
import CakeDetailsPage from './pages/CakeDetailsPage';
import CartPage from './pages/CartPage';
import AboutUsPage from './pages/AboutUsPage';  // Updated import for About page
import ContactPage from './pages/ContactPage';  // Import Contact page

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header on all pages */}
        
        {/* Setting up routing for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cake/:id" element={<CakeDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />  {/* Updated to AboutUsPage */}
          <Route path="/contact" element={<ContactPage />} />  {/* Contact page */}
        </Routes>
        
        <Footer /> {/* Footer on all pages */}
      </div>
    </Router>
  );
}

export default App;
