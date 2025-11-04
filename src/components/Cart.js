// src/components/Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HotelContextData } from "../context/Hotelcontext";

const Cart = () => {
  const { selectedHotel } = useContext(HotelContextData);
  const navigate = useNavigate();

  if (!selectedHotel) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger">⚠️ No booking found!</h4>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 p-4">
        <h3 className="text-center text-primary fw-bold mb-4">🛒 Your Cart</h3>

        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={selectedHotel.img}
              alt={selectedHotel.name}
              className="img-fluid rounded"
              style={{ maxHeight: "200px" }}
            />
          </div>
          <div className="col-md-7">
            <h4 className="fw-semibold">{selectedHotel.name}</h4>
            <p className="text-muted mb-1">{selectedHotel.location}</p>
            <p className="fw-semibold text-success">
              ₹{selectedHotel.price}/night
            </p>
            <ul className="list-group mb-3">
              {selectedHotel.services.map((service, i) => (
                <li key={i} className="list-group-item border-0 ps-0">
                  ✅ {service}
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary px-5 fw-semibold"
              onClick={handlePayment}
            >
              Proceed to Payment 💳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
