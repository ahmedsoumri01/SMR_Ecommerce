import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScrenAnimation from "../components/LoadingScrenAnimation";
import "../styles/ShowProducts.css";
export default function ShowProducts() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(false);
  const [minPrix, setMinPrix] = useState("");
  const [maxPrix, setMaxPrix] = useState("");

  const queryParameters = new URLSearchParams(window.location.search);
  const category = queryParameters.get("category");
  const cancelFilter = (e) => {
    setFilter(false);
    e.preventDefault();
    getProductsData();
    setMaxPrix("");
    setMinPrix("");
  };
  const filterFunc = (e) => {
    e.preventDefault();
    if (minPrix === "" || maxPrix === "") {
      alert("Please enter a value");
      return;
    }

    if (minPrix && maxPrix) {
      const filteredProducts = productsData.filter((product) => {
        return (
          product.productPrice >= minPrix && product.productPrice <= maxPrix
        );
      });
      setproductsData(filteredProducts);
      setFilter(true);
    }
  };
  const searchFunc = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:5000/products?productName=${searchQuery}&category=` +
          category
      )
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
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
        <div>
          <div className="filter">
            <h4>Filter</h4>
            <div className="filterPrix">
              <p>Prix</p>
              <input
                type="number"
                placeholder="min"
                min="0"
                max="7000"
                onChange={(e) => setMinPrix(e.target.value)}
                value={minPrix}
              />
              <input
                type="number"
                placeholder="max"
                min="0"
                max="7000"
                onChange={(e) => setMaxPrix(e.target.value)}
                value={maxPrix}
              />
              {filter ? (
                <button
                  style={{ background: "#bc0000c7" }}
                  onClick={cancelFilter}
                >
                  cancel filter
                </button>
              ) : (
                <button type="button" onClick={filterFunc}>
                  Filter
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="productsSection">
          <div className="pageslinks">
            <Link to={"/"}>Home </Link>
            <i class="fas fa-angle-double-right"></i>
            <h4> {category}</h4>
          </div>

          {productsData.length === 0 && (
            <div style={{ height: "60vh" }}>
              {/*  <h1 style={{ textAlign: "center" }}>No Products yet</h1> */}
              <LoadingScrenAnimation />
            </div>
          )}
          <div className="productGrid">
            {productsData.map((product) => (
              <ProductGrid
                key={product._id}
                productId={product._id}
                productImage={product.productImage}
                productName={product.productName.slice(0, 20)}
                productPrice={product.productPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
