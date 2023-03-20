import React from "react";
import { Link } from "react-router-dom";
export default function ProductGrid(props) {
  return (
    <div className="product">
      <Link to={"/products/" + props.productId}>
        <div className="product-image">
          <img src={props.productImage} alt="product" />
        </div>
      </Link>
      <div className="product-name">
        <a href="#">{props.productName}</a>
      </div>
      <div className="product-price">
        {props.productPrice} <span>DT</span>
      </div>
    </div>
  );
}
