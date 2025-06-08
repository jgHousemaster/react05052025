import React, { useState, useRef, useEffect } from 'react'

function UseRef() {
    const [name, setName] = useState("");
    const renderCount = useRef(1);
    const inputRef = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })


  return (
    <div>UseRef<br/>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <div>I rendered {renderCount.current} times</div>
    <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default UseRef