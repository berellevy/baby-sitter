import React from "react";
import moment from "moment"
import { durationToEndTime, numToDay } from "../utils/DateTime";

const SitterAvailabilities = ({ availabilities }) => {
  return availabilities.map(({id, start_time, duration_minutes, weekday }) => {
    return (
      <li key={id}>
       <span> {numToDay(weekday)}: </span>
        {moment.utc(start_time).format("LT")}
        {" - "}
        <span>{durationToEndTime(moment.utc(start_time), duration_minutes)}</span>

      </li>
    )
  }

  )
}

export default SitterAvailabilities;
