import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
import specialoffreImg from "../images/specialoffre.png";
export default function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    category: "",
    productDescription: "",
    productImage: "",
    remise: "",
  });
  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProductData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
  }, [id]);
  console.log(productData);
  return (
    <div className="ProductDetails">
      <div className="offrePromotion">
        <img src={specialoffreImg} alt="specialoffre" style={{ bottom: "0" }} />
      </div>
      <div className="productInfo">
        <div className="productImage">
          <img src={productData.productImage} alt="productImage" />
        </div>
        <div className="productName">
          <h2>{productData.productName}</h2>
          <h5>
            category : <span>{productData.category}</span>
          </h5>
          <div>
            <h3>
              {productData.remise ? (
                <s>
                  <span>{productData.productPrice} DT</span>
                </s>
              ) : (
                <span>{productData.productPrice} DT</span>
              )}
              {productData.remise ? (
                <span style={{ color: "blue", margin: "0 10px" }}>
                  {productData.productPrice - productData.remise} DT
                </span>
              ) : (
                ""
              )}
            </h3>

            <p>
              disponibilite :
              {productData.disponibilte ? (
                <span style={{ color: "green" }}>en stock</span>
              ) : (
                <span style={{ color: "red" }}>horstock</span>
              )}
            </p>
          </div>
          <button id="panierButton">
            ajouter au panier <i class="fas fa-cart-arrow-down"></i>
          </button>
        </div>
      </div>
      <div className="productDescription">
        <span>Description : </span>
        <p>{productData.productDescription}</p>
      </div>
    </div>
  );
}
