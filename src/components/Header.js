import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/Icons/HomeIcon';

const Header = () => {
  return (
    <div className="header background-blur">
      <HomeIcon />
      <Link to="/login" className="header-text">Sitter Sign In</Link>
    </div>
  );
}

export default Header;
