import React from 'react';
import HomeIcon from '../assets/Icons/HomeIcon';

const Header = () => {
  return (
    <div className="header background-blur">
      <HomeIcon />
      <span className="header-text">Sitter Sign In</span>
    </div>
  );
}

export default Header;
