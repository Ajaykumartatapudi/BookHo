import React from 'react';
import { FaGlobe, FaStar, FaHeadset, FaSmile, FaShieldAlt } from 'react-icons/fa';

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740';

const About = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'left',
        padding: '5% 10%',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="display-3 fw-bold mb-3">Welcome to BookHo</h1>
        <p className="lead fs-4">Your Smart Hotel Booking Companion</p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Discover and book from thousands of hotels across the world — from cozy cottages to luxury resorts.
          Whether it’s a weekend getaway, business trip, or long vacation, BookHo brings you comfort and convenience
          at your fingertips. Our platform ensures a smooth booking experience, verified listings, and unbeatable prices
          that make every stay special.
        </p>

        {/* Core Features */}
        <div className="row justify-content-center" style={{ marginTop: '100px' }}>
          {[
            { title: 'Wide Selection', text: 'Thousands of hotels worldwide to choose from.', icon: <FaGlobe /> },
            { title: 'Best Prices', text: 'Get exclusive offers and unbeatable rates.', icon: <FaStar /> },
            { title: '24/7 Support', text: 'Round-the-clock assistance for your peace of mind.', icon: <FaHeadset /> },
          ].map(({ title, text, icon }, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              style={{
                animation: 'popUp 0.6s ease forwards',
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              <div className="card shadow-sm h-100 text-dark text-center p-3">
                <div className="fs-1 mb-3 text-primary">{icon}</div>
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission and Vision */}
        <div className="mt-5 bg-light text-dark p-4 rounded shadow-sm">
          <h3 className="fw-bold mb-3">Our Mission & Vision</h3>
          <p style={{ fontSize: '1.1rem' }}>
            Our mission is to make travel planning effortless for everyone. We aim to bridge travelers and hotels
            through trust, transparency, and technology. Our vision is to become the world’s most reliable and
            user-friendly hotel booking platform — where every user finds their perfect stay within seconds.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-5">
          <h3 className="fw-bold mb-3">Why Choose BookHo?</h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li><FaShieldAlt className="text-primary me-2" /> Secure payment gateway and verified hotels.</li>
            <li><FaSmile className="text-primary me-2" /> User-friendly interface designed for comfort.</li>
            <li><FaStar className="text-primary me-2" /> Transparent reviews and real traveler feedback.</li>
            <li><FaGlobe className="text-primary me-2" /> Explore stays in over 100+ destinations globally.</li>
          </ul>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-5">
          <h4 className="fw-bold mb-2">Trusted by 10,000+ Happy Travelers</h4>
          <p className="text-light">
            Join our community of satisfied customers who’ve made BookHo their go-to travel partner.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes popUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
