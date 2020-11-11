import qs from "qs";
import moment from "moment";
import React from "react";

const TimeHeader = ({ search }) => {
  const { day, from, to } = qs.parse(search, { ignoreQueryPrefix: true });

  const formattedDay = moment(day).format("MMM/D");
  const formattedStart = moment(from, "hh:mm").format("h:mm");
  const formattedEnd = moment(to, "hh:mm").format("h:mma");

  return <h1>{`${formattedDay}, ${formattedStart}-${formattedEnd}`}</h1>;
};

export default TimeHeader;
