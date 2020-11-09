import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/Icons/RightArrow";

const Li = ({data}) => {
  let { name, age, id, price } = data
  
  return (
    <li>
      <Link to={`/sitters/${id}`}>
      <p>
        {name}, <br />
        Age: {age}
      </p>
      <p className="ml-auto">Price: {price}</p>
      <RightArrow fill="black" />
      </Link>
    </li>

  );
};

export default Li;
