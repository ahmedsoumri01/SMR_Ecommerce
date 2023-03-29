import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footerSection">
      <div>
        <h1>SMR-Store</h1>
        <p>
          Welcome to SMR store, where we offer the latest and greatest in
          technology to enhance your digital lifestyle! Our collection of
          smartphones, laptops, and accessories is carefully curated to provide
          you with the best products at competitive prices.
        </p>
      </div>
      <div className="footerContact">
        <h2>contact us</h2>
        <p>
          <i className="fas fa-phone"></i>
          <span>+216 95941469</span>
        </p>
        <p>
          <i className="far fa-envelope"></i>
          <span>ahmed@gmail.com</span>
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i>
          <span>Aindrahem, jendouba</span>
        </p>
        <div className="footerSocialContact">
          <Link to={"https://www.facebook.com"}>
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </Link>

          <Link to="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </Link>

          <Link to="https://www.whatsapp">
            <i className="fab fa-whatsapp"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
