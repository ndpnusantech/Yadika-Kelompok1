import React from "react";
import Container from "react-bootstrap/esm/Container";
import HomeJumbotron from "../components/jumbotron/HomeJumbotron";
import NavigationBar from "../components/layouts/NavigationBar";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <HomeJumbotron />
      <Container></Container>
    </div>
  );
};

export default Home;
