import React from "react";
import Container from "react-bootstrap/esm/Container";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import ListMovie from "../components/ListMovie/ListMovie";
import OurPartner from "../components/OurPartner";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <HomeJumbotron />
      <Container>
        <center>
          <ListMovie titleList="Now Showing In Cinema" />
          <ListMovie titleList="Popular" />
          <OurPartner />
        </center>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
