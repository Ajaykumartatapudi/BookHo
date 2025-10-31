import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Make sure these image paths and extensions match your /Images folder
import Taj from "../Images/Taj.jpg";
import Trident1 from "../Images/Trident1.jpg";
import Regis from "../Images/Regis.jpg";
import Obero from "../Images/Obero.jpg";
import Grand from "../Images/Grand.jpg";
import Marriot from "../Images/Marriot.jpg";

const MumbaiHotels = () => {
  const hotels = [
    {
      name: "The Taj Mahal Palace",
      image: Taj, // ✅ fixed (was Image)
      price: "₹12,500/night",
      location: "Colaba, Mumbai",
    },
    {
      name: "Trident Nariman Point",
      image: Trident1,
      price: "₹9,000/night",
      location: "Nariman Point, Mumbai",
    },
    {
      name: "The St. Regis Mumbai",
      image: Regis,
      price: "₹11,000/night",
      location: "Lower Parel, Mumbai",
    },
    {
      name: "The Oberoi Nariman Point",
      image: Obero, // ✅ fixed (was Image)
      price: "₹12,500/night",
      location: "Nariman Point, Mumbai",
    },
    {
      name: "JW Marriott Mumbai Juhu",
      image: Grand,
      price: "₹9,000/night",
      location: "Juhu Tara Road, Mumbai",
    },
    {
      name: "ITC Grand Central",
      image: Marriot,
      price: "₹11,000/night",
      location: "Ambedkar Road, Parel, Mumbai",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <Container>
        <h2 className="text-center mb-5 fw-bold">Top Hotels in Mumbai</h2>
        <Row>
          {hotels.map((hotel, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="shadow-sm hotel-card h-100">
                <Card.Img
                  variant="top"
                  src={hotel.image}
                  alt={hotel.name}
                  height="250"
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x250?text=Image+Not+Available";
                  }}
                />
                <Card.Body>
                  <Card.Title>{hotel.name}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {hotel.location}
                    <br />
                    <strong>Price:</strong> {hotel.price}
                  </Card.Text>
                  <Button variant="warning" className="w-100 fw-semibold">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .hotel-card {
          transition: transform 0.3s ease;
          border-radius: 10px;
        }
        .hotel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default MumbaiHotels;
