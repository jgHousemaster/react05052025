import React, { useEffect, useState } from "react";
import Axios from "axios";

function API() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data.age);
        });
    }

  return (
    <div>
      API
      <br />
      <input placeholder="Ex. Dan..." onChange={(e) => {
        setName(e.target.value);
      }}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Predicted Age: {age}</h1>
    </div>
  );
}

export default API;
