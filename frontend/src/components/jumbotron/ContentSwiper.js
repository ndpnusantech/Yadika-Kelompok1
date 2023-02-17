import React from "react";

const ContentSwiper = (props) => {
  const styleContent = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('${props.imgUrl}')`,
    backgroundPosition: "center",
    color: "white",
    padding: "100px 150px",
  };

  return (
    <div className="content-jumbotron" style={styleContent}>
      <div className="w-50 mt-5">
        <h1 className="fw-bold">{props.title}</h1>
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
      </div>
    </div>
  );
};

export default ContentSwiper;
