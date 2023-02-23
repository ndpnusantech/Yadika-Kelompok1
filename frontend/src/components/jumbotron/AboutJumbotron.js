import React from "react";

const AboutJumbotron = () => {
  const styleContent = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('./images/poster/wide-bg.png')`,
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
  return (
    <div className="content-jumbotron d-flex" style={styleContent}>
      <img src="./images/poster/movie2.jpeg" alt="" style={imgStyle} />
      <div className="mt-5" style={{ width: "600px", marginLeft: "100px" }}>
        <h1 className="fw-bold">ANT-MANT WASP QUANTUMANIA</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <button
          className="btn text-white px-3 py-2"
          style={{ border: "1px white solid" }}
        >
          Book Now
        </button>
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
