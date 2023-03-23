import React from "react";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import CardMovie from "../components/ListMovie/CardMovie";
import { dataMovie } from "../data/dataMovie";

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
          {dataMovie.map((data) => (
            <CardMovie id={data.id} poster={data.poster} title={data.title} />
          ))}
        </div>
      </center>
      <Footer />
    </div>
  );
};

export default UpComing;
