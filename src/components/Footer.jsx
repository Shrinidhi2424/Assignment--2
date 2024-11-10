import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__contact">
          <p>&copy; 2023 Cake Shop</p>
          <p>Contact us: info@cakeshop.com</p>
          <div className="footer__socials">
            {/* Add icons for social media links here */}
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
