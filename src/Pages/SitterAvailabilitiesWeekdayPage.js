import React from "react";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const SitterAvailabilitiesWeekdayPage = () => {
  const { weekday } = useParams();
  return (
    <>
      <Header />
      <BackButton />
      <h1
        style={{textTransform: "capitalize"}}
      >{weekday}</h1>
    </>
  );
};

export default SitterAvailabilitiesWeekdayPage;
