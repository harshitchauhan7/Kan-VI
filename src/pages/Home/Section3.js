import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/pizza2.jpg";
import Image2 from "../../assets/menu/momo.jpg";
import Image3 from "../../assets/menu/french-fries.jpg";
import Image4 from "../../assets/menu/burger.jpg";
import Image5 from "../../assets/menu/noodle.jpg";
import Image6 from "../../assets/menu/chicken-sauce.jpg";
import Image7 from "../../assets/menu/sanwitch1.jpg";
import Image8 from "../../assets/menu/thali2.avif";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Veg Onino Pizza",
    paragraph: "Savor the Zesty Delight of Veg Onion Pizza!",
    rating: 5,
    price: 299,
  },
  {
    id: "0002",
    image: Image2,
    title: "Veg Momos",
    paragraph: "Steamed to Perfection: Indulge in Flavorful Veg Momos!",
    rating: 4.5,
    price: 149,
  },
  {
    id: "0003",
    image: Image3,
    title: "French Fries",
    paragraph: "Crispy, Golden, and Irresistible – Dive into Delicious French Fries!",
    rating: 4,
    price: 99,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 199,
  },
  {
    id: "0005",
    image: Image5,
    title: "Veg Nodels",
    paragraph: "Slurp Up the Flavor – Tasty & Tempting Veg Noodles!",
    rating: 3.0,
    price: 149,
  },
  {
    id: "0006",
    image: Image6,
    title: "Checken Sour",
    paragraph: "A Tangy Twist of Flavor – Savor the Zest of Chicken Sour!",
    rating: 3,
    price: 399,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 199,
  },
  {
    id: "0008",
    image: Image8,
    title: "Veg Thali",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 349,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY Food Items!</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/contact" className="btn btn_red px-4 rounded-0">
                Contact US
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/contact" className="btn btn_red px-4 rounded-0">
                Contact US
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
