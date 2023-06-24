import "./buttons.css";
import React from "react";

const DeleteBtn = (props) => {
  return (
    <button className="DeleteBtn" onClick={() => props.onClick}>
      Delete
    </button>
  );
};

export default DeleteBtn;
