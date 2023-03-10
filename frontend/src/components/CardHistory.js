import React from "react";
import Ticket from "../components/Ticket";

const CardHistory = () => {
  return (
    <div
      className="d-flex bg-white py-5 px-4 mx-auto rounded-3"
      style={{ width: "90%" }}
    >
      <div className="w-50">
        <table className="table-history ">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>Sandi Ramdhani</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>sandirmd123@gmail.com</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>:</td>
            <td>Selasa 2/17/2023</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>:</td>
            <td>14.00 WIB</td>
          </tr>
          <tr>
            <td>Audi</td>
            <td>:</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Seat</td>
            <td>:</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Row</td>
            <td>:</td>
            <td>3</td>
          </tr>
        </table>
      </div>
      <Ticket />
    </div>
  );
};

export default CardHistory;
