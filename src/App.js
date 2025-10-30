import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import SignupForm from "./components/SignupForm";
import SupportPage from "./components/SupportPage";
import SignIn from "./components/SignIn";

import MumbaiHotels from "./components/MumbaiHotels";
import AndhraHotels from "./components/AndhraHotels";
import TelanganaHotels from "./components/TelanganaHotels";

import GuideLines from "./components/GuideLines";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import BookingSuccess from "./components/BookingSuccess";
import PaymentPage from "./components/PaymentPage"; // ✅ New import

import { HotelContext } from "./context/HotelContext";

function App() {
  return (
    <HotelContext>
      <Router>
        <Navbar />
        <main>
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Content />
                </>
              }
            />

            {/* 📄 Info Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/guidelines" element={<GuideLines />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* 🏨 Hotels */}
            <Route path="/hotels/MumbaiHotels" element={<MumbaiHotels />} />
            <Route path="/hotels/AndhraHotels" element={<AndhraHotels />} />
            <Route path="/hotels/TelanganaHotels" element={<TelanganaHotels />} />

            {/* 🛒 Booking Flow */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<BookingSuccess />} />
            <Route path="/payment" element={<PaymentPage />} /> {/* ✅ New route added */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>

      {/* ✅ Footer layout fix styles */}
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex: 1;
        }
        footer {
          background-color: #f8f9fa;
          text-align: center;
          padding: 10px 0;
          box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </HotelContext>
  );
}

export default App;
