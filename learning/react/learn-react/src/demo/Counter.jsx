import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      setTimer(newTimer);
    }
  };

  const handleStop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  return (
    <div>
      Counter
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p>{counter}</p>
    </div>
  );
}

export default Counter;
