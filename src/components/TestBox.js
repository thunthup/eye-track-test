import React from "react";
import { useState, useEffect } from "react";
const TestBox = ({ boxID, selectedValue, setBoxScores, boxScores, r }) => {
  const [timeOn, setTimeOn] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleEnter = (e) => {
    setHovered(true, console.log(hovered));
  };
  const handleLeave = (e) => {
    setHovered(false, console.log(hovered));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (hovered & (selectedValue !== 16)) {
        setTimeOn((timeOn) => timeOn + 100);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div
      className="flex  border-2 rounded-md m-0.5 border-indigo-600 bg-gray-200  justify-center align-middle items-center content-center"
      style={{
        visibility:
          (boxID === selectedValue) | (selectedValue === 16)
            ? "visible"
            : "hidden",
      }}
      onMouseOver={handleEnter}
      onMouseOut={handleLeave}
    >
      <div className="my-auto">{timeOn / 1000}</div>
    </div>
  );
};
export default TestBox;
