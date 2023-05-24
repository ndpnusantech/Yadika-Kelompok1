import React, { useState } from "react";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import { AiOutlineSearch } from "react-icons/ai";
import {
  WrapTable,
  ContentTable,
  input,
  Button,
  WrapInput,
  WrapTabelOrder,
  TableOrder,
  Th,
  Td,
  Tr,
  PosterFilm,
  DetailFilm,
  InputNumber,
} from "./TableListElements";


import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
// Tabs
import TabComponent from "../tabs/Tab";

function TableList() {
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  // input type number tiket
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
    <WrapTable>
      <ContentTable>
        <WrapInput>
          <input type="text" placeholder="Search" style={input} />
          <Button>
            <AiOutlineSearch />
          </Button>
        </WrapInput>
        <div className="ms-auto">
          {/* filter */}
          <button
            className="btn bg-primary text-white "
            onClick={handleShowFilter}
          >
            Filter <i class="bi bi-sort-down"></i>
          </button>
          {/* modal */}
          <Modal show={showFilter} onHide={handleCloseFilter}>
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
              <button
                className="btn bg-primary text-white"
                onClick={handleCloseFilter}
              >
                Filter
              </button>
            </Modal.Footer>
          </Modal>
          {/* end */}

          {/* Add Movie */}
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
                        <td>Harga tiket</td>
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
                            <button
                              onClick={decrementCount}
                              className="min-button"
                            >
                              -
                            </button>
                          </InputNumber>
                        </td>
                      </tr>
                    </table>

                    <table>
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
                        <td></td>
                        <td></td>
                        <td>
                          <textarea
                            style={{
                              width: "220px",
                              height: "100px",
                            }}
                          ></textarea>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <TabComponent />
                </form>
              </div>
            </Modal.Body>
          </Modal>

          {/* End */}
        </div>
      </ContentTable>
      <WrapTabelOrder>
        <TableOrder>
          <Tr>
            <Th>No</Th>
            <Th>Id film</Th>
            <Th>Nama film</Th>
            <Th>Poster film</Th>
            <Th>Location</Th>
            <Th>Durasi film</Th>
            <Th>Harga tiket</Th>
            <Th>Stok</Th>
            <Th>action</Th>
            <Th>Detail film</Th>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>201</Td>
            <Td>Ant-man and the Wasp : Quantumania </Td>
            <Td>
              <PosterFilm src="./images/poster/ant-man.jpeg" alt="" />
            </Td>
            <Td>Bandung</Td>
            <Td>2 jam 4 menit</Td>
            <Td>45.000</Td>
            <Td>60</Td>
            <Td>
              <EditBtn />
              <DeleteBtn />
            </Td>
            <Td>
              <DetailFilm href="/detailFilm">detail</DetailFilm>
            </Td>
          </Tr>
        </TableOrder>
      </WrapTabelOrder>
    </WrapTable>
  );
}

export default TableList;
