import React from "react";

const Option = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="option d-flex flex-column">
        <button
          className="btn text-white text-start fs-3 fw-bold ps-5"
          style={{
            backgroundImage: `url('./images/poster/nowShowingBg.png')`,
          }}
        >
          Now Showing
        </button>
        <button
          className="btn text-white mt-5 text-start fs-3 fw-bold ps-5"
          style={{
            backgroundImage: `url('./images/poster/marvelBg.png')`,
          }}
        >
          Marvel Movie
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Option;
