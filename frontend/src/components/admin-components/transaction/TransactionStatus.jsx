import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TransactionStatus(props) {
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
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ marginRight: "5px" }}
            >
              Edit Status Transaksi
            </Button>
            <CustomToggle eventKey="0">Bukti Pembayaran</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
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
          <Modal.Title>set status transakasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> konfirmasi transakasi ? </h5>
          <div className="mt-4">
            <button
              className="btn bg-danger text-white"
              onClick={props.statusFailed}
            >
              failed
            </button>
            <button
              className="btn mx-3 bg-warning"
              onClick={props.statusPanding}
            >
              panding
            </button>
            <button
              className="btn bg-success text-white"
              onClick={props.statusSuccess}
            >
              Success
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TransactionStatus;
