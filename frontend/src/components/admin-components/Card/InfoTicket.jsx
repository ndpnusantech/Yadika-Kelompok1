import React from "react";

import "./style.css";

const InfoTicket = (props) => {
  const bgColor = { backgroundColor: `#${props.bg}` };
  return (
    <div className="info-ticket text-white p-4 rounded-3 mx-4" style={bgColor}>
      <h5 className="fw-bold">{props.title}</h5>
      <h6 className="mt-4">{props.jumlah} Ticket</h6>
    </div>
  );
};

export default InfoTicket;
