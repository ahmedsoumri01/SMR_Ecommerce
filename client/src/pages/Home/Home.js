import React from "react";
import Slider from "../../components/Slider";
import CategoriesNav from "../../components/CategoriesNav";
import Brandssection from "../../components/Brandssection";
import GridGalleryHome from "../../components/GridGallery";
import FeatureBox from "../../components/FeatureBox";
import PromotionSlider from "../../components/PromotionSlider";
import "../../styles/Home.css";
export default function Home() {
  return (
    <div className="container">
      <div className="slidersection">
        <div>
          <CategoriesNav />
        </div>
        <Slider />
      </div>
      <GridGalleryHome />

      <Brandssection />
      <div className="prometion-gallery">
        <h2>special promotion </h2>
        <PromotionSlider />
      </div>
      <div className="fetureBoxSection">
        <FeatureBox
          icon={<i class="fab fa-cc-mastercard"></i>}
          title="Secure Payment"
        />
        <FeatureBox icon={<i class="fas fa-sync"></i>} title="90 Days Return" />
        <FeatureBox
          icon={<i class="fas fa-truck"></i>}
          title="Worldwide Delivery"
        />
        <FeatureBox
          icon={<i class="fas fa-comments"></i>}
          title="24/7 Support"
        />
      </div>
    </div>
  );
}
