import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const FindSitterMenu = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="background-blur find-sitter-menu"
      style={{ height: "357px" }}
    >
      <p>Choose date</p>
      <ReactDatePicker
        className="dropdown"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p className="find-sitter-button"> Find Sitters</p>
    </div>
  );
};

export default FindSitterMenu;
