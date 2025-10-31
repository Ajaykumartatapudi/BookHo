import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "dataCollection", title: "2. Information We Collect" },
    { id: "dataUsage", title: "3. How We Use Your Information" },
    { id: "dataSharing", title: "4. Data Sharing and Disclosure" },
    { id: "cookies", title: "5. Cookies and Tracking Technologies" },
    { id: "dataSecurity", title: "6. Data Security" },
    { id: "userRights", title: "7. Your Rights and Choices" },
    { id: "changesToPolicy", title: "8. Changes to This Policy" },
    { id: "contactUs", title: "9. Contact Us" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="p-3 bg-white shadow-sm rounded">
            <h5 className="fw-bold mb-3 text-dark text-center">Privacy Topics</h5>
            <div className="accordion" id="privacyAccordion">
              {sections.map((section) => (
                <div className="accordion-item" key={section.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${section.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${section.id}`}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${section.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#privacyAccordion"
                  >
                    <div className="accordion-body">
                      <button
                        className="btn btn-sm btn-outline-dark w-100"
                        onClick={() => scrollToSection(section.id)}
                      >
                        Go to section
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-9">
          <div className="bg-white shadow-sm p-4 rounded">
            <h2 className="fw-bold mb-4">Privacy Policy</h2>

            <section id="introduction" className="mb-5">
              <h4>1. Introduction</h4>
              <p>
                BookHo.com values your privacy. This Privacy Policy explains how we collect, use, 
                and protect your personal data when you visit or make use of our website and services.
              </p>
            </section>

            <section id="dataCollection" className="mb-5">
              <h4>2. Information We Collect</h4>
              <p>
                We collect personal information such as your name, email address, contact number, 
                and payment details when you make a booking or create an account. We also collect 
                non-personal data like browser type, IP address, and site usage through cookies.
              </p>
            </section>

            <section id="dataUsage" className="mb-5">
              <h4>3. How We Use Your Information</h4>
              <p>
                Your information is used to process bookings, improve user experience, send booking 
                confirmations, and offer personalized recommendations. We may also use your data for 
                analytics and marketing purposes with your consent.
              </p>
            </section>

            <section id="dataSharing" className="mb-5">
              <h4>4. Data Sharing and Disclosure</h4>
              <p>
                We only share your information with service providers involved in fulfilling your 
                bookings (e.g., hotels or car rental partners). We do not sell or rent your personal 
                data to third parties for marketing purposes.
              </p>
            </section>

            <section id="cookies" className="mb-5">
              <h4>5. Cookies and Tracking Technologies</h4>
              <p>
                We use cookies to enhance your browsing experience, remember preferences, and collect 
                statistics. You can manage or disable cookies through your browser settings.
              </p>
            </section>

            <section id="dataSecurity" className="mb-5">
              <h4>6. Data Security</h4>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                information from unauthorized access, alteration, or disclosure. However, no online 
                platform can guarantee absolute security.
              </p>
            </section>

            <section id="userRights" className="mb-5">
              <h4>7. Your Rights and Choices</h4>
              <p>
                You have the right to access, correct, or delete your personal information. You may 
                also choose to opt out of promotional communications at any time.
              </p>
            </section>

            <section id="changesToPolicy" className="mb-5">
              <h4>8. Changes to This Policy</h4>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or 
                legal requirements. Updates will be posted on this page with the revised date.
              </p>
            </section>

            <section id="contactUs" className="mb-5">
              <h4>9. Contact Us</h4>
              <p>
                For any questions or concerns about this Privacy Policy, please reach out to our 
                Customer Support team via the Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        body {
          background-color: #f8f9fa;
        }
        .accordion-button {
          font-weight: 600;
          color: #0d6efd;
        }
        .accordion-button:not(.collapsed) {
        //   background-color: #f8d210;
          color: #0d6efd;
        }
        h4 {
          color: #222;
        }
        p {
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
