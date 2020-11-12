import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Li from "../components/Li";
import { BackendDomain } from "../utils/urls";
import TimeHeader from "../components/TimeHeader";

const Availabilities = ({ location: { search }, history }) => {
  const [sittersList, setSittersList] = useState(null);

  useEffect(() => {
    const fetchSitters = async () => {
      const results = await fetch(BackendDomain("sitters" + search));
      const sittersList = await results.json();
      setSittersList(sittersList);
    };
    fetchSitters();
  }, [search]);

  return (
    <div className="container">
      <Header />
      <BackButton history={history} />
      <TimeHeader search={search} />
      <ul>
        {sittersList &&
          sittersList.map((data) => <Li key={data.id} data={data} />)}
      </ul>
    </div>
  );
};

export default Availabilities;
