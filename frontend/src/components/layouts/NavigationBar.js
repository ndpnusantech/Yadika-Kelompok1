import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./layouts.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar" style={{ padding: "20px" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo/logo-cinema.png" alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to={"/"}>Home</Link>
          <Link to={"/nowshowing"}>Now Showing</Link>
          <Link to={"/"} className="me-5">
            History
          </Link>
          <Link to={"/login"} className="fw-bold">
            Login <img src="./images/icon/enter.png" alt="" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
