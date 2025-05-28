import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange(e) {
    setIsChecked(e.target.checked)
  }

  return <div>Checkbox<br/>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange}/> Label  
      {isChecked ? " ✅" : " ❎"}
    </label>
  </div>;
}
