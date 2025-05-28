import React, { useEffect, useState } from 'react'

function Text() {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        return () => {
            console.log("COMPONENT UNMOUNTED");            
        }
    }, []);

  return (
    <div>
        <input onChange={(e) => {
        setText(e.target.value);
    }}/>
    <p><b>{text}</b></p>
    </div>
  )
}

export default Text