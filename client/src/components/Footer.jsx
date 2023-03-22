import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footerSection">
      <div>
        <h1>SMR-Store</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
            <i class="fab fa-facebook"></i>
          </Link>
          <Link to="https://www.twitter.com">
            <i class="fab fa-twitter"></i>
          </Link>

          <Link to="https://www.instagram.com">
            <i class="fab fa-instagram"></i>
          </Link>

          <Link to="https://www.whatsapp">
            <i class="fab fa-whatsapp"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
