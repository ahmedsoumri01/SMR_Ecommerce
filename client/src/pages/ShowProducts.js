import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../styles/ShowProducts.css";
export default function ShowProducts() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const queryParameters = new URLSearchParams(window.location.search);
  const category = queryParameters.get("category");
  console.log("category", category);
  const searchFunc = (e) => {
    /*  e.preventDefault();
    axios
      .get(`http://localhost:5000/products?productName=${searchQuery}`)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error)); */
  };
  const getProductsData = () => {
    let url = "http://localhost:5000/products?category=" + category;

    axios
      .get(url)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <div className="searchBar">
        <form onSubmit={searchFunc}>
          <input
            type="text"
            placeholder="Show Products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button>search</button>
        </form>
      </div>
      <div className="productsAndFilter">
        <div className="filter">
          <h3>Filter</h3>
        </div>
        <div className="productsSection">
          <h3>Products</h3>
          <div className="productGrid">
            {productsData.map((product) => (
              <ProductGrid
                key={product._id}
                productId={product._id}
                productImage={product.productImage}
                productName={product.productName}
                productPrice={product.productPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
