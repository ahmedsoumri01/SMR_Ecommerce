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
          description="Shop with confidence knowing your payment information is safe and secure."
        />
        <FeatureBox
          icon={<i class="fas fa-sync"></i>}
          title="90 Days Return"
          description="If you're not satisfied with your purchase, we offer a 90-day hassle-free return policy."
        />
        <FeatureBox
          icon={<i class="fas fa-truck"></i>}
          title="Worldwide Delivery"
          description="We ship to almost every corner of the world, so you can enjoy our products no matter where you are."
        />
        <FeatureBox
          icon={<i class="fas fa-comments"></i>}
          title="24/7 Support"
          description="Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have."
        />
      </div>
    </div>
  );
}
