import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  // States for each payment type
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [aadhar, setAadhar] = useState("");

  const handlePaymentSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/success");
    }, 1500);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold mb-4">💰 Complete Your Payment</h2>
      <p className="text-muted">Select your preferred payment method below</p>

      {!loading && (
        <>
          {/* Payment Method Options */}
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <button
              className={`btn ${selectedMethod === "card" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSelectedMethod("card")}
            >
              💳 Card
            </button>
            <button
              className={`btn ${selectedMethod === "upi" ? "btn-success" : "btn-outline-success"}`}
              onClick={() => setSelectedMethod("upi")}
            >
              📱 UPI
            </button>
            <button
              className={`btn ${selectedMethod === "cash" ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => setSelectedMethod("cash")}
            >
              💵 Cash on Delivery
            </button>
          </div>

          {/* CARD Payment Form */}
          {selectedMethod === "card" && (
            <div className="payment-box">
              <h5 className="fw-bold">💳 Card Payment</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Card Holder Name"
                value={cardDetails.name}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, name: e.target.value })
                }
              />
              <div className="d-flex gap-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, expiry: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cvv: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handlePaymentSuccess}
                className="btn btn-primary px-4"
              >
                Pay ₹1,500 via Card
              </button>
            </div>
          )}

          {/* UPI Payment Form */}
          {selectedMethod === "upi" && (
            <div className="payment-box">
              <h5 className="fw-bold">📱 UPI Payment</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter UPI ID (e.g. name@upi)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button
                onClick={handlePaymentSuccess}
                className="btn btn-success px-4"
              >
                Pay ₹1,500 via UPI
              </button>
            </div>
          )}

          {/* CASH Payment Form */}
          {selectedMethod === "cash" && (
            <div className="payment-box">
              <h5 className="fw-bold">💵 Cash on Delivery</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Aadhaar Number"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
              />
              <p className="text-muted">
                Your payment will be collected at check-in.
              </p>
              <button
                onClick={handlePaymentSuccess}
                className="btn btn-warning px-4"
              >
                Confirm Cash Booking
              </button>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-4">
            <Link to="/dashboard" className="btn btn-dark px-4">
              Back to Dashboard
            </Link>
          </div>
        </>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="mt-5">
          <div
            className="spinner-border text-success"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Processing...</span>
          </div>
          <p className="mt-3 fw-bold text-muted">Processing your payment...</p>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .payment-box {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 25px;
          max-width: 400px;
          margin: 20px auto;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: 0.3s;
        }
        .payment-box:hover {
          transform: scale(1.02);
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
