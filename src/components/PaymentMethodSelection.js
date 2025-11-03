import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbs from "../Images/thumbs.png";

const PaymentMethodSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const navigate = useNavigate();

  const handlePaymentRedirect = (method) => {
    setSelectedMethod(method);
    setTimeout(() => navigate("/payment", { state: { paymentMethod: method } }), 500);
  };

  return (
    <div className="text-center mt-5">
      <h2 className="text-success fw-bold">🎉 Booking Confirmed!</h2>
      <p className="text-muted mb-4">Choose your preferred payment method below:</p>

      <img src={thumbs} alt="Success" style={{ width: "200px", borderRadius: "50%", marginBottom: "20px" }} />

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <button className="btn btn-outline-primary" onClick={() => handlePaymentRedirect("card")}>
          💳 Card
        </button>
        <button className="btn btn-outline-primary" onClick={() => handlePaymentRedirect("upi")}>
          📱 UPI
        </button>
        <button className="btn btn-outline-primary" onClick={() => handlePaymentRedirect("cod")}>
          💵 Cash
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;
