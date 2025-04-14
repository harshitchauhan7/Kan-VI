import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/image.png";
import Image2 from "../../assets/menu/muic2.png";
import Image3 from "../../assets/menu/lunch.png";
import Image4 from "../../assets/menu/image.png";
import Image5 from "../../assets/menu/muic2.png";
import Image6 from "../../assets/menu/lunch.png";
import Image7 from "../../assets/menu/image.png";
import Image8 from "../../assets/menu/muic2.png";
import Cards from "../../components/Layouts/Cards";
// import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Franzoo Bowl",
    paragraph: "Savor the Zesty Delight of Veg Onion Pizza!",
    rating: 5,
    price: 299,
  },
  {
    id: "0002",
    image: Image2,
    title: "Music Taco Bell",
    paragraph: "Steamed to Perfection: Indulge in Flavorful Veg Momos!",
    rating: 4.5,
    price: 149,
  },
  {
    id: "0003",
    image: Image3,
    title: "Lunch Break Kart",
    paragraph: "Crispy, Golden, and Irresistible – Dive into Delicious French Fries!",
    rating: 4,
    price: 99,
  },
  {
    id: "0004",
    image: Image4,
    title: "Franzoo Bowl",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 199,
  },
  {
    id: "0005",
    image: Image5,
    title: "Music Taco Bell",
    paragraph: "Slurp Up the Flavor – Tasty & Tempting Veg Noodles!",
    rating: 3.0,
    price: 149,
  },
  {
    id: "0006",
    image: Image6,
    title: "Lunch Break Kart",
    paragraph: "A Tangy Twist of Flavor – Savor the Zest of Chicken Sour!",
    rating: 3,
    price: 399,
  },
  {
    id: "0007",
    image: Image7,
    title: "Franzoo Bowl",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 199,
  },
  {
    id: "0008",
    image: Image8,
    title: "Music Taco Bell",
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
            <h2>OUR CRAZY Brands!</h2>
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

        {/* <Row className="pt-5">
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
        </Row> */}
      </Container>
    </section>
  );
}

export default Section3;
