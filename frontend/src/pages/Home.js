import React from "react";
import Container from "react-bootstrap/esm/Container";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import ListMovie from "../components/ListMovie/ListMovie";
import Option from "../components/Option";
import OurPartner from "../components/OurPartner";

const Home = () => {
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
          marginBottom: "-150px",
        }}
      ></div>
      <Footer />
    </div>
  );
};

export default Home;
