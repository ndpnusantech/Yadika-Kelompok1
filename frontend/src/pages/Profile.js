import React from "react";
import NavigationBar from "../components/layouts/NavigationBar";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  return (
    <div>
      <NavigationBar />
      <div className="container d-flex py-5">
        <div className="d-flex flex-column me-3">
          <img
            src="./images/image-profil.png"
            alt=""
            style={{ width: "300px" }}
          />
          <button className="btn bg-success text-white w-50 mx-auto mt-5">
            Edit
          </button>
        </div>
        <div className="text-white ms-5 mt-5">
          <h5>Nama: {username}</h5>
          <h5>Email: {email}</h5>
          <h5>Email: tes</h5>
          <button className="btn bg-danger text-white mt-4">Log Out</button>
        </div>
      </div>
      <hr className="text-white" />
    </div>
  );
};

export default Profile;
