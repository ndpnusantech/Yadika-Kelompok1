import React, { useEffect, useState } from "react";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import CardMovie from "../components/ListMovie/CardMovie";
import axios from "axios";

const UpComing = () => {
  const backgroundStyle = {
    height: "105vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('./images/poster/upcoming-bg.jfif')`,
    marginTop: "-90px",
    paddingTop: "200px",
    backgroundPosition: "center",
    fontFamily: '"Montserrat",sans-serif',
    color: "white",
  };

  // interact with API
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const movie = await axios.get("http://localhost:4000/movies");
      setMovies(movie.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <center>
        <div style={backgroundStyle}>
          <h1
            style={{
              width: "530px",
              fontWeight: "bold",
              letterSpacing: "2px",
              margin: "auto",
            }}
            className="animate-to-right"
          >
            See all upcoming movies
          </h1>
          <h6 style={{ marginTop: "250px" }} className="move-up-down">
            Scroll
            <i class="bi bi-mouse2-fill mx-2"></i>
            down
          </h6>
        </div>
        <div className="container d-flex justify-content-between flex-wrap mt-5">
          {movies.map((data) => {
            return (
              data.is_show === false && (
                <CardMovie
                  id={data.id}
                  poster={data.poster_url}
                  title={data.title}
                  price={data.normal_price}
                />
              )
            );
          })}
        </div>
      </center>
      <Footer />
    </div>
  );
};

export default UpComing;
