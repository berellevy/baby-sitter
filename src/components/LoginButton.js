import React from "react";
import { useHistory } from "react-router";
import { useBackendAuth } from "../auth/useBackendLogin";

const LoginButton = () => {
  const { login } = useBackendAuth();
  const history = useHistory();

  const handleSignin = () => {
    login();
    history.push("/");
  };

  return <button onClick={handleSignin}>Sign in with Google</button>;
};

export default LoginButton;
