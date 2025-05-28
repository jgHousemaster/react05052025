import React, { useEffect } from "react";
import { useState } from "react";

function CounterTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  return (
    <div>
      CounterTimer
      <br />
      {running ? (
        <button onClick={() => setRunning(false)}>Pause</button>
      ) : (
        <button onClick={() => setRunning(true)}>Start</button>
      )}
      <h2>Count: {count}</h2>
    </div>
  );
}

export default CounterTimer;
