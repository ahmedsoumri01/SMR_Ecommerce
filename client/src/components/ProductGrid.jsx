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
        <Link to={"/products/" + props.productId}>{props.productName}</Link>
      </div>
      <div className="product-price">
        {props.productPrice} <span>DT</span>
        {props.remise > 0 ? (
          <span style={{ color: "red", margin: "0 7px" }}>
            {props.remise}DT
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
