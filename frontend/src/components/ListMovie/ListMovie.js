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
import { Link } from "react-router-dom";

const ListMovie = (props) => {
  return (
    <>
      <h2
        className="text-start text-white fw-bold"
        style={{ margin: "200px 0 20px 60px", letterSpacing: "2px" }}
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
            <div id={data.id}>
              <Link to={"/about"}>
                <img src={`${data.poster}`} alt="" />
                <h5>{data.title}</h5>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListMovie;
