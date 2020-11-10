import DownArrow from "../assets/Icons/DownArrow";

export const formatHM = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

export const formatDate = (date) => {
  return date.toLocaleDateString("en-US").replace(/\//g, "-");
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
    {
      invalidTime
        ? <span className="invalid-time-message">
          At least an hour after
        </span>
        : null
    }
  </div>
);

export const roundToQuarterHour = (date) => {
  const coeff = 1000 * 60 * 15
  return new Date(Math.round(date / coeff) * coeff)
}