import React from "react";
import { Link } from "react-router-dom";
import { useGoogleAuth } from "../auth/useGoogleLogin";
import Header from "../components/Header";

const SitterHomePage = () => {
  const { googleUser } = useGoogleAuth();
  const { profileObj } = googleUser
  return (
    <>
      <Header />
      <h1>{profileObj.name}</h1>
      <Link to="/edit-profile" className="border-box">edit profile</Link>
      <Link to="/my-schedule" className="border-box">My schedule</Link>
    </>
  );
};

export default SitterHomePage;
