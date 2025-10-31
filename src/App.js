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

// 🏨 Import hotel pages
import MumbaiHotels from "./components/MumbaiHotels";
import AndhraHotels from "./components/AndhraHotels";
import TelanganaHotels from "./components/TelanganaHotels";

// 📄 Import new info pages
import GuideLines from "./components/GuideLines";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
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

        {/* 📄 Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/guidelines" element={<GuideLines />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* 🏨 Hotel Pages */}
        <Route path="/hotels/MumbaiHotels" element={<MumbaiHotels />} />
        <Route path="/hotels/AndhraHotels" element={<AndhraHotels />} />
        <Route path="/hotels/TelanganaHotels" element={<TelanganaHotels />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
