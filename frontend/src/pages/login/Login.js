import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <center>
      <div className="login d-flex" style={{ height: "100vh" }}>
        <div
          className="w-50 animate-to-right fade-in"
          style={{
            backgroundImage: "url('./images/poster/bgLogin.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="input animate-to-left w-50 d-flex flex-column text-white">
          <h2 className="mb-5 fw-bold">Login</h2>
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
