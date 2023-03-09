import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Succsess from "../../components/successAnimation/Succsess";
import "./login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();

  const [succses, setSuccses] = useState(false);

  const createAccount = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setSuccses(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <center>
      <div className="register d-flex animate-to-right" style={{ height: "100vh" }}>
        <div
          className="w-50"
          styleName={{
            backgroundImage: "url('./images/poster/bgLogin.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {succses ? (
          <Succsess succsess="Register" />
        ) : (
          <div className="input w-50 d-flex flex-column text-white animate-to-left">
            <h2 className="mb-5 fw-bold">Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="error"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
            <button
              className="btn text-white rounded-2 p-2 my-4"
              type="submit"
              onClick={() => createAccount()}
            >
              Register
            </button>
            <p>
              Already have an account
              <Link to={"/login"} className="text-primary ms-2">
                Login Now
              </Link>
            </p>
          </div>
        )}
      </div>
    </center>
  );
};

export default Register;
