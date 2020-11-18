import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";

import RightArrow from "../assets/Icons/RightArrow";
import DateDropdown from "./DateDropdown";
import TimeDropdown from "./TimeDropdown";
import {
  roundToQuarterHour,
  durationToOptions,
  formatDate,
  formatHM,
} from "../utils/DateTime";

const FindSitterMenu = () => {
  const [startDate, setStartDate] = useState(roundToQuarterHour(new Date()));
  const [selection, setSelection] = useState(60);

  const options = () => durationToOptions(startDate, 60);

  const queryLink = () => {
    return `/availabilities/?day=${formatDate(startDate)}&startTime=${formatHM(startDate)}&duration=${selection}`
  }
  
  return (
    <form className="background-blur find-sitter-menu">
      <DateDropdown startDate={startDate} setStartDate={setStartDate} />

      <TimeDropdown startDate={startDate} setStartDate={setStartDate}>
        <Dropdown
          options={options()}
          onChange={(selection) => setSelection(selection.value)}
          value={options().find(({ value }) => value === selection)}
        />
      </TimeDropdown>

      <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Sitters available</label>
        <Link to={queryLink()} className="find-sitter-button">
          Find Sitters
          <RightArrow />
        </Link>
      </div>
    </form>
  );
};

export default FindSitterMenu;
