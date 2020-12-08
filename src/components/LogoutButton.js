import React from "react";
import { useHistory } from "react-router";
import { useBackendAuth } from "../auth/useBackendLogin";

const LogoutButton = () => {
  const history = useHistory();

  const { logout } = useBackendAuth();

  const handleSignout = () => {
    logout();
    history.push("/");
  };

  return <span onClick={handleSignout}>Sign Out</span>;
};

export default LogoutButton;
