import React from "react";

const Profile = () => {
  const styleProfile = {
    width: "90%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "flex-end",
    height: "40px",
    marginBottom: "10px",
    margin: "0px  auto   30px",
  };

  const styleProfilePicture = {
          display: "block",
          borderRadius: "100%",
          width: "30px",
          height: "30px",
          backgroundColor: "grey",
          margin: " 0px 50px",
          marginTop: "5px",
  }
  

  return (
    <div style={styleProfile}>
      <div
        style={styleProfilePicture}
      ></div>
    </div>
  );
};

export default Profile;
