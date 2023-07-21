import React from "react";
import useRunning from "../../hooks/useRunning";

const Running_clock = () => {
  const { runnerTime } = useRunning("bn-BD");

  return (
    <div>
      <h1>{runnerTime}</h1>
    </div>
  );
};

export default Running_clock;
