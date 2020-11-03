import React, { useEffect, useState } from "react";
import qs from 'qs'


const Availabilities = ({ location: { search } }) => {

  const [data, setData] = useState(null)

  useEffect( () => {
    const fetchSitters = async () => {
      const results = await fetch("https://babysitter-mendel.herokuapp.com/api/v1/sitters")
      const data = await results.json()
      console.log(data);
      setData(data)
    }
    fetchSitters()
  },[])

  const sittersList = () => data.map(({name}) => <li>{name}</li>)
  
  console.log(qs.parse(search, { ignoreQueryPrefix: true }));
  return (
    <div>
      <h1>Availabilities</h1>
      <ul>
        {sittersList()}
      </ul>
    </div>
  );
};

export default Availabilities;
