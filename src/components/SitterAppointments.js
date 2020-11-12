import React from "react";
import moment from "moment"

const SitterAppointments = ({ appointments }) => (
  appointments.map(({id, start_time, end_time }) => {
    return (
      <li key={id} style={{border: "1px solid black", marginBottom: "5px"}}>
        <p>From: {moment(start_time).format("M/D hh:mma")}</p>
        <p>To: {moment(end_time).format("M/D h:mma")}</p>

      </li>
    )
  }

  )
)

export default SitterAppointments;
