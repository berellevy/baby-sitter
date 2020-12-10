import Dropdown from "react-dropdown";
import React, { useState } from "react";
import { durationToOptions, roundToQuarterHour } from "../utils/DateTime";
import DateDropdown from "./DateDropdown";
import TimeDropdown from "./TimeDropdown";
import TwoColContainer from "./TwoColContainer";
import { BackendDomain, fetcher } from "../utils/urls";

const AddBookingForm = ({ addAppointment }) => {
  const [startDate, setStartDate] = useState(roundToQuarterHour(new Date()));
  const [selection, setSelection] = useState(60);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const options = () => durationToOptions(startDate, 60);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = BackendDomain("appointments");
    const b = {
      startDate,
      selection,
      phone,
      name,
    };
    const response = await fetcher({ url, m: "POST", b });
    const data = await response.json();
    addAppointment(data);
  };

  return (
    <form className="find-sitter-menu" onSubmit={handleSubmit}>
      <p>Add a booking</p>

      <DateDropdown startDate={startDate} setStartDate={setStartDate} />

      <TimeDropdown startDate={startDate} setStartDate={setStartDate}>
        <Dropdown
          options={options()}
          onChange={(selection) => setSelection(selection.value)}
          value={options().find(({ value }) => value === selection)}
        />
      </TimeDropdown>

      <TwoColContainer>
        <input
          type="text"
          placeholder="Phone"
          className="border-box"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <input
          type="text"
          placeholder="Name"
          className="border-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </TwoColContainer>
      <input type="submit" className="find-sitter-button" value="add" />
    </form>
  );
};

export default AddBookingForm;
