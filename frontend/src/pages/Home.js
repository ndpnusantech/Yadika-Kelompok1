import React from "react";
import Container from "react-bootstrap/esm/Container";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import ListMovie from "../components/ListMovie/ListMovie";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <HomeJumbotron />
      <Container>
        <center>
          <img
            src="./images/logo/cgv.png"
            alt=""
            style={{ width: "300px", marginTop: "100px" }}
          />
          <ListMovie titleList="Now Showing In Cinema" />
          <ListMovie titleList="Popular" />
        </center>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
