import React from "react";
import "../../styles/AboutStyle.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section className="about-page">
      <Container>
        {/* Our Story - Centered Section */}
        <Row className="justify-content-center our-story">
          <Col md={8} className="text-center">
            <h2>Our Story</h2>
            {/* <p>We started Kan-Vi Foods with a mission to bring fresh, restaurant-quality food to your doorstep.</p> */}
          </Col>
        </Row>

        {/* Left Side Text, Right Side Image */}
        <Row className="align-items-center mt-5">
          <Col md={6} className="text-left">
            <h3>Fresh Ingredients</h3>
            <p>At Kan-Vi Foods, we believe that great taste starts with the finest ingredients. That’s why we carefully source fresh vegetables, premium meats, and authentic spices to bring you the most flavorful dishes. Every ingredient is handpicked to ensure quality, nutrition, and taste.</p>
            {/* <a href="#" className="read-more-btn"><span>Read More</span></a> */}
          </Col>
          <Col md={6}>
            <img src="https://img.freepik.com/free-photo/female-chef-kitchen-using-laptop-device_23-2149720721.jpg?t=st=1744258389~exp=1744261989~hmac=a4df2cf569dafc370e65a47087b17fb028bc800ef261e4d0c51126ed47661c10&w=740" alt="Fresh Ingredients" className="about-img"/>
          </Col>
        </Row>

        {/* Left Side Image, Right Side Text */}
        <Row className="align-items-center mt-5">
          <Col md={6}>
            <img src="https://img.freepik.com/free-photo/vlogger-cooking-while-streaming_23-2149151557.jpg?t=st=1744260688~exp=1744264288~hmac=4ea19d059733ed0e798dc17dee6418b02305171a6857316d7fe430aadde7b85b&w=740" alt="Fast Delivery" className="about-img"/>
          </Col>
          <Col md={6} className="text-right">
            <h3>From Kitchen to You</h3>
            <p>At Kan-Vi Foods, we bring fresh, flavorful meals straight to your doorstep. Our chefs use handpicked ingredients, ensuring quality and taste in every bite. From preparation to delivery, we focus on speed, freshness, and care so your food arrives hot and delicious, just like a home-cooked feast. </p>
          </Col>
        </Row>

        {/* Left Side Text, Right Side Image */}
        <Row className="align-items-center mt-5">
          <Col md={6} className="text-left">
            <h3>Unmatched Taste</h3>
            <p>At Kan-Vi Foods, we craft every dish with a perfect balance of authentic flavors and premium ingredients. Our chefs follow time-tested recipes, blending rich spices and fresh produce to create meals that delight your taste buds. Every bite is a burst of aroma, texture, and taste, making each meal a truly satisfying experience.</p>
          </Col>
          <Col md={6}>
            <img src="https://img.freepik.com/premium-photo/portrait-handsome-indian-male-chef-posing-while-doing-activities_466689-14376.jpg?w=740" alt="Best Taste" className="about-img"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
