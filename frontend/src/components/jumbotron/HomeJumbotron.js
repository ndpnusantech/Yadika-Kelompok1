import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ContentSwiper from "./ContentSwiper";

const HomeJumbotron = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <center>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="./images/poster/movie8.png"
              title="Black Panther : Wakanda Forever"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="./images/poster/wide-bg.png"
              title="ANT-MANT WASP QUANTUMANIA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="./images/poster/movie8.png"
              title="Black Panther : Wakanda Forever"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="./images/poster/wide-bg.png"
              title="ANT-MANT WASP QUANTUMANIA"
            />
          </SwiperSlide>
        </center>
      </Swiper>
    </>
  );
};

export default HomeJumbotron;
