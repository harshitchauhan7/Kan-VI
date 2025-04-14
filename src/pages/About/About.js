import React from "react";
import "../../styles/AboutStyle.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col md={10}>
              <h1>Welcome to Kan-Vi Foods</h1>
              <p>Your favorite place for fresh, flavorful, and fast-delivered meals.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main About Content */}
      <section className="about-page">
        <Container>
          {/* Our Story */}
          <Row className="justify-content-center our-story">
            <Col md={8} className="text-center">
              <h2>Our Story</h2>
            </Col>
          </Row>

          {/* Fresh Ingredients */}
          <Row className="align-items-center mt-5">
            <Col md={6} className="text-left">
              <h3>Fresh Ingredients</h3>
              <p>At Kan-Vi Foods, we believe that great taste starts with the finest ingredients. That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes.That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and tasteThat’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste Every ingredient is handpicked to ensure quality, nutrition, and taste.</p>
            </Col>
            <Col md={6}>
              <img src="https://img.freepik.com/free-photo/female-chef-kitchen-using-laptop-device_23-2149720721.jpg?t=st=1744258389~exp=1744261989~hmac=a4df2cf569dafc370e65a47087b17fb028bc800ef261e4d0c51126ed47661c10&w=740" alt="Fresh Ingredients" className="about-img"/>
            </Col>
          </Row>

          {/* Fast Delivery */}
          <Row className="align-items-center mt-5">
            <Col md={6}>
              <img src="https://img.freepik.com/free-photo/vlogger-cooking-while-streaming_23-2149151557.jpg?t=st=1744260688~exp=1744264288~hmac=4ea19d059733ed0e798dc17dee6418b02305171a6857316d7fe430aadde7b85b&w=740" alt="Fast Delivery" className="about-img"/>
            </Col>
            <Col md={6} className="text-right">
              <h3>From Kitchen to You</h3>
              <p>At Kan-Vi Foods, we believe that great taste starts with the finest ingredients. That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes.That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and tasteThat’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste Every ingredient is handpicked to ensure quality, nutrition, and taste. </p>
            </Col>
          </Row>

          {/* Unmatched Taste */}
          <Row className="align-items-center mt-5">
            <Col md={6} className="text-left">
              <h3>Unmatched Taste</h3>
              <p>At Kan-Vi Foods, we believe that great taste starts with the finest ingredients. That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes.That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and tasteThat’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste Every ingredient is handpicked to ensure quality, nutrition, and taste.</p>
            </Col>
            <Col md={6}>
              <img src="https://img.freepik.com/premium-photo/portrait-handsome-indian-male-chef-posing-while-doing-activities_466689-14376.jpg?w=740" alt="Best Taste" className="about-img"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
