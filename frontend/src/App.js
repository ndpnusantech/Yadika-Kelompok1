import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/swiper.css";
import "./styles/animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Audi from "./pages/audi";
import ChoiceChair from "./pages/ChoiceChair";
import Payment from "./pages/payment";
import Profile from "./pages/Profile";
import NowShowing from "./pages/NowShowing";


const app = () => {
 return(
  <section>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/audi" element={<Audi />} />
        <Route path="/choicechair" element={<ChoiceChair />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nowshowing" element={<NowShowing />} />
      </Routes>
    </BrowserRouter>
    </section>
)
}

export default app
