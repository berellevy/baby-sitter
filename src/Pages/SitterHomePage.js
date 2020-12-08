import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { checkBackendToken } from "../auth/useBackendLogin";
import Header from "../components/Header";
import { BackendDomain } from "../utils/urls";

const SitterHomePage = () => {
  useEffect(() => {
    const token = checkBackendToken()

    const request_options = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "applocation/json",
        "Accept": "application/json",
      }
    }
    
    fetch(BackendDomain("sitter"), request_options)
      .then(res => res.json())
      .then(console.log)
  })

  return (
    <>
      <Header />
      {/* <h1>{profileObj.name}</h1> */}
      <Link to="/edit-profile" className="border-box">edit profile</Link>
      <Link to="/my-schedule" className="border-box">My schedule</Link>
    </>
  );
};

export default SitterHomePage;
