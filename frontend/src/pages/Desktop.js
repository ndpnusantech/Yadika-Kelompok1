import React from "react";
import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/layouts/NavigationBar";

const Desktop = () => {

    const backgroundStyle = {
        height: "75vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('./images/poster/Neon Avengers.png')`,
        color: "white",
        position: "relative"
    } 
    

  return (
    <div>
      <NavigationBar />
      <div  style={backgroundStyle}  >
        <Container>
        <div style={{position : "absolute" ,top : "9rem"}}>
      <h2 style={{width : "400px" , fontWeight : "600" }}>
        See all the movies that are currently showing
      </h2>
      </div>
      </Container>
      </div>
     

    </div>
  );
};

export default Desktop;
