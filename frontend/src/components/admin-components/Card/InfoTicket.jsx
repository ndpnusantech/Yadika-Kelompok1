import React from "react";

import "./style.css";

const InfoTicket = (props) => {
  return (
    <div
      className={`info-ticket text-white p-4 rounded-3 mx-4 ${props.bgPattern}`}
    >
      <h5 className="fw-bold">{props.title}</h5>
      <h6 className="mt-4">{props.jumlah} Ticket</h6>
      <div className="d-flex">
        <h4>{props.totalPrice}</h4>
        <div className={props.loader}></div>
      </div>
    </div>
  );
};

export default InfoTicket;
