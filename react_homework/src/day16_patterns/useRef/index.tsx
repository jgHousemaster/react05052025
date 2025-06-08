import React, {useEffect, useRef, useState} from 'react'

function Login() {
    const userName = useRef();
    const password = useRef();
    const [info, setInfo] = useState("");

    useEffect(() => {
        userName.current.focus();
    }, [])
  return (
    <div>Login<br/>
    <label>Username: <input type='text' ref={userName}/></label>
    <br/>
    <label>Password: <input type='password' ref={password}/></label>
    <br/>
    <button onClick={() => {
        setInfo(`Username: ${userName.current.value}, Password: ${password.current.value}`)
    }}>Log In</button>
    <button onClick={() => {userName.current.focus()}}>Focus</button>
    <p>{info}</p>
    </div>
  )
}

export default Login