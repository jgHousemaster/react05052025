import React from "react";

function Child(props) {
  console.log("child re-rendered");
  return <div className="child">child</div>;
}

export default React.memo(Child);
