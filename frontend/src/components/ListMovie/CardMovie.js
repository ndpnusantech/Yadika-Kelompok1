import React from "react";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const linearGradient =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(12, 15, 23, 1) )";
  const bgPoster = {
    backgroundImage: `${linearGradient}, url(${props.poster})`,
  };
  return (
    <div className="card-movie" id={props.id}>
      <Link to={`/about/${props.id}`}>
        <div className="img-poster" style={bgPoster}>
          <h6 style={{ width: "250px", paddingTop: "320px" }}>{props.title}</h6>
          <h6 style={{ color: "#D18616", fontWeight: "bold" }}>
            {`RP. ${props.price}.000`}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
