import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DownArrow from "../assets/Icons/DownArrow";
import RightArrow from "../assets/Icons/RightArrow";

const FindSitterMenu = () => {
  const addAnHour = () => {
    const d = new Date();
    return d.setHours(d.getHours() + 1);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(addAnHour());

  const DateCustomInput = ({ value, onClick }) => {
    const todayString = new Date().toLocaleDateString();
    const customValue = value === todayString ? "Today" : value;
    return (
      <div className="dropdown" onClick={onClick}>
        {customValue} <DownArrow />
      </div>
    );
  };

  const TimeCustomInput = ({ value, onClick }) => (
    <div className="dropdown dropdown-time" onClick={onClick}>
      {value} <DownArrow />
    </div>
  );

  return (
    <form className="background-blur find-sitter-menu">
      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Choose date</label>
        <DatePicker
          dateFormat="MM/d/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          popperPlacement="bottom"
          customInput={<DateCustomInput />}
        />
      </div>

      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Select hours</label>
        <div className="dropdown-time-container">
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            customInput={<TimeCustomInput />}
          />
          <hr />
          <DatePicker
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            customInput={<TimeCustomInput />}
          />
        </div>
      </div>

      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Sitters available</label>
        <div className="find-sitter-button">
          Find Sitters
          <RightArrow />
        </div>
      </div>
    </form>
  );
};

export default FindSitterMenu;
