import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AboutStyle.css";

const About = () => {
  return (
    <section className="about-page">
      <Container>
        {/* Section 1 */}
        <Row className="align-items-center about-section">
          <Col md={6} sm={12} className="text-left">
            <h2>About Kan-Vi Foods</h2>
            <p>
              Welcome to Kan-Vi Foods! We're passionate about bringing the authentic
              flavors of India straight to your plate. Our journey began with a simple
              idea: to make delicious, high-quality Indian meals accessible to everyone.
              From traditional recipes passed down through generations to innovative
              twists on classic dishes, we strive to offer a culinary experience that's
              both nostalgic and exciting.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-photo/side-view-chicken-curry-with-rice-buckwheat_141793-4820.jpg"
              alt="Delicious Indian Food"
              className="about-img"
            />
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="align-items-center about-section">
          <Col md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-photo/top-view-indian-food-frame_23-2148748347.jpg"
              alt="Our Story"
              className="about-img"
            />
          </Col>
          <Col md={6} sm={12} className="text-left">
            <h3>Our Story</h3>
            <p>
              At Kan-Vi Foods, we believe that food is more than just sustenance – it's a
              way to connect, share, and celebrate. Our team of passionate chefs and food
              enthusiasts work tirelessly to ensure every meal we serve is crafted with
              love and care. Whether you're craving a comforting curry, a spicy biryani,
              or a sweet treat, we've got something special for you.
            </p>
          </Col>
        </Row>

        {/* Section 3 */}
        <Row className="align-items-center about-section">
          <Col md={6} sm={12} className="text-left">
            <h3>Quality & Freshness</h3>
            <p>
              We take pride in sourcing the freshest ingredients and maintaining the
              highest standards of hygiene and quality. Our commitment to excellence
              extends from our kitchen to your doorstep, ensuring a delightful dining
              experience every time.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20744.jpg"
              alt="Quality Food"
              className="about-img"
            />
          </Col>
        </Row>

        {/* Journey and Values Section */}
        <Row className="align-items-center about-section journey-values">
          <Col md={6} sm={12} className="text-left">
            <h3>Our Journey & Values</h3>
            <p>
              From our humble beginnings to where we stand today, our journey has been
              rooted in passion, perseverance, and a love for good food. At Kan-Vi Foods,
              we value transparency, freshness, and community—ensuring every dish tells
              a story of care, quality, and culture.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="https://img.freepik.com/free-vector/confectionery-chef-isometric-flowchart_1284-25878.jpg?uid=R101376618&ga=GA1.1.1714697244.1713441758&semt=ais_hybrid&w=740"
              alt="Our Journey and Values"
              className="about-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
