import "./buttons.css";
import React from "react";

const TransactionBtn = (props) => {
  return (
    <button className="TransactionBtn" onClick={props.onClick}>
      Trasaction
    </button>
  );
};

export default TransactionBtn;
