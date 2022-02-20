import React from "react";
import TestGrid from "../components/TestGrid";
import { useState, useEffect } from "react";

const Test = () => {
  const [countDown, setcountDown] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      setcountDown((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      setcountDown((prev) => prev - 1);
    }, 2000);
    setTimeout(() => {
      setcountDown("start");
    }, 3000);
  }, []);

  return countDown === "start" ? (
    <TestGrid />
  ) : (
    <div className="flex justify-center align-middle items-center w-screen text-9xl">
      {countDown}
    </div>
  );
};

export default Test;
