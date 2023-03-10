import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";
import Accordion from "react-bootstrap/Accordion";
import CardHistory from "../components/CardHistory";

const History = () => {
  return (
    <>
      <NavigationBar />
      <div className="container" style={{ height: "100vh" }}>
        <h2 className="text-white text-center my-5">History Order</h2>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5 className="fw-bold">Ant Man wasp quantumania</h5>
            </Accordion.Header>
            <Accordion.Body>
              <CardHistory />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default History;
