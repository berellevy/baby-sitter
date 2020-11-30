import React from "react";
import { useGoogleAuth } from "../auth/useGoogleLogin";
import Header from "../components/Header";

const SitterPrivateProfile = () => {
  const { googleUser } = useGoogleAuth();
  const { profileObj } = googleUser
  console.log(profileObj);
  return (
    <>
      <Header classes="background-light-gray" />
      <h1>{profileObj.name}</h1>
      <img src={profileObj.imageUrl} alt="" />
    </>
  );
};

export default SitterPrivateProfile;
