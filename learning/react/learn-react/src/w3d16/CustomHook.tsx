import React, { useState } from 'react'
import { useToggle } from './useToggle';
import { useCounter } from './useCounter';

function CustomHook() {
    const [isVisible, toggle] = useToggle(false);
    const {counter, increase, decrease, reset} = useCounter(0);

  return (
    <div>CustomHook<br/>
    <button onClick={toggle}>
        {isVisible ? "Hide" : "show"}
    </button>
    {isVisible && <h1>Hidden Text</h1>}

    <div>Counter</div>
    <div>{counter}</div>
    <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>RESET</button>
    </div>
    </div>
  )
}

export default CustomHook