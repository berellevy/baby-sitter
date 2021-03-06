import DownArrow from "../assets/Icons/DownArrow";
import moment from "moment";

export const formatHM = (date, format = "LT") => {
  return moment(date).format(format)

};

export const formatDate = (date, format = "DD-MM-yy") => {
  return moment(date).format(format);
};

export const DateCustomInput = ({ value, onClick }) => {
  const todayString = new Date().toLocaleDateString();
  const customValue = value === todayString ? "Today" : value;
  return (
    <div className="dropdown" onClick={onClick}>
      {customValue} <DownArrow />
    </div>
  );
};

export const TimeCustomInput = ({ value, onClick, invalidTime }) => (
  <div className={"dropdown dropdown-time " + invalidTime} onClick={onClick}>
    {value} <DownArrow />
    {invalidTime ? (
      <span className="invalid-time-message">At least an hour after</span>
    ) : null}
  </div>
);

export const roundToQuarterHour = (date) => {
  const coeff = 1000 * 60 * 15;
  return new Date(Math.round(date / coeff) * coeff);
};

export const numToDay = (num) => weekdays()[num];

export const weekdays = () => [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Shabbos",
];

export const durationToEndTime = (startDate, duration, format = "LT") => {
  return moment(startDate).add(duration, "m").format(format);
};

export const durationToOptions = (startDate, duration) => {
  let timeList = [];
  for (let i = 0; i < 48; i++) {
    let increment = i * 15;
    timeList = [
      ...timeList,
      {
        value: duration + increment,
        label: durationToEndTime(startDate, duration + increment),
      },
    ];
  }
  return timeList;
};
