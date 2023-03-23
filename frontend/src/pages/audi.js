import React from "react";
import AccordionAudi from "../components/Audi/AccordionAudi";

import NavigationBar from "../components/layouts/NavigationBar";

const Audi = () => {
  return (
    <React.Fragment>
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
          <h2 className="text-white fw-bold">Book audi</h2>
          <AccordionAudi place="Bandung Cinema XXI" />
          <AccordionAudi place="Bandung Cinema CGV" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Audi;
