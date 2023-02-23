import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./listMovie.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { dataMovie } from "../../data/dataMovie";
import CardMovie from "./CardMovie";

const ListMovie = (props) => {
  return (
    <>
      <h2
        className="text-start text-white fw-bold"
        style={{
          margin: "200px 0 20px 60px",
          letterSpacing: "2px",
          paddingLeft: "10px",
          borderLeft: "4px solid #BC4E4E",
        }}
      >
        {props.titleList}
      </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={3}
        className="list-movie text-white"
      >
        {dataMovie.map((data) => (
          <SwiperSlide id={data.id}>
            <CardMovie id={data.id} poster={data.poster} title={data.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListMovie;
