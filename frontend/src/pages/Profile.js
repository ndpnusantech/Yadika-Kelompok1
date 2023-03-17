import React, { useState } from "react";
import CardHistory from "../components/CardHistory";
import NavigationBar from "../components/layouts/NavigationBar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const [editUsername, setUsername] = useState(username);
  const [editEmail, setEmail] = useState(email);

  const editProfile = () => {
    localStorage.setItem("username", editUsername);
    localStorage.setItem("email", editEmail);
    setShow(false);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <div>
      <NavigationBar />
      <div className="container d-flex py-5">
        <div className="d-flex flex-column me-3">
          <img src="./images/user.png" alt="" />
          <button
            className="btn bg-success text-white w-50 mx-auto mt-5"
            onClick={handleShow}
          >
            Edit
          </button>
          {/* edit show */}
          <Modal show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column px-4">
                <label htmlFor="text">Name</label>
                <input
                  type="text"
                  placeholder="Change Name"
                  className="p-1"
                  value={editUsername}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Change Email"
                  className="p-1 my-3"
                  value={editEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Change Email"
                  className="p-1 my-3"
                  value={editEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              

                <label htmlFor="">Profile</label>
                <input type="file" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={editProfile}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* end */}
        </div>
        <div className="text-white ms-5 mt-5">
          <h5>Nama: {username}</h5>
          <h5>Email: {email}</h5>
          <button className="btn bg-danger text-white mt-4" onClick={logout}>
            {" "}
            Log Out
          </button>
        </div>
      </div>
      <hr className="text-white" />
      <div>
        <h1 className="text-white text-center">Last Order</h1>
        <CardHistory />
      </div>
    </div>
  );
};

export default Profile;
