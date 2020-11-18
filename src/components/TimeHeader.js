import qs from "qs";
import moment from "moment";
import React from "react";

const TimeHeader = ({ search }) => {
  const { day, startTime, duration } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const formattedDay = moment(day, "DD-MM-YYYY").format("MMM/D");
  const formattedStart = moment(startTime, "hh:mm").format("h:mm");
  const formattedEnd = moment(startTime, "hh:mm")
    .add(duration, "m")
    .format("h:mma");

  return <h1>{`${formattedDay}, ${formattedStart}-${formattedEnd}`}</h1>;
};

export default TimeHeader;
