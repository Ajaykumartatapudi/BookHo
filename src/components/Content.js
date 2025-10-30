import React from "react";

// ✅ Importing images from your assets folder
import seaview from "../Images/seaview.jpg";
import resort from "../Images/resort.jpg";
import capsule from "../Images/capsule.jpg";
import apartment from "../Images/apartment.jpg";
import farmhouse from "../Images/farmhouse.jpg";
import familyfriendly from "../Images/familyfriendly.jpg";
import novotel from "../Images/novotel.jpg";
import grtgrand from "../Images/grtgrand.jpg";
import leela from "../Images/leela.jpg";
import marriot from "../Images/Marriot.jpg";
import obero from "../Images/Obero.jpg";
import hyatt from "../Images/Hyatt.jpg";

const Content = () => {
  const discoverCards = [
    { image: seaview, title: "Sea view", text: "Wake up to ocean views and salty air." },
    { image: resort, title: "Resort", text: "All-inclusive comfort and leisure." },
    { image: capsule, title: "Capsule", text: "Compact stays for the budget traveller." },
    { image: apartment, title: "Apartment", text: "Feel at home with full amenities." },
    { image: farmhouse, title: "Farmhouse", text: "Escape to countryside comfort." },
    { image: familyfriendly, title: "Family friendly", text: "Rooms and activities for the whole family." },
  ];

  const recommendedCards = [
    { image: novotel, title: "Novotel", text: "Modern comfort in the city centre." },
    { image: grtgrand, title: "GRT Grand", text: "Luxury stays with excellent service." },
    { image: leela, title: "The Leela", text: "Iconic hospitality and premium dining." },
    { image: marriot, title: "Marriott", text: "Sophisticated comfort with global cuisine." },
    { image: obero, title: "The Oberoi", text: "Premium experience with top-notch facilities." },
    { image: hyatt, title: "Hyatt Regency", text: "Experience refined elegance and comfort." },
  ];

  return (
    <main className="py-5">
      <div className="container">
        {/* Discover Section */}
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <h2>Discover your new favourite stay</h2>
        </div>

        <div className="row g-3 mb-5">
          {discoverCards.map(({ image, title, text }, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm zoom-card">
                <img
                  src={image}
                  className="card-img-top"
                  alt={title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text small text-muted">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Section */}
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <h2>Recommended stays for you</h2>
        </div>

        <div className="row g-3">
          {recommendedCards.map(({ image, title, text }, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm zoom-card">
                <img
                  src={image}
                  className="card-img-top"
                  alt={title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text small text-muted">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fixed & Improved Zoom on hover style */}
      <style>{`
        .zoom-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .zoom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .card-title {
          font-weight: 600;
        }
      `}</style>
    </main>
  );
};

export default Content;
