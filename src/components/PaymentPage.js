import React from "react";
import { useLocation, Link } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const paymentMethod = location.state?.paymentMethod || "card";

  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold mb-4">💰 Complete Your Payment</h2>
      <p className="text-muted">Selected Method: <strong>{paymentMethod.toUpperCase()}</strong></p>

      {/* ✅ Different payment UIs */}
      {paymentMethod === "card" && (
        <div className="payment-box">
          <h5 className="fw-bold">💳 Card Payment</h5>
          <input type="text" className="form-control mb-3" placeholder="Card Number" />
          <input type="text" className="form-control mb-3" placeholder="Card Holder Name" />
          <div className="d-flex gap-2 mb-3">
            <input type="text" className="form-control" placeholder="MM/YY" />
            <input type="text" className="form-control" placeholder="CVV" />
          </div>
          <button className="btn btn-success px-4">Pay Now</button>
        </div>
      )}

      {paymentMethod === "upi" && (
        <div className="payment-box">
          <h5 className="fw-bold">📱 UPI Payment</h5>
          <input type="text" className="form-control mb-3" placeholder="Enter UPI ID (e.g. name@upi)" />
          <button className="btn btn-success px-4">Pay via UPI</button>
        </div>
      )}

      {paymentMethod === "cod" && (
        <div className="payment-box">
          <h5 className="fw-bold">💵 Cash on Delivery</h5>
          <p>Your payment will be collected at check-in. Thank you!</p>
          <button className="btn btn-success px-4">Confirm Booking</button>
        </div>
      )}

      <div className="mt-4">
        <Link to="/" className="btn btn-dark px-4">Back to Home</Link>
      </div>

      {/* ✅ Style */}
      <style>{`
        .payment-box {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 25px;
          max-width: 400px;
          margin: 20px auto;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }
        input {
          border-radius: 8px;
        }
        button {
          border-radius: 25px;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;
