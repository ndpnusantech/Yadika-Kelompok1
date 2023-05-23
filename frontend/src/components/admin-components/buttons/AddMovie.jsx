import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { InputNumber } from "../table/TableListElements";
import TabComponent from "../tabs/Tab";
const AddMovie = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [count, setCount] = useState(0);

  function incrementCount(e) {
    e.preventDefault();

    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount(e) {
    e.preventDefault();
    if (!count < 1) {
      setCount((prevCount) => prevCount - 1);
    }
    return false;
  }

  function handleChange(e) {
    const newCount = Number(e.target.count);
    setCount((prevCount) => newCount);
  }
  return (
    <div>
      <button
        className="btn AddMovie text-white bg-success ms-3"
        onClick={handleShowAdd}
      >
        Add Movie
      </button>
      {/* Modal */}

      <Modal
        show={showAdd}
        onHide={handleCloseAdd}
        size="lg"
        style={{ fontWeight: "bold" }}
      >
        <Modal.Header style={{ padding: "9px  0px" }}>
          <h6
            style={{
              textAlign: "center",
              margin: "auto",
              fontWeight: "bold",
            }}
          >
            Add Movie list
          </h6>
          <img
            src="./images/logo/cgv.png"
            alt=""
            style={{ width: "55px", position: "absolute", right: "20px" }}
          />
        </Modal.Header>
        <Modal.Body>
          <div>
            <form action="" className="add-movie">
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <table>
                  <tr>
                    <td>Nama Film</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sinopsis</td>
                    <td>:</td>
                    <td>
                      <textarea
                        style={{
                          width: "220px",
                          height: "100px",
                        }}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Durasi film</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Normal Price</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Weekend Price</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Special Price</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Link Youtube Trailer</td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          width: "220px",
                        }}
                      />
                    </td>
                  </tr>
                </table>

                <table>
                  <tr>
                    <td>Is Show ?</td>
                    <td>:</td>
                    <td>
                      <select name="" id="">
                        <option value="">Showing Now</option>
                        <option value="">Up Coming</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Is Slider ?</td>
                    <td>:</td>
                    <td>
                      <select name="" id="">
                        <option value="">False</option>
                        <option value="">True</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Durasi penayangan</td>
                    <td>:</td>
                    <td>
                      <input type="date" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sampai dengan</td>
                    <td>:</td>
                    <td>
                      <input type="date" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Poster</td>
                    <td>:</td>
                    <td>
                      <input type="file" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Background Poster</td>
                    <td>:</td>
                    <td>
                      <input type="file" name="" id="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Jumlah tiket </td>
                    <td>:</td>
                    <td>
                      <InputNumber>
                        <button
                          onClick={incrementCount}
                          className="plus-button"
                        >
                          +
                        </button>
                        {/* <div>{count}</div> */}
                        <input
                          type="number"
                          className="input-number"
                          id="input-number"
                          value={count}
                          onChange={handleChange}
                        />
                        <button onClick={decrementCount} className="min-button">
                          -
                        </button>
                      </InputNumber>
                    </td>
                  </tr>
                </table>
              </div>
              <TabComponent />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMovie;
