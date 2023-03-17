import React from "react";
import "./loginAdmin.css";
import styled from "styled-components";

function LoginAdmin() {
  const Bgblur = styled.div`
    background-image: url("./images/poster/postercgv2.jpeg");
    width: 500px;
    height: 100%;
    /* Add the blur effect */
    filter: blur(2px);
    -webkit-filter: blur(3px);
    /* Full height */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
  `;

  return (
    <section className="section-login-admin">
      <div className="login_box">
        <div className="left">
          <div className="top_link">
            <a href="/">
              <img
                src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                alt=""
              />
              Return home
            </a>
          </div>
          <div className="contact">
            <div>
              <form action="">
                <h3>SIGN IN</h3>
                <input type="text" placeholder="USERNAME" />
                <input type="text" placeholder="PASSWORD" />
                <button class="submit">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
        <div className="right">
		  <Bgblur/>
        </div>
      </div>
    </section>
  );
}

export default LoginAdmin;
