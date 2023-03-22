import React from "react";
import { Link } from "react-router-dom";
import specialoffreImg from "../images/specialoffre.png";
export default function ProductGrid(props) {
  return (
    <div className="product">
      <div className="offrePromotion">
        <img src={specialoffreImg} alt="specialoffre" />
      </div>
      <Link to={"/products/" + props.productId}>
        <div className="product-image">
          <img src={props.productImage} alt="product" />
        </div>
      </Link>
      <div className="product-name">
        <Link to={"/products/" + props.productId}>{props.productName}</Link>
      </div>
      <div className="product-price">
        {props.remise > 0 ? (
          <s>{props.productPrice} DT</s>
        ) : (
          <span> {props.productPrice} DT</span>
        )}

        {props.remise > 0 ? (
          <span style={{ color: "red", margin: "0 7px" }}>
            {props.productPrice - props.remise}DT
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
