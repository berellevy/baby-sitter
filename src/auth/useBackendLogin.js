import React, { createContext, useContext, useState } from "react";
import { BackendDomain } from "../utils/urls";
import { useGoogleAuth } from "./useGoogleLogin";

const BackendAuthContext = createContext();
export const checkBackendToken = () => localStorage.getItem("backendToken")
export const setToken = (token) => {
  localStorage.setItem("backendToken", token)
}

export function BackendAuthProvider  ({ children })  {
  const [isLoggedIn, setIsLoggedIn ] = useState(checkBackendToken())
  const [isInitialized, setInitialized] = useState(true)
  const {signIn} = useGoogleAuth()
  
  const logout = () => {
    localStorage.removeItem("backendToken")
    setIsLoggedIn(checkBackendToken())
  }

  

  const login = async () => {
    setInitialized(false)
    const {tokenObj: {id_token} } = await signIn()
      const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      "body": JSON.stringify({id_token})
    }
    const response = await fetch(BackendDomain("auth/login"), request_options)
    if (response.ok) {
      const {token} =  await response.json()
      setToken(token)
    } else {
      logout()
    }
    setIsLoggedIn(checkBackendToken())
    setInitialized(true)
  };

  const contextObject = {
    isLoggedIn,
    isInitialized,
    login,
    logout,
  };
  return (
    <BackendAuthContext.Provider value={contextObject}>
      {children}
    </BackendAuthContext.Provider>
  );
};

export const useBackendAuth = () => useContext(BackendAuthContext);
