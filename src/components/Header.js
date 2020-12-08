import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../assets/Icons/HomeButton";
import { useBackendAuth } from "../auth/useBackendLogin";
import LogoutButton from "./LogoutButton";

const Header = ({ classes }) => {
  const { isLoggedIn } = useBackendAuth();

  const LogButton = () => {
    return isLoggedIn ? (
      <LogoutButton />
    ) : (
      <Link to="/login" className="header-text">
        Sitter Sign In
      </Link>
    );
  };

  return (
    <div className={`header background-light-gray ${classes}`}>
      <HomeButton />
      <LogButton />
    </div>
  );
};

export default Header;
