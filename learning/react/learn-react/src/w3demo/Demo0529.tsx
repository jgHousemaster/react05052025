import React, { useState } from "react";

function Demo0529() {
  const [opened, handlers] = useDisclosure(false);
  return (
    <div>
      Demo0529
      <br />
      <div>
        <button onClick={handlers.open}>Open</button>
        <button onClick={handlers.close}>Close</button>
        <button onClick={handlers.toggle}>Toggle</button>
      </div>
      <div>
        The Door is{" "}
        {opened ? (
          <b style={{ color: "green" }}>OPENED</b>
        ) : (
          <b style={{ color: "red" }}>CLOSED</b>
        )}
      </div>
    </div>
  );
}

function useDisclosure(init = false) {
  const [value, setValue] = useState(init);
  const open = () => {
    setValue(true);
  };
  const close = () => {
    setValue(false);
  };
  const toggle = () => {
    setValue((pre) => !pre);
  };
  const handlers = { open, close, toggle };
  return [value, handlers];
}

export default Demo0529;
