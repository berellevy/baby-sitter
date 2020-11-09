import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Li from "../components/Li";
import { BackendDomain } from "../utils/urls";


const Availabilities = ({ location: { search }, history}) => {
  console.log(BackendDomain("sitters"))
  const [sitterInfo, setSitterInfo] = useState(null)
  useEffect( () => {
    const fetchSitters = async () => {
      const results = await fetch("https://babysitter-mendel.herokuapp.com/api/v1/sitters")
      const sitterInfo = await results.json()
      setSitterInfo(sitterInfo)
    }
    fetchSitters()
  },[])


  const sittersList = () => sitterInfo && sitterInfo.map(data => <Li data={data}/>)
  return (
    <div className="container">
      <Header />
      <BackButton history={history}/>
      {/* time period */}
      <h1>Jul 18 6-8:30pm</h1>
      <ul>
        {sittersList()}
      </ul>
    </div>
  );
};

export default Availabilities;
