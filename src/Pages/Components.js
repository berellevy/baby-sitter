import React from "react";
import BorderBox from "../components/BorderBox";
import DataProvider from "../components/DataProvider";
import Header from "../components/Header";

const Components = () => {
  const list = ["hello", "second", "third"];
  return (
    <div class="container">
      <Header classes="background-light-gray" />
      <BorderBox>
        I started babysitting my younger siblings when I was a kid and loved it.
        I really enjoy spending time with kids and making sure they are taken…
      </BorderBox>
      <BorderBox>
        <DataProvider data={list} render={(data) => <li>{data}</li>} />
      </BorderBox>
    </div>
  );
};

export default Components;
