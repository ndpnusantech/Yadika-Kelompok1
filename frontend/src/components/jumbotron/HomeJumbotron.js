import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from "swiper";
import ContentSwiper from "./ContentSwiper";

const HomeJumbotron = () => {
  return (  
    <div style={{ marginTop: "-90px" }}>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
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
    </div>
  );
};

export default HomeJumbotron;
