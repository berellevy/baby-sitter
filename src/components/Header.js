import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import HomeButton from '../assets/Icons/HomeButton';
import Login from './Login';
import Logout from './Logout';

const Header = ({classes}) => {
  return (
    <div className={`header ${classes}`}>
      <HomeButton />
      {/* <Link to="/login" className="header-text">Sitter Sign In</Link> */}
      <Login />
      <Logout />
    </div>
  );
}

export default Header;
