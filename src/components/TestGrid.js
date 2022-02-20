import React from "react";
import TestBox from "./TestBox";
import { useEffect, useState } from "react";

const TestGrid = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const rangeCopy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const getIDRep = (num) => {
    if (num < 46) {
      return num % 16;
    } else {
      return 16;
    }
  };
  const [boxIDs, setBoxIDs] = useState(shuffle(rangeCopy));
  const [boxScores, setBoxScores] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
  });
  const [selectedID, setSelectedID] = useState(0);

  useEffect(() => {
    const secInterval = setInterval(() => {
      setSelectedID((selectedID) => selectedID + 1);
    }, 5000);
    return () => clearInterval(secInterval);
  }, []);

  return (
    <div className="grid grid-cols-4 w-screen">
      {range.map((r) => (
        <TestBox
          className={"box" + r}
          key={r}
          boxID={boxIDs[r]}
          selectedValue={getIDRep(selectedID)}
          setBoxScores={setBoxScores}
          boxScores={boxScores}
          r={r}
        />
      ))}
    </div>
  );
};

export default TestGrid;
