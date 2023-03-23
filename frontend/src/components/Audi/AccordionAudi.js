import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AudiBtn from "./AudiBtn";

const AccordionAudi = (props) => {
  return (
    <Accordion className="mt-3">
      <Accordion.Item eventKey="0" style={{ width: "600px" }}>
        <Accordion.Header>{props.place}</Accordion.Header>
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
  );
};

export default AccordionAudi;
