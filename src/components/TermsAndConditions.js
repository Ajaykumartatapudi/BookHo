import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "userResponsibilities", title: "2. User Responsibilities" },
    { id: "bookingsAndPayments", title: "3. Bookings and Payments" },
    { id: "cancellations", title: "4. Cancellations and Refunds" },
    { id: "intellectualProperty", title: "5. Intellectual Property" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "changesToTerms", title: "7. Changes to Terms" },
    { id: "contactUs", title: "8. Contact Us" },
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
            <h5 className="fw-bold mb-3 text-dark text-center">
              Terms Navigation
            </h5>
            <div className="accordion" id="termsAccordion">
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
                    data-bs-parent="#termsAccordion"
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
            <h2 className="fw-bold mb-4">Terms and Conditions</h2>

            <section id="introduction" className="mb-5">
              <h4>1. Introduction</h4>
              <p>
                Welcome to BookHo.com. By accessing or using our website and
                services, you agree to comply with and be bound by these Terms
                and Conditions. Please read them carefully before using our
                platform.
              </p>
            </section>

            <section id="userResponsibilities" className="mb-5">
              <h4>2. User Responsibilities</h4>
              <p>
                Users are expected to provide accurate information when creating
                an account or making a booking. Misuse of the website, including
                fraudulent activities or false reviews, is strictly prohibited.
              </p>
            </section>

            <section id="bookingsAndPayments" className="mb-5">
              <h4>3. Bookings and Payments</h4>
              <p>
                All bookings made through our platform are subject to
                availability. Payment must be made in full at the time of
                booking. BookHo.com is not responsible for any payment failures
                due to third-party payment gateways.
              </p>
            </section>

            <section id="cancellations" className="mb-5">
              <h4>4. Cancellations and Refunds</h4>
              <p>
                Cancellation policies vary by property and will be clearly
                stated during booking. Refunds, if applicable, are processed
                based on the property’s terms.
              </p>
            </section>

            <section id="intellectualProperty" className="mb-5">
              <h4>5. Intellectual Property</h4>
              <p>
                All content on BookHo.com, including text, graphics, and logos,
                is the property of BookHo.com and protected by copyright and
                intellectual property laws.
              </p>
            </section>

            <section id="liability" className="mb-5">
              <h4>6. Limitation of Liability</h4>
              <p>
                BookHo.com is not liable for indirect, incidental, or
                consequential damages arising from the use of our platform or
                services.
              </p>
            </section>

            <section id="changesToTerms" className="mb-5">
              <h4>7. Changes to Terms</h4>
              <p>
                We may update these Terms from time to time. Any changes will be
                reflected on this page with an updated revision date.
              </p>
            </section>

            <section id="contactUs" className="mb-5">
              <h4>8. Contact Us</h4>
              <p>
                If you have questions about these Terms, please contact our
                support team via the Contact page.
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

export default TermsAndConditions;
