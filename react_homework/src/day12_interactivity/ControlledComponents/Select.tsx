import { useState } from "react"

export default function Select() {
  const [age, setAge] = useState("");
  const ages = ["Ten", "Twenty", "Thirty"];
  function handleSelect(e) {
    setAge(e.target.value);
  }

  return (
    <div>Select<br/>
    <select value={age} onChange={handleSelect}>
      <option value=""></option>
      {ages.map((curAge) => {
        return <option value={curAge}>{curAge}</option>
      })}
    </select>
    <br/>So you are <b>{age ? age : "???"}</b> years old.
    </div>
  )
}
