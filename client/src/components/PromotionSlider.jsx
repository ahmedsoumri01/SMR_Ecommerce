import ProductGrid from "./ProductGrid";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PromotionSlider() {
  const [productsData, setproductsData] = useState([]);
  const getProductsData = () => {
    let url = "http://localhost:5000/products?category=";

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
