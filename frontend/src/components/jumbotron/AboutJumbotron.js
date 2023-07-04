import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutJumbotron = () => {
  // interacting with API
  const [title, setTitle] = useState();
  const [sinopsis, setSinopsis] = useState();
  const [poster, setPoster] = useState();
  const [bgPoster, setBgPoster] = useState();
  const { id } = useParams();
  console.log(bgPoster);
  // styling
  const styleContent = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('${bgPoster}')`,
    backgroundPosition: "0 -50px",
    color: "white",
    padding: "150px",
    marginTop: "-90px",
  };

  const imgStyle = {
    width: "250px",
    height: "350px",
    borderRadius: "10px",
  };

  useEffect(() => {
    getMovieById();
  });

  const getMovieById = async () => {
    try {
      const movie = await axios.get(`http://localhost:4000/movies/${id}`);
      setTitle(movie.data.title);
      setSinopsis(movie.data.sinopsis);
      setPoster(movie.data.poster_url);
      setBgPoster(movie.data.bg_poster_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content-jumbotron d-flex" style={styleContent}>
      <img src={poster} alt="" style={imgStyle} className="animate-to-right" />
      <div
        className="mt-5 animate-to-left"
        style={{ width: "600px", marginLeft: "100px" }}
      >
        <h1 className="fw-bold">{title}</h1>
        <p>{sinopsis}</p>
        <Link to={"/audi"}>
          <button
            className="btn text-white px-3 py-2"
            style={{ border: "1px white solid" }}
          >
            Book Now
          </button>
        </Link>

        <button
          className="btn text-white px-3 py-2 bg-transparent ms-3"
          style={{ border: "1px white solid" }}
        >
          <img
            src="./images/icon/play-button.png"
            alt=""
            style={{ width: "25px", marginRight: "10px" }}
          />
          Trailer
        </button>
      </div>
    </div>
  );
};

export default AboutJumbotron;
