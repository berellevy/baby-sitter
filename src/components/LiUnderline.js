import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/Icons/RightArrow";

const LiUnderline = ({ classes, url, children }) => {
  return (
    <li className="underline">
      <Link className="li-underline" to={url}>
        <div
          style={{
            flexGrow: "1",
          }}
        >
          {children}
        </div>
        <p
          style={{
            marginLeft: "auto",
          }}
        >
          <RightArrow />
        </p>
      </Link>
    </li>
  );
};

export default LiUnderline;
