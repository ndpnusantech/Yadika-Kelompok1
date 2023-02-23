import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
  return (
    <center>
      <div class="register d-flex animate-to-right" style={{ height: "100vh" }}>
        <div
          class="w-50"
          style={{
            backgroundImage: "url('./images/poster/bgLogin.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="input w-50 d-flex flex-column text-white animate-to-left">
          <h2 className="mb-5 fw-bold">Register</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password" />
          <button className="btn text-white rounded-2 p-2 my-4" type="submit">
            Login
          </button>
          <p>
            Already have an account
            <Link to={"/login"} className="text-primary ms-2">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </center>
  );
};

export default Register;
