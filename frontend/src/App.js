import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/swiper.css";
import "./styles/animate.css";
import "./styles/css-pattern/CardInfoTicket.css";
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
import History from "./pages/History";
import Dashboard from "./pages/admin-pages/Dashboard";
import MovieList from "./pages/admin-pages/MovieList";
import Orders from "./pages/admin-pages/Orders";
import LoginAdmin from "./pages/admin-pages/LoginAdmin";
import UpComing from "./pages/UpComing";

const App = () => {
  return (
    <section>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* User */}
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/choicechair" element={<ChoiceChair />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nowshowing" element={<NowShowing />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/history" element={<History />} />
          {/* admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movieList" element={<MovieList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
