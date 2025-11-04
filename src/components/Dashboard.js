import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ITC from "../Images/ITC.jpg";
import Hyatt from "../Images/Hyatt.jpg";
import Marriot from "../Images/Marriot.jpg";
import Obero from "../Images/Obero.jpg";
import Grand from "../Images/Grand.jpg";
import Taj from "../Images/Taj.jpg";
import { HotelContextData } from "../context/Hotelcontext";

const hotels = [
  {
    id: 1,
    name: "ITC Kakatiya",
    location: "Hyderabad",
    price: 7000,
    img: ITC,
    rating: 4.6,
    services: ["Free Wi-Fi", "Breakfast Included", "Pool Access", "Gym"],
  },
  {
    id: 2,
    name: "Hyatt Place",
    location: "Banjara Hills",
    price: 6000,
    img: Hyatt,
    rating: 4.4,
    services: ["Gym", "Spa", "Wi-Fi", "Bar"],
  },
  {
    id: 3,
    name: "Marriott Hotel",
    location: "Begumpet",
    price: 8000,
    img: Marriot,
    rating: 4.7,
    services: ["Free Breakfast", "Parking", "Pool", "Restaurant"],
  },
  {
    id: 4,
    name: "The Oberoi",
    location: "Gachibowli",
    price: 9000,
    img: Obero,
    rating: 4.8,
    services: ["Spa", "Fine Dining", "Wi-Fi", "Airport Shuttle"],
  },
  {
    id: 5,
    name: "Grand Hotel",
    location: "Madhapur",
    price: 5000,
    img: Grand,
    rating: 4.3,
    services: ["Free Wi-Fi", "Breakfast", "Parking"],
  },
  {
    id: 6,
    name: "Taj Deccan",
    location: "Jubilee Hills",
    price: 9500,
    img: Taj,
    rating: 4.9,
    services: ["Luxury Suite", "Pool", "Spa", "Airport Pickup"],
  },
];

const Dashboard = () => {
  const { setSelectedHotel } = useContext(HotelContextData);
  const navigate = useNavigate();

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    navigate("/book-hotel"); 
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold">🏨 Choose Your Hotel</h2>
      <div className="row">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="col-md-4 mb-4">
            <div className="card shadow-sm zoom-card h-100 border-0">
              <img
                src={hotel.img}
                className="card-img-top"
                alt={hotel.name}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{hotel.name}</h5>
                <p className="text-muted mb-1">{hotel.location}</p>
                <p className="fw-semibold text-success">₹{hotel.price}/night</p>
                <p className="text-warning mb-2">⭐ {hotel.rating}</p>
                <button
                  className="btn btn-primary px-4"
                  onClick={() => handleSelectHotel(hotel)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Zoom effect style */}
      <style>{`
        .zoom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
        }
        .zoom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .card-title {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
