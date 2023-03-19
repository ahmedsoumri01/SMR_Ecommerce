import React from "react";
import Slider from "../components/Slider";
import CategoriesNav from "../components/CategoriesNav";
import BoxDescrip from "../components/BoxDescrip";
import ProductSlider from "../components/ProductSlider";
export default function Home() {
  return (
    <div className="container">
      <div className="slidersection">
        <div>
          <CategoriesNav />
        </div>
        <Slider />
      </div>
      <ProductSlider />
      <div className="" style={{ backgroundColor: "yellow", height: "90px" }}>
        <h2>brands</h2>
      </div>
      <div className="boxDescripHome">
        <BoxDescrip />
        <BoxDescrip />
        <BoxDescrip />
        <BoxDescrip />
      </div>
    </div>
  );
}
