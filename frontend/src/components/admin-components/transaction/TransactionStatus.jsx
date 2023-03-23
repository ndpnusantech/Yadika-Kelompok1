import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TransactionStatus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Button type="button" onClick={decoratedOnClick} variant="primary">
        {children}
      </Button>
    );
  }

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Bukti Pembayaran</CustomToggle>
            <Button variant="primary" onClick={handleShow} style={{marginLeft : "5px"}}>
              Status Transaksi
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h6>Bukti pembayaran</h6>
              <img
                src="./images/contoh bukti pembayaran.jpg"
                alt=""
                style={{ width: "300px" }}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        konfirmasi transakasi ?  set status transakasi 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            failed
          </Button>
          <Button variant="warning">panding</Button>
          <Button variant="success">Success</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TransactionStatus;
