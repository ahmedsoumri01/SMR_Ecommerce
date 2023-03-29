import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
import specialoffreImg from "../images/specialoffre.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const userId = useSelector((state) => state.userId);
  const cart = useSelector((state) => state.cart);
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    category: "",
    productDescription: "",
    productImage: "",
    remise: "",
  });
  // Dispatch actions to the Redux store
  const dispatch = useDispatch();
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
  }, []);

  const AddToCart = () => {
    const productId = id;

    console.log("cart", cart);
    if (cart.includes(productId)) {
      alert("This product is already in your cart!");
      return;
    } else {
      dispatch({ type: "ADD_TO_CART", productId });
      alert("Product added");
    }
  };

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
              ) : null}
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
          <button id="panierButton" onClick={AddToCart}>
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
