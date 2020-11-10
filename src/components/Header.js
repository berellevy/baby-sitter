import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../assets/Icons/HomeButton';

const Header = () => {
  return (
    <div className="header background-blur">
      <HomeButton />
      <Link to="/login" className="header-text">Sitter Sign In</Link>
    </div>
  );
}

export default Header;
