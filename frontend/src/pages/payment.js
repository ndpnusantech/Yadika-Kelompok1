import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";
import PaymentBtn from "../components/payment/PaymentBtn";

const payment = () => {
  return (
    <div>
      <NavigationBar />
      <div
        className="d-flex justify-content-center mt-5"
        style={{ height: "100vh" }}
      >
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
          <PaymentBtn logo="logo-indomaret.png" name="Indomart" />
          <PaymentBtn logo="logo-alfamart.png" name="Alfamart" />
        </div>
      </div>
    </div>
  );
};

export default payment;
