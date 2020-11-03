import React, { useEffect } from "react";
import qs from 'qs'


const Availabilities = ({ location: { search } }) => {

  useEffect( () => {
    const fetchSitters = async () => {
      const results = await fetch("https://babysitter-mendel.herokuapp.com/api/v1/sitters")
      const data = await results.json()
      console.log(data);
    }
    fetchSitters()
  },[])
  
  console.log(qs.parse(search, { ignoreQueryPrefix: true }));
  return (
    <div>
      <h1>Availabilities</h1>
    </div>
  );
};

export default Availabilities;
