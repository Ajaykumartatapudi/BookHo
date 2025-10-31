// GuideLines.js
import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GuideLines = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxHeight: "85vh",
          overflowY: "auto",
        }}
      >
        <h1 className="fw-bold text-center mb-3" style={{ color: "#0d6efd" }}>Content Guidelines</h1>
        <p className="text-center text-muted">Last updated: 13 February 2024</p>

        <p>
          We know our traveller community values reviews and content created by
          other travellers and our partners. That’s why it is important to us,
          and to our travellers, that content on our site and app is truthful,
          helpful and safe.
        </p>
        <p>
          Any content that you and other users submit or otherwise contribute,
          including reviews, photos, comments and listings must comply with
          these guidelines, so we encourage you to read them carefully. These
          guidelines are part of our broader policies and terms, including our
          Terms of Service and Privacy Statement, which set out in more detail
          the terms on which you grant us a license to use any submitted
          content.
        </p>
        <p>
          These guidelines are updated from time to time and the last date of
          revisions is stated at the top of this page.
        </p>

        <h3 className="fw-bold mt-4">Reviews</h3>
        <h5 className="fw-semibold mt-3">Overview</h5>
        <p>
          We understand the importance of trusted reviews to our travellers.
          Reviews that you submit to our site should be truthful, contain
          relevant information reflecting your actual experience, and follow
          these content guidelines.
        </p>
        <p>
          We moderate all reviews submitted to us, and we take reasonable steps
          to ensure that only those who have booked or provided a travel
          service, such as a flight, stay, car rental or activity, can post a
          review of their experience. We publish and display all reviews (both
          positive and negative), as long as they comply with these guidelines.
        </p>
        <p>
          Any reviews not submitted to us and verified directly by us are
          clearly labelled. In some cases, you may be able to submit feedback in
          real time – this means that you will have the option to provide
          immediate feedback on your hotel, flight, car hire or any activities
          booked through our site or app.
        </p>

        <h5 className="fw-semibold mt-3">Moderation of reviews</h5>
        <p>
          We use automation tools to moderate reviews submitted by travellers
          and identify content that is not in compliance with these guidelines.
          In some instances where these tools have identified potential
          violations, the content will be sent to human moderators for further
          manual review. Any reviews that are found to violate these guidelines
          will not be published on our site or app.
        </p>

        <h5 className="fw-semibold mt-3">Eligibility and removal of reviews</h5>
        <p>
          Reviews must be submitted within six months of your stay, car rental
          or activity. You may not review a property that you own, manage, or
          are otherwise associated with, and your review must relate to a real
          experience.
        </p>

        <h5 className="fw-semibold mt-3">Removal of reviews</h5>
        <p>
          We may reject or remove reviews that contain personal data about
          others, are fake, offensive, unlawful, or contain prohibited content.
          We do not remove reviews simply because they contain negative content.
        </p>

        <h5 className="fw-semibold mt-3">Reviews of travel services</h5>
        <p>
          Travellers can review accommodation, car rentals, and local activities
          through invitations after booking. We may offer incentives to complete
          reviews, but these do not depend on whether the review is positive or
          negative.
        </p>

        <h3 className="fw-bold mt-4">General Content Guidelines</h3>
        <h5 className="fw-semibold mt-3">Prohibited Content</h5>
        <p>
          We do not allow misleading, harmful, or offensive content. Content
          cannot include:
        </p>
        <ul>
          <li>Advertising or unrelated promotional material</li>
          <li>Unlawful, defamatory, or copyrighted content</li>
          <li>Profanity or adult content</li>
          <li>
            Personal information such as phone numbers, addresses, or emails
          </li>
          <li>Plagiarized material or quoted content from other sources</li>
        </ul>

        <h5 className="fw-semibold mt-3">Guidance on creating content</h5>
        <ul>
          <li>Be honest, informative, and focus on your real experience.</li>
          <li>Use correct grammar and spelling.</li>
          <li>Do not copy content from other sites.</li>
          <li>
            Contact customer support for issues rather than using reviews to
            complain.
          </li>
        </ul>

        <h5 className="fw-semibold mt-3">Photo submission guidance</h5>
        <ul>
          <li>Images must be in BMP, PNG, GIF, or JPEG format.</li>
          <li>File size must be 5 MB or less.</li>
          <li>Minimum dimensions: 60x60 pixels.</li>
          <li>No logos, branding, or promotional content.</li>
        </ul>

        <h5 className="fw-semibold mt-3">Reporting Content</h5>
        <p>
          If you believe content posted on our site might be illegal or breach
          these guidelines, contact Customer Support or use the “report review”
          flag next to the review.
        </p>
      </Container>
    </div>
  );
};

export default GuideLines;
