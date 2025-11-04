import React from "react";
import { useNavigate } from "react-router-dom";
import thumbs from "../Images/thumbs.png";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2 className="text-success fw-bold">🎉 Booking Successful!</h2>
      <p className="text-muted mb-4">
        Your payment was successful, and your hotel is booked. Enjoy your stay!
      </p>

      <div className="d-flex justify-content-center">
        <img src={thumbs} alt="Booking Success" className="success-img" />
      </div>

      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>

      <style>{`
        .success-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin-top: 20px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .success-img:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default BookingSuccess;
