import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../assets/Icons/HomeButton';
import { useGoogleAuth } from '../auth/useGoogleLogin';
import LogoutButton from './LogoutButton';

const Header = ({classes}) => {
  const {isSignedIn} = useGoogleAuth()

  const LogButton = () => {
    return (
      isSignedIn
        ? <LogoutButton />
        : <Link to="/login" className="header-text">Sitter Sign In</Link>
    )
  }

  return (
    <div className={`header background-light-gray ${classes}`}>
      <HomeButton />
      <LogButton />
    </div>
  );
}

export default Header;
