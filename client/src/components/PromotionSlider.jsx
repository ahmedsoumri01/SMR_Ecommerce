import React, { useRef, useState } from "react";
import ProductGrid from "./ProductGrid";
export default function PromotionSlider() {
  return (
    <div className="PromotionSlider">
      <ProductGrid
        productImage="https://zaarastore.tn/wp-content/uploads/2023/03/40.jpg"
        productName="MIBRO WATCH LITE 2 BY XIAOMI"
        productPrice="100"
      />
      <ProductGrid
        productImage="https://zaarastore.tn/wp-content/uploads/2023/03/50.jpg"
        productName="MIBRO WATCH GS BY XIAOMI"
        productPrice="300"
      />
      <ProductGrid
        productImage="https://zaarastore.tn/wp-content/uploads/2023/03/25-600x600.jpg"
        productName="MIBRO WATCH BY XIAOMI"
        productPrice="150"
      />
      <ProductGrid
        productImage="https://zaarastore.tn/wp-content/uploads/2023/03/1-1.jpg"
        productName="MIBRO WATCH LITE 2 BY XIAOMI"
        productPrice="100"
      />
    </div>
  );
}
