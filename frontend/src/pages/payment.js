import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";
import PaymentBtn from "../components/payment/PaymentBtn";

const payment = () => {
  return (
    <div>
      <NavigationBar />
      <div className="d-flex justify-content-center mt-5">
        <div className="me-5 ">
          <img
            src="./images/poster/ant-man.jpeg"
            alt=""
            style={{ width: "330px" }}
          />
          <h5 className="text-white mt-2 mx-auto text-center w-75">
            ANT-MAN WASP QUANTUMANIA
          </h5>
        </div>
        <div className="ms-5">
          <PaymentBtn name="34.700" />
          <PaymentBtn name="36.000" />
          <PaymentBtn name="35.800" />
        </div>
      </div>
    </div>
  );
};

export default payment;
