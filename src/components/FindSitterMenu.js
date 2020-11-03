import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import DownArrow from "../assets/Icons/DownArrow";
import RightArrow from "../assets/Icons/RightArrow";

const FindSitterMenu = () => {
  const addAnHour = (date) => {
    const d = new Date();
    return d.setMinutes(date.getMinutes() + 60);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(addAnHour(startTime));


  const DateCustomInput = ({ value, onClick }) => {
    const todayString = new Date().toLocaleDateString();
    const customValue = value === todayString ? "Today" : value;
    return (
      <div className="dropdown" onClick={onClick}>
        {customValue} <DownArrow />
      </div>
    );
  };

  const StartTimeCustomInput = ({ value, onClick }) => (
    <div className="dropdown dropdown-time" onClick={onClick}>
      {value} <DownArrow />
    </div>
  );

  const EndTimeCustomInput = ({ value, onClick }) => {
    return (
      <div className="dropdown dropdown-time" onClick={onClick}>
        {value} <DownArrow />
      </div>
    );
  };

  return (
    <form className="background-blur find-sitter-menu">
      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Choose date</label>
        <DatePicker
          dateFormat="MM/d/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          popperPlacement="bottom-end"
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
            customInput={<StartTimeCustomInput />}
          />
          <hr />
          <DatePicker
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            customInput={<EndTimeCustomInput />}
          />
        </div>
      </div>

      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Sitters available</label>
        <Link to="/availabilities">
          <Link to="/availabilities?day=day&from=from&to=to" className="find-sitter-button">
            Find Sitters
            <RightArrow />
          </Link>
        </Link>
      </div>
    </form>
  );
};

export default FindSitterMenu;
