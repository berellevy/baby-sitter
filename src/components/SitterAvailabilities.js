import React from "react";
import moment from "moment"
import { numToDay } from "../utils/DateTime";

const SitterAvailabilities = ({ availabilities }) => (
  availabilities.map(({id, start_time, end_time, weekday }) => {
    return (
      <li key={id}>
       <span> {numToDay(weekday)}: </span>
        <span>{moment(start_time).format("h:mma")}</span>
        {" - "}
        <span>{moment(end_time).format("h:mma")}</span>

      </li>
    )
  }

  )
)

export default SitterAvailabilities;
