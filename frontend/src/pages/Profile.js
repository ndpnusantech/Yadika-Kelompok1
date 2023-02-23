import React from "react";
import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/layouts/NavigationBar";

const Profile = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5rem",
            width: "60% ",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "254px",
              height: "254px",
              borderRadius: "100%",
              display: "flex",
            }}
          ></div>
          <div style={{ color: "white", marginTop: "60px" }}>
            <p>Nama:Dry YUdho</p>
            <p>Email:jsdhuwie</p>
            <button
              style={{
                backgroundColor: "red",
                border: "0px",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "green",
            border: "0px",
            borderRadius: "5px",
          }}
        >
          Edit{" "}
        </button>
      </Container>
      <hr style={{ color: "white", width: "100%" }}></hr>
      <h1 style={{ color: "white", textAlign: "center" }}>Riwayat Transaksi</h1>
    </div>
  );
};

export default Profile;
