import React from "react";
import { Link } from "react-router-dom";
import thumbs from "../Images/thumbs.png"; // ✅ Import your thumbs image

const BookingSuccess = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="text-success fw-bold">🎉 Booking Successful!</h2>
      <p className="text-muted mb-4">
        Your hotel has been booked successfully. Enjoy your stay!
      </p>

      {/* ✅ Image section */}
      <div className="d-flex justify-content-center">
        <img
          src={thumbs}
          alt="Booking Success"
          className="success-img"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ✅ Back button */}
      <Link to="/" className="btn btn-primary mt-4">
        Back to Dashboard
      </Link>

      {/* ✅ Styling */}
      <style>{`
        .success-img {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          margin-top: 20px;
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
