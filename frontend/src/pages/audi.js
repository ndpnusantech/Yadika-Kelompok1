import React from "react";
import AudiBtn from "../components/Audi/AudiBtn";
import NavigationBar from "../components/layouts/NavigationBar";
import Accordion from 'react-bootstrap/Accordion';


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
            style={{ width: "330px", }}
          />
          <h5 className="text-white mt-2 mx-auto text-center w-75">
            ANT-MAN WASP QUANTUMANIA
          </h5>
        </div>
        <div className="ms-5">
          <h2 className="text-white fw-bold">Book audi</h2>
          <div className="d-flex">
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Bandung Cinema XXI</Accordion.Header>
        <Accordion.Body>
          <h5>Audi 1</h5>
            <AudiBtn audi="14.00" />
            <AudiBtn audi="18.00" />
            <AudiBtn audi="20.00" />
        </Accordion.Body>
        <Accordion.Body>
          <h5>Audi 2</h5>
            <AudiBtn audi="09.00" />
            <AudiBtn audi="11.00" />
            <AudiBtn audi="18.00" />
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </div>
          <br></br>
          <div>
          <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Bandung CGV</Accordion.Header>
        <Accordion.Body>
          <h5>Audi 1</h5>
          <AudiBtn audi="09.00" />
          <AudiBtn audi="10.00" />
          <AudiBtn audi="13.00" />
          </Accordion.Body>
          <Accordion.Body>
          <h5>Audi 2</h5>
          <AudiBtn audi="18.00" />
          <AudiBtn audi="20.00" />
          <AudiBtn audi="22.00" />
          </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </div>    
        </div>
      </div>
    </React.Fragment>
  );
};
export default Audi;
