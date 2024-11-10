// src/pages/AboutUsPage.jsx
import React from 'react';
import '../Styles/AboutUsPage.css'; // Styles specific to About Us page

const AboutUsPage = () => {
  return (
    <div>
      
      {/* About Us Section */}
      <section className="about-us-section">
  <h1>About Us</h1>
  <p>We are a family-owned bakery serving delicious cakes made with love and passion. With years of experience in crafting beautiful, mouth-watering cakes, we strive to make every occasion memorable with our creations.</p>
  
  <p>Our cakes are made from the finest ingredients, sourced locally, and baked with the utmost care to ensure the best quality and taste. Whether it’s a wedding, birthday, or any special event, we are here to make your celebrations sweeter.</p>
  
  <h2>Our Story</h2>
  <p>Our journey began in a small kitchen where a love for baking turned into a thriving bakery. What started as a hobby for our founder soon blossomed into a successful business driven by a love for creativity and the joy of baking.</p>
  
  <p>We’ve always believed that the secret ingredient to a perfect cake is not just the quality of ingredients but the love and passion put into every recipe. Our team of skilled bakers brings a blend of tradition and innovation to every creation.</p>
  
  <h2>Our Team</h2>
  <p>We are a dedicated team of bakers, decorators, and customer service professionals, each committed to making every cake the best it can be. From the perfect sponge to the finest decorations, we put our heart into every layer.</p>
  
  <div className="team-section">
    <div className="team-member">
      <img src="team-member1.jpg" alt="Founder - John Doe" />
      <h3>John Doe</h3>
      <p>Founder & CEO</p>
      <p>John started the bakery with a vision to create cakes that not only taste great but are visually stunning. His passion for baking has shaped the company into what it is today.</p>
    </div>
    
    <div className="team-member">
      <img src="team-member2.jpg" alt="Head Chef - Jane Smith" />
      <h3>Jane Smith</h3>
      <p>Head Chef</p>
      <p>Jane has been with us for over 10 years, crafting cakes with incredible attention to detail. Her creativity and expertise in cake decoration are unmatched.</p>
    </div>
    
    <div className="team-member">
      <img src="team-member3.jpg" alt="Customer Service - Sarah Lee" />
      <h3>Sarah Lee</h3>
      <p>Customer Service Manager</p>
      <p>Sarah ensures that every customer has a smooth experience from order to delivery. Her friendly and helpful demeanor makes her a favorite among our clients.</p>
    </div>
  </div>
  
  <h2>What We Believe</h2>
  <p>At our bakery, we believe that food brings people together, and there’s nothing more special than sharing a delicious cake with loved ones. We are committed to creating cakes that are not only beautiful but also memorable.</p>
  
  <p>Our mission is to make every celebration sweeter, every moment more memorable, and every cake the best it can be. Whether you are celebrating an intimate gathering or a grand event, we are here to bring your vision to life with a cake that’s as extraordinary as the occasion.</p>
  
  <h2>Customer Testimonials</h2>
  <div className="testimonials-section">
    <div className="testimonial">
      <p>"The best cake I’ve ever had! Every bite was delicious, and it was decorated so beautifully. We couldn’t be happier with our wedding cake!"</p>
      <h4>- Emily & Jake</h4>
    </div>
    <div className="testimonial">
      <p>"We order cakes for every special occasion, and every time we are amazed by how perfect they are. You can taste the love in every slice!"</p>
      <h4>- Sarah and Michael</h4>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default AboutUsPage;
