import React, { useState } from 'react'

function State() {
    const [car, setCar] = useState({year:2024, make: "Ford", model: "Mustang"});

    function handleYearChange(e) {
        setCar(c => ({...c, year: e.target.value}));

    }

    function handleMakeChange(e) {
        setCar(c => ({...c, make: e.target.value}));
    }

    function handleModelChange(e) {
        setCar(c => ({...c, model: e.target.value}));
    }

  return (
    <div>State
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange} /> <br/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/> <br/><br/>
    </div>
  )
}

export default State