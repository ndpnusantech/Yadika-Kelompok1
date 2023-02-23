import React, { useState } from "react";

const Chair = (props) => {
  const [bgBtn, setBgBtn] = useState("#C44D4D");
  const changeColor = () => {
    bgBtn === "#C44D4D" ? setBgBtn("#4FA332") : setBgBtn("#C44D4D");
  };
  return (
    <button
      className="btn me-4 my-3 text-white"
      style={{ background: `${bgBtn}`, width: "50px" }}
      onClick={() => {
        props.onClick();
        changeColor();
      }}
      value={props.valueBtn}
    >
      {props.numberChair}
    </button>
  );
};

export default Chair;
