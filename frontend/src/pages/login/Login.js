import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Succsess from "../../components/successAnimation/Succsess";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [succses, setSuccses] = useState(false);
  const validation = () => {
    if (
      username === localStorage.getItem("username") ||
      password === localStorage.getItem("password")
    ) {
      localStorage.setItem("isLogin", true);
      setSuccses(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("username atau password salah");
    }
  };

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
        {succses ? (
          <Succsess succsess="login" />
        ) : (
          <div className="input animate-to-left w-50 d-flex flex-column text-white">
            <h2 className="mb-5 fw-bold">Login</h2>
            <input
              type="email"
              placeholder="Email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn text-white rounded-2 p-2 my-4"
              type="submit"
              onClick={() => validation()}
            >
              Login
            </button>
            <p>
              Dont have an account
              <Link to={"/register"} className="text-primary ms-2">
                Register Now
              </Link>
            </p>
          </div>
        )}
      </div>
    </center>
  );
};

export default Login;
