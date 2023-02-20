import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="w-25">
            <img src="./images/logo/logo-cinema2.png" alt="" />
            <p className="mt-3">
              Best App For Movie Lovers In Indonesia! Movie Entertainment
              Platform From Cinema To Online Movie Streaming Selections.
            </p>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column me-5">
              <Link className="mb-3">Now Showing</Link>
              <Link>About</Link>
              <Link className="my-3">Contact Us</Link>
              <Link>FAQ</Link>
            </div>
            <div>
              <p>Cinema ID support</p>
              <p>Email : CinemaId@gmail.com</p>
              <p>FOLLOW US</p>
              <div>
                <Link>logo</Link>
                <Link>logo</Link>
                <Link>logo</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
