import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Navbar
      className="navbar"
      style={{ backround: "#292929", padding: "20px" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo/logo-cinema.png" alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Now Playing</Nav.Link>
          <Nav.Link href="#pricing">History</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
