import React from "react";
import moment from "moment"
import { durationToEndTime } from '../utils/DateTime'

const SitterAppointments = ({ appointments }) => {
  return appointments.map(({id, start_time, duration_minutes }) => {
    const s_t = moment.utc(start_time).format("M/D hh:mma")
    const e_t = durationToEndTime(moment.utc(start_time), duration_minutes, "M/D hh:mma")
    return (
      <li key={id} style={{border: "1px solid black", marginBottom: "5px", padding: "5px"}}>
        <p>{id}</p>
        <p>From: {s_t}</p>
        <p>To: {e_t}</p>

      </li>
    )
  }

  )
}

export default SitterAppointments;
