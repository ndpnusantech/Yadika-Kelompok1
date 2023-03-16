import React from "react";
import { Link } from "react-router-dom";

const AudiBtn = (props) => {
  return (
    <Link to={"/choicechair"}>
      <button
        className="btn bg-dark text-white me-4"
        style={{ marginTop: "20px", width: "170px" }}
      >
        {props.audi}
      </button>
    </Link>
  );
};

export default AudiBtn;
