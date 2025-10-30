import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbs from "../Images/thumbs.png"; // ✅ Import thumbs image

const BookingSuccess = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const navigate = useNavigate();

  const handlePaymentRedirect = (method) => {
    setSelectedMethod(method);
    // Wait a moment before redirecting
    setTimeout(() => {
      navigate("/payment", { state: { paymentMethod: method } });
    }, 500);
  };

  return (
    <div className="text-center mt-5">
      <h2 className="text-success fw-bold">🎉 Booking Successful!</h2>
      <p className="text-muted mb-4">
        Your hotel has been booked successfully. Enjoy your stay!
      </p>

      {/* ✅ Success image */}
      <div className="d-flex justify-content-center">
        <img src={thumbs} alt="Booking Success" className="success-img" />
      </div>

      {/* ✅ Payment Section */}
      <div className="payment-section mt-5">
        <h4 className="fw-bold mb-3">💳 Choose Payment Method</h4>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className={`btn payment-btn ${
              selectedMethod === "card" ? "btn-primary active" : "btn-outline-primary"
            }`}
            onClick={() => handlePaymentRedirect("card")}
          >
            Credit / Debit Card
          </button>
          <button
            className={`btn payment-btn ${
              selectedMethod === "upi" ? "btn-primary active" : "btn-outline-primary"
            }`}
            onClick={() => handlePaymentRedirect("upi")}
          >
            UPI
          </button>
          <button
            className={`btn payment-btn ${
              selectedMethod === "cod" ? "btn-primary active" : "btn-outline-primary"
            }`}
            onClick={() => handlePaymentRedirect("cod")}
          >
            Cash on Delivery
          </button>
        </div>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .success-img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          margin-top: 20px;
        }
        .success-img:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .payment-section {
          background-color: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: inline-block;
        }

        .payment-btn {
          min-width: 160px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .payment-btn.active,
        .payment-btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default BookingSuccess;
