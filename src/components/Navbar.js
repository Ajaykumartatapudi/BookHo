// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaHeadset,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import logo2 from "../Images/logo2.png"; // ✅ change if your logo name is different

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
      style={{
        minHeight: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="container-fluid">
        {/* ✅ Brand logo + text */}
        <NavLink
          className="navbar-brand fw-bold d-flex align-items-center brand-text logo-anim"
          to="/"
        >
          <img
            src={logo2}
            alt="BookHo Logo"
            className="logo-img"
          />
          <span className="brand-name">BookHo.com</span>
        </NavLink>

        {/* Mobile toggle */}
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

        {/* Nav menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ gap: "25px" }}
          >
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center fw-bold"
                to="/"
              >
                <FaHome className="me-2" /> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center fw-bold"
                to="/about"
              >
                <FaInfoCircle className="me-2" /> About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link d-flex align-items-center fw-bold"
                to="/support"
              >
                <FaHeadset className="me-2" /> Support
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle d-flex align-items-center fw-bold btn btn-link"
                id="signinDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaSignInAlt className="me-2" /> Sign In
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end shadow-sm"
                aria-labelledby="signinDropdown"
              >
                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="/signin"
                  >
                    <FaSignInAlt className="me-2" /> Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to="/signup"
                  >
                    <FaUserPlus className="me-2" /> Sign Up
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ✅ Brand section styling */
        .logo-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 10px;
          animation: fadeIn 1s ease-in-out;
        }

        .brand-name {
          font-family: 'Dancing Script', cursive;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #0ba4eb;
          font-size: clamp(22px, 5vw, 38px);
          text-decoration: none;
          background: linear-gradient(90deg, #0ba4eb, #007bff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        /* ✅ Nav link hover styles */
        .nav-link {
          color: #000 !important;
          transition: color 0.3s ease;
          font-weight: 600 !important;
          text-decoration: none !important;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #007bff !important;
        }

        .dropdown-item:hover {
          background-color: #007bff !important;
          color: #fff !important;
        }

        .btn-link {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 767px) {
          .brand-name {
            font-size: 26px !important;
          }
          .logo-img {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


// // src/components/Navbar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaHeadset,
//   FaSignInAlt,
//   FaUserPlus,
// } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
//       style={{
//         minHeight: "80px",
//         paddingLeft: "20px",
//         paddingRight: "20px",
//       }}
//     >
//       <div className="container-fluid">
//         {/* ✅ Responsive brand text only (no logo) */}
//         <NavLink
//           className="navbar-brand fw-bold d-flex align-items-center brand-text logo-anim"
//           to="/"
//         >
//           BookHo.com
//         </NavLink>

//         {/* Mobile toggle button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//           aria-controls="navMenu"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible menu */}
//         <div className="collapse navbar-collapse" id="navMenu">
//           <ul
//             className="navbar-nav ms-auto mb-2 mb-lg-0"
//             style={{ gap: "25px" }}
//           >
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link d-flex align-items-center fw-bold"
//                 to="/"
//               >
//                 <FaHome className="me-2" /> Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 className="nav-link d-flex align-items-center fw-bold"
//                 to="/about"
//               >
//                 <FaInfoCircle className="me-2" /> About
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 className="nav-link d-flex align-items-center fw-bold"
//                 to="/support"
//               >
//                 <FaHeadset className="me-2" /> Support
//               </NavLink>
//             </li>

//             <li className="nav-item dropdown">
//               <button
//                 className="nav-link dropdown-toggle d-flex align-items-center fw-bold btn btn-link"
//                 id="signinDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <FaSignInAlt className="me-2" /> Sign In
//               </button>

//               <ul
//                 className="dropdown-menu dropdown-menu-end shadow-sm"
//                 aria-labelledby="signinDropdown"
//               >
//                 <li>
//                   <NavLink
//                     className="dropdown-item d-flex align-items-center"
//                     to="/signin"
//                   >
//                     <FaSignInAlt className="me-2" /> Sign In
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="dropdown-item d-flex align-items-center"
//                     to="/signup"
//                   >
//                     <FaUserPlus className="me-2" /> Sign Up
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Inline CSS */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-8px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* ✅ Responsive brand styling */
//         .brand-text {
//           text-decoration: none;
//           color: #0ba4eb !important;
//           font-family: 'Dancing Script', cursive;
//           letter-spacing: 0.5px;
//           font-weight: 600;
//           opacity: 0;
//           animation: fadeIn 1.2s ease-in-out forwards;
//           font-size: clamp(24px, 5vw, 40px); /* 👈 responsive size */
//         }

//         .nav-link {
//           color: #000 !important;
//           transition: color 0.3s ease;
//           font-weight: 600 !important;
//           text-decoration: none !important;
//         }

//         .nav-link:hover,
//         .nav-link.active {
//           color: #007bff !important;
//         }

//         .dropdown-item:hover {
//           background-color: #007bff !important;
//           color: #fff !important;
//         }

//         .btn-link {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-weight: 600;
//         }

//         @media (max-width: 767px) {
//           .navbar-brand {
//             font-size: 24px !important;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

