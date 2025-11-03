// src/components/BookingForm.js
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HotelContextData } from "../context/HotelContext";

const BookingForm = () => {
  const { selectedHotel } = useContext(HotelContextData);
  const [formData, setFormData] = useState({
    roomNumber: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();

  if (!selectedHotel) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger">⚠️ No hotel selected!</h4>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <div className="container mt-5 booking-page">
      <div
        className="card shadow-lg border-0 overflow-hidden"
        style={{ borderRadius: "15px" }}
      >
        <div className="row g-0">
          {/* Left side — Image */}
          <div className="col-md-6">
            <img
              src={selectedHotel.img}
              alt={selectedHotel.name}
              className="img-fluid h-100"
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
          </div>

          {/* Right side — Form */}
          <div className="col-md-6 d-flex align-items-center p-4">
            <div className="w-100">
              <h3 className="text-center text-primary fw-bold mb-4">
                🏨 Book Your Stay
              </h3>
              <h5 className="fw-semibold">{selectedHotel.name}</h5>
              <p className="text-muted mb-4">{selectedHotel.location}</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Room Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="roomNumber"
                    placeholder="Enter room number"
                    value={formData.roomNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-success px-5 fw-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<style>{`
  body {
    background-color: #f8f9fa;
  }
  .booking-page {
    margin-bottom: 80px; /* space before footer */
  }
`}</style>

export default BookingForm;
