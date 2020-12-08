import React from "react";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";

const SitterSignInPage = () => {
  return (
    <div className="container">
      <BackButton />
      <h1>Baby-Sitter Sign In</h1>
      <p>
        Not For Parents. This page is for babysitters to sign in and manage
        their bookings.
      </p>
      <p>
        No need for parents to sign in, just enter date & time on the home page
        and choose your sitter.
      </p>
      <form>
        <LoginButton />
      </form>
    </div>
  );
};

export default SitterSignInPage;
