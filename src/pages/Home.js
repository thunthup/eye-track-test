import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleSpace = (e) => {
    if (e.key === " ") {
      navigate("/Test");
    }
  };

  return (
    <input
      className="m-auto startBtn text-2xl focus:outline-0 text-center w-screen h-screen"
      autoFocus={true}
      onKeyDown={handleSpace}
      type="text"
      value="Press space to start"
    ></input>
  );
}

export default Home;
