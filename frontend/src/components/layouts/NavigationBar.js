import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./layouts.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar" style={{ padding: "20px" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo/logo-cinema.png" alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Now Playing</Nav.Link>
          <Nav.Link href="#pricing" style={{ marginRight: "100px" }}>
            History
          </Nav.Link>
          <Nav.Link href="/login" style={{ fontWeight: "bold" }}>
            Login <img src="./images/icon/enter.png" alt="" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
