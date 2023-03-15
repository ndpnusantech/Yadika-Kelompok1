import React from "react";
import AudiBtn from "../components/Audi/AudiBtn";
import NavigationBar from "../components/layouts/NavigationBar";

const Audi = () => {
  return (
    <React.Fragment>
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
          <h2 className="text-white fw-bold">Book audi</h2>
          <div className="d-flex">
            <AudiBtn audi="AUDI #1" />
            <AudiBtn audi="AUDI #2" />
            <AudiBtn audi="AUDI #3" />
          </div>
          <AudiBtn audi="AUDI #4" />
          <AudiBtn audi="AUDI #5" />
          <AudiBtn audi="AUDI #6" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Audi;
