import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20px"
      >
        <path d="M12 2A1 1 0 1 0 12 4 1 1 0 1 0 12 2zM22.5 11A.5.5 0 1 0 22.5 12 .5.5 0 1 0 22.5 11zM1.5 11A.5.5 0 1 0 1.5 12 .5.5 0 1 0 1.5 11z" />
        <path d="M12.71,2.296L12,3.1l-0.71-0.804L1.203,11.098L1.5,12H4v8c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-6h4v6c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-8h2.5l0.297-0.902L12.71,2.296z" />
      </svg>
    </Link>
  );
};

export default HomeButton;
