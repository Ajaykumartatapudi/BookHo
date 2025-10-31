import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light py-5">
        <div className="container">
          <div className="row text-center text-md-start justify-content-between align-items-start">
            {/* Top Destinations */}
            <div className="col-12 col-sm-6 col-md-3 mb-4 footer-col">
              <h5 className="footer-heading">Top Destinations</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/hotels/MumbaiHotels" className="footer-link">
                    Hotels in Mumbai
                  </Link>
                </li>
                <li>
                  <Link to="/hotels/AndhraHotels" className="footer-link">
                    Hotels in Andhra Pradesh
                  </Link>
                </li>
                <li>
                  <Link to="/hotels/TelanganaHotels" className="footer-link">
                    Hotels in Telangana
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & FAQs */}
            <div className="col-12 col-sm-6 col-md-3 mb-4 footer-col">
              <h5 className="footer-heading">Support & FAQs</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/support" className="footer-link">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Information */}
            <div className="col-12 col-sm-6 col-md-3 mb-4 footer-col">
              <h5 className="footer-heading">Other Information</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/guidelines" className="footer-link">
                    Content Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="col-12 col-sm-6 col-md-3 mb-4 footer-col">
              <h5 className="footer-heading">Policies</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/terms" className="footer-link">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          {/* Copyright */}
          <div className="text-center">
            <p className="mb-0 small">
              © {new Date().getFullYear()} <strong>BookHo.com</strong> — All rights reserved.
            </p>
            <div className="mt-2">
              <Link to="/privacy" className="footer-mini-link mx-2">
                Privacy Policy
              </Link>
              |
              <Link to="/terms" className="footer-mini-link mx-2">
                Terms
              </Link>
              |
              <Link to="/guidelines" className="footer-mini-link mx-2">
                Guidelines
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: #111;
          color: #ccc;
        }

        .footer-heading {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
          display: inline-block;
        }

        .footer-link:hover {
          color: #f8d210;
          transform: translateX(4px);
        }

        .footer-mini-link {
          color: #aaa;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .footer-mini-link:hover {
          color: #f8d210;
        }

        hr {
          border-color: #444;
        }

        /* Equal spacing and center on smaller devices */
        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .footer-col {
            align-items: flex-start;
          }
        }

        @media (max-width: 576px) {
          .footer {
            text-align: center;
          }

          .footer-heading {
            margin-top: 1rem;
          }

          .footer-mini-link {
            display: inline-block;
            margin: 0.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
