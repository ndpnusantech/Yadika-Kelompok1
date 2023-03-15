import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import ListMovie from "../components/ListMovie/ListMovie";
import Option from "../components/Option";
import OurPartner from "../components/OurPartner";

// modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Ticket from "../components/Ticket";

const Home = () => {
  let isOrder = localStorage.getItem("isOrder");
  const [show, setShow] = useState(isOrder);

  const close = () => {
    localStorage.removeItem("isOrder");
    setShow(false);
  };

  return (
    <div className="home">
      <NavigationBar />
      <HomeJumbotron />
      <Container>
        <Option />
        <center>
          <ListMovie titleList="Now Showing In Cinema" />
          <ListMovie titleList="Popular" />
          <OurPartner />
        </center>
      </Container>
      <div
        style={{
          backgroundImage: "url('./images/poster/bgFooter.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 -10px",
          height: "80vh",
          marginBottom: "-350px",
        }}
      ></div>
      <Modal show={show} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Ticket />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={close}>
            Save Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default Home;
