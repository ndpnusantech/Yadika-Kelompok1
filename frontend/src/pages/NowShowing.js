import React, { useEffect, useState } from "react";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import CardMovie from "../components/ListMovie/CardMovie";
import axios from "axios";

const NowShowing = () => {
  const backgroundStyle = {
    height: "105vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('./images/poster/Neon Avengers.png')`,
    marginTop: "-90px",
    paddingTop: "200px",
    backgroundPosition: "center",
    fontFamily: '"Montserrat",sans-serif',
    color: "white",
  };

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
            See all the movies that are currently showing
          </h1>
          <h6 style={{ marginTop: "250px" }} className="move-up-down">
            Scroll
            <i class="bi bi-mouse2-fill mx-2"></i>
            down
          </h6>
        </div>
        <div className="container d-flex justify-content-between flex-wrap mt-5">
          {movies.map((data) => (
            <CardMovie
              id={data.id}
              poster={data.poster_url}
              title={data.title}
            />
          ))}
        </div>
      </center>
      <Footer />
    </div>
  );
};

export default NowShowing;
