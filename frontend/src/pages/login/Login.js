import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <center>
      <div class="login d-flex" style={{ height: "100vh" }}>
        <div class="w-50" style={{ background: "#C44D4D" }}>
          <img
            src="./images/icon/cinema.png"
            alt=""
            style={{
              width: "250px",
              marginTop: "100px",
            }}
          />
          <h3 className="text-white text-center mt-5 w-50">
            Boking your ticket to watch your favorite movie
          </h3>
        </div>
        <div className="input w-50 d-flex flex-column text-white">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn text-white rounded-2 p-2 my-4" type="submit">
            Login
          </button>
          <p>
            Dont have an account
            <Link to={"/register"} className="text-primary ms-2">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </center>
  );
};

export default Login;
