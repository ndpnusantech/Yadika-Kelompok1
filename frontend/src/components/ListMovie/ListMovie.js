import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./listMovie.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardMovie from "./CardMovie";
import axios from "axios";

const ListMovie = (props) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const response = await axios.get("http://localhost:4000/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
        {movies.map((data) => (
          <SwiperSlide id={data.id}>
            <CardMovie
              id={data.id}
              poster={data.poster_url}
              title={data.title}
              price={data.normal_price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListMovie;
