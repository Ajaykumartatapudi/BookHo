import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../Images/lobby.jpg";
import { HotelContextData } from "../context/Hotelcontext"; // ✅ Import Context

const SignupForm = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(HotelContextData); // ✅ Access context

  // ✅ Handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    if (!phone || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Save user data (simulate registration)
    localStorage.setItem(
      "userData",
      JSON.stringify({ phone, email, password, isLoggedIn: true })
    );

    // Update global login state
    setIsLoggedIn(true);

    alert("Signup successful!");
    navigate("/dashboard"); // ✅ redirect to dashboard
  };

  const handleSignInRedirect = () => {
    navigate("/signin");
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          {/* Left Text */}
          <div className="col-md-6 text-white d-flex flex-column justify-content-center">
            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
              Welcome to BookHo
            </h1>
            <p className="fs-5 mt-3">
              Book your stay, explore amenities, and enjoy a luxurious
              experience. Join us today and make your stay unforgettable!
            </p>
          </div>

          {/* Right Form */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                padding: "30px",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              <h2 className="text-center mb-4">Create Account</h2>
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Sign Up
                </button>
              </form>

              <p className="text-center" style={{ fontSize: "14px" }}>
                Already have an account?{" "}
                <span
                  style={{
                    color: "#0d6efd",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleSignInRedirect}
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
