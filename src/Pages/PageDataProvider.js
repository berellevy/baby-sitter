import React from "react";

const PageDataProvider = ({ data, render }) => {
  return <>{data ? render(data) : null}</>;
};

export default PageDataProvider;
