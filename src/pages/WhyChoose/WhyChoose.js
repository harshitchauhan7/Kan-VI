import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/WhyChooseStyle.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      {/* 🔥 Background Video */}
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videocdn.cdnpk.net/videos/18d2161b-3ff5-52b2-bb08-6031eca96e4f/horizontal/previews/clear/large.mp4?token=exp=1744614246~hmac=a3f54c86d6ebe2289d33f9b8fad9cb8de0e08e2182169522fd7a18b284c0520a"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔤 Top Content */}
      <Container fluid className="top-content">
        <Row className="justify-content-center">
          <Col md={8} className="text-content text-center">
            <h1>
              Why Choose <span>Kan-Vi Foods</span>?
            </h1>
            <p>
              We're committed to delivering the highest-quality, farm-fresh Indian meals
              daily. Our food is prepared with love, using authentic recipes and 
              handpicked ingredients that bring the rich taste of tradition to your plate.
            </p>
            {/* <Button className="cta-bt">Explore Our Meals</Button> */}
          </Col>
          {/* <Button className="cta-bt">Explore Our Meals</Button> */}
        </Row>
      </Container>

      {/* 🥘 Feature Sections with Full-Width Red Background */}
      <div className="info-section-wrapper">
        <Container className="info-section">
          {/* 👨‍🌾 Section 1 */}
          <Row className="align-items-center feature-row">
            <Col md={6}>
              <img
                src="https://img.freepik.com/free-photo/farmer-holding-basket-full-oranges-orange-garden_1150-26280.jpg"
                alt="Farmer with Fruits"
                className="info-image"
              />
            </Col>
            <Col md={6}>
              <div className="info-text">
                <h3>Affordable and Customizable Meals</h3>
                <p>
                  From our farms to your fork, every step is guided by a deep respect for
                  nature and food quality. We ensure that our meals not only taste good but
                  also nourish your body and soul. Taste the love in every bite!
                </p>
              </div>
            </Col>
          </Row>

          {/* 🍱 Section 2 */}
          <Row className="align-items-center flex-md-row-reverse feature-row">
            <Col md={6}>
              <img
                src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?t=st=1744362541~exp=1744366141~hmac=eaa40f34972cf8470c35b5cb789d0b0e30ae780cb76bab848bec945cd1cc0cfa&w=1380"
                alt="Food Variety"
                className="info-image"
              />
            </Col>
            <Col md={6}>
              <div className="info-text">
                <h3>Wide Variety of Food Choices</h3>
                <p>
                  Whether you're craving a hearty meal or a light bite, we’ve got you covered. 
                  Choose from our diverse menu featuring classic Indian staples, fusion delights,
                  and healthy options — all made fresh every day!
                </p>
              </div>
            </Col>
          </Row>

          {/* 🚚 Section 3 */}
          <Row className="align-items-center feature-row">
            <Col md={6}>
              <img
                src="https://img.freepik.com/free-photo/hands-holding-modern-smartphone_23-2149834256.jpg?t=st=1744362732~exp=1744366332~hmac=8f49a29820072df2dac21acf0989b654c177590baab62339769d011be97abe43&w=1380"
                alt="Delivery Network"
                className="info-image"
              />
            </Col>
            <Col md={6}>
              <div className="info-text">
                <h3>Fast & Reliable Delivery Network</h3>
                <p>
                  We value your time as much as you value good food. Our seamless logistics and
                  trained delivery partners make sure your meal reaches you hot and fresh,
                  right on time — every time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default WhyChooseUs;
