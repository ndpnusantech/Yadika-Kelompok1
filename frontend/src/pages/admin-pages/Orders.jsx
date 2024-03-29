import React, { useState } from "react";
import TableOrder from "../../components/admin-components/table/TableOrder";
import Profile from "../../components/admin-components/Adminprofile";
// import '../../styles/admin-css/Orders.css'
// import '../../styles/admin-css/admin.css'
import styled from "styled-components";
import Sidebar from "../../components/admin-components/sidebar/Sidebar";
import TransactionStatus from "../../components/admin-components/transaction/TransactionStatus";

const Orders = () => {
  const SectionAdmin = styled.section`
    background-color: #fff;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
  `;
  const TransactionInfo = styled.div`
    background-color: white;
    width: 54rem;
    height: max-content;
    padding: 10px;
    margin: 10px auto;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    border-radius: 5px;
  `;

  const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const WrapAdmin = styled.div`
    width: 45%;
    height: 100px;
    margin-top: -5px;
    img {
      margin: 7px 0px;
    }
  `;

  const Td = styled.td`
    width: 150px;
    color: rgb(0, 0, 0);
    font-weight: 600;

    :nth-child(1) {
      width: max-content;
      padding-right: 10px;
    }

    :nth-child(2) {
      width: 10px;
    }
  `;

  const BatasT = styled.div`
    height: 200px;
    border-left: 1px solid #a99696;
  `;
  const WrapTiket = styled.div`
    height: max-content;
    width: max-content;
    margin: 20px;
  `;

  const TiketCustomers = styled.div`
    background-color: #e0e0e0;
    width: max-content;
    padding: 10px;
    margin-top: -15px;

    /* Selector ketika ditampilkan pada .warpTiket */
    .content {
      display: flex;
    }

    /* Selector untuk <hr> di dalam .tiketCustomers */
    hr {
      margin: 3px;
    }
  `;
  const DataTiket = styled.div`
    margin: 0 10px;
    display: flex;

    /* Selector untuk .text pada .dataTiket */
    .text p {
      font-size: 11px;
      margin: 5px 0;
    }
    .text p:nth-child(2) {
      font-size: 11px;
      width: 140px;
    }
  `;

  const LogoCgv = styled.img`
    width: 100px;
    margin: 30% 7px;
  `;

  const [show, setShow] = useState(false);

  const showButtonClick = () => {
    setShow(true);
  };

  const hiddenButtonClick = () => {
    setShow(false);
  };

  const [status, setStatus] = useState("");

  return (
    <SectionAdmin>
      <Sidebar>
        <Profile />
        {/* Table Order Costumer */}

        {/* End */}
        <TableOrder show={showButtonClick} />

        {/* Transaction Info */}
        {show && (
          <TransactionInfo>
            <div className="d-flex">
              <i
                class="bi bi-x-circle fs-3 ms-auto"
                style={{ cursor: "pointer" }}
                onClick={hiddenButtonClick}
              ></i>
            </div>
            <Wrap>
              <WrapAdmin>
                <img
                  src="./images/logo/cgv.png"
                  alt=""
                  style={{ width: "70px" }}
                />
                <table className="TransaksiTable">
                  <tr>
                    <Td>Name</Td>
                    <Td>:</Td>
                    <Td>Sandi ramdani</Td>
                  </tr>
                  <tr>
                    <Td>Email</Td>
                    <Td>:</Td>
                    <Td>Sandirmd123@gmail.com</Td>
                  </tr>
                  <tr>
                    <Td>Date</Td>
                    <Td>:</Td>
                    <Td>Selasa 2/17/2023</Td>
                  </tr>
                  <tr>
                    <Td>Time</Td>
                    <Td>:</Td>
                    <Td>14.00 WIB</Td>
                  </tr>
                  <tr>
                    <Td>Seat</Td>
                    <Td>:</Td>
                    <Td>A</Td>
                  </tr>
                  <tr>
                    <Td>Row</Td>
                    <Td>:</Td>
                    <Td>3</Td>
                  </tr>
                  <tr>
                    <Td>Status Transaksi</Td>
                    <Td>:</Td>
                    <Td>{status}</Td>
                  </tr>
                </table>
              </WrapAdmin>

              <BatasT></BatasT>
              <WrapTiket>
                <TiketCustomers>
                  <div className="content">
                    <div className="poster" style={{ marginTop: "-4px" }}>
                      <img
                        src="./images/poster/ant-man.jpeg"
                        alt=""
                        style={{
                          borderRadius: "8px",
                          width: "90px",
                          marginTop: "7px",
                        }}
                      />
                    </div>
                    <DataTiket DataTiket>
                      <div className="text">
                        <h4>CINEMA TICKET</h4>
                        <p>Ant-Man and the Wasp: Quantumania</p>
                        <p>Date : mm/dd/yy</p>
                        <p>Time : 00:00 PM</p>
                        <p>Row : A Seat : 3</p>
                      </div>
                      <div className="logoCgv">
                        <LogoCgv src="./images/logo/cgv.png" alt="" />
                      </div>
                    </DataTiket>
                  </div>
                  <hr />
                  <h6>CODE PEMBAYARAN : 352617273553212</h6>
                </TiketCustomers>
              </WrapTiket>
            </Wrap>
            <TransactionStatus
              statusFailed={() => {
                localStorage.setItem("status", "Failed");
                setStatus("Failed");
              }}
              statusSuccess={() => {
                localStorage.setItem("status", "Success");
                setStatus("Success");
              }}
              statusPanding={() => {
                localStorage.setItem("status", "Panding");
                setStatus("Panding");
              }}
            />
          </TransactionInfo>
        )}

        {/* END */}
      </Sidebar>
    </SectionAdmin>
  );
};

export default Orders;
