import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div class="opaque">
        <Header />
        <h1>Hello Mendel!</h1>
        <Link to="/hello">Hello</Link>
      </div>
    </div>
  );
};

export default Home;
