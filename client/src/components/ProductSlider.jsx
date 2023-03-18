import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";

export default function ProductSlider() {
  return (
    <>
    <div className="promotionSlider">
        <div><h1>promotion</h1></div>
        
   
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu84wRMrfb5erkWyRg92A3kcILOw5l7w-8A&usqp=CAU'/></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu84wRMrfb5erkWyRg92A3kcILOw5l7w-8A&usqp=CAU'/></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu84wRMrfb5erkWyRg92A3kcILOw5l7w-8A&usqp=CAU'/></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu84wRMrfb5erkWyRg92A3kcILOw5l7w-8A&usqp=CAU'/></SwiperSlide>
        <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu84wRMrfb5erkWyRg92A3kcILOw5l7w-8A&usqp=CAU'/></SwiperSlide>
     
      </Swiper>
      </div>
    </>
  );
}
