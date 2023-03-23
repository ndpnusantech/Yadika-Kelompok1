import React from "react";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="option container d-flex justify-content-between"
    >
      <div className=" d-flex flex-column">
        <Link to={"/upcoming"}>
          <button
            className="btn text-white text-start fs-3 fw-bold ps-5"
            style={{
              backgroundImage: `url('./images/poster/nowShowingBg.png')`,
            }}
          >
            UP COMING
          </button>
        </Link>

        <button
          className="btn text-white mt-5 text-start fs-3 fw-bold ps-5"
          style={{
            backgroundImage: `url('./images/poster/marvelBg.png')`,
          }}
        >
          Marvel Movie
        </button>
      </div>
      <div
        className="trailer p-4"
        style={{
          backgroundImage: `url('./images/poster/spiderMan.png')`,
        }}
      >
        <h3
          className=" text-white fw-bold mt-3"
          style={{ letterSpacing: "2px", width: "300px" }}
        >
          SPIDERMAN HOME COMING
        </h3>
        <div className="d-flex mt-5">
          <i class="bi bi-play-circle text-white fs-1"></i>
          <h5
            className=" text-white mt-3 ms-3"
            style={{ letterSpacing: "1px" }}
          >
            See Trailer
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Option;
