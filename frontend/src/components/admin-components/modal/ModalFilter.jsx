import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalFilter = (props) => {
  // style option
  const optionStyle = {
    padding: "5px",
    border: "none",
    backgroundColor: "salmon",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  };
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Sort By :</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <label for="dropdown">Kota :</label>
            <select id="dropdown" style={optionStyle}>
              <option value="1" selected>
                View All
              </option>
              <option value="1">Bandung</option>
              <option value="2">Jakarta</option>
              <option value="3">Surabaya</option>
            </select>
          </div>
          <div className="d-flex flex-column mx-4">
            <label for="dropdown">Lokasi :</label>
            <select id="dropdown" style={optionStyle}>
              <option value="1" selected>
                View All
              </option>
              <option value="1">Kopo Miko Mall</option>
              <option value="2">Pascal</option>
              <option value="3">PVJ</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label for="dropdown">Tickect :</label>
            <select id="dropdown" style={optionStyle}>
              <option value="1" selected>
                View All
              </option>
              <option value="1">Terbanyak</option>
              <option value="2">Terdikit</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn bg-primary text-white" onClick={props.close}>
          Filter
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFilter;
