import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const formatDate = (dateStr) => {
 const date = new Date(dateStr);
 const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
 };
 return date.toLocaleString("en-US", options).replace(" at", "");
};

const formatNumber = (num) => (num < 10 ? `0${num}` : num);

const timeRemaining = (endDateStr) => {
 const endDate = new Date(endDateStr);
 const now = new Date();
 const diff = endDate - now;

 if (diff <= 0) {
  return "Expired";
 }

 const days = Math.floor(diff / (1000 * 60 * 60 * 24));
 const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

 return `${formatNumber(days)} : ${formatNumber(hours)} : ${formatNumber(
  minutes
 )}`;
};

const getRelevantDateInfo = (startDateStr, endDateStr) => {
 const currentDate = new Date();
 const startDate = new Date(startDateStr);
 const endDate = new Date(endDateStr);

 if (currentDate > endDate) {
  return formatDate(endDateStr);
 } else if (currentDate < startDate) {
  return `${timeRemaining(startDateStr)}`;
 } else {
  return `${timeRemaining(endDateStr)}`;
 }
};

const CountdownTimer = ({ startDate, endDate }) => {
 const [dateInfo, setDateInfo] = useState(() =>
  getRelevantDateInfo(startDate, endDate)
 );

 useEffect(() => {
  const intervalId = setInterval(() => {
   setDateInfo(getRelevantDateInfo(startDate, endDate));
  }, 1000); // Update every second

  return () => clearInterval(intervalId); // Cleanup interval on component unmount
 }, [startDate, endDate]);

 return (
  <div className="countdown-timer">
   <p>{dateInfo}</p>
  </div>
 );
};

CountdownTimer.propTypes = {
 startDate: PropTypes.string.isRequired,
 endDate: PropTypes.string.isRequired,
};

export default CountdownTimer;
