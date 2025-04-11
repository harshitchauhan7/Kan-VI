import React, { useState } from "react";
import "../../styles/BrandStyle.css";

const Brands = () => {
  const [activeTab, setActiveTab] = useState("businesses");

  const businesses = [
    {
      name: "Franzoo Bowl",
      location:
        "Franzoo Bowl serves a vibrant fusion of bold flavors and fresh ingredients—crafted bowls that energize your taste buds and deliver a modern twist on healthy dining. LOVE'S FOOD",
      logo:
        "https://images.unsplash.com/photo-1545361367-3202270671e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Music Taco Bell",
      location:
        "Miss, Turn up the flavor with Music Taco Bell — where every bite hits the right note! These tacos are a delicious symphony of crunchy shells, zesty fillings, and bold spices that dance on your taste buds.",
      logo:
        "https://images.unsplash.com/photo-1667840606484-aba533d9c35c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TG9nbyUyME1UQnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Lunch Break Kart",
      location:
        "Toronto, Lunch Break Kart delivers quick, tasty meals right to your desk. From hot lunches to refreshing snacks, we fuel your day with fresh flavors—fast and fuss-free!",
      logo:
        "https://plus.unsplash.com/premium_photo-1669075651663-3f264ed78316?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ultra Lounge",
      location:
        "Vaughan, Ultra Lounge blends gourmet flavors with a chic ambiance—serving crafted dishes, signature cocktails, and a modern vibe perfect for food lovers and night owls alike.",
      logo:
        "https://images.unsplash.com/photo-1659993445173-279e4f37c216?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const startups = [
    {
      name: "Pizza Pops",
      location: "Brampton",
      logo:
        "https://images.unsplash.com/photo-1655462968944-9a901f4c3f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TG9nbyUyMFBpenphJTIwcG9wfGVufDB8fDB8fHww",
    },
    {
      name: "Egg Holic",
      location: "Toronto",
      logo:
        "https://plus.unsplash.com/premium_photo-1683133428030-ed210d7498ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9nbyUyMEVnZyUyMGhvbGljfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="brands-page">
      <div className="spacer"></div>

      <section className="hero-section">
        <div className="hero-text">
          <h3>Deliver Sustainable Growth</h3>
          <h1>
            Our Valued <span className="highlight">Food Partners</span>
          </h1>
          <p>
            We support our partners with technology and marketing to help them
            thrive. Our ecosystem is designed to help restaurants, cafes, and
            food entrepreneurs flourish.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1737232107236-d3915640140e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Food Partners"
          />
        </div>
      </section>

      <div className="tabs">
        <button
          className={activeTab === "businesses" ? "active" : ""}
          onClick={() => setActiveTab("businesses")}
        >
          Food Businesses
        </button>
        <button
          className={activeTab === "startups" ? "active" : ""}
          onClick={() => setActiveTab("startups")}
        >
          Food Start-ups
        </button>
      </div>

      <div className="brands-grid">
        {(activeTab === "businesses" ? businesses : startups).map(
          (brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} />
              <h4>{brand.name}</h4>
              <p>{brand.location}</p>

              {activeTab === "businesses" && (
                <div className="card-buttons">
                  <button className="btn-outline">Swiggy</button>
                  <button className="btn-primary">Zomato</button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Brands;
