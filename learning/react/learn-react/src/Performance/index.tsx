import React, { useMemo, useState } from "react";
import Child from "./Child";
import "./performance.css";

const Performance = () => {
  console.log("parent re-rendered");
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "Bob" });
  const obj = useMemo(() => {
    return {};
  }, []);
  return (
    <div>
      Performance
      <div className="parent">
        Parent
        <br />
        <button onClick={() => setCount((pre) => pre + 1)}>
          Parent Count: {count}
        </button>
        <div>
          <input
            value={person.name}
            onChange={(e) =>
              setPerson((pre) => {
                return { ...pre, name: e.target.value };
              })
            }
          />
        </div>
        <Child obj={obj} />
      </div>
    </div>
  );
};

export default Performance;
