import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* Logo placeholder; replace with actual image if available */}
        <Link to="/">Cake Shop</Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/categories" className="header__nav-link">Categories</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">About Us</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">Contact</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/cart" className="header__nav-link">
              Cart 
              <span className="header__cart-count">
                {cartItemCount > 0 ? cartItemCount : 0}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
