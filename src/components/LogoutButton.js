import React from "react";
import { useHistory } from "react-router";
import { useGoogleAuth } from "../auth/useGoogleLogin";

const LogoutButton = () => {
  const history = useHistory();
  const { signOut } = useGoogleAuth();
  
  const handleSignout = () => {
    signOut();
    history.push("/");
  };

  return <span onClick={handleSignout}>Sign Out</span>;
};

export default LogoutButton;
