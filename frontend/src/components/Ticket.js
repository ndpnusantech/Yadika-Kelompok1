import React from "react";

const Ticket = () => {
  return (
    <div
      className="card rounded-3 m-auto px-4 pt-4"
      // style={{ height: "280px" }}
    >
      <div className="d-flex  ">
        <div className="img-poster " style={{ width: "150px" }}>
          <img
            src="./images/poster/ant-man.jpeg"
            alt=""
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="ps-4">
          <h3>CINEMA TICKET</h3>
          <h5>Ant-man and the wasp quantumania</h5>
          <div className="d-flex justify-content-between mt-3">
            <div>
              <p>Audi: 1</p>
              <p>seat: A2</p>
            </div>
            <div>
              <p>Date: mm/dd/yy</p>
              <p>Time: 00.00 PM</p>
            </div>
          </div>
        </div>
        <div className="img-poster " style={{ width: "150px" }}>
          <img
            src="./images/logo/cgv.png"
            alt=""
            style={{ maxWidth: "100%", marginTop: "50px" }}
          />
        </div>
      </div>
      <hr />
      <h5 className="fw-bold">CODE PEMBAYARAN : 23253236264452326</h5>
    </div>
  );
};

export default Ticket;
