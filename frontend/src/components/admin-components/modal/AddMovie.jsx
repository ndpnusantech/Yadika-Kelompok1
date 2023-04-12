import React from "react";
import Modal from "react-bootstrap/Modal";

const AddMovie = (props) => {
  return (
    <Modal show={props.show} onHide={props.close} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Add Movie List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form action="" className="add-movie">
            <table>
              <tr>
                <td>Nama Film</td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Nama Film</td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Nama Film</td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Nama Film</td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Nama Film</td>
                <td>:</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button variant="primary" onClick={props.close}>
          Add Movie
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovie;
