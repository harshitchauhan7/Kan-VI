// brands.js
import React from 'react';
import '../../styles/BrandStyle.css';

const Brands = () => {
  return (
    <div className="brands-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Your Brand's Digital Presence</h1>
          <p>
            We help innovative businesses connect with customers through stunning and strategic design.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="brands-details">
        <h2>Our Partner Brands</h2>
        <div className="brand-grid">
          {/* Brand Card 1 */}
          <div className="brand-card">
            <img src="http://localhost:3000/static/media/image.70d8588788b630f07053.png" alt="Amazon" />
            <h3>Franzoo Bowl</h3>
            <p>Leading e-commerce platform delivering a wide range of products globally with fast shipping.</p>
            <div className="brand-buttons">
              <button>Learn More</button>
              <button>Visit Site</button>
            </div>
          </div>

          {/* Brand Card 2 */}
          <div className="brand-card">
            <img src="http://localhost:3000/static/media/muic2.76bc70b4cf8b7cbedba2.png" alt="Microsoft" />
            <h3>Music Taco Bell</h3>
            <p>Innovating productivity and enterprise tools, empowering digital transformation globally.</p>
            <div className="brand-buttons">
              <button>Learn More</button>
              <button>Visit Site</button>
            </div>
          </div>

          {/* Brand Card 3 */}
          <div className="brand-card">
            <img src="http://localhost:3000/static/media/lunch.0854ebc65f01cbded28a.png" alt="Netflix" />
            <h3>Lunch Break Kart</h3>
            <p>Streaming global entertainment with exclusive shows, movies, and original content.</p>
            <div className="brand-buttons">
              <button>Learn More</button>
              <button>Visit Site</button>
            </div>
          </div>

          {/* Brand Card 4 */}
          <div className="brand-card">
            <img src="http://localhost:3000/static/media/muic2.76bc70b4cf8b7cbedba2.png" alt="LogoTV" />
            <h3>Music Taco Bell</h3>
            <p>Celebrating LGBTQ+ culture with original shows, documentaries, and creative storytelling.</p>
            <div className="brand-buttons">
              <button>Learn More</button>
              <button>Visit Site</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Brands;
