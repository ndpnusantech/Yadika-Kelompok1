import React from "react";
import { Link } from "react-router-dom";

const AudiBtn = (props) => {
  return (
    <Link to={"/choicechair"}>
      <button
        className="btn bg-dark text-white me-4 px-5"
        style={{ marginTop: "20px" }}
      >
        {props.audi}
      </button>
    </Link>
  );
};

export default AudiBtn;
