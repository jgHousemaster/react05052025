import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [info, setInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const userValue = {
    info,
    setInfo,
    isAuth,
    setIsAuth,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};

function ContextAPI() {
  const [name, setName] = useState("hh");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <div>
        ContextAPI
        <Child />
      </div>
    </AppContext.Provider>
  );
}

const Child = () => {
  const { name, setName } = useContext(AppContext);

  return (
    <div>
      Child
      <div>{name}</div>
    </div>
  );
};

export default ContextAPI;
