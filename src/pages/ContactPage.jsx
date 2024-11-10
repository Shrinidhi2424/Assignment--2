// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import '../Styles/ContactPage.css'; // Styles specific to Contact page

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    // Handle form submission logic (e.g., send data to an API)
  };

  return (
    <div>
      
      {/* Contact Form Section */}
      <section className="contact-section">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
    </div>
  );
};

export default ContactPage;
