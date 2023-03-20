import React from "react";
import { Link } from "react-router-dom";
export default function CategoriesNav() {
  return (
    <div className="CategoriesNav">
      <ul>
        <li>
          <Link to={"/"}>
            <i className="fas fa-home"></i>home
          </Link>
        </li>
        <li>
          <Link to={"/products?category=smartphone"}>
            <i className="fas fa-mobile-alt"></i>smartphone
          </Link>
        </li>
        <li>
          <Link to={"/products?category=pc-portable"}>
            <i className="fas fa-laptop"></i>pc portable
          </Link>
        </li>
        <li>
          <Link to={"/products?category=accessoire"}>
            <i className="fas fa-headphones"></i>accessoire
          </Link>
        </li>
      </ul>
    </div>
  );
}
