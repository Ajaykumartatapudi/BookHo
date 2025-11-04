import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaHeadset,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { HotelContextData } from "../context/Hotelcontext"; // ✅ Make sure this matches your file name
import logo2 from "../Images/logo2.png";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(HotelContextData);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
    navigate("/signin");
  };

  return (
    <>
      {/* ✅ Embedded Style for brand name */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

        .brand-name {
          font-family: 'Dancing Script', cursive;
          font-weight: 600;
          letter-spacing: 0.5px;
          font-size: clamp(22px, 5vw, 38px);
          background: linear-gradient(90deg, #0ba4eb, #007bff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
        <div className="container-fluid">
          {/* ✅ Brand Logo and Name */}
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img
              src={logo2}
              alt="BookHo Logo"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span className="brand-name">BookHo.com</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto" style={{ gap: "25px" }}>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/" end>
                  <FaHome className="me-2" /> Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/about">
                  <FaInfoCircle className="me-2" /> About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/support">
                  <FaHeadset className="me-2" /> Support
                </NavLink>
              </li>

              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold" to="/signin">
                      <FaSignInAlt className="me-2" /> Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold" to="/signup">
                      <FaUserPlus className="me-2" /> Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger fw-bold d-flex align-items-center"
                  >
                    <FaSignOutAlt className="me-2" /> Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
