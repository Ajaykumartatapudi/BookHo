import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HotelContextData } from "../context/HotelContext";

const Cart = () => {
  const { selectedHotel } = useContext(HotelContextData);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/success");
  };

  if (!selectedHotel) {
    return (
      <div className="text-center mt-5">
        <h3>No hotel selected yet.</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/dashboard")}>
          Go Back to Hotels
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">🛒 Your Booking Cart</h2>
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <img src={selectedHotel.img} className="card-img-top" alt={selectedHotel.name} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{selectedHotel.name}</h5>
          <p>{selectedHotel.location}</p>
          <p className="fw-semibold">₹{selectedHotel.price}/night</p>
          <button className="btn btn-success" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
