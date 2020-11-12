import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/Icons/RightArrow";

const Li = ({data}) => {
  let { first_name, last_name, age, id, price } = data
  
  return (
    <li>
      <Link to={`/sitters/${id}`}>
      <p>
        {first_name} {last_name}, <br />
        Age: {age}
      </p>
      <p className="ml-auto">Price: {price}</p>
      <RightArrow fill="black" />
      </Link>
    </li>

  );
};

export default Li;
