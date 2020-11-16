import React from "react";
import ReactDatePicker from "react-datepicker";
import { DateCustomInput } from "../utils/DateTime";

const DateDropdown = ({startDate, setStartDate}) => {
  return (
    <div className="find-sitter-menu-section">
      <label className="find-sitter-menu-label">Choose date</label>
      <ReactDatePicker
        dateFormat="MM/d/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperPlacement="bottom-end"
        showPopperArrow={false}
        customInput={<DateCustomInput />}
      />
    </div>
  );
};

export default DateDropdown;
