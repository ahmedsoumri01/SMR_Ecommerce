import React from "react";

export default function ProductGrid(props) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={props.productImage} alt="product" />
      </div>
      <div className="product-name">
        <a href="#">{props.productName}</a>
      </div>
      <div className="product-price">
        {props.productPrice} <span>DT</span>
      </div>
    </div>
  );
}
