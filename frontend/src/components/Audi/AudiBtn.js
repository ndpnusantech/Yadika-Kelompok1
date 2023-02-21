import React from "react";

const AudiBtn = (props) => {
  return (
    <button
      className="btn bg-white me-4"
      style={{ marginTop: "20px", width: "170px" }}
    >
      {props.audi}
    </button>
  );
};

export default AudiBtn;
