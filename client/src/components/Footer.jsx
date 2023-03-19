import React from "react";

export default function Footer() {
  return (
    <div className="footerSection">
      <div>
        <h1>shop online</h1>
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
          <i class="fas fa-phone"></i>
          <span>+216 95941469</span>
        </p>
        <p>
          <i class="far fa-envelope"></i>
          <span>ahmed@gmail.com</span>
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i>
          <span>tunisia, jendouba</span>
        </p>
      </div>
    </div>
  );
}
