import React from "react";
import RightArrow from "../assets/Icons/RightArrow";

const Li = ({data}) => {
  let { name, age, id, price } = data
  
  return (
    <li>
      <p>
        {name}, <br />
        Age: {age}
      </p>
      <p className="ml-auto">Price: {price}</p>
      <RightArrow fill="black" />
    </li>
  );
};

export default Li;
