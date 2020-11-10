import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { DateCustomInput, formatDate, formatHM, TimeCustomInput, roundToQuarterHour } from "../utils/DateTime"
import { Link } from "react-router-dom";
import RightArrow from "../assets/Icons/RightArrow";

const FindSitterMenu = () => {
  // TODO: Add validation to not allow less than an hour period

  const addHour = (time) => {
    return time.setMinutes(time.getMinutes() + 60)
  }

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(roundToQuarterHour(new Date()));
  const [endTime, setEndTime] = useState(roundToQuarterHour(addHour(new Date())));

  const lessThanHour = (startTime, endTime) => (endTime.getTime() - startTime.getTime()) / 60000 < 60

  const validateHour = (startDate, startTime, endTime) => {
    if (lessThanHour(startTime, endTime)) {
      return "#"
    } else {
      return `/availabilities/?day=${formatDate(startDate)}&from=${formatHM(startTime)}&to=${formatHM(endTime)}`
    }
  }

  const invalidTime = (startTime, endTime) => (
    lessThanHour(startTime, endTime)
      ? "invalid-time"
      : ""
  )

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
            customInput={<TimeCustomInput invalidTime={invalidTime(startTime, endTime)}/>}
          />
        </div>
      </div>

      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Sitters available</label>
        <Link
          to={validateHour(startDate, startTime, endTime)}
          className="find-sitter-button"
        >
          Find Sitters
          <RightArrow />
        </Link>
      </div>
    </form>
  );
};

export default FindSitterMenu;
