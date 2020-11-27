import React, { useEffect, useState } from "react";

const UrlProvider = ({ render, url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSitters = async () => {
      const results = await fetch(url);
      const data = await results.json();
      setData(data);
    };
    fetchSitters();
  }, [url]);
  return <ul>{!data ? null : data.map((datum) => render(datum))}</ul>;
};

export default UrlProvider;
