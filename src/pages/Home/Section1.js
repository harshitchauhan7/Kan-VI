import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/heor4-removebg-preview.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  {/* <h4 className="h4_xs">Fanzoo Burger</h4> */}
                  {/* <h4 className="h3_lg">₹99/-</h4> */}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Kan-VI Food</h1>
              <h2 className="text-white">With New Patners</h2>
              <h4 className="text-white">Fanzoo Boul,  Music Taco Bell, Break Kart</h4>
              <p className="text-white pt-2 pb-4">
              Our goal is to provide affordable,
              delicious, and customizable meals to a diverse customer base through a digital-first
              approach.
              </p>
              <Link to="/brands" className="btn-order_now">
                Explore Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
