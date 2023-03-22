import ProductGrid from "./ProductGrid";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PromotionSlider() {
  const [productsData, setproductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedcategory, setSelectedCategory] = useState("");
  const [remise, SetRemise] = useState("");
  const getProductsData = () => {
    let url = "http://localhost:5000/products?category=";

    axios
      .get(url)
      .then((res) => {
        setproductsData(res.data.data);
      })
      .catch((error) => console.error(error));
  };
  const searchFunc = (e) => {
    e.preventDefault();
    /*   console.log("searchQuery", searchQuery);
      console.log(selectedcategory) */
    if (selectedcategory && selectedcategory != "") {
      axios
        .get(
          `http://localhost:5000/products?productName=${searchQuery}&category=` +
            selectedcategory
        )
        .then((res) => {
          setproductsData(res.data.data);
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .get(`http://localhost:5000/products?productName=${searchQuery}`)
        .then((res) => {
          setproductsData(res.data.data);
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="PromotionSlider">
      {productsData.map((product) => {
        if (product.remise && product.remise > 0) {
          return (
            <ProductGrid
              productId={product._id}
              productImage={product.productImage}
              productName={product.productName.slice(0, 20)}
              productPrice={product.productPrice}
              remise={product.remise}
            />
          );
        }
      })}
    </div>
  );
}
