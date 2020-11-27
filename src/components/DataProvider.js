import React from "react";

const DataProvider = ({ data, render }) => {
  return <ul>{!data ? null : data.map((datum) => render(datum))}</ul>;
};

export default DataProvider;
