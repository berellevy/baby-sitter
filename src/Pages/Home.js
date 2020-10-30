import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Hello Mendel!</h1>
      <Link to="/hello">Hello</Link>
    </div>
  );
}

export default Home;
