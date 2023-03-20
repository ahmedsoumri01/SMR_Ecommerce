import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
export default function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    category: "",
    productDescription: "",
    productImage: "",
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
      <h1>Product Details</h1>
      <div className="productInfo">
        <div className="productImage">
          <img src={productData.productImage} alt="productImage" />
        </div>
        <div>
          <h2>{productData.productName}</h2>
          <h3>{productData.productPrice}</h3>
          <h4>{productData.category}</h4>
        </div>
      </div>
      <div className="productDescription">
        description
        <p>{productData.productDescription}</p>
      </div>
    </div>
  );
}
