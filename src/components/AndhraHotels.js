import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tirupati from '../Images/Tirupati.jpg'
import novotel from '../Images/novotel.jpg'
import four from '../Images/four.jpg'
import grtgrand from '../Images/grtgrand.jpg'
import resort from '../Images/resort.jpg'
import leela from '../Images/leela.jpg'


const AndhraHotels = () => {
    const hotels = [
        {
            name: "Novotel Visakhapatnam Varun Beach",
            image: novotel,
            price: "₹8,000/night",
            location: "Visakhapatnam, Andhra Pradesh",
        },
        {
            name: "Taj Tirupati",
            image: Tirupati,
            price: "₹9,200/night",
            location: "Tirupati, Andhra Pradesh",
        },
        {
            name: "Four Points by Sheraton",
            image: four,
            price: "₹7,500/night",
            location: "Vijayawada, Andhra Pradesh",
        },
         {
            name: "The Gateway Hotel",
            image: grtgrand,
            price: "₹8,500/night",
            location: "Visakhapatnam, Andhra Pradesh",
        },
        {
            name: "Haritha Hill Resort",
            image: resort,
            price: "₹9,000/night",
            location: "Araku Valley, Andhra Pradesh",
        },
        {
            name: "Hotel Daspalla",
            image: leela,
            price: "₹7,500/night",
            location: "Vijayawada, Andhra Pradesh",
        },
    ];

    return (
        <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "60px 0" }}>
            <Container>
                <h2 className="text-center mb-5">Top Hotels in Andhra Pradesh</h2>
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

export default AndhraHotels;