import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ITC from '../Images/ITC.jpg'
import Palace from '../Images/Palace.jpg'
import Hyatt from '../Images/Hyatt.jpg'
import kakatiya from '../Images/kakatiya.jpg'
import leela from '../Images/leela.jpg'
import Radison from '../Images/Radison.jpg'
const TelanganaHotels = () => {
    const hotels = [
        {
            name: "ITC Kohenur",
            image: ITC,
            price: "₹10,000/night",
            location: "Hitech City, Hyderabad",
        },
        {
            name: "Taj Falaknuma Palace",
            image: Palace,
            price: "₹25,000/night",
            location: "Falaknuma, Hyderabad",
        },
        {
            name: "Park Hyatt Hyderabad",
            image: Hyatt,
            price: "₹12,000/night",
            location: "Banjara Hills, Hyderabad",
        },
         {
            name: "ITC KaKatiya",
            image: kakatiya,
            price: "₹9,000/night",
            location: "Hitech City, Hyderabad",
        },
        {
            name: "the Leela  Hyderabad",
            image: leela,
            price: "₹20,000/night",
            location: "Falaknuma, Hyderabad",
        },
        {
            name: "Radisson Blu Plaza Hotel",
            image: Radison,
            price: "₹1,000/night",
            location: "Banjara Hills, Hyderabad",
        },
    ];

    return (
        <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "60px 0" }}>
            <Container>
                <h2 className="text-center mb-5">Top Hotels in Telangana</h2>
                <Row>
                    {hotels.map((hotel, index) => (
                        <Col md={4} sm={6} key={index} className="mb-4">
                            <Card className="shadow-sm hotel-card">
                                <Card.Img variant="top" src={hotel.image} height="250" />
                                <Card.Body>
                                    <Card.Title>{hotel.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Location:</strong> {hotel.location} <br />
                                        <strong>Price:</strong> {hotel.price}
                                    </Card.Text>
                                    <Button variant="warning" className="w-100">
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
        }
        .hotel-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
        </div>
    );
};

export default TelanganaHotels;