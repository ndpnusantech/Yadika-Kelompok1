import React from "react";
import Container from "react-bootstrap/esm/Container";
import AboutJumbotron from "../components/jumbotron/AboutJumbotron";
import Footer from "../components/layouts/Footer";
import NavigationBar from "../components/layouts/NavigationBar";
import ListMovie from "../components/ListMovie/ListMovie";

const About = () => {
  
  return (
    <div className="about text-white" >
      <NavigationBar />
      <AboutJumbotron />
      <Container>
        <center>
          <ListMovie titleList="Other Movie" />
        </center>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
