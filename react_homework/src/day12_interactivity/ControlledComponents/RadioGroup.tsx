import { useState } from "react"

export default function RadioGroup() {
  const [gender, setGender] = useState("Female");
  const genderList = ["Female", "Male", "Other"];

  const handleChange = (e) => {
    setGender(e.target.value);
  }

  return (
    <div>RadioGroup<br/>
    {genderList.map((thisGender) => {
      return <label>
        <input type="radio" name="gender" value={thisGender} checked={gender === thisGender} onChange={handleChange} />{thisGender}
      </label>
    })}<br/>
    You selected: <b>{gender}</b>
    </div>
  )
}
