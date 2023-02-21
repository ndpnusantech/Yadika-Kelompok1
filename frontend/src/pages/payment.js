import React from "react";
import PaymentBtn from "../components/payment/PaymentBtn";

const payment = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="me-5">
          <img
            src="./images/poster/ant-man.jpeg"
            alt=""
            style={{ width: "330px" }}
          />
          <p className="text-white mt-2 text-center">
            ANT-MAN WASP QUANTUMANIA
          </p>
        </div>
        <div className="ms-5">
          <PaymentBtn name="34.700"/>
          <PaymentBtn name="36.000"/>
          <PaymentBtn name="35.800"/>
        </div>
      </div>
    </div>
  );
};


export default payment