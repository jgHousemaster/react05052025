import React, { useState } from 'react'
import Text from './Text';

function UseEffect() {
    const [showText, setShowText] = useState(false);

  return (
    <div>UseEffect<br/>
    <button onClick={() => {
        setShowText(!showText);
    }}>{showText ? "Hide Text" : "Show Text"}</button>

    {showText && <Text />}
    </div>
  )
}

export default UseEffect