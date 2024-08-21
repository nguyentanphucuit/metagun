"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss' - The target date and time for the countdown timer.
  labels: string[];
}
// Calculates the time left until the target date and returns an array of days, hours, minutes, and seconds.
const calculateTimeLeft = (targetDate: Date): number[] => {
  const difference = targetDate.getTime() - new Date().getTime();

  return difference > 0
    ? [
        Math.floor(difference / (1000 * 60 * 60 * 24)), // Days
        Math.floor((difference / (1000 * 60 * 60)) % 24), // Hours
        Math.floor((difference / (1000 * 60)) % 60), // Minutes
        Math.floor(difference / 1000) % 60, // Seconds
      ]
    : [0, 0, 0, 0]; // zeros instead of undefined or null
};
export const CountdownTimer = ({ targetDate, labels }: CountdownTimerProps) => {
  const [timeLeft, setTimerLeft] = useState(
    calculateTimeLeft(new Date(targetDate))
  ); // State to hold the time left until the target date.
  const [hasMounted, setHasMounted] = useState(false); // State to track if the component has mounted.
  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    setHasMounted(true); // Set hasMounted to true when the component mounts.

    if (hasMounted) {
      // Update the time left at every second interval.
      const interval = setInterval(() => {
        setTimerLeft(calculateTimeLeft(new Date(targetDate)));
        prevTimeLeft.current = timeLeft;
      }, 1000);

      // Clean up the interval when the component unmounts.
      return () => clearInterval(interval);
    }
  }, [targetDate, hasMounted, timeLeft]);

  if (!hasMounted) return <div>Loading....</div>; // Display a loading message if the component has not yet mounted.

  // Render the countdown timer UI.
  return (
    <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
      {timeLeft.map((num, index) => (
        <div key={index} className="timer">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">
              {String(num).padStart(2, "0")}
            </h3>
            <p className="text-lg fo uppercasent-normal text-white mt-1 text-center w-full">
              {labels[index]}
            </p>
          </div>
        </div>
        // <div  className="timer__card">
        //       <div
        //         className={`${
        //           num !== prevTimeLeft.current[index] ? "flipper" : ""
        //         }`}></div>
        //       <span className="timer__card-num">
        //         {String(num).padStart(2, "0")}
        //       </span>
        //   <p className="timer__card-val">{labels[index]}</p>
        // </div>
      ))}
    </div>
  );
};

export const CountdownTimerComponent = () => {
  // const today = new Date();
  let target = new Date("2024-08-30T10:00:00");
  target.setDate(target.getDate());
  const timerLabels = ["Ngày", "Giờ", "Phút", "Giây"];

  return (
    <CountdownTimer targetDate={target.toISOString()} labels={timerLabels} />
  );
};

export default CountdownTimerComponent;
