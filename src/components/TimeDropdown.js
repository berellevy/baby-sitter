import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { TimeCustomInput } from '../utils/DateTime';

const TimeDropdown = ({startDate, setStartDate, children}) => {
  return (
    <div className="find-sitter-menu-section">
        <label className="find-sitter-menu-label">Select hours</label>
        <div className="dropdown-time-container">
          <ReactDatePicker
            selected={startDate}
            onChange={(time) => setStartDate(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            showPopperArrow={false}
            customInput={<TimeCustomInput />}
          />
          {children}
        </div>
      </div>
  );
}

export default TimeDropdown;
