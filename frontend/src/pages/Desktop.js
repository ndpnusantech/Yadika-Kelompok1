import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";

const Desktop = () => {

    const backgroundStyle = {
        height: "90vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('./images/poster/Neon Avengers.png')`,
        color: "white",
        position: "relative"
    } 
    

  return (
    <div>
      <NavigationBar />
      <div  style={backgroundStyle} ></div>
      <h2 style={{ margin: "20%", width : "340px" , position: "relative", color: "white",fontSize : "28px" , fontFamily : "Montserrat"}}>
        See all the movies that are currently showing
      </h2>

    </div>
  );
};

export default Desktop;
