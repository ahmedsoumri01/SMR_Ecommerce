import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/fa25c9349422fb8e27836e9f4bce56a6b8418e5c_Web-banner-nova-10SE-Prebooking.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/9cdd041eb9971f28c35cd65d65bbb5d0085a976d_oppo-reno8-t-R%C3%A9cup%C3%A9r%C3%A9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71IA+MeLP2L._AC_UF1000,1000_QL80_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/113c73ac70db84c19f5fa49126f6f1a7bb9ef976_TCL-P635-SITE.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
