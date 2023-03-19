import React from "react";
import { Link } from "react-router-dom";
export default function CategoriesNav() {
  return (
    <div className="CategoriesNav">
      <ul>
        <li>
          <Link to={"/"}>
            <i class="fas fa-home"></i>home
          </Link>
        </li>
        <li>
          <Link to={"/products?category=smartphone"}>
            <i class="fas fa-mobile-alt"></i>smartphone
          </Link>
        </li>
        <li>
          <Link to={"/products?category=pc-portable"}>
            <i class="fas fa-laptop"></i>pc portable
          </Link>
        </li>
        <li>
          <Link to={"/products?category=accessoire"}>
            <i class="fas fa-headphones"></i>accessoire
          </Link>
        </li>
      </ul>
    </div>
  );
}
