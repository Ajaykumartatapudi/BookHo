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
import BookingForm from "./components/BookingForm";
import Cart from "./components/Cart";
import BookingSuccess from "./components/BookingSuccess";
import PaymentPage from "./components/PaymentPage";
import { HotelContext } from "./context/Hotelcontext"; // ✅ Correct import

function App() {
  return (
    <HotelContext>
      <Router>
        <Navbar />
        <main  style={{ minHeight: "85vh" }}>
          <Routes>
            {/* ✅ Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Content />
                </>
              }
            />

            {/* ✅ Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/guidelines" element={<GuideLines />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* ✅ Authentication */}
            <Route path="/signin" element={<SignIn />} />

            {/* ✅ Hotels by Region */}
            <Route path="/hotels/MumbaiHotels" element={<MumbaiHotels />} />
            <Route path="/hotels/AndhraHotels" element={<AndhraHotels />} />
            <Route path="/hotels/TelanganaHotels" element={<TelanganaHotels />} />

            {/* ✅ Booking Flow */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book-hotel" element={<BookingForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/success" element={<BookingSuccess />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HotelContext>
  );
}

export default App;
